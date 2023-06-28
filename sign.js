// ==UserScript==
// @name         Sign Script
// @namespace    sign
// @version      0.1
// @description  网站签到
// @author       You
// @include      http*://juejin.cn/user/center/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  if (findUrl("juejin.cn/user/center/")) {
    const signbtn = document.getElementsByClassName("signin btn")[0];
    if (signbtn.innerText.indexOf("立即签到") !== -1) {
      signbtn.click();
    }
    return;
  }
})();

function findUrl(x) {
  return window.location.href.indexOf(x) !== -1;
}
