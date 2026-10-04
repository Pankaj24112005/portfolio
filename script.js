const nav=document.querySelector('.nav'),btn=document.querySelector('.menu');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}));
document.getElementById('yr').textContent=new Date().getFullYear();
