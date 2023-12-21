//Form Register

const form_register = document.getElementById('form_register');

form_register.onsubmit = async (e) => {
    e.preventDefault();


    


    //disable button
    document.querySelector("#form_register button").disabled = true;


    //get values of form
    const formData = new FormData(form_register);

//fetch api user register
    const response = await fetch ("f19a-2001-4455-5c8-1f00-c50d-c28d-2d0b-ae4c.ngrok-free.app" + "/api/user"
        , {
            method: "POST",
            header: {
                Accept:"application/json",
            },
            body:formData,
        });

        //get response if 200-200 status code
        if (response.ok) {
            const json = await response.json();
            console.log(json);

            form_register.reset();
        }
        //get response if 422 status code
        else if (response.status ==422){
            const json = await response.json();

            alert(json.message);
        }

        //enable button
        document.querySelector("#form_register button").disabled = false;
        
}