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
        document.location.replace(`/routine/${id}`);
      }else{
        console.log('error');
      }
};

document.querySelector('#edit-exercise-form').addEventListener('submit', editExerciseForm);