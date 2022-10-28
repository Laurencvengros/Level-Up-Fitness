const newRoutineForm= async function(event){
    event.preventDefault();

    routineTitle = document.querySelector(("#routine-name")).value.trim();
    console.log(routineTitle)

    
        const response = await fetch('/api/routine', {
        
            method: 'POST',
            body: JSON.stringify({
                name: routineTitle,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        
        });

        console.log(response);
        if (response.ok) {
            console.log('test')
            
   
        } else {
            console.log(routineTitle)
            alert(response.statusText);
            
        }
    
};



document.querySelector('#routine-form').addEventListener('submit', newRoutineForm);
