document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const initials = document.getElementById('initials').value;
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('cellphoneNumber').value;
  const dateOfBirth = document.getElementById('dateOfBirth').value;

  const message = `Hello, I would like to sign up. My details:\n\nTitle: ${title}\nInitials: ${initials}\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nDateOfBirth: ${dateOfBirth}`;
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/27710158304?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');

  document.getElementById('signup-form').reset();

  document.getElementById('success-message').style.display = 'block';
    });
  });
  