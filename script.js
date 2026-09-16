// Inicialização com a sua Public Key real
emailjs.init("SrFhKM0O7WUl5jakb");

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const responseMessage = document.getElementById('responseMessage');

  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  // Pega a nota selecionada nos radios
  const selectedRating = document.querySelector('input[name="star"]:checked');
  const ratingValue = selectedRating ? selectedRating.value : 'Não informada';
  const commentValue = document.getElementById('comment').value;

  // Parâmetros mapeados para o seu template
  const templateParams = {
    rating: ratingValue,
    comment: commentValue,
    message: commentValue,
    from_name: "Cliente do Site",
    from_email: "no-reply@seu-site.com"
  };

  // Envio usando seu Service ID e Template ID exatos
  emailjs.send('service_lart1lf', 'template_wylz5jm', templateParams)
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