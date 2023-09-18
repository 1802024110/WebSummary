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
            {"role": "system", "content": "You are a helpful assistant."},
        ]



        // if(msg.length>=4096){
        //     // 以4096个字符为一行
        //     for (let i = 0; i < msg.length; i += 4096) {
        //         msgList.push(msg.substring(i, i + 4096))
        //     }
        //     // 最后一行内容固定为
        //     msgList.push("@@发送完毕@@")
        // }else {
        //     msgList.push(msg)
        // }
        //
        //
        // return new Promise((resolve, reject) => {
        //     GM_xmlhttpRequest({
        //         url: this.baseUrl + '/v1/chat/completions',
        //         method: "POST",
        //         headers: this.headers,
        //         data: JSON.stringify({
        //             "model": this.model,
        //             "messages": msgList,
        //             "stream": false
        //         }),
        //         onload: (response) => {
        //             if (response.status === 200) {
        //                 resolve(JSON.parse(response.responseText));
        //             }else {
        //                 reject(response);
        //             }
        //         },
        //         onerror: (response) => {
        //             reject(response);
        //         },
        //     });
        // })
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

