const t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.body};let o=null;function n(o,n){t.startButton.disabled=o,t.stopButton.disabled=n}t.stopButton.disabled=!0,t.startButton.addEventListener("click",(function(){n(!0,!1),o=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopButton.addEventListener("click",(function(){clearInterval(o),n(!1,!0)}));
//# sourceMappingURL=01-color-switcher.b1b38414.js.map