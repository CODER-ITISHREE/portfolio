document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-msg').innerText = 'Thank you! Your message has been sent.';
  this.reset();
});
