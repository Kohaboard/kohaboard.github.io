(function(){function d(){return new Promise(n=>{let r=!1;try{let t=document.createElement("div");t.innerHTML="&nbsp;",t.className="adsbox",document.body.appendChild(t),0===t.offsetHeight&&(r=!0),t.remove()}catch(t){r=!0}let t=new XMLHttpRequest;t.open("GET","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",!0),t.onreadystatechange=function(){4===t.readyState&&(0===t.status&&(r=!0),n(r))},t.send()})}function a(){return new Promise(n=>{let r=!1,t=navigator.userAgent;(navigator.brave&&"function"==typeof navigator.brave.isBrave||t.includes("YaBrowser")||t.includes("SamsungBrowser")||t.includes("Kiwi")||t.includes("DuckDuckGo"))&&(r=!0),t.includes("Firefox")&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(r=!0),n(r)})}function e(){document.body.style.overflow="hidden",document.body.style.pointerEvents="none",window.addEventListener("keydown",n=>n.preventDefault())}function o(){let n=document.createElement("div");n.id="blocked-browser-message",n.style.cssText="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.9);display: flex;justify-content: center;align-items: center;z-index: 9999;color: white;font-family: 'Poppins', sans-serif;",n.innerHTML='<div style="background: #1c1c1c; padding: 30px; border-radius: 12px; text-align: center; max-width: 760px;"><img src="warning.svg" alt="Blocked Browser" style="width: 80px; margin-bottom: 5px;"><h2 style="margin-bottom: 10px;">AdBlock Terdeteksi!</h2><p style="font-size: 16px; margin-bottom: 20px;">Terima kasih telah mengunjungi situs kami, sistem mendeteksi Anda menggunakan AdBlock, mungkin bahkan dari browser dengan fitur bawaan (jika Anda menggunakan Brave maka akan tetap seperti ini). Sebagai usaha pribadi, kami bergantung pada pendapatan iklan untuk terus beroperasi. Kami mohon dengan hormat untuk menonaktifkan AdBlock Anda atau mempertimbangkan menggunakan browser tanpa fitur pemblokiran iklan bawaan saat mengunjungi situs kami. Dukungan Anda sangat berharga bagi kami.</p></div>',document.body.appendChild(n),e()}async function c(){(await a()||await d())&&o()}c()})();