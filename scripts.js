const scriptURL = 'https://script.google.com/macros/s/AKfycbztpBVPUD8LDiwASuHz41JRzb9QY2XAKu7t_l_X0sZgAq9kR1hHWbtyRBXt3w-3XgUKhw/exec';
const form = document.getElementById('obraSocialForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', e => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerText = 'Enviando...';

  // Recopilar datos de checkboxes múltiples
  const formData = new FormData(form);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      alert('¡Muchas gracias! Tu información ha sido enviada con éxito.');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerText = 'Enviar Información';
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Hubo un error al enviar. Intenta nuevamente.');
      submitBtn.disabled = false;
      submitBtn.innerText = 'Enviar Información';
    });
});