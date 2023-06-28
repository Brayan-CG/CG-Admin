import { signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from "./firebase.js";

const logout = document.querySelector(".cerrar");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
   swal.fire({
        icon: 'success',
        title: 'Cerrando Sesión',
        text: 'se ha cerrado sesión exitosamente',
        showConfirmButton: false,
        timer: 2000
    });
    
    setTimeout(function() {
      location.href="sesión.html"
    }, 1200*2);
    console.log("signup out");
  } catch (error) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'parece que a ocurrio un error',
        showConfirmButton: false,
        timer: 2000
    });
  }
});
