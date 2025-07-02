document.getElementById('contactForm').addEventListener('submit', function(e) {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
    return;
  }

  if (name.trim() === "") {
    alert('Name cannot be empty.');
    e.preventDefault();
    return;
  }

  e.preventDefault();
  alert('Form saved successfully, We will send a response within 24 hours.');
  document.getElementById('contactForm').reset();
});