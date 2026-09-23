(function(){
 // Temas derivados de sites reais (cores e fontes lidas do código). Ver _referencias/PADRAO-DERIVADO.md
 var T={
  feminino:{fonts:'family=Lora:wght@400;500&family=Nunito+Sans:wght@300;400;600;700',vars:{'--bg':'#F8F4EF','--alt':'#F0E9E3','--surface':'#FFFFFF','--text':'#302621','--title':'#302621','--accent':'#D8B8A1','--on-accent':'#302621','--dark':'#302621','--on-dark':'#F8F4EF','--star':'#B89560','--display':"'Lora',serif",'--body':"'Nunito Sans',sans-serif",'--dw':'400','--r':'2px','--br':'2px'}},
  buffet:{fonts:'family=Nunito:wght@400;700;800',vars:{'--bg':'#FFF6E9','--alt':'#FFFFFF','--surface':'#FFFFFF','--text':'#333333','--title':'#2F216E','--accent':'#FE6D63','--on-accent':'#2F216E','--dark':'#2F216E','--on-dark':'#FFF6E9','--star':'#E8A317','--display':"'Nunito',sans-serif",'--body':"'Nunito',sans-serif",'--dw':'800','--r':'10px','--br':'10px'}},
  pet:{fonts:'family=Montserrat:wght@400;600;700',vars:{'--bg':'#FFFFFF','--alt':'#F5F5F5','--surface':'#FFFFFF','--text':'#555555','--title':'#222222','--accent':'#7EB339','--on-accent':'#1E2A0E','--dark':'#222222','--on-dark':'#FFFFFF','--star':'#E8A317','--display':"'Montserrat',sans-serif",'--body':"'Montserrat',sans-serif",'--dw':'600','--r':'8px','--br':'999px'}},
  odonto:{fonts:'family=Roboto:wght@400;500;700',vars:{'--bg':'#FFFFFF','--alt':'#E9E9E9','--surface':'#FFFFFF','--text':'#444444','--title':'#166C67','--accent':'#166C67','--on-accent':'#FFFFFF','--dark':'#166C67','--on-dark':'#FFFFFF','--star':'#E8A317','--display':"'Roboto',sans-serif",'--body':"'Roboto',sans-serif",'--dw':'700','--r':'4px','--br':'4px'}},

  academia:{fonts:'family=Oswald:wght@400;500;600;700&family=Inter:wght@400;600',vars:{'--bg':'#FFFFFF','--alt':'#F2F2F2','--surface':'#FFFFFF','--text':'#3A3A3A','--title':'#141414','--accent':'#E2211C','--on-accent':'#FFFFFF','--dark':'#141414','--on-dark':'#FFFFFF','--star':'#E2211C','--display':"'Oswald',sans-serif",'--body':"'Inter',sans-serif",'--dw':'600','--r':'2px','--br':'2px','--btn-tt':'uppercase'}},
  musculacao:{fonts:'family=Montserrat:wght@400;600;700;800',vars:{'--bg':'#FFFFFF','--alt':'#F4EDE4','--surface':'#FFFFFF','--text':'#2A2F31','--title':'#161515','--accent':'#FF6101','--on-accent':'#FFFFFF','--dark':'#161515','--on-dark':'#FFFFFF','--star':'#FF6101','--display':"'Montserrat',sans-serif",'--body':"'Montserrat',sans-serif",'--dw':'700','--r':'2px','--br':'2px','--btn-tt':'none'}},
  // Escuro, a pedido do Edvan p/ estes 2 leads. Referências reais: Alliance BJJ (preto, Oswald, foto com overlay escuro, botão pílula) e Smart Fit (preto, amarelo, headline branca enorme).
  academia_dark:{fonts:'family=Oswald:wght@400;500;600;700&family=Inter:wght@400;600',vars:{'--bg':'#0E0E0E','--alt':'#181818','--surface':'#161616','--text':'#C9C9C9','--title':'#FFFFFF','--accent':'#E2211C','--on-accent':'#FFFFFF','--dark':'#000000','--on-dark':'#FFFFFF','--star':'#E2211C','--display':"'Oswald',sans-serif",'--body':"'Inter',sans-serif",'--dw':'600','--r':'14px','--br':'999px','--btn-tt':'uppercase'}},
  // Identidade própria da Esparta Jiu-Jitsu, definida pelo Edvan: Roboto Slab nos títulos (incl. herói), Montserrat no menu/labels/botões, Inter no texto corrido.
  esparta_dark:{fonts:'family=Roboto+Slab:wght@600;700;800&family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;700',vars:{'--bg':'#050505','--alt':'#111111','--surface':'#111111','--text':'#B7B7B7','--title':'#F5F5F5','--accent':'#C9151E','--on-accent':'#F5F5F5','--dark':'#000000','--on-dark':'#F5F5F5','--star':'#C9151E','--display':"'Roboto Slab',serif",'--body':"'Inter',sans-serif",'--display-hero':"'Roboto Slab',serif",'--label-font':"'Montserrat',sans-serif",'--dw':'800','--r':'10px','--br':'999px','--btn-tt':'uppercase'}},
  musculacao_dark:{fonts:'family=Montserrat:wght@400;600;700;800;900',vars:{'--bg':'#0A0A0A','--alt':'#161616','--surface':'#121212','--text':'#C4C4C4','--title':'#FFFFFF','--accent':'#FFC409','--on-accent':'#0A0A0A','--dark':'#000000','--on-dark':'#FFFFFF','--star':'#FFC409','--display':"'Montserrat',sans-serif",'--body':"'Montserrat',sans-serif",'--dw':'800','--r':'14px','--br':'999px','--btn-tt':'none'}}
 };
 var L=window.LEAD,th=T[L.tema]||T.feminino,root=document.documentElement.style;
 Object.keys(th.vars).forEach(function(k){root.setProperty(k,th.vars[k])});
 var isDark=/_dark$/.test(L.tema); if(isDark){root.setProperty('--line','rgba(255,255,255,.16)'); document.documentElement.classList.add('is-dark');}
 if(L.accent)root.setProperty('--accent',L.accent);
 document.getElementById('gf').href='https://fonts.googleapis.com/css2?'+th.fonts+'&display=swap';
 document.title=L.tituloAba||('Prévia — '+L.nome);
 if(L.favicon){var lk=document.createElement('link');lk.rel='icon';lk.href=L.favicon;document.head.appendChild(lk);}
 var esc=function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')};
 var wa='https://wa.me/'+L.whatsapp.numero+'?text='+encodeURIComponent(L.whatsapp.msg||'Olá! Vim pelo site.');
 var cta=L.cta||'Agendar', cta2=L.cta2||'Ver trabalhos';
 var stars='★★★★★', N=L.nota, lab=L.rotulos||{};
 var WAI='<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.3.4c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.4.1.3.1.8-.1 1.4z"/></svg>';
 var h='';
 var navLinks='<a href="#servicos">'+esc(lab.servicos||'Serviços')+'</a>'+
  (L.equipe?'<a href="#equipe">Equipe</a>':'')+
  (L.mvv||L.valores?'<a href="#valores">Valores</a>':'')+
  '<a href="#avaliacoes">Avaliações</a>'+
  '<a href="#contato">Contato</a>';
 h+='<header><div class="w"><a class="logo" href="#">'+(L.logo?'<img class="logo-img" src="'+L.logo+'" alt="">':'')+'<span>'+esc(L.nome)+'<small>'+esc(L.tagline)+'</small></span></a><nav>'+navLinks+'</nav><a class="btn b1" href="#contato">'+esc(cta)+'</a><a class="burger" href="#" aria-label="Menu"><i></i></a></div></header><main>';
 var dk=/_dark$/.test(L.tema);
 h+='<section class="hero'+(dk?' hero-dk':'')+'" style="padding-top:0">'+(dk&&(L.watermark||L.logo)?'<img class="hero-mark" src="'+(L.watermark||L.logo)+'" alt="">':'')+'<div class="w rv-hero"><div><div class="kick">'+esc(L.kicker)+'</div><h1>'+esc(L.h1)+'</h1><p class="lead">'+esc(L.sub)+'</p><div class="ctas"><a class="btn b1" href="'+wa+'">'+esc(L.ctaWhats||'Falar pelo WhatsApp')+'</a><a class="btn b2" href="#galeria">'+esc(cta2)+'</a></div></div><div><div class="ph"'+(L.fotos.hero&&L.fotos.hero.ratio?' style="aspect-ratio:'+L.fotos.hero.ratio+'"':'')+'>'+(L.fotos.hero&&L.fotos.hero.src?'<img src="'+L.fotos.hero.src+'" style="object-position:'+(L.fotos.hero.pos||'50% 50%')+';object-fit:'+(L.fotos.hero.fit||'cover')+'" alt="">':'<div class="ph-empty">Foto do espaço/equipe<br>(a inserir)</div>')+'</div>'+(L.fotos.hero&&L.fotos.hero.legenda?'<div class="cap">'+esc(L.fotos.hero.legenda)+'</div>':'')+'</div></div></section>';
 h+='<div class="info"><div class="w"><div class="c"><small>Localização</small><b>'+esc(L.localizacao)+'</b></div><div class="c"><small>WhatsApp</small><b>'+esc(L.whatsapp.display)+'</b></div><div class="c"><small>Avaliações no Google</small><b><span class="stars">'+stars+'</span> '+esc(N.valor)+' · '+esc(N.qtd)+' avaliações</b></div></div></div>';
 h+='<section id="servicos"><div class="w"><div class="lab">'+esc(lab.servicos||'Serviços')+'</div><h2>'+esc(L.tituloServicos||'O que fazemos')+'</h2><div class="svc">'+L.servicos.map(function(s,i){return '<div class="row"><i>0'+(i+1)+'</i><h3>'+esc(s.t)+'</h3><p>'+esc(s.d||'')+'</p><a class="btn b2" href="'+wa+'">'+esc(cta)+'</a></div>'}).join('')+'</div></div></section>';
 if(L.faixas&&L.faixas.length){h+='<section id="faixas"><div class="w"><div class="lab">Graduação</div><h2>Sua evolução no Jiu-Jitsu</h2><div class="belt-row">'+
  L.faixas.map(function(f,i){return '<div class="belt-it'+(i===L.faixas.length-1?' final':'')+'"><span class="belt-n">0'+(i+1)+'</span><span class="belt-bar" style="background:'+f.cor+'"></span><small>'+esc(f.nome)+'</small></div>'}).join('')+
  '</div></div></section>';}
 h+='<section id="galeria"><div class="w"><div class="lab">'+esc(lab.galeria||'Trabalhos')+'</div><h2>'+esc(L.tituloGaleria||'Um pouco do trabalho')+'</h2><div class="gal">'+(L.fotos.galeria&&L.fotos.galeria.length?L.fotos.galeria.map(function(f){return '<figure><img src="'+f.src+'" style="object-position:'+(f.pos||'50% 50%')+'" alt=""></figure>'}).join(''):[1,2,3,4].map(function(i){return '<figure class="ph-empty">Foto '+i+'<br>(a inserir)</figure>'}).join(''))+'</div></div></section>';
 h+='<div class="rev" id="avaliacoes"><div class="w"><div class="lab">Avaliações</div><h2>O que dizem os clientes</h2><div class="score"><b>'+esc(N.valor)+'</b><span class="stars">'+stars+'</span><span>'+esc(N.qtd)+' avaliações no Google</span></div>'+(L.avaliacoes&&L.avaliacoes.length?'<div class="q">'+L.avaliacoes.slice(0,3).map(function(q){return '<div><span class="stars">'+stars+'</span><q>'+esc(q)+'</q><small>Avaliação no Google</small></div>'}).join('')+'</div>':'')+'</div></div>';
 if(L.equipe){var eq=L.equipe;
  var tNode=function(p,cls,faixaPad,i){p=p||{};return '<div class="team-node'+(cls?' '+cls:'')+'"><span class="team-ini">'+(p.nome?p.nome.trim().charAt(0).toUpperCase():'?')+'</span><b>'+esc(p.nome||'Nome do professor')+'</b><small>'+esc(p.faixa||faixaPad||'Faixa preta')+' · '+esc(p.cargo||'Professor')+'</small><em>'+esc(p.unidade||(i!=null?'Unidade '+(i+1):'Unidade'))+'</em></div>'};
  var tLevel=function(list,label,n,faixaPad){var vazio=!(list&&list.length),arr=vazio?new Array(n||3).fill(null):list;return '<div class="team-level">'+(label?'<div class="team-tier-lab">'+esc(label)+'</div>':'')+'<div class="team-tier">'+arr.map(function(p,i){return tNode(p,vazio?'ghost':'',faixaPad,i)}).join('')+'</div></div>'};
  h+='<section id="equipe"'+(L.fxFundo?' class="fx-band"':'')+'>'+(L.fxFundo?'<img class="fx-gorilla" src="'+L.fxFundo+'" alt="">':'')+'<div class="w"><div class="lab">Equipe</div><h2>Nossa estrutura</h2><div class="team-org">'+
  '<div class="team-level"><div class="team-tier">'+(eq.fundadores||[]).map(function(p){return tNode(p,'head')}).join('')+'</div></div>'+
  tLevel(eq.pretos,'Faixas pretas · outras unidades',3,'Faixa preta')+
  tLevel(eq.marrons,'Faixas marrom · outras unidades',3,'Faixa marrom')+
  '</div></div></section>';}
 if(L.sobre){var so=L.sobre;
  h+='<section id="sobre"><div class="w"><div class="lab">Sobre</div><h2>'+esc(so.titulo||'Quem está à frente')+'</h2><div class="about-card"><div class="about-ph"'+(so.foto&&so.foto.ratio?' style="aspect-ratio:'+so.foto.ratio+'"':'')+'>'+(so.foto&&so.foto.src?'<img src="'+so.foto.src+'" style="object-position:'+(so.foto.pos||'50% 50%')+';object-fit:'+(so.foto.fit||'cover')+'" alt="">':'')+'</div><div><b>'+esc(so.nome)+'</b><div class="cargo">'+esc(so.cargo||'')+'</div><p>'+esc(so.texto)+'</p></div></div></div></section>';}
 if(L.mvv){var mv=L.mvv;
  var vicon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>';
  var micon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>';
  var vicon2='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>';
  h+='<section id="valores"><div class="w">'+
   (mv.topo?'<div class="mvv-banner"><img src="'+mv.topo+'" alt="Missão, visão e valores"></div>':'')+
   '<div class="mvv-row">'+
    (mv.visao?'<div class="mvv-col"><h3>'+vicon+' Nossa Visão</h3><p>'+esc(mv.visao)+'</p></div>':'')+
    (mv.missao?'<div class="mvv-col"><h3>'+micon+' Nossa Missão</h3><p>'+esc(mv.missao)+'</p></div>':'')+
   '</div>'+
   (mv.valoresLista&&mv.valoresLista.length?'<div class="mvv-vlab">Nossos Valores</div><div class="mvv-vgrid">'+mv.valoresLista.map(function(v){return '<div class="mvv-v"><span class="ic">'+vicon2+'</span><small>'+esc(v)+'</small></div>'}).join('')+'</div>':'')+
   (mv.pilares&&mv.pilares.length?'<div class="mvv-pilares">'+mv.pilares.map(function(p){return '<div class="mvv-pc">'+(p.img?'<img src="'+p.img+'" alt="">':'')+'<div class="tx"><b>'+esc(p.nome)+'</b><span>'+esc(p.texto||'')+'</span></div></div>'}).join('')+'</div>':'')+
   (mv.regras&&mv.regras.length?'<div class="mvv-regras"><div class="side">柔術</div><div class="body"><h3>Regras do Tatame</h3><ol>'+mv.regras.map(function(r){return '<li>'+esc(r)+'</li>'}).join('')+'</ol></div></div>':'')+
  '</div></section>';}
 if(L.mestres){var ms=L.mestres;
  h+='<section id="mestres"><div class="w"><div class="lab">'+esc(ms.lab||'Tradição')+'</div><h2>'+esc(ms.titulo||'Mestres do Jiu-Jitsu')+'</h2>'+(ms.img?'<div class="mestres-ph"><img src="'+ms.img+'" alt="Mestres do Jiu-Jitsu"></div>':'')+(ms.legenda?'<p class="mestres-cap">'+esc(ms.legenda)+'</p>':'')+'</div></section>';}
 h+='<div class="ct" id="contato"><div class="w"><div><div class="lab" style="opacity:.8">Contato</div><h2>'+esc(L.contato.titulo)+'</h2><p>'+esc(L.contato.texto)+'</p><a class="btn b1" href="'+wa+'">'+esc(L.ctaWhats||'Falar pelo WhatsApp')+'</a></div><div><div class="l"><small>Endereço</small><span>'+esc(L.endereco[0])+'<br>'+esc(L.endereco[1])+'</span></div><div class="l"><small>WhatsApp</small><span>'+esc(L.whatsapp.display)+'</span></div>'+(L.horarios?'<div class="l"><small>Horário</small><span>'+esc(L.horarios)+'</span></div>':'')+(L.mapa?'<div class="ct-map" style="display:flex;align-items:center;justify-content:center;background:var(--alt)"><a class="btn b2" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(L.endereco.join(', '))+'" target="_blank" rel="noopener">Ver no Google Maps</a></div>':'')+'</div></div></div></main>';
 h+='<footer><div class="w"><span>© '+esc(L.nome)+'</span><span>Prévia ilustrativa · criada por criativamentedigital.com.br</span></div></footer><a class="wa" href="'+wa+'" aria-label="WhatsApp">'+WAI+'</a>';
 document.getElementById('app').innerHTML=h;document.documentElement.style.setProperty('--gn',(L.fotos.galeria&&L.fotos.galeria.length)||4);
})();