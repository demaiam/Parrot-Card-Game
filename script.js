let cartaPadrao =   `<li class="carta" id="cartaId" onclick="selecionarCarta(this)" data-test="card">
                        <div class="carta-verso face">
                            <img src="./imagens/back.png" data-test="face-down-image">
                        </div>
                        <div class="carta-frente face" data-test="face-up-image">
                            <img src="./imagens/parrotname.gif">
                        </div>
                     </li>`


const nomesPadrao = ["beerparrot", "birthdayparrot", "flowerparrot", "footballparrot", "moustacheparrot", "pirateparrot", "topperhatparrot"];

var contadorJogadas = 0;
var contadorAchadas = 0;
var qtdCartas;

const conteudo = document.querySelector('.main');

function quantasCartas() {
    qtdCartas = prompt("Com quantas cartas você quer jogar?"); 
    if (qtdCartas % 2 != 0 || qtdCartas < 4 || qtdCartas > 14) {
        quantasCartas();
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function iniciarJogo() {
    let carta;
    let nomes = [];
    
    quantasCartas();
    
    for (let i = 0; i < (qtdCartas/2); i++) {
        nomes[i] = nomesPadrao[i];
    }

    for (let i = 0; i < (qtdCartas/2); i++) {
        nomes[i + nomes.length] = nomes[i];
    }

    nomes.sort(comparador);

    const baralho = document.querySelector('.baralho');

    for (let i = 0; i < qtdCartas; i++) {
        carta = cartaPadrao.replace("parrotname", nomes[i]);
        carta = carta.replace("cartaId", nomes[i]);
        baralho.innerHTML += carta;
    }

    conteudo.classList.remove('escondido');
}

function selecionarCarta(carta) {
    const cartaAnterior = document.querySelector('.selecionado');
    carta.classList.toggle('selecionado');
    verificaCarta(carta, cartaAnterior);
}

function verificaCarta(carta, cartaAnterior) {
    carta.classList.toggle('trancar');
    if (cartaAnterior != null && cartaAnterior.id == carta.id) {
        cartasIguais(carta, cartaAnterior);
    } else if (cartaAnterior != null && cartaAnterior.id != carta.id) {
        setTimeout(cartasDiferentes, 1000, carta, cartaAnterior);
    }
    contadorJogadas++;
}

function cartasDiferentes(carta, cartaAnterior) {
    carta.classList.toggle('selecionado');
    cartaAnterior.classList.toggle('selecionado');
    carta.classList.toggle('trancar');
    cartaAnterior.classList.toggle('trancar');
}

function cartasIguais(carta, cartaAnterior) {
    carta.classList.toggle('selecionado');
    cartaAnterior.classList.toggle('selecionado');
    carta.classList.toggle('achou');
    cartaAnterior.classList.toggle('achou');
    carta.classList.toggle('trancar');
    cartaAnterior.classList.toggle('trancar');
    contadorAchadas++;
    setTimeout(verificaFim, 500);
}

function trancarInput() {
    conteudo.classList.toggle('trancar');
}

function verificaFim() {
    if (contadorAchadas == qtdCartas/2) {
        alert('Você ganhou em ' + contadorJogadas + ' jogadas');
    }
}



