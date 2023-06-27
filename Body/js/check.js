import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
 
   
    
    console.log(user)
}else{
   location.href="sesión"
   console.log('signup')
}
});
