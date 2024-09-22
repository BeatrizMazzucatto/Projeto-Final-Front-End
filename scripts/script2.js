//obs

const obj_contactForm = document.querySelector('#contactForm')
const botaoForm = document.querySelector('.contato')

//evento

botaoForm.addEventListener("click", validateForm)
obj_contactForm.addEventListener("submit", FormSubmit)

//função

function validateForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("e-mail").value;
    var mensagem = document.getElementById("mesage").value;

    if (nome.length < 10 || email.length < 10 || mensagem.length < 10) {
      alert("Por favor, preencha todos os campos corretamente.");
      return false;
    }

    return true;
}

function FormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      alert("Formulário enviado com sucesso!");
    }
}
