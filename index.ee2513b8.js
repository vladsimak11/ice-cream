!function(){var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),function(){var e="mobile-menu--hidden",t=document.querySelector("[data-menu-open]"),o=document.querySelector("[data-menu-close]"),n=document.querySelector("[data-mobile-menu]"),a=document.querySelector("[data-menu-nav]");function c(){var o=!n.classList.toggle(e);t.setAttribute("aria-expanded",o),toggleScroll(o)}t.addEventListener("click",c),o.addEventListener("click",c),Array.from(a.children).forEach((function(e){e.addEventListener("click",c)})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(o){o.matches&&!n.classList.contains(e)&&(n.classList.add(e),t.setAttribute("aria-expanded",!1),toggleScroll(false))}))}(),window.onscroll=function(){return e=document.querySelector("[data-header]"),t=e.offsetHeight,void(window.pageYOffset>t?e.classList.add("header--no-transparency"):e.classList.remove("header--no-transparency"));var e,t};new Swiper(".swiper",{direction:"vertical",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})}();
//# sourceMappingURL=index.ee2513b8.js.map
