// OBJETOS E VARIÁVEIS

const obj_body = document.querySelector('body')
const obj_main = document.querySelector('main')
const obj_caixa_texto = document.querySelector('#caixa_texto') 
const obj_botao_sair = document.querySelector('#botao_sair')
const array_estante = document.querySelectorAll('.estante') 
const array_caixa_texto = document.querySelectorAll('.caixa_texto')
const array_sair = document.querySelectorAll('.botao_sair')

let img_aberta

const array_adicionar = document.querySelectorAll('.adicionar')

const obj_form = document.querySelector('#purchaseForm')
const botaoContinuar = document.querySelector('.botao_pag')
const obj_esconde = document.querySelector('.esconde')
const obj_finalcomp = document.querySelector('.finalizar')


//EVENTOS

for ( const [ indice, obj_img ] of array_estante.entries() ) {
    obj_img.addEventListener('click', function() { funExibeTexto(indice) } ) 
}

for ( obj_sair of array_sair) {
    obj_sair.addEventListener('click',fecharCaixa) 
}

for ( obj_adicionar of array_adicionar) {
    let nome = obj_adicionar.getAttribute("data-nome")
    let preco = parseFloat(obj_adicionar.getAttribute("data-preco"))
    obj_adicionar.addEventListener('click', function() {adicionarAoCarrinho(nome , preco) } ) 
}

botaoContinuar.addEventListener('click', aparecerForm)
obj_finalcomp.addEventListener('click', CompSubmit) 

//FUNÇÃO

//sinopse
function funExibeTexto(par_indice) {
    img_aberta = par_indice
    const obj_texto = array_caixa_texto[par_indice]

    if (obj_texto.style.display == 'block') {
        obj_texto.style.display = 'none';
    } else {
        obj_texto.style.display = 'block';
    }
}

function fecharCaixa() {
    const obj_texto = array_caixa_texto[img_aberta]
    if (obj_texto) {
        obj_texto.style.display = 'none';
    }
}

//carrinho
let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    console.log(obj_adicionar)

    atualizarCarrinho();   
}

function atualizarCarrinho() {
    let listaCarrinho = document.getElementById('lista_carrinho');
    let totalElement = document.getElementById('total');
    let valortotal = document.getElementById('valortotal');

    listaCarrinho.innerHTML = '';

    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    let total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    totalElement.textContent = `Total: R$${total.toFixed(2)}`;
    valortotal.textContent = `Total: R$${total.toFixed(2)}`;
}

//compra
function aparecerForm(){
    if(carrinho < 1){
        alert("Sem itens no carrinho!")
    }
    else{
        obj_esconde.style.display = 'block';
        obj_esconde.scrollIntoView({ behavior: 'smooth' });
    }
}

function validateComp(){
    const nome = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;
    const numeroResidencia = document.getElementById('numeroResidencia').value;
    const complemento = document.getElementById('complemento').value;
    const cartao = document.getElementById('card').value;
    const numCartao = document.getElementById('numCard').value;
    const cvv = document.getElementById('address').value;
    const parcelas = document.getElementById('installments').value;

    if (nome.length < 10 || cpf.length < 11 || telefone.length < 11 ||  email.length < 10 || cep.length < 8 || endereco.length < 10 || numeroResidencia.length < 1 || complemento.length < 1 || cartao.length < 1 || numCartao.length < 13 || cvv.length < 3 || parcelas.length < 1) {
      alert("Por favor, preencha todos os campos corretamente.");
      return false;
    }

    return true;
}

function CompSubmit(event){
    event.preventDefault();

    if (validateComp()) {
      alert("Compra finalizada com sucesso!");
      obj_form.reset()
    }
}