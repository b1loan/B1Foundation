// script.js — simple modal behavior
document.addEventListener('DOMContentLoaded', function(){
  var open = document.getElementById('openQr');
  var modal = document.getElementById('qrModal');
  var close = document.getElementById('closeModal') || document.querySelector('.close');
  var cancel = document.getElementById('cancel');
  var confirm = document.getElementById('confirmClaim');

  function showModal(){ modal.setAttribute('aria-hidden','false'); }
  function hideModal(){ modal.setAttribute('aria-hidden','true'); }

  if(open) open.addEventListener('click', showModal);
  if(close) close.addEventListener('click', hideModal);
  if(cancel) cancel.addEventListener('click', hideModal);
  if(confirm) confirm.addEventListener('click', function(){
    alert('Thank you — your scan is being processed. If this was a test page, check official channels for verification.');
    hideModal();
  });
});
