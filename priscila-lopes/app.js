(function(){
  // header solid on scroll
  var top = document.querySelector('.top');
  if(top){
    var onScroll = function(){
      if(window.scrollY > 40){ top.classList.add('solid'); top.classList.remove('transparent'); }
      else if(top.dataset.transparent === 'true'){ top.classList.remove('solid'); top.classList.add('transparent'); }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  // mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if(burger && menu){
    burger.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ menu.classList.remove('open'); burger.classList.remove('is-open'); burger.setAttribute('aria-expanded','false'); });
    });
  }

  // footer year
  var yr = document.getElementById('yr');
  if(yr) yr.textContent = new Date().getFullYear();

  // FAQ accordion
  document.querySelectorAll('.faq .q button').forEach(function(btn){
    btn.addEventListener('click', function(){
      var q = btn.closest('.q');
      var a = q.querySelector('.a');
      var isOpen = q.classList.contains('open');
      q.closest('.faq').querySelectorAll('.q.open').forEach(function(o){
        o.classList.remove('open');
        o.querySelector('.a').style.maxHeight = null;
      });
      if(!isOpen){
        q.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // popup "Sobre mim" (mobile)
  var sobreAbrir = document.getElementById('sobreAbrir');
  var sobreModal = document.getElementById('sobreModal');
  var sobreModalClose = document.getElementById('sobreModalClose');
  var sobreTexto = document.getElementById('sobreTexto');
  var sobreModalTexto = document.getElementById('sobreModalTexto');
  function abrirSobreModal(){
    if(!sobreModal) return;
    if(sobreModalTexto && sobreTexto) sobreModalTexto.innerHTML = sobreTexto.innerHTML;
    sobreModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function fecharSobreModal(){
    if(!sobreModal) return;
    sobreModal.classList.remove('open');
    document.body.style.overflow = '';
  }
  if(sobreAbrir) sobreAbrir.addEventListener('click', abrirSobreModal);
  if(sobreModalClose) sobreModalClose.addEventListener('click', fecharSobreModal);
  if(sobreModal) sobreModal.addEventListener('click', function(e){ if(e.target === sobreModal) fecharSobreModal(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') fecharSobreModal(); });

  // reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && reveals.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:.15});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }
})();
