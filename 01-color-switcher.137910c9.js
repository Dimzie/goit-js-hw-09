const t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.body};id=null,t.stopButton.disabled=!0,t.startButton.addEventListener("click",(function(){t.startButton.disabled=!0,t.stopButton.disabled=!1,id=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopButton.addEventListener("click",(function(){clearInterval(id),t.startButton.disabled=!1,t.stopButton.disabled=!0}));
//# sourceMappingURL=01-color-switcher.137910c9.js.map