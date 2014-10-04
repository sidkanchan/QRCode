// ==UserScript==
// @name        QRCode
// @namespace   http://www.webmonkey.com
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

if (window.top != window.self) //don't run on frames or iframes
{
	return;
}

console.log("Begin QRCode!");
var currentWebsite = document.URL;
console.log("Current Website: ", currentWebsite);
var qrIMG   = 'http://chart.googleapis.com/chart?chl='
+ currentWebsite
+ '&chld=M%7C0&cht=qr&chs=125x125';

var qrCode = document.createElement("IMG");
qrCode.style.position = 'fixed';
qrCode.style.bottom = '25px';
qrCode.style.right = '10px';
qrCode.style.zIndex = "9000"
qrCode.src = qrIMG;
console.log("qrCode = ", qrCode);

body = document.getElementsByTagName('body')[0];

window.addEventListener("load", LocalMain, false);
window.addEventListener("scroll", removeQR, false);
window.addEventListener("click", removeQR, false);

function LocalMain() {
	console.log("Enter LocalMain");
	body.appendChild(qrCode);
}

function removeQR() {
	console.log("Enter removeQR");
	body.removeChild(qrCode);
}
