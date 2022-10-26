const newRoutineForm= async function(event){
    event.preventDefault();

    routineTitle = document.querySelector('#routine-name').value.trim();

    if(routineTitle){
        const response = await fetch ('api/routine', {
            method: 'POST',
            body: JSON.stringify({
                name,
                user_id,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok){
            document.location('/dashboard')
            console.log("added to routine");
        }else{
            alert('failed to add');
        }
    }

};

document.querySelector('#routine-form').addEventListener('submit', newRoutineForm);
