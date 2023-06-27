function abrir(){
    document.getElementById("política").style.display="block";
}

function cerrar(){
    document.getElementById("política").style.display="none";
}

function poli(){
    Swal.fire({
        imageUrl: 'https://cg-pelis.netlify.app/Body/Funciones/Iconos/Política.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        title: 'Politica De privacidad',
        html: 'La app no recoge ningún dato de caracter personal del usuario como, por ejemplo, nombre, fotografías o localización.<br><br>' +

'· En consecuencia la app no comparte ningún dato personal con ninguna otra entidad o terceras personas.<br><br>' +

'· Permitimos que terceras compañías publiquen anuncios y recopilen cierta información anónima cuando visite nuestra aplicación. Estas empresas pueden utilizar información anónima, como su ID de publicidad de Google, el tipo y la versión de su dispositivo, la actividad de navegación, la ubicación y otros datos técnicos relacionados con su dispositivo, a fin de proporcionar anuncios.',
        showCloseButton: true,
        confirmButtonText: 'Aceptar'
    })
}

function configuración(){
    location.href="https://cg-pelis.netlify.app/configuracion.html"
}

function solicitud(){
    location.href="https://cg-pelis.netlify.app/Body/Funciones/Solicitar contenido.html"
}

function buscar(){
      location.href="https://cg-pelis.netlify.app/Body/Búsqueda/Búsqueda.html"
}

function buscar1(){
      location.href="https://cg-pelis.netlify.app/Body/Búsqueda/Anime.html"
}

function buscar2(){
      location.href="https://cg-pelis.netlify.app/Body/Búsqueda/AnimeL.html"
}

function Anime(){
    location.href="https://cg-pelis.netlify.app/Anime.html"
}

function inicio(){
    location.href="go:1"
}
function audio(){
    document.getElementById("audio").style.display="block";
    
    setTimeout(function(){
       
       document.getElementById("audio").style.display="none";
       
    }, 1000*3);
}
