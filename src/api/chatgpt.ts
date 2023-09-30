import {GM_xmlhttpRequest} from 'vite-plugin-monkey/dist/client';
import {encode} from "gpt-tokenizer";

export class ChatGpt {
    baseUrl: string;
    token: string;
    prompt: string;
    model: string;
    headers: Record<string, string>;

    constructor({
                    baseUrl = "https://api.openai.com",
                    token = '',
                    prompt = '',
                    model = '',
                }: {
        baseUrl?: string;
        token?: string;
        prompt?: string;
        model?: string;
    }) {
        this.baseUrl = baseUrl;
        this.token = token;
        this.prompt = prompt;
        this.model = model;
        this.headers = {
            Accept: "application/json",
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
        }
    }

    sendChat(question: string) {
        const tokens = encode(question);
        // 如果超过4096个token
        if (tokens.length > 4096) {
            return Promise.reject("超过4096个token");
        }

        const msgList = [
            {
                "role": "system",
                "content": "帮我在github issues中分析出问题的答案，不需要问题详情，直接返回给我中文答案，如果有代码同样加上中文注释返回给我"
            },
            {"role": "user", "content": question},
        ]

        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                url: this.baseUrl + '/v1/chat/completions',
                method: "POST",
                headers: this.headers,
                data: JSON.stringify({
                    "model": this.model,
                    "messages": msgList,
                    "stream": false,
                    "functions": [
                        {
                            "name": "msgCard",
                            "description": "这个函数用于渲染对话，解释两个参数，分别是对话内容总结标题和你帮我总结后的内容",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "本次会话内容总结的标题"
                                    },
                                    "content": {
                                        "type": "string",
                                        "description": "本次会话内容"
                                    }
                                }
                            }
                        }
                    ],
                    "function_call": {"name": "msgCard"}
                }),
                onload: (response) => {
                    if (response.status === 200) {
                        const responseJson = JSON.parse(response.responseText);
                        // if(responseJson.status!=200){
                        //     resolve(responseJson.statusText);
                        // }
                        const msgJson = JSON.parse(responseJson.choices[0].message.function_call.arguments);
                        // 当前总共消耗token
                        const totalTokens = responseJson.usage.total_tokens;
                        msgList.push({"role": "assistant", "content": msgJson});
                        resolve([msgList, totalTokens]);
                    }
                },
                onerror: (response) => {
                },
            });

        })
    }

    sendChatWithSteam(question:string,callback: (responseJson: Record<string, any>) => void) {
        // const tokens = encode(msg);
        // // 如果超过4096个token
        // if (tokens.length > 4096) {
        //     return Promise.reject("超过4096个token");
        // }

        const msgList = [
            {
                "role": "system",
                "content": "帮我在github issues中分析出问题的答案，不需要问题详情，直接返回给我中文答案，如果有代码同样加上中文注释返回给我"
            },
            {"role": "user", "content": question},
        ]

        GM_xmlhttpRequest({
            url: this.baseUrl + '/v1/chat/completions',
            method: "POST",
            headers: this.headers,
            data: JSON.stringify({
                "model": this.model,
                "messages": msgList,
                "stream": true,
                "functions": [
                    {
                        "name": "msgCard",
                        "description": "这个函数用于渲染对话，解释两个参数，分别是对话内容总结标题和你帮我总结后的内容",
                        "parameters": {
                            "type": "object",
                            "properties": {
                                "title": {
                                    "type": "string",
                                    "description": "本次会话内容总结的标题"
                                },
                                "content": {
                                    "type": "string",
                                    "description": "本次会话内容"
                                }
                            }
                        }
                    }
                ],
                "function_call": {"name": "msgCard"}
            }),
            onprogress: (steam) => {
                if (steam.status != 200) {
                    return []
                }
                const jsons = steam.responseText
                    // 複数格納されていることもあるため split する
                    .split('data:')
                    // data を json parse する
                    // [DONE] は最後の行にくる
                    .map((data) => {
                        const trimData = data.trim();
                        if (trimData === '') return undefined;
                        if (trimData === '[DONE]') return undefined;
                        return JSON.parse(data.trim());
                    })
                    .filter((data) => data);
                callback(jsons)
            },
            responseType: "stream"
        });
    }

    // 获得模型列表
    getModelList(): Promise<any> {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                url: this.baseUrl + '/v1/models',
                method: "GET",
                headers: this.headers,
                onload: (response) => {
                    if (response.status === 200) {
                        resolve(JSON.parse(response.responseText));
                    } else {
                        reject(response);
                    }
                },
                onerror: (response) => {
                    reject(response);
                },
            });
        });

    }
}

