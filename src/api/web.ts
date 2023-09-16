// 请求网站源html代码
import {GM_xmlhttpRequest} from "vite-plugin-monkey/dist/client";

export function getHtmlSource(url:string) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url: url,
            method: "GET",
            onload: (response) => {
                if (response.status === 200) {
                    // 使用正则表达式提取 <body> 标签之间的内容
                    const bodyContent = response.responseText.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
                    resolve(bodyContent);
                }else {
                    reject(response);
                }
            },
            onerror: (response) => {
                reject(response);
            }
        })
    });
}