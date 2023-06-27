import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    document.getElementById('data').innerHTML = '<strong>Correo: </strong>' + user.email + '<br><br><strong>Cuenta: </strong>Admin';
    console.log(user.email)
    
    console.log('login')
}else{
    location.href="sesión.html"
}
});
