document.getElementById('mbtn').addEventListener('click',function(){
 var m=document.getElementById('mmenu');
 m.style.display = m.style.display==='none' ? 'block' : 'none';
});
(function(){
 var modal=document.getElementById('planosModal');
 var open=function(){modal.style.display='flex'};
 var close=function(){modal.style.display='none'};
 document.getElementById('planosBtn').addEventListener('click',open);
 document.getElementById('planosClose').addEventListener('click',close);
 modal.addEventListener('click',function(e){if(e.target===modal)close()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
})();