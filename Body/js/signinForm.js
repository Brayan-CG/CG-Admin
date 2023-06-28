import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { auth } from "./firebase.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  //const displayName = signInForm["login-name"].value;
const email = signInForm["login-email"].value;
const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)
   
        setTimeout(function() {
        
            location.href="inicio.html"
            
        }, 1000*2);
        
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: "" + userCredentials.user.email,
            showConfirmButton: false,
            timer: 2000
        });
    
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'La Contraseña ingresada no es valida', 
      });
    } else if (error.code === 'auth/user-not-found') {    
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: "El Correo Ingresado No Esta Registrado",
      });
    } else {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'Parece que algo salio mal intente nuevamente', 
      });
    }
  }
  
});
