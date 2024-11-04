// 语言字典
const lang = {
    bn: {
        'title': 'দ্রুত গেমিং রোমাঞ্চের জন্য প্রস্তুত?',
        'body-title': 'দ্রুত গেমিং রোমাঞ্চের জন্য প্রস্তুত?',
        'body-content': 'উত্তেজনাপূর্ণ মিনি-গেমগুলির একটি বিশ্ব আবিষ্কার করুন। কাজ করার পরে ছোট বিরতি বা উইন্ড ডাউনের জন্য উপযুক্ত। 18+ শুধুমাত্র - শুধুমাত্র আপনার জন্য উপযুক্ত গেমিং অভিজ্ঞতা!',
        'body-click-1': 'এখন খেলা যাক!',
        'body-click-2': 'হয়তো পরে',
    },
    en: {
        'title': 'Ready for Quick Gaming Thrills?',
        'body-title': 'Ready for Quick Gaming Thrills?',
        'body-content': 'Discover a world of exciting mini-games. Perfect for short breaks or winding down after work. 18+ only -\n' +
            '    experience gaming tailored just for you!',
        'body-click-1': 'Let\'s Play Now!',
        'body-click-2': ' Maybe later',
    },
}
// 语言设置参数
var lang_key = '';

// 语言切换函数
function changeLang() {
    var a = document.querySelectorAll('[lang]');
    a.forEach(function (item) {
        if (item.tagName === 'HTML') {

        } else {
            var key = item.getAttribute("lang");
            item.innerHTML = lang[lang_key][key];
        }
    });
}

// 获取浏览器默认语言
let lan = navigator.systemLanguage || navigator.language;
if (lan.toLowerCase().indexOf('en') !== -1) {
    lang_key = 'en';
} else {
    lang_key = 'bn';
    changeLang();
}