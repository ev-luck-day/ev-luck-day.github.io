var cta = 'mainButton';

// var back = 'https://m.bolo2vas14.click/c/n/248034/4847?cid={CLICK_ID}&sc=b';
// var under = 'https://m.bolo2vas14.click/c/n/248034/4847?cid={CLICK_ID}&sc=b';
var urlParams = new URLSearchParams(window.location.search);
var aElements = document.getElementsByTagName('a');
// console.log(aElements)
for (var i = 0; i < aElements.length; i++) {
    var aElement = aElements[i];
    var href = aElement.getAttribute('href');
    if (!aElement.hasAttribute('href')) {
        continue;  // 跳过没有 href 属性的 <a> 标签
    }
    // 在 URL 的查询字符串之前添加一个 "?"
    if (urlParams.toString()) {
        href += (href.includes('?') ? '&' : '?') + urlParams.toString();
    }
    aElement.setAttribute('href', href);
}


if(typeof under!=="undefined"&&under!==null){if(typeof cta!=="undefined"&&cta!==null){document.addEventListener('click',function(event){var target=event.target;while(target){if(target.tagName==='A'&&target.classList.contains(cta)){const linkHref=target.href;event.preventDefault();window.open(linkHref,'_blank');window.location.replace(under);break;}
    target=target.parentNode;}});}else{document.addEventListener('click',function(event){var target=event.target;while(target){if(target.tagName==='A'){const linkHref=target.href;event.preventDefault();window.open(linkHref,'_blank');window.location.replace(under);break;}
    target=target.parentNode;}});}}
if (typeof back !== "undefined" && back !== null) {
    !(function () {
        var t;
        try {
            const URL = window.location.href.split(/[#]/)[0];
            for (t = 0; 3 > t; ++t) {
                history.pushState({}, '', URL + '#');
            }
            window.addEventListener('popstate', function (event) {
                console.log('popstate event triggered'); // 添加日志以确认事件触发
                if (event.state) {
                    location.replace(back);
                }
            });
        } catch (o) {
            console.log(o);
        }
    })();
}function getURLParameter_location(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(location.search)||[,null])[1]||"")}function getURLParameter_hash(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(location.hash)||[,null])[1]||"")}function getURLParameter(e){var a=null;return getURLParameter_hash(e)?getURLParameter_hash(e):getURLParameter_location(e)} if( getURLParameter('alert') ){ setTimeout( function(){ alert( getURLParameter('alert') ) }, 500 ); }