// ==UserScript==
// @name         web_summary
// @namespace    007666.xyz
// @version      1.1.1
// @author       monkey
// @description  Github Issue 总结
// @license      Apache License 2.0
// @icon         https://jsdelivr.nodream.cf/gh/1802024110/GitHub_Oss@main/img/博客插件github_issue总结.png
// @match        *://github.com/*/*/issues
// @require      https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.prod.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(r=>{if(typeof GM_addStyle=="function"){GM_addStyle(r);return}const a=document.createElement("style");a.textContent=r,document.head.append(a)})(` a.var--box,.var--box *{box-sizing:border-box}.var--relative{position:relative}.var--absolute{position:absolute}.var--hidden{overflow:hidden}.var--lock{overflow:hidden!important}.var--block{display:block}.var--ellipsis{overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.var--inline-block{display:inline-block}.var--flex{display:flex}.var--inline-flex{display:inline-flex}:root{--font-size-xs: 10px;--font-size-sm: 12px;--font-size-md: 14px;--font-size-lg: 16px;--icon-size-xs: 16px;--icon-size-sm: 18px;--icon-size-md: 20px;--icon-size-lg: 22px;--color-body: #fff;--color-text: #333;--color-primary: #3a7afe;--color-info: #00afef;--color-success: #00c48f;--color-warning: #ff9f00;--color-danger: #f44336;--color-disabled: #e0e0e0;--color-text-disabled: #aaa;--opacity-disabled: .6;--cubic-bezier: cubic-bezier(.25, .8, .5, 1);--shadow-key-umbra-opacity: rgba(0, 0, 0, .2);--shadow-key-penumbra-opacity: rgba(0, 0, 0, .14);--shadow-key-ambient-opacity: rgba(0, 0, 0, .12)}.var-elevation--0{box-shadow:0 0 0 0 var(--shadow-key-umbra-opacity),0 0 0 0 var(--shadow-key-penumbra-opacity),0 0 0 0 var(--shadow-key-ambient-opacity)}.var-elevation--1{box-shadow:0 2px 1px -1px var(--shadow-key-umbra-opacity),0 1px 1px 0 var(--shadow-key-penumbra-opacity),0 1px 3px 0 var(--shadow-key-ambient-opacity)}.var-elevation--2{box-shadow:0 3px 1px -2px var(--shadow-key-umbra-opacity),0 2px 2px 0 var(--shadow-key-penumbra-opacity),0 1px 5px 0 var(--shadow-key-ambient-opacity)}.var-elevation--3{box-shadow:0 3px 3px -2px var(--shadow-key-umbra-opacity),0 3px 4px 0 var(--shadow-key-penumbra-opacity),0 1px 8px 0 var(--shadow-key-ambient-opacity)}.var-elevation--4{box-shadow:0 2px 4px -1px var(--shadow-key-umbra-opacity),0 4px 5px 0 var(--shadow-key-penumbra-opacity),0 1px 10px 0 var(--shadow-key-ambient-opacity)}.var-elevation--5{box-shadow:0 3px 5px -1px var(--shadow-key-umbra-opacity),0 5px 8px 0 var(--shadow-key-penumbra-opacity),0 1px 14px 0 var(--shadow-key-ambient-opacity)}.var-elevation--6{box-shadow:0 3px 5px -1px var(--shadow-key-umbra-opacity),0 6px 10px 0 var(--shadow-key-penumbra-opacity),0 1px 18px 0 var(--shadow-key-ambient-opacity)}.var-elevation--7{box-shadow:0 4px 5px -2px var(--shadow-key-umbra-opacity),0 7px 10px 1px var(--shadow-key-penumbra-opacity),0 2px 16px 1px var(--shadow-key-ambient-opacity)}.var-elevation--8{box-shadow:0 5px 5px -3px var(--shadow-key-umbra-opacity),0 8px 10px 1px var(--shadow-key-penumbra-opacity),0 3px 14px 2px var(--shadow-key-ambient-opacity)}.var-elevation--9{box-shadow:0 5px 6px -3px var(--shadow-key-umbra-opacity),0 9px 12px 1px var(--shadow-key-penumbra-opacity),0 3px 16px 2px var(--shadow-key-ambient-opacity)}.var-elevation--10{box-shadow:0 6px 6px -3px var(--shadow-key-umbra-opacity),0 10px 14px 1px var(--shadow-key-penumbra-opacity),0 4px 18px 3px var(--shadow-key-ambient-opacity)}.var-elevation--11{box-shadow:0 6px 7px -4px var(--shadow-key-umbra-opacity),0 11px 15px 1px var(--shadow-key-penumbra-opacity),0 4px 20px 3px var(--shadow-key-ambient-opacity)}.var-elevation--12{box-shadow:0 7px 8px -4px var(--shadow-key-umbra-opacity),0 12px 17px 2px var(--shadow-key-penumbra-opacity),0 5px 22px 4px var(--shadow-key-ambient-opacity)}.var-elevation--13{box-shadow:0 7px 8px -4px var(--shadow-key-umbra-opacity),0 13px 19px 2px var(--shadow-key-penumbra-opacity),0 5px 24px 4px var(--shadow-key-ambient-opacity)}.var-elevation--14{box-shadow:0 7px 9px -4px var(--shadow-key-umbra-opacity),0 14px 21px 2px var(--shadow-key-penumbra-opacity),0 5px 26px 4px var(--shadow-key-ambient-opacity)}.var-elevation--15{box-shadow:0 8px 9px -5px var(--shadow-key-umbra-opacity),0 15px 22px 2px var(--shadow-key-penumbra-opacity),0 6px 28px 5px var(--shadow-key-ambient-opacity)}.var-elevation--16{box-shadow:0 8px 10px -5px var(--shadow-key-umbra-opacity),0 16px 24px 2px var(--shadow-key-penumbra-opacity),0 6px 30px 5px var(--shadow-key-ambient-opacity)}.var-elevation--17{box-shadow:0 8px 11px -5px var(--shadow-key-umbra-opacity),0 17px 26px 2px var(--shadow-key-penumbra-opacity),0 6px 32px 5px var(--shadow-key-ambient-opacity)}.var-elevation--18{box-shadow:0 9px 11px -5px var(--shadow-key-umbra-opacity),0 18px 28px 2px var(--shadow-key-penumbra-opacity),0 7px 34px 6px var(--shadow-key-ambient-opacity)}.var-elevation--19{box-shadow:0 9px 12px -6px var(--shadow-key-umbra-opacity),0 19px 29px 2px var(--shadow-key-penumbra-opacity),0 7px 36px 6px var(--shadow-key-ambient-opacity)}.var-elevation--20{box-shadow:0 10px 13px -6px var(--shadow-key-umbra-opacity),0 20px 31px 3px var(--shadow-key-penumbra-opacity),0 8px 38px 7px var(--shadow-key-ambient-opacity)}.var-elevation--21{box-shadow:0 10px 13px -6px var(--shadow-key-umbra-opacity),0 21px 33px 3px var(--shadow-key-penumbra-opacity),0 8px 40px 7px var(--shadow-key-ambient-opacity)}.var-elevation--22{box-shadow:0 10px 14px -6px var(--shadow-key-umbra-opacity),0 22px 35px 3px var(--shadow-key-penumbra-opacity),0 8px 42px 7px var(--shadow-key-ambient-opacity)}.var-elevation--23{box-shadow:0 11px 14px -7px var(--shadow-key-umbra-opacity),0 23px 36px 3px var(--shadow-key-penumbra-opacity),0 9px 44px 8px var(--shadow-key-ambient-opacity)}.var-elevation--24{box-shadow:0 11px 15px -7px var(--shadow-key-umbra-opacity),0 24px 38px 3px var(--shadow-key-penumbra-opacity),0 9px 46px 8px var(--shadow-key-ambient-opacity)}:root{--ripple-cubic-bezier: cubic-bezier(.68, .01, .62, .6);--ripple-color: currentColor}.var-ripple{position:absolute;transition:transform .2s var(--ripple-cubic-bezier),opacity .14s linear;top:0;left:0;border-radius:50%;opacity:0;will-change:transform,opacity;pointer-events:none;z-index:100;background-color:var(--ripple-color)}:root{--loading-opacity: .38;--loading-desc-margin: 8px 0 0}.var-loading{--loading-normal-width: 50px;--loading-normal-height: calc(var(--font-size-md) + 2px);--loading-large-width: 64px;--loading-large-height: calc(var(--font-size-lg) + 2px);--loading-small-width: 36px;--loading-small-height: calc(var(--font-size-sm) + 2px);--loading-mini-width: 22px;--loading-mini-height: calc(var(--font-size-xs) + 2px);position:relative}.var-loading__content{position:relative;transition:opacity .3s;opacity:1}.var-loading__content--active{opacity:var(--loading-opacity)}.var-loading__content-mask{position:absolute;left:0;right:0;top:0;bottom:0}.var-loading__body{display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column}.var-loading__inside{position:absolute;left:50%;top:0;transform:translate(-50%);max-height:50vh;z-index:1}.var-loading__description{color:var(--color-primary);margin:var(--loading-desc-margin)}.var-loading__description--large{font-size:var(--font-size-lg)}.var-loading__description--normal{font-size:var(--font-size-md)}.var-loading__description--small{font-size:var(--font-size-sm)}.var-loading__description--mini{font-size:var(--font-size-xs)}.var-loading__circle{display:flex}.var-loading__circle-block{display:inline-block;color:var(--color-primary);animation:circle 1.8s linear infinite}.var-loading__circle-block--large{width:36px;height:36px}.var-loading__circle-block--normal{width:30px;height:30px}.var-loading__circle-block--small{width:24px;height:24px}.var-loading__circle-block--mini{width:18px;height:18px}.var-loading__circle-block svg{display:block;width:100%;height:100%}.var-loading__circle-block svg circle{animation:circular 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}.var-loading__wave{--loading-wave-size-item-width: 5px;--loading-wave-size-item-margin: 5px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.var-loading__wave--large{width:var(--loading-large-width);height:var(--loading-large-height)}.var-loading__wave--normal{width:var(--loading-normal-width);height:var(--loading-normal-height)}.var-loading__wave--small{width:var(--loading-small-width);height:var(--loading-small-height)}.var-loading__wave--mini{width:var(--loading-mini-width);height:var(--loading-mini-height)}.var-loading__wave-item{height:100%;display:inline-block;animation:1.2s ease-in-out infinite wave;background-color:var(--color-primary)}.var-loading__wave-item:nth-child(1){animation-delay:-1.2s;margin-left:0}.var-loading__wave-item:nth-child(2){animation-delay:-1.1s}.var-loading__wave-item:nth-child(3){animation-delay:-1s}.var-loading__wave-item:nth-child(4){animation-delay:-.9s}.var-loading__wave-item:nth-child(5){animation-delay:-.8s}.var-loading__wave-item--large{width:var(--loading-wave-size-item-width);margin-left:var(--loading-wave-size-item-margin)}.var-loading__wave-item--normal{width:calc(var(--loading-wave-size-item-width) - 1px);margin-left:calc(var(--loading-wave-size-item-margin) - 1px)}.var-loading__wave-item--small{width:calc(var(--loading-wave-size-item-width) - 2px);margin-left:calc(var(--loading-wave-size-item-margin) - 2px)}.var-loading__wave-item--mini{width:calc(var(--loading-wave-size-item-width) - 3px);margin-left:calc(var(--loading-wave-size-item-margin) - 3px)}@keyframes wave{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.var-loading__cube{--loading-cube-size-item-width: 10px;--loading-cube-size-item-height: 10px;--loading-cube-size-item-margin: 5px;display:flex;align-items:center;flex-shrink:0}.var-loading__cube--large{width:var(--loading-large-width);height:var(--loading-large-height)}.var-loading__cube--normal{width:var(--loading-normal-width);height:var(--loading-normal-height)}.var-loading__cube--small{width:var(--loading-small-width);height:var(--loading-small-height)}.var-loading__cube--mini{width:var(--loading-mini-width);height:var(--loading-mini-height)}.var-loading__cube-item{display:inline-block;transform-origin:right bottom;animation:1.5s ease infinite cube;background-color:var(--color-primary)}.var-loading__cube-item:nth-child(1){animation-delay:.2s;margin-left:0}.var-loading__cube-item:nth-child(2){animation-delay:.4s}.var-loading__cube-item:nth-child(3){animation-delay:.6s}.var-loading__cube-item:nth-child(4){animation-delay:.8s}.var-loading__cube-item--large{height:var(--loading-cube-size-item-height);width:var(--loading-cube-size-item-width);margin-left:var(--loading-cube-size-item-margin)}.var-loading__cube-item--normal{height:calc(var(--loading-cube-size-item-height) - 2px);width:calc(var(--loading-cube-size-item-width) - 2px);margin-left:calc(var(--loading-cube-size-item-margin) - 1px)}.var-loading__cube-item--small{height:calc(var(--loading-cube-size-item-height) - 4px);width:calc(var(--loading-cube-size-item-width) - 4px);margin-left:calc(var(--loading-cube-size-item-margin) - 2px)}.var-loading__cube-item--mini{height:calc(var(--loading-cube-size-item-height) - 6px);width:calc(var(--loading-cube-size-item-width) - 6px);margin-left:calc(var(--loading-cube-size-item-margin) - 3px)}@keyframes cube{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:rotate(90deg) scale(.3)}}.var-loading__rect{--loading-rect-size-item-width: 8px;--loading-rect-size-item-height: 100%;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;flex-shrink:0}.var-loading__rect--large{width:var(--loading-large-width);height:var(--loading-large-height)}.var-loading__rect--normal{width:var(--loading-normal-width);height:var(--loading-normal-height)}.var-loading__rect--small{width:var(--loading-small-width);height:var(--loading-small-height)}.var-loading__rect--mini{width:var(--loading-mini-width);height:var(--loading-mini-height)}.var-loading__rect-item{animation:2s ease-in-out infinite rect;background-color:var(--color-primary)}.var-loading__rect-item:nth-child(1){animation-delay:1.75s}.var-loading__rect-item:nth-child(2){animation-delay:1.5s}.var-loading__rect-item:nth-child(3){animation-delay:1.25s}.var-loading__rect-item:nth-child(4){animation-delay:1s}.var-loading__rect-item:nth-child(5){animation-delay:.75s}.var-loading__rect-item:nth-child(6){animation-delay:.5s}.var-loading__rect-item:nth-child(7){animation-delay:.25s}.var-loading__rect-item:nth-child(8){animation-delay:0s}.var-loading__rect-item--large{height:var(--loading-rect-size-item-height);width:var(--loading-rect-size-item-width)}.var-loading__rect-item--normal{height:calc(var(--loading-rect-size-item-height) * .9);width:calc(var(--loading-rect-size-item-width) * .8)}.var-loading__rect-item--small{height:calc(var(--loading-rect-size-item-height) * .8);width:calc(var(--loading-rect-size-item-width) * .6)}.var-loading__rect-item--mini{height:calc(var(--loading-rect-size-item-height) * .7);width:calc(var(--loading-rect-size-item-width) * .4)}@keyframes rect{0%{opacity:.3}25%{opacity:1}50%{opacity:.3}65%{opacity:1}to{opacity:.3}}.var-loading__disappear{--loading-disappear-size-item-width: 15px;--loading-disappear-size-item-height: 15px;display:flex;justify-content:space-around;align-items:center;flex-flow:nowrap;flex-shrink:0}.var-loading__disappear--large{width:var(--loading-large-width);height:var(--loading-large-height)}.var-loading__disappear--normal{width:var(--loading-normal-width);height:var(--loading-normal-height)}.var-loading__disappear--small{width:var(--loading-small-width);height:var(--loading-small-height)}.var-loading__disappear--mini{width:var(--loading-mini-width);height:var(--loading-mini-height)}.var-loading__disappear-item{border-radius:50%;animation:.5s ease-in-out infinite alternate disappear;background-color:var(--color-primary)}.var-loading__disappear-item:nth-child(1){animation-delay:-.4s}.var-loading__disappear-item:nth-child(2){animation-delay:-.2s}.var-loading__disappear-item:nth-child(3){animation-delay:0s}.var-loading__disappear-item--large{height:var(--loading-disappear-size-item-height);width:var(--loading-disappear-size-item-width)}.var-loading__disappear-item--normal{height:calc(var(--loading-disappear-size-item-height) * .8);width:calc(var(--loading-disappear-size-item-width) * .8)}.var-loading__disappear-item--small{height:calc(var(--loading-disappear-size-item-height) * .6);width:calc(var(--loading-disappear-size-item-width) * .6)}.var-loading__disappear-item--mini{height:calc(var(--loading-disappear-size-item-height) * .4);width:calc(var(--loading-disappear-size-item-width) * .4)}@keyframes disappear{0%{opacity:1}to{opacity:0}}:root{--button-default-color: #f5f5f5;--button-default-text-color: #555;--button-primary-color: var(--color-primary);--button-danger-color: var(--color-danger);--button-success-color: var(--color-success);--button-warning-color: var(--color-warning);--button-info-color: var(--color-info);--button-disabled-color: var(--color-disabled);--button-disabled-text-color: var(--color-text-disabled);--button-border-radius: 4px;--button-mini-padding: 0 9px;--button-small-padding: 0 11px;--button-normal-padding: 0 15px;--button-large-padding: 0 22px;--button-round-padding: 6px;--button-mini-height: 20px;--button-small-height: 28px;--button-normal-height: 36px;--button-large-height: 44px;--button-mini-font-size: var(--font-size-xs);--button-small-font-size: var(--font-size-sm);--button-normal-font-size: var(--font-size-md);--button-large-font-size: var(--font-size-lg)}.var-button{position:relative;justify-content:center;align-items:center;outline:none;border:none;border-radius:var(--button-border-radius);-webkit-user-select:none;user-select:none;cursor:pointer;font-family:inherit;transition:box-shadow .2s,background-color .25s;will-change:box-shadow;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap}.var-button:active{box-shadow:0 3px 5px -1px var(--shadow-key-umbra-opacity),0 5px 8px 0 var(--shadow-key-penumbra-opacity),0 1px 14px 0 var(--shadow-key-ambient-opacity)}.var-button__content{display:flex;align-items:center;flex-wrap:wrap}.var-button__loading[var-button-cover]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.var-button--default{color:var(--button-default-text-color);background-color:var(--button-default-color)}.var-button--primary{color:#fff;background-color:var(--button-primary-color)}.var-button--info{color:#fff;background-color:var(--button-info-color)}.var-button--success{color:#fff;background-color:var(--button-success-color)}.var-button--warning{color:#fff;background-color:var(--button-warning-color)}.var-button--danger{color:#fff;background-color:var(--button-danger-color)}.var-button--disabled{background-color:var(--button-disabled-color);color:var(--button-disabled-text-color);cursor:not-allowed;box-shadow:none!important}.var-button--block{width:100%}.var-button--text{background-color:transparent}.var-button--text:active{box-shadow:none}.var-button--text-default{color:inherit}.var-button--text-primary{color:var(--button-primary-color)}.var-button--text-info{color:var(--button-info-color)}.var-button--text-success{color:var(--button-success-color)}.var-button--text-warning{color:var(--button-warning-color)}.var-button--text-danger{color:var(--button-danger-color)}.var-button--text-disabled{color:var(--button-disabled-text-color)}.var-button--normal{height:var(--button-normal-height);padding:var(--button-normal-padding);font-size:var(--button-normal-font-size)}.var-button--large{height:var(--button-large-height);padding:var(--button-large-padding);font-size:var(--button-large-font-size)}.var-button--small{height:var(--button-small-height);padding:var(--button-small-padding);font-size:var(--button-small-font-size)}.var-button--mini{height:var(--button-mini-height);padding:var(--button-mini-padding);font-size:var(--button-mini-font-size)}.var-button--round{padding:var(--button-round-padding);border-radius:50%;height:auto}.var-button--outline{border:thin solid currentColor}.var-button--hidden{opacity:0}:root{--card-padding: 0 0 15px 0;--card-background: #fff;--card-outline-color: rgba(0, 0, 0, .12);--card-border-radius: 4px;--card-image-width: 100%;--card-row-image-width: 140px;--card-image-height: 200px;--card-row-height: 140px;--card-title-color: #333;--card-title-font-size: 20px;--card-title-padding: 0 12px;--card-title-margin: 15px 0 0 0;--card-title-row-margin: 12px 0;--card-subtitle-color: rgba(0, 0, 0, .6);--card-subtitle-font-size: 14px;--card-subtitle-padding: 0 12px;--card-subtitle-margin: 10px 0 0 0;--card-subtitle-row-margin: -8px 0 0 0;--card-description-color: rgba(0, 0, 0, .6);--card-description-font-size: 14px;--card-description-margin: 20px 0 0 0;--card-description-padding: 0 13px;--card-footer-padding: 0 12px;--card-footer-right: 13px;--card-footer-bottom: 9px;--card-footer-margin: 30px 0 0 0;--card-line-height: 22px;--card-row-line-height: 1.5;--card-floating-buttons-bottom: 16px;--card-floating-buttons-right: 16px;--card-floating-buttons-color: #fff;--card-close-button-icon-size: 24px;--card-close-button-size: 56px;--card-close-button-primary-color: #212121}.var-card{border-radius:var(--card-border-radius);overflow:hidden;width:100%}.var-card--outline{border:thin solid var(--card-outline-color)}.var-card__floater{display:flex;flex-direction:column;position:static;line-height:var(--card-line-height);background:var(--card-background);transition:background-color .25s,color .25s;transition-timing-function:cubic-bezier(.45,.19,.06,.89)}.var-card__container{padding:var(--card-padding);flex-grow:1;min-width:0}.var-card--layout-row .var-card__floater{min-height:var(--card-row-height);height:100%;flex-direction:row;position:relative;line-height:var(--card-row-line-height)}.var-card__image{width:var(--card-image-width);height:var(--card-image-height);display:block}.var-card--layout-row .var-card__image{width:var(--card-row-image-width);height:auto;display:block;flex-shrink:0}.var-card__title{font-size:var(--card-title-font-size);padding:var(--card-title-padding);margin:var(--card-title-margin);color:var(--card-title-color);word-break:break-word}.var-card--layout-row .var-card__title{max-width:100%;overflow:hidden;margin:var(--card-title-row-margin);text-overflow:ellipsis;white-space:nowrap}.var-card__subtitle{font-size:var(--card-subtitle-font-size);color:var(--card-subtitle-color);padding:var(--card-subtitle-padding);margin:var(--card-subtitle-margin);word-break:break-word}.var-card--layout-row .var-card__subtitle{margin:var(--card-subtitle-row-margin);text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.var-card__description{font-size:var(--card-description-font-size);color:var(--card-description-color);margin:var(--card-description-margin);padding:var(--card-description-padding);word-break:break-all}.var-card__footer{display:flex;justify-content:flex-end;padding:var(--card-footer-padding);margin:var(--card-footer-margin)}.var-card--layout-row .var-card__footer{position:absolute;padding:0;right:var(--card-footer-right);bottom:var(--card-footer-bottom)}.var-card__floating-content{overflow:hidden;transition-timing-function:cubic-bezier(.45,.19,.06,.89)}.var-card__floating-buttons{position:fixed;bottom:var(--card-floating-buttons-bottom);right:var(--card-floating-buttons-right);color:var(--card-floating-buttons-color)}.var-card__close-button[var-card-cover]{padding:var(--card-close-button-padding);width:var(--card-close-button-size);height:var(--card-close-button-size);background-color:var(--card-close-button-primary-color)}.var-card__close-button-icon[var-card-cover]{font-size:var(--card-close-button-icon-size)}:root{--space-size-mini-y: 4px;--space-size-mini-x: 4px;--space-size-small-y: 6px;--space-size-small-x: 6px;--space-size-normal-y: 8px;--space-size-normal-x: 12px;--space-size-large-y: 12px;--space-size-large-x: 20px}.var-space{display:flex}.var-space--inline{display:inline-flex}.var-row{display:flex;flex-wrap:wrap}.var-hover-overlay{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-color:currentColor;opacity:0;transition:opacity .15s;will-change:opacity;pointer-events:none}.var-hover-overlay--hovering{opacity:.15}.var-col{transition:all .25s;display:flex!important}.var-col--span-0{display:none!important}.var-col--span-1{flex:0 0 4.16666667%;max-width:4.16666667%}.var-col--offset-1{margin-left:4.16666667%}.var-col--span-2{flex:0 0 8.33333333%;max-width:8.33333333%}.var-col--offset-2{margin-left:8.33333333%}.var-col--span-3{flex:0 0 12.5%;max-width:12.5%}.var-col--offset-3{margin-left:12.5%}.var-col--span-4{flex:0 0 16.66666667%;max-width:16.66666667%}.var-col--offset-4{margin-left:16.66666667%}.var-col--span-5{flex:0 0 20.83333333%;max-width:20.83333333%}.var-col--offset-5{margin-left:20.83333333%}.var-col--span-6{flex:0 0 25%;max-width:25%}.var-col--offset-6{margin-left:25%}.var-col--span-7{flex:0 0 29.16666667%;max-width:29.16666667%}.var-col--offset-7{margin-left:29.16666667%}.var-col--span-8{flex:0 0 33.33333333%;max-width:33.33333333%}.var-col--offset-8{margin-left:33.33333333%}.var-col--span-9{flex:0 0 37.5%;max-width:37.5%}.var-col--offset-9{margin-left:37.5%}.var-col--span-10{flex:0 0 41.66666667%;max-width:41.66666667%}.var-col--offset-10{margin-left:41.66666667%}.var-col--span-11{flex:0 0 45.83333333%;max-width:45.83333333%}.var-col--offset-11{margin-left:45.83333333%}.var-col--span-12{flex:0 0 50%;max-width:50%}.var-col--offset-12{margin-left:50%}.var-col--span-13{flex:0 0 54.16666667%;max-width:54.16666667%}.var-col--offset-13{margin-left:54.16666667%}.var-col--span-14{flex:0 0 58.33333333%;max-width:58.33333333%}.var-col--offset-14{margin-left:58.33333333%}.var-col--span-15{flex:0 0 62.5%;max-width:62.5%}.var-col--offset-15{margin-left:62.5%}.var-col--span-16{flex:0 0 66.66666667%;max-width:66.66666667%}.var-col--offset-16{margin-left:66.66666667%}.var-col--span-17{flex:0 0 70.83333333%;max-width:70.83333333%}.var-col--offset-17{margin-left:70.83333333%}.var-col--span-18{flex:0 0 75%;max-width:75%}.var-col--offset-18{margin-left:75%}.var-col--span-19{flex:0 0 79.16666667%;max-width:79.16666667%}.var-col--offset-19{margin-left:79.16666667%}.var-col--span-20{flex:0 0 83.33333333%;max-width:83.33333333%}.var-col--offset-20{margin-left:83.33333333%}.var-col--span-21{flex:0 0 87.5%;max-width:87.5%}.var-col--offset-21{margin-left:87.5%}.var-col--span-22{flex:0 0 91.66666667%;max-width:91.66666667%}.var-col--offset-22{margin-left:91.66666667%}.var-col--span-23{flex:0 0 95.83333333%;max-width:95.83333333%}.var-col--offset-23{margin-left:95.83333333%}.var-col--span-24{flex:0 0 100%;max-width:100%}.var-col--offset-24{margin-left:100%}@media only screen and (max-width: 767px){.var-col--span-xs-1{flex:0 0 4.16666667%;max-width:4.16666667%}.var-col--offset-xs-1{margin-left:4.16666667%}.var-col--span-xs-2{flex:0 0 8.33333333%;max-width:8.33333333%}.var-col--offset-xs-2{margin-left:8.33333333%}.var-col--span-xs-3{flex:0 0 12.5%;max-width:12.5%}.var-col--offset-xs-3{margin-left:12.5%}.var-col--span-xs-4{flex:0 0 16.66666667%;max-width:16.66666667%}.var-col--offset-xs-4{margin-left:16.66666667%}.var-col--span-xs-5{flex:0 0 20.83333333%;max-width:20.83333333%}.var-col--offset-xs-5{margin-left:20.83333333%}.var-col--span-xs-6{flex:0 0 25%;max-width:25%}.var-col--offset-xs-6{margin-left:25%}.var-col--span-xs-7{flex:0 0 29.16666667%;max-width:29.16666667%}.var-col--offset-xs-7{margin-left:29.16666667%}.var-col--span-xs-8{flex:0 0 33.33333333%;max-width:33.33333333%}.var-col--offset-xs-8{margin-left:33.33333333%}.var-col--span-xs-9{flex:0 0 37.5%;max-width:37.5%}.var-col--offset-xs-9{margin-left:37.5%}.var-col--span-xs-10{flex:0 0 41.66666667%;max-width:41.66666667%}.var-col--offset-xs-10{margin-left:41.66666667%}.var-col--span-xs-11{flex:0 0 45.83333333%;max-width:45.83333333%}.var-col--offset-xs-11{margin-left:45.83333333%}.var-col--span-xs-12{flex:0 0 50%;max-width:50%}.var-col--offset-xs-12{margin-left:50%}.var-col--span-xs-13{flex:0 0 54.16666667%;max-width:54.16666667%}.var-col--offset-xs-13{margin-left:54.16666667%}.var-col--span-xs-14{flex:0 0 58.33333333%;max-width:58.33333333%}.var-col--offset-xs-14{margin-left:58.33333333%}.var-col--span-xs-15{flex:0 0 62.5%;max-width:62.5%}.var-col--offset-xs-15{margin-left:62.5%}.var-col--span-xs-16{flex:0 0 66.66666667%;max-width:66.66666667%}.var-col--offset-xs-16{margin-left:66.66666667%}.var-col--span-xs-17{flex:0 0 70.83333333%;max-width:70.83333333%}.var-col--offset-xs-17{margin-left:70.83333333%}.var-col--span-xs-18{flex:0 0 75%;max-width:75%}.var-col--offset-xs-18{margin-left:75%}.var-col--span-xs-19{flex:0 0 79.16666667%;max-width:79.16666667%}.var-col--offset-xs-19{margin-left:79.16666667%}.var-col--span-xs-20{flex:0 0 83.33333333%;max-width:83.33333333%}.var-col--offset-xs-20{margin-left:83.33333333%}.var-col--span-xs-21{flex:0 0 87.5%;max-width:87.5%}.var-col--offset-xs-21{margin-left:87.5%}.var-col--span-xs-22{flex:0 0 91.66666667%;max-width:91.66666667%}.var-col--offset-xs-22{margin-left:91.66666667%}.var-col--span-xs-23{flex:0 0 95.83333333%;max-width:95.83333333%}.var-col--offset-xs-23{margin-left:95.83333333%}.var-col--span-xs-24{flex:0 0 100%;max-width:100%}.var-col--offset-xs-24{margin-left:100%}.var-col--span-xs-0{display:none!important}}@media only screen and (min-width: 768px) and (max-width: 991px){.var-col--span-sm-1{flex:0 0 4.16666667%;max-width:4.16666667%}.var-col--offset-sm-1{margin-left:4.16666667%}.var-col--span-sm-2{flex:0 0 8.33333333%;max-width:8.33333333%}.var-col--offset-sm-2{margin-left:8.33333333%}.var-col--span-sm-3{flex:0 0 12.5%;max-width:12.5%}.var-col--offset-sm-3{margin-left:12.5%}.var-col--span-sm-4{flex:0 0 16.66666667%;max-width:16.66666667%}.var-col--offset-sm-4{margin-left:16.66666667%}.var-col--span-sm-5{flex:0 0 20.83333333%;max-width:20.83333333%}.var-col--offset-sm-5{margin-left:20.83333333%}.var-col--span-sm-6{flex:0 0 25%;max-width:25%}.var-col--offset-sm-6{margin-left:25%}.var-col--span-sm-7{flex:0 0 29.16666667%;max-width:29.16666667%}.var-col--offset-sm-7{margin-left:29.16666667%}.var-col--span-sm-8{flex:0 0 33.33333333%;max-width:33.33333333%}.var-col--offset-sm-8{margin-left:33.33333333%}.var-col--span-sm-9{flex:0 0 37.5%;max-width:37.5%}.var-col--offset-sm-9{margin-left:37.5%}.var-col--span-sm-10{flex:0 0 41.66666667%;max-width:41.66666667%}.var-col--offset-sm-10{margin-left:41.66666667%}.var-col--span-sm-11{flex:0 0 45.83333333%;max-width:45.83333333%}.var-col--offset-sm-11{margin-left:45.83333333%}.var-col--span-sm-12{flex:0 0 50%;max-width:50%}.var-col--offset-sm-12{margin-left:50%}.var-col--span-sm-13{flex:0 0 54.16666667%;max-width:54.16666667%}.var-col--offset-sm-13{margin-left:54.16666667%}.var-col--span-sm-14{flex:0 0 58.33333333%;max-width:58.33333333%}.var-col--offset-sm-14{margin-left:58.33333333%}.var-col--span-sm-15{flex:0 0 62.5%;max-width:62.5%}.var-col--offset-sm-15{margin-left:62.5%}.var-col--span-sm-16{flex:0 0 66.66666667%;max-width:66.66666667%}.var-col--offset-sm-16{margin-left:66.66666667%}.var-col--span-sm-17{flex:0 0 70.83333333%;max-width:70.83333333%}.var-col--offset-sm-17{margin-left:70.83333333%}.var-col--span-sm-18{flex:0 0 75%;max-width:75%}.var-col--offset-sm-18{margin-left:75%}.var-col--span-sm-19{flex:0 0 79.16666667%;max-width:79.16666667%}.var-col--offset-sm-19{margin-left:79.16666667%}.var-col--span-sm-20{flex:0 0 83.33333333%;max-width:83.33333333%}.var-col--offset-sm-20{margin-left:83.33333333%}.var-col--span-sm-21{flex:0 0 87.5%;max-width:87.5%}.var-col--offset-sm-21{margin-left:87.5%}.var-col--span-sm-22{flex:0 0 91.66666667%;max-width:91.66666667%}.var-col--offset-sm-22{margin-left:91.66666667%}.var-col--span-sm-23{flex:0 0 95.83333333%;max-width:95.83333333%}.var-col--offset-sm-23{margin-left:95.83333333%}.var-col--span-sm-24{flex:0 0 100%;max-width:100%}.var-col--offset-sm-24{margin-left:100%}.var-col--span-sm-0{display:none!important}}@media only screen and (min-width: 992px) and (max-width: 1199px){.var-col--span-md-1{flex:0 0 4.16666667%;max-width:4.16666667%}.var-col--offset-md-1{margin-left:4.16666667%}.var-col--span-md-2{flex:0 0 8.33333333%;max-width:8.33333333%}.var-col--offset-md-2{margin-left:8.33333333%}.var-col--span-md-3{flex:0 0 12.5%;max-width:12.5%}.var-col--offset-md-3{margin-left:12.5%}.var-col--span-md-4{flex:0 0 16.66666667%;max-width:16.66666667%}.var-col--offset-md-4{margin-left:16.66666667%}.var-col--span-md-5{flex:0 0 20.83333333%;max-width:20.83333333%}.var-col--offset-md-5{margin-left:20.83333333%}.var-col--span-md-6{flex:0 0 25%;max-width:25%}.var-col--offset-md-6{margin-left:25%}.var-col--span-md-7{flex:0 0 29.16666667%;max-width:29.16666667%}.var-col--offset-md-7{margin-left:29.16666667%}.var-col--span-md-8{flex:0 0 33.33333333%;max-width:33.33333333%}.var-col--offset-md-8{margin-left:33.33333333%}.var-col--span-md-9{flex:0 0 37.5%;max-width:37.5%}.var-col--offset-md-9{margin-left:37.5%}.var-col--span-md-10{flex:0 0 41.66666667%;max-width:41.66666667%}.var-col--offset-md-10{margin-left:41.66666667%}.var-col--span-md-11{flex:0 0 45.83333333%;max-width:45.83333333%}.var-col--offset-md-11{margin-left:45.83333333%}.var-col--span-md-12{flex:0 0 50%;max-width:50%}.var-col--offset-md-12{margin-left:50%}.var-col--span-md-13{flex:0 0 54.16666667%;max-width:54.16666667%}.var-col--offset-md-13{margin-left:54.16666667%}.var-col--span-md-14{flex:0 0 58.33333333%;max-width:58.33333333%}.var-col--offset-md-14{margin-left:58.33333333%}.var-col--span-md-15{flex:0 0 62.5%;max-width:62.5%}.var-col--offset-md-15{margin-left:62.5%}.var-col--span-md-16{flex:0 0 66.66666667%;max-width:66.66666667%}.var-col--offset-md-16{margin-left:66.66666667%}.var-col--span-md-17{flex:0 0 70.83333333%;max-width:70.83333333%}.var-col--offset-md-17{margin-left:70.83333333%}.var-col--span-md-18{flex:0 0 75%;max-width:75%}.var-col--offset-md-18{margin-left:75%}.var-col--span-md-19{flex:0 0 79.16666667%;max-width:79.16666667%}.var-col--offset-md-19{margin-left:79.16666667%}.var-col--span-md-20{flex:0 0 83.33333333%;max-width:83.33333333%}.var-col--offset-md-20{margin-left:83.33333333%}.var-col--span-md-21{flex:0 0 87.5%;max-width:87.5%}.var-col--offset-md-21{margin-left:87.5%}.var-col--span-md-22{flex:0 0 91.66666667%;max-width:91.66666667%}.var-col--offset-md-22{margin-left:91.66666667%}.var-col--span-md-23{flex:0 0 95.83333333%;max-width:95.83333333%}.var-col--offset-md-23{margin-left:95.83333333%}.var-col--span-md-24{flex:0 0 100%;max-width:100%}.var-col--offset-md-24{margin-left:100%}.var-col--span-md-0{display:none!important}}@media only screen and (min-width: 1200px) and (max-width: 1919px){.var-col--span-lg-1{flex:0 0 4.16666667%;max-width:4.16666667%}.var-col--offset-lg-1{margin-left:4.16666667%}.var-col--span-lg-2{flex:0 0 8.33333333%;max-width:8.33333333%}.var-col--offset-lg-2{margin-left:8.33333333%}.var-col--span-lg-3{flex:0 0 12.5%;max-width:12.5%}.var-col--offset-lg-3{margin-left:12.5%}.var-col--span-lg-4{flex:0 0 16.66666667%;max-width:16.66666667%}.var-col--offset-lg-4{margin-left:16.66666667%}.var-col--span-lg-5{flex:0 0 20.83333333%;max-width:20.83333333%}.var-col--offset-lg-5{margin-left:20.83333333%}.var-col--span-lg-6{flex:0 0 25%;max-width:25%}.var-col--offset-lg-6{margin-left:25%}.var-col--span-lg-7{flex:0 0 29.16666667%;max-width:29.16666667%}.var-col--offset-lg-7{margin-left:29.16666667%}.var-col--span-lg-8{flex:0 0 33.33333333%;max-width:33.33333333%}.var-col--offset-lg-8{margin-left:33.33333333%}.var-col--span-lg-9{flex:0 0 37.5%;max-width:37.5%}.var-col--offset-lg-9{margin-left:37.5%}.var-col--span-lg-10{flex:0 0 41.66666667%;max-width:41.66666667%}.var-col--offset-lg-10{margin-left:41.66666667%}.var-col--span-lg-11{flex:0 0 45.83333333%;max-width:45.83333333%}.var-col--offset-lg-11{margin-left:45.83333333%}.var-col--span-lg-12{flex:0 0 50%;max-width:50%}.var-col--offset-lg-12{margin-left:50%}.var-col--span-lg-13{flex:0 0 54.16666667%;max-width:54.16666667%}.var-col--offset-lg-13{margin-left:54.16666667%}.var-col--span-lg-14{flex:0 0 58.33333333%;max-width:58.33333333%}.var-col--offset-lg-14{margin-left:58.33333333%}.var-col--span-lg-15{flex:0 0 62.5%;max-width:62.5%}.var-col--offset-lg-15{margin-left:62.5%}.var-col--span-lg-16{flex:0 0 66.66666667%;max-width:66.66666667%}.var-col--offset-lg-16{margin-left:66.66666667%}.var-col--span-lg-17{flex:0 0 70.83333333%;max-width:70.83333333%}.var-col--offset-lg-17{margin-left:70.83333333%}.var-col--span-lg-18{flex:0 0 75%;max-width:75%}.var-col--offset-lg-18{margin-left:75%}.var-col--span-lg-19{flex:0 0 79.16666667%;max-width:79.16666667%}.var-col--offset-lg-19{margin-left:79.16666667%}.var-col--span-lg-20{flex:0 0 83.33333333%;max-width:83.33333333%}.var-col--offset-lg-20{margin-left:83.33333333%}.var-col--span-lg-21{flex:0 0 87.5%;max-width:87.5%}.var-col--offset-lg-21{margin-left:87.5%}.var-col--span-lg-22{flex:0 0 91.66666667%;max-width:91.66666667%}.var-col--offset-lg-22{margin-left:91.66666667%}.var-col--span-lg-23{flex:0 0 95.83333333%;max-width:95.83333333%}.var-col--offset-lg-23{margin-left:95.83333333%}.var-col--span-lg-24{flex:0 0 100%;max-width:100%}.var-col--offset-lg-24{margin-left:100%}.var-col--span-lg-0{display:none!important}}@media only screen and (min-width: 1920px){.var-col--span-xl-0{flex:0 0 0%;max-width:0%}.var-col--offset-xl-0{margin-left:0%}.var-col--span-xl-1{flex:0 0 4.16666667%;max-width:4.16666667%}.var-col--offset-xl-1{margin-left:4.16666667%}.var-col--span-xl-2{flex:0 0 8.33333333%;max-width:8.33333333%}.var-col--offset-xl-2{margin-left:8.33333333%}.var-col--span-xl-3{flex:0 0 12.5%;max-width:12.5%}.var-col--offset-xl-3{margin-left:12.5%}.var-col--span-xl-4{flex:0 0 16.66666667%;max-width:16.66666667%}.var-col--offset-xl-4{margin-left:16.66666667%}.var-col--span-xl-5{flex:0 0 20.83333333%;max-width:20.83333333%}.var-col--offset-xl-5{margin-left:20.83333333%}.var-col--span-xl-6{flex:0 0 25%;max-width:25%}.var-col--offset-xl-6{margin-left:25%}.var-col--span-xl-7{flex:0 0 29.16666667%;max-width:29.16666667%}.var-col--offset-xl-7{margin-left:29.16666667%}.var-col--span-xl-8{flex:0 0 33.33333333%;max-width:33.33333333%}.var-col--offset-xl-8{margin-left:33.33333333%}.var-col--span-xl-9{flex:0 0 37.5%;max-width:37.5%}.var-col--offset-xl-9{margin-left:37.5%}.var-col--span-xl-10{flex:0 0 41.66666667%;max-width:41.66666667%}.var-col--offset-xl-10{margin-left:41.66666667%}.var-col--span-xl-11{flex:0 0 45.83333333%;max-width:45.83333333%}.var-col--offset-xl-11{margin-left:45.83333333%}.var-col--span-xl-12{flex:0 0 50%;max-width:50%}.var-col--offset-xl-12{margin-left:50%}.var-col--span-xl-13{flex:0 0 54.16666667%;max-width:54.16666667%}.var-col--offset-xl-13{margin-left:54.16666667%}.var-col--span-xl-14{flex:0 0 58.33333333%;max-width:58.33333333%}.var-col--offset-xl-14{margin-left:58.33333333%}.var-col--span-xl-15{flex:0 0 62.5%;max-width:62.5%}.var-col--offset-xl-15{margin-left:62.5%}.var-col--span-xl-16{flex:0 0 66.66666667%;max-width:66.66666667%}.var-col--offset-xl-16{margin-left:66.66666667%}.var-col--span-xl-17{flex:0 0 70.83333333%;max-width:70.83333333%}.var-col--offset-xl-17{margin-left:70.83333333%}.var-col--span-xl-18{flex:0 0 75%;max-width:75%}.var-col--offset-xl-18{margin-left:75%}.var-col--span-xl-19{flex:0 0 79.16666667%;max-width:79.16666667%}.var-col--offset-xl-19{margin-left:79.16666667%}.var-col--span-xl-20{flex:0 0 83.33333333%;max-width:83.33333333%}.var-col--offset-xl-20{margin-left:83.33333333%}.var-col--span-xl-21{flex:0 0 87.5%;max-width:87.5%}.var-col--offset-xl-21{margin-left:87.5%}.var-col--span-xl-22{flex:0 0 91.66666667%;max-width:91.66666667%}.var-col--offset-xl-22{margin-left:91.66666667%}.var-col--span-xl-23{flex:0 0 95.83333333%;max-width:95.83333333%}.var-col--offset-xl-23{margin-left:95.83333333%}.var-col--span-xl-24{flex:0 0 100%;max-width:100%}.var-col--offset-xl-24{margin-left:100%}.var-col--span-xl-0{display:none!important}}:root{--tooltip-opacity: .9;--tooltip-border-radius: 4px;--tooltip-font-size: 14px;--tooltip-padding: 8px 16px;--tooltip-default-color: #616161;--tooltip-offset: 10px;--tooltip-primary-color: var(--color-primary);--tooltip-info-color: var(--color-info);--tooltip-success-color: var(--color-success);--tooltip-warning-color: var(--color-warning);--tooltip-danger-color: var(--color-danger)}.var-tooltip{display:inline-block}.var-tooltip-enter-from,.var-tooltip-leave-to{opacity:0;transform:scale(.8)}.var-tooltip-enter-active,.var-tooltip-leave-active{transition-property:opacity,transform;transition-duration:.2s}.var-tooltip__content-container{display:inline-block;text-align:center;border-radius:var(--tooltip-border-radius);font-size:var(--tooltip-font-size);padding:var(--tooltip-padding);opacity:var(--tooltip-opacity);transition:opacity .25s,background-color .25s}.var-tooltip--default{color:#fff;background:var(--tooltip-default-color)}.var-tooltip--primary{color:#fff;background-color:var(--tooltip-primary-color)}.var-tooltip--info{color:#fff;background-color:var(--tooltip-info-color)}.var-tooltip--success{color:#fff;background-color:var(--tooltip-success-color)}.var-tooltip--warning{color:#fff;background-color:var(--tooltip-warning-color)}.var-tooltip--danger{color:#fff;background-color:var(--tooltip-danger-color)}.var-tooltip__tooltip[data-popper-placement=top] .var-tooltip__content-container,.var-tooltip__tooltip[data-popper-placement=top-start] .var-tooltip__content-container,.var-tooltip__tooltip[data-popper-placement=top-end] .var-tooltip__content-container{transform:translateY(calc(-1 * var(--tooltip-offset)))}.var-tooltip__tooltip[data-popper-placement=bottom] .var-tooltip__content-container,.var-tooltip__tooltip[data-popper-placement=bottom-start] .var-tooltip__content-container,.var-tooltip__tooltip[data-popper-placement=bottom-end] .var-tooltip__content-container{transform:translateY(var(--tooltip-offset))}.var-tooltip__tooltip[data-popper-placement=right] .var-tooltip__content-container,.var-tooltip__tooltip[data-popper-placement=right-start] .var-tooltip__content-container,.var-tooltip__tooltip[data-popper-placement=right-end] .var-tooltip__content-container{transform:translate(var(--tooltip-offset))}.var-tooltip__tooltip[data-popper-placement=left] .var-tooltip__content-container,.var-tooltip__tooltip[data-popper-placement=left-start] .var-tooltip__content-container,.var-tooltip__tooltip[data-popper-placement=left-end] .var-tooltip__content-container{transform:translate(calc(-1 * var(--tooltip-offset)))}@font-face{font-family:varlet-icons;src:url(data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzI/skzwAAABjAAAAFZjbWFwS59H6gAAA9wAAAiYZ2x5ZkEcIbIAAA10AAA11GhlYWRhIEB+AAAA4AAAADZoaGVhA8QCPgAAALwAAAAkaG10ePoAAAAAAAHkAAAB+GxvY2ExtyP6AAAMdAAAAP5tYXhwAZcAfgAAARgAAAAgbmFtZQyVRWAAAENIAAACRnBvc3RsHylCAABFkAAAB4UAAQAAAcD/wAAAAgAAAP//AgEAAQAAAAAAAAAAAAAAAAAAAH4AAQAAAAEAAG6D+dhfDzz1AAsCAAAAAAAAAAAAAAAAAAAAAAAAAP/AAgEBwQAAAAgAAgAAAAAAAAABAAAAfgByAA8AAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKADAAPgACREZMVAAObGF0bgAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAEB/AGQAAUAAAFEAWYAAABHAUQBZgAAAPUAGQCEAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAQPAA8SQBwP/AAC4BwQBAAAAAAQAAAAAAAAAAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAAAAAUAAAADAAAALAAAAAQAAAKsAAEAAAAAAaYAAwABAAAALAADAAoAAAKsAAQBegAAABwAEAADAAzwCfAZ8CnwOfBJ8FnwafB58InwmfEJ8RnxJP//AADwAPAQ8CDwMPBA8FDwYPBw8IDwkPEA8RDxIP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAcAC4AQABSAGQAdgCIAJoArAC+ANAA4gD0AAAAAQACAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQBiAGMAZABlAGYAZwBoAGkAagBrAGwAbQBuAG8AcABxAHIAcwB0AHUAdgB3AHgAeQB6AHsAfAB9AAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAXsAAAAAAAAAH0AAPAAAADwAAAAAAEAAPABAADwAQAAAAIAAPACAADwAgAAAAMAAPADAADwAwAAAAQAAPAEAADwBAAAAAUAAPAFAADwBQAAAAYAAPAGAADwBgAAAAcAAPAHAADwBwAAAAgAAPAIAADwCAAAAAkAAPAJAADwCQAAAAoAAPAQAADwEAAAAAsAAPARAADwEQAAAAwAAPASAADwEgAAAA0AAPATAADwEwAAAA4AAPAUAADwFAAAAA8AAPAVAADwFQAAABAAAPAWAADwFgAAABEAAPAXAADwFwAAABIAAPAYAADwGAAAABMAAPAZAADwGQAAABQAAPAgAADwIAAAABUAAPAhAADwIQAAABYAAPAiAADwIgAAABcAAPAjAADwIwAAABgAAPAkAADwJAAAABkAAPAlAADwJQAAABoAAPAmAADwJgAAABsAAPAnAADwJwAAABwAAPAoAADwKAAAAB0AAPApAADwKQAAAB4AAPAwAADwMAAAAB8AAPAxAADwMQAAACAAAPAyAADwMgAAACEAAPAzAADwMwAAACIAAPA0AADwNAAAACMAAPA1AADwNQAAACQAAPA2AADwNgAAACUAAPA3AADwNwAAACYAAPA4AADwOAAAACcAAPA5AADwOQAAACgAAPBAAADwQAAAACkAAPBBAADwQQAAACoAAPBCAADwQgAAACsAAPBDAADwQwAAACwAAPBEAADwRAAAAC0AAPBFAADwRQAAAC4AAPBGAADwRgAAAC8AAPBHAADwRwAAADAAAPBIAADwSAAAADEAAPBJAADwSQAAADIAAPBQAADwUAAAADMAAPBRAADwUQAAADQAAPBSAADwUgAAADUAAPBTAADwUwAAADYAAPBUAADwVAAAADcAAPBVAADwVQAAADgAAPBWAADwVgAAADkAAPBXAADwVwAAADoAAPBYAADwWAAAADsAAPBZAADwWQAAADwAAPBgAADwYAAAAD0AAPBhAADwYQAAAD4AAPBiAADwYgAAAD8AAPBjAADwYwAAAEAAAPBkAADwZAAAAEEAAPBlAADwZQAAAEIAAPBmAADwZgAAAEMAAPBnAADwZwAAAEQAAPBoAADwaAAAAEUAAPBpAADwaQAAAEYAAPBwAADwcAAAAEcAAPBxAADwcQAAAEgAAPByAADwcgAAAEkAAPBzAADwcwAAAEoAAPB0AADwdAAAAEsAAPB1AADwdQAAAEwAAPB2AADwdgAAAE0AAPB3AADwdwAAAE4AAPB4AADweAAAAE8AAPB5AADweQAAAFAAAPCAAADwgAAAAFEAAPCBAADwgQAAAFIAAPCCAADwggAAAFMAAPCDAADwgwAAAFQAAPCEAADwhAAAAFUAAPCFAADwhQAAAFYAAPCGAADwhgAAAFcAAPCHAADwhwAAAFgAAPCIAADwiAAAAFkAAPCJAADwiQAAAFoAAPCQAADwkAAAAFsAAPCRAADwkQAAAFwAAPCSAADwkgAAAF0AAPCTAADwkwAAAF4AAPCUAADwlAAAAF8AAPCVAADwlQAAAGAAAPCWAADwlgAAAGEAAPCXAADwlwAAAGIAAPCYAADwmAAAAGMAAPCZAADwmQAAAGQAAPEAAADxAAAAAGUAAPEBAADxAQAAAGYAAPECAADxAgAAAGcAAPEDAADxAwAAAGgAAPEEAADxBAAAAGkAAPEFAADxBQAAAGoAAPEGAADxBgAAAGsAAPEHAADxBwAAAGwAAPEIAADxCAAAAG0AAPEJAADxCQAAAG4AAPEQAADxEAAAAG8AAPERAADxEQAAAHAAAPESAADxEgAAAHEAAPETAADxEwAAAHIAAPEUAADxFAAAAHMAAPEVAADxFQAAAHQAAPEWAADxFgAAAHUAAPEXAADxFwAAAHYAAPEYAADxGAAAAHcAAPEZAADxGQAAAHgAAPEgAADxIAAAAHkAAPEhAADxIQAAAHoAAPEiAADxIgAAAHsAAPEjAADxIwAAAHwAAPEkAADxJAAAAH0AAAAAACgAYACIAMQA3AD8ASQBWgGAAaoBzgISAkYCdgKkAuQDFgNOA24DoAO4A9gEAAQuBGwEwATiBQoFOAVaBYQFxAYcBpAHPgeWB/4IPgiKCNIJIglUCZ4JxAnwChoKTgpiCoIKtAsCCzQLcgucC9IL8AwiDGAMuAzkDR4NMA1MDWANbg1+DZANog2yDb4Nyg3YDeQN+g4QDnIOjA6wDtwPCg8+D4wPyhAgEK4RNhGsEeYSGBKOEr4S1BMGEzQTqBPcFAYUYhSgFMIVIBVCFXAV+BZUFpgW5Bc0F4wXphfMF+4YHBiSGMYY/hk2GWIZmhnIGggaThp0GqAa6gAAAAIAAP/qAdYBlgAFABYAADcnNxc3FyciDgIUHgIyPgI0LgLVah5Moh6VKk88ICA8T1RPPCAgPE9Vax5Moh+AIDxPVE88ICA8T1RPPCAAAAAAAwAA/+oB1gGWAAwAGQAfAAABIg4BFB4BMj4BNC4BAyIuATQ+ATIeARQOARMHJwcXNwEAOmI5OWJ0Yjk5YjouTy4uT1xPLi5PNI03HlWrAZU5YnRiOTlidGI5/oAuT1xPLi5PXE8uAQmMNx5WqwAAAAMAAP/qAdYBlgADAAcAGAAAASM1MxUjNTMnIg4CFB4CMj4CNC4CARUqKioqFSpPPCAgPE9UTzwgIDxPAQAr1oDAIDxPVE88ICA8T1RPPCAABAAA/+oB1gGWAAMAEAAhACUAABMzNSMTIi4BND4BMh4BFA4BAyIOAhQeAjI+AjQuAgMzNSPrKioVLk8uLk9cTy4uTy4qTzwgIDxPVE88ICA8Tz8qKgEAK/7qLk9cTy4uT1xPLgGAIDxPVE88ICA8T1RPPCD+wIAAAwAAAAAB6wGWAAMABwAKAAAlIzUzFSM1MwUhAwEVKioqKv8AAdbrlWvAK2sBlQAABAAAAAAB6wGWAAIABQAJAA0AAAEDIQMTITcVMzUHFTM1AQDrAdbrof6+jCoqKgGV/msBQP7rwFZWgCsrAAAAAAMAAP/qAdYBlgADAAcAGAAAJSM1MxUjNTMDIg4CFB4CMj4CNC4CARUqKioqFSpPPCAgPE9UTzwgIDxPq4DWKwEVIDxPVE88ICA8T1RPPCAABAAA/+oB1gGWAAMABwAUACEAADczFSM1MxUjNyIOARQeATI+ATQuAQMiLgE0PgEyHgEUDgHrKioqKhU6Yjk5YnRiOTliOi5PLi5PXE8uLk+AK9aA6jlidGI5OWJ0Yjn+gC5PXE8uLk9cTy4AAgAAAAABwQGBAAUAFQAANyc3FzcXNSEiBhURFBYzITI2NRE0JtVqHkyiHv7WEhkZEgEqEhkZVWseTKIfaxkS/tYSGRkSASoSGQAAAAIAAAAAAcABgQASABgAACUhETM1IyIGFREUFjMhMjY9ASMnBxc3JwcBlf7W1dUSGRkSASoSGSvsHmDVHrcrASorGRL+1hIZGRKqFB5g1R63AAAAAAIAAAAAAcEBgQAPABMAAAEhIgYVERQWMyEyNjURNCYHESERAZX+1hIZGRIBKhIZGRL+1gGAGRL+1hIZGRIBKhIZK/7WASoAAAMAAP/qAdYBlgAMAB0AKgAAJSIuATQ+ATIeARQOAQMiDgIUHgIyPgI0LgIHIg4BFB4BMj4BNC4BAQAuTy4uT1xPLi5PLipPPCAgPE9UTzwgIDxPKh0xHR0xOjEdHTEVLk9cTy4uT1xPLgGAIDxPVE88ICA8T1RPPCBqHTE6MR0dMToxHQAAAAACAAD/6gHWAZYAGQAfAAAlFA4BIi4BND4BMzIXNyYjIg4BFB4BMj4BNSUHFzcnBwGrLk9cTy4uTy4YFyEmKjpiOTlidGI5/tQeYNUet8AuTy4uT1xPLgciDzlidGI5OWI6KR5g1R63AAIAAP/qAdYBlgAMAB0AACUiLgE0PgEyHgEUDgEDIg4CFB4CMj4CNC4CAQAuTy4uT1xPLi5PLipPPCAgPE9UTzwgIDxPFS5PXE8uLk9cTy4BgCA8T1RPPCAgPE9UTzwgAAIAAP/qAdYBlgAMABgAAAEyHgEUDgEiLgE0PgEXBycHFwcXNxc3JzcBADpiOTlidGI5OWKHTU0eTU0eTU0eTU0BlTlidGI5OWJ0YjlqTU0eTU0eTU0eTU0AAAAAAwAA/+oB1gGWAAwAGQAlAAAlIi4BND4BMh4BFA4BAyIOARQeATI+ATQuAQ8BJwcXBxc3FzcnNwEALk8uLk9cTy4uTy46Yjk5YnRiOTliAzc3Hjc3Hjc3Hjc3FS5PXE8uLk9cTy4BgDlidGI5OWJ0YjmANzceNzceNzceNzcAAAACAAAAAAHAAYEAEAAcAAABKwEiBhURFBYzITI2NRE0JgMnByc3JzcXNxcHFwGVOfESGRkSASoSGRlaTU0eTU0eTU0eTU0BgBkS/tYSGRkSASoSGf7VTU0eTU0eTU0eTU0AAAAAAwAAAAABwAGBAA8AEwAfAAABISIGFREUFjMhMjY1ETQmAyERIQ8BFwcnByc3JzcXNwGV/tYSGRkSASoSGRkS/tYBKipNTR5NTR5NTR5NTQGAGRL+1hIZGRIBKhIZ/qsBKkhNTR5NTR5NTR5NTQAAAAIAAP/qAdYBlgADABAAACUjNTMnIg4BFB4BMj4BNC4BAWvW1ms6Yjk5YnRiOTliqyrAOWJ0Yjk5YnRiOQAAAAADAAD/6gHWAZYADAAZAB0AACUiLgE0PgEyHgEUDgEDIg4BFB4BMj4BNC4BBzM1IwEALk8uLk9cTy4uTy46Yjk5YnRiOTlipdbWFS5PXE8uLk9cTy4BgDlidGI5OWJ0YjnqKgAAAQAAAAAB1gGWAAkAACUXJzcvAQ8BFwcBAIQjdJk8PJl0I1BQlmUNjY0NZZYAAAAAAgAAAAAB1gGWAAUADwAAJTUfAQcXNy8BDwEXBzcXJwEAJF5HFYWZPDyZdCOEhCN3x1YIPlu0DY2NDWWWUFCWAAIAAAAAAdYBlgAJABMAACUHNyc/AR8BBxc3LwEPARcHNxcnAQBQFUdeJCReRxWFmTw8mXQjhIQjeDFcPQhWVgg9XLQNjY0NZZZQUJYAAAAAAQAA//gB1gGBABsAAAUnJicmJyY1ND4BMzIWFz4BMzIeARUUBwYHBgcBAB9FGysUFx82IBwyEhIyHCA2HxcUKxtFBxw+HCwiJycgNh8YFBQYHzYgJyciLBw+AAACAAD/+AHWAYEACgAmAAABIgYHFTY3NjU0JicyHgEVFAcGBwYPAScmJyYnJjU0PgEzMhYXPgEBYBgpClAdKSsgIDYfFxQrG0UfH0UbKxQXHzYgHDISEjIBVRoV4EgjMiggKisfNiAnJyIsHD4cHD4cLCInJyA2HxgUFBgAAgAA//gB1gGBABoANgAAJQcnJicmJyY1NDYzMhYXMz4BMzIWFRQHBgcGEyIGBy4BIyIOARUUFxYXFh8BNzY3Njc2NTQuAQECAgJAGSgTFSsgGSsIKAgrGSArFRMoGR4cMhISMhwgNh8XFCsbRR8fRRsrFBcfNjQCAjoZKB0hHiAqHBYWHCogHiEdKBkBEhgUFBgfNiAnJyIsHD4cHD4cLCInJyA2HwAAAgAAAAABlgGAAAcAEQAAASMnIwcjFSEBFBY7ATI2NREhAZVKFmoWSgEq/usZEqoSGf8AAWsVFSv+6xIZGRIBAAAAAAADAAAAAAGrAYAAEQAVABkAABMVIxUzERQWOwEyNjURMzUjNQczFSM3MxUjwGsWGRHWERkWa4ArK1UrKwGAFSv+6xIZGRIBFSsVa8DAwAAAAAQAAAAAAasBgAARABUAGQAdAAATFSMVMxEUFjsBMjY1ETM1IzUHMxEjNxUzNTMVMzXAaxYZEdYRGRZrq9bWKysqKwGAFSv+6xIZGRIBFSsVQP7r6sDAwMAAAAAAAgAAAAABwAGBAAMAEwAAJSM1MzchIgYVERQWMyEyNjURNCYBa9bWKv7WEhkZEgEqEhkZqyqrGRL+1hIZGRIBKhIZAAADAAAAAAHBAYEAAwATABcAACURIREBMhYVERQGIyEiJjURNDYzBRUjNQGV/tYBKhIZGRL+1hIZGRIBANYrASr+1gFVGRL+1hIZGRIBKhIZqyoqAAADAAD/6gHWAZYAEAAZACYAACUiJic0NzY3NjIXFhcWFQ4BAzIWFAYiJjQ2NyIOARQeATI+ATQuAQEAJ0QVGBQgHS4dIBQYFUQnGyUlNiUlGzpiOTlidGI5OWImJSATEQ4ICAgIDhETICUBLyU1JiY1JUA5YnRiOTlidGI5AAAAAAUAAP/qAdYBlgAMABQAJgAvADgAAAEiDgEUHgEyPgE0LgEDPgEyFhcGIjcmJyYiBwYHJjU0PgEyHgEVFCciBhQWMjY0JgciJjQ2MhYUBgEAOmI5OWJ0Yjk5YqMHQz5DBy52wxUvJT4lLxUjLk9cTy6rHywsPiwsHw0TExoTEwGVOWJ0Yjk5YnRiOf6lDhgYDiVEGQ4LCw4ZLjkuTy4uTy45uSw+Kys+LGsTGxISGxMAAgAA/+oB0QGWAAgATAAAJSImNDYyFhQGNzY0Jzc+AS8BLgEPASYvATQmKwEiBhUHBgcnJgYPAQYWHwEGFBcHDgEfAR4BPwEWHwEUFjsBMjY1NzY3FxY2PwE2JicBAB8sLD4sLIABAS0DAQIrAQgENRISCAYEVgQGCBISNQQIASsCAQMtAQEtAwECKwEIBDUSEggGBFYEBggTETUECAErAgEDdSw+LCw+LDYMEgwjAwcESgMDAhUOBzgEBQUEOAcOFQIDA0oEBwMjDBIMIwMHBEoDAwIVDgc4BAUFBDgIDRUCAwNKBAcDAAQAAP/qAdEBlgAIABEAUwBxAAABMhYUBiImNDYXIgYUFjI2NCYDIiY1JyYnBwYmLwEmNj8BJzcnLgE/AT4BHwE2PwE0NjsBMhYVFxYXNzYWHwEWBg8BFwcXHgEPAQ4BLwEGDwEUBiMDBwYHJwcXBhcHFzcWHwEzNzY3FzcnNic3JwcmLwEBACMyMkYyMiMSGRkkGRk9BAYIEhI1BAgBKwIBAy0BAS0DAQIrAQgENRISCAYEVgQGCBISNQQIASsCAQMtAQEtAwECKwEIBDUSEggGBDsIJxozEC0NDS0QNBomCCAIJho0EC0NDS0QMxonCAEVMkYyMkYyKhkkGRkkGf8ABQQ4Bw4VAgMDSgQHAyMVFSMDBwRKAwMCFQ4HOAQFBQQ4Bw4VAgMDSgQHAyMVFSMDBwRKAwMCFQ4HOAQFAYA4CB4WHCEmJiIbFh4IODgIHhYbIScmIRwWHgg4AAMAAP/VAasBlgATABwAOAAAATIeARQHBgcGDwEnJicmJyY0PgEXIgYUFjI2NCYTFA4BIi4BNTQ2NxcOARUUHgEyPgE1NCYnNx4BAQAjOyIUEBwUGBQUGBQcEBQiOyMSGRkkGRmZLk9cTy4kHw0RFCI7RjsiFBENHyQBlSI6Qy0jKR4dFxcdHikjLUM6IlUZIxkZIxn+6xgnFxcnGBQjDBMHFAsOGQ4OGQ4LFAcTDCMABAAA/9UBqwGWAA0AIQAqAEQAAAEyFhUUBwYHJicmNTQ2NyIOARUUFxYXMTc2NzY3NjU0LgEHIgYUFjI2NCYTFA4BIi4BNTQ2NxcGFRQeATI+ATU0JzceAQEAIzIbFyMkFhsyIyM6I0AgIBQYFBwQFCM6IxIZGSQZGZkuT1xPLiMfDSQiO0Y7IiYMISQBazIkHzMqLC8oMx4kMioiOyM8XS8iFx0eKSMsICM7IlUZIxkZIxn+6xcoFxcoFxQjDRMSFQ4ZDg4ZDhUSEw0jAAAAAAMAAAAAAdYBlgATACAAKQAAEzM3MxczMhYVERQGIyEiJjURNDYXIg4BFB4BMj4BNC4BBzIWFAYiJjQ2VUArgCtAERkZEf6qERkZvB0xHR0xOjEdHTEdGyUlNiUlAWsqKhkS/wASGRkSAQASGUAdMToxHR0xOjEdKyU2JSU2JQAABAAAAAAB1gGWABMAGwAoADEAAAEjJyMHIyIGFREUFjMhMjY1ETQmAyERMzczFzMHIg4BFB4BMj4BNC4BByImNDYyFhQGAatEJ4AnRBEZGREBVhEZGRH+qlcnWidXqx0xHR0xOjEdHTEdGyUlNiUlAWsqKhkS/wASGRkSAQASGf7VAQArKxUdMToxHR0xOjEdqyU2JSU2JQADAAD/6gHBAZYACAAmAC8AACUiBhQWMjY0JgEVMxcHBhUUFjMhNSMiJjQ/ATMyNj8BNjU0JiMhJxMiBhQWMjY0JgFrEhkZIxkZ/pkrTR0FGREBAPcCAwETnwwUBUwDDQj+xBQ6ERkZIxkZQBkjGRkjGQFVKqI1CQsSGSsDBAEjDAqKBgQJDSr+qxkjGRkjGQAEAAD/6gHBAZYACAAmAC8AMwAAJTIWFAYiJjQ2ATMXITIWFRQPAQ4BKwEPARQWOwEVISImNTQ/AScjEzIWFAYiJjQ2PwEhFwFrERkZIxkZ/rxGFAE8CA0DTAUUDJ8TAQMC9/8AERkFHU0rgBIZGSMZGdE8/vIyQBkjGRkjGQFVKg0JBAaKCgwjAwIDKxkSCwk1ov7VGSMZGSMZlWtrAAAAAQAAAAABwQGBACAAADceARc3NhcWMzIWHQEUBiMiJyYnJjU0NjsBMhYVFBcWB40XSS0vCQ0kKAgNDQhjVFIwMg0ISwkMDAQJ2i1JFy8JBAwMCUsIDTIwUlRjCA0NCCgkDQkAAAMAAAAAAcABgQAiACgALgAAJSInIyIPAS4BJzc+AScmNTQmKwEiBhUUFxYXFjMyNj0BNCYlMxYXByYBJic3FjMBqyojBwgGLy5JFi8FAgMLDQhLCA0xMFNUYwgNDf64IAIIGQ4BJyYrGiIVdQ0GLxhJLC8EDAUnJggNDQhjVFMwMQ0ISwgN4BcgGiv+/AMOGQgAAAACAAAAAAHAAYEABAAUAAA3FzcXIQURNCYjISIGFREUFjMhMja1Nkpg/tYBVRkS/tYSGRkSASoSGaBAYIAVASoSGRkS/tYSGRkAAAAAAwAAAAABwAGBAAMAEwAYAAAlIREhNSEiBhURFBYzITI2NRE0Jg8BJwczAZX+1gEq/tYSGRkSASoSGRl9Oyo66isBKisZEv7WEhkZEgEqEhnGTDNMAAAAAAIAAP/VAcABlgATABkAACUVITU3NTQ2NzU0NjIWHQEeAR0BBxQGIiY1AcD+gCs7LxkkGS87ahkkGSsWFiqAMk8OBxEZGREHDk8ygFUSGRkSAAAAAAMAAP/qAasBlgAHABsAIgAAJSM1NDYyFhUXNTQmJzU0JiIGHQEOAR0BBxUhNQcyNjUjFBYBVcA4UDgrPC8SGxMuPCsBa7YSGVUZVYsoODgodXUxSwsODhISDg4LSzF1KxUVVRkRERkAAQAAAAAB1gGAAAoAADc1MxUzNTMnBzMV1VZqQNXVQBWAgKvAwKsAAAIAAAAAAdYBgAAIABMAAAEXFSM1IxUjNTcHMxUzNTMVMzUzAQBrK4Ara9VAgCqAQAFHYKeAgKeZwKuAgKsAAAACAAD/6gGWAZYACAAcAAAlIiY0NjIWFAYnIg4BFBcWFxYfATc2NzY3NjQuAQEAFh8fLB8fFilEKBcTIBgcFxccGCATFyhEyx8sHx8sH8ooRE81KTEiIxsbIyIxKTRQRCgAAAAAAwAA/+oBlgGWAAgAHQAxAAABMhYUBiImNDY3Mh4BFRQHBgcGBzEnJicmJyY0PgEXIg4BFRQXFhcWFzY3Njc2NTQuAQEAFh8fLB8fFilEKCYcLBYRFxwYIBMXKEQpHTEdBAcVGjExGhUHBB0xATUfLB8fLB9gKEQpMkgzOR0SGyMiMSk0UEQoKh0xHREOGyUvQUEvJRsOER0xHQAAAgAA/+oB1gGWABUAIQAAEzIeARUUBxczFwcnNScGIyIuATQ+ARcVIxUzFTM1MzUjNcApRCgdEQyAKoASJzIpRCgoRBRAQCpAQAGVKEQpMicSgCqADBEdKERSRChAQCpAQCpAAAMAAAAAAbYBgAAUAB0AKQAAJRcHJzUnBiMiLgE0PgEyHgEVFAcXIzI2NCYiBhQWNyMVIzUjNTM1MxUzAUtqIGoGJzMmQCUlQEtAJSEGbyg4OFA4OF0rFSsrFSuVaiBqEQYhJUBLQCUlQCYzJwY4UDg4UDhWKysVKysAAAACAAD/6gHWAZYAFQAZAAATMh4BFRQHFzMXByc1JwYjIi4BND4BBxUzNcApRCgdEQyAKoASJzIpRCgoRCyqAZUoRCkyJxKAKoAMER0oRFJEKIAqKgADAAAAAAG2AYAAFAAdACEAACUjJzY1NC4BIg4BFB4BMzI3FxUXNyciJjQ2MhYUBiczFSMBSxEGISVAS0AlJUAmMycGaiDqKDg4UDg4XmtrlQYnMyZAJSVAS0AlIQYRaiBqOFA4OFA4axUAAAACAAD/6gHWAZYAAgAPAAA3NRcnIg4BFB4BMj4BNC4B1YBVOmI5OWJ0Yjk5YmDAYNU5YnRiOTlidGI5AAADAAD/6gHWAZYADAAZABwAACUiLgE0PgEyHgEUDgEDIg4BFB4BMj4BNC4BAzcnAQAuTy4uT1xPLi5PLjpiOTlidGI5OWJlgIAVLk9cTy4uT1xPLgGAOWJ0Yjk5YnRiOf7LYGAAAwAA/+oB1gGWABcAGwAoAAAlBwYHBhUjNTQ/ATY0JiIGFSM0NjIWFRQHIzUzAyIOARQeATI+ATQuAQFBEw0FByoZGg0ZJBkqMkYyQCoqFTpiOTlidGI5OWLQFA0LDhYLIxkbDCQZGRIjMjIjHLkqAUA5YnRiOTlidGI5AAQAAP/qAdYBlgADABAAHQA5AAA3MzUjEyIOARQeATI+ATQuAQMiLgE0PgEyHgEUDgEDIgYVMzQ2MhYVFAcGBwYHBhUzNDc+ATc2NTQm6yoqFTpiOTlidGI5OWI6Lk8uLk9cTy4uTy4jMioZJBkIBQ4SBwwqCgYgBgoyQCsBKjlidGI5OWJ0Yjn+gC5PXE8uLk9cTy4BKzIjERkZEQ0KBgoOCxEaEA0IHAkOEyMyAAAAAgAA/+oB1gGWAAsAHAAAJSMVIzUjNTM1MxUzJyIOAhQeAjI+AjQuAgFrVipWVipWaypPPCAgPE9UTzwgIDxPq1ZWKlZWwCA8T1RPPCAgPE9UTzwgAAAAAAMAAP/qAdYBlgAMABkAJQAAJSIuATQ+ATIeARQOAQMiDgEUHgEyPgE0LgEHIxUjFTMVMzUzNSMBAC5PLi5PXE8uLk8uOmI5OWJ0Yjk5YiUqVlYqVlYVLk9cTy4uT1xPLgGAOWJ0Yjk5YnRiOWpWKlZWKgAAAQAAAAABwAFJAAUAAAkBJzcXNwHA/wB1HlfiASv/AHUeV+IAAQAAAAABlgFWAA8AACUXFSMnByM1Nyc1Mxc3MxUBH3YfdnYfdnYfdnYfwHYfdnYfdnYfdnYfAAABAAAAAAGWAVYACwAAJSMVIzUjNTM1MxUzAZWAKoCAKoCrgIAqgIAAAQAAAAABlgDWAAMAACUhNSEBlf7WASqrKgAAAAEAAAAAAYABFgAFAAA/ARc3JweeYmIegIB3YmIegIAAAQAAAAABgAEJAAUAABMXNxcHJ55iYh6AgAEJYmIegIAAAAAAAQAAAAABSQFAAAUAACUnNycHFwFJYmIegIBeYmIegIAAAAAAAQAAAAABVgFAAAUAAD8BJzcXB7diYh6AgF5iYh6AgAABAAAAAAFrAOsAAgAAPwEXlWtrgGtrAAABAAAAAAFrAOsAAgAANxc3lWtr62trAAABAAAAAAErASsAAgAAAQcXAStrawEra2sAAAAAAQAAAAABQAErAAIAAD8BJ9Vra1VrawAAAgAAAAABlgGAAAYACgAANzUjNxcjFQc1IRXAVZWVVdUBKmuAlZWAVisrAAACAAAAAAGWAYAAAwAKAAA3ITUhJSM1IxUjF2sBKv7WASpVgFWVFSvAgICVAAkAAAAAAcABawADAAcACwAPAB8AIwAzADcARwAAJTUhFSU1IRU1ITUhIxUzNSM0NjsBMhYdARQGKwEiJjUXFTM1IzQ2OwEyFh0BFAYrASImNRcVMzUjNDY7ATIWHQEUBisBIiY1AcD+6wEV/usBFf7rVitADQgrCQwMCSsIDRUrQA0IKwkMDAkrCA0VK0ANCCsJDAwJKwgNKyoqgCoqgCoqKgkNDQkqCQ0NCVYqKgkNDQkqCQ0NCVYqKgkNDQkqCQ0NCQADAAAAAAHAAUAAAwAHAAsAABMhFSEVIRUhFSEVIUABgP6AAYD+gAGA/oABQCtAKkArAAAABAAAAAABwAFAAAUACQANABEAACUHJzcXByUhFSEVNTMVBzUhFQHAHmtrHkz+zAEV/uvV1QEVcx5rax5NgCtqKiprKysAAAAAAwAAAAABKwFrAAgAEQAaAAAlMhYUBiImNDY3MhYUBiImNDY3MhYUBiImNDYBABIZGSQZGRISGRkkGRkSEhkZJBkZaxkkGRkkGYAZJBkZJBmAGSQZGSQZAAQAAP/qAdYBlgANABIAFgAaAAABMhYVERQGIyEHETQ2MxURNyERBSEVIRUzFSMBqxEZGRH+1VUZERkBPf7VAQD/AMDAAZUZEf8AEhlVAYARGSr+5xkBAEArKyoABQAA/+oB1gGWAA0AEgAWABoAHgAAASEiBhURNyEyNjURNCYDIQcRIQcjNTMHIzUzByM1MwGr/qoRGVUBKxEZGRH+xBoBVkArK1YqKlUrKwGVGRH+gFUZEgEAERn+1hoBGpYrKysrKwAJAAD/4QHrAbUAAwAIABUAGQAdACEAJQApAC0AADcXNycXMjM1IxMiDgEUHgEyPgE0LgEXMzUjBxc3JxMnBxcnIxUzByMVMzcnBxdMHiYeeRUVKhUjOyIiO0Y7IiI7iEBAOyYeJiYeJh55KirAQEA7Jh4mNB4nHno/ASsjO0U7IiI7RTsjliujJx4nAQYeJh96P5UrpCYeJwAAAAACAAAAAAHrAVYAFAAqAAA3Ii4BND4BMz4BMzIeARczMhYUBiM1IzU0LgEjIgYHJiMiBhQWMyEyNjQmgB0xHR0xHRBFKyQ+JgMKJDIyJCodMR0oOwYMCxslJRsBFRIZGSscMToxHSYvIjsjMkYygBUdMR0zJwQlNSYZJBkAAgAA/+oB6wGWADYAPQAANyIuATQ+ATM+ATMyHgEXMzIWFAYrASImNDY7ATI2NCYrATU0LgEjIgYHJiMiBhQWOwEyFhQGIzczBzMHNyOAHTEdHTEdEEUrJD4mAwokMjIkFQkMDAkVEhkZEiodMR0oOwYMCxslJRsVCQ0NCWtAKytQEDVrHDE6MR0mLyI7IzJGMgwSDBkkGRUdMR0zJwQlNSYMEgxqVZVqAAAAAAQAAP/vAesBlgAMABkAJgBfAAA3HgEPAQ4BLgE/AT4BFx4BDwEOAS4BPwE+ARceAQ8BDgEuAT8BPgE3NTQuASMiBgcmIyIGFRQWFzEeAQ4BJzEuATQ+ATM+ATMyHgEXMzIWFRQGBzEGLgE2NzE+ATU0JiPACAkCHAIPEQkDGwIPXgkJAywCDxEJAiwDD14ICQIcAg8SCAIcAg8JHTEdKDsGDAsbJREPCAQJEAgZHR0xHRBFKyQ+JgMKJDIXFAgRCQUICQwZEsACEAhnCQgEDwlnCAkCAhAIpQkIBBAIpQgJAgIQCGcJCAQPCWcICSkVHTEdMycEJRsRHggEEg8EBA4xOjEdJi8iOyMyIxgnCwQEEBEEBhMMEhkAAAAAAgAA/9YB6wGWADQAXgAANzIWFAYjIi4BND4BMz4BMzIeARczMhYUBisBIiY0NjsBMjY0JisBNTQuASMiBgcmIyIGFBYXNycmNDYyHwE3PgEeAQ8BNzYeAQYPARcWFAYiLwEHDgEuAT8BBwYuATaACQwMCR0xHR0xHRBFKyQ+JgMKJDIyJBUJDAwJFRIZGRIqHTEdKDsGDAsbJSVDLyMGDRIGIgwDDxEJAg0vCBAECQgvIwYNEgYiDAMPEQkCDS8IEAQJlQwSDBwxOjEdJi8iOyMyRjIMEgwZJBkVHTEdMycEJTUmVgwiBhINBiMvCAkEEAgvDQIJEQ8DDCIGEg0GIy8ICQQQCC8NAgkRDwAAAAADAAD/6gHrAZUANABAAFQAADcyFhQGIyIuATQ+ATM+ATMyHgEXNzIWFAYrASImNDY7ATI2NCYrATU0LgEjIgYHJiMiBhQWFxYXFhUUBiImNTQ/AQ8BBgcGBwYVFBYyNjU0Jy4BJzGACQwMCR0xHR0xHRBFKyQ+JgMKJDIyJBUJDAwJFRIZGRIqHTEdKDsGCwwbJSWbBQcfGSQZHwwLCw4LEggMMkYyDAgkEpUNEQ0dMToxHCcvIzokATJHMg0RDRkjGRUdMR0zJgQmNSUDBworFhIZGRIWK1QMDhERGRIZFSMyMiMVGRI0FQAAAAMAAP/qAesBlgAYACAAIwAAJSc3NjczNSM1IxUjFTMGByYnIxYXBxc3FzcjAzM3MxczJzcXARM3ATcYP5Yqlu8XLR0UKxgobR5rQokrYCsYZRgrmCIjfzUBPU4rKiorQDIgJzUsax5qQpj/AEBAal1dAAAAAgAAAAABtgGAABUAHgAAEzIeARUUBxczFwcnNScGIyIuATQ+ARciBhQWMjY0JsslQCUhBhFqIGoGJzMmQCUlQCYoODhQODgBgCVAJjMnBmogahEGISVAS0AlKzhQODhQOAAAAAEAAP/0AdYBlgBRAAABIg4BFRQWFxY2PQEGJyYnMSYnJi8BJjQzNxYXFhcxFhcWNzY3JicmNTQ3JjUmNzMyFxYXNjIXNjc2FzEWBxQHFhUUBwYHFh0BFBY3PgE1NC4BAQA6YjlRQQcHJRULAwQHBAUECAUFDQsGAg0VDRACCywWHxYEAggGCAsQEhk4GRoTCgQIAgQWHxcrDgcIQFE5YgGVOWI6Rm8WAQcFJAgSCAsLCAYDAwYGAQELBQUVAgEGEwoFExo3IRgJCxITBAYMBwcRBAIBExILCRghOBkTBQ0bOgUHARZvRjpiOQAAAQAAAAABqwFrAB4AAAEuASMiDgEUHgEzMjY3Iw4BIyIuATQ+ATMyFhcHMzUBeRg+Iy5PLi5PLjtbDywOQikjOyIiOyMaLhJFlgE5FxsuT1xPLkg4JTAiO0Y7IhQSRZYAAQAAAAABqQFrAAgAABMzETcXByc3F+sqdh6pqR52AWv/AHUeqakedQAAAAACAAAAAAGrAYAAGQAdAAABBx4BFA4BIi4BNDY3Jw4BFRQeATI+ATU0JicjFTMBYR8dISI7RjsiIRweIiguT1xPLihuKioBTB8ROkU7IiI7RToRHxhJKy5PLi5PLitJTNUAAAAABAAA/+oBqwGWAA0AEwAXABsAABMiBhURFBYzITI2NREnBzMVMxUhNxUzNQcVMzWAEhkZEgEAEhmAq5Vr/wArqqpqAZUZEf6qERkZEQEAgCpr66srK1UrKwAAAAACAAD//QGbAYEALQBHAAAlJi8BJicmJy4BNwYHDgEXFhUUBicmJy4BNw4BFxYXFhceARcWNzY3PgEvASYnBwYHBicmJz4BNzYvASY3HgIXFhcWFRYGBwF5BAoDBg4QCBgKEBocKR0TAg8GAgESBgwaHAICBAQLETkgJCEjGR4SDwMEDEQLDBESDwwSFwQDBgMECAcMGgUIAwEBCwrRBQoDBQoNBxdFHgYWImoyBAMIBgYBAhc8GxZEIxULERQbJQQFCAgXG00lBQoRhgoDBgYFDAUYDwwWDhgUEA4XBwoNBAUNGwgAAAAAAwAAAAAB5wGBAAQAEQAcAAAhNyYiBxMiBgcXPgEyFhc3LgEHIgYHFzYyFzcuAQEATSJWIk1AdTEmKWJqYikmMXVAKk8hJzOAMychT2YaGgEaKCUzHyEhHzMlKIAbGDMmJjMYGwAAAAABAAD/1QHrAa4AFgAAJSc2LgIHFwcnBhYXHgE3FxYyPwE+AQHkwg8RPVgnXEBeEw8gHlAlwgcRBjEIASvCJVA9DxJcQFwnVyAeEQ/CBwcxBhMAAAADAAD/6gHBAcAACwAjAD8AAAEyNjU0LwEHBhUUFhcnBwYiLwEHBiMiJxUUFjMhMjY9AQYjIjcjNSMVIyIGHQEUFjI/ARcWMj8BFxYyNj0BNCYBABIZByQkBxl0FxcVPhUXFxYeFxMNCAFWCA0TFx4IayprGyUZIwsuLQwkCy4uCyMZJQFAGRIMCj8/CgwSGdUXFxUVFxcWDWIJDAwJYg2rKyslGyERGQwuLgsLLi4MGREhGyUAAAAABAAA/+oBwQGWACAAJAAoACwAABM1MzU0NjsBFTcXNTMyFhURFAYjISImPQEjNTM1IzUzNRcjFTM9ASMVEzUjFUArGRGANjUVERoaEf8AEBorKysrKioqKioqASsqFhEZlSAglRoQ/qoQGhoQFipWKlZWKoAqKv8AKioAAAIAAP/VAZYBqwADABMAACUjETM1IyIGFREUFjsBMjY1ETQmAWvW1tYRGRkR1hEZGSsBKlYZEv6AEhkZEgGAEhkAAAAABAAA/+MBxgGrAAkAEwArADcAAAEHFycHNyc/AR8BBxcnBzcnPwEXBzYeAQcGBw4BLgI2NzY3Nh4BBwYeAhcuAycOAR4CNgF7NhM4OBM2RBcXjiMNJCUNIywPDgQIEQUFCwwpbm5SHBwpDQ4IFA0BBB9FWgwuV0QmAh4TGD9UVgFpKkEnJ0EqAkBAlhorGRkrGgEqKmoBDhMIEAspHR1Sbm4pDQoFBhAJLlpFICYCJkRWLiFVVD8YEwAAAAADAAAAAAHfAYAAAwAJAA8AAAEXAyc3JzUXBzUlNxUHFxUBEypQKt9NiYn+zYlNTQGACf6JCbdNPImJPUyJPE1MPQAAAAMAAP/VAcEBqwADABMAHAAAISMRMzUjIgYVERQWOwEyNjURNCYnISIGFREzESEBlerq6hIZGRLqEhkZUv8AERkqAQABKyoZEf7VEhkZEgErERlWGRL+1QErAAAADwAA/8ACAQHBAAMABwAfACMAJwArAC8AMwA3AD0AQQBKAFMAXABlAAATMxUjJRUjNRUzNSM1MxUzNTMVIxUzFSMVIzUjFSM1MzcVMzUFNTMVAxUzNTMVMzUFFTM1JzMVIzczFSM1IzczFSMnFSM1NDY7ARUlMhYdASM1IzUBFTMVIyImPQEFNTMVFAYrATVVgIABVoAqKiorKysrKytAKkAqK/7VgFUrqiv/ACtWKytrVSorKyoqwCsZElUBVRIZK1X+q1VVEhkB1SsZElUBa4CAgIDrKyoqKiorQCsrK1YVQEBrgIABKysrKyvVKytqKipVK5VVqlVVEhkrKxkSVVUr/oBVKxkSVVVVVRIZKwAKAAD/6gIBAZYAAwAHAAsADwATABcAIAApADIAOwAAEzMRIxMzESMTMxEjEzMRIxMzESMTMxEjARUjNTQ2OwEVJTIWHQEjNSM1ARUzFSMiJj0BBTUzFRQGKwE1VSsrQBYWK0BAVRYWQCsrQBYW/pYrGRJVAVUSGStV/qtVVRIZAdUrGRJVAUD/AAEA/wABAP8AAQD/AAEA/wABAP8AAStWVhEZKioZEVZWKv7WVioZEVZWVlYRGSoAAwAA/+oBwQGrAA8AFgAuAAAlIi4CNTMUFjI2NTMUDgEnMhYVIzQ2FyM0LgEiDgEVIyIGFREUFjMhMjY1ETQmAQAVJx4RKyU2JSsdMR0bJYAlsCodMToxHSoSGRkSASoSGRmrEB4nFRomJhodMRzVJRsbJUAdMR0dMR0ZEv8AERkZEQEAEhkAAAQAAP/qAcABqwAXAB4AIgAxAAABIzQuASIOARUjIgYVERQWMyEyNjURNCYnMhYVIzQ2EyERIQciJjUjFB4BMj4BNSMUBgGVKh0xOjEdKhIZGRIBKhIZGacbJYAlsP7WASqVGyUrHTE6MR0rJQFAHTEdHTEdGRL/ABEZGREBABIZQCUbGyX+lQEAVSUbHTEdHTEdGyUAAAAABgAAAAACAQGBAA8AEwAXABsAKgAzAAATITIWFREUBiMhIiY1ETQ2BRUzNQcVMzUHFTM1BSIHBgcGHQEhNTQnJicmJyIGFBYyNjQmKwGqERoaEf5WERoaARGqqqqqlf7rGBwhFBcBABgUIB0XGyUlNSYmAYAaEf7WERoaEQEqERpAFRUrFRUqFhZUBwkOEBQVFRQQDgkHqSU2JSU2JQAAAAcAAAAAAgABgAAPABMAIQAqAC4AMgA2AAABIQ4BBxEeARchPgE3ES4BAyERIQM1NCcmJyYiBwYHBh0BNyIGFBYyNjQmMxUzNQcVMzUHFTM1AdX+VhIYAQEYEgGqEhgBARgS/lYBqqoUERsXKBcbERRrFh8fLB8fVYCAgIBVAYABGBL+1hIYAQEYEgEqEhj+rAEq/wAbEA4LBgYGBgsOEBvWICwfHywgFhYrFRUrFRUAAQAA/+oBgAGWAA8AACU1MzUjFTMVBxUzFTM1MzUBVRbWFitvIm/AqyoqqysqgIAqAAAAAAIAAP/qAasBlgALABYAABM3AQcnFSM1IzU3NR8BFSMnNSM1MxUjKxsBZRt/Im8rqisE0RbWFgFQG/6bG35+gCorEBArKtEvKioAAAACAAD/6gGAAZYADwAVAAAlNTM1IxUzFQcVMxUzNTM1Izc1MxUXAVUW1hYrbyJvxBlWGcCrKiqrKyqAgCoavLwaAAAAAAMAAP/qAasBlgAOABoAHQAAEzUjNTMVIxUXFSMnNSMVEwcnFSM1IzU3NSc3FzMnqxbWFisEUVbWHH4ibyuAG3YmEwE8LyoqqysqUa9a/vUbfn6AKisPgBzWFAAABQAAAAACAAGBAB8APgBHAFAAWQAAEzMVIxUUBiMyFh0BMxUjJicmPQE0JisBNTMyNj0BNDYhMhYdARQWOwEVIyIGHQEUBisBNTM1NDYzIiY9ASM1AzIWFAYiJjQ2IzIWFAYiJjQ2MzIWFAYiJjQ2ayoqGRISGSoqEwsNGRIVFRIZGQE8EhkZEhUVEhkZEioqGRISGSprCQwMEgwMTAkMDBINDbMJDQ0SDAwBgCtqEhkZEmorBQoLEVUSGSoZElUSGRkSVRIZKhkSVRIZK2oSGRkSaiv/AAwSDQ0SDAwSDQ0SDAwSDQ0SDAAAAAADAAAAAAHrAWAACAATAB0AAAEyFhQGIiY0NjcyFhcOASImJz4BBx4BMjY3LgEiBgEAGyUlNiUlG0+AHByAnoAcHIBtGmZ4ZhoaZnhmAQAlNiUlNiVgWUdHWVlHR1mgNj8/NjY/PwAAAAMAAAAAAesBYQAIABUAIAAAASIGFBYyNjQmByIuATQ+ATIeARQOAQMiBgceATI2Ny4BAQAbJSU2JSUbHTEdHTE6MR0dMR1PgBwcgJ6AHByAAQAlNiUlNiWrHTE6MR0dMToxHQELWUdHWVlHR1kAAAADAAD/1QHrAYEAAwAbACIAACURMxEDMhYdARQPAScmPQE3IyImPQE0PwE+ATMXIwcVMwc3AZVWqxIZDYwXCRWHEhkDQQUVDcDBP7sYXYABAP8AAQAZEtUSDI0XCQ4GYhkRKwgIlgwOK5UrcV0AAAAAAgAA/9UB6wGBAAMAHAAAJTMRKwIiBg8BBh0BFBY7AQcUFRQfATc2PQE0JgGVVlZVwA0VBUEDGRKHFQkXjA0ZgAEADgyWCAgrERliAwMOCReNDBLVEhkAAAMAAAAAAesBqwADABsAIgAAExEjERMiJj0BND8BFxYdAQczMhYdARQPAQ4BIyczNzUjNwdrVqsSGQ2MFwkVhxIZA0EFFQ3AwT+8GV0BAP8AAQD/ABkS1RIMjRcJDQdiGRErCAiWDA4rlStxXQAAAAACAAAAAAHrAasAGAAcAAAlNCYrATc0NTQvAQcGHQEUFjsBMjY/ATY1BTMRIwHrGRKHFQkXjA0ZEsANFQVBA/4qVlbrERliAwQNCReNDBLVEhkODJYICMABAAAAAAMAAP/qAasBqwAIACIAKwAAJTI2NCYiBhQWNzIWHQEUBiMhIiY9ATQ2OwE1ND4BMh4BHQEnIgYdATM1NCYBABIZGSQZGZISGRkS/wASGRkSFR0xOjEdaxslgCVVGSQZGSQZwBkR1hEZGRHWERkrHTEdHTEdK2slGysrGyUAAAAABAAA/+oBqwGrAAgADAAmAC8AACUiJjQ2MhYUBhc1IRUBMhYdARQGIyEiJj0BNDY7ATU0PgEyHgEdASciBh0BMzU0JgEAEhkZJBkZbv8AAQASGRkS/wASGRkSFR0xOjEdaxslgCVVGSQZGSQZQNbWAQAZEdYRGRkR1hEZKx0xHR0xHStrJRsrKxslAAACAAAAAAHWAWsABQAVAAABByc1Fzc1ISIGFREUFjMhMjY1ETQmAaurq6ur/qoRGRkRAVYRGRkBFWpqK2trKxkS/wASGRkSAQASGQAAAwAAAAAB1gFrAA8AEgAXAAABNCYjISIGFREUFjMhMjY1AwcnASE1FzcB1RkR/qoRGRkRAVYRGSqrqwFW/qqrqwFAEhkZEv8AEhkZEgEAa2v/ANVqagAAAAEAAAAAAeABawAvAAABBgc2NwYHJiMiBhUUFy4BJwYUFhciJxUUFhcGIyInHgEXBiMiJxYzMjc2NzY1JzYB3xgcHQsbHxspJTYDOGMiDBYSFRQqHwsNCAkJLx0xQAsLQExQPjkgHgEbAUALBBIhEAYdNiYKCwMzKhUxKAwLASEyBwMCHCMBJwEpKSQ+Oz4MEwAAAAAAABAAxgABAAAAAAABAAwAAAABAAAAAAACAAcADAABAAAAAAADAAwAEwABAAAAAAAEAAwAHwABAAAAAAAFAAsAKwABAAAAAAAGAAwANgABAAAAAAAKACsAQgABAAAAAAALABMAbQADAAEECQABABgAgAADAAEECQACAA4AmAADAAEECQADABgApgADAAEECQAEABgAvgADAAEECQAFABYA1gADAAEECQAGABgA7AADAAEECQAKAFYBBAADAAEECQALACYBWnZhcmxldC1pY29uc1JlZ3VsYXJ2YXJsZXQtaWNvbnN2YXJsZXQtaWNvbnNWZXJzaW9uIDEuMHZhcmxldC1pY29uc0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAHYAYQByAGwAZQB0AC0AaQBjAG8AbgBzAFIAZQBnAHUAbABhAHIAdgBhAHIAbABlAHQALQBpAGMAbwBuAHMAdgBhAHIAbABlAHQALQBpAGMAbwBuAHMAVgBlAHIAcwBpAG8AbgAgADEALgAwAHYAYQByAGwAZQB0AC0AaQBjAG8AbgBzAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwAWY2hlY2tib3gtbWFya2VkLWNpcmNsZRRjaGVjay1jaXJjbGUtb3V0bGluZQtpbmZvcm1hdGlvbhNpbmZvcm1hdGlvbi1vdXRsaW5lB3dhcm5pbmcNYWxlcnQtb3V0bGluZQVlcnJvchRhbGVydC1jaXJjbGUtb3V0bGluZQ9jaGVja2JveC1tYXJrZWQXY2hlY2tib3gtbWFya2VkLW91dGxpbmUWY2hlY2tib3gtYmxhbmstb3V0bGluZQxyYWRpby1tYXJrZWQeY2hlY2tib3gtbWFya2VkLWNpcmNsZS1vdXRsaW5lC3JhZGlvLWJsYW5rDGNsb3NlLWNpcmNsZRRjbG9zZS1jaXJjbGUtb3V0bGluZQljbG9zZS1ib3gRY2xvc2UtYm94LW91dGxpbmUMbWludXMtY2lyY2xlFG1pbnVzLWNpcmNsZS1vdXRsaW5lBHN0YXIOc3Rhci1oYWxmLWZ1bGwMc3Rhci1vdXRsaW5lBWhlYXJ0D2hlYXJ0LWhhbGYtZnVsbA1oZWFydC1vdXRsaW5lBmRlbGV0ZQl0cmFzaC1jYW4RdHJhc2gtY2FuLW91dGxpbmUJbWludXMtYm94EW1pbnVzLWJveC1vdXRsaW5lDmFjY291bnQtY2lyY2xlFmFjY291bnQtY2lyY2xlLW91dGxpbmUDY29nC2NvZy1vdXRsaW5lEW1hcC1tYXJrZXItcmFkaXVzGW1hcC1tYXJrZXItcmFkaXVzLW91dGxpbmUGY2FtZXJhDmNhbWVyYS1vdXRsaW5lBGNhcnQMY2FydC1vdXRsaW5lBXBob25lDXBob25lLW91dGxpbmUFaW1hZ2UNaW1hZ2Utb3V0bGluZQRiZWxsDGJlbGwtb3V0bGluZQRob21lDGhvbWUtb3V0bGluZQptYXAtbWFya2VyEm1hcC1tYXJrZXItb3V0bGluZQxtYWduaWZ5LXBsdXMUbWFnbmlmeS1wbHVzLW91dGxpbmUNbWFnbmlmeS1taW51cxVtYWduaWZ5LW1pbnVzLW91dGxpbmULcGxheS1jaXJjbGUTcGxheS1jaXJjbGUtb3V0bGluZQtoZWxwLWNpcmNsZRNoZWxwLWNpcmNsZS1vdXRsaW5lC3BsdXMtY2lyY2xlE3BsdXMtY2lyY2xlLW91dGxpbmUFY2hlY2sMd2luZG93LWNsb3NlBHBsdXMFbWludXMKY2hldnJvbi11cAxjaGV2cm9uLWRvd24MY2hldnJvbi1sZWZ0DWNoZXZyb24tcmlnaHQHbWVudS11cAltZW51LWRvd24JbWVudS1sZWZ0Cm1lbnUtcmlnaHQGdXBsb2FkCGRvd25sb2FkFGZvcm1hdC1saXN0LWNoZWNrYm94BG1lbnUJbWVudS1vcGVuDWRvdHMtdmVydGljYWwUbWVzc2FnZS10ZXh0LW91dGxpbmUabWVzc2FnZS1wcm9jZXNzaW5nLW91dGxpbmUTd2hpdGUtYmFsYW5jZS1zdW5ueQ53ZWF0aGVyLWNsb3VkeRF3ZWF0aGVyLWxpZ2h0bmluZw93ZWF0aGVyLXBvdXJpbmcNd2VhdGhlci1zbm93eQ13ZWF0aGVyLXJhaW55CXRyYW5zbGF0ZQdtYWduaWZ5BmdpdGh1YgdyZWZyZXNoCmFycm93LWRvd24FcG93ZXIVZmlsZS1kb2N1bWVudC1vdXRsaW5lBGZpcmUEd2lmaQZ3cmVuY2gMY2FrZS12YXJpYW50CG5vdGVib29rCWNlbGxwaG9uZQ13ZWF0aGVyLW5pZ2h0A3htbAxjb250ZW50LWNvcHkLcXJjb2RlLXNjYW4MYmFyY29kZS1zY2FuCHNob3BwaW5nEHNob3BwaW5nLW91dGxpbmUUY2FyZC1hY2NvdW50LWRldGFpbHMcY2FyZC1hY2NvdW50LWRldGFpbHMtb3V0bGluZQNwaW4HcGluLW9mZgtwaW4tb3V0bGluZQ9waW4tb2ZmLW91dGxpbmUJY29kZS1qc29uDHZpZXctb3V0bGluZQR2aWV3EnRodW1iLWRvd24tb3V0bGluZQp0aHVtYi1kb3duEHRodW1iLXVwLW91dGxpbmUIdGh1bWItdXAEbG9jawxsb2NrLW91dGxpbmUFZW1haWwNZW1haWwtb3V0bGluZQd0d2l0dGVyAAAAAAA=) format("truetype");font-weight:400;font-style:normal}.var-icon--set{font-family:varlet-icons}.var-icon-checkbox-marked-circle:before{content:"\uF000"}.var-icon-check-circle-outline:before{content:"\uF001"}.var-icon-information:before{content:"\uF002"}.var-icon-information-outline:before{content:"\uF003"}.var-icon-warning:before{content:"\uF004"}.var-icon-alert-outline:before{content:"\uF005"}.var-icon-error:before{content:"\uF006"}.var-icon-alert-circle-outline:before{content:"\uF007"}.var-icon-checkbox-marked:before{content:"\uF008"}.var-icon-checkbox-marked-outline:before{content:"\uF009"}.var-icon-checkbox-blank-outline:before{content:"\uF010"}.var-icon-radio-marked:before{content:"\uF011"}.var-icon-checkbox-marked-circle-outline:before{content:"\uF012"}.var-icon-radio-blank:before{content:"\uF013"}.var-icon-close-circle:before{content:"\uF014"}.var-icon-close-circle-outline:before{content:"\uF015"}.var-icon-close-box:before{content:"\uF016"}.var-icon-close-box-outline:before{content:"\uF017"}.var-icon-minus-circle:before{content:"\uF018"}.var-icon-minus-circle-outline:before{content:"\uF019"}.var-icon-star:before{content:"\uF020"}.var-icon-star-half-full:before{content:"\uF021"}.var-icon-star-outline:before{content:"\uF022"}.var-icon-heart:before{content:"\uF023"}.var-icon-heart-half-full:before{content:"\uF024"}.var-icon-heart-outline:before{content:"\uF025"}.var-icon-delete:before{content:"\uF026"}.var-icon-trash-can:before{content:"\uF027"}.var-icon-trash-can-outline:before{content:"\uF028"}.var-icon-minus-box:before{content:"\uF029"}.var-icon-minus-box-outline:before{content:"\uF030"}.var-icon-account-circle:before{content:"\uF031"}.var-icon-account-circle-outline:before{content:"\uF032"}.var-icon-cog:before{content:"\uF033"}.var-icon-cog-outline:before{content:"\uF034"}.var-icon-map-marker-radius:before{content:"\uF035"}.var-icon-map-marker-radius-outline:before{content:"\uF036"}.var-icon-camera:before{content:"\uF037"}.var-icon-camera-outline:before{content:"\uF038"}.var-icon-cart:before{content:"\uF039"}.var-icon-cart-outline:before{content:"\uF040"}.var-icon-phone:before{content:"\uF041"}.var-icon-phone-outline:before{content:"\uF042"}.var-icon-image:before{content:"\uF043"}.var-icon-image-outline:before{content:"\uF044"}.var-icon-bell:before{content:"\uF045"}.var-icon-bell-outline:before{content:"\uF046"}.var-icon-home:before{content:"\uF047"}.var-icon-home-outline:before{content:"\uF048"}.var-icon-map-marker:before{content:"\uF049"}.var-icon-map-marker-outline:before{content:"\uF050"}.var-icon-magnify-plus:before{content:"\uF051"}.var-icon-magnify-plus-outline:before{content:"\uF052"}.var-icon-magnify-minus:before{content:"\uF053"}.var-icon-magnify-minus-outline:before{content:"\uF054"}.var-icon-play-circle:before{content:"\uF055"}.var-icon-play-circle-outline:before{content:"\uF056"}.var-icon-help-circle:before{content:"\uF057"}.var-icon-help-circle-outline:before{content:"\uF058"}.var-icon-plus-circle:before{content:"\uF059"}.var-icon-plus-circle-outline:before{content:"\uF060"}.var-icon-check:before{content:"\uF061"}.var-icon-window-close:before{content:"\uF062"}.var-icon-plus:before{content:"\uF063"}.var-icon-minus:before{content:"\uF064"}.var-icon-chevron-up:before{content:"\uF065"}.var-icon-chevron-down:before{content:"\uF066"}.var-icon-chevron-left:before{content:"\uF067"}.var-icon-chevron-right:before{content:"\uF068"}.var-icon-menu-up:before{content:"\uF069"}.var-icon-menu-down:before{content:"\uF070"}.var-icon-menu-left:before{content:"\uF071"}.var-icon-menu-right:before{content:"\uF072"}.var-icon-upload:before{content:"\uF073"}.var-icon-download:before{content:"\uF074"}.var-icon-format-list-checkbox:before{content:"\uF075"}.var-icon-menu:before{content:"\uF076"}.var-icon-menu-open:before{content:"\uF077"}.var-icon-dots-vertical:before{content:"\uF078"}.var-icon-message-text-outline:before{content:"\uF079"}.var-icon-message-processing-outline:before{content:"\uF080"}.var-icon-white-balance-sunny:before{content:"\uF081"}.var-icon-weather-cloudy:before{content:"\uF082"}.var-icon-weather-lightning:before{content:"\uF083"}.var-icon-weather-pouring:before{content:"\uF084"}.var-icon-weather-snowy:before{content:"\uF085"}.var-icon-weather-rainy:before{content:"\uF086"}.var-icon-translate:before{content:"\uF087"}.var-icon-magnify:before{content:"\uF088"}.var-icon-github:before{content:"\uF089"}.var-icon-refresh:before{content:"\uF090"}.var-icon-arrow-down:before{content:"\uF091"}.var-icon-power:before{content:"\uF092"}.var-icon-file-document-outline:before{content:"\uF093"}.var-icon-fire:before{content:"\uF094"}.var-icon-wifi:before{content:"\uF095"}.var-icon-wrench:before{content:"\uF096"}.var-icon-cake-variant:before{content:"\uF097"}.var-icon-notebook:before{content:"\uF098"}.var-icon-cellphone:before{content:"\uF099"}.var-icon-weather-night:before{content:"\uF100"}.var-icon-xml:before{content:"\uF101"}.var-icon-content-copy:before{content:"\uF102"}.var-icon-qrcode-scan:before{content:"\uF103"}.var-icon-barcode-scan:before{content:"\uF104"}.var-icon-shopping:before{content:"\uF105"}.var-icon-shopping-outline:before{content:"\uF106"}.var-icon-card-account-details:before{content:"\uF107"}.var-icon-card-account-details-outline:before{content:"\uF108"}.var-icon-pin:before{content:"\uF109"}.var-icon-pin-off:before{content:"\uF110"}.var-icon-pin-outline:before{content:"\uF111"}.var-icon-pin-off-outline:before{content:"\uF112"}.var-icon-code-json:before{content:"\uF113"}.var-icon-view-outline:before{content:"\uF114"}.var-icon-view:before{content:"\uF115"}.var-icon-thumb-down-outline:before{content:"\uF116"}.var-icon-thumb-down:before{content:"\uF117"}.var-icon-thumb-up-outline:before{content:"\uF118"}.var-icon-thumb-up:before{content:"\uF119"}.var-icon-lock:before{content:"\uF120"}.var-icon-lock-outline:before{content:"\uF121"}.var-icon-email:before{content:"\uF122"}.var-icon-email-outline:before{content:"\uF123"}.var-icon-twitter:before{content:"\uF124"}:root{--icon-size: 20px}.var-icon{position:relative;display:inline-flex;justify-content:center;align-items:center;vertical-align:bottom;color:inherit;font-size:var(--icon-size)}.var-icon:before{position:relative;display:inline-block;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;font-weight:400;font-style:normal;line-height:1}.var-icon--shrinking{transform:scale(0);transition-property:transform}.var-icon__image{width:var(--icon-size);height:var(--icon-size);object-fit:cover}:root{--menu-background-color: #fff}.var-menu{display:inline-block}.var-menu-enter-from,.var-menu-leave-to{opacity:0;transform:scale(.8)}.var-menu-enter-active,.var-menu-leave-active{transition-property:opacity,transform;transition-duration:.2s}.var-menu--menu-background-color{background:var(--menu-background-color)}:root{--field-decorator-text-color: #555;--field-decorator-error-color: var(--color-danger);--field-decorator-blur-color: #888;--field-decorator-focus-color: var(--color-primary);--field-decorator-placeholder-size: 16px;--field-decorator-icon-size: 20px;--field-decorator-line-size: 1px;--field-decorator-line-focus-size: 2px;--field-decorator-disabled-color: var(--color-text-disabled);--field-decorator-standard-normal-padding-top: 22px;--field-decorator-standard-normal-padding-bottom: 4px;--field-decorator-standard-normal-icon-padding: 22px 0 4px;--field-decorator-standard-normal-non-hint-padding-top: 4px;--field-decorator-standard-normal-placeholder-translate-y: var(--field-decorator-standard-normal-padding-top);--field-decorator-standard-small-padding-top: 18px;--field-decorator-standard-small-padding-bottom: 4px;--field-decorator-standard-small-icon-padding: 18px 0 4px;--field-decorator-standard-small-non-hint-padding-top: 2px;--field-decorator-standard-small-placeholder-translate-y: var(--field-decorator-standard-small-padding-top);--field-decorator-outlined-normal-padding-top: 16px;--field-decorator-outlined-normal-padding-bottom: 16px;--field-decorator-outlined-normal-padding-left: 16px;--field-decorator-outlined-normal-padding-right: 16px;--field-decorator-outlined-normal-placeholder-space: 4px;--field-decorator-outlined-normal-icon-padding: 16px 0 16px;--field-decorator-outlined-normal-placeholder-translate-y: var(--field-decorator-outlined-normal-padding-top);--field-decorator-outlined-small-padding-top: 8px;--field-decorator-outlined-small-padding-bottom: 8px;--field-decorator-outlined-small-padding-left: 12px;--field-decorator-outlined-small-padding-right: 12px;--field-decorator-outlined-small-placeholder-space: 2px;--field-decorator-outlined-small-icon-padding: 8px 0 8px;--field-decorator-outlined-small-placeholder-translate-y: var(--field-decorator-outlined-small-padding-top)}.var-field-decorator{position:relative;width:100%;color:var(--field-decorator-text-color)}.var-field-decorator__controller{width:100%;display:flex;align-items:stretch;position:relative}.var-field-decorator__middle{position:relative;flex-grow:1;display:flex;justify-content:center;align-items:center}.var-field-decorator__icon{display:flex;align-items:center;font-size:var(--field-decorator-icon-size)}.var-field-decorator__icon .var-icon{font-size:var(--field-decorator-icon-size)}.var-field-decorator__placeholder{position:absolute;top:0;left:0;font-size:var(--field-decorator-placeholder-size);line-height:1.5em;color:var(--field-decorator-blur-color);pointer-events:none;cursor:inherit;transform-origin:left;transition:transform .28s var(--cubic-bezier),color .25s,max-width .2s}.var-field-decorator__clear-icon[var-field-decorator-cover]{font-size:var(--field-decorator-icon-size);margin-left:6px;cursor:pointer}.var-field-decorator--placeholder-hidden{visibility:hidden}.var-field-decorator--focus{color:var(--field-decorator-focus-color)}.var-field-decorator--disabled{color:var(--field-decorator-disabled-color);cursor:not-allowed}.var-field-decorator--error{color:var(--field-decorator-error-color)}.var-field-decorator--standard .var-field-decorator__middle{padding:var(--field-decorator-standard-normal-padding-top) 0 var(--field-decorator-standard-normal-padding-bottom)}.var-field-decorator--standard .var-field-decorator__icon{padding:var(--field-decorator-standard-normal-icon-padding)}.var-field-decorator--standard .var-field-decorator__placeholder{max-width:100%;transform:translateY(var(--field-decorator-standard-normal-placeholder-translate-y))}.var-field-decorator--standard .var-field-decorator--placeholder-hint{max-width:133%;transform:translate(0) scale(.75)!important}.var-field-decorator--standard .var-field-decorator__line{width:100%;height:var(--field-decorator-line-size);background:var(--field-decorator-blur-color);transition:background-color .25s}.var-field-decorator--standard .var-field-decorator--line-disabled{background:var(--field-decorator-disabled-color)}.var-field-decorator--standard .var-field-decorator__dot{width:100%;height:var(--field-decorator-line-focus-size);background:var(--field-decorator-focus-color);transform:scaleX(0);transform-origin:center;transition:transform .3s var(--cubic-bezier),background-color .25s}.var-field-decorator--standard .var-field-decorator--middle-non-hint,.var-field-decorator--standard .var-field-decorator--icon-non-hint{padding-top:var(--field-decorator-standard-normal-non-hint-padding-top)}.var-field-decorator--standard .var-field-decorator--line-focus{transform:scaleX(1)}.var-field-decorator--standard .var-field-decorator--line-error{background:var(--field-decorator-error-color)}.var-field-decorator--outlined .var-field-decorator__controller{padding:0 var(--field-decorator-outlined-normal-padding-right) 0 var(--field-decorator-outlined-normal-padding-left)}.var-field-decorator--outlined .var-field-decorator__middle{padding:var(--field-decorator-outlined-normal-padding-top) 0 var(--field-decorator-outlined-normal-padding-bottom) 0}.var-field-decorator--outlined .var-field-decorator__icon{padding:var(--field-decorator-outlined-normal-icon-padding)}.var-field-decorator--outlined .var-field-decorator__placeholder{max-width:calc(100% - var(--field-decorator-outlined-normal-padding-left) - var(--field-decorator-outlined-normal-padding-right));transform:translate(var(--field-decorator-outlined-normal-padding-left),var(--field-decorator-outlined-normal-placeholder-translate-y)) scale(1)}.var-field-decorator--outlined .var-field-decorator--placeholder-hint{max-width:calc(133% - var(--field-decorator-outlined-normal-padding-left) - var(--field-decorator-outlined-normal-padding-right));transform:translate(calc(var(--field-decorator-outlined-normal-padding-left)),-50%) scale(.75)}.var-field-decorator--outlined .var-field-decorator__line{min-width:0;width:100%;height:calc(100% + (var(--field-decorator-placeholder-size) * .75 / 2));position:absolute;top:calc(var(--field-decorator-placeholder-size) * .75 / 2 * -1);left:0;pointer-events:none;border-radius:4px;border:var(--field-decorator-line-size) solid var(--field-decorator-blur-color);overflow:hidden;padding:0 calc(var(--field-decorator-outlined-normal-padding-right) - var(--field-decorator-outlined-normal-placeholder-space) - var(--field-decorator-line-size)) 0 calc(var(--field-decorator-outlined-normal-padding-left) - var(--field-decorator-outlined-normal-placeholder-space) - var(--field-decorator-line-size));margin:0}.var-field-decorator--outlined .var-field-decorator__line-legend{max-width:0;height:calc(var(--field-decorator-placeholder-size) * .75);visibility:hidden;padding:0;overflow:hidden;display:block;white-space:nowrap}.var-field-decorator--outlined .var-field-decorator__line-legend--hint{max-width:100%}.var-field-decorator--outlined .var-field-decorator--line-focus{border-width:var(--field-decorator-line-focus-size);border-color:var(--field-decorator-focus-color);padding:0 calc(var(--field-decorator-outlined-normal-padding-right) - var(--field-decorator-outlined-normal-placeholder-space) - var(--field-decorator-line-focus-size)) 0 calc(var(--field-decorator-outlined-normal-padding-left) - var(--field-decorator-outlined-normal-placeholder-space) - var(--field-decorator-line-focus-size))}.var-field-decorator--outlined .var-field-decorator--line-disabled{border-radius:4px;border:var(--field-decorator-line-size) solid var(--field-decorator-disabled-color)}.var-field-decorator--outlined .var-field-decorator--line-error{border-color:var(--field-decorator-error-color)!important}.var-field-decorator--standard.var-field-decorator--small .var-field-decorator__middle{padding:var(--field-decorator-standard-small-padding-top) 0 var(--field-decorator-standard-small-padding-bottom)}.var-field-decorator--standard.var-field-decorator--small .var-field-decorator__placeholder{transform:translateY(var(--field-decorator-standard-small-placeholder-translate-y))}.var-field-decorator--standard.var-field-decorator--small .var-field-decorator--middle-non-hint{max-width:calc(133% - var(--field-decorator-outlined-small-padding-left) - var(--field-decorator-outlined-small-padding-right));padding-top:var(--field-decorator-standard-small-non-hint-padding-top)}.var-field-decorator--standard.var-field-decorator--small .var-field-decorator--icon-non-hint{padding-top:var(--field-decorator-standard-small-non-hint-padding-top)}.var-field-decorator--outlined.var-field-decorator--small .var-field-decorator__controller{padding:0 var(--field-decorator-outlined-small-padding-right) 0 var(--field-decorator-outlined-small-padding-left)}.var-field-decorator--outlined.var-field-decorator--small .var-field-decorator__middle{padding:var(--field-decorator-outlined-small-padding-top) 0 var(--field-decorator-outlined-small-padding-bottom) 0}.var-field-decorator--outlined.var-field-decorator--small .var-field-decorator__icon{padding:var(--field-decorator-outlined-small-icon-padding)}.var-field-decorator--outlined.var-field-decorator--small .var-field-decorator__placeholder{max-width:calc(100% - var(--field-decorator-outlined-small-padding-left) - var(--field-decorator-outlined-small-padding-right));transform:translate(var(--field-decorator-outlined-small-padding-left),var(--field-decorator-outlined-small-placeholder-translate-y)) scale(1)}.var-field-decorator--outlined.var-field-decorator--small .var-field-decorator--placeholder-hint{transform:translate(calc(var(--field-decorator-outlined-small-padding-left)),-50%) scale(.75)}.var-field-decorator--outlined.var-field-decorator--small .var-field-decorator__line{padding:0 calc(var(--field-decorator-outlined-small-padding-right) - var(--field-decorator-outlined-small-placeholder-space) - var(--field-decorator-line-size)) 0 calc(var(--field-decorator-outlined-small-padding-left) - var(--field-decorator-outlined-small-placeholder-space) - var(--field-decorator-line-size))}.var-field-decorator--outlined.var-field-decorator--small .var-field-decorator--line-focus{padding:0 calc(var(--field-decorator-outlined-small-padding-right) - var(--field-decorator-outlined-small-placeholder-space) - var(--field-decorator-line-focus-size)) 0 calc(var(--field-decorator-outlined-small-padding-left) - var(--field-decorator-outlined-small-placeholder-space) - var(--field-decorator-line-focus-size))}.var-field-decorator__placeholder-text{max-width:calc(133% - var(--field-decorator-outlined-normal-padding-left) - var(--field-decorator-outlined-normal-padding-right));position:absolute;z-index:-1;display:inline-block;pointer-events:none;opacity:0;height:0;font-size:var(--field-decorator-placeholder-size)}.var-field-decorator__placeholder-text--small{max-width:calc(133% - var(--field-decorator-outlined-small-padding-left) - var(--field-decorator-outlined-small-padding-right))}:root{--form-details-error-message-color: var(--color-danger);--form-details-extra-message-color: #888;--form-details-margin-top: 6px;--form-details-font-size: 12px;--form-details-message-margin-right: 4px}.var-form-details{display:flex;justify-content:space-between;font-size:var(--form-details-font-size);margin-top:var(--form-details-margin-top)}.var-form-details-enter-from,.var-form-details-leave-to{opacity:0;margin-top:2px!important}.var-form-details-enter-active,.var-form-details-leave-active{transition:.2s all var(--cubic-bezier)}.var-form-details__message-enter-from,.var-form-details__message-leave-to{opacity:0}.var-form-details__message-enter-active,.var-form-details__message-leave-active{transition:.2s all var(--cubic-bezier)}.var-form-details__error-message{flex-grow:1;color:var(--form-details-error-message-color);margin-right:var(--form-details-message-margin-right);-webkit-user-select:none;user-select:none;text-align:left}.var-form-details__extra-message{flex-shrink:0;color:var(--form-details-extra-message-color);-webkit-user-select:none;user-select:none;text-align:right}:root{--chip-default-text-color: #555;--chip-default-color: #e0e0e0;--chip-primary-color: var(--color-primary);--chip-danger-color: var(--color-danger);--chip-success-color: var(--color-success);--chip-warning-color: var(--color-warning);--chip-info-color: var(--color-info);--chip-border-radius: 2px;--chip-normal-height: 32px;--chip-large-height: 40px;--chip-small-height: 24px;--chip-mini-height: 16px;--chip-round-radius: 100px;--chip-normal-padding: 0 10px;--chip-large-padding: 0 17px;--chip-small-padding: 0 6px;--chip-mini-padding: 0 4px;--chip-text-normal-margin: 0 5px;--chip-text-large-margin: 0 5px;--chip-text-small-margin: 0 3px;--chip-text-mini-margin: 0 2px;--chip-mini-font-size: var(--font-size-xs);--chip-small-font-size: var(--font-size-sm);--chip-normal-font-size: var(--font-size-md);--chip-large-font-size: var(--font-size-lg)}.var-fade-leave-to{opacity:0}.var-fade-leave-active{transition:opacity .3s}.var-chip{justify-content:center;align-items:center;font-family:Roboto,sans-serif;border-radius:var(--chip-border-radius);cursor:default;border:thin solid transparent;vertical-align:middle;transition:background-color .25s}.var-chip--default{color:var(--chip-default-text-color);background:var(--chip-default-color)}.var-chip--primary{color:#fff;background-color:var(--chip-primary-color)}.var-chip--info{color:#fff;background-color:var(--chip-info-color)}.var-chip--success{color:#fff;background-color:var(--chip-success-color)}.var-chip--warning{color:#fff;background-color:var(--chip-warning-color)}.var-chip--danger{color:#fff;background-color:var(--chip-danger-color)}.var-chip__plain{background-color:transparent}.var-chip__plain:active{box-shadow:none}.var-chip__plain-default{color:inherit;border-color:currentColor}.var-chip__plain-primary{color:var(--chip-primary-color);border-color:currentColor}.var-chip__plain-info{color:var(--chip-info-color);border-color:currentColor}.var-chip__plain-success{color:var(--chip-success-color);border-color:currentColor}.var-chip__plain-warning{color:var(--chip-warning-color);border-color:currentColor}.var-chip__plain-danger{color:var(--chip-danger-color);border-color:currentColor}.var-chip--round{border-radius:var(--chip-round-radius)}.var-chip--normal{font-size:var(--chip-normal-font-size);padding:var(--chip-normal-padding);height:var(--chip-normal-height)}.var-chip--large{padding:var(--chip-large-padding);font-size:var(--chip-large-font-size);height:var(--chip-large-height)}.var-chip--small{padding:var(--chip-small-padding);font-size:var(--chip-small-font-size);height:var(--chip-small-height)}.var-chip--mini{padding:var(--chip-mini-padding);font-size:var(--chip-mini-font-size);height:var(--chip-mini-height)}.var-chip--close{cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-chip__text-large{margin:var(--chip-text-large-margin)}.var-chip__text-normal{margin:var(--chip-text-normal-margin)}.var-chip__text-small{margin:var(--chip-text-small-margin)}.var-chip__text-mini{margin:var(--chip-text-mini-margin)}:root{--select-scroller-background: #fff;--select-scroller-padding: 6px 0;--select-scroller-max-height: 278px;--select-scroller-border-radius: 2px;--select-chip-margin: 5px 5px 0;--select-arrow-size: 20px;--select-standard-menu-margin: calc(var(--field-decorator-placeholder-size) * .75 + 12px) 0 0 0;--select-label-font-size: 16px}.var-select__menu[var-select-cover]{width:100%;background:transparent;display:block}.var-select__chip[var-select-cover]{margin:var(--select-chip-margin)}.var-select__scroller{max-height:var(--select-scroller-max-height);background:var(--select-scroller-background);padding:var(--select-scroller-padding);overflow-y:auto;transition:background-color .25s;border-radius:var(--select-scroller-border-radius)}.var-select__wrap{position:relative;display:flex;flex-direction:column;width:100%}.var-select__select{display:flex;justify-content:space-between;align-items:center;width:100%;min-height:24px;outline:none;border:none;font-size:inherit;color:var(--field-decorator-text-color);word-break:break-all;overflow-x:hidden;transition:color .25s}.var-select__label{display:flex;align-items:center;font-size:var(--select-label-font-size)}.var-select__placeholder{max-width:100%;position:absolute;top:50%;left:0;transform:translateY(-50%);font-size:var(--field-decorator-placeholder-size);line-height:1.5em;color:var(--field-decorator-blur-color);pointer-events:none;cursor:inherit}.var-select__arrow[var-select-cover]{flex-shrink:0;font-size:var(--select-arrow-size)}.var-select--standard-menu-margin{margin:var(--select-standard-menu-margin)!important}.var-select--disabled{color:var(--field-decorator-disabled-color);cursor:not-allowed}.var-select--error{color:var(--field-decorator-error-color)}.var-select--arrow-rotate{transform:rotate(180deg)}:root{--checkbox-checked-color: var(--color-primary);--checkbox-unchecked-color: #555;--checkbox-disabled-color: var(--color-text-disabled);--checkbox-error-color: var(--color-danger);--checkbox-action-padding: 6px;--checkbox-text-color: #555;--checkbox-icon-size: 24px}.var-checkbox{display:flex;align-items:center;transform:translate(calc(-1 * var(--checkbox-action-padding)));cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-checkbox__wrap{display:inline-flex;flex-direction:column}.var-checkbox__action{position:relative;display:flex;justify-content:center;align-items:center;flex-shrink:0;padding:var(--checkbox-action-padding);border-radius:50%;transition:background-color .25s,color .25s}.var-checkbox__icon[var-checkbox-cover]{display:block;font-size:var(--checkbox-icon-size)}.var-checkbox__text{color:var(--checkbox-text-color)}.var-checkbox--with-animation{animation:var-vibrate-animation .25s}.var-checkbox--checked{color:var(--checkbox-checked-color)}.var-checkbox--unchecked{color:var(--checkbox-unchecked-color)}.var-checkbox--disabled{color:var(--checkbox-disabled-color);cursor:not-allowed}.var-checkbox--error{color:var(--checkbox-error-color)}:root{--option-height: 38px;--option-padding: 0 12px;--option-font-size: 16px;--option-selected-background: var(--field-decorator-focus-color);--options-text-color: #555}.var-option{position:relative;display:flex;align-items:center;height:var(--option-height);padding:var(--option-padding);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--options-text-color)}.var-option__cover{position:absolute;top:0;left:0;right:0;bottom:0;opacity:.2;background:transparent}.var-option__text{display:flex;align-items:center;font-size:var(--option-font-size)}.var-option--selected-background{background:var(--option-selected-background)}.var-option--selected-color{color:var(--option-selected-background)}:root{--input-input-height: 24px;--input-input-font-size: 16px;--input-textarea-height: auto}.var-input__autocomplete{width:0;height:0;padding:0;border:none;outline:none;font-size:0}.var-input__input{width:100%;height:var(--input-input-height);padding:0;outline:none;border:none;background:transparent;color:var(--field-decorator-text-color);caret-color:var(--field-decorator-focus-color);font-size:var(--input-input-font-size);transition:color .25s}.var-input__input::placeholder{color:var(--input-placeholder-color)}.var-input--textarea{height:var(--input-textarea-height);min-height:var(--input-input-height)}.var-input--disabled{color:var(--field-decorator-disabled-color);cursor:not-allowed}.var-input--error{color:var(--field-decorator-error-color)}.var-input--caret-error{caret-color:var(--field-decorator-error-color)}.var-radio-group{display:flex;flex-wrap:wrap}.var-radio-group--horizontal{flex-direction:row}.var-radio-group--vertical{flex-direction:column}:root{--radio-checked-color: var(--color-primary);--radio-unchecked-color: #555;--radio-disabled-color: var(--color-text-disabled);--radio-error-color: var(--color-danger);--radio-icon-size: 24px;--radio-action-padding: 6px;--radio-text-color: #555}@keyframes var-vibrate-animation{0%{opacity:1;transform:scale(1)}50%{opacity:.8;transform:scale(.8)}to{opacity:1;transform:scale(1)}}.var-radio{display:flex;align-items:center;transform:translate(calc(-1 * var(--radio-action-padding)));cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-radio__wrap{display:inline-flex;flex-direction:column}.var-radio__action{position:relative;display:flex;justify-content:center;align-items:center;flex-shrink:0;padding:var(--radio-action-padding);border-radius:50%;transition:background-color .25s,color .25s}.var-radio__icon[var-radio-cover]{display:block;font-size:var(--radio-icon-size)}.var-radio__text{color:var(--radio-text-color)}.var-radio--with-animation[var-radio-cover]{animation:var-vibrate-animation .25s}.var-radio--checked{color:var(--radio-checked-color)}.var-radio--unchecked{color:var(--radio-unchecked-color)}.var-radio--disabled{color:var(--radio-disabled-color);cursor:not-allowed}.var-radio--error{color:var(--radio-error-color)}.overlay[data-v-4f42d0c6]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;bottom:0;right:0;background-color:#00000080;transition:all .3s}.box[data-v-4f42d0c6]{background:var(--card-background);padding:20px;border-radius:8px}.var-drag{position:fixed;display:inline-flex}.var-drag--transition{transition:transform .2s linear}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}:root{--popup-content-background-color: #fff;--popup-overlay-background-color: rgba(0, 0, 0, .6)}.var-fade-enter-from,.var-fade-leave-to{opacity:0}.var-fade-enter-active,.var-fade-leave-active{transition:opacity .25s}.var-pop-center-enter-from,.var-pop-center-leave-to{transform:scale(.3)}.var-pop-center-enter-active,.var-pop-center-leave-active{transition:all .25s}.var-pop-bottom-enter-from,.var-pop-bottom-leave-to{transform:translateY(100%)}.var-pop-bottom-enter-active,.var-pop-bottom-leave-active{transition:all .25s}.var-pop-top-enter-from,.var-pop-top-leave-to{transform:translateY(-100%)}.var-pop-top-enter-active,.var-pop-top-leave-active{transition:all .25s}.var-pop-left-enter-from,.var-pop-left-leave-to{transform:translate(-100%)}.var-pop-left-enter-active,.var-pop-left-leave-active{transition:all .25s}.var-pop-right-enter-from,.var-pop-right-leave-to{transform:translate(100%)}.var-pop-right-enter-active,.var-pop-right-leave-active{transition:all .25s}.var-popup{display:flex;justify-content:center;align-items:center;position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto}.var-popup__overlay{display:flex;justify-content:center;align-items:center;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--popup-overlay-background-color);transition:all .25s}.var-popup__content{overflow:auto;transition:all .25s}.var-popup--content-background-color{background-color:var(--popup-content-background-color)}.var-popup--center{position:relative}.var-popup--bottom{min-width:100%;position:absolute;left:0;bottom:0}.var-popup--top{min-width:100%;position:absolute;left:0;top:0}.var-popup--left{min-height:100%;position:absolute;left:0;top:0}.var-popup--right{min-height:100%;position:absolute;right:0;top:0}.var-popup--safe-area{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.var-popup--safe-area-top{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}:root{--action-sheet-border-radius: 2px;--action-sheet-title-color: #888;--action-sheet-title-padding: 10px 16px;--action-sheet-title-font-size: 14px;--action-sheet-action-item-height: 48px;--action-sheet-action-item-padding: 0 18px;--action-sheet-action-item-color: #333;--action-sheet-action-item-disabled-color: var(--color-text-disabled);--action-sheet-icon-margin: 0 20px 0 0;--action-sheet-icon-size: 24px;--action-sheet-background: #fff}.var-action-sheet{padding:10px 0;background:var(--action-sheet-background);transition:background-color .25s}.var-action-sheet__popup-radius{border-radius:var(--action-sheet-border-radius)}.var-action-sheet__title{padding:var(--action-sheet-title-padding);color:var(--action-sheet-title-color);font-size:var(--action-sheet-title-font-size)}.var-action-sheet__action-item{display:flex;align-items:center;height:var(--action-sheet-action-item-height);padding:var(--action-sheet-action-item-padding);color:var(--action-sheet-action-item-color);cursor:pointer}.var-action-sheet__action-name{overflow:auto;max-height:var(--action-sheet-action-item-height)}.var-action-sheet__action-icon[var-action-sheet-cover]{margin:var(--action-sheet-icon-margin);width:var(--action-sheet-icon-size);height:var(--action-sheet-icon-size);font-size:var(--action-sheet-icon-size)}.var-action-sheet--disabled{color:var(--action-sheet-action-item-disabled-color)!important;cursor:not-allowed}:root{--app-bar-color: var(--color-primary);--app-bar-title-padding: 0 12px;--app-bar-title-font-size: var(--font-size-lg);--app-bar-text-color: #fff;--app-bar-height: 54px;--app-bar-left-gap: 6px;--app-bar-right-gap: 6px;--app-bar-border-radius: 4px;--app-bar-font-size: var(--font-size-lg)}.var-app-bar{position:relative;width:100%;font-size:var(--app-bar-font-size);background:var(--app-bar-color);color:var(--app-bar-text-color);transition:background-color .25s}.var-app-bar__toolbar{position:relative;display:flex;justify-content:center;align-items:center;height:var(--app-bar-height)}.var-app-bar__title{font-size:var(--app-bar-title-font-size);flex:1;display:flex;justify-content:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;padding:var(--app-bar-title-padding)}.var-app-bar__left,.var-app-bar__right{display:flex;align-items:center;height:100%}.var-app-bar__left{position:absolute;top:0;left:var(--app-bar-left-gap)}.var-app-bar__right{position:absolute;top:0;right:var(--app-bar-right-gap)}.var-app-bar--round{border-radius:var(--app-bar-border-radius)}.var-app-bar--safe-area-top{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top);box-sizing:content-box!important}:root{--avatar-text-color: #f5f5f5;--avatar-border-radius: 4px;--avatar-mini-size: 28px;--avatar-small-size: 36px;--avatar-normal-size: 48px;--avatar-large-size: 64px;--avatar-border: 2px solid #fff;--avatar-background-color: #bebebe}.var-avatar{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;color:var(--avatar-text-color);border-radius:var(--avatar-border-radius);background-color:var(--avatar-background-color);transition:background-color .25s}.var-avatar img{width:100%;height:100%}.var-avatar--mini{width:var(--avatar-mini-size);height:var(--avatar-mini-size)}.var-avatar--small{width:var(--avatar-small-size);height:var(--avatar-small-size)}.var-avatar--normal{width:var(--avatar-normal-size);height:var(--avatar-normal-size)}.var-avatar--large{width:var(--avatar-large-size);height:var(--avatar-large-size)}.var-avatar--round{border-radius:50%}.var-avatar--bordered{border:var(--avatar-border)}.var-avatar__text{padding:0 4px;white-space:nowrap}:root{--avatar-group-offset: -10px}.var-avatar-group{display:inline-flex;flex-wrap:wrap}.var-avatar-group--row{margin-left:calc(var(--avatar-group-offset) * -1)}.var-avatar-group--row .var-avatar{margin-left:var(--avatar-group-offset)}.var-avatar-group--column{flex-direction:column;margin-top:calc(var(--avatar-group-offset) * -1)}.var-avatar-group--column .var-avatar{margin-top:var(--avatar-group-offset)}:root{--back-top-right: 40px;--back-top-bottom: 40px;--back-top-button-size: 40px}.var-back-top{position:fixed;z-index:100;right:var(--back-top-right);bottom:var(--back-top-bottom);transform:scale(0);transition:.3s var(--cubic-bezier);-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-back-top .var-button[var-back-top-cover]{width:var(--back-top-button-size);height:var(--back-top-button-size)}.var-back-top--active{transform:scale(1)}:root{--badge-content-padding: 2px 6px;--badge-icon-size: 12px;--badge-default-color: #e0e0e0;--badge-primary-color: var(--color-primary);--badge-danger-color: var(--color-danger);--badge-success-color: var(--color-success);--badge-warning-color: var(--color-warning);--badge-info-color: var(--color-info)}.var-badge{display:inline-block;position:relative;transition:background-color .25s}.var-badge__content{color:#fff;border-radius:100px;font-size:12px;padding:2px 6px;vertical-align:middle;text-align:center;display:inline-block}.var-badge__icon[var-badge-cover]{font-size:var(--badge-icon-size)}.var-badge--icon{padding:2px 4px}.var-badge--dot{box-sizing:content-box;width:8px;height:8px;border-radius:8px;padding:0}.var-badge--default{background:var(--badge-default-color)}.var-badge--primary{background:var(--badge-primary-color)}.var-badge--info{background:var(--badge-info-color)}.var-badge--warning{background:var(--badge-warning-color)}.var-badge--success{background:var(--badge-success-color)}.var-badge--danger{background:var(--badge-danger-color)}.var-badge--right-top{position:absolute;top:0;right:0;transform:translateY(-50%) translate(50%)}.var-badge--left-top{position:absolute;top:0;left:0;transform:translateY(-50%) translate(-50%)}.var-badge--right-bottom{position:absolute;bottom:0;right:0;transform:translateY(50%) translate(50%)}.var-badge--left-bottom{position:absolute;bottom:0;left:0;transform:translateY(50%) translate(-50%)}.var-badge-fade-enter-active,.var-badge-fade-leave-active{transition:opacity .15s var(--cubic-bezier)}.var-badge-fade-enter-from,.var-badge-fade-leave-to{opacity:0}:root{--bottom-navigation-height: 50px;--bottom-navigation-z-index: 1;--bottom-navigation-background-color: #fff;--bottom-navigation-border-color: #e3e3e3;--bottom-navigation-fab-offset: 4px}.var-bottom-navigation{width:100%;height:var(--bottom-navigation-height);display:flex;position:relative;background-color:var(--bottom-navigation-background-color);transition:background-color .25s,border-color .25s;-webkit-tap-highlight-color:transparent}.var-bottom-navigation--safe-area{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);box-sizing:content-box!important}.var-bottom-navigation--fixed{position:fixed;left:0;bottom:0}.var-bottom-navigation--border{border-top:1px solid var(--bottom-navigation-border-color)}.var-bottom-navigation__fab[var-bottom-navigation__fab]{width:var(--bottom-navigation-height);height:var(--bottom-navigation-height);position:absolute;z-index:2;transform:translateY(-50%);overflow:hidden;transition:right .25s cubic-bezier(.4,0,.2,1) 0ms}.var-bottom-navigation--fab-center{right:calc(50% - var(--bottom-navigation-height) / 2)}.var-bottom-navigation--fab-right{right:var(--bottom-navigation-fab-offset)}:root{--bottom-navigation-item-font-size: var(--font-size-sm);--bottom-navigation-item-inactive-color: #646566;--bottom-navigation-item-active-color: var(--color-primary);--bottom-navigation-item-active-background-color: #fff;--bottom-navigation-item-line-height: 1;--bottom-navigation-item-icon-size: 22px;--bottom-navigation-item-icon-margin-bottom: 5px}.var-bottom-navigation-item{height:100%;padding:6px 12px 8px;position:relative;display:inline-flex;flex:1 1 0%;flex-direction:column;align-items:center;justify-content:center;line-height:var(--bottom-navigation-item-line-height);color:var(--bottom-navigation-item-inactive-color);cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;-moz-appearance:none;appearance:none;text-decoration:none;background-color:transparent;outline:0;border:0;transition:color .25s,margin .25s}.var-bottom-navigation-item--active{color:var(--bottom-navigation-item-active-color);background-color:var(--bottom-navigation-item-active-background-color);transition:background-color .25s}.var-bottom-navigation-item--active .var-bottom-navigation-item__label{font-size:calc(var(--bottom-navigation-item-font-size) * 1.16)}.var-bottom-navigation-item--right-half-space{margin-right:calc(var(--bottom-navigation-height) / 2)}.var-bottom-navigation-item--left-half-space{margin-left:calc(var(--bottom-navigation-height) / 2)}.var-bottom-navigation-item--right-space{margin-right:calc(var(--bottom-navigation-height) + var(--bottom-navigation-fab-offset))}.var-bottom-navigation-item__icon[var-bottom-navigation-item-cover]{font-size:var(--bottom-navigation-item-icon-size)}.var-bottom-navigation-item__badge[var-bottom-navigation-item-cover]{position:absolute;left:4px;transform:translateY(-22px)}.var-bottom-navigation-item__label{margin-top:var(--bottom-navigation-item-icon-margin-bottom);font-size:var(--bottom-navigation-item-font-size);transition:font-size .2s ease .1s;white-space:nowrap}:root{--breadcrumb-active-color: var(--color-primary);--breadcrumb-inactive-color: #888;--breadcrumb-separator-margin: 0 10px;--breadcrumb-separator-font-size: 14px}.var-breadcrumb{display:flex;align-items:center;color:var(--breadcrumb-inactive-color)}.var-breadcrumb__separator{margin:var(--breadcrumb-separator-margin);font-size:var(--breadcrumb-separator-font-size)}.var-breadcrumb--active{color:var(--breadcrumb-active-color);transition:opacity .25s}.var-breadcrumb--active:hover{opacity:.7;cursor:pointer}.var-breadcrumbs{display:flex;flex-wrap:wrap;align-items:center}.var-button-group{display:inline-flex;border-radius:var(--button-border-radius);max-width:100%;overflow:auto}.var-button-group .var-button:active{box-shadow:none}.var-button-group--horizontal .var-button:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.var-button-group--horizontal .var-button:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.var-button-group--horizontal .var-button:not(:first-child):not(:last-child){border-radius:0}.var-button-group--horizontal.var-button-group--mode-text .var-button{border-right:thin solid currentColor}.var-button-group--horizontal.var-button-group--mode-text .var-button:last-child{border:none}.var-button-group--horizontal.var-button-group--mode-outline .var-button:not(:first-child){border-left:none}.var-button-group--vertical{flex-direction:column}.var-button-group--vertical .var-button:first-child{border-bottom-left-radius:0;border-bottom-right-radius:0}.var-button-group--vertical .var-button:last-child{border-top-left-radius:0;border-top-right-radius:0}.var-button-group--vertical .var-button:not(:first-child):not(:last-child){border-radius:0}.var-button-group--vertical.var-button-group--mode-text .var-button{border-bottom:thin solid currentColor}.var-button-group--vertical.var-button-group--mode-text .var-button:last-child{border:none}.var-button-group--vertical.var-button-group--mode-outline .var-button:not(:first-child){border-top:none}:root{--cell-color: var(--color-text);--cell-font-size: var(--font-size-md);--cell-description-font-size: var(--font-size-sm);--cell-description-color: rgba(0, 0, 0, .6);--cell-description-margin-top: 4px;--cell-padding: 10px 12px;--cell-min-height: 40px;--cell-border-color: #bcc2cb;--cell-border-left: 12px;--cell-border-right: 12px;--cell-icon-right: 8px;--cell-extra-left: 8px}.var-cell{align-items:center;display:flex;min-height:var(--cell-min-height);outline:none;width:100%;padding:var(--cell-padding);position:relative;box-sizing:border-box;font-size:var(--cell-font-size);color:var(--cell-color)}.var-cell--border:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;bottom:0;right:var(--cell-border-right);left:var(--cell-border-left);border-bottom:1px solid var(--cell-border-color);transform:scaleY(.5)}.var-cell__icon{margin-right:var(--cell-icon-right);flex:0}.var-cell__content{flex:1;min-width:0}.var-cell__title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.var-cell__description{font-size:var(--cell-description-font-size);color:var(--cell-description-color);margin-top:var(--cell-description-margin-top)}.var-cell__extra{flex:0;margin-left:var(--cell-extra-left)}.var-cell--cursor{cursor:pointer}.var-checkbox-group{display:flex;flex-wrap:wrap}.var-checkbox-group--horizontal{flex-direction:row}.var-checkbox-group--vertical{flex-direction:column}.var-collapse{position:relative;width:100%;z-index:0}:root{--collapse-background: #fff;--collapse-text-color: #232222;--collapse-header-font-size: var(--font-size-lg);--collapse-header-padding: 10px 12px;--collapse-content-font-size: var(--font-size-md);--collapse-content-padding: 0 12px 10px;--collapse-item-margin-top: 16px;--collapse-disable-color: #bdbdbd;--collapse-border-top: thin solid rgba(0, 0, 0, .12)}.var-collapse-item{-webkit-tap-highlight-color:rgba(0,0,0,0);box-sizing:border-box;position:relative;margin-top:0;background:var(--collapse-background);color:var(--collapse-text-color);transition:margin-top .25s,background-color .25s}.var-collapse-item__shadow{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1}.var-collapse-item:not(:first-child):after{border-top:var(--collapse-divider-top);content:"";left:0;position:absolute;right:0;top:0}.var-collapse-item__header{align-items:center;display:flex;font-size:var(--collapse-header-font-size);outline:none;padding:var(--collapse-header-padding);justify-content:space-between;position:relative}.var-collapse-item__header-title{transition:color .25s}.var-collapse-item__header-icon{transform:rotate(0);opacity:1}.var-collapse-item__header-open{transform:rotate(-180deg)}.var-collapse-item__header--disable{opacity:0}.var-collapse-item__content{font-size:var(--collapse-content-font-size);overflow:hidden;transition:all .25s}.var-collapse-item__content-wrap{padding:var(--collapse-content-padding);word-break:break-all}.var-collapse-item--active+.var-collapse-item,.var-collapse-item--active:not(:first-child){margin-top:var(--collapse-item-margin-top)}.var-collapse-item--active+.var-collapse-item:after,.var-collapse-item--active:not(:first-child):after{border-top:none}.var-collapse-item--disable{color:var(--collapse-disable-color);cursor:not-allowed}:root{--countdown-text-color: #555}.var-countdown{color:var(--countdown-text-color)}:root{--counter-padding: 0 4px;--counter-font-color: #fff;--counter-background: var(--color-primary);--counter-input-width: 28px;--counter-input-margin: 0 4px;--counter-input-font-size: 14px;--counter-button-size: 28px;--counter-button-text-color: #fff;--counter-button-icon-size: 100%;--counter-disabled-color: var(--color-disabled);--counter-disabled-opacity: var(--opacity-disabled);--counter-error-color: var(--color-danger)}.var-counter{display:inline-flex;flex-direction:column;align-items:flex-start}.var-counter__controller{display:flex;align-items:center;color:var(--counter-font-color);border-radius:var(--counter-button-size);padding:var(--counter-padding);background:var(--counter-background);transition:color .25s,background-color .25s,opacity .25s}.var-counter__input{width:var(--counter-input-width);font-size:var(--counter-input-font-size);outline:none;border:none;background:transparent;padding:0;text-align:center;color:var(--counter-font-color);margin:var(--counter-input-margin)}.var-counter__input[disabled]{background:transparent}.var-counter__increment-button[var-counter-cover],.var-counter__decrement-button[var-counter-cover]{width:var(--counter-button-size);height:var(--counter-button-size);font-size:var(--counter-button-icon-size);color:var(--counter-button-text-color);border-radius:50%;padding:0;background-color:#0000;box-shadow:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;user-select:none}.var-counter__increment-button[var-counter-cover]:active,.var-counter__decrement-button[var-counter-cover]:active{box-shadow:none}.var-counter--disabled{opacity:var(--counter-disabled-opacity);cursor:not-allowed}.var-counter--disabled .var-hover-overlay{opacity:0}.var-counter--not-allowed{cursor:not-allowed!important}.var-counter--hidden{opacity:0}.var-counter--error{background:var(--counter-error-color)}:root{--date-picker-border-radius: 4px;--date-picker-font-size: var(--font-size-md);--date-picker-min-width: 290px;--date-picker-height: 385px;--date-picker-main-color: rgba(0, 0, 0, .87);--date-picker-title-padding: 16px;--date-picker-title-background: var(--color-primary);--date-picker-title-color: #fff;--date-picker-title-year-font-size: var(--font-size-md);--date-picker-title-year-font-weight: 500;--date-picker-title-year-margin-bottom: 8px;--date-picker-title-date-height: 48px;--date-picker-title-date-font-size: 34px;--date-picker-title-date-font-weight: 500;--date-picker-title-date-range-font-size: 20px;--date-picker-body-background-color: #fff;--picker-header-padding: 4px 16px;--picker-header-color: #555;--month-picker-padding: 0 12px;--month-picker-item-width: 33%;--month-picker-item-height: 56px;--month-picker-item-button-max-width: 140px;--year-picker-font-weight: 400;--year-picker-item-padding: 8px 0;--year-picker-item-active-font-size: 26px;--year-picker-item-active-font-weight: 500;--year-picker-item-active-font-padding: 10px 0;--year-picker-item-active-color: var(--color-primary);--year-picker-item-color: #555;--day-picker-content-item-width: 14.28%;--day-picker-content-item-font-size: var(--font-size-sm);--day-picker-content-item-padding: 2px 0;--day-picker-content-item-button-width: 32px;--day-picker-content-item-button-height: 32px;--day-picker-content-item-button-font-size: var(--font-size-sm);--day-picker-head-item-color: rgba(0, 0, 0, .38);--day-picker-head-item-padding: 8px 0;--day-picker-head-item-font-weight: 600}.var-date-picker{-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--date-picker-border-radius);contain:layout style;display:flex;width:100%;flex-direction:column;font-size:var(--date-picker-font-size);position:relative;min-width:var(--date-picker-min-width);height:var(--date-picker-height);overflow:hidden}.var-date-picker ul{list-style:none;margin:0;padding:0}.var-date-picker__title{padding:var(--date-picker-title-padding);color:var(--date-picker-title-color);background:var(--date-picker-title-background);display:flex;justify-content:space-between;flex-direction:column;flex-wrap:wrap}.var-date-picker__title-year{opacity:.6;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);align-items:center;display:inline-flex;font-size:var(--date-picker-title-year-font-size);font-weight:var(--date-picker-title-year-font-weight);margin-bottom:var(--date-picker-title-year-margin-bottom);transition:.3s var(--cubic-bezier)}.var-date-picker__title-year--active{opacity:1}.var-date-picker__title-date{height:var(--date-picker-title-date-height);overflow:hidden;font-size:var(--date-picker-title-date-font-size);text-align:left;font-weight:var(--date-picker-title-date-font-weight);position:relative;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);display:flex;align-items:center;opacity:.6;transition:.3s var(--cubic-bezier)}.var-date-picker__title-date--active{opacity:1}.var-date-picker__title-date--range{font-size:var(--date-picker-title-date-range-font-size)}.var-date-picker__body{flex:1;position:relative;overflow:auto;background-color:var(--date-picker-body-background-color)}.var-date-picker__body::-webkit-scrollbar{display:none;width:0;background:transparent}.var-date-picker .var-picker-header{padding:var(--picker-header-padding);align-items:center;display:flex;justify-content:space-between;position:relative;color:var(--picker-header-color)}.var-date-picker .var-picker-header__value{flex:1;text-align:center;position:relative;overflow:hidden;font-weight:700;cursor:pointer;-webkit-user-select:none;user-select:none}.var-date-picker .var-picker-header__value div{width:100%}.var-date-picker .var-month-picker__content{padding:var(--month-picker-padding)}.var-date-picker .var-month-picker__content ul{display:flex;flex-wrap:wrap;justify-content:space-between}.var-date-picker .var-month-picker__content ul li{width:var(--month-picker-item-width);display:flex;height:var(--month-picker-item-height);align-items:center;justify-content:center}.var-date-picker .var-month-picker__button[var-month-picker-cover]{width:100%;max-width:var(--month-picker-item-button-max-width)}.var-date-picker .var-month-picker__button[var-date-picker-color-cover=true]{color:var(--date-picker-main-color)}.var-date-picker .var-month-picker__button--disabled{color:var(--color-text-disabled)!important;cursor:not-allowed}.var-date-picker .var-year-picker{width:100%;height:100%;font-weight:var(--year-picker-font-weight);padding:0;margin:0;list-style-type:none;overflow:auto;text-align:center}.var-date-picker .var-year-picker__item{padding:var(--year-picker-item-padding);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--year-picker-item-color)}.var-date-picker .var-year-picker__item--active{font-size:var(--year-picker-item-active-font-size);font-weight:var(--year-picker-item-active-font-weight);padding:var(--year-picker-item-active-font-padding);color:var(--year-picker-item-active-color)}.var-date-picker .var-day-picker__content ul{display:flex;flex-wrap:wrap}.var-date-picker .var-day-picker__content ul li{position:relative;display:flex;justify-content:center;width:var(--day-picker-content-item-width);font-size:var(--day-picker-content-item-font-size);padding:var(--day-picker-content-item-padding)}.var-date-picker .var-day-picker__head li{color:var(--day-picker-head-item-color);padding:var(--day-picker-head-item-padding);font-weight:var(--day-picker-head-item-font-weight)}.var-date-picker .var-day-picker__button[var-day-picker-cover]{width:var(--day-picker-content-item-button-width);height:var(--day-picker-content-item-button-height);font-size:var(--day-picker-content-item-button-font-size)}.var-date-picker .var-day-picker__button:not(.var-day-picker__button--usable){cursor:unset}.var-date-picker .var-day-picker__button[var-date-picker-color-cover=true]{color:var(--date-picker-main-color)}.var-date-picker .var-day-picker__button--disabled{color:var(--color-text-disabled)!important;cursor:not-allowed}.var-date-picker-translatey-enter-from{opacity:0;transform:translateY(100%)}.var-date-picker-translatey-enter-active,.var-date-picker-reverse-translatey-enter-active{transition:.3s var(--cubic-bezier)}.var-date-picker-translatey-leave-active,.var-date-picker-reverse-translatey-leave-active{position:absolute;transition:.3s var(--cubic-bezier)}.var-date-picker-translatey-leave-to,.var-date-picker-reverse-translatey-enter-from{opacity:0;transform:translateY(-100%)}.var-date-picker-reverse-translatey-leave-to{opacity:0;transform:translateY(100%)}.var-date-picker-panel-fade-enter-from,.var-date-picker-panel-fade-leave-to{transition:.3s var(--cubic-bezier);opacity:0}.var-date-picker-panel-fade-leave-active{position:absolute}.var-date-picker-translatex-enter-from{opacity:0;transform:translate(100%)}.var-date-picker-reverse-translatex-enter-from{opacity:0;transform:translate(-100%)}.var-date-picker-translatex-enter-active,.var-date-picker-reverse-translatex-enter-active{transition:.3s var(--cubic-bezier)}.var-date-picker-translatex-leave-active,.var-date-picker-reverse-translatex-leave-active{position:absolute;transition:.3s var(--cubic-bezier)}.var-date-picker-translatex-leave-to{opacity:0;transform:translate(-100%)}.var-date-picker-reverse-translatex-leave-to{opacity:0;transform:translate(100%)}:root{--dialog-width: 280px;--dialog-border-radius: 3px;--dialog-title-padding: 20px 20px 0;--dialog-message-color: #888;--dialog-message-padding: 12px 20px;--dialog-message-line-height: 24px;--dialog-message-font-size: var(--font-size-md);--dialog-title-font-size: var(--font-size-lg);--dialog-actions-padding: 0 12px 12px;--dialog-button-margin-left: 6px;--dialog-title-color: #555;--dialog-confirm-button-color: var(--color-primary);--dialog-cancel-button-color: var(--color-primary);--dialog-background: #fff}.var-dialog{width:var(--dialog-width);border-radius:var(--dialog-border-radius);background:var(--dialog-background);transition:.25s background-color}.var-dialog__popup[var-dialog-cover]{background:transparent}.var-dialog__title{font-size:var(--dialog-title-font-size);font-weight:400;padding:var(--dialog-title-padding);color:var(--dialog-title-color)}.var-dialog__message{padding:var(--dialog-message-padding);color:var(--dialog-message-color);line-height:var(--dialog-message-line-height);font-size:var(--dialog-message-font-size)}.var-dialog__actions{display:flex;justify-content:flex-end;padding:var(--dialog-actions-padding)}.var-dialog__button[var-dialog-cover]{margin-left:var(--dialog-button-margin-left);background-color:transparent;box-shadow:none}.var-dialog__button[var-dialog-cover]:active{box-shadow:none}.var-dialog__confirm-button[var-dialog-cover]{color:var(--dialog-confirm-button-color)}.var-dialog__cancel-button[var-dialog-cover]{color:var(--dialog-cancel-button-color)}:root{--divider-color: rgba(0, 0, 0, .12);--divider-text-color: #888;--divider-text-margin: 8px 0;--divider-text-padding: 0 8px;--divider-inset: 72px}.var-divider{position:relative;width:100%;height:0;border:none;border-top:1px solid var(--divider-color);margin:var(--divider-text-margin);font-size:var(--font-size-md);color:var(--divider-text-color)}.var-divider--vertical{width:0;height:auto;align-self:stretch;margin:0 var(--divider-text-margin);border-top:none;border-left:1px solid var(--divider-color)}.var-divider--inset{width:calc(100% - var(--divider-inset));left:var(--divider-inset)}.var-divider__text{display:inline-block;padding:var(--divider-text-padding)}.var-divider--with-text{background-color:transparent;height:fit-content;display:flex;align-items:center;justify-content:center;border:none}.var-divider--with-text:before,.var-divider--with-text:after{display:inline-block;content:"";flex:1;height:0;border-top:1px solid var(--divider-color)}.var-divider--dashed{border-top-style:dashed}.var-divider--dashed.var-divider--vertical{border-top:none;border-left-style:dashed}.var-divider--hairline{transform:scaleY(.5)}.var-divider--hairline.var-divider--with-text{transform:none}.var-divider--hairline.var-divider--with-text:before,.var-divider--hairline.var-divider--with-text:after{transform:scaleY(.5)}.var-divider--hairline.var-divider--vertical{transform:scaleX(.5)}.var-ellipsis{width:100%;overflow:hidden;vertical-align:bottom}.var-ellipsis--clamp{display:-webkit-inline-box;-webkit-box-orient:vertical}.var-ellipsis--line{display:inline-block;white-space:nowrap;text-overflow:ellipsis}.var-ellipsis--cursor{cursor:pointer}.var-ellipsis--expand{display:inline-block;white-space:wrap;overflow:visible}:root{--fab-top: 70px;--fab-bottom: 16px;--fab-left: 16px;--fab-right: 16px;--fab-trigger-size: 56px;--fab-trigger-inactive-icon-size: 26px;--fab-trigger-active-icon-size: 22px;--fab-actions-padding: 10px 0;--fab-action-margin: 6px;--fab-transition-standard-easing: cubic-bezier(.4, 0, .2, 1)}.var-fab-transition-default-enter-active,.var-fab-transition-default-leave-active{transition:.3s var(--fab-transition-standard-easing)!important}.var-fab__trigger[var-fab-cover]{width:var(--fab-trigger-size);height:var(--fab-trigger-size)}.var-fab__trigger-inactive-icon[var-fab-cover]{font-size:var(--fab-trigger-inactive-icon-size)}.var-fab__trigger-active-icon[var-fab-cover]{font-size:var(--fab-trigger-active-icon-size)}.var-fab__actions{position:absolute;display:flex;justify-content:center;align-items:center;padding:var(--fab-actions-padding)}.var-fab__action{margin:var(--fab-action-margin)}.var-fab--position-left-top{top:var(--fab-top);left:var(--fab-left)}.var-fab--position-right-top{top:var(--fab-top);right:var(--fab-right)}.var-fab--position-left-bottom{bottom:var(--fab-bottom);left:var(--fab-left)}.var-fab--position-right-bottom{bottom:var(--fab-bottom);right:var(--fab-right)}.var-fab--direction-left .var-fab__actions,.var-fab--direction-right .var-fab__actions{height:100%;top:0;padding:0 var(--fab-actions-padding)}.var-fab--direction-left .var-fab__actions{flex-direction:row-reverse;right:100%}.var-fab--direction-right .var-fab__actions{flex-direction:row;left:100%}.var-fab--direction-top .var-fab__actions,.var-fab--direction-bottom .var-fab__actions{width:100%;left:0}.var-fab--direction-top .var-fab__actions{flex-direction:column-reverse;bottom:100%}.var-fab--direction-bottom .var-fab__actions{flex-direction:column;top:100%}.var-fab--fixed{position:fixed}.var-fab--absolute{position:absolute}.var-fab--active-transition-enter-active,.var-fab--active-transition-leave-active{transition:.3s var(--fab-transition-standard-easing)!important}.var-fab--active-transition-enter-from,.var-fab--active-transition-leave-to{transform:scale(0)}.var-fab--actions-transition-top-enter-active,.var-fab--actions-transition-top-leave-active{transition:.3s var(--fab-transition-standard-easing)!important}.var-fab--actions-transition-top-enter-from,.var-fab--actions-transition-top-leave-to{opacity:0;transform:translateY(40px)}.var-fab--actions-transition-bottom-enter-active,.var-fab--actions-transition-bottom-leave-active{transition:.3s var(--fab-transition-standard-easing)!important}.var-fab--actions-transition-bottom-enter-from,.var-fab--actions-transition-bottom-leave-to{opacity:0;transform:translateY(-40px)}.var-fab--actions-transition-left-enter-active,.var-fab--actions-transition-left-leave-active{transition:.3s var(--fab-transition-standard-easing)!important}.var-fab--actions-transition-left-enter-from,.var-fab--actions-transition-left-leave-to{opacity:0;transform:translate(40px)}.var-fab--actions-transition-right-enter-active,.var-fab--actions-transition-right-leave-active{transition:.3s var(--fab-transition-standard-easing)!important}.var-fab--actions-transition-right-enter-from,.var-fab--actions-transition-right-leave-to{opacity:0;transform:translate(-40px)}.var-fab--trigger-icon-animation{transform:scale(.4);opacity:0;transition-property:transform,opacity}.var-fab--safe-area{margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom)}.var-image{overflow:hidden}.var-image__image{display:block;width:100%;height:100%}:root{--swipe-indicator-color: #fff;--swipe-indicators-offset: 10px;--swipe-indicator-offset: 4px}.var-swipe{position:relative;overflow:hidden;-webkit-user-select:none;user-select:none;width:100%}.var-swipe__track{width:100%;height:100%;display:flex;transition-property:transform}.var-swipe__indicators{position:absolute;display:flex;bottom:var(--swipe-indicators-offset);left:50%;transform:translate(-50%)}.var-swipe__indicator{width:8px;height:8px;border-radius:50%;background:var(--swipe-indicator-color);opacity:.3;margin:0 var(--swipe-indicator-offset);transition:opacity .3s}.var-swipe--vertical{flex-direction:column}.var-swipe--indicators-vertical{flex-direction:column;left:var(--swipe-indicators-offset);bottom:50%;transform:translateY(50%)}.var-swipe--indicator-active{opacity:1}.var-swipe--indicator-vertical{margin:var(--swipe-indicator-offset) 0}.var-swipe-item{flex-shrink:0;width:100%;height:100%}:root{--image-preview-swipe-indicators-text-color: #ddd;--image-preview-swipe-indicators-padding: 16px 0;--image-preview-zoom-container-background: #000;--image-preview-close-icon-top: 14px;--image-preview-close-icon-right: 14px;--image-preview-extra-top: 14px;--image-preview-extra-left: 14px;--image-preview-close-icon-size: 22px;--image-preview-close-icon-color: #fff}.var-image-preview__popup[var-image-preview-cover]{height:100%;background:var(--image-preview-zoom-container-background)}.var-image-preview__swipe[var-image-preview-cover]{width:100vw;height:100%}.var-image-preview__swipe-item[var-image-preview-cover]{overflow:hidden}.var-image-preview__close-icon[var-image-preview-cover]{position:absolute;top:var(--image-preview-close-icon-top);right:var(--image-preview-close-icon-right);color:var(--image-preview-close-icon-color);font-size:var(--image-preview-close-icon-size)}.var-image-preview__extra{position:absolute;top:var(--image-preview-extra-top);left:var(--image-preview-extra-left)}.var-image-preview__indicators{position:absolute;top:0;width:100%;padding:var(--image-preview-swipe-indicators-padding);color:var(--image-preview-swipe-indicators-text-color);text-align:center}.var-image-preview__image{width:100%;height:100%;object-fit:contain;-webkit-user-drag:none}.var-image-preview--prevent{-webkit-touch-callout:none;pointer-events:none}.var-image-preview__zoom-container{display:flex;justify-content:center;align-items:center;width:100vw;height:100%;transition:transform .2s}.var-sticky{position:relative}.var-sticky--css-mode{position:sticky;position:-webkit-sticky}.var-index-anchor{position:relative}:root{--index-bar-list-item-font-size: var(--font-size-xs);--index-bar-list-item-color: var(--color-primary);--index-bar-list-item-active-color: var(--color-danger);--index-bar-list-item-height: 14px;--index-bar-list-item-padding: 0 10px}.var-index-bar{position:relative}.var-index-bar__anchor-list{position:fixed;right:0;top:50%;transform:translateY(-50%);list-style:none;padding:0;margin:0}.var-index-bar__anchor-item{font-size:var(--index-bar-list-item-font-size);display:flex;align-items:center;height:var(--index-bar-list-item-height);justify-content:center;padding:var(--index-bar-list-item-padding);color:var(--index-bar-list-item-color);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-index-bar__anchor-item--active{color:var(--index-bar-list-item-active-color)}:root{--link-default-color: #555;--link-primary-color: var(--color-primary);--link-danger-color: var(--color-danger);--link-success-color: var(--color-success);--link-warning-color: var(--color-warning);--link-info-color: var(--color-info);--link-disabled-color: var(--color-text-disabled);--link-font-size: var(--font-size-md)}.var-link{position:relative;justify-content:center;align-items:center;outline:none;cursor:pointer;font-family:inherit;white-space:nowrap;text-decoration:none;font-size:var(--link-font-size)}.var-link--underline-always,.var-link--underline-hover:hover{text-decoration:underline}.var-link--default{color:var(--link-default-color)}.var-link--primary{color:var(--link-primary-color)}.var-link--info{color:var(--link-info-color)}.var-link--success{color:var(--link-success-color)}.var-link--warning{color:var(--link-warning-color)}.var-link--danger{color:var(--link-danger-color)}.var-link--disabled{color:var(--link-disabled-color);cursor:not-allowed}:root{--list-loading-height: 50px;--list-finished-height: 50px;--list-error-height: 50px;--list-loading-color: #888;--list-finished-color: #888;--list-error-color: #888;--list-loading-font-size: var(--font-size-md);--list-finished-font-size: var(--font-size-md);--list-error-font-size: var(--font-size-md)}.var-list__detector{width:100%}.var-list__loading{display:flex;justify-content:center;align-items:center;width:100%;height:var(--list-loading-height);font-size:var(--list-loading-font-size);color:var(--list-loading-color)}.var-list__loading-text{margin-right:10px}.var-list__finished{display:flex;justify-content:center;align-items:center;width:100%;height:var(--list-finished-height);font-size:var(--list-finished-font-size);color:var(--list-finished-color)}.var-list__error{display:flex;justify-content:center;align-items:center;width:100%;height:var(--list-error-height);font-size:var(--list-error-font-size);color:var(--list-error-color);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}:root{--loading-bar-color: var(--color-primary);--loading-bar-error-color: var(--color-danger);--loading-bar-height: 3px}.var-loading-bar{position:fixed;left:0;top:0;transition:all .25s;height:var(--loading-bar-height);background-color:var(--loading-bar-color)}.var-loading-bar--error{background-color:var(--loading-bar-error-color)}:root{--overlay-background-color: rgba(0, 0, 0, .6)}.var-overlay{display:flex;justify-content:center;align-items:center;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--overlay-background-color);transition:all .25s}.var-overlay--fade-enter-from,.var-overlay--fade-leave-to{opacity:0}.var-overlay--fade-enter-active,.var-overlay--fade-leave-active{transition:opacity .25s}:root{--pagination-text-color: #555;--pagination-font-size: var(--font-size-md);--pagination-active-color: #fff;--pagination-active-bg-color: var(--color-primary);--pagination-hover-bg-color: rgba(85, 85, 85, .15);--pagination-total-margin: 0 12px;--pagination-total-line-height: 24px;--pagination-item-width: 32px;--pagination-item-height: 32px;--pagination-item-margin: 0 6px;--pagination-item-background: #fff;--pagination-item-border-radius: 4px;--pagination-item-simple-border-radius: 50%;--pagination-list-bg-color: #fff;--pagination-list-active-bg-color: #edf5ff;--pagination-list-active-color: var(--color-primary);--pagination-input-width: 32px;--pagination-disabled-color: var(--color-text-disabled);--pagination-bg-disabled-color: var(--color-disabled);--pagination-size-line-height: 24px}.pagination-flex-nowrap{display:flex;white-space:nowrap;align-items:center}.var-pagination{display:flex;align-items:center;list-style:none;margin:0;font-size:var(--pagination-font-size);padding:0;color:var(--pagination-text-color)}.var-pagination__item{display:inline-flex;min-width:var(--pagination-item-width);align-items:center;justify-content:center;margin:var(--pagination-item-margin);height:var(--pagination-item-height);cursor:pointer;border-radius:var(--pagination-item-border-radius);outline:none;transition:all .25s;-webkit-user-select:none;user-select:none;background-color:var(--pagination-item-background)}.var-pagination__item:hover{background-color:var(--pagination-hover-bg-color)}.var-pagination__item--active{color:var(--pagination-active-color);background-color:var(--pagination-active-bg-color)!important}.var-pagination__item--hide{display:none}.var-pagination__item--simple{background:transparent;border-radius:var(--pagination-item-simple-border-radius)}.var-pagination__item--disabled{cursor:not-allowed;color:var(--pagination-disabled-color);background-color:unset}.var-pagination__item--disabled:hover{background-color:unset}.var-pagination__item--disabled--hover:hover{background-color:inherit}.var-pagination__item--disabled--active,.var-pagination__item--disabled--active:hover{background-color:var(--pagination-bg-disabled-color)}.var-pagination__prev{margin-left:0}.var-pagination__total{display:flex;white-space:nowrap;align-items:center;line-height:var(--pagination-total-line-height);margin:var(--pagination-total-margin)}.var-pagination__size{display:flex;white-space:nowrap;align-items:center;line-height:var(--pagination-size-line-height);margin:var(--pagination-item-margin)}.var-pagination__size--open{display:flex;align-items:center;cursor:pointer}.var-pagination__size--open--disabled{cursor:inherit}.var-pagination__list{background-color:var(--pagination-list-bg-color);cursor:pointer;transition:all .25s}.var-pagination__list:hover{color:var(--pagination-list-active-color);background-color:var(--pagination-list-active-bg-color)}.var-pagination__list--active{background-color:var(--pagination-list-active-bg-color)!important;color:var(--pagination-list-active-color)}.var-pagination__quickly,.var-pagination__simple{display:flex;white-space:nowrap;align-items:center}.var-pagination__quickly [var-pagination-cover],.var-pagination__simple [var-pagination-cover]{width:var(--pagination-input-width)}.var-pagination__quickly [var-pagination-cover] .var-field-decorator__middle,.var-pagination__simple [var-pagination-cover] .var-field-decorator__middle{padding:0}.var-pagination__quickly [var-pagination-cover] .var-input__input,.var-pagination__simple [var-pagination-cover] .var-input__input{height:auto;text-align:center}.var-pagination__quickly-line,.var-pagination__simple-line{height:1px;background:transparent}.var-pagination__quickly{margin:var(--pagination-item-margin)}.var-pagination__quickly [var-pagination-cover]{margin-left:6px}.var-pagination__size--open-icon[var-pagination-cover]{font-size:inherit}:root{--paper-background: #fff}.var-paper{background:var(--paper-background);transition:background-color .25s;overflow:hidden}.var-paper--round{border-radius:50%}.var-paper--cursor{cursor:pointer}:root{--picker-background: #fff;--picker-toolbar-height: 44px;--picker-confirm-button-text-color: var(--color-primary);--picker-cancel-button-text-color: #888;--picker-picked-border: 1px solid rgba(0, 0, 0, .12);--picker-title-font-size: var(--font-size-lg);--picker-title-text-color: #555;--picker-option-font-size: var(--font-size-lg);--picker-option-text-color: #555;--picker-toolbar-padding: 0 4px;--picker-mask-background-image: linear-gradient(180deg, hsla(0, 0%, 100%, .9), hsla(0, 0%, 100%, .4)), linear-gradient(0deg, hsla(0, 0%, 100%, .9), hsla(0, 0%, 100%, .4))}.var-picker{width:100%;background:var(--picker-background);-webkit-user-select:none;user-select:none;transition:.25s background-color}.var-picker__popup[var-picker-cover]{width:100%}.var-picker__columns{position:relative;display:flex;width:100%;cursor:grab}.var-picker__column{flex:1;overflow:hidden}.var-picker__text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--picker-option-text-color);font-size:var(--picker-option-font-size)}.var-picker__scroller{width:100%;transition-timing-function:cubic-bezier(.23,1,.68,1)}.var-picker__option{display:flex;justify-content:center;align-items:center;width:100%;padding:0 4px}.var-picker__picked{position:absolute;z-index:2;pointer-events:none;width:100%;left:0;border-top:var(--picker-picked-border);border-bottom:var(--picker-picked-border);transition:.25s border}.var-picker__mask{position:absolute;pointer-events:none;top:0;left:0;width:100%;height:100%;background-image:var(--picker-mask-background-image);background-repeat:no-repeat;background-position:top,bottom}.var-picker__toolbar{display:flex;justify-content:space-between;align-items:center;width:100%;height:var(--picker-toolbar-height);padding:var(--picker-toolbar-padding)}.var-picker__confirm-button[var-picker-cover]{color:var(--picker-confirm-button-text-color)}.var-picker__cancel-button[var-picker-cover]{color:var(--picker-cancel-button-text-color)}.var-picker__title{color:var(--picker-title-text-color);font-size:var(--picker-title-font-size)}:root{--progress-font-size: var(--font-size-sm);--progress-ripple-color: #fff;--progress-track-color: #d8d8d8;--progress-label-color: #555;--progress-background: var(--color-primary);--progress-default-color: #f5f5f5;--progress-primary-color: var(--color-primary);--progress-danger-color: var(--color-danger);--progress-success-color: var(--color-success);--progress-warning-color: var(--color-warning);--progress-info-color: var(--color-info);--progress-linear-border-radius: 0px}.var-progress{position:relative;font-size:var(--progress-font-size)}.var-progress__linear{display:flex;align-items:center}.var-progress__linear-block{flex:1;position:relative;overflow:hidden;height:4px;border-radius:var(--progress-linear-border-radius)}.var-progress__linear-certain{width:100%;height:100%;border-radius:var(--progress-linear-border-radius)}.var-progress__linear-ripple:after{position:absolute;width:0;background-color:var(--progress-ripple-color);height:100%;opacity:0;animation:ripple 1.8s cubic-bezier(.4,0,.2,1) infinite;content:""}.var-progress__linear-background{background-color:var(--progress-track-color)}.var-progress__linear-certain{position:absolute;background-color:var(--progress-background);top:0;left:0;transition:all .2s,background-color .8s}.var-progress__linear-label{margin-left:8px;flex:0;color:var(--progress-label-color)}.var-progress__linear-indeterminate div{bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right;border-radius:var(--progress-linear-border-radius)}.var-progress__linear-indeterminate div:first-child{animation:progress-linear-long 2.2s infinite}.var-progress__linear-indeterminate div:last-child{animation:progress-linear-short 2.2s infinite}.var-progress__linear--success{background-color:var(--progress-success-color)}.var-progress__linear--default{background-color:var(--progress-default-color)}.var-progress__linear--primary{background-color:var(--progress-primary-color)}.var-progress__linear--warning{background-color:var(--progress-warning-color)}.var-progress__linear--danger{background-color:var(--progress-danger-color)}.var-progress__linear--info{background-color:var(--progress-info-color)}@keyframes progress-linear-long{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes progress-linear-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes ripple{0%{width:0;opacity:.1}20%{width:0;opacity:.5}80%{width:100%;opacity:0}}.var-progress__circle{position:relative;width:40px;height:40px}.var-progress__circle-background{stroke:var(--progress-track-color);z-index:1}.var-progress__circle-certain{transition:all .2s;stroke:var(--progress-background);position:absolute}.var-progress__circle-label{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:var(--progress-label-color)}.var-progress__circle--success{stroke:var(--progress-success-color)}.var-progress__circle--default{stroke:var(--progress-default-color)}.var-progress__circle--primary{stroke:var(--progress-primary-color)}.var-progress__circle--warning{stroke:var(--progress-warning-color)}.var-progress__circle--danger{stroke:var(--progress-danger-color)}.var-progress__circle--info{stroke:var(--progress-info-color)}.var-progress__circle-indeterminate svg{animation:progress-circle-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out;width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.var-progress__circle-overlay{animation:progress-circle-dash 1.4s ease-in-out infinite,progress-circle-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg);z-index:2}@keyframes progress-circle-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circle-rotate{to{transform:rotate(270deg)}}:root{--pull-refresh-size: 40px;--pull-refresh-background: #fff;--pull-refresh-color: var(--color-primary);--pull-refresh-success-color: var(--color-success);--pull-refresh-icon-size: 25px}.var-pull-refresh{overflow:hidden;position:relative;-webkit-user-select:none;user-select:none;width:100%}.var-pull-refresh__control{display:flex;width:var(--pull-refresh-size);height:var(--pull-refresh-size);align-items:center;justify-content:center;background-color:var(--pull-refresh-background);border-radius:50%;position:absolute;left:50%;z-index:90;color:var(--pull-refresh-color)}.var-pull-refresh__control-success{color:var(--pull-refresh-success-color)}.var-pull-refresh__icon[var-pull-refresh-cover]{font-size:var(--pull-refresh-icon-size)}.var-pull-refresh__animation{transform:rotate(0);animation:iconRotate .6s infinite linear}.var-pull-refresh--lock{overflow:hidden!important}@keyframes iconRotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:root{--rate-color: var(--color-text);--rate-disabled-color: var(--color-text-disabled);--rate-error-color: var(--color-danger);--rate-action-padding: 4px;--rate-primary-color: var(--color-primary)}.var-rate{display:flex;transform:translate(calc(-1 * var(--rate-action-padding)))}.var-rate__wrap{width:100%}.var-rate__content{position:relative;display:flex;padding:var(--rate-action-padding);cursor:pointer;border-radius:50%;color:var(--rate-color);transition:color .25s;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-rate__content-icon[var-rate-cover]{font-size:24px}.var-rate--primary{color:var(--rate-primary-color)}.var-rate--disabled{color:var(--rate-disabled-color);cursor:not-allowed}.var-rate--error{color:var(--rate-error-color)}:root{--result-background: #fff;--result-padding: 24px;--result-border-radius: 3px;--result-title-color: #444;--result-title-font-size: 32px;--result-title-margin: 15px 0 0 0;--result-image-size: 80px;--result-title-font-weight: 500;--result-description-margin: 10px 0 0 0;--result-description-font-size: 14px;--result-description-color: rgba(0, 0, 0, .6);--result-description-line-height: 1.6;--result-info-color: var(--color-info);--result-info-border-color: rgba(0, 175, 239, .3);--result-success-color: var(--color-success);--result-success-border-color: rgba(0, 196, 143, .3);--result-error-color: var(--color-danger);--result-error-border-color: rgba(244, 67, 54, .3);--result-warning-color: var(--color-warning);--result-warning-border-color: rgba(255, 159, 0, .3);--result-question-color: #607d8b;--result-question-border-color: rgba(96, 125, 139, .3);--result-empty-color: #9e9e9e;--result-empty-border-color: rgba(158, 158, 158, .3)}.var-result{display:flex;flex-direction:column;align-items:center;border-radius:var(--result-border-radius);width:100%;padding:var(--result-padding);background-color:var(--result-background);transition:background-color .25s}.var-result__image-container{overflow:hidden}.var-result__image{margin:0 auto;position:relative;border-radius:50%;box-sizing:content-box;border-style:solid;border-color:transparent;width:var(--result-image-size);height:var(--result-image-size);display:flex;justify-content:center;align-items:center}.var-result__image svg{margin:0 auto;display:block;width:100%;height:100%}.var-result__info{border-color:var(--result-info-border-color)}.var-result__info path{fill:var(--result-info-color)}.var-result__empty{border-color:var(--result-empty-border-color)}.var-result__empty path{fill:var(--result-empty-color)}.var-result__question{border-color:var(--result-question-border-color)}.var-result__question path{fill:var(--result-question-color)}.var-result__error{border-color:var(--result-error-border-color)}.var-result__error path{fill:var(--result-error-color)}.var-result__warning{border-color:var(--result-warning-border-color)}.var-result__warning path{fill:var(--result-warning-color)}.var-result__success{border-color:var(--result-success-color)}.var-result__success-cover-left{display:block;position:absolute;z-index:1;top:-.875%;left:-41.27%;width:75%;height:150%;border-radius:150% 0 0 150%;transform:rotate(-45deg);background:var(--result-background);transition:background-color .25s}.var-result__success-cover-right{display:block;position:absolute;top:-13.75%;left:37.5%;width:75%;height:150%;border-radius:0 125% 125% 0;animation-name:rotate-circle;animation-timing-function:ease-in;transform-origin:0 50%;transform:rotate(-45deg);background:var(--result-background);transition:background-color .25s}.var-result__success-line{height:6.8%;background-color:var(--result-success-color);display:block;position:absolute;z-index:10;transition:background-color .25s}.var-result__success-line-tip{transform:rotate(45deg);animation-name:success-line-tip;animation-fill-mode:forwards}.var-result__success-line-long{transform:rotate(-45deg);animation-name:success-line-long;animation-fill-mode:forwards}.var-result__success-circle{z-index:10;width:100%;height:100%;border-radius:50%;position:absolute;box-sizing:content-box!important;border-style:solid;border-color:var(--result-success-border-color)}.var-result__success-line-fix{top:9%;left:34%;width:8.75%;height:112.5%;z-index:1;position:absolute;transform:rotate(-45deg);background:var(--result-background);transition:background-color .25s}@keyframes success-line-tip{0%{top:23.75%;left:1.25%;width:0}54%{top:20.25%;left:1%;width:0}70%{top:43.75%;left:-9.5%;width:62.5%}84%{top:60%;left:26.25%;width:21.25%}to{top:56.25%;left:17.5%;width:31.25%}}@keyframes success-line-long{0%{top:67.5%;right:57.5%;width:0}65%{top:67.5%;right:57.5%;width:0}84%{top:43.75%;right:0;width:68.75%}to{top:47%;right:9%;width:58.75%}}@keyframes rotate-circle{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}.var-result__title{font-size:var(--result-title-font-size);word-break:break-word;margin:var(--result-title-margin);font-weight:var(--result-title-font-weight);color:var(--result-title-color);text-align:center}.var-result__description{font-size:var(--result-description-font-size);word-break:break-word;color:var(--result-description-color);margin:var(--result-description-margin);line-height:var(--result-description-line-height);text-align:center}.var-result__footer{z-index:1;margin-top:20px}:root{--skeleton-content-padding: 16px;--skeleton-card-height: 160px;--skeleton-card-border-radius: 4px;--skeleton-card-margin-bottom: 16px;--skeleton-card-background-color: rgba(0, 0, 0, .12);--skeleton-animation-background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .3), hsla(0, 0%, 100%, 0));--skeleton-avatar-size: 34px;--skeleton-avatar-border-radius: 50%;--skeleton-avatar-margin-right: 16px;--skeleton-avatar-background-color: rgba(0, 0, 0, .12);--skeleton-title-width: 50%;--skeleton-title-border-radius: 10px;--skeleton-title-background-color: rgba(0, 0, 0, .12);--skeleton-row-height: 12px;--skeleton-row-border-radius: 10px;--skeleton-row-margin-top: 10px}@keyframes var-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}.var-skeleton{width:100%}.var-skeleton__content{padding:var(--skeleton-content-padding)}.var-skeleton__card{position:relative;overflow:hidden;width:100%;height:var(--skeleton-card-height);background-color:var(--skeleton-card-background-color);margin-bottom:var(--skeleton-card-margin-bottom);border-radius:var(--skeleton-card-border-radius);transition:background-color .25s}.var-skeleton__article{display:flex;width:100%}.var-skeleton__avatar{position:relative;overflow:hidden;flex-shrink:0;width:var(--skeleton-avatar-size);height:var(--skeleton-avatar-size);border-radius:var(--skeleton-avatar-border-radius);background-color:var(--skeleton-avatar-background-color);margin-right:var(--skeleton-avatar-margin-right);transition:.25s background-color}.var-skeleton__section{width:100%;padding-top:8px}.var-skeleton__title{position:relative;overflow:hidden;width:var(--skeleton-title-width);height:var(--skeleton-row-height);background-color:var(--skeleton-title-background-color);border-radius:var(--skeleton-title-border-radius);transition:.25s background-color}.var-skeleton__row{position:relative;overflow:hidden;width:100%;height:var(--skeleton-row-height);background-color:var(--skeleton-title-background-color);margin-top:var(--skeleton-row-margin-top);border-radius:var(--skeleton-row-border-radius);transition:.25s background-color}.var-skeleton__fullscreen{position:fixed;overflow:hidden;top:0;left:0;bottom:0;right:0;background-color:var(--skeleton-title-background-color);transition:.25s background-color}.var-skeleton--animation:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;animation:var-skeleton-animation 1s infinite;background:var(--skeleton-animation-background);transition:.25s background-color}:root{--slider-error-color: var(--color-danger);--slider-track-background: #bdbdbd;--slider-track-fill-background: var(--color-primary);--slider-thumb-block-background: var(--color-primary);--slider-thumb-ripple-background: var(--color-primary);--slider-thumb-label-background: var(--color-primary);--slider-thumb-label-font-size: var(--font-size-sm);--slider-disabled-opacity: var(--opacity-disabled)}.var-slider{-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.var-slider-block{display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;user-select:none;height:36px;margin:0 6px;transition:filter .25s}.var-slider--disabled{filter:opacity(var(--slider-disabled-opacity));cursor:not-allowed}.var-slider-track{width:100%;align-items:center;position:relative}.var-slider-track-background{width:100%;height:2px;background:var(--slider-track-background);transition:filter,background-color,.25s}.var-slider-track-fill{position:absolute;height:100%;left:0;transition:background-color .25s;background-color:var(--slider-track-fill-background)}.var-slider-thumb{position:absolute;cursor:pointer}.var-slider-thumb-block{position:absolute;width:12px;height:12px;border-radius:50%;transform:translate(-50%,-50%);transition:background-color .25s;z-index:1;background-color:var(--slider-thumb-block-background)}.var-slider-thumb-ripple{position:absolute;width:36px;height:36px;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;opacity:.3;background:transparent;transition:.3s var(--cubic-bezier)}.var-slider-thumb-ripple--active{background:var(--slider-thumb-ripple-background)}.var-slider-thumb-label{height:24px;width:24px;background-color:var(--slider-thumb-label-background);display:flex;align-items:center;border:none;justify-content:center;color:#fff;border-radius:50% 50% 0;padding:13px;bottom:60%;-webkit-user-select:none;user-select:none;position:absolute;left:45%;transition:.3s var(--cubic-bezier);font-size:var(--slider-thumb-label-font-size);overflow:hidden;transform:translateY(0) translateY(0) translate(-50%) rotate(45deg) scale(0)}.var-slider-thumb-label span{transform:rotate(-45deg)}.var-slider-thumb-label--active{transform:translateY(-20%) translateY(-8px) translate(-50%) rotate(45deg) scale(1)}.var-slider__form[var-slider-cover]{margin:0}.var-slider__horizontal{-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.var-slider__horizontal-block{display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;user-select:none;height:36px;margin:0 6px;transition:filter .25s}.var-slider__horizontal--disabled{filter:opacity(var(--slider-disabled-opacity));cursor:not-allowed}.var-slider__horizontal-track{width:100%;align-items:center;position:relative}.var-slider__horizontal-track-background{width:100%;height:2px;background:var(--slider-track-background);transition:filter,background-color,.25s}.var-slider__horizontal-track-fill{position:absolute;height:100%;left:0;transition:background-color .25s;background-color:var(--slider-track-fill-background)}.var-slider__horizontal-thumb{position:absolute;cursor:pointer}.var-slider__horizontal-thumb-block{position:absolute;width:12px;height:12px;border-radius:50%;transform:translate(-50%,-50%);transition:background-color .25s;z-index:1;background-color:var(--slider-thumb-block-background)}.var-slider__horizontal-thumb-ripple{position:absolute;width:36px;height:36px;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;opacity:.3;background:transparent;transition:.3s var(--cubic-bezier)}.var-slider__horizontal-thumb-ripple--active{background:var(--slider-thumb-ripple-background)}.var-slider__horizontal-thumb-label{height:24px;width:24px;background-color:var(--slider-thumb-label-background);display:flex;align-items:center;border:none;justify-content:center;color:#fff;border-radius:50% 50% 0;padding:13px;bottom:60%;-webkit-user-select:none;user-select:none;position:absolute;left:45%;transition:.3s var(--cubic-bezier);font-size:var(--slider-thumb-label-font-size);overflow:hidden;transform:translateY(0) translateY(0) translate(-50%) rotate(45deg) scale(0)}.var-slider__horizontal-thumb-label span{transform:rotate(-45deg)}.var-slider__horizontal-thumb-label--active{transform:translateY(-20%) translateY(-8px) translate(-50%) rotate(45deg) scale(1)}.var-slider__horizontal__form[var-slider-cover]{margin:0}.var-slider__horizontal--error .var-slider__horizontal-track-background{background-color:var(--slider-error-color)!important;filter:opacity(.6)}.var-slider__horizontal--error .var-slider__horizontal-track-fill,.var-slider__horizontal--error .var-slider__horizontal-thumb-block,.var-slider__horizontal--error .var-slider__horizontal-thumb-ripple--active,.var-slider__horizontal--error .var-slider__horizontal-thumb-label{background-color:var(--slider-error-color)!important}.var-slider__vertical{-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;height:100%}.var-slider__vertical-block{display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;user-select:none;height:36px;margin:0 6px;transition:filter .25s}.var-slider__vertical--disabled{filter:opacity(var(--slider-disabled-opacity));cursor:not-allowed}.var-slider__vertical-track{width:100%;align-items:center;position:relative}.var-slider__vertical-track-background{width:100%;height:2px;background:var(--slider-track-background);transition:filter,background-color,.25s}.var-slider__vertical-track-fill{position:absolute;height:100%;left:0;transition:background-color .25s;background-color:var(--slider-track-fill-background)}.var-slider__vertical-thumb{position:absolute;cursor:pointer}.var-slider__vertical-thumb-block{position:absolute;width:12px;height:12px;border-radius:50%;transform:translate(-50%,-50%);transition:background-color .25s;z-index:1;background-color:var(--slider-thumb-block-background)}.var-slider__vertical-thumb-ripple{position:absolute;width:36px;height:36px;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;opacity:.3;background:transparent;transition:.3s var(--cubic-bezier)}.var-slider__vertical-thumb-ripple--active{background:var(--slider-thumb-ripple-background)}.var-slider__vertical-thumb-label{height:24px;width:24px;background-color:var(--slider-thumb-label-background);display:flex;align-items:center;border:none;justify-content:center;color:#fff;border-radius:50% 50% 0;padding:13px;bottom:60%;-webkit-user-select:none;user-select:none;position:absolute;left:45%;transition:.3s var(--cubic-bezier);font-size:var(--slider-thumb-label-font-size);overflow:hidden;transform:translateY(0) translateY(0) translate(-50%) rotate(45deg) scale(0)}.var-slider__vertical-thumb-label span{transform:rotate(-45deg)}.var-slider__vertical-thumb-label--active{transform:translateY(-20%) translateY(-8px) translate(-50%) rotate(45deg) scale(1)}.var-slider__vertical__form[var-slider-cover]{margin:0}.var-slider__vertical-block{width:36px;display:flex;align-items:center;justify-content:center;position:relative;-webkit-user-select:none;user-select:none;margin:6px 0;transition:filter .25s}.var-slider__vertical-track{height:100%;width:fit-content}.var-slider__vertical-track-background{width:2px;height:100%;background:var(--slider-track-background);transition:filter,background-color,.25s}.var-slider__vertical-track-fill{width:100%;bottom:0}.var-slider__vertical-thumb-label{transform:translate(0) translate(0) translateY(50%) rotate(-225deg) scale(0)}.var-slider__vertical-thumb-label span{transform:rotate(-135deg)}.var-slider__vertical-thumb-label--active{transform:translate(20%) translate(8px) translateY(50%) rotate(-225deg) scale(1)}.var-slider__vertical--error .var-slider__vertical-track-background{background-color:var(--slider-error-color)!important;filter:opacity(.6)}.var-slider__vertical--error .var-slider__vertical-track-fill,.var-slider__vertical--error .var-slider__vertical-thumb-block,.var-slider__vertical--error .var-slider__vertical-thumb-ripple--active,.var-slider__vertical--error .var-slider__vertical-thumb-label{background-color:var(--slider-error-color)!important}:root{--snackbar-width: 256px;--snackbar-color: rgba(255, 255, 255, .87);--snackbar-border-radius: 4px;--snackbar-background: #333;--snackbar-font-size: var(--font-size-md);--snackbar-margin: 6px 24px;--snackbar-border-color: currentColor;--snackbar-success-background: var(--color-success);--snackbar-info-background: var(--color-info);--snackbar-error-background: var(--color-danger);--snackbar-warning-background: var(--color-warning);--snackbar-content-padding: 14px 16px;--snackbar-action-margin: 0 8px 0;--snackbar-vertical-action-margin: 0 8px 8px 0}.var-transition-group{position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none}.var-pointer-auto{pointer-events:auto}.var-snackbar{display:flex;justify-content:center;align-items:baseline;left:0;right:0;bottom:0;transition:all .15s var(--cubic-bezier)}.var-snackbar__transition{top:0;position:fixed}.var-snackbar__transition .var-snackbar__wrapper{position:absolute}.var-snackbar__transition .var-snackbar__wrapper-top{top:5%}.var-snackbar__transition .var-snackbar__wrapper-center{top:45%}.var-snackbar__transition .var-snackbar__wrapper-bottom{bottom:5%}.var-snackbar__wrapper{width:var(--snackbar-width);display:flex;border-radius:var(--snackbar-border-radius);color:var(--snackbar-color);background:var(--snackbar-background);font-size:var(--snackbar-font-size);margin:var(--snackbar-margin);align-items:center;border-color:var(--snackbar-border-color);pointer-events:auto;transition:.3s var(--cubic-bezier)}.var-snackbar__wrapper-success{background:var(--snackbar-success-background)}.var-snackbar__wrapper-info{background:var(--snackbar-info-background)}.var-snackbar__wrapper-warning{background:var(--snackbar-warning-background)}.var-snackbar__wrapper-error{background:var(--snackbar-error-background)}.var-snackbar__content{flex-grow:1;padding:var(--snackbar-content-padding)}.var-snackbar__action{margin:var(--snackbar-action-margin);display:flex}.var-snackbar__vertical{flex-direction:column;align-items:flex-start}.var-snackbar__vertical .var-snackbar__action{align-self:flex-end;margin:var(--snackbar-vertical-action-margin)}.var-snackbar-fade-enter-from,.var-snackbar-fade-leave-to{opacity:0;transform:translateY(-30px)}:root{--step-tag-size: 20px;--step-tag-background: #9e9e9e;--step-tag-font-size: var(--font-size-md);--step-tag-color: #fff;--step-tag-active-color: var(--color-primary);--step-tag-margin: 4px 0;--step-tag-icon-size: var(--font-size-lg);--step-content-font-size: var(--font-size-md);--step-content-color: rgba(0, 0, 0, .38);--step-content-active-color: #000;--step-line-background: #000;--step-line-gap: 8px;--step-min-size: calc(var(--step-tag-size) + var(--step-line-gap));--step-line-size: calc(100% - var(--step-min-size));--step-vertical-tag-margin: 0 4px;--step-vertical-min-height: 50px}.tag{width:var(--step-tag-size);height:var(--step-tag-size);background:var(--step-tag-background);display:flex;font-size:var(--step-tag-font-size);align-items:center;justify-content:center;border-radius:50%;color:var(--step-tag-color);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:.3s var(--cubic-bezier)}.content{font-size:var(--step-content-font-size);color:var(--step-content-color);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:.3s var(--cubic-bezier)}.var-step{position:relative;flex:1;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-step:last-child .var-step__horizontal-line{width:0}.var-step:last-child .var-step__vertical-line{height:0}.var-step__horizontal{display:flex;flex-direction:column;align-items:center}.var-step__horizontal-tag{margin:var(--step-tag-margin);width:var(--step-tag-size);height:var(--step-tag-size);background:var(--step-tag-background);display:flex;font-size:var(--step-tag-font-size);align-items:center;justify-content:center;border-radius:50%;color:var(--step-tag-color);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:.3s var(--cubic-bezier)}.var-step__horizontal-tag--active{background:var(--step-tag-active-color)}.var-step__horizontal-content{font-size:var(--step-content-font-size);color:var(--step-content-color);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:.3s var(--cubic-bezier)}.var-step__horizontal-content--active{color:var(--step-content-active-color)}.var-step__horizontal-line{position:absolute;top:calc(var(--step-min-size) / 2);left:calc(50% + var(--step-min-size) / 2);width:var(--step-line-size);height:1px;transform:scaleY(.5);background:var(--step-line-background)}.var-step__vertical{display:flex;height:100%;min-height:var(--step-vertical-min-height)}.var-step__vertical-tag{flex-shrink:0;margin:var(--step-vertical-tag-margin);width:var(--step-tag-size);height:var(--step-tag-size);background:var(--step-tag-background);display:flex;font-size:var(--step-tag-font-size);align-items:center;justify-content:center;border-radius:50%;color:var(--step-tag-color);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:.3s var(--cubic-bezier)}.var-step__vertical-tag--active{background:var(--step-tag-active-color)}.var-step__vertical-content{font-size:var(--step-content-font-size);color:var(--step-content-color);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:.3s var(--cubic-bezier)}.var-step__vertical-content--active{color:var(--step-content-active-color)}.var-step__vertical-line{position:absolute;height:var(--step-line-size);left:calc(var(--step-min-size) / 2);top:calc(var(--step-min-size) - var(--step-line-gap) / 2);width:1px;transform:scaleX(.5);background:var(--step-line-background)}.var-step__icon[var-step-cover]{font-size:var(--step-tag-icon-size)}.var-steps{width:100%;display:flex;justify-content:space-between;overflow:hidden}:root{--switch-track-background: #fff;--switch-track-active-background: var(--color-primary);--switch-track-error-background: var(--color-danger);--switch-ripple-color: var(--color-primary);--switch-handle-background: #fff;--switch-handle-color: #fff;--switch-handle-active-background: var(--color-primary);--switch-handle-error-background: var(--color-danger);--switch-disabled-opacity: var(--opacity-disabled)}.var-switch{display:inline-block}.var-switch__block{position:relative;display:flex;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);align-items:center;justify-content:center;height:24px;width:40px;transition:filter .25s}.var-switch--disabled{filter:opacity(var(--switch-disabled-opacity));cursor:not-allowed}.var-switch__track{background-color:var(--switch-track-background);transition:background-color .25s;filter:opacity(var(--switch-disabled-opacity));height:14.4px;width:38px;border-radius:calc(20px * 2 / 3)}.var-switch__track--active{background-color:var(--switch-track-active-background)}.var-switch__track--error{background-color:var(--switch-track-error-background)!important}.var-switch__ripple{position:absolute;display:flex;align-items:center;justify-content:center;color:var(--switch-ripple-color);border-radius:50%;overflow:hidden;transition:.3s var(--cubic-bezier);width:40px;height:40px;left:-10px}.var-switch__ripple--active{left:10px}.var-switch__handle{border-radius:50%;background-color:var(--switch-handle-background);display:flex;align-items:center;justify-content:center;color:var(--switch-handle-color);transition:background-color .25s;width:20px;height:20px}.var-switch__handle--active{background-color:var(--switch-handle-active-background)}.var-switch__handle--error{background-color:var(--switch-handle-error-background)!important}.var-switch__loading{display:inline-block;width:16px;height:16px;animation:circle 1.8s linear infinite}.var-switch__loading svg{display:block;width:100%;height:100%}.var-switch__loading svg circle{animation:circular 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}@keyframes circle{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}:root{--tab-padding: 12px;--tab-active-color: var(--color-primary);--tab-inactive-color: #646566;--tab-disabled-color: var(--color-text-disabled);--tab-font-size: var(--font-size-md)}.var-tab{display:flex;justify-content:center;align-items:center;flex:1 0 auto;padding:0 var(--tab-padding);font-size:var(--tab-font-size);cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-tab--active{color:var(--tab-active-color)}.var-tab--inactive{color:var(--tab-inactive-color)}.var-tab--disabled{color:var(--tab-disabled-color);cursor:not-allowed}.var-tab--horizontal{flex-direction:row}.var-tab--vertical{flex-direction:column}.var-tab-item--inactive[var-tab-item-cover]{overflow:visible;height:0}:root{--table-background: #fff;--table-border-radius: 2px;--table-thead-border-bottom: thin solid rgba(0, 0, 0, .12);--table-thead-th-text-color: rgba(0, 0, 0, .6);--table-thead-th-font-size: 14px;--table-thead-tr-border-bottom: thin solid rgba(0, 0, 0, .12);--table-tbody-tr-hover-background: #eee;--table-tbody-tr-border-bottom: thin solid rgba(0, 0, 0, .12);--table-tbody-td-text-color: #555;--table-tbody-td-font-size: 16px;--table-row-height: 46px;--table-row-padding: 0 16px;--table-footer-border-top: thin solid rgba(0, 0, 0, .12)}.var-table{width:100%;background:var(--table-background);border-radius:var(--table-border-radius);transition:.25s background-color}.var-table *{box-sizing:border-box}.var-table__main{width:100%;overflow-x:auto}.var-table__main>table{min-width:100%;display:table;border-spacing:0;border-collapse:collapse;line-height:normal}.var-table__main>table thead{display:table-header-group;border-bottom:var(--table-thead-border-bottom)}.var-table__main>table thead tr th{color:var(--table-thead-th-text-color);font-size:var(--table-thead-th-font-size)}.var-table__main>table thead tr:not(:last-child){border-bottom:var(--table-thead-tr-border-bottom)}.var-table__main>table tbody{display:table-row-group}.var-table__main>table tbody tr{display:table-row;outline:0;vertical-align:middle}.var-table__main>table tbody tr:hover{background:var(--table-tbody-tr-hover-background);transition:background-color .25s}.var-table__main>table tbody tr:not(:last-child){border-bottom:var(--table-tbody-tr-border-bottom)}.var-table__main>table tbody td{color:var(--table-tbody-td-text-color);font-size:var(--table-tbody-td-font-size)}.var-table__main>table th{display:table-cell;height:var(--table-row-height);padding:var(--table-row-padding);font-weight:500;text-align:left}.var-table__main>table td{display:table-cell;padding:var(--table-row-padding);height:var(--table-row-height);text-align:left}.var-table__footer{width:100%;min-height:var(--table-row-height);border-top:var(--table-footer-border-top)}:root{--tabs-item-horizontal-height: 44px;--tabs-item-vertical-height: 66px;--tabs-radius: 2px;--tabs-padding: 12px;--tabs-indicator-size: 2px;--tabs-indicator-background: var(--color-primary);--tabs-background: #fff;--tabs-indicator-inner-size: 100%}.var-tabs{border-radius:var(--tabs-radius);background:var(--tabs-background);overflow:hidden;transition:background-color .25s}.var-tabs__tab-wrap{position:relative;display:flex;height:100%}.var-tabs__indicator{display:flex;justify-content:center;align-items:center;position:absolute;z-index:1;transition-property:width,transform;transition-duration:.3s}.var-tabs__indicator-inner{background:var(--tabs-indicator-background)}.var-tabs--layout-horizontal{flex-direction:row}.var-tabs--layout-horizontal-scrollable{overflow-x:auto;overflow-y:hidden}.var-tabs--layout-horizontal-scrollable::-webkit-scrollbar{display:none}.var-tabs--layout-horizontal-padding{padding:0 var(--tabs-padding)}.var-tabs--layout-horizontal-indicator{left:0;bottom:0;height:var(--tabs-indicator-size)}.var-tabs--layout-horizontal-reverse-indicator{left:0;top:0;height:var(--tabs-indicator-size)}.var-tabs--layout-horizontal-indicator-inner{width:var(--tabs-indicator-inner-size);height:100%}.var-tabs--layout-vertical{flex-direction:column}.var-tabs--layout-vertical-scrollable{overflow-x:hidden;overflow-y:auto}.var-tabs--layout-vertical-scrollable::-webkit-scrollbar{display:none}.var-tabs--layout-vertical-padding{padding:0}.var-tabs--layout-vertical-indicator{left:0;top:0;width:var(--tabs-indicator-size)}.var-tabs--layout-vertical-reverse-indicator{right:0;top:0;width:var(--tabs-indicator-size)}.var-tabs--layout-vertical-indicator-inner{width:100%;height:var(--tabs-indicator-inner-size)}.var-tabs--item-horizontal{height:var(--tabs-item-horizontal-height)}.var-tabs--item-vertical{height:var(--tabs-item-vertical-height)}.var-tabs--fixed-bottom{position:fixed;width:100%;left:0;bottom:0;z-index:99}.var-tabs--safe-area{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);box-sizing:content-box!important}:root{--time-picker-border-radius: 4px;--time-picker-font-size: var(--font-size-md);--time-picker-min-width: 290px;--time-picker-height: 385px;--time-picker-title-padding: 16px;--time-picker-title-color: #fff;--time-picker-title-background: var(--color-primary);--time-picker-title-time-font-size: 50px;--time-picker-title-time-margin: 0 5px;--time-picker-title-ampm-margin-left: 5px;--time-picker-clock-left: 27px;--time-picker-clock-right: 27px;--time-picker-clock-top: 27px;--time-picker-clock-bottom: 27px;--time-picker-clock-container-width: 270px;--time-picker-clock-container-height: 270px;--time-picker-clock-container-background: #e0e0e0;--time-picker-clock-hand-height:calc(50% - 4px);--time-picker-clock-hand-width: 2px;--time-picker-clock-hand-bottom: 50%;--time-picker-clock-hand-left:calc(50% - 1px);--time-picker-clock-hand-background: var(--color-primary);--time-picker-clock-hand-border-color: var(--color-primary);--time-picker-clock-hand-before-width: 10px;--time-picker-clock-hand-before-height: 10px;--time-picker-clock-hand-before-border-width: 2px;--time-picker-clock-hand-after-width: 4px;--time-picker-clock-hand-after-height: 4px;--time-picker-clock-item-height: 32px;--time-picker-clock-item-width: 32px;--time-picker-clock-item-active-background: var(--color-primary);--time-picker-clock-item-active-color: #fff;--time-picker-clock-item-disable-color: rgba(0, 0, 0, .26);--time-picker-clock-item-text-color: #555;--time-picker-inner-left: 36px;--time-picker-inner-right: 36px;--time-picker-inner-top: 36px;--time-picker-inner-bottom: 36px;--time-picker-body-background: #fff}.after-before-basic{content:"";position:absolute;border-radius:100%;left:50%;transform:translate(-50%,-50%)}.var-time-picker{border-radius:var(--time-picker-border-radius);contain:layout style;display:flex;width:100%;flex-direction:column;font-size:var(--time-picker-font-size);position:relative;min-width:var(--time-picker-min-width);height:var(--time-picker-height);overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-time-picker__title{padding:var(--time-picker-title-padding);color:var(--time-picker-title-color);background:var(--time-picker-title-background);display:flex;align-items:flex-end;justify-content:flex-end}.var-time-picker__title-btn{opacity:.6;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:.3s var(--cubic-bezier);white-space:nowrap}.var-time-picker__title-btn--active{opacity:1}.var-time-picker__title-time{display:flex;justify-content:flex-end;font-size:var(--time-picker-title-time-font-size)}.var-time-picker__title-time .var-time-picker__title-btn{align-items:center;margin:var(--time-picker-title-time-margin)}.var-time-picker__title-ampm{margin-left:var(--time-picker-title-ampm-margin-left)}.var-time-picker__body{flex:1;display:flex;align-items:center;justify-content:center;background-color:var(--time-picker-body-background)}.var-time-picker__clock{position:absolute;bottom:var(--time-picker-clock-bottom);left:var(--time-picker-clock-left);right:var(--time-picker-clock-right);top:var(--time-picker-clock-top)}.var-time-picker__clock-container{width:var(--time-picker-clock-container-width);height:var(--time-picker-clock-container-height);background:var(--time-picker-clock-container-background);border-radius:50%;position:relative}.var-time-picker__clock-hand{height:var(--time-picker-clock-hand-height);width:var(--time-picker-clock-hand-width);bottom:var(--time-picker-clock-hand-bottom);left:var(--time-picker-clock-hand-left);transform-origin:center bottom;position:absolute;will-change:transform;z-index:1;background-color:var(--time-picker-clock-hand-background);border-color:var(--time-picker-clock-hand-border-color)}.var-time-picker__clock-hand:before{content:"";position:absolute;border-radius:100%;left:50%;transform:translate(-50%,-50%);background:transparent;border:var(--time-picker-clock-hand-before-border-width) solid;width:var(--time-picker-clock-hand-before-width);height:var(--time-picker-clock-hand-before-height);top:-5px;border-color:inherit}.var-time-picker__clock-hand:after{content:"";position:absolute;border-radius:100%;left:50%;transform:translate(-50%,-50%);border-color:inherit;height:var(--time-picker-clock-hand-after-height);width:var(--time-picker-clock-hand-after-width);top:100%;border-style:solid;background-color:inherit}.var-time-picker__clock-item{align-items:center;border-radius:100%;display:flex;justify-content:center;height:var(--time-picker-clock-item-height);position:absolute;width:var(--time-picker-clock-item-width);-webkit-user-select:none;user-select:none;transform:translate(-50%,-50%);color:var(--time-picker-clock-item-text-color)}.var-time-picker__clock-item--active{background:var(--time-picker-clock-item-active-background);z-index:2;color:var(--time-picker-clock-item-active-color)}.var-time-picker__clock-item--disable{color:var(--time-picker-clock-item-disable-color)}.var-time-picker__clock-inner{position:absolute;bottom:var(--time-picker-inner-bottom);left:var(--time-picker-inner-left);right:var(--time-picker-inner-right);top:var(--time-picker-inner-top)}.var-time-picker-panel-fade-enter-from,.var-time-picker-panel-fade-leave-to{transition:.3s var(--cubic-bezier);opacity:0}.var-time-picker-panel-fade-leave-active{position:absolute}:root{--uploader-action-background: #f7f8fa;--uploader-action-icon-color: #888;--uploader-action-icon-size: 24px;--uploader-action-margin: 0 10px 10px 0;--uploader-file-size: 80px;--uploader-file-margin: 0 10px 10px 0;--uploader-file-name-background: #f7f8fa;--uploader-file-name-color: #888;--uploader-file-name-font-size: 12px;--uploader-file-name-padding: 10px;--uploader-file-text-align: center;--uploader-file-close-background: rgba(0, 0, 0, .3);--uploader-file-close-size: 24px;--uploader-file-close-icon-font-size: 14px;--uploader-file-close-icon-color: #fff;--uploader-file-cover-fit: cover;--uploader-file-cover-background: #f7f8fa;--uploader-preview-video-width: 100vw;--uploader-preview-video-height: 100vw;--uploader-file-indicator-height: 4px;--uploader-file-indicator-normal-color: var(--color-disabled);--uploader-file-indicator-success-color: var(--color-success);--uploader-file-indicator-error-color: var(--color-danger);--uploader-file-progress-color: var(--color-primary);--uploader-disabled-color: var(--color-disabled);--uploader-disabled-text-color: var(--color-text-disabled);--uploader-loading-background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .3), hsla(0, 0%, 100%, 0))}@keyframes var-uploader-loading-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}.var-uploader{width:100%}.var-uploader__file-list{width:100%;display:flex;flex-wrap:wrap}.var-uploader__file{position:relative;width:var(--uploader-file-size);height:var(--uploader-file-size);margin:var(--uploader-file-margin);overflow:hidden;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.var-uploader__file-name{position:absolute;width:100%;height:100%;line-height:calc(var(--uploader-file-size) - var(--uploader-file-name-padding) * 2);font-size:var(--uploader-file-name-font-size);z-index:0;background:var(--uploader-file-name-background);padding:var(--uploader-file-name-padding);color:var(--uploader-file-name-color);text-align:var(--uploader-file-text-align);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;-webkit-user-select:none;user-select:none;transition:background-color .25s}.var-uploader__file-cover{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background:var(--uploader-file-cover-background);object-fit:var(--uploader-file-cover-fit);pointer-events:none;transition:background-color .25s}.var-uploader__file-close{position:absolute;top:0;right:0;z-index:2;border-top:var(--uploader-file-close-size) solid var(--uploader-file-close-background);border-left:var(--uploader-file-close-size) solid transparent}.var-uploader__file-close-icon[var-uploader-cover]{position:absolute;top:calc(-1 * var(--uploader-file-close-size));right:0;font-size:var(--uploader-file-close-icon-font-size);color:var(--uploader-file-close-icon-color)}.var-uploader__file-indicator{position:absolute;left:0;bottom:0;z-index:2;width:100%;height:var(--uploader-file-indicator-height);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;background:var(--uploader-file-indicator-normal-color)}.var-uploader__action{position:relative;display:flex;justify-content:center;align-items:center;color:var(--uploader-action-icon-color);width:var(--uploader-file-size);height:var(--uploader-file-size);background:var(--uploader-action-background);margin:var(--uploader-action-margin);transition:background-color .25s;cursor:pointer}.var-uploader__action-icon[var-uploader-cover]{font-size:var(--uploader-action-icon-size)}.var-uploader__action-input{display:block;width:0;height:0;visibility:hidden}.var-uploader__preview[var-uploader-cover]{background:#000;box-shadow:none}.var-uploader__preview-video{width:var(--uploader-preview-video-width);height:var(--uploader-preview-video-height)}.var-uploader__progress{width:0%;height:100%;background-color:var(--uploader-file-progress-color);transition:all .25s ease-in-out}.var-uploader--loading:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;animation:var-uploader-loading-animation .6s infinite;background:var(--uploader-loading-background);transition:background-color .25s}.var-uploader--success{background:var(--uploader-file-indicator-success-color)}.var-uploader--error{background:var(--uploader-file-indicator-error-color)}.var-uploader--disabled{background:var(--uploader-disabled-color);color:var(--uploader-disabled-text-color);cursor:not-allowed}:root{--watermark-content-color: #808080}.var-watermark{position:relative}.var-watermark__container{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;background-repeat:repeat;color:var(--watermark-content-color)}.var-watermark--fullscreen{position:fixed} `);

(function (vue) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateMethod = (obj, member, method) => {
    __accessCheck(obj, member, "access private method");
    return method;
  };
  var _parseMarkdown, parseMarkdown_fn, _onError, onError_fn;
  var context = {
    locks: {},
    zIndex: 2e3,
    enableRipple: true
  };
  vue.reactive(context);
  const Context = vue.reactive(context);
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isNumber = (val) => typeof val === "number";
  const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
  const isFunction = (val) => typeof val === "function";
  const isArray = (val) => Array.isArray(val);
  const isURL = (val) => {
    if (!val) {
      return false;
    }
    return /^(http)|(\.*\/)/.test(val);
  };
  const isEmpty = (val) => val === void 0 || val === null || val === "" || Array.isArray(val) && !val.length;
  const isWindow = (val) => val === window;
  const supportTouch$1 = () => inBrowser$1() && "ontouchstart" in window;
  const toNumber = (val) => {
    if (val == null)
      return 0;
    if (isString(val)) {
      val = parseFloat(val);
      val = Number.isNaN(val) ? 0 : val;
      return val;
    }
    if (isBoolean(val))
      return Number(val);
    return val;
  };
  const removeItem = (arr, item) => {
    if (arr.length) {
      const index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  };
  const inBrowser$1 = () => typeof window !== "undefined";
  const camelize = (s) => s.replace(/-(\w)/g, (_, p) => p.toUpperCase());
  const find = (arr, callback, from = "start") => {
    let i = from === "start" ? 0 : arr.length - 1;
    while (arr.length > 0 && i >= 0 && i <= arr.length - 1) {
      const flag = callback(arr[i], i, arr);
      if (flag) {
        return [arr[i], i];
      }
      from === "start" ? i++ : i--;
    }
    return [null, -1];
  };
  const clamp = (num, min2, max2) => Math.min(max2, Math.max(min2, num));
  const getGlobalThis = () => {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (inBrowser$1()) {
      return window;
    }
    return typeof global !== "undefined" ? global : self;
  };
  const requestAnimationFrame$1 = (fn2) => {
    const globalThis2 = getGlobalThis();
    return globalThis2.requestAnimationFrame ? globalThis2.requestAnimationFrame(fn2) : globalThis2.setTimeout(fn2);
  };
  const doubleRaf = () => new Promise((resolve) => {
    requestAnimationFrame$1(() => {
      requestAnimationFrame$1(resolve);
    });
  });
  const getStyle$1 = (element) => window.getComputedStyle(element);
  const getRect = (element) => {
    if (isWindow(element)) {
      const width = element.innerWidth;
      const height = element.innerHeight;
      const rect = {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        right: width,
        bottom: height,
        width,
        height
      };
      return Object.assign(Object.assign({}, rect), { toJSON: () => rect });
    }
    return element.getBoundingClientRect();
  };
  function onSmartMounted(hook) {
    let isMounted = false;
    vue.onMounted(() => {
      hook();
      vue.nextTick(() => {
        isMounted = true;
      });
    });
    vue.onActivated(() => {
      if (!isMounted) {
        return;
      }
      hook();
    });
  }
  function useEventListener(target, type, listener, options = {}) {
    if (!inBrowser$1()) {
      return;
    }
    const { passive: passive2 = false, capture = false } = options;
    let listening = false;
    let cleaned = false;
    const getElement = (target2) => isFunction(target2) ? target2() : vue.unref(target2);
    const add = (target2) => {
      if (listening || cleaned) {
        return;
      }
      const element = getElement(target2);
      if (element) {
        element.addEventListener(type, listener, {
          passive: passive2,
          capture
        });
        listening = true;
      }
    };
    const remove = (target2) => {
      if (!listening || cleaned) {
        return;
      }
      const element = getElement(target2);
      if (element) {
        element.removeEventListener(type, listener, {
          capture
        });
        listening = false;
      }
    };
    let watchStopHandle;
    if (vue.isRef(target)) {
      watchStopHandle = vue.watch(() => target.value, (newValue, oldValue) => {
        remove(oldValue);
        add(newValue);
      });
    }
    const cleanup = () => {
      watchStopHandle === null || watchStopHandle === void 0 ? void 0 : watchStopHandle();
      remove(target);
      cleaned = true;
    };
    onSmartMounted(() => {
      add(target);
    });
    vue.onBeforeUnmount(() => {
      remove(target);
    });
    vue.onDeactivated(() => {
      remove(target);
    });
    return cleanup;
  }
  function useClickOutside(target, type, listener) {
    if (!inBrowser$1()) {
      return;
    }
    const handler = (event) => {
      const element = isFunction(target) ? target() : vue.unref(target);
      if (element && !element.contains(event.target)) {
        listener(event);
      }
    };
    useEventListener(document, type, handler);
  }
  var __rest = globalThis && globalThis.__rest || function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
  function keyInProvides(key) {
    const instance = vue.getCurrentInstance();
    return key in instance.provides;
  }
  function useParent(key) {
    if (!keyInProvides(key)) {
      return {
        index: null,
        parentProvider: null,
        bindParent: null
      };
    }
    const provider = vue.inject(key);
    const { childInstances, collect, clear } = provider, parentProvider = __rest(provider, ["childInstances", "collect", "clear"]);
    const childInstance = vue.getCurrentInstance();
    const index = vue.computed(() => childInstances.indexOf(childInstance));
    const bindParent = (childProvider) => {
      vue.onMounted(() => {
        vue.nextTick().then(() => {
          collect(childInstance, childProvider);
        });
      });
      vue.onBeforeUnmount(() => {
        vue.nextTick().then(() => {
          clear(childInstance, childProvider);
        });
      });
    };
    return {
      index,
      parentProvider,
      bindParent
    };
  }
  function flatVNodes(subTree) {
    const vNodes = [];
    const flat = (subTree2) => {
      if (subTree2 === null || subTree2 === void 0 ? void 0 : subTree2.component) {
        flat(subTree2 === null || subTree2 === void 0 ? void 0 : subTree2.component.subTree);
        return;
      }
      if (Array.isArray(subTree2 === null || subTree2 === void 0 ? void 0 : subTree2.children)) {
        subTree2.children.forEach((child) => {
          if (vue.isVNode(child)) {
            vNodes.push(child);
            flat(child);
          }
        });
      }
    };
    flat(subTree);
    return vNodes;
  }
  function useChildren(key) {
    const parentInstance = vue.getCurrentInstance();
    const childInstances = vue.reactive([]);
    const childProviders = [];
    const length = vue.computed(() => childInstances.length);
    const sortInstances = () => {
      const vNodes = flatVNodes(parentInstance.subTree);
      childInstances.sort((a, b) => vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode));
    };
    const collect = (childInstance, childProvider) => {
      childInstances.push(childInstance);
      childProviders.push(childProvider);
      sortInstances();
    };
    const clear = (childInstance, childProvider) => {
      removeItem(childInstances, childInstance);
      removeItem(childProviders, childProvider);
    };
    const bindChildren = (parentProvider) => {
      vue.provide(key, Object.assign({
        childInstances,
        collect,
        clear
      }, parentProvider));
    };
    return {
      length,
      childProviders,
      bindChildren
    };
  }
  function onWindowResize(listener) {
    useEventListener(() => window, "resize", listener, { passive: true });
    useEventListener(() => window, "orientationchange", listener, { passive: true });
  }
  function getDirection(x, y) {
    if (x > y) {
      return "horizontal";
    }
    if (y > x) {
      return "vertical";
    }
  }
  function useTouch() {
    const startX = vue.ref(0);
    const startY = vue.ref(0);
    const deltaX = vue.ref(0);
    const deltaY = vue.ref(0);
    const offsetX = vue.ref(0);
    const offsetY = vue.ref(0);
    const prevX = vue.ref(0);
    const prevY = vue.ref(0);
    const moveX = vue.ref(0);
    const moveY = vue.ref(0);
    const direction = vue.ref();
    const touching = vue.ref(false);
    const dragging = vue.ref(false);
    const startTime = vue.ref(0);
    const distance = vue.ref(0);
    let draggingAnimationFrame = null;
    const resetTouch = () => {
      startX.value = 0;
      startY.value = 0;
      deltaX.value = 0;
      deltaY.value = 0;
      offsetX.value = 0;
      offsetY.value = 0;
      prevX.value = 0;
      prevY.value = 0;
      moveX.value = 0;
      moveY.value = 0;
      direction.value = void 0;
      touching.value = false;
      dragging.value = false;
      startTime.value = 0;
      distance.value = 0;
    };
    const startTouch = (event) => {
      resetTouch();
      const { clientX: x, clientY: y } = event.touches[0];
      startX.value = x;
      startY.value = y;
      prevX.value = x;
      prevY.value = y;
      touching.value = true;
      startTime.value = performance.now();
      dragging.value = false;
      if (draggingAnimationFrame) {
        window.cancelAnimationFrame(draggingAnimationFrame);
      }
    };
    const moveTouch = (event) => {
      const { clientX: x, clientY: y } = event.touches[0];
      dragging.value = true;
      deltaX.value = x - startX.value;
      deltaY.value = y - startY.value;
      offsetX.value = Math.abs(deltaX.value);
      offsetY.value = Math.abs(deltaY.value);
      distance.value = Math.sqrt(offsetX.value ** 2 + offsetY.value ** 2);
      moveX.value = x - prevX.value;
      moveY.value = y - prevY.value;
      if (!direction.value) {
        direction.value = getDirection(offsetX.value, offsetY.value);
      }
      prevX.value = x;
      prevY.value = y;
    };
    const endTouch = () => {
      touching.value = false;
      draggingAnimationFrame = window.requestAnimationFrame(() => {
        dragging.value = false;
      });
    };
    return {
      startX,
      startY,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      prevX,
      prevY,
      moveX,
      moveY,
      direction,
      touching,
      dragging,
      startTime,
      distance,
      resetTouch,
      startTouch,
      moveTouch,
      endTouch
    };
  }
  function asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$5(fn2) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn2.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  function _extends$9() {
    _extends$9 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$9.apply(this, arguments);
  }
  function pickProps(props2, propsKey) {
    return Array.isArray(propsKey) ? propsKey.reduce((pickedProps, key) => {
      pickedProps[key] = props2[key];
      return pickedProps;
    }, {}) : props2[propsKey];
  }
  function withInstall(component, target) {
    var componentWithInstall = target != null ? target : component;
    componentWithInstall.install = function(app) {
      var {
        name
      } = component;
      if (name) {
        app.component(name, component);
      }
    };
    return componentWithInstall;
  }
  function mount(component) {
    var app = vue.createApp(component);
    var host = document.createElement("div");
    document.body.appendChild(host);
    return {
      instance: app.mount(host),
      unmount() {
        app.unmount();
        document.body.removeChild(host);
      }
    };
  }
  function mountInstance(component, props2, eventListener) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (eventListener === void 0) {
      eventListener = {};
    }
    var Host = {
      setup() {
        return () => vue.h(component, _extends$9({}, props2, eventListener));
      }
    };
    var {
      unmount: unmount2
    } = mount(Host);
    return {
      unmountInstance: unmount2
    };
  }
  function flatFragment(vNodes) {
    var result2 = [];
    vNodes.forEach((vNode) => {
      if (vNode.type === vue.Comment) {
        return;
      }
      if (vNode.type === vue.Fragment && isArray(vNode.children)) {
        vNode.children.forEach((item) => {
          result2.push(item);
        });
        return;
      }
      result2.push(vNode);
    });
    return result2;
  }
  function useValidation() {
    var errorMessage = vue.ref("");
    var validate = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator$5(function* (rules, value, apis) {
        if (!isArray(rules) || !rules.length) {
          return true;
        }
        var resArr = yield Promise.all(rules.map((rule) => rule(value, apis)));
        return !resArr.some((res) => {
          if (res !== true) {
            errorMessage.value = String(res);
            return true;
          }
          return false;
        });
      });
      return function validate2(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
    var resetValidation = () => {
      errorMessage.value = "";
    };
    var validateWithTrigger = /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator$5(function* (validateTrigger, trigger, rules, value, apis) {
        if (validateTrigger.includes(trigger)) {
          (yield validate(rules, value, apis)) && (errorMessage.value = "");
        }
      });
      return function validateWithTrigger2(_x4, _x5, _x6, _x7, _x8) {
        return _ref2.apply(this, arguments);
      };
    }();
    return {
      errorMessage,
      validate,
      resetValidation,
      validateWithTrigger
    };
  }
  function useTeleport() {
    var disabled = vue.ref(false);
    vue.onActivated(() => {
      disabled.value = false;
    });
    vue.onDeactivated(() => {
      disabled.value = true;
    });
    return {
      disabled
    };
  }
  function createNamespace(name) {
    var namespace = "var";
    var componentName = namespace + "-" + name;
    var createBEM = (suffix) => {
      if (!suffix) {
        return componentName;
      }
      if (suffix[0] === "$") {
        return suffix.replace("$", namespace);
      }
      return suffix.startsWith("--") ? "" + componentName + suffix : componentName + "__" + suffix;
    };
    var classes2 = function() {
      for (var _len = arguments.length, classes3 = new Array(_len), _key = 0; _key < _len; _key++) {
        classes3[_key] = arguments[_key];
      }
      return classes3.map((className) => {
        if (isArray(className)) {
          var [condition, truthy, falsy = null] = className;
          return condition ? truthy : falsy;
        }
        return className;
      });
    };
    return {
      n: createBEM,
      classes: classes2
    };
  }
  function call(fn2) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    if (isArray(fn2)) {
      return fn2.map((f) => f(...args));
    }
    if (fn2) {
      return fn2(...args);
    }
  }
  function defineListenerProp(fallback) {
    return {
      type: [Function, Array],
      default: fallback
    };
  }
  function formatElevation(elevation2, defaultLevel) {
    if (elevation2 === false) {
      return null;
    }
    if (elevation2 === true && defaultLevel) {
      elevation2 = defaultLevel;
    }
    return "var-elevation--" + elevation2;
  }
  function useVModel(props2, key, options) {
    if (options === void 0) {
      options = {};
    }
    var {
      passive: passive2 = true,
      eventName,
      defaultValue,
      emit
    } = options;
    var event = eventName != null ? eventName : "onUpdate:" + key.toString();
    var getValue = () => props2[key] != null ? props2[key] : defaultValue;
    if (!passive2) {
      return vue.computed({
        get() {
          return getValue();
        },
        set(value) {
          emit ? emit(event, value) : call(props2[event], value);
        }
      });
    }
    var proxy = vue.ref(getValue());
    vue.watch(() => props2[key], () => {
      proxy.value = getValue();
    });
    vue.watch(() => proxy.value, (newValue) => {
      emit ? emit(event, newValue) : call(props2[event], newValue);
    });
    return proxy;
  }
  function _extends$8() {
    _extends$8 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$8.apply(this, arguments);
  }
  var {
    n: n$n
  } = createNamespace("ripple");
  var ANIMATION_DURATION = 250;
  function setStyles(element) {
    var {
      zIndex,
      position
    } = getStyle$1(element);
    element.style.overflow = "hidden";
    element.style.overflowX = "hidden";
    element.style.overflowY = "hidden";
    position === "static" && (element.style.position = "relative");
    zIndex === "auto" && (element.style.zIndex = "1");
  }
  function computeRippleStyles(element, event) {
    var {
      top: top2,
      left: left2
    } = getRect(element);
    var {
      clientWidth,
      clientHeight
    } = element;
    var radius = Math.sqrt(Math.pow(clientWidth, 2) + Math.pow(clientHeight, 2)) / 2;
    var size = radius * 2;
    var localX = event.touches[0].clientX - left2;
    var localY = event.touches[0].clientY - top2;
    var centerX = (clientWidth - radius * 2) / 2;
    var centerY = (clientHeight - radius * 2) / 2;
    var x = localX - radius;
    var y = localY - radius;
    return {
      x,
      y,
      centerX,
      centerY,
      size
    };
  }
  function createRipple(event) {
    var _ripple = this._ripple;
    _ripple.removeRipple();
    if (_ripple.disabled || _ripple.tasker || !Context.enableRipple) {
      return;
    }
    var task = () => {
      _ripple.tasker = null;
      var {
        x,
        y,
        centerX,
        centerY,
        size
      } = computeRippleStyles(this, event);
      var ripple2 = document.createElement("div");
      ripple2.classList.add(n$n());
      ripple2.style.opacity = "0";
      ripple2.style.transform = "translate(" + x + "px, " + y + "px) scale3d(.3, .3, .3)";
      ripple2.style.width = size + "px";
      ripple2.style.height = size + "px";
      _ripple.color && (ripple2.style.backgroundColor = _ripple.color);
      ripple2.dataset.createdAt = String(performance.now());
      setStyles(this);
      this.appendChild(ripple2);
      window.setTimeout(() => {
        ripple2.style.transform = "translate(" + centerX + "px, " + centerY + "px) scale3d(1, 1, 1)";
        ripple2.style.opacity = ".25";
      }, 20);
    };
    _ripple.tasker = window.setTimeout(task, 30);
  }
  function removeRipple() {
    var _ripple = this._ripple;
    var task = () => {
      var ripples = this.querySelectorAll("." + n$n());
      if (!ripples.length) {
        return;
      }
      var lastRipple = ripples[ripples.length - 1];
      var delay = ANIMATION_DURATION - performance.now() + Number(lastRipple.dataset.createdAt);
      window.setTimeout(() => {
        lastRipple.style.opacity = "0";
        window.setTimeout(() => {
          var _lastRipple$parentNod;
          return (_lastRipple$parentNod = lastRipple.parentNode) == null ? void 0 : _lastRipple$parentNod.removeChild(lastRipple);
        }, ANIMATION_DURATION);
      }, delay);
    };
    _ripple.tasker ? window.setTimeout(task, 30) : task();
  }
  function forbidRippleTask() {
    if (!supportTouch$1() || !Context.enableRipple) {
      return;
    }
    var _ripple = this._ripple;
    _ripple.tasker && window.clearTimeout(_ripple.tasker);
    _ripple.tasker = null;
  }
  function mounted$1(el, binding) {
    var _binding$value;
    el._ripple = _extends$8({
      tasker: null
    }, (_binding$value = binding.value) != null ? _binding$value : {}, {
      removeRipple: removeRipple.bind(el)
    });
    el.addEventListener("touchstart", createRipple, {
      passive: true
    });
    el.addEventListener("touchmove", forbidRippleTask, {
      passive: true
    });
    el.addEventListener("dragstart", removeRipple, {
      passive: true
    });
    document.addEventListener("touchend", el._ripple.removeRipple, {
      passive: true
    });
    document.addEventListener("touchcancel", el._ripple.removeRipple, {
      passive: true
    });
  }
  function unmounted$1(el) {
    el.removeEventListener("touchstart", createRipple);
    el.removeEventListener("touchmove", forbidRippleTask);
    el.removeEventListener("dragstart", removeRipple);
    document.removeEventListener("touchend", el._ripple.removeRipple);
    document.removeEventListener("touchcancel", el._ripple.removeRipple);
  }
  function updated$1(el, binding) {
    var _binding$value2, _binding$value3, _el$_ripple, _el$_ripple2;
    var newBinding = {
      color: (_binding$value2 = binding.value) == null ? void 0 : _binding$value2.color,
      disabled: (_binding$value3 = binding.value) == null ? void 0 : _binding$value3.disabled
    };
    var diff = newBinding.color !== ((_el$_ripple = el._ripple) == null ? void 0 : _el$_ripple.color) || newBinding.disabled !== ((_el$_ripple2 = el._ripple) == null ? void 0 : _el$_ripple2.disabled);
    if (diff) {
      var _el$_ripple3, _el$_ripple4;
      el._ripple = _extends$8({
        tasker: newBinding.disabled ? null : (_el$_ripple3 = el._ripple) == null ? void 0 : _el$_ripple3.tasker,
        removeRipple: (_el$_ripple4 = el._ripple) == null ? void 0 : _el$_ripple4.removeRipple
      }, newBinding);
    }
  }
  var Ripple = {
    mounted: mounted$1,
    unmounted: unmounted$1,
    updated: updated$1,
    install(app) {
      app.directive("ripple", this);
    }
  };
  const Ripple$1 = Ripple;
  function resolveLock() {
    var lockCounts = Object.keys(Context.locks).length;
    lockCounts <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
  }
  function addLock(uid) {
    Context.locks[uid] = 1;
    resolveLock();
  }
  function releaseLock(uid) {
    delete Context.locks[uid];
    resolveLock();
  }
  function useLock(source2, useSource) {
    var {
      uid
    } = vue.getCurrentInstance();
    if (useSource) {
      vue.watch(useSource, (newValue) => {
        if (newValue === false) {
          releaseLock(uid);
        } else if (newValue === true && source2() === true) {
          addLock(uid);
        }
      });
    }
    vue.watch(source2, (newValue) => {
      if (useSource && useSource() === false) {
        return;
      }
      if (newValue === true) {
        addLock(uid);
      } else {
        releaseLock(uid);
      }
    });
    vue.onBeforeMount(() => {
      if (useSource && useSource() === false) {
        return;
      }
      if (source2() === true) {
        addLock(uid);
      }
    });
    vue.onUnmounted(() => {
      if (useSource && useSource() === false) {
        return;
      }
      if (source2() === true) {
        releaseLock(uid);
      }
    });
    vue.onActivated(() => {
      if (useSource && useSource() === false) {
        return;
      }
      if (source2() === true) {
        addLock(uid);
      }
    });
    vue.onDeactivated(() => {
      if (useSource && useSource() === false) {
        return;
      }
      if (source2() === true) {
        releaseLock(uid);
      }
    });
  }
  function useZIndex(source2, count) {
    var zIndex = vue.ref(Context.zIndex);
    vue.watch(source2, (newValue) => {
      if (newValue) {
        Context.zIndex += count;
        zIndex.value = Context.zIndex;
      }
    }, {
      immediate: true
    });
    return {
      zIndex
    };
  }
  var props$l = {
    name: String,
    size: [Number, String],
    color: String,
    namespace: {
      type: String,
      default: "var-icon"
    },
    transition: {
      type: [Number, String],
      default: 0
    },
    animationClass: String,
    onClick: defineListenerProp()
  };
  function error$1(source2, message) {
    throw Error("Varlet [" + source2 + "]: " + message);
  }
  function getTop$1(element) {
    var {
      top: top2
    } = getRect(element);
    return top2 + (document.body.scrollTop || document.documentElement.scrollTop);
  }
  function getScrollTop(element) {
    var top2 = "scrollTop" in element ? element.scrollTop : element.pageYOffset;
    return Math.max(top2, 0);
  }
  function getScrollLeft(element) {
    var left2 = "scrollLeft" in element ? element.scrollLeft : element.pageXOffset;
    return Math.max(left2, 0);
  }
  function getParentScroller(el) {
    var element = el;
    while (element) {
      if (!element.parentNode) {
        break;
      }
      element = element.parentNode;
      if (element === document.body || element === document.documentElement) {
        break;
      }
      var scrollRE = /(scroll|auto)/;
      var {
        overflowY,
        overflow
      } = getStyle$1(element);
      if (scrollRE.test(overflowY) || scrollRE.test(overflow)) {
        return element;
      }
    }
    return window;
  }
  function getViewportSize() {
    var {
      width,
      height
    } = getRect(window);
    return {
      vw: width,
      vh: height,
      vMin: Math.min(width, height),
      vMax: Math.max(width, height)
    };
  }
  var isRem = (value) => isString(value) && value.endsWith("rem");
  var isEm = (value) => isString(value) && value.endsWith("em") && !value.endsWith("rem");
  var isPx = (value) => isString(value) && value.endsWith("px") || isNumber(value);
  var isPercent = (value) => isString(value) && value.endsWith("%");
  var isVw = (value) => isString(value) && value.endsWith("vw");
  var isVh = (value) => isString(value) && value.endsWith("vh");
  var isVMin = (value) => isString(value) && value.endsWith("vmin");
  var isVMax = (value) => isString(value) && value.endsWith("vmax");
  var isCalc = (value) => isString(value) && value.startsWith("calc(");
  var isVar = (value) => isString(value) && value.startsWith("var(");
  var toPxNum = (value) => {
    if (isNumber(value)) {
      return value;
    }
    if (isPx(value)) {
      return +value.replace("px", "");
    }
    if (!inBrowser$1()) {
      return 0;
    }
    var {
      vw,
      vh,
      vMin,
      vMax
    } = getViewportSize();
    if (isVw(value)) {
      return +value.replace("vw", "") * vw / 100;
    }
    if (isVh(value)) {
      return +value.replace("vh", "") * vh / 100;
    }
    if (isVMin(value)) {
      return +value.replace("vmin", "") * vMin / 100;
    }
    if (isVMax(value)) {
      return +value.replace("vmax", "") * vMax / 100;
    }
    if (isRem(value)) {
      var num = +value.replace("rem", "");
      var rootFontSize = getStyle$1(document.documentElement).fontSize;
      return num * parseFloat(rootFontSize);
    }
    if (isString(value)) {
      return toNumber(value);
    }
    return 0;
  };
  var toSizeUnit = (value) => {
    if (value == null) {
      return void 0;
    }
    if (isPercent(value) || isVw(value) || isVh(value) || isEm(value) || isRem(value) || isCalc(value) || isVar(value) || isVMin(value) || isVMax(value)) {
      return value;
    }
    return toPxNum(value) + "px";
  };
  var multiplySizeUnit = function(value, quantity) {
    if (quantity === void 0) {
      quantity = 1;
    }
    if (value == null) {
      return void 0;
    }
    var legalSize = toSizeUnit(value);
    var unit = legalSize.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
    return "" + parseFloat(legalSize) * quantity + unit;
  };
  function scrollTo(element, _ref) {
    var {
      top: top2 = 0,
      left: left2 = 0,
      duration = 300,
      animation
    } = _ref;
    var startTime = Date.now();
    var scrollTop = getScrollTop(element);
    var scrollLeft = getScrollLeft(element);
    return new Promise((resolve) => {
      var frame = () => {
        var progress2 = (Date.now() - startTime) / duration;
        if (progress2 < 1) {
          var nextTop = scrollTop + (top2 - scrollTop) * animation(progress2);
          var nextLeft = scrollLeft + (left2 - scrollLeft) * animation(progress2);
          element.scrollTo(nextLeft, nextTop);
          requestAnimationFrame(frame);
        } else {
          element.scrollTo(left2, top2);
          resolve();
        }
      };
      requestAnimationFrame(frame);
    });
  }
  function padStartFlex(style2) {
    return style2 === "start" || style2 === "end" ? "flex-" + style2 : style2;
  }
  function asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$4(fn2) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn2.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var {
    n: n$m,
    classes: classes$j
  } = createNamespace("icon");
  function __render__$l(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.isURL(_ctx.name) ? "img" : "i"), {
      class: vue.normalizeClass(_ctx.classes(_ctx.n(), [_ctx.namespace !== _ctx.n(), _ctx.namespace], _ctx.namespace + "--set", [_ctx.isURL(_ctx.name), _ctx.n("image"), _ctx.namespace + "-" + _ctx.nextName], [_ctx.animateInProgress, _ctx.animationClass == null ? _ctx.n("--shrinking") : _ctx.animationClass])),
      style: vue.normalizeStyle({
        color: _ctx.color,
        "transition-duration": _ctx.toNumber(_ctx.transition) + "ms",
        width: _ctx.isURL(_ctx.name) ? _ctx.toSizeUnit(_ctx.size) : null,
        height: _ctx.isURL(_ctx.name) ? _ctx.toSizeUnit(_ctx.size) : null,
        fontSize: _ctx.toSizeUnit(_ctx.size)
      }),
      src: _ctx.isURL(_ctx.name) ? _ctx.nextName : null,
      onClick: _ctx.onClick
    }, null, 8, ["class", "style", "src", "onClick"]);
  }
  var __sfc__$l = vue.defineComponent({
    name: "VarIcon",
    props: props$l,
    setup(props2) {
      var nextName = vue.ref("");
      var animateInProgress = vue.ref(false);
      var handleNameChange = /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator$4(function* (newName, oldName) {
          var {
            transition
          } = props2;
          if (oldName == null || toNumber(transition) === 0) {
            nextName.value = newName;
            return;
          }
          animateInProgress.value = true;
          yield vue.nextTick();
          setTimeout(() => {
            if (oldName != null) {
              nextName.value = newName;
            }
            animateInProgress.value = false;
          }, toNumber(transition));
        });
        return function handleNameChange2(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
      vue.watch(() => props2.name, handleNameChange, {
        immediate: true
      });
      return {
        n: n$m,
        classes: classes$j,
        nextName,
        animateInProgress,
        isURL,
        toNumber,
        toSizeUnit
      };
    }
  });
  __sfc__$l.render = __render__$l;
  const Icon = __sfc__$l;
  withInstall(Icon);
  var _IconComponent = Icon;
  var linear = (value) => value;
  var props$k = {
    type: {
      type: String,
      default: "circle"
    },
    radius: [String, Number],
    size: {
      type: String,
      default: "normal"
    },
    color: String,
    description: String,
    loading: Boolean
  };
  var {
    n: n$l,
    classes: classes$i
  } = createNamespace("loading");
  var _withScopeId = (n2) => (vue.pushScopeId(""), n2 = n2(), vue.popScopeId(), n2);
  var _hoisted_1$8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
    "svg",
    {
      viewBox: "25 25 50 50"
    },
    [/* @__PURE__ */ vue.createElementVNode("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })],
    -1
    /* HOISTED */
  ));
  var _hoisted_2$4 = [_hoisted_1$8];
  function __render__$k(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.n())
      },
      [_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(
        "div",
        {
          key: 0,
          class: vue.normalizeClass(_ctx.classes(_ctx.n("content"), [_ctx.loading, _ctx.n("content--active")]))
        },
        [vue.renderSlot(_ctx.$slots, "default"), _ctx.loading ? (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 0,
            class: vue.normalizeClass(_ctx.n("content-mask"))
          },
          null,
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true)],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true), _ctx.isShow ? (vue.openBlock(), vue.createElementBlock(
        "div",
        {
          key: 1,
          class: vue.normalizeClass(_ctx.classes(_ctx.n("$--box"), _ctx.n("body"), [_ctx.$slots.default, _ctx.n("inside")]))
        },
        [_ctx.type === "circle" ? (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 0,
            class: vue.normalizeClass(_ctx.n("circle"))
          },
          [vue.createElementVNode(
            "span",
            {
              class: vue.normalizeClass(_ctx.classes(_ctx.n("circle-block"), _ctx.n("circle-block--" + _ctx.size))),
              style: vue.normalizeStyle({
                width: _ctx.multiplySizeUnit(_ctx.radius, 2),
                height: _ctx.multiplySizeUnit(_ctx.radius, 2),
                color: _ctx.color
              })
            },
            _hoisted_2$4,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true), (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(_ctx.loadingTypeDict, (nums, key) => {
            return vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              {
                key
              },
              [_ctx.type === key ? (vue.openBlock(), vue.createElementBlock(
                "div",
                {
                  key: 0,
                  class: vue.normalizeClass(_ctx.classes(_ctx.n(key), _ctx.n(key + "--" + _ctx.size)))
                },
                [(vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(nums, (num) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        key: num + key,
                        style: vue.normalizeStyle({
                          backgroundColor: _ctx.color
                        }),
                        class: vue.normalizeClass(_ctx.classes(_ctx.n(key + "-item"), _ctx.n(key + "-item--" + _ctx.size)))
                      },
                      null,
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true)],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )), _ctx.$slots.description || _ctx.description ? (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 1,
            class: vue.normalizeClass(_ctx.classes(_ctx.n("description"), _ctx.n("description--" + _ctx.size))),
            style: vue.normalizeStyle({
              color: _ctx.color
            })
          },
          [vue.renderSlot(_ctx.$slots, "description", {}, () => [vue.createTextVNode(
            vue.toDisplayString(_ctx.description),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true)],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true)],
      2
      /* CLASS */
    );
  }
  var __sfc__$k = vue.defineComponent({
    name: "VarLoading",
    props: props$k,
    setup(props2, _ref) {
      var {
        slots
      } = _ref;
      var loadingTypeDict = {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      };
      var isShow = vue.computed(() => {
        if (!call(slots.default))
          return true;
        return props2.loading;
      });
      return {
        n: n$l,
        classes: classes$i,
        multiplySizeUnit,
        loadingTypeDict,
        isShow
      };
    }
  });
  __sfc__$k.render = __render__$k;
  const Loading = __sfc__$k;
  withInstall(Loading);
  var props$j = {
    hovering: {
      type: Boolean,
      default: true
    }
  };
  var {
    n: n$k,
    classes: classes$h
  } = createNamespace("hover-overlay");
  function __render__$j(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), [_ctx.hovering, _ctx.n("--hovering")]))
      },
      null,
      2
      /* CLASS */
    );
  }
  var __sfc__$j = vue.defineComponent({
    name: "VarHoverOverlay",
    props: props$j,
    setup() {
      return {
        n: n$k,
        classes: classes$h
      };
    }
  });
  __sfc__$j.render = __render__$j;
  const HoverOverlay = __sfc__$j;
  withInstall(HoverOverlay);
  function useHoverOverlay() {
    var hovering = vue.ref(false);
    var handleHovering = (value) => {
      hovering.value = value;
    };
    return {
      hovering,
      handleHovering
    };
  }
  function shouldDisabled(arg) {
    if (!arg) {
      return false;
    }
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (arg === "desktop" && isMobile) {
      return true;
    }
    if (arg === "mobile" && !isMobile) {
      return true;
    }
    return false;
  }
  function getStyle(element) {
    var style2 = element.getAttribute("style");
    if (!style2)
      return {};
    return style2.split(";").filter(Boolean).reduce((style3, item) => {
      var [key, value] = item.split(":").map((item2) => item2.trim());
      style3[camelize(key)] = value;
      return style3;
    }, {});
  }
  function updateRawStyle(element) {
    var {
      value
    } = element._hover;
    var style2 = getStyle(element);
    Object.keys(value).forEach((key) => {
      var camelizedKey = camelize(key);
      var styleValue = value[camelizedKey];
      if (styleValue != null && style2[camelizedKey]) {
        element._hover.rawStyle[camelizedKey] = style2[camelizedKey];
      }
    });
  }
  function updateStyle(element, styleValue) {
    Object.keys(styleValue).forEach((key) => {
      var value = styleValue[key];
      if (value != null) {
        element.style[key] = value;
      }
    });
  }
  function clearStyle(element) {
    Object.keys(element._hover.value).forEach((key) => {
      var value = element._hover.value[key];
      if (value != null) {
        element.style[key] = "";
      }
    });
  }
  function restoreStyle(element) {
    clearStyle(element);
    updateStyle(element, element._hover.rawStyle);
  }
  function createHover() {
    var {
      value
    } = this._hover;
    this._hover.hovering = true;
    if (isFunction(value)) {
      value(this._hover.hovering);
      return;
    }
    updateStyle(this, value);
  }
  function removeHover() {
    this._hover.hovering = false;
    if (isFunction(this._hover.value)) {
      this._hover.value(this._hover.hovering);
      return;
    }
    restoreStyle(this);
  }
  function mounted(element, binding) {
    var _element$_hover$hover, _element$_hover;
    var {
      arg,
      value
    } = binding;
    if (shouldDisabled(arg)) {
      return;
    }
    element._hover = {
      value,
      hovering: (_element$_hover$hover = (_element$_hover = element._hover) == null ? void 0 : _element$_hover.hovering) != null ? _element$_hover$hover : false,
      rawStyle: {}
    };
    updateRawStyle(element);
    element.addEventListener("mouseenter", createHover);
    element.addEventListener("mouseleave", removeHover);
  }
  function unmounted(element, binding) {
    if (shouldDisabled(binding.arg)) {
      return;
    }
    restoreStyle(element);
    element.removeEventListener("mouseenter", createHover);
    element.removeEventListener("mouseleave", removeHover);
  }
  function beforeUpdate(element, binding) {
    if (!element._hover) {
      return;
    }
    unmounted(element, binding);
  }
  function shouldUpdateStyle(element, binding) {
    return !isFunction(binding.value) && element._hover.hovering;
  }
  function updated(element, binding) {
    mounted(element, binding);
    if (shouldUpdateStyle(element, binding)) {
      updateStyle(element, binding.value);
    }
  }
  var Hover = {
    mounted,
    unmounted,
    beforeUpdate,
    updated,
    install(app) {
      app.directive("hover", this);
    }
  };
  const Hover$1 = Hover;
  function _extends$7() {
    _extends$7 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$7.apply(this, arguments);
  }
  var props$i = {
    type: String,
    nativeType: {
      type: String,
      default: "button"
    },
    size: String,
    loading: Boolean,
    round: Boolean,
    block: Boolean,
    text: Boolean,
    outline: Boolean,
    disabled: Boolean,
    autoLoading: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    color: String,
    textColor: String,
    elevation: {
      type: [Boolean, Number, String],
      default: true
    },
    loadingRadius: [Number, String],
    loadingType: pickProps(props$k, "type"),
    loadingSize: pickProps(props$k, "size"),
    loadingColor: _extends$7({}, pickProps(props$k, "color"), {
      default: "currentColor"
    }),
    onClick: defineListenerProp(),
    onTouchstart: defineListenerProp()
  };
  var BUTTON_GROUP_BIND_BUTTON_KEY = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
  function useButtonGroup() {
    var {
      bindParent,
      parentProvider,
      index
    } = useParent(BUTTON_GROUP_BIND_BUTTON_KEY);
    return {
      index,
      buttonGroup: parentProvider,
      bindButtonGroup: bindParent
    };
  }
  var {
    n: n$j,
    classes: classes$g
  } = createNamespace("button");
  var _hoisted_1$7 = ["type", "disabled"];
  function __render__$i(_ctx, _cache) {
    var _component_var_loading = vue.resolveComponent("var-loading");
    var _component_var_hover_overlay = vue.resolveComponent("var-hover-overlay");
    var _directive_ripple = vue.resolveDirective("ripple");
    var _directive_hover = vue.resolveDirective("hover");
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("$--box"), _ctx.n("--" + _ctx.states.size), [_ctx.block, _ctx.n("$--flex") + " " + _ctx.n("--block"), _ctx.n("$--inline-flex")], [_ctx.disabled, _ctx.n("--disabled")], [_ctx.states.text, _ctx.n("--text-" + _ctx.states.type) + " " + _ctx.n("--text"), _ctx.n("--" + _ctx.states.type) + " " + _ctx.states.elevation], [_ctx.states.text && _ctx.disabled, _ctx.n("--text-disabled")], [_ctx.round, _ctx.n("--round")], [_ctx.states.outline, _ctx.n("--outline")])),
      style: vue.normalizeStyle({
        color: _ctx.states.textColor,
        background: _ctx.states.color
      }),
      type: _ctx.nativeType,
      disabled: _ctx.disabled,
      onClick: _cache[0] || (_cache[0] = function() {
        return _ctx.handleClick && _ctx.handleClick(...arguments);
      }),
      onTouchstart: _cache[1] || (_cache[1] = function() {
        return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
      })
    }, [_ctx.loading || _ctx.pending ? (vue.openBlock(), vue.createBlock(_component_var_loading, {
      key: 0,
      class: vue.normalizeClass(_ctx.n("loading")),
      "var-button-cover": "",
      color: _ctx.loadingColor,
      type: _ctx.loadingType,
      size: _ctx.loadingSize,
      radius: _ctx.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : vue.createCommentVNode("v-if", true), vue.createElementVNode(
      "div",
      {
        class: vue.normalizeClass(_ctx.classes(_ctx.n("content"), [_ctx.loading || _ctx.pending, _ctx.n("--hidden")]))
      },
      [vue.renderSlot(_ctx.$slots, "default")],
      2
      /* CLASS */
    ), vue.createVNode(_component_var_hover_overlay, {
      hovering: _ctx.disabled ? false : _ctx.hovering
    }, null, 8, ["hovering"])], 46, _hoisted_1$7)), [[_directive_ripple, {
      disabled: _ctx.disabled || !_ctx.ripple
    }], [_directive_hover, _ctx.handleHovering, "desktop"]]);
  }
  var __sfc__$i = vue.defineComponent({
    name: "VarButton",
    components: {
      VarLoading: Loading,
      VarHoverOverlay: HoverOverlay
    },
    directives: {
      Ripple: Ripple$1,
      Hover: Hover$1
    },
    props: props$i,
    setup(props2) {
      var pending = vue.ref(false);
      var {
        buttonGroup: buttonGroup2
      } = useButtonGroup();
      var {
        hovering,
        handleHovering
      } = useHoverOverlay();
      var states = vue.computed(() => {
        if (!buttonGroup2) {
          return {
            elevation: formatElevation(props2.elevation, 2),
            type: props2.type != null ? props2.type : "default",
            size: props2.size != null ? props2.size : "normal",
            color: props2.color,
            text: props2.text,
            textColor: props2.textColor,
            outline: props2.outline
          };
        }
        var {
          type,
          size,
          color,
          textColor,
          mode
        } = buttonGroup2;
        return {
          elevation: "",
          type: props2.type != null ? props2.type : type.value,
          size: props2.size != null ? props2.size : size.value,
          color: props2.color != null ? props2.color : color.value,
          textColor: props2.textColor != null ? props2.textColor : textColor.value,
          text: mode.value !== "normal",
          outline: mode.value === "outline"
        };
      });
      var attemptAutoLoading = (result2) => {
        if (props2.autoLoading) {
          pending.value = true;
          result2 = isArray(result2) ? result2 : [result2];
          Promise.all(result2).then(() => {
            pending.value = false;
          }).catch(() => {
            pending.value = false;
          });
        }
      };
      var handleClick = (e) => {
        var {
          loading: loading2,
          disabled,
          onClick
        } = props2;
        if (!onClick || loading2 || disabled || pending.value) {
          return;
        }
        attemptAutoLoading(call(onClick, e));
      };
      var handleTouchstart = (e) => {
        var {
          loading: loading2,
          disabled,
          onTouchstart
        } = props2;
        if (!onTouchstart || loading2 || disabled || pending.value) {
          return;
        }
        attemptAutoLoading(call(onTouchstart, e));
      };
      return {
        n: n$j,
        classes: classes$g,
        pending,
        states,
        hovering,
        handleHovering,
        handleClick,
        handleTouchstart
      };
    }
  });
  __sfc__$i.render = __render__$i;
  const Button = __sfc__$i;
  withInstall(Button);
  var _ButtonComponent = Button;
  var props$h = {
    src: String,
    fit: {
      type: String,
      default: "cover"
    },
    imageHeight: [String, Number],
    imageWidth: [String, Number],
    outline: Boolean,
    layout: {
      type: String,
      default: "column"
    },
    floating: Boolean,
    floatingDuration: {
      type: Number,
      default: 250
    },
    alt: String,
    title: String,
    subtitle: String,
    description: String,
    elevation: {
      type: [Boolean, Number, String],
      default: true
    },
    ripple: Boolean,
    onClick: defineListenerProp(),
    "onUpdate:floating": defineListenerProp()
  };
  function asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$3(fn2) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn2.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var {
    n: n$i,
    classes: classes$f
  } = createNamespace("card");
  var RIPPLE_DELAY = 500;
  var _hoisted_1$6 = ["src", "alt"];
  function __render__$h(_ctx, _cache) {
    var _component_var_icon = vue.resolveComponent("var-icon");
    var _component_var_button = vue.resolveComponent("var-button");
    var _directive_ripple = vue.resolveDirective("ripple");
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "div",
      {
        ref: "card",
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), [_ctx.isRow, _ctx.n("--layout-row")], [_ctx.outline, _ctx.n("--outline")], _ctx.formatElevation(_ctx.elevation, 1))),
        style: vue.normalizeStyle({
          zIndex: _ctx.floated ? _ctx.zIndex : void 0
        }),
        onClick: _cache[0] || (_cache[0] = function() {
          return _ctx.handleClick && _ctx.handleClick(...arguments);
        })
      },
      [vue.createElementVNode(
        "div",
        {
          ref: "cardFloater",
          class: vue.normalizeClass(_ctx.n("floater")),
          style: vue.normalizeStyle({
            width: _ctx.floaterWidth,
            height: _ctx.floaterHeight,
            top: _ctx.floaterTop,
            left: _ctx.floaterLeft,
            overflow: _ctx.floaterOverflow,
            position: _ctx.floaterPosition,
            transition: _ctx.floated ? "background-color " + _ctx.floatingDuration + "ms, color " + _ctx.floatingDuration + "ms, width " + _ctx.floatingDuration + "ms, height " + _ctx.floatingDuration + "ms, top " + _ctx.floatingDuration + "ms, left " + _ctx.floatingDuration + "ms" : void 0
          })
        },
        [vue.renderSlot(_ctx.$slots, "image", {}, () => [_ctx.src ? (vue.openBlock(), vue.createElementBlock("img", {
          key: 0,
          class: vue.normalizeClass(_ctx.n("image")),
          style: vue.normalizeStyle({
            objectFit: _ctx.fit,
            height: _ctx.toSizeUnit(_ctx.imageHeight),
            width: _ctx.toSizeUnit(_ctx.imageWidth)
          }),
          src: _ctx.src,
          alt: _ctx.alt
        }, null, 14, _hoisted_1$6)) : vue.createCommentVNode("v-if", true)]), vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.n("container"))
          },
          [vue.renderSlot(_ctx.$slots, "title", {}, () => [_ctx.title ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: vue.normalizeClass(_ctx.n("title"))
            },
            vue.toDisplayString(_ctx.title),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true)]), vue.renderSlot(_ctx.$slots, "subtitle", {}, () => [_ctx.subtitle ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: vue.normalizeClass(_ctx.n("subtitle"))
            },
            vue.toDisplayString(_ctx.subtitle),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true)]), vue.renderSlot(_ctx.$slots, "description", {}, () => [_ctx.description ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: vue.normalizeClass(_ctx.n("description"))
            },
            vue.toDisplayString(_ctx.description),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true)]), _ctx.$slots.extra ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: vue.normalizeClass(_ctx.n("footer"))
            },
            [vue.renderSlot(_ctx.$slots, "extra")],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true), _ctx.$slots["floating-content"] && !_ctx.isRow ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 1,
              class: vue.normalizeClass(_ctx.n("floating-content")),
              style: vue.normalizeStyle({
                height: _ctx.contentHeight,
                opacity: _ctx.opacity,
                transition: "opacity " + _ctx.floatingDuration * 2 + "ms"
              })
            },
            [vue.renderSlot(_ctx.$slots, "floating-content")],
            6
            /* CLASS, STYLE */
          )) : vue.createCommentVNode("v-if", true)],
          2
          /* CLASS */
        ), _ctx.showFloatingButtons ? (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 0,
            class: vue.normalizeClass(_ctx.classes(_ctx.n("floating-buttons"), _ctx.n("$--box"))),
            style: vue.normalizeStyle({
              zIndex: _ctx.zIndex,
              opacity: _ctx.opacity,
              transition: "opacity " + _ctx.floatingDuration * 2 + "ms"
            })
          },
          [vue.renderSlot(_ctx.$slots, "close-button", {}, () => [vue.createVNode(_component_var_button, {
            "var-card-cover": "",
            round: "",
            class: vue.normalizeClass(_ctx.classes(_ctx.n("close-button"), _ctx.n("$-elevation--6"))),
            onClick: vue.withModifiers(_ctx.close, ["stop"])
          }, {
            default: vue.withCtx(() => [vue.createVNode(_component_var_icon, {
              "var-card-cover": "",
              name: "window-close",
              class: vue.normalizeClass(_ctx.n("close-button-icon"))
            }, null, 8, ["class"])]),
            _: 1
            /* STABLE */
          }, 8, ["class", "onClick"])])],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true)],
        6
        /* CLASS, STYLE */
      ), vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass(_ctx.n("holder")),
          style: vue.normalizeStyle({
            width: _ctx.holderWidth,
            height: _ctx.holderHeight
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )), [[_directive_ripple, {
      disabled: !_ctx.ripple || _ctx.floater
    }]]);
  }
  var __sfc__$h = vue.defineComponent({
    name: "VarCard",
    directives: {
      Ripple: Ripple$1
    },
    components: {
      VarIcon: Icon,
      VarButton: Button
    },
    props: props$h,
    setup(props2) {
      var card2 = vue.ref(null);
      var cardFloater = vue.ref(null);
      var holderWidth = vue.ref("auto");
      var holderHeight = vue.ref("auto");
      var floaterWidth = vue.ref("100%");
      var floaterHeight = vue.ref("100%");
      var floaterTop = vue.ref("auto");
      var floaterLeft = vue.ref("auto");
      var floaterPosition = vue.ref(void 0);
      var floaterOverflow = vue.ref("hidden");
      var contentHeight = vue.ref("0px");
      var opacity = vue.ref("0");
      var isRow = vue.computed(() => props2.layout === "row");
      var showFloatingButtons = vue.ref(false);
      var floated = vue.ref(false);
      var {
        zIndex
      } = useZIndex(() => props2.floating, 1);
      useLock(() => props2.floating, () => !isRow.value);
      var dropdownFloaterTop = "auto";
      var dropdownFloaterLeft = "auto";
      var dropper = null;
      var floater = vue.ref(null);
      var floating = /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator$3(function* () {
          clearTimeout(floater.value);
          clearTimeout(dropper);
          floater.value = null;
          floater.value = setTimeout(/* @__PURE__ */ _asyncToGenerator$3(function* () {
            var {
              width,
              height,
              left: left2,
              top: top2
            } = getRect(card2.value);
            holderWidth.value = toSizeUnit(width);
            holderHeight.value = toSizeUnit(height);
            floaterWidth.value = holderWidth.value;
            floaterHeight.value = holderHeight.value;
            floaterTop.value = toSizeUnit(top2);
            floaterLeft.value = toSizeUnit(left2);
            floaterPosition.value = "fixed";
            dropdownFloaterTop = floaterTop.value;
            dropdownFloaterLeft = floaterLeft.value;
            showFloatingButtons.value = true;
            yield doubleRaf();
            floaterTop.value = "0";
            floaterLeft.value = "0";
            floaterWidth.value = "100vw";
            floaterHeight.value = "100vh";
            contentHeight.value = "auto";
            opacity.value = "1";
            floaterOverflow.value = "auto";
            floated.value = true;
          }), props2.ripple ? RIPPLE_DELAY : 0);
        });
        return function floating2() {
          return _ref.apply(this, arguments);
        };
      }();
      var dropdown = () => {
        clearTimeout(dropper);
        clearTimeout(floater.value);
        floater.value = null;
        floaterWidth.value = holderWidth.value;
        floaterHeight.value = holderHeight.value;
        floaterTop.value = dropdownFloaterTop;
        floaterLeft.value = dropdownFloaterLeft;
        contentHeight.value = "0px";
        opacity.value = "0";
        showFloatingButtons.value = false;
        dropper = setTimeout(() => {
          holderWidth.value = "auto";
          holderHeight.value = "auto";
          floaterWidth.value = "100%";
          floaterHeight.value = "100%";
          floaterTop.value = "auto";
          floaterLeft.value = "auto";
          dropdownFloaterTop = "auto";
          dropdownFloaterLeft = "auto";
          floaterOverflow.value = "hidden";
          floaterPosition.value = void 0;
          floated.value = false;
        }, props2.floatingDuration);
      };
      var close = () => {
        call(props2["onUpdate:floating"], false);
      };
      var handleClick = (e) => {
        call(props2.onClick, e);
      };
      vue.watch(() => props2.floating, (value) => {
        if (isRow.value)
          return;
        vue.nextTick(() => {
          value ? floating() : dropdown();
        });
      }, {
        immediate: true
      });
      return {
        n: n$i,
        classes: classes$f,
        toSizeUnit,
        card: card2,
        cardFloater,
        holderWidth,
        holderHeight,
        floater,
        floaterWidth,
        floaterHeight,
        floaterTop,
        floaterLeft,
        floaterPosition,
        floaterOverflow,
        contentHeight,
        opacity,
        zIndex,
        isRow,
        close,
        showFloatingButtons,
        floated,
        formatElevation,
        handleClick
      };
    }
  });
  __sfc__$h.render = __render__$h;
  const Card = __sfc__$h;
  withInstall(Card);
  var _CardComponent = Card;
  var props$g = {
    errorMessage: {
      type: String,
      default: ""
    },
    extraMessage: {
      type: String,
      default: ""
    }
  };
  var {
    n: n$h
  } = createNamespace("form-details");
  var _hoisted_1$5 = {
    key: 0
  };
  var _hoisted_2$3 = {
    key: 0
  };
  function __render__$g(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: _ctx.n()
    }, {
      default: vue.withCtx(() => [_ctx.errorMessage || _ctx.extraMessage || _ctx.$slots["extra-message"] ? (vue.openBlock(), vue.createElementBlock(
        "div",
        {
          key: 0,
          class: vue.normalizeClass(_ctx.n())
        },
        [vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.n("error-message"))
          },
          [vue.createVNode(vue.Transition, {
            name: _ctx.n("message")
          }, {
            default: vue.withCtx(() => [_ctx.errorMessage ? (vue.openBlock(), vue.createElementBlock(
              "div",
              _hoisted_1$5,
              vue.toDisplayString(_ctx.errorMessage),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)]),
            _: 1
            /* STABLE */
          }, 8, ["name"])],
          2
          /* CLASS */
        ), vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.n("extra-message"))
          },
          [vue.createVNode(vue.Transition, {
            name: _ctx.n("message")
          }, {
            default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "extra-message", {}, () => [_ctx.extraMessage ? (vue.openBlock(), vue.createElementBlock(
              "div",
              _hoisted_2$3,
              vue.toDisplayString(_ctx.extraMessage),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)])]),
            _: 3
            /* FORWARDED */
          }, 8, ["name"])],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true)]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"]);
  }
  var __sfc__$g = vue.defineComponent({
    name: "VarFormDetails",
    props: props$g,
    setup: () => ({
      n: n$h
    })
  });
  __sfc__$g.render = __render__$g;
  const FormDetails = __sfc__$g;
  withInstall(FormDetails);
  var props$f = {
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: false
    },
    checkedValue: {
      type: [String, Number, Boolean, Object, Array],
      default: true
    },
    uncheckedValue: {
      type: [String, Number, Boolean, Object, Array],
      default: false
    },
    checkedColor: String,
    uncheckedColor: String,
    disabled: Boolean,
    readonly: Boolean,
    indeterminate: Boolean,
    iconSize: [String, Number],
    ripple: {
      type: Boolean,
      default: true
    },
    validateTrigger: {
      type: Array,
      default: () => ["onChange"]
    },
    rules: Array,
    onClick: defineListenerProp(),
    onChange: defineListenerProp(),
    "onUpdate:modelValue": defineListenerProp(),
    "onUpdate:indeterminate": defineListenerProp()
  };
  var CHECKBOX_GROUP_BIND_CHECKBOX_KEY = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
  function useCheckboxGroup() {
    var {
      bindParent,
      parentProvider,
      index
    } = useParent(CHECKBOX_GROUP_BIND_CHECKBOX_KEY);
    return {
      index,
      checkboxGroup: parentProvider,
      bindCheckboxGroup: bindParent
    };
  }
  function _extends$6() {
    _extends$6 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$6.apply(this, arguments);
  }
  var FORM_BIND_FORM_ITEM_KEY = Symbol("FORM_BIND_FORM_ITEM_KEY");
  function useForm() {
    var {
      parentProvider,
      index,
      bindParent
    } = useParent(FORM_BIND_FORM_ITEM_KEY);
    var instance = vue.getCurrentInstance();
    var bindForm = bindParent ? (formItemProvider) => {
      bindParent(_extends$6({}, formItemProvider, {
        instance
      }));
    } : null;
    return {
      index,
      form: parentProvider,
      bindForm
    };
  }
  function useFormItems() {
    var {
      childProviders,
      length,
      bindChildren
    } = useChildren(FORM_BIND_FORM_ITEM_KEY);
    return {
      length,
      formItems: childProviders,
      bindFormItems: bindChildren
    };
  }
  var {
    n: n$g,
    classes: classes$e
  } = createNamespace("checkbox");
  function __render__$f(_ctx, _cache) {
    var _component_var_icon = vue.resolveComponent("var-icon");
    var _component_var_hover_overlay = vue.resolveComponent("var-hover-overlay");
    var _component_var_form_details = vue.resolveComponent("var-form-details");
    var _directive_hover = vue.resolveDirective("hover");
    var _directive_ripple = vue.resolveDirective("ripple");
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.n("wrap")),
        onClick: _cache[0] || (_cache[0] = function() {
          return _ctx.handleClick && _ctx.handleClick(...arguments);
        })
      },
      [vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass(_ctx.n())
        },
        [vue.withDirectives((vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("action"), [_ctx.checked || _ctx.isIndeterminate, _ctx.n("--checked"), _ctx.n("--unchecked")], [_ctx.errorMessage || _ctx.checkboxGroupErrorMessage, _ctx.n("--error")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")])),
            style: vue.normalizeStyle({
              color: _ctx.checked || _ctx.isIndeterminate ? _ctx.checkedColor : _ctx.uncheckedColor
            })
          },
          [_ctx.isIndeterminate ? vue.renderSlot(_ctx.$slots, "indeterminate-icon", {
            key: 0
          }, () => [vue.createVNode(_component_var_icon, {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("icon"), [_ctx.withAnimation, _ctx.n("--with-animation")])),
            name: "minus-box",
            size: _ctx.iconSize,
            "var-checkbox-cover": ""
          }, null, 8, ["class", "size"])]) : vue.createCommentVNode("v-if", true), _ctx.checked && !_ctx.isIndeterminate ? vue.renderSlot(_ctx.$slots, "checked-icon", {
            key: 1
          }, () => [vue.createVNode(_component_var_icon, {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("icon"), [_ctx.withAnimation, _ctx.n("--with-animation")])),
            name: "checkbox-marked",
            size: _ctx.iconSize,
            "var-checkbox-cover": ""
          }, null, 8, ["class", "size"])]) : vue.createCommentVNode("v-if", true), !_ctx.checked && !_ctx.isIndeterminate ? vue.renderSlot(_ctx.$slots, "unchecked-icon", {
            key: 2
          }, () => [vue.createVNode(_component_var_icon, {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("icon"), [_ctx.withAnimation, _ctx.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: _ctx.iconSize,
            "var-checkbox-cover": ""
          }, null, 8, ["class", "size"])]) : vue.createCommentVNode("v-if", true), vue.createVNode(_component_var_hover_overlay, {
            hovering: !_ctx.disabled && !_ctx.formDisabled && _ctx.hovering
          }, null, 8, ["hovering"])],
          6
          /* CLASS, STYLE */
        )), [[_directive_hover, _ctx.handleHovering, "desktop"], [_directive_ripple, {
          disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled || !_ctx.ripple
        }]]), vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("text"), [_ctx.errorMessage || _ctx.checkboxGroupErrorMessage, _ctx.n("--error")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")]))
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), vue.createVNode(_component_var_form_details, {
        "error-message": _ctx.errorMessage
      }, null, 8, ["error-message"])],
      2
      /* CLASS */
    );
  }
  var __sfc__$f = vue.defineComponent({
    name: "VarCheckbox",
    directives: {
      Ripple: Ripple$1,
      Hover: Hover$1
    },
    components: {
      VarIcon: Icon,
      VarFormDetails: FormDetails,
      VarHoverOverlay: HoverOverlay
    },
    props: props$f,
    setup(props2) {
      var value = useVModel(props2, "modelValue");
      var checked = vue.computed(() => value.value === props2.checkedValue);
      var checkedValue = vue.computed(() => props2.checkedValue);
      var withAnimation = vue.ref(false);
      var {
        checkboxGroup: checkboxGroup2,
        bindCheckboxGroup
      } = useCheckboxGroup();
      var {
        hovering,
        handleHovering
      } = useHoverOverlay();
      var {
        form,
        bindForm
      } = useForm();
      var {
        errorMessage,
        validateWithTrigger: vt,
        validate: v,
        // expose
        resetValidation
      } = useValidation();
      var isIndeterminate = useVModel(props2, "indeterminate");
      var validateWithTrigger = (trigger) => {
        vue.nextTick(() => {
          var {
            validateTrigger,
            rules,
            modelValue
          } = props2;
          vt(validateTrigger, trigger, rules, modelValue);
        });
      };
      var change = (changedValue) => {
        var {
          checkedValue: checkedValue2,
          onChange
        } = props2;
        value.value = changedValue;
        isIndeterminate.value = false;
        call(onChange, value.value);
        validateWithTrigger("onChange");
        changedValue === checkedValue2 ? checkboxGroup2 == null ? void 0 : checkboxGroup2.onChecked(checkedValue2) : checkboxGroup2 == null ? void 0 : checkboxGroup2.onUnchecked(checkedValue2);
      };
      var handleClick = (e) => {
        var {
          disabled,
          readonly,
          checkedValue: checkedValue2,
          uncheckedValue,
          onClick
        } = props2;
        if (form != null && form.disabled.value || disabled) {
          return;
        }
        call(onClick, e);
        if (form != null && form.readonly.value || readonly) {
          return;
        }
        withAnimation.value = true;
        var maximum = checkboxGroup2 ? checkboxGroup2.checkedCount.value >= Number(checkboxGroup2.max.value) : false;
        if (!checked.value && maximum) {
          return;
        }
        change(checked.value ? uncheckedValue : checkedValue2);
      };
      var sync = (values) => {
        var {
          checkedValue: checkedValue2,
          uncheckedValue
        } = props2;
        value.value = values.includes(checkedValue2) ? checkedValue2 : uncheckedValue;
      };
      var resetWithAnimation = () => {
        withAnimation.value = false;
      };
      var reset = () => {
        value.value = props2.uncheckedValue;
        resetValidation();
      };
      var toggle = (changedValue) => {
        var {
          checkedValue: checkedValue2,
          uncheckedValue
        } = props2;
        var shouldReverse = ![checkedValue2, uncheckedValue].includes(changedValue);
        if (shouldReverse) {
          changedValue = checked.value ? uncheckedValue : checkedValue2;
        }
        change(changedValue);
      };
      var validate = () => v(props2.rules, props2.modelValue);
      var checkboxProvider = {
        checkedValue,
        checked,
        sync,
        validate,
        resetValidation,
        reset,
        resetWithAnimation
      };
      call(bindCheckboxGroup, checkboxProvider);
      call(bindForm, checkboxProvider);
      return {
        isIndeterminate,
        withAnimation,
        checked,
        errorMessage,
        checkboxGroupErrorMessage: checkboxGroup2 == null ? void 0 : checkboxGroup2.errorMessage,
        formDisabled: form == null ? void 0 : form.disabled,
        formReadonly: form == null ? void 0 : form.readonly,
        hovering,
        handleHovering,
        n: n$g,
        classes: classes$e,
        handleClick,
        toggle,
        reset,
        validate,
        resetValidation
      };
    }
  });
  __sfc__$f.render = __render__$f;
  const Checkbox = __sfc__$f;
  withInstall(Checkbox);
  var props$e = {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    color: String,
    textColor: String,
    iconName: pickProps(props$l, "name"),
    plain: Boolean,
    round: {
      type: Boolean,
      default: true
    },
    block: Boolean,
    closable: Boolean,
    onClose: defineListenerProp()
  };
  var {
    n: n$f,
    classes: classes$d
  } = createNamespace("chip");
  function __render__$e(_ctx, _cache) {
    var _component_var_icon = vue.resolveComponent("var-icon");
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: _ctx.n("$-fade")
    }, {
      default: vue.withCtx(() => [vue.createElementVNode(
        "span",
        vue.mergeProps({
          class: _ctx.classes(_ctx.n(), _ctx.n("$--box"), ..._ctx.contentClass),
          style: _ctx.chipStyles
        }, _ctx.$attrs),
        [vue.renderSlot(_ctx.$slots, "left"), vue.createElementVNode(
          "span",
          {
            class: vue.normalizeClass(_ctx.n("text-" + _ctx.size))
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2
          /* CLASS */
        ), vue.renderSlot(_ctx.$slots, "right"), _ctx.closable ? (vue.openBlock(), vue.createElementBlock(
          "span",
          {
            key: 0,
            class: vue.normalizeClass(_ctx.n("--close")),
            onClick: _cache[0] || (_cache[0] = function() {
              return _ctx.handleClose && _ctx.handleClose(...arguments);
            })
          },
          [vue.createVNode(_component_var_icon, {
            name: "" + (_ctx.iconName ? _ctx.iconName : "close-circle")
          }, null, 8, ["name"])],
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true)],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"]);
  }
  var __sfc__$e = vue.defineComponent({
    name: "VarChip",
    components: {
      VarIcon: Icon
    },
    inheritAttrs: false,
    props: props$e,
    setup(props2) {
      var chipStyles = vue.computed(() => {
        var {
          plain,
          textColor,
          color
        } = props2;
        if (plain) {
          return {
            color: textColor || color,
            borderColor: color
          };
        }
        return {
          color: textColor,
          background: color
        };
      });
      var contentClass = vue.computed(() => {
        var {
          size,
          block: block2,
          type,
          plain,
          round: round2
        } = props2;
        var blockClass = block2 ? n$f("$--flex") : n$f("$--inline-flex");
        var plainTypeClass = plain ? n$f("plain") + " " + n$f("plain-" + type) : n$f("--" + type);
        var roundClass = round2 ? n$f("--round") : null;
        return [n$f("--" + size), blockClass, plainTypeClass, roundClass];
      });
      var handleClose = (e) => {
        call(props2.onClose, e);
      };
      return {
        n: n$f,
        classes: classes$d,
        chipStyles,
        contentClass,
        handleClose
      };
    }
  });
  __sfc__$e.render = __render__$e;
  const Chip = __sfc__$e;
  withInstall(Chip);
  var props$d = {
    span: {
      type: [String, Number],
      default: 24
    },
    offset: {
      type: [String, Number],
      default: 0
    },
    direction: {
      type: String,
      default: "row"
    },
    justify: String,
    align: String,
    xs: [Object, Number, String],
    sm: [Object, Number, String],
    md: [Object, Number, String],
    lg: [Object, Number, String],
    xl: [Object, Number, String],
    onClick: defineListenerProp()
  };
  var ROW_BIND_COL_KEY = Symbol("ROW_BIND_COL_KEY");
  function useCols() {
    var {
      bindChildren,
      childProviders,
      length
    } = useChildren(ROW_BIND_COL_KEY);
    return {
      length,
      cols: childProviders,
      bindCols: bindChildren
    };
  }
  function useRow() {
    var {
      parentProvider,
      index,
      bindParent
    } = useParent(ROW_BIND_COL_KEY);
    return {
      index,
      row: parentProvider,
      bindRow: bindParent
    };
  }
  var {
    n: n$e,
    classes: classes$c
  } = createNamespace("col");
  function __render__$d(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("$--box"), [_ctx.span >= 0, _ctx.n("--span-" + _ctx.span)], [_ctx.offset, _ctx.n("--offset-" + _ctx.offset)], ..._ctx.getSize("xs", _ctx.xs), ..._ctx.getSize("sm", _ctx.sm), ..._ctx.getSize("md", _ctx.md), ..._ctx.getSize("lg", _ctx.lg), ..._ctx.getSize("xl", _ctx.xl))),
        style: vue.normalizeStyle({
          flexDirection: _ctx.direction,
          justifyContent: _ctx.padStartFlex(_ctx.justify),
          alignItems: _ctx.padStartFlex(_ctx.align),
          paddingLeft: _ctx.toSizeUnit(_ctx.padding.left),
          paddingRight: _ctx.toSizeUnit(_ctx.padding.right),
          paddingTop: _ctx.toSizeUnit(_ctx.padding.top),
          paddingBottom: _ctx.toSizeUnit(_ctx.padding.bottom)
        }),
        onClick: _cache[0] || (_cache[0] = function() {
          return _ctx.handleClick && _ctx.handleClick(...arguments);
        })
      },
      [vue.renderSlot(_ctx.$slots, "default")],
      6
      /* CLASS, STYLE */
    );
  }
  var __sfc__$d = vue.defineComponent({
    name: "VarCol",
    props: props$d,
    setup(props2) {
      var padding = vue.ref({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      });
      var span = vue.computed(() => toNumber(props2.span));
      var offset2 = vue.computed(() => toNumber(props2.offset));
      var {
        row: row2,
        bindRow
      } = useRow();
      var colProvider = {
        setPadding(pad) {
          padding.value = pad;
        }
      };
      var getSize = (mode, size) => {
        var classes2 = [];
        if (size == null) {
          return classes2;
        }
        if (isPlainObject(size)) {
          var {
            offset: _offset,
            span: _span
          } = size;
          Number(_span) >= 0 && classes2.push(n$e("--span-" + mode + "-" + _span));
          _offset && classes2.push(n$e("--offset-" + mode + "-" + _offset));
        } else {
          Number(size) >= 0 && classes2.push(n$e("--span-" + mode + "-" + size));
        }
        return classes2;
      };
      var handleClick = (e) => {
        call(props2.onClick, e);
      };
      vue.watch([() => props2.span, () => props2.offset], () => {
        row2 == null ? void 0 : row2.computePadding();
      });
      call(bindRow, colProvider);
      return {
        n: n$e,
        classes: classes$c,
        padding,
        toNumber,
        toSizeUnit,
        getSize,
        span,
        offset: offset2,
        handleClick,
        padStartFlex
      };
    }
  });
  __sfc__$d.render = __render__$d;
  const Col = __sfc__$d;
  withInstall(Col);
  var _ColComponent = Col;
  var props$c = {
    direction: {
      type: String,
      default: "xy"
    },
    attraction: String,
    disabled: Boolean,
    boundary: {
      type: Object,
      default: () => ({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      })
    },
    zIndex: {
      type: [Number, String],
      default: 90
    },
    teleport: {
      type: [String, Object, Boolean],
      default: "body"
    },
    onClick: defineListenerProp()
  };
  function _extends$5() {
    _extends$5 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$5.apply(this, arguments);
  }
  function asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$2(fn2) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn2.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var {
    n: n$d,
    classes: classes$b
  } = createNamespace("drag");
  function __render__$c(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.Teleport, {
      to: _ctx.teleport === false ? void 0 : _ctx.teleport,
      disabled: _ctx.teleportDisabled || _ctx.teleport === false
    }, [vue.createElementVNode(
      "div",
      vue.mergeProps({
        ref: "drag",
        class: _ctx.classes(_ctx.n(), _ctx.n("$--box"), [_ctx.enableTransition, _ctx.n("--transition")]),
        style: {
          "z-index": _ctx.zIndex
        },
        onTouchstart: _cache[0] || (_cache[0] = function() {
          return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
        }),
        onTouchmove: _cache[1] || (_cache[1] = function() {
          return _ctx.handleTouchmove && _ctx.handleTouchmove(...arguments);
        }),
        onTouchend: _cache[2] || (_cache[2] = function() {
          return _ctx.handleTouchend && _ctx.handleTouchend(...arguments);
        }),
        onTouchcancel: _cache[3] || (_cache[3] = function() {
          return _ctx.handleTouchend && _ctx.handleTouchend(...arguments);
        }),
        onClick: _cache[4] || (_cache[4] = function() {
          return _ctx.handleClick && _ctx.handleClick(...arguments);
        })
      }, _ctx.getAttrs()),
      [vue.renderSlot(_ctx.$slots, "default")],
      16
      /* FULL_PROPS */
    )], 8, ["to", "disabled"]);
  }
  var __sfc__$c = vue.defineComponent({
    name: "VarDrag",
    inheritAttrs: false,
    props: props$c,
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var drag2 = vue.ref(null);
      var x = vue.ref(0);
      var y = vue.ref(0);
      var boundary = vue.reactive({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      });
      var dragged = vue.ref(false);
      var enableTransition = vue.ref(false);
      var {
        touching,
        dragging,
        moveX,
        moveY,
        startTouch,
        moveTouch,
        endTouch,
        resetTouch
      } = useTouch();
      var {
        disabled: teleportDisabled
      } = useTeleport();
      var handleTouchstart = (event) => {
        if (props2.disabled) {
          return;
        }
        startTouch(event);
        saveXY();
      };
      var handleTouchmove = /* @__PURE__ */ function() {
        var _ref2 = _asyncToGenerator$2(function* (event) {
          if (!touching.value || props2.disabled) {
            return;
          }
          moveTouch(event);
          event.preventDefault();
          enableTransition.value = false;
          dragged.value = true;
          if (props2.direction.includes("x")) {
            x.value += moveX.value;
          }
          if (props2.direction.includes("y")) {
            y.value += moveY.value;
          }
          clampToBoundary();
        });
        return function handleTouchmove2(_x) {
          return _ref2.apply(this, arguments);
        };
      }();
      var handleTouchend = () => {
        if (props2.disabled) {
          return;
        }
        endTouch();
        enableTransition.value = true;
        attract();
      };
      var handleClick = (event) => {
        if (dragging.value) {
          return;
        }
        call(props2.onClick, event);
      };
      var saveXY = () => {
        var {
          left: left2,
          top: top2
        } = getOffset();
        x.value = left2;
        y.value = top2;
      };
      var getOffset = () => {
        var dragRect = getRect(drag2.value);
        var windowRect = getRect(window);
        var top2 = dragRect.top - windowRect.top;
        var bottom2 = windowRect.bottom - dragRect.bottom;
        var left2 = dragRect.left - windowRect.left;
        var right2 = windowRect.right - dragRect.right;
        var {
          width,
          height
        } = dragRect;
        var {
          width: windowWidth,
          height: windowHeight
        } = windowRect;
        return {
          top: top2,
          bottom: bottom2,
          left: left2,
          right: right2,
          width,
          height,
          halfWidth: width / 2,
          halfHeight: height / 2,
          windowWidth,
          windowHeight
        };
      };
      var getRange = () => {
        var offset2 = getOffset();
        var x1 = boundary.left;
        var x2 = offset2.windowWidth - boundary.right - offset2.width;
        var y1 = boundary.top;
        var y2 = offset2.windowHeight - boundary.bottom - offset2.height;
        return {
          minX: x1,
          minY: y1,
          // fallback the drag element overflows boundary
          maxX: x1 < x2 ? x2 : x1,
          maxY: y1 < y2 ? y2 : y1
        };
      };
      var attract = () => {
        if (props2.attraction == null) {
          return;
        }
        var {
          halfWidth,
          halfHeight,
          top: top2,
          bottom: bottom2,
          left: left2,
          right: right2
        } = getOffset();
        var {
          minX,
          minY,
          maxX,
          maxY
        } = getRange();
        var leftDistance = left2 + halfWidth - boundary.left;
        var rightDistance = right2 + halfWidth - boundary.right;
        var topDistance = top2 + halfHeight - boundary.top;
        var bottomDistance = bottom2 + halfHeight - boundary.bottom;
        var nearLeft = leftDistance <= rightDistance;
        var nearTop = topDistance <= bottomDistance;
        if (props2.attraction.includes("x")) {
          x.value = nearLeft ? minX : maxX;
        }
        if (props2.attraction.includes("y")) {
          y.value = nearTop ? minY : maxY;
        }
      };
      var clampToBoundary = () => {
        var {
          minX,
          minY,
          maxX,
          maxY
        } = getRange();
        x.value = clamp(x.value, minX, maxX);
        y.value = clamp(y.value, minY, maxY);
      };
      var toPxBoundary = () => {
        var {
          top: top2 = 0,
          bottom: bottom2 = 0,
          left: left2 = 0,
          right: right2 = 0
        } = props2.boundary;
        boundary.top = toPxNum(top2);
        boundary.bottom = toPxNum(bottom2);
        boundary.left = toPxNum(left2);
        boundary.right = toPxNum(right2);
      };
      var getAttrs = () => {
        var _ref3;
        var style2 = (_ref3 = attrs.style) != null ? _ref3 : {};
        return _extends$5({}, attrs, {
          style: _extends$5({}, style2, {
            // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
            top: dragged.value ? 0 : style2.top,
            left: dragged.value ? 0 : style2.left,
            right: dragged.value ? "auto" : style2.right,
            bottom: dragged.value ? "auto" : style2.bottom,
            transform: dragged.value ? "translate(" + x.value + "px, " + y.value + "px)" : style2.transform
          })
        });
      };
      var resize = () => {
        if (!dragged.value) {
          return;
        }
        saveXY();
        clampToBoundary();
      };
      var reset = () => {
        resetTouch();
        enableTransition.value = false;
        dragged.value = false;
        x.value = 0;
        y.value = 0;
      };
      vue.watch(() => props2.boundary, toPxBoundary);
      onWindowResize(resize);
      onSmartMounted(() => {
        toPxBoundary();
        resize();
      });
      return {
        drag: drag2,
        x,
        y,
        enableTransition,
        dragging,
        teleportDisabled,
        n: n$d,
        classes: classes$b,
        getAttrs,
        handleTouchstart,
        handleTouchmove,
        handleTouchend,
        handleClick,
        resize,
        reset
      };
    }
  });
  __sfc__$c.render = __render__$c;
  const Drag = __sfc__$c;
  withInstall(Drag);
  var _DragComponent = Drag;
  var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash$1[matched];
    });
  }
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  var hash = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash[matched];
    });
  }
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element, list2) {
    var _element$ownerDocumen;
    if (list2 === void 0) {
      list2 = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list2.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  const flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  const offset$1 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  const computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result2 = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result2.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result2;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions2;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions2, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
          if (typeof effect2 === "function") {
            var cleanupFn = effect2({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var passive = {
    passive: true
  };
  function effect$1(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  const eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect$1,
    data: {}
  };
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  const popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style2 = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style2 = styleProperties.reduce(function(style3, property) {
          style3[property] = "";
          return style3;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style2);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  const applyStyles$1 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };
  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });
  function _extends$4() {
    _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$4.apply(this, arguments);
  }
  function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$1(fn2) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn2.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  function usePopover(options) {
    var host = vue.ref(null);
    var popover = vue.ref(null);
    var hostSize = vue.ref({
      width: 0,
      height: 0
    });
    var show = useVModel(options, "show", {
      passive: true,
      defaultValue: false,
      emit(event, value) {
        if (value) {
          resize();
          call(options.onOpen);
        } else {
          call(options.onClose);
        }
      }
    });
    var {
      zIndex
    } = useZIndex(() => show.value, 1);
    var popoverInstance = null;
    var enterPopover = false;
    var enterHost = false;
    var computeHostSize = () => {
      var {
        width,
        height
      } = getStyle$1(host.value);
      hostSize.value = {
        width: toPxNum(width),
        height: toPxNum(height)
      };
    };
    var getTransformOrigin = () => {
      switch (options.placement) {
        case "top":
        case "cover-bottom":
          return "bottom";
        case "top-start":
        case "right-end":
        case "cover-bottom-start":
          return "bottom left";
        case "top-end":
        case "left-end":
        case "cover-bottom-end":
          return "bottom right";
        case "bottom":
        case "cover-top":
          return "top";
        case "bottom-start":
        case "right-start":
        case "cover-top-start":
          return "top left";
        case "bottom-end":
        case "left-start":
        case "cover-top-end":
          return "top right";
        case "left":
        case "cover-right":
          return "right";
        case "right":
        case "cover-left":
          return "left";
      }
    };
    var handleHostMouseenter = () => {
      if (options.trigger !== "hover") {
        return;
      }
      enterHost = true;
      open();
    };
    var handleHostMouseleave = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator$1(function* () {
        if (options.trigger !== "hover") {
          return;
        }
        enterHost = false;
        yield doubleRaf();
        if (enterPopover) {
          return;
        }
        close();
      });
      return function handleHostMouseleave2() {
        return _ref.apply(this, arguments);
      };
    }();
    var handlePopoverMouseenter = () => {
      if (options.trigger !== "hover") {
        return;
      }
      enterPopover = true;
    };
    var handlePopoverMouseleave = /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator$1(function* () {
        if (options.trigger !== "hover") {
          return;
        }
        enterPopover = false;
        yield doubleRaf();
        if (enterHost) {
          return;
        }
        close();
      });
      return function handlePopoverMouseleave2() {
        return _ref2.apply(this, arguments);
      };
    }();
    var handleHostClick = () => {
      if (options.closeOnClickReference && show.value) {
        close();
      } else {
        open();
      }
    };
    var handlePopoverClose = () => {
      close();
    };
    var handleClickOutside = (e) => {
      if (options.trigger !== "click") {
        return;
      }
      handlePopoverClose();
      call(options.onClickOutside, e);
    };
    var handleClosed = () => {
      resize();
      call(options.onClosed);
    };
    var getPosition = () => {
      var {
        offsetX,
        offsetY,
        placement
      } = options;
      computeHostSize();
      var offset2 = {
        x: toPxNum(offsetX),
        y: toPxNum(offsetY)
      };
      switch (placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: offset2.x,
            distance: offset2.y - hostSize.value.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: offset2.x,
            distance: offset2.y - hostSize.value.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: offset2.x,
            distance: offset2.y - hostSize.value.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: offset2.x,
            distance: -offset2.y - hostSize.value.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: offset2.x,
            distance: -offset2.y - hostSize.value.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: offset2.x,
            distance: -offset2.y - hostSize.value.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: offset2.y,
            distance: offset2.x - hostSize.value.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: offset2.y,
            distance: -offset2.x - hostSize.value.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement,
            skidding: offset2.y,
            distance: -offset2.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement,
            skidding: offset2.x,
            distance: -offset2.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement,
            skidding: offset2.x,
            distance: offset2.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement,
            skidding: offset2.y,
            distance: offset2.x
          };
      }
    };
    var getPopperOptions = () => {
      var {
        placement,
        skidding,
        distance
      } = getPosition();
      var modifiers = [_extends$4({}, flip$1, {
        enabled: show.value
      }), _extends$4({}, offset$1, {
        options: {
          offset: [skidding, distance]
        }
      }), _extends$4({}, computeStyles$1, {
        options: {
          adaptive: false,
          gpuAcceleration: false
        },
        enabled: show.value
      }), {
        name: "applyTransformOrigin",
        enabled: show.value,
        phase: "beforeWrite",
        fn(_ref3) {
          var {
            state
          } = _ref3;
          state.styles.popper.transformOrigin = getTransformOrigin();
        }
      }];
      return {
        placement,
        modifiers,
        strategy: options.strategy
      };
    };
    var getReference = () => options.reference ? host.value.querySelector(options.reference) : host.value;
    var resize = () => {
      popoverInstance.setOptions(getPopperOptions());
    };
    var open = () => {
      var {
        disabled
      } = options;
      if (disabled) {
        return;
      }
      show.value = true;
      call(options["onUpdate:show"], true);
    };
    var close = () => {
      show.value = false;
      call(options["onUpdate:show"], false);
    };
    useClickOutside(getReference, "click", handleClickOutside);
    vue.watch(() => [options.offsetX, options.offsetY, options.placement, options.strategy], resize);
    vue.watch(() => options.disabled, close);
    vue.onMounted(() => {
      var _getReference;
      popoverInstance = createPopper((_getReference = getReference()) != null ? _getReference : host.value, popover.value, getPopperOptions());
    });
    vue.onUnmounted(() => {
      popoverInstance.destroy();
    });
    return {
      show,
      popover,
      zIndex,
      host,
      hostSize,
      handleHostClick,
      handleHostMouseenter,
      handleHostMouseleave,
      handlePopoverClose,
      handlePopoverMouseenter,
      handlePopoverMouseleave,
      handleClosed,
      resize,
      open,
      close
    };
  }
  var props$b = {
    type: {
      type: String,
      default: "default"
    },
    color: String,
    content: String,
    show: Boolean,
    disabled: Boolean,
    trigger: {
      type: String,
      default: "hover"
    },
    reference: String,
    placement: {
      type: String,
      default: "bottom"
    },
    strategy: {
      type: String,
      default: "absolute"
    },
    offsetX: {
      type: [Number, String],
      default: 0
    },
    offsetY: {
      type: [Number, String],
      default: 0
    },
    teleport: {
      type: [String, Object, Boolean],
      default: "body"
    },
    sameWidth: Boolean,
    closeOnClickReference: Boolean,
    onOpen: defineListenerProp(),
    onOpened: defineListenerProp(),
    onClose: defineListenerProp(),
    onClosed: defineListenerProp(),
    onClickOutside: defineListenerProp(),
    "onUpdate:show": defineListenerProp()
  };
  var {
    n: n$c,
    classes: classes$a
  } = createNamespace("tooltip");
  function __render__$b(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        ref: "host",
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("$--box"))),
        onClick: _cache[3] || (_cache[3] = function() {
          return _ctx.handleHostClick && _ctx.handleHostClick(...arguments);
        }),
        onMouseenter: _cache[4] || (_cache[4] = function() {
          return _ctx.handleHostMouseenter && _ctx.handleHostMouseenter(...arguments);
        }),
        onMouseleave: _cache[5] || (_cache[5] = function() {
          return _ctx.handleHostMouseleave && _ctx.handleHostMouseleave(...arguments);
        })
      },
      [vue.renderSlot(_ctx.$slots, "default"), (vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: _ctx.teleport === false ? void 0 : _ctx.teleport,
        disabled: _ctx.teleportDisabled || _ctx.teleport === false
      }, [vue.createVNode(vue.Transition, {
        name: _ctx.n(),
        onAfterEnter: _ctx.onOpened,
        onAfterLeave: _ctx.handleClosed,
        persisted: ""
      }, {
        default: vue.withCtx(() => [vue.withDirectives(vue.createElementVNode(
          "div",
          {
            ref: "popover",
            class: vue.normalizeClass(_ctx.classes(_ctx.n("tooltip"), _ctx.n("$--box"))),
            style: vue.normalizeStyle({
              zIndex: _ctx.zIndex
            }),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop"])),
            onMouseenter: _cache[1] || (_cache[1] = function() {
              return _ctx.handlePopoverMouseenter && _ctx.handlePopoverMouseenter(...arguments);
            }),
            onMouseleave: _cache[2] || (_cache[2] = function() {
              return _ctx.handlePopoverMouseleave && _ctx.handlePopoverMouseleave(...arguments);
            })
          },
          [vue.createElementVNode(
            "div",
            {
              style: vue.normalizeStyle({
                background: _ctx.color,
                width: _ctx.sameWidth ? _ctx.toSizeUnit(Math.ceil(_ctx.hostSize.width)) : void 0
              }),
              class: vue.normalizeClass(_ctx.classes(_ctx.n("content-container"), _ctx.n("--" + _ctx.type)))
            },
            [vue.renderSlot(_ctx.$slots, "content", {}, () => [vue.createTextVNode(
              vue.toDisplayString(_ctx.content),
              1
              /* TEXT */
            )])],
            6
            /* CLASS, STYLE */
          )],
          38
          /* CLASS, STYLE, HYDRATE_EVENTS */
        ), [[vue.vShow, _ctx.show]])]),
        _: 3
        /* FORWARDED */
      }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  var __sfc__$b = vue.defineComponent({
    name: "VarTooltip",
    props: props$b,
    setup(props2) {
      var {
        disabled: teleportDisabled
      } = useTeleport();
      var {
        popover,
        host,
        hostSize,
        show,
        zIndex,
        handleHostClick,
        handleHostMouseenter,
        handleHostMouseleave,
        handlePopoverMouseenter,
        handlePopoverMouseleave,
        handlePopoverClose,
        handleClosed,
        // expose
        open,
        // expose
        close,
        // expose
        resize
      } = usePopover(props2);
      return {
        toSizeUnit,
        popover,
        host,
        hostSize,
        show,
        zIndex,
        teleportDisabled,
        n: n$c,
        classes: classes$a,
        handleHostClick,
        handlePopoverClose,
        handleHostMouseenter,
        handleHostMouseleave,
        handlePopoverMouseenter,
        handlePopoverMouseleave,
        handleClosed,
        resize,
        open,
        close
      };
    }
  });
  __sfc__$b.render = __render__$b;
  const Tooltip = __sfc__$b;
  withInstall(Tooltip);
  var _TooltipComponent = Tooltip;
  var props$a = {
    disabled: Boolean,
    readonly: Boolean,
    scrollToError: String,
    scrollToErrorOffsetY: {
      type: [String, Number],
      default: 0
    },
    onSubmit: defineListenerProp(),
    onReset: defineListenerProp()
  };
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn2) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn2.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var {
    n: n$b
  } = createNamespace("form");
  function __render__$a(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      "form",
      {
        class: vue.normalizeClass(_ctx.n()),
        onSubmit: _cache[0] || (_cache[0] = function() {
          return _ctx.handleSubmit && _ctx.handleSubmit(...arguments);
        }),
        onReset: _cache[1] || (_cache[1] = function() {
          return _ctx.handleReset && _ctx.handleReset(...arguments);
        })
      },
      [vue.renderSlot(_ctx.$slots, "default")],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  var __sfc__$a = vue.defineComponent({
    name: "VarForm",
    props: props$a,
    setup(props2) {
      var disabled = vue.computed(() => props2.disabled);
      var readonly = vue.computed(() => props2.readonly);
      var {
        formItems,
        bindFormItems
      } = useFormItems();
      var scroll = (formItemElement) => {
        setTimeout(() => {
          var scroller = getParentScroller(formItemElement);
          var scrollerTop = scroller === window ? 0 : getTop$1(scroller);
          var top2 = getTop$1(formItemElement) - scrollerTop - toPxNum(props2.scrollToErrorOffsetY);
          scrollTo(scroller, {
            top: top2,
            animation: linear
          });
        }, 300);
      };
      var handleSubmit = /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator(function* (event) {
          event.preventDefault();
          var valid = yield validate();
          call(props2.onSubmit, valid);
        });
        return function handleSubmit2(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      var handleReset = (event) => {
        event.preventDefault();
        reset();
        call(props2.onReset);
      };
      var validate = /* @__PURE__ */ function() {
        var _ref2 = _asyncToGenerator(function* () {
          var res = yield Promise.all(formItems.map((_ref3) => {
            var {
              validate: validate2
            } = _ref3;
            return validate2();
          }));
          if (props2.scrollToError) {
            var [, errorIndex] = find(res, (r) => r === false, props2.scrollToError);
            var hasError = errorIndex > -1;
            if (hasError) {
              var _formItems$errorIndex;
              var formItemElement = (_formItems$errorIndex = formItems[errorIndex].instance.proxy) == null ? void 0 : _formItems$errorIndex.$el;
              scroll(formItemElement);
            }
            return !hasError;
          }
          return res.every((result2) => result2 === true);
        });
        return function validate2() {
          return _ref2.apply(this, arguments);
        };
      }();
      var reset = () => formItems.forEach((_ref4) => {
        var {
          reset: reset2
        } = _ref4;
        return reset2();
      });
      var resetValidation = () => formItems.forEach((_ref5) => {
        var {
          resetValidation: resetValidation2
        } = _ref5;
        return resetValidation2();
      });
      var formProvider = {
        disabled,
        readonly
      };
      bindFormItems(formProvider);
      return {
        n: n$b,
        handleSubmit,
        handleReset,
        validate,
        reset,
        resetValidation
      };
    }
  });
  __sfc__$a.render = __render__$a;
  const Form = __sfc__$a;
  Form.useValidation = useValidation;
  Form.useForm = useForm;
  withInstall(Form);
  var _FormComponent = Form;
  var props$9 = {
    value: {
      type: null,
      required: true
    },
    id: {
      type: String,
      default: ""
    },
    isFocus: Boolean,
    size: {
      type: String,
      default: "normal"
    },
    variant: {
      type: String,
      default: "standard"
    },
    placeholder: String,
    line: {
      type: Boolean,
      default: true
    },
    hint: {
      type: Boolean,
      default: true
    },
    textColor: String,
    focusColor: String,
    blurColor: String,
    errorMessage: String,
    formDisabled: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    cursor: String,
    composing: Boolean,
    onClick: defineListenerProp(),
    onClear: defineListenerProp()
  };
  var {
    n: n$a,
    classes: classes$9
  } = createNamespace("field-decorator");
  var _hoisted_1$4 = ["for"];
  function __render__$9(_ctx, _cache) {
    var _component_var_icon = vue.resolveComponent("var-icon");
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("$--box"), _ctx.n("--" + _ctx.variant), [_ctx.size === "small", _ctx.n("--small")], [_ctx.disabled, _ctx.n("--disabled")])),
        onClick: _cache[0] || (_cache[0] = function() {
          return _ctx.handleClick && _ctx.handleClick(...arguments);
        })
      },
      [vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass(_ctx.classes(_ctx.n("controller"), [_ctx.isFocus, _ctx.n("--focus")], [_ctx.errorMessage, _ctx.n("--error")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")])),
          style: vue.normalizeStyle({
            color: _ctx.color,
            cursor: _ctx.cursor,
            overflow: _ctx.isFloating ? "visible" : "hidden"
          })
        },
        [vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("icon"), [!_ctx.hint, _ctx.n("--icon-non-hint")]))
          },
          [vue.renderSlot(_ctx.$slots, "prepend-icon")],
          2
          /* CLASS */
        ), vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("middle"), [!_ctx.hint, _ctx.n("--middle-non-hint")]))
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2
          /* CLASS */
        ), _ctx.placeholder && _ctx.hint ? (vue.openBlock(), vue.createElementBlock("label", {
          key: 0,
          class: vue.normalizeClass(_ctx.classes(_ctx.n("placeholder"), _ctx.n("$--ellipsis"), [_ctx.isFocus, _ctx.n("--focus")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")], [_ctx.errorMessage, _ctx.n("--error")], _ctx.computePlaceholderState())),
          style: vue.normalizeStyle({
            color: _ctx.color
          }),
          for: _ctx.id
        }, [vue.createElementVNode(
          "span",
          null,
          vue.toDisplayString(_ctx.placeholder),
          1
          /* TEXT */
        )], 14, _hoisted_1$4)) : vue.createCommentVNode("v-if", true), vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("icon"), [!_ctx.hint, _ctx.n("--icon-non-hint")]))
          },
          [_ctx.clearable && !_ctx.isEmpty(_ctx.value) ? (vue.openBlock(), vue.createBlock(_component_var_icon, {
            key: 0,
            class: vue.normalizeClass(_ctx.n("clear-icon")),
            "var-field-decorator-cover": "",
            name: "close-circle",
            onClick: _ctx.handleClear
          }, null, 8, ["class", "onClick"])) : vue.createCommentVNode("v-if", true), vue.renderSlot(_ctx.$slots, "append-icon")],
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      ), _ctx.line ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        {
          key: 0
        },
        [_ctx.variant === "outlined" ? (vue.openBlock(), vue.createElementBlock(
          "fieldset",
          {
            key: 0,
            class: vue.normalizeClass(_ctx.classes(_ctx.n("line"), [_ctx.isFocus, _ctx.n("--line-focus")], [_ctx.errorMessage, _ctx.n("--line-error")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--line-disabled")])),
            style: vue.normalizeStyle({
              borderColor: _ctx.color
            })
          },
          [vue.createElementVNode(
            "legend",
            {
              class: vue.normalizeClass(_ctx.classes(_ctx.n("line-legend"), [_ctx.isFloating, _ctx.n("line-legend--hint")])),
              style: vue.normalizeStyle({
                width: _ctx.legendWidth
              })
            },
            [_ctx.placeholder && _ctx.hint ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
              key: 0,
              to: "body"
            }, [vue.createElementVNode(
              "span",
              {
                ref: "placeholderTextEl",
                class: vue.normalizeClass(_ctx.classes(_ctx.n("placeholder-text"), _ctx.n("$--ellipsis"), [_ctx.size === "small", _ctx.n("placeholder-text--small")]))
              },
              vue.toDisplayString(_ctx.placeholder),
              3
              /* TEXT, CLASS */
            )])) : vue.createCommentVNode("v-if", true)],
            6
            /* CLASS, STYLE */
          )],
          6
          /* CLASS, STYLE */
        )) : (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 1,
            class: vue.normalizeClass(_ctx.classes(_ctx.n("line"), [_ctx.formDisabled || _ctx.disabled, _ctx.n("--line-disabled")], [_ctx.errorMessage, _ctx.n("--line-error")])),
            style: vue.normalizeStyle({
              background: !_ctx.errorMessage ? _ctx.blurColor : void 0
            })
          },
          [vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(_ctx.classes(_ctx.n("dot"), [_ctx.isFocus, _ctx.n("--line-focus")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--line-disabled")], [_ctx.errorMessage, _ctx.n("--line-error")])),
              style: vue.normalizeStyle({
                background: !_ctx.errorMessage ? _ctx.focusColor : void 0
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          6
          /* CLASS, STYLE */
        ))],
        64
        /* STABLE_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true)],
      2
      /* CLASS */
    );
  }
  var __sfc__$9 = vue.defineComponent({
    name: "VarFieldDecorator",
    components: {
      VarIcon: Icon
    },
    props: props$9,
    setup(props2, _ref) {
      var {
        slots
      } = _ref;
      var placeholderTextEl = vue.ref(null);
      var legendWidth = vue.ref("");
      var color = vue.computed(() => !props2.errorMessage ? props2.isFocus ? props2.focusColor : props2.blurColor : void 0);
      var isFloating = vue.computed(() => props2.hint && (!isEmpty(props2.value) || props2.isFocus || slots["prepend-icon"]));
      var computePlaceholderState = () => {
        var {
          hint,
          value,
          composing
        } = props2;
        if (!hint && (!isEmpty(value) || composing)) {
          return n$a("--placeholder-hidden");
        }
        if (isFloating.value) {
          return n$a("--placeholder-hint");
        }
      };
      var resize = () => {
        var {
          size,
          hint,
          variant,
          placeholder
        } = props2;
        if (!placeholder || !hint || variant !== "outlined") {
          legendWidth.value = "";
          return;
        }
        var placeholderTextStyle = getStyle$1(placeholderTextEl.value);
        var placeholderSpace = "var(--field-decorator-outlined-" + size + "-placeholder-space)";
        legendWidth.value = "calc(" + placeholderTextStyle.width + " * 0.75 + " + placeholderSpace + " * 2)";
      };
      var handleClear = (e) => {
        call(props2.onClear, e);
      };
      var handleClick = (e) => {
        call(props2.onClick, e);
      };
      onWindowResize(resize);
      onSmartMounted(resize);
      vue.onUpdated(resize);
      return {
        placeholderTextEl,
        color,
        legendWidth,
        isFloating,
        computePlaceholderState,
        n: n$a,
        classes: classes$9,
        isEmpty,
        handleClear,
        handleClick
      };
    }
  });
  __sfc__$9.render = __render__$9;
  const VarFieldDecorator = __sfc__$9;
  function _extends$3() {
    _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$3.apply(this, arguments);
  }
  var props$8 = _extends$3({
    modelValue: String,
    modelModifiers: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: "text"
    },
    textarea: Boolean,
    rows: {
      type: [String, Number],
      default: 8
    },
    maxlength: [String, Number],
    readonly: Boolean,
    resize: Boolean,
    autofocus: Boolean,
    validateTrigger: {
      type: Array,
      default: () => ["onInput", "onClear"]
    },
    rules: Array,
    enterkeyhint: String,
    onFocus: defineListenerProp(),
    onBlur: defineListenerProp(),
    onInput: defineListenerProp(),
    onChange: defineListenerProp(),
    onClear: defineListenerProp(),
    "onUpdate:modelValue": defineListenerProp()
  }, pickProps(props$9, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"]));
  var {
    n: n$9,
    classes: classes$8
  } = createNamespace("input");
  var _hoisted_1$3 = ["placeholder", "enterkeyhint"];
  var _hoisted_2$2 = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"];
  var _hoisted_3$1 = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
  function __render__$8(_ctx, _cache) {
    var _component_var_field_decorator = vue.resolveComponent("var-field-decorator");
    var _component_var_form_details = vue.resolveComponent("var-form-details");
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("$--box"))),
        onMousedown: _cache[13] || (_cache[13] = function() {
          return _ctx.handleMousedown && _ctx.handleMousedown(...arguments);
        })
      },
      [vue.createVNode(
        _component_var_field_decorator,
        vue.normalizeProps(vue.guardReactiveProps({
          value: _ctx.modelValue,
          id: _ctx.id,
          size: _ctx.size,
          variant: _ctx.variant,
          placeholder: _ctx.placeholder,
          line: _ctx.line,
          hint: _ctx.hint,
          textColor: _ctx.textColor,
          focusColor: _ctx.focusColor,
          blurColor: _ctx.blurColor,
          isFocus: _ctx.isFocus,
          errorMessage: _ctx.errorMessage,
          formDisabled: _ctx.formDisabled,
          disabled: _ctx.disabled,
          clearable: _ctx.clearable,
          cursor: _ctx.cursor,
          composing: _ctx.isComposing,
          onClick: _ctx.handleClick,
          onClear: _ctx.handleClear
        })),
        vue.createSlots({
          "append-icon": vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "append-icon")]),
          default: vue.withCtx(() => [_ctx.normalizedType === "password" ? (vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            tabindex: "-1",
            class: vue.normalizeClass(_ctx.n("autocomplete")),
            placeholder: !_ctx.hint ? _ctx.placeholder : void 0,
            style: vue.normalizeStyle({
              "--input-placeholder-color": _ctx.placeholderColor
            }),
            enterkeyhint: _ctx.enterkeyhint
          }, null, 14, _hoisted_1$3)) : vue.createCommentVNode("v-if", true), _ctx.textarea ? (vue.openBlock(), vue.createElementBlock("textarea", {
            key: 1,
            class: vue.normalizeClass(_ctx.classes(_ctx.n("input"), _ctx.n("--textarea"), [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")], [_ctx.errorMessage, _ctx.n("--error")], [_ctx.errorMessage, _ctx.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: _ctx.id,
            disabled: _ctx.formDisabled || _ctx.disabled,
            readonly: _ctx.formReadonly || _ctx.readonly,
            type: _ctx.normalizedType,
            value: _ctx.modelValue,
            placeholder: !_ctx.hint ? _ctx.placeholder : void 0,
            maxlength: _ctx.maxlength,
            rows: _ctx.rows,
            enterkeyhint: _ctx.enterkeyhint,
            inputmode: _ctx.type === "number" ? "numeric" : void 0,
            style: vue.normalizeStyle({
              color: !_ctx.errorMessage ? _ctx.textColor : void 0,
              caretColor: !_ctx.errorMessage ? _ctx.focusColor : void 0,
              resize: _ctx.resize ? "vertical" : "none",
              "--input-placeholder-color": _ctx.placeholderColor
            }),
            onFocus: _cache[0] || (_cache[0] = function() {
              return _ctx.handleFocus && _ctx.handleFocus(...arguments);
            }),
            onBlur: _cache[1] || (_cache[1] = function() {
              return _ctx.handleBlur && _ctx.handleBlur(...arguments);
            }),
            onInput: _cache[2] || (_cache[2] = function() {
              return _ctx.handleInput && _ctx.handleInput(...arguments);
            }),
            onChange: _cache[3] || (_cache[3] = function() {
              return _ctx.handleChange && _ctx.handleChange(...arguments);
            }),
            onCompositionstart: _cache[4] || (_cache[4] = function() {
              return _ctx.handleCompositionStart && _ctx.handleCompositionStart(...arguments);
            }),
            onCompositionend: _cache[5] || (_cache[5] = function() {
              return _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...arguments);
            })
          }, "\n      ", 46, _hoisted_2$2)) : (vue.openBlock(), vue.createElementBlock("input", {
            key: 2,
            class: vue.normalizeClass(_ctx.classes(_ctx.n("input"), [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")], [_ctx.errorMessage, _ctx.n("--error")], [_ctx.errorMessage, _ctx.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: _ctx.id,
            disabled: _ctx.formDisabled || _ctx.disabled,
            readonly: _ctx.formReadonly || _ctx.readonly,
            type: _ctx.normalizedType,
            value: _ctx.modelValue,
            placeholder: !_ctx.hint ? _ctx.placeholder : void 0,
            maxlength: _ctx.maxlength,
            enterkeyhint: _ctx.enterkeyhint,
            inputmode: _ctx.type === "number" ? "numeric" : void 0,
            style: vue.normalizeStyle({
              color: !_ctx.errorMessage ? _ctx.textColor : void 0,
              caretColor: !_ctx.errorMessage ? _ctx.focusColor : void 0,
              "--input-placeholder-color": _ctx.placeholderColor
            }),
            onFocus: _cache[6] || (_cache[6] = function() {
              return _ctx.handleFocus && _ctx.handleFocus(...arguments);
            }),
            onBlur: _cache[7] || (_cache[7] = function() {
              return _ctx.handleBlur && _ctx.handleBlur(...arguments);
            }),
            onInput: _cache[8] || (_cache[8] = function() {
              return _ctx.handleInput && _ctx.handleInput(...arguments);
            }),
            onChange: _cache[9] || (_cache[9] = function() {
              return _ctx.handleChange && _ctx.handleChange(...arguments);
            }),
            onCompositionstart: _cache[10] || (_cache[10] = function() {
              return _ctx.handleCompositionStart && _ctx.handleCompositionStart(...arguments);
            }),
            onCompositionend: _cache[11] || (_cache[11] = function() {
              return _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...arguments);
            })
          }, null, 46, _hoisted_3$1))]),
          _: 2
          /* DYNAMIC */
        }, [_ctx.$slots["prepend-icon"] ? {
          name: "prepend-icon",
          fn: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "prepend-icon")]),
          key: "0"
        } : void 0]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ), vue.createVNode(_component_var_form_details, {
        "error-message": _ctx.errorMessage,
        "extra-message": _ctx.maxlengthText,
        onMousedown: _cache[12] || (_cache[12] = vue.withModifiers(() => {
        }, ["stop"]))
      }, vue.createSlots({
        _: 2
        /* DYNAMIC */
      }, [_ctx.$slots["extra-message"] ? {
        name: "extra-message",
        fn: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "extra-message")]),
        key: "0"
      } : void 0]), 1032, ["error-message", "extra-message"])],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  var __sfc__$8 = vue.defineComponent({
    name: "VarInput",
    components: {
      VarFormDetails: FormDetails,
      VarFieldDecorator
    },
    props: props$8,
    setup(props2) {
      var id = vue.ref("var-input-" + vue.getCurrentInstance().uid);
      var el = vue.ref(null);
      var isFocus = vue.ref(false);
      var isComposing = vue.ref(false);
      var normalizedType = vue.computed(() => {
        if (props2.type === "number") {
          return "text";
        }
        return props2.type;
      });
      var maxlengthText = vue.computed(() => {
        var {
          maxlength,
          modelValue
        } = props2;
        if (!maxlength) {
          return "";
        }
        if (isEmpty(modelValue)) {
          return "0 / " + maxlength;
        }
        return String(modelValue).length + "/" + maxlength;
      });
      var cursor = vue.computed(() => props2.disabled || props2.readonly ? "" : "text");
      var placeholderColor = vue.computed(() => {
        var {
          hint,
          blurColor,
          focusColor
        } = props2;
        if (hint) {
          return void 0;
        }
        if (errorMessage.value) {
          return "var(--field-decorator-error-color)";
        }
        if (isFocus.value) {
          return focusColor || "var(--field-decorator-focus-color)";
        }
        return blurColor || "var(--field-decorator-blur-color)";
      });
      var {
        bindForm,
        form
      } = useForm();
      var {
        errorMessage,
        validateWithTrigger: vt,
        validate: v,
        // expose
        resetValidation
      } = useValidation();
      var validateWithTrigger = (trigger) => {
        vue.nextTick(() => {
          var {
            validateTrigger,
            rules,
            modelValue
          } = props2;
          vt(validateTrigger, trigger, rules, modelValue);
        });
      };
      var handleFocus = (e) => {
        isFocus.value = true;
        call(props2.onFocus, e);
        validateWithTrigger("onFocus");
      };
      var handleBlur = (e) => {
        isFocus.value = false;
        call(props2.onBlur, e);
        validateWithTrigger("onBlur");
      };
      var updateValue = (e) => {
        var target = e.target;
        var {
          value
        } = target;
        if (props2.type === "number") {
          value = formatNumber(value);
        }
        return withMaxlength(withTrim(value));
      };
      var handleCompositionStart = () => {
        isComposing.value = true;
      };
      var handleCompositionEnd = (e) => {
        if (!isComposing.value) {
          return;
        }
        isComposing.value = false;
        e.target.dispatchEvent(new Event("input"));
      };
      var handleInput = (e) => {
        if (isComposing.value) {
          return;
        }
        var value = updateValue(e);
        call(props2["onUpdate:modelValue"], value);
        call(props2.onInput, value, e);
        validateWithTrigger("onInput");
      };
      var handleChange = (e) => {
        var value = updateValue(e);
        call(props2.onChange, value, e);
        validateWithTrigger("onChange");
      };
      var handleClear = () => {
        var {
          disabled,
          readonly,
          clearable,
          onClear
        } = props2;
        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly || !clearable) {
          return;
        }
        call(props2["onUpdate:modelValue"], "");
        call(onClear, "");
        validateWithTrigger("onClear");
      };
      var handleClick = (e) => {
        var {
          disabled,
          onClick
        } = props2;
        if (form != null && form.disabled.value || disabled) {
          return;
        }
        call(onClick, e);
        validateWithTrigger("onClick");
      };
      var formatNumber = (value) => {
        var minusIndex = value.indexOf("-");
        var dotIndex = value.indexOf(".");
        if (minusIndex > -1) {
          value = minusIndex === 0 ? "-" + value.replace(/-/g, "") : value.replace(/-/g, "");
        }
        if (dotIndex > -1) {
          value = value.slice(0, dotIndex + 1) + value.slice(dotIndex).replace(/\./g, "");
        }
        return value.replace(/[^-0-9.]/g, "");
      };
      var withTrim = (value) => props2.modelModifiers.trim ? value.trim() : value;
      var withMaxlength = (value) => props2.maxlength ? value.slice(0, toNumber(props2.maxlength)) : value;
      var handleMousedown = (e) => {
        var {
          disabled
        } = props2;
        if (form != null && form.disabled.value || disabled || e.target === el.value) {
          return;
        }
        focus();
        e.preventDefault();
      };
      var reset = () => {
        call(props2["onUpdate:modelValue"], "");
        resetValidation();
      };
      var validate = () => v(props2.rules, props2.modelValue);
      var focus = () => {
        var _el$value;
        (_el$value = el.value) == null ? void 0 : _el$value.focus();
      };
      var blur = () => {
        el.value.blur();
      };
      var inputProvider = {
        reset,
        validate,
        resetValidation
      };
      call(bindForm, inputProvider);
      onSmartMounted(() => {
        if (props2.autofocus) {
          focus();
        }
      });
      return {
        el,
        id,
        isFocus,
        isComposing,
        errorMessage,
        placeholderColor,
        normalizedType,
        cursor,
        maxlengthText,
        formDisabled: form == null ? void 0 : form.disabled,
        formReadonly: form == null ? void 0 : form.readonly,
        n: n$9,
        classes: classes$8,
        isEmpty,
        handleFocus,
        handleBlur,
        handleInput,
        handleChange,
        handleClear,
        handleClick,
        handleCompositionStart,
        handleCompositionEnd,
        handleMousedown,
        validate,
        resetValidation,
        reset,
        focus,
        blur
      };
    }
  });
  __sfc__$8.render = __render__$8;
  const Input = __sfc__$8;
  withInstall(Input);
  var _InputComponent = Input;
  var props$7 = {
    show: Boolean,
    disabled: Boolean,
    trigger: {
      type: String,
      default: "click"
    },
    reference: String,
    placement: {
      type: String,
      default: "cover-top-start"
    },
    strategy: {
      type: String,
      default: "absolute"
    },
    offsetX: {
      type: [Number, String],
      default: 0
    },
    offsetY: {
      type: [Number, String],
      default: 0
    },
    teleport: {
      type: [String, Object, Boolean],
      default: "body"
    },
    sameWidth: Boolean,
    elevation: {
      type: [Boolean, String, Number],
      default: true
    },
    defaultStyle: {
      type: Boolean,
      default: true
    },
    popoverClass: String,
    closeOnClickReference: Boolean,
    onOpen: defineListenerProp(),
    onOpened: defineListenerProp(),
    onClose: defineListenerProp(),
    onClosed: defineListenerProp(),
    onClickOutside: defineListenerProp(),
    "onUpdate:show": defineListenerProp()
  };
  var {
    n: n$8,
    classes: classes$7
  } = createNamespace("menu");
  function __render__$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        ref: "host",
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("$--box"))),
        onClick: _cache[3] || (_cache[3] = function() {
          return _ctx.handleHostClick && _ctx.handleHostClick(...arguments);
        }),
        onMouseenter: _cache[4] || (_cache[4] = function() {
          return _ctx.handleHostMouseenter && _ctx.handleHostMouseenter(...arguments);
        }),
        onMouseleave: _cache[5] || (_cache[5] = function() {
          return _ctx.handleHostMouseleave && _ctx.handleHostMouseleave(...arguments);
        })
      },
      [vue.renderSlot(_ctx.$slots, "default"), (vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: _ctx.teleport === false ? void 0 : _ctx.teleport,
        disabled: _ctx.teleportDisabled || _ctx.teleport === false
      }, [vue.createVNode(vue.Transition, {
        name: _ctx.n(),
        onAfterEnter: _ctx.onOpened,
        onAfterLeave: _ctx.handleClosed,
        persisted: ""
      }, {
        default: vue.withCtx(() => [vue.withDirectives(vue.createElementVNode(
          "div",
          {
            ref: "popover",
            style: vue.normalizeStyle({
              zIndex: _ctx.zIndex,
              width: _ctx.sameWidth ? _ctx.toSizeUnit(Math.ceil(_ctx.hostSize.width)) : void 0
            }),
            class: vue.normalizeClass(_ctx.classes(_ctx.n("menu"), _ctx.n("$--box"), _ctx.popoverClass, [_ctx.defaultStyle, _ctx.n("--menu-background-color")], [_ctx.defaultStyle, _ctx.formatElevation(_ctx.elevation, 3)])),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop"])),
            onMouseenter: _cache[1] || (_cache[1] = function() {
              return _ctx.handlePopoverMouseenter && _ctx.handlePopoverMouseenter(...arguments);
            }),
            onMouseleave: _cache[2] || (_cache[2] = function() {
              return _ctx.handlePopoverMouseleave && _ctx.handlePopoverMouseleave(...arguments);
            })
          },
          [vue.renderSlot(_ctx.$slots, "menu")],
          38
          /* CLASS, STYLE, HYDRATE_EVENTS */
        ), [[vue.vShow, _ctx.show]])]),
        _: 3
        /* FORWARDED */
      }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  var __sfc__$7 = vue.defineComponent({
    name: "VarMenu",
    props: props$7,
    setup(props2) {
      var {
        disabled: teleportDisabled
      } = useTeleport();
      var {
        popover,
        host,
        hostSize,
        show,
        zIndex,
        handleHostClick,
        handleHostMouseenter,
        handleHostMouseleave,
        handlePopoverMouseenter,
        handlePopoverMouseleave,
        handlePopoverClose,
        handleClosed,
        // expose
        open,
        // expose
        close,
        // expose
        resize
      } = usePopover(props2);
      return {
        popover,
        host,
        hostSize,
        show,
        zIndex,
        teleportDisabled,
        formatElevation,
        toSizeUnit,
        n: n$8,
        classes: classes$7,
        handleHostClick,
        handleHostMouseenter,
        handleHostMouseleave,
        handlePopoverMouseenter,
        handlePopoverMouseleave,
        handlePopoverClose,
        handleClosed,
        resize,
        open,
        close
      };
    }
  });
  __sfc__$7.render = __render__$7;
  const Menu = __sfc__$7;
  withInstall(Menu);
  var SELECT_BIND_OPTION_KEY = Symbol("SELECT_BIND_OPTION_KEY");
  function useOptions() {
    var {
      length,
      childProviders,
      bindChildren
    } = useChildren(SELECT_BIND_OPTION_KEY);
    return {
      length,
      options: childProviders,
      bindOptions: bindChildren
    };
  }
  function useSelect() {
    var {
      index,
      parentProvider,
      bindParent
    } = useParent(SELECT_BIND_OPTION_KEY);
    if (!bindParent) {
      error$1("Option", "<var-option/> must in <var-select/>");
    }
    return {
      index,
      select: parentProvider,
      bindSelect: bindParent
    };
  }
  var props$6 = {
    label: {},
    value: {}
  };
  var {
    n: n$7,
    classes: classes$6
  } = createNamespace("option");
  function __render__$6(_ctx, _cache) {
    var _component_var_checkbox = vue.resolveComponent("var-checkbox");
    var _component_var_hover_overlay = vue.resolveComponent("var-hover-overlay");
    var _directive_ripple = vue.resolveDirective("ripple");
    var _directive_hover = vue.resolveDirective("hover");
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("$--box"), [_ctx.optionSelected, _ctx.n("--selected-color")])),
        style: vue.normalizeStyle({
          color: _ctx.optionSelected ? _ctx.focusColor : void 0
        }),
        onClick: _cache[2] || (_cache[2] = function() {
          return _ctx.handleClick && _ctx.handleClick(...arguments);
        })
      },
      [vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass(_ctx.classes(_ctx.n("cover"), [_ctx.optionSelected, _ctx.n("--selected-background")])),
          style: vue.normalizeStyle({
            background: _ctx.optionSelected ? _ctx.focusColor : void 0
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ), _ctx.multiple ? (vue.openBlock(), vue.createBlock(_component_var_checkbox, {
        key: 0,
        ref: "checkbox",
        "checked-color": _ctx.focusColor,
        modelValue: _ctx.optionSelected,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.optionSelected = $event),
        onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
        }, ["stop"])),
        onChange: _ctx.handleSelect
      }, null, 8, ["checked-color", "modelValue", "onChange"])) : vue.createCommentVNode("v-if", true), vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass(_ctx.classes(_ctx.n("text"), _ctx.n("$--ellipsis")))
        },
        [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createTextVNode(
          vue.toDisplayString(_ctx.label),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), vue.createVNode(_component_var_hover_overlay, {
        hovering: _ctx.hovering
      }, null, 8, ["hovering"])],
      6
      /* CLASS, STYLE */
    )), [[_directive_ripple], [_directive_hover, _ctx.handleHovering, "desktop"]]);
  }
  var __sfc__$6 = vue.defineComponent({
    name: "VarOption",
    directives: {
      Ripple: Ripple$1,
      Hover: Hover$1
    },
    components: {
      VarCheckbox: Checkbox,
      VarHoverOverlay: HoverOverlay
    },
    props: props$6,
    setup(props2) {
      var optionSelected = vue.ref(false);
      var selected = vue.computed(() => optionSelected.value);
      var label = vue.computed(() => props2.label);
      var value = vue.computed(() => props2.value);
      var {
        select: select2,
        bindSelect
      } = useSelect();
      var {
        multiple,
        focusColor,
        onSelect,
        computeLabel
      } = select2;
      var {
        hovering,
        handleHovering
      } = useHoverOverlay();
      var handleClick = () => {
        if (multiple.value) {
          optionSelected.value = !optionSelected.value;
        }
        onSelect(optionProvider);
      };
      var handleSelect = () => onSelect(optionProvider);
      var sync = (checked) => {
        optionSelected.value = checked;
      };
      var optionProvider = {
        label,
        value,
        selected,
        sync
      };
      vue.watch([() => props2.label, () => props2.value], computeLabel);
      bindSelect(optionProvider);
      return {
        n: n$7,
        classes: classes$6,
        optionSelected,
        multiple,
        focusColor,
        hovering,
        handleHovering,
        handleClick,
        handleSelect
      };
    }
  });
  __sfc__$6.render = __render__$6;
  const Option = __sfc__$6;
  withInstall(Option);
  var _OptionComponent = Option;
  var props$5 = {
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: false
    },
    checkedValue: {
      type: [String, Number, Boolean, Object, Array],
      default: true
    },
    uncheckedValue: {
      type: [String, Number, Boolean, Object, Array],
      default: false
    },
    disabled: Boolean,
    readonly: Boolean,
    checkedColor: String,
    uncheckedColor: String,
    iconSize: [String, Number],
    ripple: {
      type: Boolean,
      default: true
    },
    validateTrigger: {
      type: Array,
      default: () => ["onChange"]
    },
    rules: Array,
    onClick: defineListenerProp(),
    onChange: defineListenerProp(),
    "onUpdate:modelValue": defineListenerProp()
  };
  var RADIO_GROUP_BIND_RADIO_KEY = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
  function useRadios() {
    var {
      bindChildren,
      childProviders,
      length
    } = useChildren(RADIO_GROUP_BIND_RADIO_KEY);
    return {
      length,
      radios: childProviders,
      bindRadios: bindChildren
    };
  }
  function useRadioGroup() {
    var {
      bindParent,
      parentProvider,
      index
    } = useParent(RADIO_GROUP_BIND_RADIO_KEY);
    return {
      index,
      radioGroup: parentProvider,
      bindRadioGroup: bindParent
    };
  }
  var {
    n: n$6,
    classes: classes$5
  } = createNamespace("radio");
  function __render__$5(_ctx, _cache) {
    var _component_var_icon = vue.resolveComponent("var-icon");
    var _component_var_hover_overlay = vue.resolveComponent("var-hover-overlay");
    var _component_var_form_details = vue.resolveComponent("var-form-details");
    var _directive_ripple = vue.resolveDirective("ripple");
    var _directive_hover = vue.resolveDirective("hover");
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.n("wrap"))
      },
      [vue.createElementVNode(
        "div",
        vue.mergeProps({
          class: _ctx.n(),
          onClick: _cache[0] || (_cache[0] = function() {
            return _ctx.handleClick && _ctx.handleClick(...arguments);
          })
        }, _ctx.$attrs),
        [vue.withDirectives((vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("action"), [_ctx.checked, _ctx.n("--checked"), _ctx.n("--unchecked")], [_ctx.errorMessage || _ctx.radioGroupErrorMessage, _ctx.n("--error")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")])),
            style: vue.normalizeStyle({
              color: _ctx.checked ? _ctx.checkedColor : _ctx.uncheckedColor
            })
          },
          [_ctx.checked ? vue.renderSlot(_ctx.$slots, "checked-icon", {
            key: 0
          }, () => [vue.createVNode(_component_var_icon, {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("icon"), [_ctx.withAnimation, _ctx.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: _ctx.iconSize
          }, null, 8, ["class", "size"])]) : vue.renderSlot(_ctx.$slots, "unchecked-icon", {
            key: 1
          }, () => [vue.createVNode(_component_var_icon, {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("icon"), [_ctx.withAnimation, _ctx.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: _ctx.iconSize
          }, null, 8, ["class", "size"])]), vue.createVNode(_component_var_hover_overlay, {
            hovering: !_ctx.disabled && !_ctx.formDisabled && _ctx.hovering
          }, null, 8, ["hovering"])],
          6
          /* CLASS, STYLE */
        )), [[_directive_ripple, {
          disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled || !_ctx.ripple
        }], [_directive_hover, _ctx.handleHovering, "desktop"]]), vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.classes(_ctx.n("text"), [_ctx.errorMessage || _ctx.radioGroupErrorMessage, _ctx.n("--error")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")]))
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      ), vue.createVNode(_component_var_form_details, {
        "error-message": _ctx.errorMessage
      }, null, 8, ["error-message"])],
      2
      /* CLASS */
    );
  }
  var __sfc__$5 = vue.defineComponent({
    name: "VarRadio",
    directives: {
      Ripple: Ripple$1,
      Hover: Hover$1
    },
    components: {
      VarIcon: Icon,
      VarFormDetails: FormDetails,
      VarHoverOverlay: HoverOverlay
    },
    inheritAttrs: false,
    props: props$5,
    setup(props2) {
      var value = useVModel(props2, "modelValue");
      var checked = vue.computed(() => value.value === props2.checkedValue);
      var withAnimation = vue.ref(false);
      var {
        radioGroup: radioGroup2,
        bindRadioGroup
      } = useRadioGroup();
      var {
        hovering,
        handleHovering
      } = useHoverOverlay();
      var {
        form,
        bindForm
      } = useForm();
      var {
        errorMessage,
        validateWithTrigger: vt,
        validate: v,
        // expose
        resetValidation
      } = useValidation();
      var validateWithTrigger = (trigger) => {
        vue.nextTick(() => {
          var {
            validateTrigger,
            rules,
            modelValue
          } = props2;
          vt(validateTrigger, trigger, rules, modelValue);
        });
      };
      var change = (changedValue) => {
        var {
          checkedValue,
          onChange
        } = props2;
        if (radioGroup2 && value.value === checkedValue) {
          return;
        }
        value.value = changedValue;
        call(onChange, value.value);
        radioGroup2 == null ? void 0 : radioGroup2.onToggle(checkedValue);
        validateWithTrigger("onChange");
      };
      var handleClick = (e) => {
        var {
          disabled,
          readonly,
          uncheckedValue,
          checkedValue,
          onClick
        } = props2;
        if (form != null && form.disabled.value || disabled) {
          return;
        }
        call(onClick, e);
        if (form != null && form.readonly.value || readonly) {
          return;
        }
        withAnimation.value = true;
        change(checked.value ? uncheckedValue : checkedValue);
      };
      var sync = (v2) => {
        var {
          checkedValue,
          uncheckedValue
        } = props2;
        value.value = v2 === checkedValue ? checkedValue : uncheckedValue;
      };
      var reset = () => {
        value.value = props2.uncheckedValue;
        resetValidation();
      };
      var validate = () => v(props2.rules, props2.modelValue);
      var toggle = (changedValue) => {
        var {
          uncheckedValue,
          checkedValue
        } = props2;
        var shouldReverse = ![uncheckedValue, checkedValue].includes(changedValue);
        if (shouldReverse) {
          changedValue = checked.value ? uncheckedValue : checkedValue;
        }
        change(changedValue);
      };
      var radioProvider = {
        sync,
        validate,
        resetValidation,
        reset
      };
      call(bindRadioGroup, radioProvider);
      call(bindForm, radioProvider);
      return {
        withAnimation,
        checked,
        errorMessage,
        radioGroupErrorMessage: radioGroup2 == null ? void 0 : radioGroup2.errorMessage,
        formDisabled: form == null ? void 0 : form.disabled,
        formReadonly: form == null ? void 0 : form.readonly,
        hovering,
        handleHovering,
        n: n$6,
        classes: classes$5,
        handleClick,
        toggle,
        reset,
        validate,
        resetValidation
      };
    }
  });
  __sfc__$5.render = __render__$5;
  const Radio = __sfc__$5;
  withInstall(Radio);
  var _RadioComponent = Radio;
  var props$4 = {
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    validateTrigger: {
      type: Array,
      default: () => ["onChange"]
    },
    rules: Array,
    onChange: defineListenerProp(),
    "onUpdate:modelValue": defineListenerProp()
  };
  var {
    n: n$5,
    classes: classes$4
  } = createNamespace("radio-group");
  function __render__$4(_ctx, _cache) {
    var _component_var_form_details = vue.resolveComponent("var-form-details");
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.n("wrap"))
      },
      [vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("--" + _ctx.direction)))
        },
        [vue.renderSlot(_ctx.$slots, "default")],
        2
        /* CLASS */
      ), vue.createVNode(_component_var_form_details, {
        "error-message": _ctx.errorMessage
      }, null, 8, ["error-message"])],
      2
      /* CLASS */
    );
  }
  var __sfc__$4 = vue.defineComponent({
    name: "VarRadioGroup",
    components: {
      VarFormDetails: FormDetails
    },
    props: props$4,
    setup(props2) {
      var {
        length,
        radios,
        bindRadios
      } = useRadios();
      var {
        bindForm
      } = useForm();
      var {
        errorMessage,
        validateWithTrigger: vt,
        validate: v,
        // expose
        resetValidation
      } = useValidation();
      var radioGroupErrorMessage = vue.computed(() => errorMessage.value);
      var validateWithTrigger = (trigger) => {
        vue.nextTick(() => {
          var {
            validateTrigger,
            rules,
            modelValue
          } = props2;
          vt(validateTrigger, trigger, rules, modelValue);
        });
      };
      var syncRadios = () => radios.forEach((_ref) => {
        var {
          sync
        } = _ref;
        return sync(props2.modelValue);
      });
      var onToggle = (changedValue) => {
        call(props2["onUpdate:modelValue"], changedValue);
        call(props2.onChange, changedValue);
        validateWithTrigger("onChange");
      };
      var validate = () => v(props2.rules, props2.modelValue);
      var reset = () => {
        call(props2["onUpdate:modelValue"], void 0);
        resetValidation();
      };
      vue.watch(() => props2.modelValue, syncRadios);
      vue.watch(() => length.value, syncRadios);
      var radioGroupProvider = {
        onToggle,
        validate,
        reset,
        resetValidation,
        errorMessage: radioGroupErrorMessage
      };
      call(bindForm, radioGroupProvider);
      bindRadios(radioGroupProvider);
      return {
        errorMessage,
        n: n$5,
        classes: classes$4,
        reset,
        validate,
        resetValidation
      };
    }
  });
  __sfc__$4.render = __render__$4;
  const RadioGroup = __sfc__$4;
  withInstall(RadioGroup);
  var _RadioGroupComponent = RadioGroup;
  var props$3 = {
    gutter: {
      type: [String, Number, Array],
      default: 0
    },
    justify: {
      type: String,
      default: "flex-start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    onClick: defineListenerProp()
  };
  var {
    n: n$4,
    classes: classes$3
  } = createNamespace("row");
  function __render__$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), _ctx.n("$--box"))),
        style: vue.normalizeStyle({
          justifyContent: _ctx.padStartFlex(_ctx.justify),
          alignItems: _ctx.padStartFlex(_ctx.align),
          margin: -_ctx.average[0] + "px " + -_ctx.average[1] + "px"
        }),
        onClick: _cache[0] || (_cache[0] = function() {
          return _ctx.handleClick && _ctx.handleClick(...arguments);
        })
      },
      [vue.renderSlot(_ctx.$slots, "default")],
      6
      /* CLASS, STYLE */
    );
  }
  var __sfc__$3 = vue.defineComponent({
    name: "VarRow",
    props: props$3,
    setup(props2) {
      var {
        cols,
        bindCols,
        length
      } = useCols();
      var average = vue.computed(() => isArray(props2.gutter) ? props2.gutter.map((numeric) => toPxNum(numeric) / 2) : [0, toPxNum(props2.gutter) / 2]);
      var computePadding = () => {
        cols.forEach((col2) => {
          var [y, x] = average.value;
          col2.setPadding({
            left: x,
            right: x,
            top: y,
            bottom: y
          });
        });
      };
      var handleClick = (e) => {
        call(props2.onClick, e);
      };
      var rowProvider = {
        computePadding
      };
      vue.watch(() => length.value, computePadding);
      vue.watch(() => props2.gutter, computePadding);
      bindCols(rowProvider);
      return {
        n: n$4,
        classes: classes$3,
        average,
        handleClick,
        padStartFlex
      };
    }
  });
  __sfc__$3.render = __render__$3;
  const Row = __sfc__$3;
  withInstall(Row);
  var _RowComponent = Row;
  function _extends$2() {
    _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$2.apply(this, arguments);
  }
  var props$2 = _extends$2({
    modelValue: {
      default: void 0
    },
    multiple: Boolean,
    offsetY: {
      type: [String, Number],
      default: 0
    },
    chip: Boolean,
    readonly: Boolean,
    separator: {
      type: String,
      default: ","
    },
    textAlign: {
      type: String,
      default: "left"
    },
    validateTrigger: {
      type: Array,
      default: () => ["onChange", "onClear", "onClose"]
    },
    rules: Array,
    onFocus: defineListenerProp(),
    onBlur: defineListenerProp(),
    onClose: defineListenerProp(),
    onChange: defineListenerProp(),
    onClear: defineListenerProp(),
    "onUpdate:modelValue": defineListenerProp()
  }, pickProps(props$9, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"]));
  var {
    n: n$3,
    classes: classes$2
  } = createNamespace("select");
  var _hoisted_1$2 = {
    key: 1
  };
  function __render__$2(_ctx, _cache) {
    var _component_var_chip = vue.resolveComponent("var-chip");
    var _component_var_icon = vue.resolveComponent("var-icon");
    var _component_var_field_decorator = vue.resolveComponent("var-field-decorator");
    var _component_var_menu = vue.resolveComponent("var-menu");
    var _component_var_form_details = vue.resolveComponent("var-form-details");
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.n()),
        onClick: _cache[3] || (_cache[3] = function() {
          return _ctx.handleFocus && _ctx.handleFocus(...arguments);
        })
      },
      [vue.createVNode(_component_var_menu, {
        "var-select-cover": "",
        "same-width": "",
        "close-on-click-reference": "",
        show: _ctx.showMenu,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => _ctx.showMenu = $event),
        class: vue.normalizeClass(_ctx.n("menu")),
        "popover-class": _ctx.variant === "standard" && _ctx.hint ? _ctx.n("--standard-menu-margin") : void 0,
        "offset-y": _ctx.offsetY,
        disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled,
        placement: _ctx.placement,
        "default-style": false,
        onClickOutside: _ctx.handleBlur
      }, {
        menu: vue.withCtx(() => [vue.createElementVNode(
          "div",
          {
            ref: "menuEl",
            class: vue.normalizeClass(_ctx.classes(_ctx.n("scroller"), _ctx.n("$-elevation--3")))
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: vue.withCtx(() => [vue.createVNode(
          _component_var_field_decorator,
          vue.normalizeProps(vue.guardReactiveProps({
            value: _ctx.modelValue,
            size: _ctx.size,
            variant: _ctx.variant,
            placeholder: _ctx.placeholder,
            line: _ctx.line,
            hint: _ctx.hint,
            textColor: _ctx.textColor,
            focusColor: _ctx.focusColor,
            blurColor: _ctx.blurColor,
            isFocus: _ctx.isFocus,
            errorMessage: _ctx.errorMessage,
            formDisabled: _ctx.formDisabled,
            disabled: _ctx.disabled,
            clearable: _ctx.clearable,
            cursor: _ctx.cursor,
            onClick: _ctx.handleClick,
            onClear: _ctx.handleClear
          })),
          vue.createSlots({
            "append-icon": vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "append-icon")]),
            default: vue.withCtx(() => [vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(_ctx.classes(_ctx.n("select"), [_ctx.errorMessage, _ctx.n("--error")], [_ctx.formDisabled || _ctx.disabled, _ctx.n("--disabled")])),
                style: vue.normalizeStyle({
                  textAlign: _ctx.textAlign,
                  color: _ctx.textColor
                })
              },
              [vue.createElementVNode(
                "div",
                {
                  class: vue.normalizeClass(_ctx.n("label"))
                },
                [!_ctx.isEmptyModelValue ? vue.renderSlot(_ctx.$slots, "selected", {
                  key: 0
                }, () => [_ctx.multiple ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  {
                    key: 0
                  },
                  [_ctx.chip ? (vue.openBlock(), vue.createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: vue.normalizeClass(_ctx.n("chips"))
                    },
                    [(vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(_ctx.labels, (l) => {
                        return vue.openBlock(), vue.createBlock(_component_var_chip, {
                          class: vue.normalizeClass(_ctx.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: _ctx.errorMessage ? "danger" : void 0,
                          key: l,
                          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
                          }, ["stop"])),
                          onClose: () => _ctx.handleClose(l)
                        }, {
                          default: vue.withCtx(() => [vue.createTextVNode(
                            vue.toDisplayString(l),
                            1
                            /* TEXT */
                          )]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["class", "type", "onClose"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))],
                    2
                    /* CLASS */
                  )) : (vue.openBlock(), vue.createElementBlock(
                    "div",
                    {
                      key: 1,
                      class: vue.normalizeClass(_ctx.n("values"))
                    },
                    vue.toDisplayString(_ctx.labels.join(_ctx.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  "span",
                  _hoisted_1$2,
                  vue.toDisplayString(_ctx.label),
                  1
                  /* TEXT */
                ))]) : vue.createCommentVNode("v-if", true)],
                2
                /* CLASS */
              ), _ctx.enableCustomPlaceholder ? (vue.openBlock(), vue.createElementBlock(
                "span",
                {
                  key: 0,
                  class: vue.normalizeClass(_ctx.classes(_ctx.n("placeholder"), _ctx.n("$--ellipsis"))),
                  style: vue.normalizeStyle({
                    color: _ctx.placeholderColor
                  })
                },
                vue.toDisplayString(_ctx.placeholder),
                7
                /* TEXT, CLASS, STYLE */
              )) : vue.createCommentVNode("v-if", true), vue.renderSlot(_ctx.$slots, "arrow-icon", {
                focus: _ctx.showMenu
              }, () => [vue.createVNode(_component_var_icon, {
                class: vue.normalizeClass(_ctx.classes(_ctx.n("arrow"), [_ctx.showMenu, _ctx.n("--arrow-rotate")])),
                "var-select-cover": "",
                name: "menu-down",
                transition: 300
              }, null, 8, ["class"])])],
              6
              /* CLASS, STYLE */
            )]),
            _: 2
            /* DYNAMIC */
          }, [_ctx.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "prepend-icon")]),
            key: "0"
          } : void 0]),
          1040
          /* FULL_PROPS, DYNAMIC_SLOTS */
        )]),
        _: 3
        /* FORWARDED */
      }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]), vue.createVNode(_component_var_form_details, {
        "error-message": _ctx.errorMessage,
        onClick: _cache[2] || (_cache[2] = vue.withModifiers(() => {
        }, ["stop"]))
      }, null, 8, ["error-message"])],
      2
      /* CLASS */
    );
  }
  var __sfc__$2 = vue.defineComponent({
    name: "VarSelect",
    components: {
      VarIcon: Icon,
      VarMenu: Menu,
      VarChip: Chip,
      VarFieldDecorator,
      VarFormDetails: FormDetails
    },
    props: props$2,
    setup(props2) {
      var isFocus = vue.ref(false);
      var showMenu = vue.ref(false);
      var multiple = vue.computed(() => props2.multiple);
      var focusColor = vue.computed(() => props2.focusColor);
      var label = vue.ref("");
      var labels = vue.ref([]);
      var isEmptyModelValue = vue.computed(() => isEmpty(props2.modelValue));
      var cursor = vue.computed(() => props2.disabled || props2.readonly ? "" : "pointer");
      var offsetY = vue.ref(0);
      var {
        bindForm,
        form
      } = useForm();
      var {
        length,
        options,
        bindOptions
      } = useOptions();
      var {
        errorMessage,
        validateWithTrigger: vt,
        validate: v,
        // expose
        resetValidation
      } = useValidation();
      var menuEl = vue.ref(null);
      var placement = vue.computed(() => props2.variant === "outlined" ? "bottom" : "cover-top");
      var placeholderColor = vue.computed(() => {
        var {
          hint,
          blurColor,
          focusColor: focusColor2
        } = props2;
        if (hint) {
          return void 0;
        }
        if (errorMessage.value) {
          return "var(--field-decorator-error-color)";
        }
        if (isFocus.value) {
          return focusColor2 || "var(--field-decorator-focus-color)";
        }
        return blurColor || "var(--field-decorator-blur-color)";
      });
      var enableCustomPlaceholder = vue.computed(() => !props2.hint && isEmpty(props2.modelValue));
      var computeLabel = () => {
        var {
          multiple: multiple2,
          modelValue
        } = props2;
        if (multiple2) {
          var rawModelValue = modelValue;
          labels.value = rawModelValue.map(findLabel);
        }
        if (!multiple2 && !isEmpty(modelValue)) {
          label.value = findLabel(modelValue);
        }
        if (!multiple2 && isEmpty(modelValue)) {
          label.value = "";
        }
      };
      var validateWithTrigger = (trigger) => {
        vue.nextTick(() => {
          var {
            validateTrigger,
            rules,
            modelValue
          } = props2;
          vt(validateTrigger, trigger, rules, modelValue);
        });
      };
      var findValueOrLabel = (_ref) => {
        var {
          value,
          label: label2
        } = _ref;
        if (value.value != null) {
          return value.value;
        }
        return label2.value;
      };
      var findLabel = (modelValue) => {
        var _option$label$value, _option;
        var option2 = options.find((_ref2) => {
          var {
            value
          } = _ref2;
          return value.value === modelValue;
        });
        if (!option2) {
          option2 = options.find((_ref3) => {
            var {
              label: label2
            } = _ref3;
            return label2.value === modelValue;
          });
        }
        return (_option$label$value = (_option = option2) == null ? void 0 : _option.label.value) != null ? _option$label$value : "";
      };
      var handleFocus = () => {
        var {
          disabled,
          readonly,
          onFocus
        } = props2;
        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
          return;
        }
        offsetY.value = toPxNum(props2.offsetY);
        isFocus.value = true;
        call(onFocus);
        validateWithTrigger("onFocus");
      };
      var handleBlur = () => {
        var {
          disabled,
          readonly,
          onBlur
        } = props2;
        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
          return;
        }
        blur();
        call(onBlur);
        validateWithTrigger("onBlur");
      };
      var onSelect = (option2) => {
        var {
          disabled,
          readonly,
          multiple: multiple2,
          onChange
        } = props2;
        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
          return;
        }
        var selectedValue = multiple2 ? options.filter((_ref4) => {
          var {
            selected
          } = _ref4;
          return selected.value;
        }).map(findValueOrLabel) : findValueOrLabel(option2);
        call(props2["onUpdate:modelValue"], selectedValue);
        call(onChange, selectedValue);
        validateWithTrigger("onChange");
        if (!multiple2) {
          blur();
        }
      };
      var handleClear = () => {
        var {
          disabled,
          readonly,
          multiple: multiple2,
          clearable,
          onClear
        } = props2;
        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly || !clearable) {
          return;
        }
        var changedModelValue = multiple2 ? [] : void 0;
        call(props2["onUpdate:modelValue"], changedModelValue);
        call(onClear, changedModelValue);
        validateWithTrigger("onClear");
      };
      var handleClick = (e) => {
        var {
          disabled,
          onClick
        } = props2;
        if (form != null && form.disabled.value || disabled) {
          return;
        }
        call(onClick, e);
        validateWithTrigger("onClick");
      };
      var handleClose = (text) => {
        var {
          disabled,
          readonly,
          modelValue,
          onClose
        } = props2;
        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
          return;
        }
        var rawModelValue = modelValue;
        var option2 = options.find((_ref5) => {
          var {
            label: label2
          } = _ref5;
          return label2.value === text;
        });
        var currentModelValue = rawModelValue.filter((value) => {
          var _value$value;
          return value !== ((_value$value = option2.value.value) != null ? _value$value : option2.label.value);
        });
        call(props2["onUpdate:modelValue"], currentModelValue);
        call(onClose, currentModelValue);
        validateWithTrigger("onClose");
      };
      var syncOptions = () => {
        var {
          multiple: multiple2,
          modelValue
        } = props2;
        if (multiple2) {
          var rawModelValue = modelValue;
          options.forEach((option2) => option2.sync(rawModelValue.includes(findValueOrLabel(option2))));
        } else {
          options.forEach((option2) => option2.sync(modelValue === findValueOrLabel(option2)));
        }
        computeLabel();
      };
      var focus = () => {
        offsetY.value = toPxNum(props2.offsetY);
        isFocus.value = true;
        showMenu.value = true;
      };
      var blur = () => {
        isFocus.value = false;
        showMenu.value = false;
      };
      var validate = () => v(props2.rules, props2.modelValue);
      var reset = () => {
        call(props2["onUpdate:modelValue"], props2.multiple ? [] : void 0);
        resetValidation();
      };
      vue.watch(() => props2.multiple, () => {
        var {
          multiple: multiple2,
          modelValue
        } = props2;
        if (multiple2 && !isArray(modelValue)) {
          error$1("Select", "The modelValue must be an array when multiple is true");
        }
      });
      vue.watch(() => props2.modelValue, syncOptions, {
        deep: true
      });
      vue.watch(() => length.value, syncOptions);
      var selectProvider = {
        multiple,
        focusColor,
        computeLabel,
        onSelect,
        reset,
        validate,
        resetValidation
      };
      bindOptions(selectProvider);
      call(bindForm, selectProvider);
      return {
        offsetY,
        isFocus,
        showMenu,
        errorMessage,
        formDisabled: form == null ? void 0 : form.disabled,
        formReadonly: form == null ? void 0 : form.readonly,
        label,
        labels,
        isEmptyModelValue,
        menuEl,
        placement,
        cursor,
        placeholderColor,
        enableCustomPlaceholder,
        n: n$3,
        classes: classes$2,
        handleFocus,
        handleBlur,
        handleClear,
        handleClick,
        handleClose,
        reset,
        validate,
        resetValidation,
        focus,
        blur
      };
    }
  });
  __sfc__$2.render = __render__$2;
  const Select = __sfc__$2;
  withInstall(Select);
  var _SelectComponent = Select;
  function _extends$1() {
    _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends$1.apply(this, arguments);
  }
  var props$1 = {
    type: String,
    position: {
      type: String,
      default: "top"
    },
    content: {
      type: [String, Function, Object]
    },
    contentClass: String,
    duration: {
      type: Number,
      default: 3e3
    },
    vertical: Boolean,
    loadingType: pickProps(props$k, "type"),
    loadingSize: pickProps(props$k, "size"),
    loadingRadius: pickProps(props$k, "radius"),
    loadingColor: _extends$1({}, pickProps(props$k, "color"), {
      default: "currentColor"
    }),
    lockScroll: Boolean,
    show: Boolean,
    teleport: {
      type: [String, Object, Boolean],
      default: "body"
    },
    forbidClick: Boolean,
    onOpen: defineListenerProp(),
    onOpened: defineListenerProp(),
    onClose: defineListenerProp(),
    onClosed: defineListenerProp(),
    "onUpdate:show": defineListenerProp(),
    _update: String
  };
  var {
    n: n$2,
    classes: classes$1
  } = createNamespace("snackbar");
  var ICON_TYPE_DICT = {
    success: "checkbox-marked-circle",
    warning: "warning",
    info: "information",
    error: "error",
    loading: ""
  };
  function __render__$1(_ctx, _cache) {
    var _component_var_icon = vue.resolveComponent("var-icon");
    var _component_var_loading = vue.resolveComponent("var-loading");
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(_ctx.n()),
        style: vue.normalizeStyle({
          pointerEvents: _ctx.isForbidClick ? "auto" : "none",
          zIndex: _ctx.zIndex
        })
      },
      [vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass(_ctx.classes(_ctx.n("wrapper"), _ctx.n("wrapper-" + _ctx.position), _ctx.n("$-elevation--4"), [_ctx.vertical, _ctx.n("vertical")], [_ctx.type && _ctx.SNACKBAR_TYPE.includes(_ctx.type), _ctx.n("wrapper-" + _ctx.type)])),
          style: vue.normalizeStyle({
            zIndex: _ctx.zIndex
          })
        },
        [vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass([_ctx.n("content"), _ctx.contentClass])
          },
          [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createTextVNode(
            vue.toDisplayString(_ctx.content),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass([_ctx.n("icon")])
          },
          [_ctx.iconName ? (vue.openBlock(), vue.createBlock(_component_var_icon, {
            key: 0,
            name: _ctx.iconName
          }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true), _ctx.type === "loading" ? (vue.openBlock(), vue.createBlock(_component_var_loading, {
            key: 1,
            type: _ctx.loadingType,
            size: _ctx.loadingSize,
            color: _ctx.loadingColor,
            radius: _ctx.loadingRadius
          }, null, 8, ["type", "size", "color", "radius"])) : vue.createCommentVNode("v-if", true), vue.renderSlot(_ctx.$slots, "icon")],
          2
          /* CLASS */
        ), vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(_ctx.n("action"))
          },
          [vue.renderSlot(_ctx.$slots, "action")],
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )), [[vue.vShow, _ctx.show]]);
  }
  var __sfc__$1 = vue.defineComponent({
    name: "VarSnackbarCore",
    components: {
      VarLoading: Loading,
      VarIcon: Icon
    },
    props: props$1,
    setup(props2) {
      var timer = vue.ref(null);
      var {
        zIndex
      } = useZIndex(() => props2.show, 1);
      useLock(() => props2.show, () => props2.lockScroll);
      var isForbidClick = vue.computed(() => props2.type === "loading" || props2.forbidClick);
      var iconName = vue.computed(() => {
        if (!props2.type)
          return "";
        return ICON_TYPE_DICT[props2.type];
      });
      var updateAfterDuration = () => {
        timer.value = setTimeout(() => {
          props2.type !== "loading" && call(props2["onUpdate:show"], false);
        }, props2.duration);
      };
      vue.watch(() => props2.show, (show) => {
        if (show) {
          call(props2.onOpen);
          updateAfterDuration();
        } else if (show === false) {
          clearTimeout(timer.value);
          call(props2.onClose);
        }
      });
      vue.watch(() => props2._update, () => {
        clearTimeout(timer.value);
        updateAfterDuration();
      });
      onSmartMounted(() => {
        if (props2.show) {
          call(props2.onOpen);
          updateAfterDuration();
        }
      });
      return {
        SNACKBAR_TYPE,
        n: n$2,
        classes: classes$1,
        zIndex,
        iconName,
        isForbidClick
      };
    }
  });
  __sfc__$1.render = __render__$1;
  const VarSnackbarCore = __sfc__$1;
  var {
    n: n$1
  } = createNamespace("snackbar");
  function __render__(_ctx, _cache) {
    var _component_var_snackbar_core = vue.resolveComponent("var-snackbar-core");
    return vue.openBlock(), vue.createBlock(vue.Teleport, {
      to: _ctx.teleport === false ? void 0 : _ctx.teleport,
      disabled: _ctx.disabled || _ctx.teleport === false
    }, [vue.createVNode(vue.Transition, {
      name: _ctx.n() + "-fade",
      onAfterEnter: _ctx.onOpened,
      onAfterLeave: _ctx.onClosed
    }, {
      default: vue.withCtx(() => [vue.createVNode(_component_var_snackbar_core, vue.mergeProps(_ctx.$props, {
        class: _ctx.n("transition")
      }), {
        icon: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "icon")]),
        action: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "action")]),
        default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default", {}, () => [vue.createTextVNode(
          vue.toDisplayString(_ctx.content),
          1
          /* TEXT */
        )])]),
        _: 3
        /* FORWARDED */
      }, 16, ["class"])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]);
  }
  var __sfc__ = vue.defineComponent({
    name: "VarSnackbar",
    components: {
      VarSnackbarCore
    },
    props: props$1,
    setup() {
      var {
        disabled
      } = useTeleport();
      return {
        n: n$1,
        disabled
      };
    }
  });
  __sfc__.render = __render__;
  const VarSnackbar = __sfc__;
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key)) {
            target[key] = source2[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _isSlot(s) {
    return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
  }
  var SNACKBAR_TYPE = ["loading", "success", "warning", "info", "error"];
  var sid = 0;
  var isMount = false;
  var unmount;
  var isAllowMultiple = false;
  var defaultOptionsValue = {
    type: void 0,
    content: "",
    icon: "",
    action: "",
    position: "top",
    duration: 3e3,
    vertical: false,
    contentClass: void 0,
    loadingType: "circle",
    loadingSize: "normal",
    lockScroll: false,
    teleport: "body",
    forbidClick: false,
    onOpen: () => {
    },
    onOpened: () => {
    },
    onClose: () => {
    },
    onClosed: () => {
    }
  };
  var uniqSnackbarOptions = vue.reactive([]);
  var defaultOptions = defaultOptionsValue;
  var transitionGroupProps = {
    name: "var-snackbar-fade",
    tag: "div",
    class: "var-transition-group"
  };
  var getSlotValue = (value) => () => isFunction(value) ? value() : value;
  var TransitionGroupHost = {
    setup() {
      return () => {
        var snackbarList = uniqSnackbarOptions.map((_ref) => {
          var {
            id,
            reactiveSnackOptions,
            _update
          } = _ref;
          var transitionGroupEl = document.querySelector(".var-transition-group");
          if (reactiveSnackOptions.forbidClick || reactiveSnackOptions.type === "loading") {
            transitionGroupEl.classList.add("var-pointer-auto");
          } else {
            transitionGroupEl.classList.remove("var-pointer-auto");
          }
          if (isAllowMultiple)
            reactiveSnackOptions.position = "top";
          var position = isAllowMultiple ? "relative" : "absolute";
          var style2 = _extends({
            position
          }, getTop(reactiveSnackOptions.position));
          var {
            content,
            icon: icon2,
            action
          } = reactiveSnackOptions;
          var slots = {
            default: getSlotValue(content),
            icon: getSlotValue(icon2),
            action: getSlotValue(action)
          };
          return vue.createVNode(VarSnackbarCore, vue.mergeProps(reactiveSnackOptions, {
            "key": id,
            "style": style2,
            "data-id": id,
            "_update": _update,
            "show": reactiveSnackOptions.show,
            "onUpdate:show": ($event) => reactiveSnackOptions.show = $event
          }), slots);
        });
        return vue.createVNode(vue.TransitionGroup, vue.mergeProps(transitionGroupProps, {
          "style": {
            zIndex: Context.zIndex
          },
          "onAfterEnter": opened,
          "onAfterLeave": removeUniqOption
        }), _isSlot(snackbarList) ? snackbarList : {
          default: () => [snackbarList]
        });
      };
    }
  };
  var Snackbar = function(options) {
    var snackOptions = normalizeOptions(options);
    var reactiveSnackOptions = vue.reactive(_extends({}, defaultOptions, snackOptions));
    reactiveSnackOptions.show = true;
    if (!isMount) {
      isMount = true;
      unmount = mountInstance(TransitionGroupHost).unmountInstance;
    }
    var {
      length
    } = uniqSnackbarOptions;
    var uniqSnackbarOptionItem = {
      id: sid++,
      reactiveSnackOptions
    };
    if (length === 0 || isAllowMultiple) {
      addUniqOption(uniqSnackbarOptionItem);
    } else {
      var _update = "update-" + sid;
      updateUniqOption(reactiveSnackOptions, _update);
    }
    return {
      clear() {
        if (!isAllowMultiple && uniqSnackbarOptions.length) {
          uniqSnackbarOptions[0].reactiveSnackOptions.show = false;
        } else {
          reactiveSnackOptions.show = false;
        }
      }
    };
  };
  SNACKBAR_TYPE.forEach((type) => {
    Snackbar[type] = (options) => {
      if (isPlainObject(options)) {
        options.type = type;
      } else {
        options = {
          content: options,
          type
        };
      }
      return Snackbar(options);
    };
  });
  Snackbar.allowMultiple = function(bool) {
    if (bool === void 0) {
      bool = false;
    }
    if (bool !== isAllowMultiple) {
      uniqSnackbarOptions.forEach((option2) => {
        option2.reactiveSnackOptions.show = false;
      });
      isAllowMultiple = bool;
    }
  };
  Snackbar.clear = function() {
    uniqSnackbarOptions.forEach((option2) => {
      option2.reactiveSnackOptions.show = false;
    });
  };
  Snackbar.setDefaultOptions = function(options) {
    defaultOptions = options;
  };
  Snackbar.resetDefaultOptions = function() {
    defaultOptions = defaultOptionsValue;
  };
  function opened(element) {
    var id = element.getAttribute("data-id");
    var option2 = uniqSnackbarOptions.find((option3) => option3.id === toNumber(id));
    if (option2) {
      call(option2.reactiveSnackOptions.onOpened);
    }
  }
  function removeUniqOption(element) {
    element.parentElement && element.parentElement.classList.remove("var-pointer-auto");
    var id = element.getAttribute("data-id");
    var option2 = uniqSnackbarOptions.find((option3) => option3.id === toNumber(id));
    if (option2) {
      option2.animationEnd = true;
      call(option2.reactiveSnackOptions.onClosed);
    }
    var isAllAnimationEnd = uniqSnackbarOptions.every((option3) => option3.animationEnd);
    if (isAllAnimationEnd) {
      call(unmount);
      uniqSnackbarOptions = vue.reactive([]);
      isMount = false;
    }
  }
  function addUniqOption(uniqSnackbarOptionItem) {
    uniqSnackbarOptions.push(uniqSnackbarOptionItem);
  }
  function normalizeOptions(options) {
    if (options === void 0) {
      options = {};
    }
    return isString(options) ? {
      content: options
    } : options;
  }
  function updateUniqOption(reactiveSnackOptions, _update) {
    var [firstOption] = uniqSnackbarOptions;
    firstOption.reactiveSnackOptions = _extends({}, firstOption.reactiveSnackOptions, reactiveSnackOptions);
    firstOption._update = _update;
  }
  function getTop(position) {
    if (position === void 0) {
      position = "top";
    }
    if (position === "bottom")
      return {
        [position]: "5%"
      };
    return {
      top: position === "top" ? "5%" : "45%"
    };
  }
  Snackbar.Component = VarSnackbar;
  withInstall(VarSnackbar);
  withInstall(VarSnackbar, Snackbar);
  const Snackbar$1 = Snackbar;
  var props = {
    size: {
      type: [String, Number, Array],
      default: "normal"
    },
    wrap: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "row"
    },
    justify: {
      type: String,
      default: "flex-start"
    },
    align: String,
    inline: Boolean
  };
  function half(value) {
    return "calc(" + value + " / 2)";
  }
  function computeMargin(y, x, options) {
    var {
      direction,
      justify,
      index,
      lastIndex
    } = options;
    var margin = "0";
    if (direction === "row") {
      if (["flex-start", "center", "flex-end", "start", "end"].includes(justify)) {
        if (index !== lastIndex) {
          margin = half(y) + " " + x + " " + half(y) + " 0";
        } else {
          margin = half(y) + " 0";
        }
      } else if (justify === "space-around") {
        margin = half(y) + " " + half(x);
      } else if (justify === "space-between") {
        if (index === 0) {
          margin = half(y) + " " + half(x) + " " + half(y) + " 0";
        } else if (index === lastIndex) {
          margin = half(y) + " 0 " + half(y) + " " + half(x);
        } else {
          margin = half(y) + " " + half(x);
        }
      }
    }
    if (direction === "column" && index !== lastIndex) {
      margin = "0 0 " + y + " 0";
    }
    return margin;
  }
  var isInternalSize = (size) => ["mini", "small", "normal", "large"].includes(size);
  var {
    n,
    classes
  } = createNamespace("space");
  const Space = vue.defineComponent({
    name: "VarSpace",
    props,
    setup(props2, _ref) {
      var {
        slots
      } = _ref;
      var getSize = (size, isInternalSize2) => isInternalSize2 ? ["var(--space-size-" + size + "-y)", "var(--space-size-" + size + "-x)"] : isArray(size) ? size.map(toSizeUnit) : [toSizeUnit(size), toSizeUnit(size)];
      return () => {
        var _call;
        var {
          inline: inline2,
          justify,
          align,
          wrap,
          direction,
          size
        } = props2;
        var children = (_call = call(slots.default)) != null ? _call : [];
        var [y, x] = getSize(size, isInternalSize(size));
        children = flatFragment(children);
        var lastIndex = children.length - 1;
        var spacers = children.map((child, index) => {
          var margin = computeMargin(y, x, {
            direction,
            justify,
            index,
            lastIndex
          });
          return vue.createVNode("div", {
            "style": {
              margin
            }
          }, [child]);
        });
        return vue.createVNode("div", {
          "class": classes(n(), n("$--box"), [inline2, n("--inline")]),
          "style": {
            flexDirection: direction,
            justifyContent: padStartFlex(justify),
            alignItems: padStartFlex(align),
            flexWrap: wrap ? "wrap" : "nowrap",
            margin: direction === "row" ? "calc(-1 * " + y + " / 2) 0" : void 0
          }
        }, [spacers]);
      };
    }
  });
  withInstall(Space);
  var _SpaceComponent = Space;
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  class ChatGpt {
    constructor({
      baseUrl = "https://api.openai.com",
      token = "",
      prompt = "",
      model = ""
    }) {
      __publicField(this, "baseUrl");
      __publicField(this, "token");
      __publicField(this, "prompt");
      __publicField(this, "model");
      __publicField(this, "headers");
      this.baseUrl = baseUrl;
      this.token = token;
      this.prompt = prompt;
      this.model = model;
      this.headers = {
        Accept: "application/json",
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json"
      };
    }
    sendChat(question) {
      const msgList = [
        {
          "role": "system",
          "content": "帮我在github issues中分析出问题的答案，不需要问题详情，直接返回给我中文答案，如果有代码同样加上中文注释返回给我"
        },
        { "role": "user", "content": question }
      ];
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          url: this.baseUrl + "/v1/chat/completions",
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
            "function_call": { "name": "msgCard" }
          }),
          onload: (response) => {
            if (response.status === 200) {
              const responseJson = JSON.parse(response.responseText);
              const msgJson = JSON.parse(responseJson.choices[0].message.function_call.arguments);
              const totalTokens = responseJson.usage.total_tokens;
              msgList.push({ "role": "assistant", "content": msgJson });
              resolve([msgList, totalTokens]);
            }
          },
          onerror: (response) => {
          }
        });
      });
    }
    sendChatWithSteam(question, callback) {
      const msgList = [
        {
          "role": "system",
          "content": "帮我在github issues中分析出问题的答案，不需要问题详情，直接返回给我中文答案，如果有代码同样加上中文注释返回给我"
        },
        { "role": "user", "content": question }
      ];
      _GM_xmlhttpRequest({
        url: this.baseUrl + "/v1/chat/completions",
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
          "function_call": { "name": "msgCard" }
        }),
        onprogress: (steam) => {
          if (steam.status != 200) {
            return [];
          }
          const jsons = steam.responseText.split("data:").map((data) => {
            const trimData = data.trim();
            if (trimData === "")
              return void 0;
            if (trimData === "[DONE]")
              return void 0;
            return JSON.parse(data.trim());
          }).filter((data) => data);
          callback(jsons);
        },
        responseType: "stream"
      });
    }
    // 获得模型列表
    getModelList() {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          url: this.baseUrl + "/v1/models",
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
          }
        });
      });
    }
  }
  const _hoisted_1$1 = { class: "overlay" };
  const _hoisted_2$1 = { class: "box" };
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "ArrangementToken",
    setup(__props) {
      _GM_registerMenuCommand("配置token", () => {
        if (!show.value) {
          show.value = true;
        }
      });
      const show = vue.ref(false);
      const testShow = vue.ref(false);
      const formData = vue.reactive({
        service: 1,
        serviceHost: "",
        apiKey: "",
        model: "",
        maxRequests: "10",
        modelList: []
      });
      let chatGpt = new ChatGpt({
        baseUrl: formData.serviceHost,
        token: formData.apiKey,
        model: formData.model
      });
      vue.watch(formData, () => {
        chatGpt = new ChatGpt({
          baseUrl: formData.serviceHost,
          token: formData.apiKey,
          model: formData.model
        });
      });
      async function getModelList() {
        if (formData.service === 1) {
          formData.serviceHost = "https://api.openai.com";
        }
        testShow.value = true;
        chatGpt.getModelList().then((res) => {
          testShow.value = false;
          Snackbar$1.success("模型获取成功");
          formData.modelList = [];
          res["data"].map((item) => {
            if (formData.modelList.includes(item.id) === false) {
              if (item.id.includes("gpt-3.5-turbo-0613") || item.id.includes("gpt-4-0613")) {
                formData.modelList.push(item.id);
              }
            }
          });
          _GM_setValue("config", formData);
        }).catch((err) => {
          Snackbar$1.error("服务不可用");
          testShow.value = false;
        });
      }
      function handleSubmit(valid) {
        if (!valid)
          return;
        if (formData.service === 1) {
          formData.serviceHost = "https://api.openai.com";
        }
        _GM_setValue("config", formData);
        show.value = false;
        window.location.reload();
      }
      vue.onMounted(() => {
        const config = _GM_getValue("config");
        if (config) {
          formData.service = config.service;
          formData.serviceHost = config.serviceHost;
          formData.apiKey = config.apiKey;
          formData.model = config.model;
          formData.maxRequests = config.maxRequests;
          formData.modelList = config.modelList;
        }
      });
      return (_ctx, _cache) => {
        const _component_var_radio = _RadioComponent;
        const _component_var_radio_group = _RadioGroupComponent;
        const _component_var_input = _InputComponent;
        const _component_var_option = _OptionComponent;
        const _component_var_select = _SelectComponent;
        const _component_var_tooltip = _TooltipComponent;
        const _component_var_col = _ColComponent;
        const _component_var_button = _ButtonComponent;
        const _component_var_row = _RowComponent;
        const _component_var_space = _SpaceComponent;
        const _component_var_form = _FormComponent;
        const _component_var_card = _CardComponent;
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createVNode(_component_var_card, {
              style: { "width": "80vw", "box-shadow": "0 0 0 0" },
              title: "设置token"
            }, {
              description: vue.withCtx(() => [
                vue.createVNode(_component_var_form, { onSubmit: handleSubmit }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_var_radio_group, {
                      rules: [(v) => !!v || "必须选择一个服务商"],
                      modelValue: formData.service,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.service = $event)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_var_radio, { "checked-value": 1 }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("使用OpenAI官方服务")
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_var_radio, { "checked-value": 2 }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("使用第三方服务")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue"]),
                    vue.withDirectives(vue.createVNode(_component_var_input, {
                      placeholder: "自定义 API 接口地址：",
                      rules: [(v) => !!v || formData.service === 1 || "请添加具体带有路径的网址"],
                      modelValue: formData.serviceHost,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.serviceHost = $event)
                    }, null, 8, ["rules", "modelValue"]), [
                      [vue.vShow, formData.service === 2]
                    ]),
                    vue.createVNode(_component_var_input, {
                      type: "password",
                      placeholder: "请输入APIKEY",
                      rules: [(v) => !!v || "不能为空"],
                      modelValue: formData.apiKey,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.apiKey = $event)
                    }, null, 8, ["rules", "modelValue"]),
                    vue.createVNode(_component_var_row, { align: "flex-end" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_var_col, { span: 20 }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_var_tooltip, {
                              disabled: formData.modelList.length != 0,
                              style: { "width": "100%" },
                              content: "请先获取模型列表"
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(_component_var_select, {
                                  disabled: formData.modelList.length === 0,
                                  style: { "width": "100%" },
                                  placeholder: "请选择模型",
                                  rules: [(v) => !!v || "必须选一个模型"],
                                  modelValue: formData.model,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.model = $event)
                                }, {
                                  default: vue.withCtx(() => [
                                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(formData.modelList, (model, index) => {
                                      return vue.openBlock(), vue.createBlock(_component_var_option, {
                                        label: model,
                                        key: index
                                      }, null, 8, ["label"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "rules", "modelValue"])
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_var_col, {
                          span: 4,
                          justify: "flex-end"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_var_tooltip, { content: "由于使用了较新的api，只支持gpt-3.5-turbo-0613和gpt-4-0613" }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(_component_var_button, {
                                  type: "primary",
                                  onClick: getModelList,
                                  loading: testShow.value,
                                  "loading-type": "cube"
                                }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode(" 获取模型列表 ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_var_tooltip, {
                      placement: "left",
                      content: "OpenAI从0.5版本起默认请求数单位改为秒，默认每秒最大请求数改为10个请求。"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_var_input, {
                          placeholder: "请输入每秒最大请求次数",
                          rules: [(v) => !!v || "不能为空"],
                          modelValue: formData.maxRequests,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.maxRequests = $event)
                        }, null, 8, ["rules", "modelValue"])
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_var_space, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_var_button, {
                          type: "primary",
                          "native-type": "submit"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(" 保存 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ], 512)), [
          [vue.vShow, show.value]
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const ArrangementToken = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4f42d0c6"]]);
  function getGithubIssuesContent(url) {
    const regex = /^https:\/\/github\.com\/[^\/]+\/[^\/]+\/issues\/\d+$/;
    if (!regex.test(url))
      return Promise.reject("不是github issues详情页");
    return new Promise((resolve, reject) => {
      _GM_xmlhttpRequest({
        url,
        method: "GET",
        onload: (response) => {
          var _a;
          if (response.status === 200) {
            const parser = new DOMParser();
            const html = parser.parseFromString(response.responseText, "text/html");
            const title = html.getElementsByTagName("bdi")[0].innerText;
            const contentTds = html.getElementsByClassName("d-block comment-body markdown-body  js-comment-body");
            const contents = [];
            for (let i = 0; i < contentTds.length; i++) {
              contents.push((_a = contentTds[i].textContent) == null ? void 0 : _a.trim());
            }
            resolve("问题" + title + "\n评论" + contents.join("\n"));
          } else {
            reject(response);
          }
        },
        onerror: (response) => {
          reject(response);
        }
      });
    });
  }
  function _getDefaults() {
    return {
      async: false,
      breaks: false,
      extensions: null,
      gfm: true,
      hooks: null,
      pedantic: false,
      renderer: null,
      silent: false,
      tokenizer: null,
      walkTokens: null
    };
  }
  let _defaults = _getDefaults();
  function changeDefaults(newDefaults) {
    _defaults = newDefaults;
  }
  const escapeTest$1 = /[&<>"']/;
  const escapeReplace$1 = new RegExp(escapeTest$1.source, "g");
  const escapeTestNoEncode$1 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
  const escapeReplaceNoEncode$1 = new RegExp(escapeTestNoEncode$1.source, "g");
  const escapeReplacements$1 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  const getEscapeReplacement$1 = (ch) => escapeReplacements$1[ch];
  function escape$2(html, encode) {
    if (encode) {
      if (escapeTest$1.test(html)) {
        return html.replace(escapeReplace$1, getEscapeReplacement$1);
      }
    } else {
      if (escapeTestNoEncode$1.test(html)) {
        return html.replace(escapeReplaceNoEncode$1, getEscapeReplacement$1);
      }
    }
    return html;
  }
  const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
  function unescape(html) {
    return html.replace(unescapeTest, (_, n2) => {
      n2 = n2.toLowerCase();
      if (n2 === "colon")
        return ":";
      if (n2.charAt(0) === "#") {
        return n2.charAt(1) === "x" ? String.fromCharCode(parseInt(n2.substring(2), 16)) : String.fromCharCode(+n2.substring(1));
      }
      return "";
    });
  }
  const caret = /(^|[^\[])\^/g;
  function edit(regex, opt) {
    regex = typeof regex === "string" ? regex : regex.source;
    opt = opt || "";
    const obj = {
      replace: (name, val) => {
        val = typeof val === "object" && "source" in val ? val.source : val;
        val = val.replace(caret, "$1");
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: () => {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }
  function cleanUrl(href) {
    try {
      href = encodeURI(href).replace(/%25/g, "%");
    } catch (e) {
      return null;
    }
    return href;
  }
  const noopTest = { exec: () => null };
  function splitCells(tableRow, count) {
    const row2 = tableRow.replace(/\|/g, (match, offset2, str) => {
      let escaped = false;
      let curr = offset2;
      while (--curr >= 0 && str[curr] === "\\")
        escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }), cells = row2.split(/ \|/);
    let i = 0;
    if (!cells[0].trim()) {
      cells.shift();
    }
    if (cells.length > 0 && !cells[cells.length - 1].trim()) {
      cells.pop();
    }
    if (count) {
      if (cells.length > count) {
        cells.splice(count);
      } else {
        while (cells.length < count)
          cells.push("");
      }
    }
    for (; i < cells.length; i++) {
      cells[i] = cells[i].trim().replace(/\\\|/g, "|");
    }
    return cells;
  }
  function rtrim(str, c, invert) {
    const l = str.length;
    if (l === 0) {
      return "";
    }
    let suffLen = 0;
    while (suffLen < l) {
      const currChar = str.charAt(l - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.slice(0, l - suffLen);
  }
  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    let level = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "\\") {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;
        if (level < 0) {
          return i;
        }
      }
    }
    return -1;
  }
  function outputLink(cap, link2, raw, lexer) {
    const href = link2.href;
    const title = link2.title ? escape$2(link2.title) : null;
    const text = cap[1].replace(/\\([\[\]])/g, "$1");
    if (cap[0].charAt(0) !== "!") {
      lexer.state.inLink = true;
      const token = {
        type: "link",
        raw,
        href,
        title,
        text,
        tokens: lexer.inlineTokens(text)
      };
      lexer.state.inLink = false;
      return token;
    }
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape$2(text)
    };
  }
  function indentCodeCompensation(raw, text) {
    const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text.split("\n").map((node) => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      const [indentInNode] = matchIndentInNode;
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join("\n");
  }
  class _Tokenizer {
    constructor(options) {
      __publicField(this, "options");
      // TODO: Fix this rules type
      __publicField(this, "rules");
      __publicField(this, "lexer");
      this.options = options || _defaults;
    }
    space(src) {
      const cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
    }
    code(src) {
      const cap = this.rules.block.code.exec(src);
      if (cap) {
        const text = cap[0].replace(/^ {1,4}/gm, "");
        return {
          type: "code",
          raw: cap[0],
          codeBlockStyle: "indented",
          text: !this.options.pedantic ? rtrim(text, "\n") : text
        };
      }
    }
    fences(src) {
      const cap = this.rules.block.fences.exec(src);
      if (cap) {
        const raw = cap[0];
        const text = indentCodeCompensation(raw, cap[3] || "");
        return {
          type: "code",
          raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
          text
        };
      }
    }
    heading(src) {
      const cap = this.rules.block.heading.exec(src);
      if (cap) {
        let text = cap[2].trim();
        if (/#$/.test(text)) {
          const trimmed = rtrim(text, "#");
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            text = trimmed.trim();
          }
        }
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[1].length,
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    hr(src) {
      const cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: "hr",
          raw: cap[0]
        };
      }
    }
    blockquote(src) {
      const cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        const text = cap[0].replace(/^ *>[ \t]?/gm, "");
        const top2 = this.lexer.state.top;
        this.lexer.state.top = true;
        const tokens = this.lexer.blockTokens(text);
        this.lexer.state.top = top2;
        return {
          type: "blockquote",
          raw: cap[0],
          tokens,
          text
        };
      }
    }
    list(src) {
      let cap = this.rules.block.list.exec(src);
      if (cap) {
        let bull = cap[1].trim();
        const isordered = bull.length > 1;
        const list2 = {
          type: "list",
          raw: "",
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : "",
          loose: false,
          items: []
        };
        bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
        if (this.options.pedantic) {
          bull = isordered ? bull : "[*+-]";
        }
        const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
        let raw = "";
        let itemContents = "";
        let endsWithBlankLine = false;
        while (src) {
          let endEarly = false;
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
          let nextLine = src.split("\n", 1)[0];
          let indent = 0;
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimStart();
          } else {
            indent = cap[2].search(/[^ ]/);
            indent = indent > 4 ? 1 : indent;
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          let blankLine = false;
          if (!line && /^ *$/.test(nextLine)) {
            raw += nextLine + "\n";
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
            const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
            const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
            const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
            while (src) {
              const rawLine = src.split("\n", 1)[0];
              nextLine = rawLine;
              if (this.options.pedantic) {
                nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
              }
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              if (hrRegex.test(src)) {
                break;
              }
              if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
                itemContents += "\n" + nextLine.slice(indent);
              } else {
                if (blankLine) {
                  break;
                }
                if (line.search(/[^ ]/) >= 4) {
                  break;
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(line)) {
                  break;
                }
                itemContents += "\n" + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                blankLine = true;
              }
              raw += rawLine + "\n";
              src = src.substring(rawLine.length + 1);
              line = nextLine.slice(indent);
            }
          }
          if (!list2.loose) {
            if (endsWithBlankLine) {
              list2.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          let istask = null;
          let ischecked;
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== "[ ] ";
              itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
            }
          }
          list2.items.push({
            type: "list_item",
            raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents,
            tokens: []
          });
          list2.raw += raw;
        }
        list2.items[list2.items.length - 1].raw = raw.trimEnd();
        list2.items[list2.items.length - 1].text = itemContents.trimEnd();
        list2.raw = list2.raw.trimEnd();
        for (let i = 0; i < list2.items.length; i++) {
          this.lexer.state.top = false;
          list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
          if (!list2.loose) {
            const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
            const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
            list2.loose = hasMultipleLineBreaks;
          }
        }
        if (list2.loose) {
          for (let i = 0; i < list2.items.length; i++) {
            list2.items[i].loose = true;
          }
        }
        return list2;
      }
    }
    html(src) {
      const cap = this.rules.block.html.exec(src);
      if (cap) {
        const token = {
          type: "html",
          block: true,
          raw: cap[0],
          pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
          text: cap[0]
        };
        return token;
      }
    }
    def(src) {
      const cap = this.rules.block.def.exec(src);
      if (cap) {
        const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
        const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
        const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
        return {
          type: "def",
          tag,
          raw: cap[0],
          href,
          title
        };
      }
    }
    table(src) {
      const cap = this.rules.block.table.exec(src);
      if (cap) {
        const item = {
          type: "table",
          raw: cap[0],
          header: splitCells(cap[1]).map((c) => {
            return { text: c, tokens: [] };
          }),
          align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
        };
        if (item.header.length === item.align.length) {
          let l = item.align.length;
          let i, j, k, row2;
          for (i = 0; i < l; i++) {
            const align = item.align[i];
            if (align) {
              if (/^ *-+: *$/.test(align)) {
                item.align[i] = "right";
              } else if (/^ *:-+: *$/.test(align)) {
                item.align[i] = "center";
              } else if (/^ *:-+ *$/.test(align)) {
                item.align[i] = "left";
              } else {
                item.align[i] = null;
              }
            }
          }
          l = item.rows.length;
          for (i = 0; i < l; i++) {
            item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
              return { text: c, tokens: [] };
            });
          }
          l = item.header.length;
          for (j = 0; j < l; j++) {
            item.header[j].tokens = this.lexer.inline(item.header[j].text);
          }
          l = item.rows.length;
          for (j = 0; j < l; j++) {
            row2 = item.rows[j];
            for (k = 0; k < row2.length; k++) {
              row2[k].tokens = this.lexer.inline(row2[k].text);
            }
          }
          return item;
        }
      }
    }
    lheading(src) {
      const cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[2].charAt(0) === "=" ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
    paragraph(src) {
      const cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
        return {
          type: "paragraph",
          raw: cap[0],
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    text(src) {
      const cap = this.rules.block.text.exec(src);
      if (cap) {
        return {
          type: "text",
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
    escape(src) {
      const cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: "escape",
          raw: cap[0],
          text: escape$2(cap[1])
        };
      }
    }
    tag(src) {
      const cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: "html",
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: cap[0]
        };
      }
    }
    link(src) {
      const cap = this.rules.inline.link.exec(src);
      if (cap) {
        const trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          if (!/>$/.test(trimmedUrl)) {
            return;
          }
          const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          const lastParenIndex = findClosingBracket(cap[2], "()");
          if (lastParenIndex > -1) {
            const start2 = cap[0].indexOf("!") === 0 ? 5 : 4;
            const linkLen = start2 + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = "";
          }
        }
        let href = cap[2];
        let title = "";
        if (this.options.pedantic) {
          const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link2) {
            href = link2[1];
            title = link2[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : "";
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
          title: title ? title.replace(this.rules.inline._escapes, "$1") : title
        }, cap[0], this.lexer);
      }
    }
    reflink(src, links) {
      let cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        let link2 = (cap[2] || cap[1]).replace(/\s+/g, " ");
        link2 = links[link2.toLowerCase()];
        if (!link2) {
          const text = cap[0].charAt(0);
          return {
            type: "text",
            raw: text,
            text
          };
        }
        return outputLink(cap, link2, cap[0], this.lexer);
      }
    }
    emStrong(src, maskedSrc, prevChar = "") {
      let match = this.rules.inline.emStrong.lDelim.exec(src);
      if (!match)
        return;
      if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
        return;
      const nextChar = match[1] || match[2] || "";
      if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
        const lLength = [...match[0]].length - 1;
        let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
        const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0;
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim)
            continue;
          rLength = [...rDelim].length;
          if (match[3] || match[4]) {
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue;
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0)
            continue;
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          const raw = [...src].slice(0, lLength + match.index + rLength + 1).join("");
          if (Math.min(lLength, rLength) % 2) {
            const text2 = raw.slice(1, -1);
            return {
              type: "em",
              raw,
              text: text2,
              tokens: this.lexer.inlineTokens(text2)
            };
          }
          const text = raw.slice(2, -2);
          return {
            type: "strong",
            raw,
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
    codespan(src) {
      const cap = this.rules.inline.code.exec(src);
      if (cap) {
        let text = cap[2].replace(/\n/g, " ");
        const hasNonSpaceChars = /[^ ]/.test(text);
        const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape$2(text, true);
        return {
          type: "codespan",
          raw: cap[0],
          text
        };
      }
    }
    br(src) {
      const cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: "br",
          raw: cap[0]
        };
      }
    }
    del(src) {
      const cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: "del",
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
    autolink(src) {
      const cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$2(cap[1]);
          href = "mailto:" + text;
        } else {
          text = escape$2(cap[1]);
          href = text;
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    url(src) {
      let cap;
      if (cap = this.rules.inline.url.exec(src)) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$2(cap[0]);
          href = "mailto:" + text;
        } else {
          let prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = escape$2(cap[0]);
          if (cap[1] === "www.") {
            href = "http://" + cap[0];
          } else {
            href = cap[0];
          }
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    inlineText(src) {
      const cap = this.rules.inline.text.exec(src);
      if (cap) {
        let text;
        if (this.lexer.state.inRawBlock) {
          text = cap[0];
        } else {
          text = escape$2(cap[0]);
        }
        return {
          type: "text",
          raw: cap[0],
          text
        };
      }
    }
  }
  const block = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: noopTest,
    lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
  block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
  block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.lheading = edit(block.lheading).replace(/bull/g, block.bullet).getRegex();
  block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
  block.normal = { ...block };
  block.gfm = {
    ...block.normal,
    table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    // Cells
  };
  block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.pedantic = {
    ...block.normal,
    html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
  };
  const inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
      //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
      //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
      rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
      rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
      // ^- Not allowed for _
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^((?![*_])[\spunctuation])/
  };
  inline._punctuation = "\\p{P}$+<=>`^|~";
  inline.punctuation = edit(inline.punctuation, "u").replace(/punctuation/g, inline._punctuation).getRegex();
  inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
  inline.anyPunctuation = /\\[punct]/g;
  inline._escapes = /\\([punct])/g;
  inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
  inline.emStrong.lDelim = edit(inline.emStrong.lDelim, "u").replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "gu").replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "gu").replace(/punct/g, inline._punctuation).getRegex();
  inline.anyPunctuation = edit(inline.anyPunctuation, "gu").replace(/punct/g, inline._punctuation).getRegex();
  inline._escapes = edit(inline._escapes, "gu").replace(/punct/g, inline._punctuation).getRegex();
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
  inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
  inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
  inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
  inline.normal = { ...inline };
  inline.pedantic = {
    ...inline.normal,
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
  };
  inline.gfm = {
    ...inline.normal,
    escape: edit(inline.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  };
  inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
  inline.breaks = {
    ...inline.gfm,
    br: edit(inline.br).replace("{2,}", "*").getRegex(),
    text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  };
  class _Lexer {
    constructor(options) {
      __publicField(this, "tokens");
      __publicField(this, "options");
      __publicField(this, "state");
      __publicField(this, "tokenizer");
      __publicField(this, "inlineQueue");
      this.tokens = [];
      this.tokens.links = /* @__PURE__ */ Object.create(null);
      this.options = options || _defaults;
      this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      const rules = {
        block: block.normal,
        inline: inline.normal
      };
      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;
        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }
      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */
    static get rules() {
      return {
        block,
        inline
      };
    }
    /**
     * Static Lex Method
     */
    static lex(src, options) {
      const lexer = new _Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
    static lexInline(src, options) {
      const lexer = new _Lexer(options);
      return lexer.inlineTokens(src);
    }
    /**
     * Preprocessing
     */
    lex(src) {
      src = src.replace(/\r\n|\r/g, "\n");
      this.blockTokens(src, this.tokens);
      let next;
      while (next = this.inlineQueue.shift()) {
        this.inlineTokens(next.src, next.tokens);
      }
      return this.tokens;
    }
    blockTokens(src, tokens = []) {
      if (this.options.pedantic) {
        src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
      } else {
        src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs2) => {
          return leading + "    ".repeat(tabs2.length);
        });
      }
      let token;
      let lastToken;
      let cutSrc;
      let lastParagraphClipped;
      while (src) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);
          if (token.raw.length === 1 && tokens.length > 0) {
            tokens[tokens.length - 1].raw += "\n";
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }
          continue;
        }
        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startBlock) {
          let startIndex = Infinity;
          const tempSrc = src.slice(1);
          let tempStart;
          this.options.extensions.startBlock.forEach((getStartIndex) => {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];
          if (lastParagraphClipped && lastToken.type === "paragraph") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          lastParagraphClipped = cutSrc.length !== src.length;
          src = src.substring(token.raw.length);
          continue;
        }
        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      this.state.top = true;
      return tokens;
    }
    inline(src, tokens = []) {
      this.inlineQueue.push({ src, tokens });
      return tokens;
    }
    /**
     * Lexing/Compiling
     */
    inlineTokens(src, tokens = []) {
      let token, lastToken, cutSrc;
      let maskedSrc = src;
      let match;
      let keepPrevChar, prevChar;
      if (this.tokens.links) {
        const links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      }
      while (src) {
        if (!keepPrevChar) {
          prevChar = "";
        }
        keepPrevChar = false;
        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.autolink(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (!this.state.inLink && (token = this.tokenizer.url(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startInline) {
          let startIndex = Infinity;
          const tempSrc = src.slice(1);
          let tempStart;
          this.options.extensions.startInline.forEach((getStartIndex) => {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        }
        if (token = this.tokenizer.inlineText(cutSrc)) {
          src = src.substring(token.raw.length);
          if (token.raw.slice(-1) !== "_") {
            prevChar = token.raw.slice(-1);
          }
          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    }
  }
  class _Renderer {
    constructor(options) {
      __publicField(this, "options");
      this.options = options || _defaults;
    }
    code(code, infostring, escaped) {
      var _a;
      const lang = (_a = (infostring || "").match(/^\S*/)) == null ? void 0 : _a[0];
      code = code.replace(/\n$/, "") + "\n";
      if (!lang) {
        return "<pre><code>" + (escaped ? code : escape$2(code, true)) + "</code></pre>\n";
      }
      return '<pre><code class="language-' + escape$2(lang) + '">' + (escaped ? code : escape$2(code, true)) + "</code></pre>\n";
    }
    blockquote(quote) {
      return `<blockquote>
${quote}</blockquote>
`;
    }
    html(html, block2) {
      return html;
    }
    heading(text, level, raw) {
      return `<h${level}>${text}</h${level}>
`;
    }
    hr() {
      return "<hr>\n";
    }
    list(body, ordered, start2) {
      const type = ordered ? "ol" : "ul";
      const startatt = ordered && start2 !== 1 ? ' start="' + start2 + '"' : "";
      return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
    }
    listitem(text, task, checked) {
      return `<li>${text}</li>
`;
    }
    checkbox(checked) {
      return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph(text) {
      return `<p>${text}</p>
`;
    }
    table(header, body) {
      if (body)
        body = `<tbody>${body}</tbody>`;
      return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
    }
    tablerow(content) {
      return `<tr>
${content}</tr>
`;
    }
    tablecell(content, flags) {
      const type = flags.header ? "th" : "td";
      const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
      return tag + content + `</${type}>
`;
    }
    /**
     * span level renderer
     */
    strong(text) {
      return `<strong>${text}</strong>`;
    }
    em(text) {
      return `<em>${text}</em>`;
    }
    codespan(text) {
      return `<code>${text}</code>`;
    }
    br() {
      return "<br>";
    }
    del(text) {
      return `<del>${text}</del>`;
    }
    link(href, title, text) {
      const cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      let out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += ">" + text + "</a>";
      return out;
    }
    image(href, title, text) {
      const cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      let out = `<img src="${href}" alt="${text}"`;
      if (title) {
        out += ` title="${title}"`;
      }
      out += ">";
      return out;
    }
    text(text) {
      return text;
    }
  }
  class _TextRenderer {
    // no need for block level renderers
    strong(text) {
      return text;
    }
    em(text) {
      return text;
    }
    codespan(text) {
      return text;
    }
    del(text) {
      return text;
    }
    html(text) {
      return text;
    }
    text(text) {
      return text;
    }
    link(href, title, text) {
      return "" + text;
    }
    image(href, title, text) {
      return "" + text;
    }
    br() {
      return "";
    }
  }
  class _Parser {
    constructor(options) {
      __publicField(this, "options");
      __publicField(this, "renderer");
      __publicField(this, "textRenderer");
      this.options = options || _defaults;
      this.options.renderer = this.options.renderer || new _Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new _TextRenderer();
    }
    /**
     * Static Parse Method
     */
    static parse(tokens, options) {
      const parser = new _Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
    static parseInline(tokens, options) {
      const parser = new _Parser(options);
      return parser.parseInline(tokens);
    }
    /**
     * Parse Loop
     */
    parse(tokens, top2 = true) {
      let out = "";
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          const genericToken = token;
          const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
          if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
            out += ret || "";
            continue;
          }
        }
        switch (token.type) {
          case "space": {
            continue;
          }
          case "hr": {
            out += this.renderer.hr();
            continue;
          }
          case "heading": {
            const headingToken = token;
            out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape(this.parseInline(headingToken.tokens, this.textRenderer)));
            continue;
          }
          case "code": {
            const codeToken = token;
            out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
            continue;
          }
          case "table": {
            const tableToken = token;
            let header = "";
            let cell2 = "";
            for (let j = 0; j < tableToken.header.length; j++) {
              cell2 += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), { header: true, align: tableToken.align[j] });
            }
            header += this.renderer.tablerow(cell2);
            let body = "";
            for (let j = 0; j < tableToken.rows.length; j++) {
              const row2 = tableToken.rows[j];
              cell2 = "";
              for (let k = 0; k < row2.length; k++) {
                cell2 += this.renderer.tablecell(this.parseInline(row2[k].tokens), { header: false, align: tableToken.align[k] });
              }
              body += this.renderer.tablerow(cell2);
            }
            out += this.renderer.table(header, body);
            continue;
          }
          case "blockquote": {
            const blockquoteToken = token;
            const body = this.parse(blockquoteToken.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
          case "list": {
            const listToken = token;
            const ordered = listToken.ordered;
            const start2 = listToken.start;
            const loose = listToken.loose;
            let body = "";
            for (let j = 0; j < listToken.items.length; j++) {
              const item = listToken.items[j];
              const checked = item.checked;
              const task = item.task;
              let itemBody = "";
              if (item.task) {
                const checkbox2 = this.renderer.checkbox(!!checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                    item.tokens[0].text = checkbox2 + " " + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                      item.tokens[0].tokens[0].text = checkbox2 + " " + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: "text",
                      text: checkbox2 + " "
                    });
                  }
                } else {
                  itemBody += checkbox2 + " ";
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, !!checked);
            }
            out += this.renderer.list(body, ordered, start2);
            continue;
          }
          case "html": {
            const htmlToken = token;
            out += this.renderer.html(htmlToken.text, htmlToken.block);
            continue;
          }
          case "paragraph": {
            const paragraphToken = token;
            out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
            continue;
          }
          case "text": {
            let textToken = token;
            let body = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
            while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
              textToken = tokens[++i];
              body += "\n" + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
            }
            out += top2 ? this.renderer.paragraph(body) : body;
            continue;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return "";
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
    /**
     * Parse Inline Tokens
     */
    parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      let out = "";
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          const ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
          if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
            out += ret || "";
            continue;
          }
        }
        switch (token.type) {
          case "escape": {
            const escapeToken = token;
            out += renderer.text(escapeToken.text);
            break;
          }
          case "html": {
            const tagToken = token;
            out += renderer.html(tagToken.text);
            break;
          }
          case "link": {
            const linkToken = token;
            out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
            break;
          }
          case "image": {
            const imageToken = token;
            out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
            break;
          }
          case "strong": {
            const strongToken = token;
            out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
            break;
          }
          case "em": {
            const emToken = token;
            out += renderer.em(this.parseInline(emToken.tokens, renderer));
            break;
          }
          case "codespan": {
            const codespanToken = token;
            out += renderer.codespan(codespanToken.text);
            break;
          }
          case "br": {
            out += renderer.br();
            break;
          }
          case "del": {
            const delToken = token;
            out += renderer.del(this.parseInline(delToken.tokens, renderer));
            break;
          }
          case "text": {
            const textToken = token;
            out += renderer.text(textToken.text);
            break;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return "";
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
  }
  class _Hooks {
    constructor(options) {
      __publicField(this, "options");
      this.options = options || _defaults;
    }
    /**
     * Process markdown before marked
     */
    preprocess(markdown) {
      return markdown;
    }
    /**
     * Process HTML after marked is finished
     */
    postprocess(html) {
      return html;
    }
  }
  __publicField(_Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess"
  ]));
  class Marked {
    constructor(...args) {
      __privateAdd(this, _parseMarkdown);
      __privateAdd(this, _onError);
      __publicField(this, "defaults", _getDefaults());
      __publicField(this, "options", this.setOptions);
      __publicField(this, "parse", __privateMethod(this, _parseMarkdown, parseMarkdown_fn).call(this, _Lexer.lex, _Parser.parse));
      __publicField(this, "parseInline", __privateMethod(this, _parseMarkdown, parseMarkdown_fn).call(this, _Lexer.lexInline, _Parser.parseInline));
      __publicField(this, "Parser", _Parser);
      __publicField(this, "parser", _Parser.parse);
      __publicField(this, "Renderer", _Renderer);
      __publicField(this, "TextRenderer", _TextRenderer);
      __publicField(this, "Lexer", _Lexer);
      __publicField(this, "lexer", _Lexer.lex);
      __publicField(this, "Tokenizer", _Tokenizer);
      __publicField(this, "Hooks", _Hooks);
      this.use(...args);
    }
    /**
     * Run callback for every token
     */
    walkTokens(tokens, callback) {
      var _a, _b;
      let values = [];
      for (const token of tokens) {
        values = values.concat(callback.call(this, token));
        switch (token.type) {
          case "table": {
            const tableToken = token;
            for (const cell2 of tableToken.header) {
              values = values.concat(this.walkTokens(cell2.tokens, callback));
            }
            for (const row2 of tableToken.rows) {
              for (const cell2 of row2) {
                values = values.concat(this.walkTokens(cell2.tokens, callback));
              }
            }
            break;
          }
          case "list": {
            const listToken = token;
            values = values.concat(this.walkTokens(listToken.items, callback));
            break;
          }
          default: {
            const genericToken = token;
            if ((_b = (_a = this.defaults.extensions) == null ? void 0 : _a.childTokens) == null ? void 0 : _b[genericToken.type]) {
              this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
                values = values.concat(this.walkTokens(genericToken[childTokens], callback));
              });
            } else if (genericToken.tokens) {
              values = values.concat(this.walkTokens(genericToken.tokens, callback));
            }
          }
        }
      }
      return values;
    }
    use(...args) {
      const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
      args.forEach((pack) => {
        const opts = { ...pack };
        opts.async = this.defaults.async || opts.async || false;
        if (pack.extensions) {
          pack.extensions.forEach((ext) => {
            if (!ext.name) {
              throw new Error("extension name required");
            }
            if ("renderer" in ext) {
              const prevRenderer = extensions.renderers[ext.name];
              if (prevRenderer) {
                extensions.renderers[ext.name] = function(...args2) {
                  let ret = ext.renderer.apply(this, args2);
                  if (ret === false) {
                    ret = prevRenderer.apply(this, args2);
                  }
                  return ret;
                };
              } else {
                extensions.renderers[ext.name] = ext.renderer;
              }
            }
            if ("tokenizer" in ext) {
              if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
                throw new Error("extension level must be 'block' or 'inline'");
              }
              const extLevel = extensions[ext.level];
              if (extLevel) {
                extLevel.unshift(ext.tokenizer);
              } else {
                extensions[ext.level] = [ext.tokenizer];
              }
              if (ext.start) {
                if (ext.level === "block") {
                  if (extensions.startBlock) {
                    extensions.startBlock.push(ext.start);
                  } else {
                    extensions.startBlock = [ext.start];
                  }
                } else if (ext.level === "inline") {
                  if (extensions.startInline) {
                    extensions.startInline.push(ext.start);
                  } else {
                    extensions.startInline = [ext.start];
                  }
                }
              }
            }
            if ("childTokens" in ext && ext.childTokens) {
              extensions.childTokens[ext.name] = ext.childTokens;
            }
          });
          opts.extensions = extensions;
        }
        if (pack.renderer) {
          const renderer = this.defaults.renderer || new _Renderer(this.defaults);
          for (const prop in pack.renderer) {
            const rendererFunc = pack.renderer[prop];
            const rendererKey = prop;
            const prevRenderer = renderer[rendererKey];
            renderer[rendererKey] = (...args2) => {
              let ret = rendererFunc.apply(renderer, args2);
              if (ret === false) {
                ret = prevRenderer.apply(renderer, args2);
              }
              return ret || "";
            };
          }
          opts.renderer = renderer;
        }
        if (pack.tokenizer) {
          const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
          for (const prop in pack.tokenizer) {
            const tokenizerFunc = pack.tokenizer[prop];
            const tokenizerKey = prop;
            const prevTokenizer = tokenizer[tokenizerKey];
            tokenizer[tokenizerKey] = (...args2) => {
              let ret = tokenizerFunc.apply(tokenizer, args2);
              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args2);
              }
              return ret;
            };
          }
          opts.tokenizer = tokenizer;
        }
        if (pack.hooks) {
          const hooks = this.defaults.hooks || new _Hooks();
          for (const prop in pack.hooks) {
            const hooksFunc = pack.hooks[prop];
            const hooksKey = prop;
            const prevHook = hooks[hooksKey];
            if (_Hooks.passThroughHooks.has(prop)) {
              hooks[hooksKey] = (arg) => {
                if (this.defaults.async) {
                  return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                    return prevHook.call(hooks, ret2);
                  });
                }
                const ret = hooksFunc.call(hooks, arg);
                return prevHook.call(hooks, ret);
              };
            } else {
              hooks[hooksKey] = (...args2) => {
                let ret = hooksFunc.apply(hooks, args2);
                if (ret === false) {
                  ret = prevHook.apply(hooks, args2);
                }
                return ret;
              };
            }
          }
          opts.hooks = hooks;
        }
        if (pack.walkTokens) {
          const walkTokens = this.defaults.walkTokens;
          const packWalktokens = pack.walkTokens;
          opts.walkTokens = function(token) {
            let values = [];
            values.push(packWalktokens.call(this, token));
            if (walkTokens) {
              values = values.concat(walkTokens.call(this, token));
            }
            return values;
          };
        }
        this.defaults = { ...this.defaults, ...opts };
      });
      return this;
    }
    setOptions(opt) {
      this.defaults = { ...this.defaults, ...opt };
      return this;
    }
  }
  _parseMarkdown = new WeakSet();
  parseMarkdown_fn = function(lexer, parser) {
    return (src, options) => {
      const origOpt = { ...options };
      const opt = { ...this.defaults, ...origOpt };
      if (this.defaults.async === true && origOpt.async === false) {
        if (!opt.silent) {
          console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
        }
        opt.async = true;
      }
      const throwError = __privateMethod(this, _onError, onError_fn).call(this, !!opt.silent, !!opt.async);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer(src2, opt)).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser(tokens, opt)).then((html) => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        const tokens = lexer(src, opt);
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html = parser(tokens, opt);
        if (opt.hooks) {
          html = opt.hooks.postprocess(html);
        }
        return html;
      } catch (e) {
        return throwError(e);
      }
    };
  };
  _onError = new WeakSet();
  onError_fn = function(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$2(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  };
  const markedInstance = new Marked();
  function marked(src, opt) {
    return markedInstance.parse(src, opt);
  }
  marked.options = marked.setOptions = function(options) {
    markedInstance.setOptions(options);
    marked.defaults = markedInstance.defaults;
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.getDefaults = _getDefaults;
  marked.defaults = _defaults;
  marked.use = function(...args) {
    markedInstance.use(...args);
    marked.defaults = markedInstance.defaults;
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.walkTokens = function(tokens, callback) {
    return markedInstance.walkTokens(tokens, callback);
  };
  marked.parseInline = markedInstance.parseInline;
  marked.Parser = _Parser;
  marked.parser = _Parser.parse;
  marked.Renderer = _Renderer;
  marked.TextRenderer = _TextRenderer;
  marked.Lexer = _Lexer;
  marked.lexer = _Lexer.lex;
  marked.Tokenizer = _Tokenizer;
  marked.Hooks = _Hooks;
  marked.parse = marked;
  marked.options;
  marked.setOptions;
  marked.use;
  marked.walkTokens;
  marked.parseInline;
  _Parser.parse;
  _Lexer.lex;
  function markedHighlight(options) {
    if (typeof options === "function") {
      options = {
        highlight: options
      };
    }
    if (!options || typeof options.highlight !== "function") {
      throw new Error("Must provide highlight function");
    }
    if (typeof options.langPrefix !== "string") {
      options.langPrefix = "language-";
    }
    return {
      async: !!options.async,
      walkTokens(token) {
        if (token.type !== "code") {
          return;
        }
        const lang = getLang(token);
        if (options.async) {
          return Promise.resolve(options.highlight(token.text, lang)).then(updateToken(token));
        }
        const code = options.highlight(token.text, lang);
        if (code instanceof Promise) {
          throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
        }
        updateToken(token)(code);
      },
      renderer: {
        code(code, infoString, escaped) {
          const lang = (infoString || "").match(/\S*/)[0];
          const classAttr = lang ? ` class="${options.langPrefix}${escape$1(lang)}"` : "";
          code = code.replace(/\n$/, "");
          return `<pre><code${classAttr}>${escaped ? code : escape$1(code, true)}
</code></pre>`;
        }
      }
    };
  }
  function getLang(token) {
    return (token.lang || "").match(/\S*/)[0];
  }
  function updateToken(token) {
    return (code) => {
      if (typeof code === "string" && code !== token.text) {
        token.escaped = true;
        token.text = code;
      }
    };
  }
  const escapeTest = /[&<>"']/;
  const escapeReplace = new RegExp(escapeTest.source, "g");
  const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
  const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
  const escapeReplacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  const getEscapeReplacement = (ch) => escapeReplacements[ch];
  function escape$1(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html;
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function deepFreeze(obj) {
    if (obj instanceof Map) {
      obj.clear = obj.delete = obj.set = function() {
        throw new Error("map is read-only");
      };
    } else if (obj instanceof Set) {
      obj.add = obj.clear = obj.delete = function() {
        throw new Error("set is read-only");
      };
    }
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((name) => {
      const prop = obj[name];
      const type = typeof prop;
      if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
        deepFreeze(prop);
      }
    });
    return obj;
  }
  class Response {
    /**
     * @param {CompiledMode} mode
     */
    constructor(mode) {
      if (mode.data === void 0)
        mode.data = {};
      this.data = mode.data;
      this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function escapeHTML(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function inherit$1(original, ...objects) {
    const result2 = /* @__PURE__ */ Object.create(null);
    for (const key in original) {
      result2[key] = original[key];
    }
    objects.forEach(function(obj) {
      for (const key in obj) {
        result2[key] = obj[key];
      }
    });
    return (
      /** @type {T} */
      result2
    );
  }
  const SPAN_CLOSE = "</span>";
  const emitsWrappingTags = (node) => {
    return !!node.scope;
  };
  const scopeToCSSClass = (name, { prefix }) => {
    if (name.startsWith("language:")) {
      return name.replace("language:", "language-");
    }
    if (name.includes(".")) {
      const pieces = name.split(".");
      return [
        `${prefix}${pieces.shift()}`,
        ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
      ].join(" ");
    }
    return `${prefix}${name}`;
  };
  class HTMLRenderer {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(parseTree, options) {
      this.buffer = "";
      this.classPrefix = options.classPrefix;
      parseTree.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(text) {
      this.buffer += escapeHTML(text);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(node) {
      if (!emitsWrappingTags(node))
        return;
      const className = scopeToCSSClass(
        node.scope,
        { prefix: this.classPrefix }
      );
      this.span(className);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(node) {
      if (!emitsWrappingTags(node))
        return;
      this.buffer += SPAN_CLOSE;
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(className) {
      this.buffer += `<span class="${className}">`;
    }
  }
  const newNode = (opts = {}) => {
    const result2 = { children: [] };
    Object.assign(result2, opts);
    return result2;
  };
  class TokenTree {
    constructor() {
      this.rootNode = newNode();
      this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(node) {
      this.top.children.push(node);
    }
    /** @param {string} scope */
    openNode(scope) {
      const node = newNode({ scope });
      this.add(node);
      this.stack.push(node);
    }
    closeNode() {
      if (this.stack.length > 1) {
        return this.stack.pop();
      }
      return void 0;
    }
    closeAllNodes() {
      while (this.closeNode())
        ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(builder) {
      return this.constructor._walk(builder, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(builder, node) {
      if (typeof node === "string") {
        builder.addText(node);
      } else if (node.children) {
        builder.openNode(node);
        node.children.forEach((child) => this._walk(builder, child));
        builder.closeNode(node);
      }
      return builder;
    }
    /**
     * @param {Node} node
     */
    static _collapse(node) {
      if (typeof node === "string")
        return;
      if (!node.children)
        return;
      if (node.children.every((el) => typeof el === "string")) {
        node.children = [node.children.join("")];
      } else {
        node.children.forEach((child) => {
          TokenTree._collapse(child);
        });
      }
    }
  }
  class TokenTreeEmitter extends TokenTree {
    /**
     * @param {*} options
     */
    constructor(options) {
      super();
      this.options = options;
    }
    /**
     * @param {string} text
     */
    addText(text) {
      if (text === "") {
        return;
      }
      this.add(text);
    }
    /** @param {string} scope */
    startScope(scope) {
      this.openNode(scope);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(emitter, name) {
      const node = emitter.root;
      if (name)
        node.scope = `language:${name}`;
      this.add(node);
    }
    toHTML() {
      const renderer = new HTMLRenderer(this, this.options);
      return renderer.value();
    }
    finalize() {
      this.closeAllNodes();
      return true;
    }
  }
  function source(re) {
    if (!re)
      return null;
    if (typeof re === "string")
      return re;
    return re.source;
  }
  function lookahead(re) {
    return concat("(?=", re, ")");
  }
  function anyNumberOfTimes(re) {
    return concat("(?:", re, ")*");
  }
  function optional(re) {
    return concat("(?:", re, ")?");
  }
  function concat(...args) {
    const joined = args.map((x) => source(x)).join("");
    return joined;
  }
  function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
      args.splice(args.length - 1, 1);
      return opts;
    } else {
      return {};
    }
  }
  function either(...args) {
    const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
    return joined;
  }
  function countMatchGroups(re) {
    return new RegExp(re.toString() + "|").exec("").length - 1;
  }
  function startsWith(re, lexeme) {
    const match = re && re.exec(lexeme);
    return match && match.index === 0;
  }
  const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _rewriteBackreferences(regexps, { joinWith }) {
    let numCaptures = 0;
    return regexps.map((regex) => {
      numCaptures += 1;
      const offset2 = numCaptures;
      let re = source(regex);
      let out = "";
      while (re.length > 0) {
        const match = BACKREF_RE.exec(re);
        if (!match) {
          out += re;
          break;
        }
        out += re.substring(0, match.index);
        re = re.substring(match.index + match[0].length);
        if (match[0][0] === "\\" && match[1]) {
          out += "\\" + String(Number(match[1]) + offset2);
        } else {
          out += match[0];
          if (match[0] === "(") {
            numCaptures++;
          }
        }
      }
      return out;
    }).map((re) => `(${re})`).join(joinWith);
  }
  const MATCH_NOTHING_RE = /\b\B/;
  const IDENT_RE = "[a-zA-Z]\\w*";
  const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
  const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
  const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  const BINARY_NUMBER_RE = "\\b(0b[01]+)";
  const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  const SHEBANG = (opts = {}) => {
    const beginShebang = /^#![ ]*\//;
    if (opts.binary) {
      opts.begin = concat(
        beginShebang,
        /.*\b/,
        opts.binary,
        /\b.*/
      );
    }
    return inherit$1({
      scope: "meta",
      begin: beginShebang,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (m, resp) => {
        if (m.index !== 0)
          resp.ignoreMatch();
      }
    }, opts);
  };
  const BACKSLASH_ESCAPE = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  };
  const APOS_STRING_MODE = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const QUOTE_STRING_MODE = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  const COMMENT = function(begin, end2, modeOptions = {}) {
    const mode = inherit$1(
      {
        scope: "comment",
        begin,
        end: end2,
        contains: []
      },
      modeOptions
    );
    mode.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const ENGLISH_WORD = either(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    mode.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: concat(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ENGLISH_WORD,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    );
    return mode;
  };
  const C_LINE_COMMENT_MODE = COMMENT("//", "$");
  const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
  const HASH_COMMENT_MODE = COMMENT("#", "$");
  const NUMBER_MODE = {
    scope: "number",
    begin: NUMBER_RE,
    relevance: 0
  };
  const C_NUMBER_MODE = {
    scope: "number",
    begin: C_NUMBER_RE,
    relevance: 0
  };
  const BINARY_NUMBER_MODE = {
    scope: "number",
    begin: BINARY_NUMBER_RE,
    relevance: 0
  };
  const REGEXP_MODE = {
    // this outer rule makes sure we actually have a WHOLE regex and not simply
    // an expression such as:
    //
    //     3 / something
    //
    // (which will then blow up when regex's `illegal` sees the newline)
    begin: /(?=\/[^/\n]*\/)/,
    contains: [{
      scope: "regexp",
      begin: /\//,
      end: /\/[gimuy]*/,
      illegal: /\n/,
      contains: [
        BACKSLASH_ESCAPE,
        {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [BACKSLASH_ESCAPE]
        }
      ]
    }]
  };
  const TITLE_MODE = {
    scope: "title",
    begin: IDENT_RE,
    relevance: 0
  };
  const UNDERSCORE_TITLE_MODE = {
    scope: "title",
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const END_SAME_AS_BEGIN = function(mode) {
    return Object.assign(
      mode,
      {
        /** @type {ModeCallback} */
        "on:begin": (m, resp) => {
          resp.data._beginMatch = m[1];
        },
        /** @type {ModeCallback} */
        "on:end": (m, resp) => {
          if (resp.data._beginMatch !== m[1])
            resp.ignoreMatch();
        }
      }
    );
  };
  var MODES = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE,
    IDENT_RE,
    UNDERSCORE_IDENT_RE,
    NUMBER_RE,
    C_NUMBER_RE,
    BINARY_NUMBER_RE,
    RE_STARTERS_RE,
    SHEBANG,
    BACKSLASH_ESCAPE,
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE,
    COMMENT,
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE,
    NUMBER_MODE,
    C_NUMBER_MODE,
    BINARY_NUMBER_MODE,
    REGEXP_MODE,
    TITLE_MODE,
    UNDERSCORE_TITLE_MODE,
    METHOD_GUARD,
    END_SAME_AS_BEGIN
  });
  function skipIfHasPrecedingDot(match, response) {
    const before = match.input[match.index - 1];
    if (before === ".") {
      response.ignoreMatch();
    }
  }
  function scopeClassName(mode, _parent) {
    if (mode.className !== void 0) {
      mode.scope = mode.className;
      delete mode.className;
    }
  }
  function beginKeywords(mode, parent) {
    if (!parent)
      return;
    if (!mode.beginKeywords)
      return;
    mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
    mode.__beforeBegin = skipIfHasPrecedingDot;
    mode.keywords = mode.keywords || mode.beginKeywords;
    delete mode.beginKeywords;
    if (mode.relevance === void 0)
      mode.relevance = 0;
  }
  function compileIllegal(mode, _parent) {
    if (!Array.isArray(mode.illegal))
      return;
    mode.illegal = either(...mode.illegal);
  }
  function compileMatch(mode, _parent) {
    if (!mode.match)
      return;
    if (mode.begin || mode.end)
      throw new Error("begin & end are not supported with match");
    mode.begin = mode.match;
    delete mode.match;
  }
  function compileRelevance(mode, _parent) {
    if (mode.relevance === void 0)
      mode.relevance = 1;
  }
  const beforeMatchExt = (mode, parent) => {
    if (!mode.beforeMatch)
      return;
    if (mode.starts)
      throw new Error("beforeMatch cannot be used with starts");
    const originalMode = Object.assign({}, mode);
    Object.keys(mode).forEach((key) => {
      delete mode[key];
    });
    mode.keywords = originalMode.keywords;
    mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
    mode.starts = {
      relevance: 0,
      contains: [
        Object.assign(originalMode, { endsParent: true })
      ]
    };
    mode.relevance = 0;
    delete originalMode.beforeMatch;
  };
  const COMMON_KEYWORDS = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ];
  const DEFAULT_KEYWORD_SCOPE = "keyword";
  function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
    const compiledKeywords = /* @__PURE__ */ Object.create(null);
    if (typeof rawKeywords === "string") {
      compileList(scopeName, rawKeywords.split(" "));
    } else if (Array.isArray(rawKeywords)) {
      compileList(scopeName, rawKeywords);
    } else {
      Object.keys(rawKeywords).forEach(function(scopeName2) {
        Object.assign(
          compiledKeywords,
          compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
        );
      });
    }
    return compiledKeywords;
    function compileList(scopeName2, keywordList) {
      if (caseInsensitive) {
        keywordList = keywordList.map((x) => x.toLowerCase());
      }
      keywordList.forEach(function(keyword) {
        const pair = keyword.split("|");
        compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }
  function scoreForKeyword(keyword, providedScore) {
    if (providedScore) {
      return Number(providedScore);
    }
    return commonKeyword(keyword) ? 0 : 1;
  }
  function commonKeyword(keyword) {
    return COMMON_KEYWORDS.includes(keyword.toLowerCase());
  }
  const seenDeprecations = {};
  const error = (message) => {
    console.error(message);
  };
  const warn = (message, ...args) => {
    console.log(`WARN: ${message}`, ...args);
  };
  const deprecated = (version2, message) => {
    if (seenDeprecations[`${version2}/${message}`])
      return;
    console.log(`Deprecated as of ${version2}. ${message}`);
    seenDeprecations[`${version2}/${message}`] = true;
  };
  const MultiClassError = new Error();
  function remapScopeNames(mode, regexes, { key }) {
    let offset2 = 0;
    const scopeNames = mode[key];
    const emit = {};
    const positions = {};
    for (let i = 1; i <= regexes.length; i++) {
      positions[i + offset2] = scopeNames[i];
      emit[i + offset2] = true;
      offset2 += countMatchGroups(regexes[i - 1]);
    }
    mode[key] = positions;
    mode[key]._emit = emit;
    mode[key]._multi = true;
  }
  function beginMultiClass(mode) {
    if (!Array.isArray(mode.begin))
      return;
    if (mode.skip || mode.excludeBegin || mode.returnBegin) {
      error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
      error("beginScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.begin, { key: "beginScope" });
    mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
  }
  function endMultiClass(mode) {
    if (!Array.isArray(mode.end))
      return;
    if (mode.skip || mode.excludeEnd || mode.returnEnd) {
      error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.endScope !== "object" || mode.endScope === null) {
      error("endScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.end, { key: "endScope" });
    mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
  }
  function scopeSugar(mode) {
    if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
      mode.beginScope = mode.scope;
      delete mode.scope;
    }
  }
  function MultiClass(mode) {
    scopeSugar(mode);
    if (typeof mode.beginScope === "string") {
      mode.beginScope = { _wrap: mode.beginScope };
    }
    if (typeof mode.endScope === "string") {
      mode.endScope = { _wrap: mode.endScope };
    }
    beginMultiClass(mode);
    endMultiClass(mode);
  }
  function compileLanguage(language) {
    function langRe(value, global2) {
      return new RegExp(
        source(value),
        "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : "")
      );
    }
    class MultiRegex {
      constructor() {
        this.matchIndexes = {};
        this.regexes = [];
        this.matchAt = 1;
        this.position = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        opts.position = this.position++;
        this.matchIndexes[this.matchAt] = opts;
        this.regexes.push([opts, re]);
        this.matchAt += countMatchGroups(re) + 1;
      }
      compile() {
        if (this.regexes.length === 0) {
          this.exec = () => null;
        }
        const terminators = this.regexes.map((el) => el[1]);
        this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
        this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(s) {
        this.matcherRe.lastIndex = this.lastIndex;
        const match = this.matcherRe.exec(s);
        if (!match) {
          return null;
        }
        const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
        const matchData = this.matchIndexes[i];
        match.splice(0, i);
        return Object.assign(match, matchData);
      }
    }
    class ResumableMultiRegex {
      constructor() {
        this.rules = [];
        this.multiRegexes = [];
        this.count = 0;
        this.lastIndex = 0;
        this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(index) {
        if (this.multiRegexes[index])
          return this.multiRegexes[index];
        const matcher = new MultiRegex();
        this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
        matcher.compile();
        this.multiRegexes[index] = matcher;
        return matcher;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        this.rules.push([re, opts]);
        if (opts.type === "begin")
          this.count++;
      }
      /** @param {string} s */
      exec(s) {
        const m = this.getMatcher(this.regexIndex);
        m.lastIndex = this.lastIndex;
        let result2 = m.exec(s);
        if (this.resumingScanAtSamePosition()) {
          if (result2 && result2.index === this.lastIndex)
            ;
          else {
            const m2 = this.getMatcher(0);
            m2.lastIndex = this.lastIndex + 1;
            result2 = m2.exec(s);
          }
        }
        if (result2) {
          this.regexIndex += result2.position + 1;
          if (this.regexIndex === this.count) {
            this.considerAll();
          }
        }
        return result2;
      }
    }
    function buildModeRegex(mode) {
      const mm = new ResumableMultiRegex();
      mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
      if (mode.terminatorEnd) {
        mm.addRule(mode.terminatorEnd, { type: "end" });
      }
      if (mode.illegal) {
        mm.addRule(mode.illegal, { type: "illegal" });
      }
      return mm;
    }
    function compileMode(mode, parent) {
      const cmode = (
        /** @type CompiledMode */
        mode
      );
      if (mode.isCompiled)
        return cmode;
      [
        scopeClassName,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        compileMatch,
        MultiClass,
        beforeMatchExt
      ].forEach((ext) => ext(mode, parent));
      language.compilerExtensions.forEach((ext) => ext(mode, parent));
      mode.__beforeBegin = null;
      [
        beginKeywords,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        compileIllegal,
        // default to 1 relevance if not specified
        compileRelevance
      ].forEach((ext) => ext(mode, parent));
      mode.isCompiled = true;
      let keywordPattern = null;
      if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
        mode.keywords = Object.assign({}, mode.keywords);
        keywordPattern = mode.keywords.$pattern;
        delete mode.keywords.$pattern;
      }
      keywordPattern = keywordPattern || /\w+/;
      if (mode.keywords) {
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
      }
      cmode.keywordPatternRe = langRe(keywordPattern, true);
      if (parent) {
        if (!mode.begin)
          mode.begin = /\B|\b/;
        cmode.beginRe = langRe(cmode.begin);
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          cmode.endRe = langRe(cmode.end);
        cmode.terminatorEnd = source(cmode.end) || "";
        if (mode.endsWithParent && parent.terminatorEnd) {
          cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
        }
      }
      if (mode.illegal)
        cmode.illegalRe = langRe(
          /** @type {RegExp | string} */
          mode.illegal
        );
      if (!mode.contains)
        mode.contains = [];
      mode.contains = [].concat(...mode.contains.map(function(c) {
        return expandOrCloneMode(c === "self" ? mode : c);
      }));
      mode.contains.forEach(function(c) {
        compileMode(
          /** @type Mode */
          c,
          cmode
        );
      });
      if (mode.starts) {
        compileMode(mode.starts, parent);
      }
      cmode.matcher = buildModeRegex(cmode);
      return cmode;
    }
    if (!language.compilerExtensions)
      language.compilerExtensions = [];
    if (language.contains && language.contains.includes("self")) {
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    }
    language.classNameAliases = inherit$1(language.classNameAliases || {});
    return compileMode(
      /** @type Mode */
      language
    );
  }
  function dependencyOnParent(mode) {
    if (!mode)
      return false;
    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }
  function expandOrCloneMode(mode) {
    if (mode.variants && !mode.cachedVariants) {
      mode.cachedVariants = mode.variants.map(function(variant) {
        return inherit$1(mode, { variants: null }, variant);
      });
    }
    if (mode.cachedVariants) {
      return mode.cachedVariants;
    }
    if (dependencyOnParent(mode)) {
      return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
    }
    if (Object.isFrozen(mode)) {
      return inherit$1(mode);
    }
    return mode;
  }
  var version = "11.8.0";
  class HTMLInjectionError extends Error {
    constructor(reason, html) {
      super(reason);
      this.name = "HTMLInjectionError";
      this.html = html;
    }
  }
  const escape = escapeHTML;
  const inherit = inherit$1;
  const NO_MATCH = Symbol("nomatch");
  const MAX_KEYWORD_HITS = 7;
  const HLJS = function(hljs) {
    const languages = /* @__PURE__ */ Object.create(null);
    const aliases = /* @__PURE__ */ Object.create(null);
    const plugins = [];
    let SAFE_MODE = true;
    const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
    const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
    let options = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: TokenTreeEmitter
    };
    function shouldNotHighlight(languageName) {
      return options.noHighlightRe.test(languageName);
    }
    function blockLanguage(block2) {
      let classes2 = block2.className + " ";
      classes2 += block2.parentNode ? block2.parentNode.className : "";
      const match = options.languageDetectRe.exec(classes2);
      if (match) {
        const language = getLanguage(match[1]);
        if (!language) {
          warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
          warn("Falling back to no-highlight mode for this block.", block2);
        }
        return language ? match[1] : "no-highlight";
      }
      return classes2.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
    }
    function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
      let code = "";
      let languageName = "";
      if (typeof optionsOrCode === "object") {
        code = codeOrLanguageName;
        ignoreIllegals = optionsOrCode.ignoreIllegals;
        languageName = optionsOrCode.language;
      } else {
        deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
        deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
        languageName = codeOrLanguageName;
        code = optionsOrCode;
      }
      if (ignoreIllegals === void 0) {
        ignoreIllegals = true;
      }
      const context2 = {
        code,
        language: languageName
      };
      fire("before:highlight", context2);
      const result2 = context2.result ? context2.result : _highlight(context2.language, context2.code, ignoreIllegals);
      result2.code = context2.code;
      fire("after:highlight", result2);
      return result2;
    }
    function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
      const keywordHits = /* @__PURE__ */ Object.create(null);
      function keywordData(mode, matchText) {
        return mode.keywords[matchText];
      }
      function processKeywords() {
        if (!top2.keywords) {
          emitter.addText(modeBuffer);
          return;
        }
        let lastIndex = 0;
        top2.keywordPatternRe.lastIndex = 0;
        let match = top2.keywordPatternRe.exec(modeBuffer);
        let buf = "";
        while (match) {
          buf += modeBuffer.substring(lastIndex, match.index);
          const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
          const data = keywordData(top2, word);
          if (data) {
            const [kind, keywordRelevance] = data;
            emitter.addText(buf);
            buf = "";
            keywordHits[word] = (keywordHits[word] || 0) + 1;
            if (keywordHits[word] <= MAX_KEYWORD_HITS)
              relevance += keywordRelevance;
            if (kind.startsWith("_")) {
              buf += match[0];
            } else {
              const cssClass = language.classNameAliases[kind] || kind;
              emitKeyword(match[0], cssClass);
            }
          } else {
            buf += match[0];
          }
          lastIndex = top2.keywordPatternRe.lastIndex;
          match = top2.keywordPatternRe.exec(modeBuffer);
        }
        buf += modeBuffer.substring(lastIndex);
        emitter.addText(buf);
      }
      function processSubLanguage() {
        if (modeBuffer === "")
          return;
        let result3 = null;
        if (typeof top2.subLanguage === "string") {
          if (!languages[top2.subLanguage]) {
            emitter.addText(modeBuffer);
            return;
          }
          result3 = _highlight(top2.subLanguage, modeBuffer, true, continuations[top2.subLanguage]);
          continuations[top2.subLanguage] = /** @type {CompiledMode} */
          result3._top;
        } else {
          result3 = highlightAuto(modeBuffer, top2.subLanguage.length ? top2.subLanguage : null);
        }
        if (top2.relevance > 0) {
          relevance += result3.relevance;
        }
        emitter.__addSublanguage(result3._emitter, result3.language);
      }
      function processBuffer() {
        if (top2.subLanguage != null) {
          processSubLanguage();
        } else {
          processKeywords();
        }
        modeBuffer = "";
      }
      function emitKeyword(keyword, scope) {
        if (keyword === "")
          return;
        emitter.startScope(scope);
        emitter.addText(keyword);
        emitter.endScope();
      }
      function emitMultiClass(scope, match) {
        let i = 1;
        const max2 = match.length - 1;
        while (i <= max2) {
          if (!scope._emit[i]) {
            i++;
            continue;
          }
          const klass = language.classNameAliases[scope[i]] || scope[i];
          const text = match[i];
          if (klass) {
            emitKeyword(text, klass);
          } else {
            modeBuffer = text;
            processKeywords();
            modeBuffer = "";
          }
          i++;
        }
      }
      function startNewMode(mode, match) {
        if (mode.scope && typeof mode.scope === "string") {
          emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
        }
        if (mode.beginScope) {
          if (mode.beginScope._wrap) {
            emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
            modeBuffer = "";
          } else if (mode.beginScope._multi) {
            emitMultiClass(mode.beginScope, match);
            modeBuffer = "";
          }
        }
        top2 = Object.create(mode, { parent: { value: top2 } });
        return top2;
      }
      function endOfMode(mode, match, matchPlusRemainder) {
        let matched = startsWith(mode.endRe, matchPlusRemainder);
        if (matched) {
          if (mode["on:end"]) {
            const resp = new Response(mode);
            mode["on:end"](match, resp);
            if (resp.isMatchIgnored)
              matched = false;
          }
          if (matched) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }
            return mode;
          }
        }
        if (mode.endsWithParent) {
          return endOfMode(mode.parent, match, matchPlusRemainder);
        }
      }
      function doIgnore(lexeme) {
        if (top2.matcher.regexIndex === 0) {
          modeBuffer += lexeme[0];
          return 1;
        } else {
          resumeScanAtSamePosition = true;
          return 0;
        }
      }
      function doBeginMatch(match) {
        const lexeme = match[0];
        const newMode = match.rule;
        const resp = new Response(newMode);
        const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
        for (const cb of beforeCallbacks) {
          if (!cb)
            continue;
          cb(match, resp);
          if (resp.isMatchIgnored)
            return doIgnore(lexeme);
        }
        if (newMode.skip) {
          modeBuffer += lexeme;
        } else {
          if (newMode.excludeBegin) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (!newMode.returnBegin && !newMode.excludeBegin) {
            modeBuffer = lexeme;
          }
        }
        startNewMode(newMode, match);
        return newMode.returnBegin ? 0 : lexeme.length;
      }
      function doEndMatch(match) {
        const lexeme = match[0];
        const matchPlusRemainder = codeToHighlight.substring(match.index);
        const endMode = endOfMode(top2, match, matchPlusRemainder);
        if (!endMode) {
          return NO_MATCH;
        }
        const origin = top2;
        if (top2.endScope && top2.endScope._wrap) {
          processBuffer();
          emitKeyword(lexeme, top2.endScope._wrap);
        } else if (top2.endScope && top2.endScope._multi) {
          processBuffer();
          emitMultiClass(top2.endScope, match);
        } else if (origin.skip) {
          modeBuffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            modeBuffer = lexeme;
          }
        }
        do {
          if (top2.scope) {
            emitter.closeNode();
          }
          if (!top2.skip && !top2.subLanguage) {
            relevance += top2.relevance;
          }
          top2 = top2.parent;
        } while (top2 !== endMode.parent);
        if (endMode.starts) {
          startNewMode(endMode.starts, match);
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }
      function processContinuations() {
        const list2 = [];
        for (let current = top2; current !== language; current = current.parent) {
          if (current.scope) {
            list2.unshift(current.scope);
          }
        }
        list2.forEach((item) => emitter.openNode(item));
      }
      let lastMatch = {};
      function processLexeme(textBeforeMatch, match) {
        const lexeme = match && match[0];
        modeBuffer += textBeforeMatch;
        if (lexeme == null) {
          processBuffer();
          return 0;
        }
        if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
          modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
          if (!SAFE_MODE) {
            const err = new Error(`0 width match regex (${languageName})`);
            err.languageName = languageName;
            err.badRule = lastMatch.rule;
            throw err;
          }
          return 1;
        }
        lastMatch = match;
        if (match.type === "begin") {
          return doBeginMatch(match);
        } else if (match.type === "illegal" && !ignoreIllegals) {
          const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top2.scope || "<unnamed>") + '"');
          err.mode = top2;
          throw err;
        } else if (match.type === "end") {
          const processed = doEndMatch(match);
          if (processed !== NO_MATCH) {
            return processed;
          }
        }
        if (match.type === "illegal" && lexeme === "") {
          return 1;
        }
        if (iterations > 1e5 && iterations > match.index * 3) {
          const err = new Error("potential infinite loop, way more iterations than matches");
          throw err;
        }
        modeBuffer += lexeme;
        return lexeme.length;
      }
      const language = getLanguage(languageName);
      if (!language) {
        error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
        throw new Error('Unknown language: "' + languageName + '"');
      }
      const md = compileLanguage(language);
      let result2 = "";
      let top2 = continuation || md;
      const continuations = {};
      const emitter = new options.__emitter(options);
      processContinuations();
      let modeBuffer = "";
      let relevance = 0;
      let index = 0;
      let iterations = 0;
      let resumeScanAtSamePosition = false;
      try {
        if (!language.__emitTokens) {
          top2.matcher.considerAll();
          for (; ; ) {
            iterations++;
            if (resumeScanAtSamePosition) {
              resumeScanAtSamePosition = false;
            } else {
              top2.matcher.considerAll();
            }
            top2.matcher.lastIndex = index;
            const match = top2.matcher.exec(codeToHighlight);
            if (!match)
              break;
            const beforeMatch = codeToHighlight.substring(index, match.index);
            const processedCount = processLexeme(beforeMatch, match);
            index = match.index + processedCount;
          }
          processLexeme(codeToHighlight.substring(index));
        } else {
          language.__emitTokens(codeToHighlight, emitter);
        }
        emitter.finalize();
        result2 = emitter.toHTML();
        return {
          language: languageName,
          value: result2,
          relevance,
          illegal: false,
          _emitter: emitter,
          _top: top2
        };
      } catch (err) {
        if (err.message && err.message.includes("Illegal")) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: err.message,
              index,
              context: codeToHighlight.slice(index - 100, index + 100),
              mode: err.mode,
              resultSoFar: result2
            },
            _emitter: emitter
          };
        } else if (SAFE_MODE) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: false,
            relevance: 0,
            errorRaised: err,
            _emitter: emitter,
            _top: top2
          };
        } else {
          throw err;
        }
      }
    }
    function justTextHighlightResult(code) {
      const result2 = {
        value: escape(code),
        illegal: false,
        relevance: 0,
        _top: PLAINTEXT_LANGUAGE,
        _emitter: new options.__emitter(options)
      };
      result2._emitter.addText(code);
      return result2;
    }
    function highlightAuto(code, languageSubset) {
      languageSubset = languageSubset || options.languages || Object.keys(languages);
      const plaintext = justTextHighlightResult(code);
      const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
        (name) => _highlight(name, code, false)
      );
      results.unshift(plaintext);
      const sorted = results.sort((a, b) => {
        if (a.relevance !== b.relevance)
          return b.relevance - a.relevance;
        if (a.language && b.language) {
          if (getLanguage(a.language).supersetOf === b.language) {
            return 1;
          } else if (getLanguage(b.language).supersetOf === a.language) {
            return -1;
          }
        }
        return 0;
      });
      const [best, secondBest] = sorted;
      const result2 = best;
      result2.secondBest = secondBest;
      return result2;
    }
    function updateClassName(element, currentLang, resultLang) {
      const language = currentLang && aliases[currentLang] || resultLang;
      element.classList.add("hljs");
      element.classList.add(`language-${language}`);
    }
    function highlightElement(element) {
      let node = null;
      const language = blockLanguage(element);
      if (shouldNotHighlight(language))
        return;
      fire(
        "before:highlightElement",
        { el: element, language }
      );
      if (element.children.length > 0) {
        if (!options.ignoreUnescapedHTML) {
          console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
          console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
          console.warn("The element with unescaped HTML:");
          console.warn(element);
        }
        if (options.throwUnescapedHTML) {
          const err = new HTMLInjectionError(
            "One of your code blocks includes unescaped HTML.",
            element.innerHTML
          );
          throw err;
        }
      }
      node = element;
      const text = node.textContent;
      const result2 = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
      element.innerHTML = result2.value;
      updateClassName(element, language, result2.language);
      element.result = {
        language: result2.language,
        // TODO: remove with version 11.0
        re: result2.relevance,
        relevance: result2.relevance
      };
      if (result2.secondBest) {
        element.secondBest = {
          language: result2.secondBest.language,
          relevance: result2.secondBest.relevance
        };
      }
      fire("after:highlightElement", { el: element, result: result2, text });
    }
    function configure(userOptions) {
      options = inherit(options, userOptions);
    }
    const initHighlighting = () => {
      highlightAll();
      deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function initHighlightingOnLoad() {
      highlightAll();
      deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wantsHighlight = false;
    function highlightAll() {
      if (document.readyState === "loading") {
        wantsHighlight = true;
        return;
      }
      const blocks = document.querySelectorAll(options.cssSelector);
      blocks.forEach(highlightElement);
    }
    function boot() {
      if (wantsHighlight)
        highlightAll();
    }
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("DOMContentLoaded", boot, false);
    }
    function registerLanguage(languageName, languageDefinition) {
      let lang = null;
      try {
        lang = languageDefinition(hljs);
      } catch (error$12) {
        error("Language definition for '{}' could not be registered.".replace("{}", languageName));
        if (!SAFE_MODE) {
          throw error$12;
        } else {
          error(error$12);
        }
        lang = PLAINTEXT_LANGUAGE;
      }
      if (!lang.name)
        lang.name = languageName;
      languages[languageName] = lang;
      lang.rawDefinition = languageDefinition.bind(null, hljs);
      if (lang.aliases) {
        registerAliases(lang.aliases, { languageName });
      }
    }
    function unregisterLanguage(languageName) {
      delete languages[languageName];
      for (const alias of Object.keys(aliases)) {
        if (aliases[alias] === languageName) {
          delete aliases[alias];
        }
      }
    }
    function listLanguages() {
      return Object.keys(languages);
    }
    function getLanguage(name) {
      name = (name || "").toLowerCase();
      return languages[name] || languages[aliases[name]];
    }
    function registerAliases(aliasList, { languageName }) {
      if (typeof aliasList === "string") {
        aliasList = [aliasList];
      }
      aliasList.forEach((alias) => {
        aliases[alias.toLowerCase()] = languageName;
      });
    }
    function autoDetection(name) {
      const lang = getLanguage(name);
      return lang && !lang.disableAutodetect;
    }
    function upgradePluginAPI(plugin) {
      if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
        plugin["before:highlightElement"] = (data) => {
          plugin["before:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
      if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
        plugin["after:highlightElement"] = (data) => {
          plugin["after:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
    }
    function addPlugin(plugin) {
      upgradePluginAPI(plugin);
      plugins.push(plugin);
    }
    function removePlugin(plugin) {
      const index = plugins.indexOf(plugin);
      if (index !== -1) {
        plugins.splice(index, 1);
      }
    }
    function fire(event, args) {
      const cb = event;
      plugins.forEach(function(plugin) {
        if (plugin[cb]) {
          plugin[cb](args);
        }
      });
    }
    function deprecateHighlightBlock(el) {
      deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
      deprecated("10.7.0", "Please use highlightElement now.");
      return highlightElement(el);
    }
    Object.assign(hljs, {
      highlight: highlight2,
      highlightAuto,
      highlightAll,
      highlightElement,
      // TODO: Remove with v12 API
      highlightBlock: deprecateHighlightBlock,
      configure,
      initHighlighting,
      initHighlightingOnLoad,
      registerLanguage,
      unregisterLanguage,
      listLanguages,
      getLanguage,
      registerAliases,
      autoDetection,
      inherit,
      addPlugin,
      removePlugin
    });
    hljs.debugMode = function() {
      SAFE_MODE = false;
    };
    hljs.safeMode = function() {
      SAFE_MODE = true;
    };
    hljs.versionString = version;
    hljs.regex = {
      concat,
      lookahead,
      either,
      optional,
      anyNumberOfTimes
    };
    for (const key in MODES) {
      if (typeof MODES[key] === "object") {
        deepFreeze(MODES[key]);
      }
    }
    Object.assign(hljs, MODES);
    return hljs;
  };
  const highlight = HLJS({});
  highlight.newInstance = () => HLJS({});
  var core = highlight;
  highlight.HighlightJS = highlight;
  highlight.default = highlight;
  const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(core);
  const _hoisted_1 = { class: "var-card__title" };
  const _hoisted_2 = { style: { "overflow": "auto" } };
  const _hoisted_3 = ["innerHTML"];
  const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("div", null, null, -1);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "MessageBox",
    props: {
      title: {
        type: String,
        default: "对话标题",
        required: true
      },
      msg: {
        type: String,
        default: "",
        required: true
      }
    },
    setup(__props) {
      const cardProps = __props;
      const drag2 = vue.ref(null);
      const pin = vue.ref(true);
      const fullscreen = vue.ref(false);
      const script = document.createElement("script");
      script.innerHTML = `
function copyText(id) {
 const div = document.getElementById(id)
  navigator.clipboard.writeText(div.innerText).then(() => {
    alert('复制成功')
  }).catch(() => {
    alert('复制失败')
  })
}
`;
      document.body.appendChild(script);
      const msg = vue.computed(() => {
        var _a;
        const marked2 = new Marked(
          markedHighlight({
            langPrefix: "hljs language-",
            highlight(code2, lang) {
              const language = HighlightJS.getLanguage(lang) ? lang : "plaintext";
              const formatCode = HighlightJS.highlight(code2, { language }).value;
              const copyButton = `<div id="${code2.length}" style="display: none">${code2}</div><div style="display: flex; justify-content: space-between;"><button style="color: green; border-width: 0; background-color: transparent; transition: 300ms ease-in-out; outline: none; "  onclick="copyText(${code2.length})">复制代码</button><span>${lang}</span></div>`;
              return copyButton + formatCode;
            }
          })
        );
        const code = (_a = cardProps.msg) == null ? void 0 : _a.replace(/\\n/g, "\n").replace(/\\t/g, "/t").replace(/\\/g, "");
        return marked2.parse(code);
      });
      return (_ctx, _cache) => {
        const _component_var_icon = _IconComponent;
        const _component_var_radio = _RadioComponent;
        const _component_var_button = _ButtonComponent;
        const _component_var_space = _SpaceComponent;
        const _component_var_row = _RowComponent;
        const _component_var_card = _CardComponent;
        const _component_var_drag = _DragComponent;
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createVNode(_component_var_drag, {
            style: { "top": "0", "left": "0" },
            ref_key: "drag",
            ref: drag2,
            disabled: pin.value
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_var_card, {
                style: { "width": "50vw", "overflow": "hidden" },
                floating: fullscreen.value,
                description: cardProps.msg
              }, {
                title: vue.withCtx(() => [
                  vue.createVNode(_component_var_row, {
                    justify: "space-between",
                    align: "end",
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("div", _hoisted_1, vue.toDisplayString(cardProps.title), 1),
                      vue.createVNode(_component_var_space, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_var_radio, {
                            modelValue: pin.value,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pin.value = $event)
                          }, {
                            "unchecked-icon": vue.withCtx(() => [
                              vue.createVNode(_component_var_icon, {
                                name: "pin-off",
                                size: "24px"
                              })
                            ]),
                            "checked-icon": vue.withCtx(() => [
                              vue.createVNode(_component_var_icon, {
                                name: "pin",
                                size: "24px"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"]),
                          vue.createVNode(_component_var_button, {
                            type: "danger",
                            round: "",
                            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close", $event))
                          }, {
                            default: vue.withCtx(() => [
                              vue.createVNode(_component_var_icon, { name: "window-close" })
                            ]),
                            _: 1
                          }),
                          vue.createVNode(_component_var_button, {
                            type: "primary",
                            round: "",
                            onClick: _cache[2] || (_cache[2] = ($event) => fullscreen.value = !fullscreen.value)
                          }, {
                            default: vue.withCtx(() => [
                              vue.createVNode(_component_var_icon, {
                                name: fullscreen.value ? "chevron-down" : "chevron-up"
                              }, null, 8, ["name"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                description: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_2, [
                    vue.createElementVNode("div", {
                      class: "var-card__description",
                      style: { "max-height": "80vh" },
                      innerHTML: msg.value
                    }, null, 8, _hoisted_3)
                  ])
                ]),
                "close-button": vue.withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              }, 8, ["floating", "description"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ]);
      };
    }
  });
  function watchLocationHref(callback) {
    const MutationObserver = window.MutationObserver;
    const getCurrentURL = () => location.href;
    getCurrentURL.previousURL = getCurrentURL();
    const observer = new MutationObserver(() => {
      const currentURL = getCurrentURL();
      if (currentURL !== getCurrentURL.previousURL) {
        getCurrentURL.previousURL = currentURL;
        callback(getCurrentURL.previousURL, currentURL);
      }
    });
    const config = {
      characterData: true,
      subtree: true,
      childList: true,
      attributeFilter: ["value", "placeholder", "aria-label", "data-confirm"]
      // 仅观察特定属性变化
    };
    observer.observe(document.body, config);
  }
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "github",
    setup(__props) {
      const title = vue.ref();
      const content = vue.ref();
      const show = vue.ref(false);
      watchLocationHref((previous, current) => {
        const issuesBox2 = document.getElementsByClassName("js-navigation-container js-active-navigation-container")[0];
        const issuesDivs2 = issuesBox2.children;
        for (let i = 0; i < issuesDivs2.length; i++) {
          const issuesDiv = issuesDivs2[i];
          const firstChild = issuesDiv.firstChild;
          const button2 = document.createElement("button");
          button2.innerHTML = "总结";
          button2.className = "Button--primary Button";
          button2.style.marginLeft = "10px";
          button2.style.display = "inline-block";
          const issuesHref = issuesDiv.getElementsByTagName("a")[0].href;
          try {
            const config = _GM_getValue("config");
            const chatGpt = new ChatGpt({
              baseUrl: config.serviceHost,
              token: config.apiKey,
              model: config.model
            });
            button2.onclick = () => {
              button2.innerText = "加载中...";
              getGithubIssuesContent(issuesHref).then((res) => {
                chatGpt.sendChatWithSteam(res, (responseJson) => {
                  show.value = true;
                  let titleState = 0;
                  let contentState = 0;
                  let msg = " ";
                  responseJson.forEach((item) => {
                    var _a, _b;
                    try {
                      if (item.choices[0].delta.function_call.arguments) {
                        msg += item.choices[0].delta.function_call.arguments;
                        if (titleState === 0) {
                          title.value = (_a = msg.match(/"title": "(.*)/g)) == null ? void 0 : _a[0].replace(/"title": "/g, "").replace(/",/g, "");
                        } else if (msg.match(/",/g)) {
                          titleState = 1;
                        }
                        if (contentState === 0) {
                          content.value = (_b = msg.match(/"content": "(.*)/g)) == null ? void 0 : _b[0].replace(/"content": "/g, "").replace(/",/g, "").slice(0, -1);
                        } else if (msg.match(/}"/g)) {
                          contentState = 1;
                        }
                      }
                    } catch (error2) {
                    }
                  });
                  button2.innerText = "再次总结";
                });
              }).catch((err) => {
                Snackbar$1.error(err);
              });
            };
            issuesDiv.insertBefore(button2, firstChild);
          } catch (error2) {
            Snackbar$1.error("未能获取到配置信息,请在油猴插件列表打开脚本设置后刷新页面");
          }
        }
      });
      const issuesBox = document.getElementsByClassName("js-navigation-container js-active-navigation-container")[0];
      const issuesDivs = issuesBox.children;
      for (let i = 0; i < issuesDivs.length; i++) {
        const issuesDiv = issuesDivs[i];
        const firstChild = issuesDiv.firstChild;
        const button2 = document.createElement("button");
        button2.innerHTML = "总结";
        button2.className = "Button--primary Button";
        button2.style.marginLeft = "10px";
        button2.style.display = "inline-block";
        const issuesHref = issuesDiv.getElementsByTagName("a")[0].href;
        try {
          const config = _GM_getValue("config");
          const chatGpt = new ChatGpt({
            baseUrl: config.serviceHost,
            token: config.apiKey,
            model: config.model
          });
          button2.onclick = () => {
            button2.innerText = "加载中...";
            getGithubIssuesContent(issuesHref).then((res) => {
              chatGpt.sendChatWithSteam(res, (responseJson) => {
                show.value = true;
                let titleState = 0;
                let contentState = 0;
                let msg = " ";
                responseJson.forEach((item) => {
                  var _a, _b;
                  try {
                    if (item.choices[0].delta.function_call.arguments) {
                      msg += item.choices[0].delta.function_call.arguments;
                      if (titleState === 0) {
                        title.value = (_a = msg.match(/"title": "(.*)/g)) == null ? void 0 : _a[0].replace(/"title": "/g, "").replace(/",/g, "");
                      } else if (msg.match(/",/g)) {
                        titleState = 1;
                      }
                      if (contentState === 0) {
                        content.value = (_b = msg.match(/"content": "(.*)/g)) == null ? void 0 : _b[0].replace(/"content": "/g, "").replace(/",/g, "").slice(0, -1);
                      } else if (msg.match(/}"/g)) {
                        contentState = 1;
                      }
                    }
                  } catch (error2) {
                  }
                });
                button2.innerText = "再次总结";
              });
            }).catch((err) => {
              Snackbar$1.error(err);
            });
          };
          issuesDiv.insertBefore(button2, firstChild);
        } catch (error2) {
          Snackbar$1.error("未能获取到配置信息,请在油猴插件列表打开脚本设置后刷新页面");
        }
      }
      return (_ctx, _cache) => {
        return show.value ? (vue.openBlock(), vue.createBlock(_sfc_main$2, {
          key: 0,
          title: title.value,
          msg: content.value,
          onClose: _cache[0] || (_cache[0] = ($event) => show.value = false)
        }, null, 8, ["title", "msg"])) : vue.createCommentVNode("", true);
      };
    }
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const href = vue.ref("github");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(ArrangementToken),
          href.value === "github" ? (vue.openBlock(), vue.createBlock(_sfc_main$1, { key: 0 })) : vue.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const inBrowser = typeof window !== "undefined";
  const supportTouch = inBrowser && "ontouchstart" in window;
  let initiated = false;
  let eventTarget;
  const isMousedown = (eventType) => eventType === "mousedown";
  const isMousemove = (eventType) => eventType === "mousemove";
  const isMouseup = (eventType) => eventType === "mouseup";
  const isUpdateTarget = (eventType) => isMousedown(eventType) || !eventTarget || eventTarget && !eventTarget.dispatchEvent;
  function Touch(target, identifier, mouseEvent) {
    const { clientX, clientY, screenX, screenY, pageX, pageY } = mouseEvent;
    this.identifier = identifier;
    this.target = target;
    this.clientX = clientX;
    this.clientY = clientY;
    this.screenX = screenX;
    this.screenY = screenY;
    this.pageX = pageX;
    this.pageY = pageY;
  }
  function updateTouchList(mouseEvent) {
    const touchList = createTouchList();
    touchList.push(new Touch(eventTarget, 1, mouseEvent));
    return touchList;
  }
  function createTouchList() {
    const touchList = [];
    touchList.item = function(index) {
      return this[index] || null;
    };
    return touchList;
  }
  function getActiveTouches(mouseEvent) {
    const { type } = mouseEvent;
    if (isMouseup(type))
      return createTouchList();
    return updateTouchList(mouseEvent);
  }
  function triggerTouch(touchType, mouseEvent) {
    const { altKey, ctrlKey, metaKey, shiftKey } = mouseEvent;
    const touchEvent = new Event(touchType, { bubbles: true, cancelable: true });
    touchEvent.altKey = altKey;
    touchEvent.ctrlKey = ctrlKey;
    touchEvent.metaKey = metaKey;
    touchEvent.shiftKey = shiftKey;
    touchEvent.touches = getActiveTouches(mouseEvent);
    touchEvent.targetTouches = getActiveTouches(mouseEvent);
    touchEvent.changedTouches = createTouchList();
    eventTarget.dispatchEvent(touchEvent);
  }
  function onMouse(mouseEvent, touchType) {
    const { type, target } = mouseEvent;
    initiated = isMousedown(type) ? true : isMouseup(type) ? false : initiated;
    if (isMousemove(type) && !initiated)
      return;
    if (isUpdateTarget(type))
      eventTarget = target;
    triggerTouch(touchType, mouseEvent);
    if (isMouseup(type))
      eventTarget = null;
  }
  function createTouchEmulator() {
    window.addEventListener("mousedown", (event) => onMouse(event, "touchstart"), true);
    window.addEventListener("mousemove", (event) => onMouse(event, "touchmove"), true);
    window.addEventListener("mouseup", (event) => onMouse(event, "touchend"), true);
  }
  if (inBrowser && !supportTouch) {
    createTouchEmulator();
  }
  vue.createApp(_sfc_main).mount(
    (() => {
      let app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );

})(Vue);