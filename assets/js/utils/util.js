import { setRouter }  from "../router/router.js";

setRouter();
//backend url
const backendURL="https://4cf7-103-169-69-199.ngrok-free.app";


function successNotification(message, seconds=0){
    document.querySelector(".alert-success").classList.remove('d-none');
    document.querySelector(".alert-success").classList.add('d-block');
    document.querySelector(".alert-success").innerHTML=message;

if(seconds != 0){
    setTimeout(function(){
        document.querySelector(".alert-success").classList.remove('d-block');
    document.querySelector(".alert-success").classList.add('d-none');
    },seconds * 1000);

}
}
function errorNotification(message, seconds=0){
    document.querySelector(".alert-danger").classList.remove('d-none');
    document.querySelector(".alert-danger").classList.add('d-block');
    document.querySelector(".alert-danger").innerHTML=message;

    if(seconds != 0){
        setTimeout(function(){
        document.querySelector(".alert-danger").classList.remove('d-block');
    document.querySelector(".alert-danger").classList.add('d-none');
    }, seconds * 1000);
}
}
export{backendURL, successNotification,errorNotification};