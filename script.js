// Substitua pela sua Public Key do EmailJS
emailjs.init("SrFhKM0O7WUl5jakb");

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const responseMessage = document.getElementById('responseMessage');

  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  const rating = document.querySelector('input[name="star"]:checked').value;
  const comment = document.getElementById('comment').value;

  const templateParams = {
    rating: rating,
    comment: comment
  };

  // Substitua 'SEU_SERVICE_ID' e 'SEU_TEMPLATE_ID'
  emailjs.send('service_dfz5feh', 'template_5xoxyve', templateParams)
    .then(() => {
      responseMessage.style.color = 'green';
      responseMessage.textContent = 'Obrigado! Sua avaliação foi enviada por e-mail.';
      this.reset();
    })
    .catch((error) => {
      responseMessage.style.color = 'red';
      responseMessage.textContent = 'Erro ao enviar. Tente novamente.';
      console.error('Erro EmailJS:', error);
    })
    .finally(() => {
      submitBtn.textContent = 'Enviar Avaliação';
      submitBtn.disabled = false;
    });
});