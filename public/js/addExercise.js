const newExerciseForm= async function(event){
    event.preventDefault();

     exerciseId = document.querySelector('#routine_id').value;

     exerciseTitle = document.querySelector(('#exercise-name')).value;
    
     exerciseSets = document.querySelector(('#exercise-sets')).value;
     exerciseReps = document.querySelector(('#exercise-reps')).value;
    console.log(exerciseId)
    console.log(exerciseTitle)
    console.log(exerciseSets)
    console.log(exerciseReps)

    
        const response = await fetch('/api/exercise', {
        
            method: 'POST',
            body: JSON.stringify({
                name: exerciseTitle,
                sets: exerciseSets,
                reps: exerciseReps,
                routine_id: exerciseId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        
        });

        console.log(response);
        if (response.ok) {
            console.log('test')
            document.location.reload();
            
            
   
        } else {
            console.log(exerciseTitle)
            alert(response.statusText);
            
        }
    
};



document.querySelector('#exercise-form').addEventListener('submit', newExerciseForm);

