function quantasCartas() {
    var qtdCartas = prompt("Com quantas cartas você quer jogar?"); 
    if (qtdCartas % 2 != 0 || qtdCartas < 4 || qtdCartas > 14) {
        quantasCartas();
    }
    return qtdCartas;
}

function iniciarJogo() {
    var qtdCartas = quantasCartas();
    //let arrayCartas[];

    const conteudo = document.querySelector('.main');
    conteudo.classList.remove('escondido');
}

function selecionarCarta(carta) {
    carta.classList.add('selecionado');
}



