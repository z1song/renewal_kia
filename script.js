function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/

          elmnt.removeAttribute("w3-include-html");
          includeHTML();

          // -------------------------------------------------------------------------

          var _open2 = document.querySelector("#navigation_open");
          _open2.addEventListener("click", function () {
            document.querySelector('#navigation').style.width = "100%";
          });

          var _close2 = document.querySelector("#navigation_close");
          _close2.addEventListener("click", function () {
            document.querySelector('#navigation').style.width = "0";
          });

          // 네비오픈 피씨
          var _open1 = document.querySelector("#navigation_open_pc");
          _open1.addEventListener("click", function () {
            document.querySelector('#navigation').style.width = "50%";
            document.querySelector('#navi-bg-pc').style.display = "block";
          });

          var _close1 = document.querySelector("#navigation_close");
          _close1.addEventListener("click", function () {
            document.querySelector('#navigation').style.width = "0";
            document.querySelector('#navi-bg-pc').style.display = "none";
          });

          // -------------------------------------------------------------------------

          // ---------------------------------
        }


        // -----------------------------footer 공지사항------------------------------
        const outer = document.querySelector('.outer');
        const innerList = document.querySelector('.inner-list');
        const inners = document.querySelectorAll('.inner');
        let currentIndex = 0; // 현재 슬라이드 화면 인덱스

        inners.forEach((inner) => {
          inner.style.height = "100px"; // inner의 width를 모두 outer의 width로 만들기
        })

        innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

        /*
          버튼에 이벤트 등록하기
        */
        const buttonLeft = document.querySelector('.button-left');
        const buttonRight = document.querySelector('.button-right');

        buttonLeft.addEventListener('click', () => {
          currentIndex--;
          currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
          innerList.style.marginTop = `-${outer.clientHeight * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
          clearInterval(interval); // 기존 동작되던 interval 제거
          interval = getInterval(); // 새로운 interval 등록
        });

        buttonRight.addEventListener('click', () => {
          currentIndex++;
          currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
          innerList.style.marginTop = `-${outer.clientHeight * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
          clearInterval(interval); // 기존 동작되던 interval 제거
          interval = getInterval(); // 새로운 interval 등록
        });

        /*
          주기적으로 화면 넘기기
        */
        const getInterval = () => {
          return setInterval(() => {
            currentIndex++;
            currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
            innerList.style.marginTop = `-${outer.clientHeight * currentIndex}px`;
          }, 2000);
        }

        let interval = getInterval(); // interval 등록
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      // -------------------------------------------------------------------------
      // -------------------------------------------------------------------------
      return;
    }
  }
};



// --------------------------nav---------------------------
function show() {
  document.getElementById('sidebar').classList.toggle('act');
}
