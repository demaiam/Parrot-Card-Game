let cartaPadrao =   `<li class="carta" id="cartaId" onclick="selecionarCarta(this)">
                        <div class="carta-verso face">
                            <img src="./imagens/back.png">
                        </div>
                        <div class="carta-frente face">
                            <img src="./imagens/parrotname.gif">
                        </div>
                     </li>`


const nomesPadrao = ["beerparrot", "birthdayparrot", "flowerparrot", "footballparrot", "moustacheparrot", "pirateparrot", "topperhatparrot"];

var contadorJogadas = 0;

var contadorCartas;

function quantasCartas() {
    var qtdCartas = prompt("Com quantas cartas você quer jogar?"); 
    if (qtdCartas % 2 != 0 || qtdCartas < 4 || qtdCartas > 14) {
        quantasCartas();
    }
    return qtdCartas;
}

function comparador() { 
	return Math.random() - 0.5; 
}

function iniciarJogo() {
    var qtdCartas = quantasCartas();
    let carta;
    let nomes = [];
    
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

    const conteudo = document.querySelector('.main');
    conteudo.classList.remove('escondido');
}

function selecionarCarta(carta) {
    const cartaAnterior = document.querySelector('.selecionado');
    carta.classList.toggle('selecionado');
    verificaCarta(carta, cartaAnterior);
}

function verificaCarta(carta, cartaAnterior) {
    if (cartaAnterior != null && cartaAnterior.id == carta.id) {
        //alert('asd');
        carta.classList.toggle('selecionado');
        cartaAnterior.classList.toggle('selecionado');
        carta.classList.toggle('achou');
        cartaAnterior.classList.toggle('achou');
        contadorJogadas++;
    } else if (cartaAnterior != null && cartaAnterior.id != carta.id) {
        contadorJogadas++;
        setTimeout(remover, 1000, carta, cartaAnterior);

    } else {
        //alert("adadadad");
    }   
}

function remover(carta, cartaAnterior) {
    carta.classList.toggle('selecionado');
    cartaAnterior.classList.toggle('selecionado');
}



