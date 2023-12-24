import { setRouter }  from "../router/router";

setRouter();
//backend url
const backendURL="https://3ef2-103-169-69-130.ngrok-free.app";


function successNotification(message, seconds=""){
    document.querySelector(".alert-success").classList.remove('d-none');
    document.querySelector(".alert-success").classList.add('d-block');
    document.querySelector(".alert-success").innerHTML=message;

if(seconds != ""){
    setTimeout(function(){
        document.querySelector(".alert-success").classList.remove('d-block');
    document.querySelector(".alert-success").classList.add('d-none');
    },seconds * 1000);

}
}
function errorNotification(message, seconds){
    document.querySelector(".alert-danger").classList.remove('d-none');
    document.querySelector(".alert-danger").classList.add('d-block');
    document.querySelector(".alert-danger").innerHTML=message;

    setTimeout(function(){
        document.querySelector(".alert-danger").classList.remove('d-block');
    document.querySelector(".alert-danger").classList.add('d-none');
    }, seconds * 1000);
}
export{backendURL, successNotification,errorNotification};