import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, deleteUser,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    
    document.getElementById('data').innerHTML = '<strong>Correo: </strong>' + user.email + '<br><br><strong>Cuenta: </strong>Admin';
    console.log(user.email)
    
    console.log('login')


const borrar = document.querySelector(".borrar");

borrar.addEventListener("click", async (e) => {
  e.preventDefault();  

   deleteUser(user).then(() => {
     swal.fire({
        icon: 'success',
        title: 'Borrando Cuenta',
        text: 'se ha Borrado la cuenta exitosamente',
        showConfirmButton: false,
        timer: 2000
    });
    
    setTimeout(function() {
      location.href="sesión.html"
    }, 1200*2);
    console.log("Borrada");
  }).catch((error) => {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'parece que a ocurrio un error',
        showConfirmButton: false,
        timer: 2000
       });
      });
});

}else{
    location.href="sesión.html"
}
});