var eye = document.getElementById('Eye');
var input = document.getElementById('login-password');
eye.addEventListener("click", function(){
    if (input.type == "password") {
         input.type = "text"
         eye.style.opacity=0.8
    }else {
        input.type ="password"
        eye.style.opacity = 0.2
    }
})

function regi() {
    Swal.fire({
    imageUrl: 'https://cg-admin.netlify.app/Body/Iconos/CG Admin.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    title: '¡Bienvenido!',
    text: 'Para poder Crear una Cuenta en esta app Necesitas Ser parte de grupo de desarrollo de CG Studios y tu cuenta sera creada posteriormente. Serás redirigido al encargado de las cuentas de esta app',
    showConfirmButton: false,
    });
    setTimeout(function() {
        
            location.href="https://chat.whatsapp.com/KsU6FOn9cGbKdxXO6zB79z"
            
     }, 1000*6);
}
