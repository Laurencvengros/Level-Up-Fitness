async function signupFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(name);
    console.log(email);
    console.log(password);
  
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
      //console.log(await response.json())
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert("failed to sign up");
      }
    }
  }
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);