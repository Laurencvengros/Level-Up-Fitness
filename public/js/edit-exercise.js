async function editExerciseForm(event){
    event.preventDefault();

    const exerciseName = document.querySelector('#exercise-name').value;
    const exerciseSets = document.querySelector('#exercise-sets').value;
    const exerciseReps = document.querySelector('#exercise-reps').value;

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      const response = await fetch(`/api/exercise/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            exercise_id: id,
            name: exerciseName,
            sets: exerciseSets,
            reps: exerciseReps,
        }),
        headers: {
            'Content-type': 'application/json',
        },
      });

      if(response.ok){
        document.getElementById("alert").innerHTML = "Routine Updated!";
        document.getElementById("alert2").innerHTML = "you may return to your profile";
        
      }else{
        console.log('error');
      }
};



document.querySelector('#edit-exercise-form').addEventListener('submit', editExerciseForm);

async function deleteFormHandler(event) {
  event.preventDefault();

  const id =  window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  

  const response = await fetch(`/api/exercise/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      exercise_id: id,
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

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
