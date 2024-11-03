import{i as a,S as g}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="46873247-b56a65fb4c08f29194ce1856e",y="https://pixabay.com/api/";async function h(n,r=1,o=50){const s=`${y}?key=${p}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${o}&page=${r}`;try{console.log("Fetching URL:",s);const e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");const t=await e.json();return t.hits.length===0&&a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),t}catch(e){throw a.error({title:"Error",message:"Failed to fetch images from Pixabay API"}),e}}function L(n){const r=document.getElementById("gallery"),o=n.map(({webformatURL:e,largeImageURL:t,tags:i,likes:d,views:m,comments:f,downloads:u})=>`
    <a href="${t}" class="gallery-item">
      <img src="${e}" alt="${i}" />
      <div class="info">
        <p>Likes: ${d}</p>
        <p>Views: ${m}</p>
        <p>Comments: ${f}</p>
        <p>Downloads: ${u}</p>
      </div>
    </a>
  `).join("");r.innerHTML=o,new g(".gallery-item").refresh()}const c=document.getElementById("search-form"),$=document.getElementById("gallery"),l=document.getElementById("loader");c.addEventListener("submit",async n=>{n.preventDefault();const r=c.elements.query.value.trim();if(r===""){iziToast.warning({title:"Warning",message:"Please enter a search query."});return}$.innerHTML="",l.classList.remove("hidden");try{const o=await h(r);L(o.hits)}catch(o){console.error("Error fetching images:",o)}finally{l.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
