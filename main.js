var incrementar = document.getElementById("Incrementar");
var decrementar = document.getElementById("Decrementar");
var destino = document.getElementById("contador")
var contador = 0;

incrementar.addEventListener('click', function(){
    contador = contador + 1;
    destino.textContent = contador;
});

decrementar.addEventListener('click', function(){
    if(contador <= 0){
        alert("O contador já esta igual a 0")
    }else{
        contador = contador - 1;
        destino.textContent = contador;
    }
    
});


var entrada = document.getElementById("entrada");
let resultado = document.getElementById("resultado");
var destino2 = document.getElementById("elemento");
const contadorDeLetras = document.getElementById("contadorDeLetras");
var quantidade = 0;
contadorDeLetras.textContent = ` ${quantidade} caracteres`;

// Add numeros do contador e insere as palavras, ao clicar enter o contador zera
entrada.addEventListener("input", () => {

    quantidade = entrada.value.replace(/\s/g, "").length;
    contadorDeLetras.textContent = ` ${quantidade} caracteres`;
    
    entrada.onkeydown = function(event){
        if(event.key == "Enter"){
            quantidade = 0;
            contadorDeLetras.textContent = ` ${quantidade} caracteres`;
            let palavras = document.createElement("p");
            resultado = entrada.value;
            palavras.innerHTML = resultado;
            destino2.append(palavras);
            entrada.value = "";
        }
    }   
});

var tipoLista = document.getElementById("tipoLista");
var addLista = document.getElementById("addLista");
var reset = document.getElementById("reset");
var destino3 = document.getElementById("elemento2");

addLista.addEventListener("click", function(){
    var tipo = tipoLista.value;

    var lista = document.createElement(tipo);

    for(let i = 1; i <= 3; i++){
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    destino3.appendChild(lista);
});

reset.addEventListener("click", function(){
    contador = 0;
    destino.textContent = contador;

    quantidade = 0;
    contadorDeLetras.textContent = ` ${quantidade} caracteres`;

    entrada.value = "";
    destino2.innerHTML = "";
    destino3.innerHTML = "";
});



