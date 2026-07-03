const senha = document.getElementById("senha");
const olho = document.getElementById("mostrarSenha");
const form = document.getElementById("formLogin");
const mensagem = document.getElementById("mensagem");

// Mostrar/Ocultar senha
olho.addEventListener("click", () => {

    if (senha.type === "password") {

        senha.type = "text";
        olho.classList.remove("fa-eye");
        olho.classList.add("fa-eye-slash");
       

    } else {

        senha.type = "password";
        olho.classList.remove("fa-eye-slash");
        olho.classList.add("fa-eye");

    }

});

// Simulação de Login
form.addEventListener("submit", function(e){

    e.preventDefault();

    let usuario = document.getElementById("usuario").value;

    if(usuario === "admin" && senha.value === "123"){
         location.href = "http://127.0.0.1:5500/HTML/index.html";

        mensagem.style.color="lightgreen";
        mensagem.innerHTML="Login realizado com sucesso!";

    }else {

        mensagem.style.color="red";
        mensagem.innerHTML="Login ou senha incorretos!";

    }

});