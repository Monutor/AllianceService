(()=>{var e={721:()=>{try{new gianniAccordion({elements:".basic-competencies__item",trigger:"[data-accordion-element-trigger]",content:"[data-accordion-element-content]"})}catch(e){}},362:()=>{var e=new Splide(".hero-slider",{autoplay:!0,type:"loop"});e.on("pagination:mounted",(function(e){e.list.classList.add("hero-pagination")})),e.mount(),new Splide(".experience-implementation",{autoplay:!0,type:"loop",gap:"1.6rem",perPage:3,focus:"center",pagination:!1,autoWidth:!0,breakpoints:{960:{perPage:2,focus:!1,arrows:!1}}}).mount(),new Splide(".partners__slider",{drag:"free",type:"loop",gap:"1.6rem",perPage:3,focus:"center",pagination:!1,arrows:!1,autoScroll:{speed:1},breakpoints:{960:{gap:"0.4rem"}}}).mount(window.splide.Extensions),new Splide(".partners__slider--reverse",{drag:"free",type:"loop",gap:"1.6rem",perPage:3,focus:"center",pagination:!1,arrows:!1,autoScroll:{speed:-1},breakpoints:{960:{gap:"0.4rem"}}}).mount(window.splide.Extensions)},158:()=>{try{var e=$(".js-section-2-tabs a"),t=$(".js-section-2-content"),n=0;e.on("click",(function(o){o.preventDefault();var i=$(this),d=i.data("index");n!==d&&($(e[n]).removeClass("active"),$(t[n]).jqt().exit(),i.addClass("active"),$(t[d]).jqt({delay:200,display:"flex"}).enter(),n=d)}))}catch(e){}},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function r(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(d(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),r())}),!0),r(),e.addEventListener("focus",(function(e){var n,o,a;d(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(a=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;d(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t,o,i,d;o=null===(t=document)||void 0===t?void 0:t.querySelector("[data-burger]"),i=document.querySelector(".mobile-menu"),d=document.querySelector(".mobile-menu__close"),null==o||o.addEventListener("click",(function(t){i.classList.add("mobile-menu--active"),i.classList.contains("mobile-menu--active")&&(function(){var t,n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),o=window.scrollY,i="".concat(window.innerWidth-e.bodyEl.offsetWidth,"px");e.htmlEl.style.scrollBehavior="none",n.forEach((function(e){e.style.paddingRight=i})),e.bodyEl.style.paddingRight=i,e.bodyEl.classList.add("dis-scroll"),e.bodyEl.dataset.position=o,e.bodyEl.style.top="-".concat(o,"px")}(),d.addEventListener("click",(function(){i.classList.remove("mobile-menu--active"),function(){var t,n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),o=(document.body,parseInt(e.bodyEl.dataset.position,10));n.forEach((function(e){e.style.paddingRight="0px"})),e.bodyEl.style.paddingRight="0px",e.bodyEl.style.top="auto",e.bodyEl.classList.remove("dis-scroll"),window.scroll({top:o,left:0}),e.bodyEl.removeAttribute("data-position"),e.htmlEl.style.scrollBehavior="smooth"}()})))})),n(362),n(721),n(158)})()})();