(()=>{"use strict";const t="https://rickandmortyapi.com/api/character/",n=()=>'\n\t<div class="Error404">\n\t\t<h2>Error 404</h2>\n\t</div>\n\t',a={"/":async()=>`\n\t<div class="Characters">\n\t\t${(await(async n=>{const a=n?`${t}${n}`:t;try{const t=await fetch(a);return await t.json()}catch(t){console.log("fetch error",t)}})()).results.map((t=>`\n\t\t\t<article class="Character-item">\n\t\t\t\t<a href="#/${t.id}/">\n\t\t\t\t\t<img src="${t.image}" alt="${t.name}">\n\t\t\t\t\t<h2>${t.name}</h2>\n\t\t\t\t</a>\n\t\t\t</article>\n\t\t`)).join("")}\n\n\t\t\n\t</div>\n\t`,"/:id":()=>'\n\t\t<div class="Character-inner">\n\t\t\t<article class="character-card">\n\t\t\t\t<img src="image" alt="name">\n\t\t\t\t<h2>Name</h2>\n\t\t\t</article>\n\t\t\t<article class="Character-card">\n\t\t\t\t<h3>Episodios:</h3>\n\t\t\t\t<h3>Status:</h3>\n\t\t\t\t<h3>Species:</h3>\n\t\t\t\t<h3>Gender:</h3>\n\t\t\t\t<h3>Origin:</h3>\n\t\t\t\t<h3>Last Location:</h3>\n\t\t\t</article>\n\t\t</div>\n\t\n\t',"/Contact":"Contact"},e=async()=>{const t=document.getElementById("header"),e=document.getElementById("content");t.innerHTML=await'\n\t<div class="Header-main">\n\t\t<div class="Header-logo">\n\t\t\t<h1>\n\t\t\t\t<a href="/">\n\t\t\t\t\t100tifi.co\n\t\t\t\t</a>\n\t\t\t</h1>\n\t\t</div>\n\t\t<div class="Header-nav">\n\t\t\t<a href="#/about/">\n\t\t\t\tAbout\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t';let c=location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",i=await(t=>(console.log(t,t.length),t.length<=3?"/"===t?t:"/:id":`/${t}`))(c);console.log("route",i);let r=a[i]?a[i]:n;console.log(r()),e.innerHTML=await r()};window.addEventListener("load",e),window.addEventListener("hashchange",e)})();