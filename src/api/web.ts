// 请求网站源html代码
import {GM_xmlhttpRequest} from "vite-plugin-monkey/dist/client";

export function getHtmlSource(url:string): Promise<string>  {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url: url,
            method: "GET",
            onload: (response : any ) => {
                if (response.status === 200) {
                    // 使用正则表达式提取 <body> 标签之间的内容
                    const bodyContent = response.responseText.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() as string;
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

export function getGithubIssuesContent(url:string):Promise<string> {
    // https://github.com/tailwindlabs/tailwindcss/issues/9143
    // 先判断是否是github issues详情页
    const regex = /^https:\/\/github\.com\/[^\/]+\/[^\/]+\/issues\/\d+$/;
    if (!regex.test(url)) return Promise.reject('不是github issues详情页');
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url: url,
            method: "GET",
            onload: (response : any ) => {
                if (response.status === 200) {
                    const parser = new DOMParser();
                    const html = parser.parseFromString(response.responseText, 'text/html');
                    // 获得bdi标签的内容
                    const title = html.getElementsByTagName('bdi')[0].innerText;
                    // 获得class 为d-block comment-body markdown-body  js-comment-body
                    const contentTds = html.getElementsByClassName('d-block comment-body markdown-body  js-comment-body');
                    const contents = [];
                    for (let i = 0; i < contentTds.length; i++) {
                        contents.push(contentTds[i].textContent?.trim());
                    }
                    resolve("问题" + title + '\n' +"评论"+ contents.join('\n'));
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
