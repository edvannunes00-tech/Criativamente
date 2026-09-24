(function(){
 var mbtn=document.getElementById('mbtn'), m=document.getElementById('mmenu');
 mbtn.addEventListener('click',function(e){
  e.stopPropagation();
  m.style.display = m.style.display==='none' ? 'block' : 'none';
 });
 m.addEventListener('click',function(e){if(e.target.tagName==='A')m.style.display='none'});
 document.addEventListener('click',function(e){
  if(m.style.display!=='none' && !m.contains(e.target) && e.target!==mbtn && !mbtn.contains(e.target)) m.style.display='none';
 });
 document.addEventListener('keydown',function(e){if(e.key==='Escape')m.style.display='none'});
})();
(function(){
 var modal=document.getElementById('planosModal');
 var open=function(){modal.style.display='flex'};
 var close=function(){modal.style.display='none'};
 document.getElementById('planosBtn').addEventListener('click',open);
 document.getElementById('planosClose').addEventListener('click',close);
 modal.addEventListener('click',function(e){if(e.target===modal)close()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
})();