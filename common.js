(function(){
var home=document.body.dataset.home==='1'?'':'index.html';
var h=document.createElement('header');h.className='hd';
h.innerHTML='<a class="brand" href="index.html">Photo <i>Live</i></a><button class="burger" aria-label="Меню">Меню</button><nav class="menu"><a href="'+home+'#services">Услуги</a><a href="'+home+'#works">Работы</a><a href="'+home+'#album">QR-альбом</a><a href="'+home+'#contact">Контакты</a><a class="wa" href="https://wa.me/77715937551" target="_blank" rel="noopener">WhatsApp</a></nav>';
document.body.prepend(h);
var m=h.querySelector('.menu');
h.querySelector('.burger').onclick=function(){m.classList.toggle('o')};
m.addEventListener('click',function(e){if(e.target.tagName==='A')m.classList.remove('o')});
function sc(){h.classList.toggle('s',window.scrollY>40)}sc();addEventListener('scroll',sc,{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
})();
// greeting by occasion (Kazakh)
window.GREET={toy:'Той құтты болсын!',kyz:'Қыз ұзату құтты болсын!',tusau:'Тұсау кесер құтты болсын!',jub:'Мерейтой құтты болсын!'};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
// builds a printable table card with a real QR
window.buildCard=function(el,o){
var url=new URL('album.html',location.href);
url.search='?n='+encodeURIComponent(o.names)+'&d='+encodeURIComponent(o.date||'')+'&o='+o.occ;
el.innerHTML='<div class="tc"><div class="tc-in"><div class="band"></div><div class="tc-k">'+esc(GREET[o.occ]||GREET.toy)+'</div><div class="tc-names">'+esc(o.names)+'</div>'+(o.date?'<div class="tc-date">'+esc(o.date)+'</div>':'')+'<div class="tc-w">Қош келдіңіздер!</div><div class="tc-q"></div><div class="tc-s">Бір сәтті түсіріп, бізбен бөлісіңіз</div><div class="tc-r">Наведите камеру телефона</div><div class="band"></div></div></div>';
new QRCode(el.querySelector('.tc-q'),{text:url.href,width:168,height:168,colorDark:'#2a2017',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});
return url.href;
};
