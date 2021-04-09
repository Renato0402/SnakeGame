
/*
   Jogo da Cobra - JavaScript
   Autor: Jan Bodnar
   http://zetcode.com/javascript/snake/
   Adaptado por: Gilson Pereira
*/

// Principal

var tela;
var c;
var audioFundo;
var audioComida;
var audio;

var pontuacao;
var intervalo;

var cabeca;
var maca;
var bola;
var Perigo;

var pontos;
var maca_x;
var maca_y;

var paraEsquerda = false;
var paraDireita = true;
var paraCima = false;
var paraBaixo = false;
var noJogo = true;    

const TAMANHO_PONTO = 20;
const ALEATORIO_MAXIMO = 41;
const ATRASO = 60;
const C_ALTURA = 820;
const C_LARGURA = 820;    

const TECLA_ESQUERDA = 37;
const TECLA_DIREITA = 39;
const TECLA_ACIMA = 38;
const TECLA_ABAIXO = 40;

var x = [];
var y = [];

iniciar();

// Funções




function iniciar() {
    tela = document.getElementById("tela");
    c = tela.getContext("2d");

	c.fillStyle = "purple";
	c.fillRect(0, 0, C_LARGURA, C_ALTURA);

    carregarImagens();
    CarregarAudio();
    audioFundo.play();
    criarCobra();
    localizarMaca();
    setTimeout("cicloDeJogo()", ATRASO);


//Pontuacao

pontuacao = new Number();

pontuacao = 0

intervalo = setInterval("PontosComeco();",1)


}   

//Pontos comecando com 0

function PontosComeco(){

	if(pontuacao == 0){

		pontuacao = 0
		PontosNV1.innerText = pontuacao
	}
} 



 function CarregarAudio(){

   audioFundo = new Audio();
   audioFundo.src="musicaFundo.mp3"

   audioComida = new Audio();
   audioComida.src="audioComida.wav"

   audio = new Audio();
   audio.src="Explosao.mp3"
 
 }


function carregarImagens() {
    cabeca = new Image();
    cabeca.src = "cabeca.png";    
    
    bola = new Image();
    bola.src = "corpo.png"; 
    
    maca = new Image();
    maca.src = "maca.png"; 

 }

function criarCobra() {
    pontos = 6;
	
    for (var z = 0; z < pontos; z++) {
        x[z] = 100 - z * 20;
        y[z] = 100;
    }
}

function localizarMaca() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    maca_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    maca_y = r * TAMANHO_PONTO;
}    

function cicloDeJogo() {
    if (noJogo) {
        verificarMaca();
        verificarColisao();
        mover();
        fazerDesenho();
        setTimeout("cicloDeJogo()", ATRASO);
    }
}

function verificarMaca() {
    if ((x[0] == maca_x) && (y[0] == maca_y)) {
        pontos++;
        pontuacao++;
        PontosNV1.innerText = pontuacao;
        localizarMaca();
        audioComida.play();
    }
}    

function verificarColisao() {
    for (var z = pontos; z > 0; z--) {
        if ((z > 7) && (x[0] == x[z]) && (y[0] == y[z])) {

            audio.play();
            noJogo = false;
        }
    }

    if (y[0] >= C_ALTURA) {

        audio.play();
        noJogo = false;
    }

    if (y[0] < 0) {

       audio.play();
       noJogo = false;
    }

    if (x[0] >= C_LARGURA) {

      audio.play();
      noJogo = false;
    }

    if (x[0] < 0) {

      audio.play();
      noJogo = false;
    }
}

function mover() {
    for (var z = pontos; z > 0; z--) {
        x[z] = x[z-1];
        y[z] = y[z-1];
    }

    if (paraEsquerda) {
        x[0] -= TAMANHO_PONTO;
    }

    if (paraDireita) {
        x[0] += TAMANHO_PONTO;
    }

    if (paraCima) {
        y[0] -= TAMANHO_PONTO;
    }

    if (paraBaixo) {
        y[0] += TAMANHO_PONTO;
    }
}    

function fazerDesenho() {
    c.clearRect(0, 0, C_LARGURA, C_ALTURA);
	c.fillRect(0, 0, C_LARGURA, C_ALTURA);
	
    if (noJogo) {
        c.drawImage(maca, maca_x, maca_y);
		
        for (var z = 0; z < pontos; z++) {
            if (z == 0) {
                c.drawImage(cabeca, x[z], y[z]);
            } else {
                c.drawImage(bola, x[z], y[z]);
            }
        }    
    } else {
        fimDeJogo();
        clearInterval(intervalo)
        audioFundo.muted=true;


    }        
}

function fimDeJogo() {
    c.fillStyle = "yellow";
    c.textBaseline = "middle"; 
    c.textAlign = "center"; 
    c.font = "normal bold 35px cursive";
    c.fillText("O Jogo Acabou", C_LARGURA/2, C_ALTURA/2);

}

onkeydown = function(e) {
    var tecla = e.keyCode;

    if ((tecla == TECLA_ESQUERDA) && (!paraDireita)) {
        paraEsquerda = true;
        paraCima = false;
        paraBaixo = false;
    }

    if ((tecla == TECLA_DIREITA) && (!paraEsquerda)) {
        paraDireita = true;
        paraCima = false;
        paraBaixo = false;
    }

    if ((tecla == TECLA_ACIMA) && (!paraBaixo)) {
        paraCima = true;
        paraDireita = false;
        paraEsquerda = false;
    }

    if ((tecla == TECLA_ABAIXO) && (!paraCima)) {
        paraBaixo = true;
        paraDireita = false;
        paraEsquerda = false;
    }        
};    
