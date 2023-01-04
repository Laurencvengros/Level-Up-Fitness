async function deleteRoutine(event) {
    event.preventDefault();
  
    const id =  window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
  
    const response = await fetch(`/api/routine/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        routine_id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/profile`)
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#delete-routine-btn').addEventListener('click', deleteRoutine);