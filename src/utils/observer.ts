/**
 * 监听浏览器的 location href 变化，并在 URL 变化时调用提供的回调函数。
 *
 * @param {function} callback - 当 URL 变化时调用的函数。它接受两个参数：`previous` 是上一个 URL，`current` 是当前 URL。
 * @return {void} 该函数没有返回值。
 */
export function watchLocationHref(callback:(previous: string, current: string) => void):void {
    // 检测浏览器是否支持 MutationObserver
    const MutationObserver =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver;

    // 获取当前页面的 URL
    const getCurrentURL = () => location.href;
    getCurrentURL.previousURL = getCurrentURL();

    // 创建 MutationObserver 实例，监听 DOM 变化
    const observer = new MutationObserver(() => {
        const currentURL = getCurrentURL();

        // 如果页面的 URL 发生变化
        if (currentURL !== getCurrentURL.previousURL) {
            getCurrentURL.previousURL = currentURL;
            callback(getCurrentURL.previousURL, currentURL);
        }
    });

    // 配置 MutationObserver
    const config = {
        characterData: true,
        subtree: true,
        childList: true,
        attributeFilter: ['value', 'placeholder', 'aria-label', 'data-confirm'], // 仅观察特定属性变化
    };

    // 开始观察 document.body 的变化
    observer.observe(document.body, config);
}