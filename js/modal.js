const modal   = document.getElementById('support-modal');
const openBtn  = document.getElementById('open-support-modal');
const closeBtn = document.getElementById('close-support-modal');

let formInitialized = false;

function openModal() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();

  if (!formInitialized && window.hbspt) {
    hbspt.forms.create({
      region: 'na1',
      portalId: '23319335',
      formId: '1620f344-3d4d-4426-95a1-a8fa58f0e66b',
      target: '#hs-form-container'
    });
    formInitialized = true;
  }
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  openBtn.focus();
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});
