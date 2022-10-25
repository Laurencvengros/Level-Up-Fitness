async function loginFormHandler(event) {
  console.log("logging in user")
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(await response.json())
        if (response.ok) {
          document.location.replace('/profile');
          console.table(response);
        } else {
          alert('error');
        }
      }
    }
    
    document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

    console.log("testing login.js");