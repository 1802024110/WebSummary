import { GM_xmlhttpRequest} from 'vite-plugin-monkey/dist/client';

export class ChatGpt{
    baseUrl:string;
    token: string;
    prompt: string;
    model:string;
    headers: Record<string, string>;

    constructor({
                    baseUrl = "https://api.openai.com",
                    token = '',
                    prompt= '',
                    model = '',
                } : {
        baseUrl?: string;
        token?: string;
        prompt?: string;
        model?: string;
    }) {
        this.baseUrl = baseUrl;
        this.token = token;
        this.prompt = prompt;
        this.model =  model;
        this.headers = {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                    "Content-Type": "application/json",
                }
    }

    sendChat(msg:string){
        const msgList = [
            {"role": "system", "content": "这是GitHub issues页面，帮我用中文给我解释，如果有代码最好带上代码"},
        ]

        if(msg.length>=4096){
            // 先添加第一行
            // 以4096个字符为一行
            for (let i = 0; i < msg.length; i += 4096) {
                msgList.push({"role": "user", "content": msg.slice(i, i + 4096)})
            }

            GM_xmlhttpRequest({
                url: this.baseUrl + '/v1/chat/completions',
                method: "POST",
                headers: this.headers,
                data: JSON.stringify({
                    "model": this.model,
                    "messages": msgList,
                    "stream": false
                }),
                onload: (response) => {
                    if (response.status === 200) {
                        const data = JSON.parse(response.responseText);
                        const role = data.choices[0].message['role'];
                        const content = data.choices[0].message['content']
                        msgList.push({"role": role, "content": content})
                    }
                    console.log(response)
                    console.log(msgList);
                },
                onerror: (response) => {

                },
            });
        }

        // console.log(msgList);

    }

    // 获得模型列表
    getModelList() : Promise<any> {
        return new Promise((resolve,reject)=>{
            GM_xmlhttpRequest({
                url: this.baseUrl + '/v1/models',
                method: "GET",
                headers: this.headers,
                onload: (response) => {
                    if (response.status === 200) {
                        resolve(JSON.parse(response.responseText));
                    }else {
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

