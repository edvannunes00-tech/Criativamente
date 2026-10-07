(function(){
  var SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyljMu5uhKyORefcXpM9amo6gN3cNbQxy4r9d_SRchjmJjxBvmdiwXITQ4IcRyScx2P/exec';
  var modal = document.getElementById('waitlistModal');
  var closeBtn = document.getElementById('waitlistClose');
  var form = document.getElementById('waitlistForm');
  var msg = document.getElementById('waitlistMsg');
  function abrir(){
    if(!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function fechar(){
    if(!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.waitlist-open').forEach(function(btn){
    btn.addEventListener('click', abrir);
  });
  if(closeBtn) closeBtn.addEventListener('click', fechar);
  if(modal) modal.addEventListener('click', function(e){ if(e.target === modal) fechar(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') fechar(); });

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var data = {
        nome: form.nome.value.trim(),
        whatsapp: form.whatsapp.value.trim(),
        email: form.email.value.trim(),
        perfil: form.perfil.value
      };
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      // O Apps Script pode demorar vários segundos para responder; como o
      // modo no-cors já não deixa ler o resultado real, envia em segundo
      // plano (keepalive mantém o envio mesmo se a aba fechar) e mostra
      // sucesso rápido para não parecer travado.
      fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: {'Content-Type': 'text/plain;charset=utf-8'},
        body: JSON.stringify(data)
      }).catch(function(){});
      setTimeout(function(){
        msg.textContent = 'Recebemos seus dados! Avisaremos você assim que um novo curso estiver disponível.';
        msg.className = 'waitlist-msg show ok';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Quero entrar na lista';
        setTimeout(fechar, 2200);
      }, 500);
    });
  }
})();
