const iconEye = document.querySelector(".icon-eye");

iconEye.addEventListener("click", function () {

    const icon = this.querySelector("x");



    if (this.nextElementSibling.type === "password") {
        this.nextElementSibling.type = "text";
        icon.classList.remove("bi-eye-slash-fill")
        icon.classList.add("bi-eye-fill")
    } else {
        icon.classList.remove("bi-eye-fill")
        icon.classList.add("bi-eye-slash-fill")

        this.nextElementSibling.type = "password"
    }
});


if (document.getElementById("contraseña") != "" && document.getElementById("contraseña") != null && document.getElementById("Correo") != "" && document.getElementById("Correo") != null) {


    let contrasenaDom = document.getElementById("contraseña")
    let usuarioDom = document.getElementById("Correo")


 console.log(usuarioDom);
 console.log(contrasenaDom);

 const botonIniciarSesion = document.querySelector('iniciarSesion');

 botonIniciarSesion.addEventListener('click', () => {
   //Aquí puedes agregar el código que se ejecutará cuando se haga clic en el botón de iniciar sesión
    
   

 });


//     let usuario = "Diana Marcela";
//     let contraseña = "123"
//     let conteo = 0;

//     do {
//         var repetir = true;
//         //let usuarioDom = prompt("Ingresa el usuario");
//         //let contrasenaDom = prompt("Ingresa la contraseña");
//         conteo += 1;
//         if (usuario == usuarioDom && contraseña == contrasenaDom) {
//             alert("Ingreso Exitoso")
//             repetir = false;

//         } else {

//             if (conteo == 3) {
//                 alert("Has excedido los 3 intentos permitidos");
//                 repetir = false;
//             } else {
//                 alert("el usuario o la contraseña es incorrecto, Ingrese nuevamente los datos");
//                 repetir = true;
//             }
//         }
//     } while (repetir);






}


