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
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.classList.toggle('is-open', open);
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ menu.classList.remove('open'); burger.setAttribute('aria-expanded','false'); });
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

  // gallery filters
  var filters = document.querySelectorAll('.filters button');
  var items = document.querySelectorAll('.masonry .ph');
  filters.forEach(function(btn){
    btn.addEventListener('click', function(){
      filters.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.dataset.filter;
      items.forEach(function(it){
        it.style.display = (cat === 'todos' || it.dataset.cat === cat) ? '' : 'none';
      });
    });
  });

  // lightbox
  var lightbox = document.getElementById('lightbox');
  if(lightbox){
    var lbInner = lightbox.querySelector('.lb-inner');
    items.forEach(function(it){
      it.addEventListener('click', function(){
        lbInner.innerHTML = it.outerHTML;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function(e){
      if(e.target === lightbox || e.target.closest('.lb-close')) lightbox.classList.remove('open');
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

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
