function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),l=document.querySelector("body");d.disabled=!0;let a=null,o=null;e.addEventListener("click",(()=>{e.disabled=!0,d.disabled=!1,o=t(),l.style.backgroundColor=o,a=setInterval((()=>{o=t(),l.style.backgroundColor=o}),1e3)})),d.addEventListener("click",(()=>{e.disabled=!1,d.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.f95db286.js.map