import{a as m,i as c,S as u}from"./assets/vendor-CZCqCKWq.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(s){const l="https://pixabay.com/api/",t={key:"33135653-4734ab6feb6e20c316e4b7aea",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"};return m.get(l,{params:t}).then(a=>a.data.hits)}function p(s){const{webformatURL:l,largeImageURL:t,tags:a,likes:e,views:r,comments:o,downloads:g}=s;return`<li class="gallery-item">
            <a class="gallery-link" href="${t}" onclick="return false;">
              <img
                class="gallery-image"
                src="${l}"
                alt="${a}"
              />
            </a>
            <div class="gallery-wrapper">
              <ul class="gallery-group">
                <li class="gallery-list">
                  <h2 class="gallery-subtitle">Likes</h2>
                  <p class="gallery-txt">${e}</p>
                </li>
                <li class="gallery-list">
                  <h2 class="gallery-subtitle">Views</h2>
                  <p class="gallery-txt">${r}</p>
                </li>
                <li class="gallery-list">
                  <h2 class="gallery-subtitle">Comments</h2>
                  <p class="gallery-txt">${o}</p>
                </li>
                <li class="gallery-list">
                  <h2 class="gallery-subtitle">Downloads</h2>
                  <p class="gallery-txt">${g}</p>
                </li>
              </ul>
            </div>
          </li>`}function y(s){return s.map(p).join("")}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let n;i.form.addEventListener("submit",h);function h(s){s.preventDefault(),f();const l=s.target.elements.search.value.trim();i.gallery.innerHTML="",d(l).then(t=>{if(t.length===0)c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const a=y(t);i.gallery.innerHTML=a,n?n.refresh():n=new u(".gallery a")}}).catch(t=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(t)}).finally(L),s.target.reset()}function f(){i.loader.classList.remove("hidden"),i.gallery.classList.add("hidden")}function L(){i.loader.classList.add("hidden"),i.gallery.classList.remove("hidden")}
//# sourceMappingURL=index.js.map
