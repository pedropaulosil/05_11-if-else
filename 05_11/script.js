
function entrar(){
var usuarioemail = document.getElementById('usuarioemail').value
var senha = document.getElementById('senha').value

if(usuarioemail == "senai" && senha == "Senai123" || usuarioemail == 'senai@senai.com' && senha == 'Senai123'){
    window.location.href = 'index.html'
} else {
    Swal.fire({
        title: "Usuário/email incorretos!",
        text: "tente novamente", 
        icon: "error"
    });
    }
}