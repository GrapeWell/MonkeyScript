// ==UserScript==
// @name         setCookie
// @namespace    autoSetCookie
// @version      0.1
// @description  自动添加cookie
// @author       You
// @match        http*://localhost:8000/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let cookie = document.cookie;
  if (cookie.indexOf("TIC_ID") !== -1) {
    return;
  } else {
    document.cookie = `TIC_ID=WKV25HM2QEPM7K3IAWNUCWJGPXADOYEMVXY7DIPXAISWF3EMDI6QVV5OXLBMMZZA3KNCFLCTSYLY4SGP7ADCIRUGIFA5XEFGRZARQAAH2GHKHN5EUOVS5KCG3PM6YR5CZEWWUTNLNCF6O2QM646YYYEPZG2ZF7FEPZMQ7YEZG25CA2TIM7TPDPGDRH2XI6NTC43J2QGKAVBDIHWDSVKTTLRL3NVFLE6ELG4BJ3JTOP54W4VD5XSY22EEPPH42P46KG22ECJWYIVM56KYH73FDQLHQWBIB4PZT4YGCQZ5YGVTMVHEXLVDU54QXIQTAZOUHTVJGNZVDO4BLKUOBFRQDLLKQ44VWRHX37EVCKOCIQISY52MBOGL6LNQJ5ABOAEKTSU5HUOUOTXVO2RVVY64X2FORCH6OAA4R7IKSULPOPKVHQNP75UKYXIWKVOQDTOUME3SXUIIEUHA7NISXDIE6OK4IR4ZGKQ7GUUPWV5TJPYKWY4UZBESGWPN6A2M5UZSQUPSK6YX6MDJLV3GY7SQ74Z44GMWPIHJLM66XLJOUYERJ42NNS7UNT7CQYE6PPVQH6FXHM6JSYGDM3LTPM56GTI7OK66CHBO7XCZ6HWFH6VG6R274P2TZSVVC4L4GIH5; expires=${getExpire()}; path=/`;
  }
})();

function getExpire() {
  let currentDate = new Date();

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = currentDate.getUTCDate();
  let month = currentDate.getUTCMonth();
  let year = currentDate.getUTCFullYear();
  let hours = currentDate.getUTCHours() + 8;
  let minutes = currentDate.getUTCMinutes();
  let seconds = currentDate.getUTCSeconds();

  // 将小时增加两个小时
  hours += 2;

  let utcString =
    dayOfWeek[currentDate.getUTCDay()] +
    ", " +
    (day < 10 ? "0" + day : day) +
    " " +
    monthNames[month] +
    " " +
    year +
    " " +
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    " UTC";
  return utcString;
}
