import { url, successNotification,errorNotification } from "../utils/util.js";

//Form Register

const form_login = document.getElementById('form_login');

form_login.onsubmit = async (e) => {
    e.preventDefault();


    


    //disable button
    document.querySelector("#form_login button").disabled = true;


    //get values of form
    const formData = new FormData(form_login);

//fetch api user register
    const response = await fetch (url + "/api/login"
        , {
            method: "POST",
            header: {
                Accept:"application/json",
            },
            body:formData,
        });

        //get response if 200-299 status code
        if (response.ok) {
            const json = await response.json();
            console.log(json);

            localStorage.setItem("token", json.token);
            form_login.reset();

            successNotification("Successfully logged in account account", 5);

            window.location.pathname = "/userDashboard.html";
        }
        //get response if 422 status code
        else if (response.status ==422){
            const json = await response.json();

        
            errorNotification(json.message, 5);
        }

        //enable button
        document.querySelector("#form_login button").disabled = false;
        document.querySelector("#form_login button").innerHTML = 'Login';
        
};