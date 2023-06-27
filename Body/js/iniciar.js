import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
 
    Swal.fire({
    imageUrl: 'https://cg-pelis.netlify.app/Body/Iconos/logo.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    title: 'Bienvenido',
    text: "Iniciando Sesión con: " + user.email,
    showConfirmButton: false,
    timer: 5000
    });
    
    setTimeout(function() {
        
            location.href="inicio.html"
            
     }, 1000*2);
    
    console.log(user)
}else{
    Swal.fire({
    imageUrl: 'https://cg-pelis.netlify.app/Body/Iconos/logo.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    title: 'Bienvenido',
    text: 'inicia sesión para Acceder',
    confirmButtonText: 'Aceptar'
   });
   console.log('signup')
}
});
