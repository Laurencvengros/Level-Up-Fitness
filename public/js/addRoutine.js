const newRoutineForm= async function(event){
    event.preventDefault();

    routineTitle = document.querySelector(("#routine-name")).value.trim();
    
    console.log(routineTitle)

    if(routineTitle){
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
            window.location.replace("profile")
   
        } else {
            console.log(routineTitle)
            alert(response.statusText);
            
        }
    }else{
        alert('Please enter the name of your routine')
    }
};



document.querySelector('#routine-form').addEventListener('submit', newRoutineForm);


