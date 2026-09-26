(function(){
 var b=document.getElementById('burger'),m=document.getElementById('menu');
 function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',String(o))}
 b.addEventListener('click',function(e){e.stopPropagation();set(!m.classList.contains('open'))});
 m.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
 document.addEventListener('click',function(e){if(m.classList.contains('open')&&!m.contains(e.target))set(false)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
 document.querySelectorAll('.q button').forEach(function(btn){btn.addEventListener('click',function(){
  var q=btn.parentElement,a=q.querySelector('.a'),was=q.classList.contains('open');
  document.querySelectorAll('.q').forEach(function(x){x.classList.remove('open');x.querySelector('.a').style.maxHeight=0});
  if(!was){q.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
 })});
 document.getElementById('yr').textContent=new Date().getFullYear();
})();
