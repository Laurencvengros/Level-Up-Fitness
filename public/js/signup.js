async function signupFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert("failed to sign up");
      }
    }
  }
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);