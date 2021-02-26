let botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let formulario = document.querySelector("#formulario-adiciona");

    let cliente=obtemCliente(formulario)

    function calculaImc(peso, altura) {
        let imc = 0;
        imc = peso / (altura * altura);
    
        return imc.toFixed(2);
    }
    
    function obtemCliente(formulario) {

        let clienteDoFormulario={
            nome:formulario.nome.value,
            peso:formulario.peso.value,
            altura:formulario.altura.value,
            gordura:formulario.gordura.value,
            imc:calculaImc(formulario.peso.value,formulario.altura.value,)
        }
        return clienteDoFormulario;
    }

    let erros = validaCliente(cliente);
    
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
    
        return;
    }
    

    function validaCliente(cliente) {

    let erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (cliente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (cliente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (cliente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(cliente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(cliente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
 
// ___________________________________________________________________________________________
    
    let nomeTd=document.createElement("td")
    nomeTd.textContent=cliente.nome
    nomeTd.className=("info-nome")

    let pesoTd= document.createElement("td")
    pesoTd.textContent=cliente.peso
    pesoTd.className=("info-peso")

    let alturaTd=document.createElement("td")
    alturaTd.textContent=cliente.altura
    alturaTd.className=("info-altura")

    let gorduraTd=document.createElement("td")
    gorduraTd.textContent=cliente.gordura
    gorduraTd.className=("info-gordura")

    let imcTd=document.createElement("td")
    imcTd.textContent=cliente.imc
    imcTd.className=("info-imc")

    clienteTr=document.createElement("tr")
    clienteTr.className="background-branco"
    clienteTr.id="cliente"


    clienteTr.appendChild(nomeTd).value;
    clienteTr.appendChild(pesoTd).value;
    clienteTr.appendChild(alturaTd).value;
    clienteTr.appendChild(gorduraTd).value;
    clienteTr.appendChild(imcTd).value;
   
// ___________________________________________________________________________________________
    
 let tabela = document.querySelector("#tabela-clientes");

    tabela.appendChild(clienteTr);

    formulario.reset();

    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

//_____________________________________________________________________________________________

});


