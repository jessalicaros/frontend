import { backendURL, successNotification,errorNotification } from "../utils/util.js";

//Form Register

const form_login = document.getElementById('form_login');

form_login.onsubmit = async (e) => {
    e.preventDefault();



    //disable button
    document.querySelector("#form_login button").disabled = true;


    //get values of form
    const formData = new FormData(form_login);

//fetch api user login
    const response = await fetch (backendURL + "/api/login"
        , {
            method: "POST",
    headers: {
        Accept: "application/json",
    },
    body: formData,
});



const form_login = document.getElementById("form_login");

form_login.addEventListener("submit", async (e) => {
    e.preventDefault();

    // disable the button during the login process
    document.querySelector("#form_login button").disabled = true;
    document.querySelector("#form_login button").innerHTML = 'Logging in...';

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate predefined email and password for an admin user
    const predefinedAdminEmail = "manager@gmail.com";
    const predefinedAdminPassword = "managerpassword";

    try {
        // Check if provided credentials match the predefined admin credentials
        if (email === predefinedAdminEmail && password === predefinedAdminPassword) {
            // Simulate a successful login
            localStorage.setItem("token", "admin-token");

            // Redirect to the admin dashboard
            window.location.href = "/Frontend/Manager/dashboard.html";
        } else {
            // Perform the actual fetch request to the backend for authentication
            const response = await fetch(backendURL + "/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                // Redirect to the user dashboard
                window.location.href = "/Frontend/userDashboard.html";
            } else if (response.status === 422) {
                const json = await response.json();
                errorNotification(json.message, 5);
            } else {
                // Handle other error cases
                console.error(`Error: ${response.status} - ${response.statusText}`);
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
        // Handle the error or display a notification as needed
    } finally {
        // enable the button after the login attempt
        document.querySelector("#form_login button").disabled = false;
        document.querySelector("#form_login button").innerHTML = 'Log in';
    }
});
}