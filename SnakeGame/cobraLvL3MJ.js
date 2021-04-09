


var tela;
var c;

//variaveis da vida

var Bonus;
var BonusP2;

var barrabonus;
var barrabonus2;

var barravida;
var barravida2;

var vidaCobra;
var vidaCobra2;

//variaveis das imagens

var Vitoria;
var MataCobra;
var Fundo;
var cabeca;
var macavermelha;
var macabranco;
var macaverde;
var macaazul;
var macaamarela;
var bola;
var barreira;

// variaveis do audio

var audioVitoria;
var audioGameOver;
var audio = [];
var audioComida = [];
var audioFundo;


// variaveis pontos

var pontos;
var pontos2;

var pontuacao;
var pontuacaoFinal;

var pontuacao2;
var pontuacaoFinal2;

var intervalo2;
var intervalo3;

var qtdMaca;

// variaveis cores do jogador1


var qtdVermelho;
var qtdAzul;
var qtdAmarela;
var qtdVerde;
var qtdBranco;

// variaveis cores do jogador2

var qtdVermelho2;
var qtdAzul2;
var qtdAmarela2;
var qtdVerde2;
var qtdBranco2;

//variaveis do cronometro

var contador;

var intervalo;

//variavel bonus da vida

var BonusDaVida;
var BonusDaVida2;


//variaveis da maça

var maca_x = [];
var maca_y = [];



//variaveis  dos obstaculos

var mata_x = [];
var mata_y = [];

//variaveis da barreira

var nasceBarreiraXEsq;
var nasceBarreiraYEsq;
var nasceBarreiraXDir;
var nasceBarreiraYDir;

// teclas
  
var paraEsquerda = false;
var paraEsquerda2 = false;

var paraDireita = true;
var paraDireita2 = true;

var paraCima = false;
var paraCima2 = false;

var paraBaixo = false;
var paraBaixo2 = false;

var noJogo = true;    

const TAMANHO_PONTO = 20;
const ALEATORIO_MAXIMO = 41;
var ATRASO = 140;
const C_ALTURA = 820;
const C_LARGURA = 820;    

const TECLA_ESQUERDA = 37;
const TECLA_DIREITA = 39;
const TECLA_ACIMA = 38;
const TECLA_ABAIXO = 40;
var TECLA_F5 = 116;
var TECLA_3 = 51;

const TECLA_W = 87;
const TECLA_A = 65;
const TECLA_S = 83;
const TECLA_D = 68;

var x = [];
var y = [];

var x3 = [];
var y3 = [];



//Maças

   for(var i = 0 ; i < 15 ; i++){
     
    var x1 = Math.floor(Math.random() * ALEATORIO_MAXIMO)
    maca_x[i] = x1 * TAMANHO_PONTO
    

    var y1 = Math.floor(Math.random() * ALEATORIO_MAXIMO)
    maca_y[i] = y1 * TAMANHO_PONTO
    

   }

   

   


//Controle do nascimento das maças nos eixos x e y
 
function colisaoMaca(){
     
     for(var i = 0 ; i < 15 ; i++){

     	 for(var j = i + 1 ; j < 15 ; j++){

     	 	if(maca_x[i] == maca_x[j] && maca_y[i] == maca_y[j]){

     	 		var NasceMacaX = Math.floor(Math.random() * ALEATORIO_MAXIMO)
     	 		var NasceMacaY = Math.floor(Math.random() * ALEATORIO_MAXIMO)

     	 		maca_x[i] = NasceMacaX * TAMANHO_PONTO
     	 		maca_y[i] = NasceMacaY * TAMANHO_PONTO
     	 	}
     	 }
     }

	
}



//Obstaculos


   for(var j = 0 ; j < 10 ; j++){


    var x2 = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    mata_x[j] = x2 * TAMANHO_PONTO

    var y2 = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    mata_y[j] = y2 * TAMANHO_PONTO
}
    

//Controle do nascimento dos obstaculos nos eixos

function colisaoObs(){

	for(var j = 0 ; j < 10 ; j++){

		for(var a = j + 1; a < 10 ; a++){

			if(mata_x[j] == mata_x[a] && mata_y[j] == mata_y[a]){

				var NasceObsX = Math.floor(Math.random() * ALEATORIO_MAXIMO)
				var NasceObsY = Math.floor(Math.random() * ALEATORIO_MAXIMO)

				mata_x[j] = NasceObsX * TAMANHO_PONTO
				mata_y[j] = NasceObsY * TAMANHO_PONTO
			}
		}
	}

}



     
// Controle do nascimento de obstaculos em maças

 function ColisaoObsMaca(){

       for(var i = 0 ; i < 15 ; i++){


                for(var j = 0 ; j < 10 ; j++){

                    if((maca_x[i] == mata_x[j])&&(maca_y[i] == mata_y[j])){

                        var NasceObsMacaX = Math.floor(Math.random() * ALEATORIO_MAXIMO)
                        var NasceObsMacaY = Math.floor(Math.random() * ALEATORIO_MAXIMO)

                        maca_x[i] = NasceObsMacaX * TAMANHO_PONTO
                        maca_y[i] = NasceObsMacaY * TAMANHO_PONTO


                    }
                }
         }

}


// nascimento das barreiras


nasceBarreiraXEsq = 240

nasceBarreiraYEsq = 120

nasceBarreiraXDir = 540

nasceBarreiraYDir = 120



// Controle do nascimentos das macas nas barreiraEsq

function colisaoMacaBarreiraEsq(){

  for(var i = 0 ; i < 15 ; i++){

    for(var matay = nasceBarreiraYEsq ; matay < 720; matay = matay + 20){

      if((maca_x[i] == nasceBarreiraXEsq) && (maca_y[i] == matay)){

        var NasceMacaBarreiraEsqX = Math.floor(Math.random()* ALEATORIO_MAXIMO)
        maca_x[i] = NasceMacaBarreiraEsqX * TAMANHO_PONTO

        var NasceMacaBarreiraEsqY = Math.floor(Math.random()* ALEATORIO_MAXIMO)
        maca_y[i] = NasceMacaBarreiraEsqY * TAMANHO_PONTO
      }
    }
  }
}

// Controle do nascimentos das macas nas barreiraDir

function colisaoMacaBarreiraDir(){

  for(var i = 0 ; i < 15 ; i++){

    for(var matay = nasceBarreiraYDir ; matay < 720; matay = matay + 20){

      if((maca_x[i] == nasceBarreiraXDir) && (maca_y[i] == matay)){

       var NasceMacaBarreiraDirX = Math.floor(Math.random()* ALEATORIO_MAXIMO)
       maca_x[i] = NasceMacaBarreiraDirX * TAMANHO_PONTO

       var NasceMacaBarreiraDirY = Math.floor(Math.random()* ALEATORIO_MAXIMO)
       maca_y[i] = NasceMacaBarreiraDirY * TAMANHO_PONTO
      }
    }
  }
}

// Controle do nascimentos dos obstaculos nas barreiraEsq

function colisaoObsBarreiraEsq(){

  for(var j = 0 ; j < 10 ; j++){

    for(var matay = nasceBarreiraYEsq ; matay < 720; matay = matay + 20){

     if((mata_x[j] == nasceBarreiraXEsq) && (mata_y[j] == matay)){

       var NasceObsBarreiraEsqX = Math.floor(Math.random()* ALEATORIO_MAXIMO)
       mata_x[j] = NasceObsBarreiraEsqX * TAMANHO_PONTO

       var NasceObsBarreiraEsqY = Math.floor(Math.random()* ALEATORIO_MAXIMO)
       mata_y[j] = NasceObsBarreiraEsqY * TAMANHO_PONTO
     }
    }
  }
}

// Controle do nascimentos dos obstaculos nas barreiraDir

function colisaoObsBarreiraDir(){

  for(var j = 0 ; j < 10 ; j++){

    for(var matay = nasceBarreiraYDir ; matay < 720; matay = matay + 20){

     if((mata_x[j] == nasceBarreiraXDir) && (mata_y[j] == matay)){

       var NasceObsBarreiraDirX = Math.floor(Math.random()* ALEATORIO_MAXIMO)
       mata_x[j] = NasceObsBarreiraDirX * TAMANHO_PONTO

       var NasceObsBarreiraDirY = Math.floor(Math.random()* ALEATORIO_MAXIMO)
       mata_y[j] = NasceObsBarreiraDirY * TAMANHO_PONTO
     }
    }
  }
}



//Funcao de nascer aleatorio jogador1



var NascerAleatorio = Math.ceil(Math.random()*4)

function nascer(){


    if(NascerAleatorio == 1 ){

        paraEsquerda = true;
        paraDireita = false;
        paraCima = false;
        paraBaixo = false;
    }
     if(NascerAleatorio == 2){
        
        paraDireita = true;
        paraEsquerda = false;
        paraCima = false;
        paraBaixo = false;
     }
      if(NascerAleatorio == 3){
        
        paraDireita = false;
        paraEsquerda = false;
        paraCima = true;
        paraBaixo = false;
      }

      if(NascerAleatorio == 4){

        paraDireita = false;
        paraEsquerda = false;
        paraCima = false;
        paraBaixo = true;
     }
}

//Funcao de nascer aleatorio jogador 2



var NascerAleatorio2 = Math.ceil(Math.random()*4)

function nascer2(){


    if(NascerAleatorio2 == 1 ){

        paraEsquerda2 = true;
        paraDireita2 = false;
        paraCima2 = false;
        paraBaixo2 = false;
    }
     if(NascerAleatorio2 == 2){
        
        paraDireita2 = true;
        paraEsquerda2 = false;
        paraCima2 = false;
        paraBaixo2 = false;
     }
      if(NascerAleatorio2 == 3){
        
        paraDireita2 = false;
        paraEsquerda2 = false;
        paraCima2 = true;
        paraBaixo2 = false;
      }

      if(NascerAleatorio2 == 4){

        paraDireita2 = false;
        paraEsquerda2 = false;
        paraCima2 = false;
        paraBaixo2 = true;
     }
}


//Gifs de explosoes


 function Gif(x,y){
  var explosao = document.createElement("div");
  var img = document.createElement("img");

  var att = document.createAttribute("class");
  var att1 = document.createAttribute("style");
  var att2 = document.createAttribute("id");
  var att3 = document.createAttribute("src");

  
  att.value = "explode";
  att1.value = "top:"+y+"px;left:"+x+"px;";
  att2.value = "explosao"
  att3.value = "explosoes.gif?"+new Date()


  explosao.setAttributeNode(att)
  explosao.setAttributeNode(att1)
  explosao.setAttributeNode(att2)
  img.setAttributeNode(att3)
  explosao.appendChild(img)
  document.body.appendChild(explosao)
   


}

// GIF da Vitoria do Jogador1

function gifVenceP1(){

  var explosao1 = document.createElement("div");
  var img1 = document.createElement("img");

  var att4 = document.createAttribute("class");
  var att5 = document.createAttribute("style");
  var att6 = document.createAttribute("id");
  var att7 = document.createAttribute("src");

  
  att4.value = "Gameover";
  att5.value = "top:"+489+"px;left:"+8+"px;";
  att6.value = "explosao1"
  att7.value = "VitoriaP1.gif"

  explosao1.setAttributeNode(att4)
  explosao1.setAttributeNode(att5)
  explosao1.setAttributeNode(att6)
  img1.setAttributeNode(att7)
  explosao1.appendChild(img1)
  document.body.appendChild(explosao1)
   


}

//Gif da Vitoria do Jogador2

function gifVenceP2(){

  var explosao1 = document.createElement("div");
  var img1 = document.createElement("img");

  var att4 = document.createAttribute("class");
  var att5 = document.createAttribute("style");
  var att6 = document.createAttribute("id");
  var att7 = document.createAttribute("src");

  
  att4.value = "vitoria";
  att5.value = "top:"+489+"px;left:"+8+"px;";
  att6.value = "explosao1"
  att7.value = "VitoriaP2.gif"

  explosao1.setAttributeNode(att4)
  explosao1.setAttributeNode(att5)
  explosao1.setAttributeNode(att6)
  img1.setAttributeNode(att7)
  explosao1.appendChild(img1)
  document.body.appendChild(explosao1)
   


}




iniciar();

// Funções


function iniciar() {
    tela = document.getElementById("tela"); 
    c = tela.getContext("2d");

    carregarImagens();
    carregarAudios();
    audioFundo.play();
    criarCobra();
    criarCobra2();
    setTimeout("cicloDeJogo()", ATRASO);
    nascer();
    nascer2();


 

// Vida JOGADOR1

    vidaCobra = 200
    barravida = document.getElementById("barravida")
    barravida.style.width = vidaCobra

    // Vida JOGADOR2

    vidaCobra2 = 200
    barravida2 = document.getElementById("barravida2")
    barravida2.style.width = vidaCobra2

// Bonus JOGADOR1

   Bonus = 0
   barrabonus = document.getElementById("barrabonus")
   barrabonus.style.width = Bonus
   BonusDaVida = 0

   // Bonus JOGADOR2

   BonusP2 = 0
   barrabonus2 = document.getElementById("barrabonus2")
   barrabonus2.style.width = BonusP2
   BonusDaVida2 = 0
   
// Quantidade de maca

qtdMaca = 15   

//mudanca de cores

qtdAzul = 0
qtdVermelho = 0
qtdAmarela = 0
qtdVerde = 0
qtdBranco = 0

qtdAzul2 = 0
qtdVermelho2 = 0
qtdAmarela2 = 0
qtdVerde2 = 0
qtdBranco2 = 0



// Cronometro

contador = new Number();

contador = 60

intervalo = setInterval("cronometro();",1000)


//pontuacao

//pontuacao

pontuacao = 0

pontuacao2 = 0

intervalo2 = setInterval("PontosComeco();",1)

intervalo3 = setInterval("PontosComeco2();",1)


}

//Pontuacao iniciando com 0 jogador1

function PontosComeco(){

   if(pontuacao == 0){

    pontuacao = 0
    Pontos.innerText = pontuacao
   }   

}

//Pontuacao iniciando com 0 jogador2

function PontosComeco2(){

   if(pontuacao2 == 0){

    pontuacao2 = 0
    Pontos_jogador2.innerText = pontuacao2
   }   

}



// Função do tempo

 function cronometro(){
    if(contador != 0){

        contador-= 1
        tempo.innerText = contador

    } 


    if(contador <=10){
        tempo.style.color ="orange"
    }

     if(contador < 6 ){
        tempo.style.color = "red"
     }

      if(contador == 0 && pontuacaoFinal > pontuacaoFinal2) {
        noJogo = false;
        VitoriaJogador1();
           
    }

     if(contador == 0 && pontuacaoFinal < pontuacaoFinal2) {
        noJogo = false;
        VitoriaJogador2();
           
    }


 }



 


function carregarImagens() {

    cabeca = new Image();
    cabeca.src = "cabeca.png"; 
    
    bola = new Image();
    bola.src = "corpo.png"; 
    
    macavermelha = new Image();
    macavermelha.src = "maca.png"; 

    macaazul = new Image();
    macaazul.src = "azul.png";

    macabranco = new Image();
    macabranco.src = "branco.png";

    macaamarela = new Image();
    macaamarela.src = "amarelo.png"

    macaverde = new Image();
    macaverde.src = "verde.png";

    MataCobra = new Image();
    MataCobra.src = "Perigo.png";

    Fundo = new Image();
    Fundo.src = "FundoDoJogo.jpg"

    barreira = new Image();
    barreira.src="barreira.png"




}


function carregarAudios(){
     
     for (var j = 0 ; j < 10 ; j++){
    audio[j] = new Audio();
    audio[j].src = "Explosao.mp3"


  }

       for (var i = 0 ; i < 15 ; i++){
    audioComida[i] = new Audio();
    audioComida[i].src = "audioComida.wav"


  }


    audioVitoria = new Audio();
    audioVitoria.src = "AudioVitoria.mp3"


    audioFundo = new Audio();
    audioFundo.src = "musicaFundo.mp3"


}




function criarCobra() {
    pontos = 6;
	
    for (var z = 0; z < pontos; z++) {
        x[z] = 100 - z * 20;
        y[z] = 60;
    }
}

function criarCobra2() {
    pontos2 = 6;
  
    for (var a = 0; a < pontos2; a++) {
        x3[a] = 100 - a * 20;
        y3[a] = 100;
    }
}


function cicloDeJogo() {
    if (noJogo) {
        verificarMaca();
        verificarMaca2();
        verificarColisao();
        verificarColisao2();
        mover();
        mover2();
        fazerDesenho();
        setTimeout("cicloDeJogo()", ATRASO);
        verificarDanger();
        verificarDanger2();
        verificaFim();
        bonus();
        bonus2();
        mudaCor();
        mudaCor2();
        morreBarreiraEsq();
        morreBarreiraEsq2();
        morreBarreiraDir();
        morreBarreiraDir2();

        
    } 
 
}

//Função da colisão com maça com jogador1

function verificarMaca() {

        var ControleSaidaMacaX = Math.random() * 50 * 3000
        var ControleSaidaMacaY = Math.random() * 50 * 4000

    for(var i = 0 ; i < 3 ; i++){
    if ((x[0] == maca_x[i]) && (y[0] == maca_y[i])) {

        pontos++;
        pontuacao = pontuacao + 5;
        Pontos.innerText=pontuacao;
        BonusDaVida++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

    for(var i = 3 ; i < 6 ; i++){
    if ((x[0] == maca_x[i]) && (y[0] == maca_y[i])) {

        pontos++;
        pontuacao = pontuacao + 2;
        Pontos.innerText=pontuacao;
        BonusDaVida++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

    for(var i = 6 ; i < 9 ; i++){
    if ((x[0] == maca_x[i]) && (y[0] == maca_y[i])) {

        pontos++;
        pontuacao = pontuacao + 4;
        Pontos.innerText=pontuacao;
        BonusDaVida++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

    for(var i = 9 ; i < 12 ; i++){
    if ((x[0] == maca_x[i]) && (y[0] == maca_y[i])) {

        pontos++;
        pontuacao = pontuacao + 3;
        Pontos.innerText=pontuacao;
        BonusDaVida++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

    for(var i = 12 ; i < 15 ; i++){
    if ((x[0] == maca_x[i]) && (y[0] == maca_y[i])) {

        pontos++;
        pontuacao++;
        Pontos.innerText=pontuacao;
        BonusDaVida++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

  pontuacaoFinal = pontuacao
     
}    

//Função da colisão com maça com jogador2

function verificarMaca2() {

        var ControleSaidaMacaX = Math.random() * 50 * 3000
        var ControleSaidaMacaY = Math.random() * 50 * 4000

    for(var i = 0 ; i < 3 ; i++){
    if ((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])) {

        pontos2++;
        pontuacao2 = pontuacao2 + 5;
        Pontos_jogador2.innerText=pontuacao2;
        BonusDaVida2++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

    for(var i = 3 ; i < 6 ; i++){
    if ((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])) {

        pontos2++;
        pontuacao2 = pontuacao2 + 2;
        Pontos_jogador2.innerText=pontuacao2;
        BonusDaVida2++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

    for(var i = 6 ; i < 9 ; i++){
    if ((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])) {

        pontos2++;
        pontuacao2 = pontuacao2 + 4;
        Pontos_jogador2.innerText=pontuacao2;
        BonusDaVida2++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

    for(var i = 9 ; i < 12 ; i++){
    if ((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])) {

        pontos2++;
        pontuacao2 = pontuacao2 + 3;
        Pontos_jogador2.innerText=pontuacao2;
        BonusDaVida2++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

    for(var i = 12 ; i < 15 ; i++){
    if ((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])) {

        pontos2++;
        pontuacao2++;
        Pontos_jogador2.innerText=pontuacao2;
        BonusDaVida2++;
        qtdMaca--;
        audioComida[i].play();
        ATRASO-=8;
        maca_x[i]=ControleSaidaMacaX;
        maca_y[i]=ControleSaidaMacaY;

    }

  }

  pontuacaoFinal2 = pontuacao2
     
}    

//Função da colisão com perigo com jogador1

 function verificarDanger(){
     barravida.style.width = vidaCobra
     barrabonus.style.width = Bonus

   for(var j = 0 ; j < 10 ; j++){

     if((x[0] == mata_x[j]) && (y[0] == mata_y[j])){

        var ControleSaidaObsX = Math.random() * 50 *5000
        var ControleSaidaObsY = Math.random() * 50 *7000


        audio[j].play()
        Gif(mata_x[j]+8, mata_y[j]+489)
        mata_x[j] = ControleSaidaObsX
        mata_y[j] = ControleSaidaObsY
        
        
        

        if(Bonus != 0){


          Bonus-=40

        }    else {

         vidaCobra-=40

             }
      }

    }
      
}

//Função da colisão com perigo com jogador2

 function verificarDanger2(){
     barravida2.style.width = vidaCobra2
     barrabonus2.style.width = BonusP2

   for(var j = 0 ; j < 10 ; j++){

     if((x3[0] == mata_x[j]) && (y3[0] == mata_y[j])){

        var ControleSaidaObsX = Math.random() * 50 *5000
        var ControleSaidaObsY = Math.random() * 50 *7000


        audio[j].play()
        Gif(mata_x[j]+8, mata_y[j]+489)
        mata_x[j] = ControleSaidaObsX
        mata_y[j] = ControleSaidaObsY
        
        
        

        if(BonusP2 != 0){


          BonusP2-=40

        }    else {

         vidaCobra2-=40

             }
      }

    }
      
}


// Função do Fim

  function verificaFim(){
    if(vidaCobra == 0){
        
        barravida.style.width=0
        VitoriaJogador2();
        noJogo = false
        clearInterval(intervalo)

    }

    if(vidaCobra2 == 0){
        
        barravida2.style.width=0
        VitoriaJogador1();
        noJogo = false
        clearInterval(intervalo)

    }

    if(qtdMaca == 0 && pontuacaoFinal > pontuacaoFinal2){

        VitoriaJogador1();
        noJogo = false
        clearInterval(intervalo)
        
    }

     if(qtdMaca == 0 && pontuacaoFinal < pontuacaoFinal2){

        VitoriaJogador2();
        noJogo = false
        clearInterval(intervalo)
        
    }

  }

//Função do bonus JOGADOR1
 
    
  function bonus(){
    barrabonus.style.width = Bonus

    

    if(BonusDaVida == 3){
        
        Bonus +=40
        BonusDaVida = 0
    }

    if(BonusDaVida == 6){

         Bonus += 40
         BonusDaVida = 0

    }
    if(BonusDaVida == 9){

        Bonus +=40
        BonusDaVida = 0
    }
    if(BonusDaVida == 12){

        Bonus +=40
        BonusDaVida = 0

    }
    if(BonusDaVida == 15){

        Bonus +=40
        BonusDaVida = 0
    }

   if(verificarDanger() == false){

          Bonus+=40
          BonusDaVida = 0
    }
}


//Função do bonus JOGADOR2
 
    
  function bonus2(){
    barrabonus2.style.width = BonusP2

    

    if(BonusDaVida2 == 3){
        
        BonusP2 +=40
        BonusDaVida2 = 0
    }

    if(BonusDaVida2 == 6){

         BonusP2 += 40
         BonusDaVida2 = 0

    }
    if(BonusDaVida2 == 9){

        BonusP2 +=40
        BonusDaVida2 = 0
    }
    if(BonusDaVida2 == 12){

        BonusP2 +=40
        BonusDaVida2 = 0

    }
    if(BonusDaVida2 == 15){

        BonusP2 +=40
        BonusDaVida2 = 0
    }

   if(verificarDanger2() == false){

          BonusP2+=40
          BonusDaVida2 = 0
    }
}


  


// Função da Colisão COM JOGADOR1

function verificarColisao() {

    if (y[0] >= C_ALTURA) {
       y[0] = 0

    }

    if (y[0] < 0){
       y[0] = C_ALTURA 
    }
    

    if (x[0] >= C_LARGURA) {
      x[0] = 0
    }

    if (x[0] < 0) {
      x[0] = C_LARGURA 
    }
}

// Função da Colisão COM JOGADOR2

function verificarColisao2() {
    
    if (y3[0] >= C_ALTURA) {
       y3[0] = 0

    }

    if (y3[0] < 0){
       y3[0] = C_ALTURA 
    }
    

    if (x3[0] >= C_LARGURA) {
      x3[0] = 0
    }

    if (x3[0] < 0) {
      x3[0] = C_LARGURA 
    }
}



//Funcao bater na barreiraESQ jogador1

function morreBarreiraEsq(){

  for(var matax = nasceBarreiraXEsq; matax < 242; matax = matax + 2){

    for(var matay = nasceBarreiraYEsq ; matay < 720 ; matay = matay + 20){

     if((x[0] == matax) && (y[0] == matay)){

      barravida.style.width = 0
      barrabonus.style.width = 0
      audio[0].play();
      noJogo = false
      clearInterval(intervalo)
      VitoriaJogador2();


     }
    }
  }
}

//Funcao bater na barreiraESQ jogador2

function morreBarreiraEsq2(){

  for(var matax = nasceBarreiraXEsq; matax < 242; matax = matax + 2){

    for(var matay = nasceBarreiraYEsq ; matay < 720 ; matay = matay + 20){

     if((x3[0] == matax) && (y3[0] == matay)){
      
      barravida2.style.width = 0
      barrabonus2.style.width = 0
      audio[0].play();
      noJogo = false
      clearInterval(intervalo)
      VitoriaJogador1();



     }
    }
  }
}

//Funcao bater na barreiraDir com jogador1

function morreBarreiraDir(){

  for(var matax = nasceBarreiraXDir; matax < 542; matax = matax + 2){

    for(var matay = nasceBarreiraYDir ; matay < 720 ; matay = matay + 20){

     if((x[0] == matax) && (y[0] == matay)){
      
      barravida.style.width = 0
      barrabonus.style.width = 0
      audio[0].play();
      noJogo = false
      clearInterval(intervalo)
      VitoriaJogador2();
 

     }
    }
  }
}

//Funcao bater na barreiraDir com jogador2

function morreBarreiraDir2(){

  for(var matax = nasceBarreiraXDir; matax < 542; matax = matax + 2){

    for(var matay = nasceBarreiraYDir ; matay < 720 ; matay = matay + 20){

     if((x3[0] == matax) && (y3[0] == matay)){
      
      barravida2.style.width = 0
      barrabonus2.style.width = 0
      audio[0].play();
      noJogo = false
      clearInterval(intervalo)
      VitoriaJogador1();


     }
    }
  }
}

// Função Mover jogador 1

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

    document.addEventListener("keydown",teclaDown1)
} 

// Função Mover jogador 2

function mover2() {
    for (var a = pontos2; a > 0; a--) {
        x3[a] = x3[a-1];
        y3[a] = y3[a-1];
    }


    if (paraEsquerda2) {
        x3[0] -= TAMANHO_PONTO;
      
    }

    if (paraDireita2) {
        x3[0] += TAMANHO_PONTO;
        
    }

    if (paraCima2) {
        y3[0] -= TAMANHO_PONTO;
        
    }

    if (paraBaixo2) {
        y3[0] += TAMANHO_PONTO;
      
    }

    document.addEventListener("keydown",teclaDown2)
} 

//Muda cor da cobra1 para a maca que ela comer

function mudaCor(){



      for(var i = 0 ; i < 3 ; i++){

            if((x[0] == maca_x[i]) && (y[0] == maca_y[i])){

              qtdVermelho++;
                qtdAzul = 0
                qtdAmarela = 0
                qtdVerde = 0
                qtdBranco = 0


            }
      }

      for(var i = 3 ; i < 6 ; i++){

            if((x[0] == maca_x[i]) && (y[0] == maca_y[i])){

              qtdAzul++;
                qtdVermelho = 0
                qtdAmarela = 0
                qtdVerde = 0
                qtdBranco = 0

            }
      }

      for(var i = 6 ; i < 9 ; i++){

            if((x[0] == maca_x[i]) && (y[0] == maca_y[i])){

              qtdAmarela++;           
                qtdAzul = 0
                qtdVermelho = 0
                qtdVerde = 0
                qtdBranco = 0

            }
      }

      for(var i = 9 ; i < 12 ; i++){

            if((x[0] == maca_x[i]) && (y[0] == maca_y[i])){

              qtdVerde++;      
                qtdAzul = 0
                qtdAmarela = 0
                qtdVermelho = 0
                qtdBranco = 0

            }
      }

      for(var i = 12 ; i < 15 ; i++){

            if((x[0] == maca_x[i]) && (y[0] == maca_y[i])){

              qtdBranco++;
                qtdAzul = 0
                qtdAmarela = 0
                qtdVerde = 0
                qtdVermelho = 0

            }
      }
  }

//Muda cor da cobra2 para a maca que ela comer

function mudaCor2(){



      for(var i = 0 ; i < 3 ; i++){

            if((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])){

              qtdVermelho2++;
                qtdAzul2 = 0
                qtdAmarela2 = 0
                qtdVerde2 = 0
                qtdBranco2 = 0


            }
      }

      for(var i = 3 ; i < 6 ; i++){

            if((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])){

              qtdAzul2++;
                qtdVermelho2 = 0
                qtdAmarela2 = 0
                qtdVerde2 = 0
                qtdBranco2 = 0

            }
      }

      for(var i = 6 ; i < 9 ; i++){

            if((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])){

              qtdAmarela2++;           
                qtdAzul2 = 0
                qtdVermelho2 = 0
                qtdVerde2 = 0
                qtdBranco2 = 0

            }
      }

      for(var i = 9 ; i < 12 ; i++){

            if((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])){

              qtdVerde2++;      
                qtdAzul2 = 0
                qtdAmarela2 = 0
                qtdVermelho2 = 0
                qtdBranco2 = 0

            }
      }

      for(var i = 12 ; i < 15 ; i++){

            if((x3[0] == maca_x[i]) && (y3[0] == maca_y[i])){

              qtdBranco2++;
                qtdAzul2 = 0
                qtdAmarela2 = 0
                qtdVerde2 = 0
                qtdVermelho2 = 0

            }
      }
  }




// Função desenho

function fazerDesenho() {
  c.clearRect(0, 0, C_LARGURA, C_ALTURA);
	c.fillRect(0, 0, C_LARGURA, C_ALTURA);
	colisaoMaca();
	colisaoObs();
	ColisaoObsMaca();
  colisaoMacaBarreiraEsq();
  colisaoMacaBarreiraDir();
  colisaoObsBarreiraEsq();
  colisaoObsBarreiraDir();
	

     
    if (noJogo) {

    

        //Desenho Fundo

         c.drawImage(Fundo, 0, 0)

        //Desenho da barreira

         c.drawImage(barreira, nasceBarreiraXEsq , nasceBarreiraYEsq, 20, 600)
         c.drawImage(barreira, nasceBarreiraXDir , nasceBarreiraYDir, 20, 600)
   
       //Desenho de maças

        for(var i = 0 ; i < 3 ; i++){

        c.drawImage(macavermelha, maca_x[i], maca_y[i])
      }
        for(var i = 3 ; i < 6 ; i++){

        c.drawImage(macaazul, maca_x[i], maca_y[i])
      }
        for(var i = 6 ; i < 9 ; i++){

        c.drawImage(macaamarela, maca_x[i], maca_y[i])
      }
        for(var i = 9 ; i < 12 ; i++){

        c.drawImage(macaverde, maca_x[i], maca_y[i])
      }

        for(var i = 12 ; i < 15 ; i++){

        c.drawImage(macabranco, maca_x[i], maca_y[i])
      }
 

     


       //Desenho de Perigo

         for(var j = 0 ; j < 10 ; j++){
         c.drawImage(MataCobra, mata_x[j], mata_y[j])
      }
       
         
         // Desenho Jogador1
		
        for (var z = 0; z < pontos; z++) {
            if (z == 0) {
                c.drawImage(cabeca, x[z], y[z]);
            } else {
                c.drawImage(bola, x[z], y[z]);
            }

            if(qtdVermelho != 0){

              c.drawImage(macavermelha, x[z], y[z])
            }

            if(qtdAzul != 0){

              c.drawImage(macaazul, x[z], y[z])
            }

            if(qtdAmarela != 0){

              c.drawImage(macaamarela, x[z], y[z])
            }

            if(qtdVerde != 0){

              c.drawImage(macaverde, x[z], y[z])
            }

            if(qtdBranco != 0){

              c.drawImage(macabranco, x[z], y[z])
            }
          
        }

         // Desenho Jogador2
    
        for (var a = 0; a < pontos2; a++) {
            if (a == 0) {
                c.drawImage(cabeca, x3[a], y3[a]);
            } else {
                c.drawImage(bola, x3[a], y3[a]);
            }

            if(qtdVermelho2 != 0){

              c.drawImage(macavermelha, x3[a], y3[a])
            }

            if(qtdAzul2 != 0){

              c.drawImage(macaazul, x3[a], y3[a])
            }

            if(qtdAmarela2 != 0){

              c.drawImage(macaamarela, x3[a], y3[a])
            }

            if(qtdVerde2 != 0){

              c.drawImage(macaverde, x3[a], y3[a])
            }

            if(qtdBranco2 != 0){

              c.drawImage(macabranco, x3[a], y3[a])
            }
          
        }

               
    } else {

        verificaFim();
       
    }
  }




function VitoriaJogador1() {
     
    c.clearRect(0,0,C_LARGURA,C_ALTURA)
    gifVenceP1()
    audioVitoria.play();
    audioVitoria = false;
    audioFundo.muted = true;


    onkeydown = function(){ 

      var tecla1 = event.keyCode

      //Bloqueio F5 na Derrota

       if(tecla1 == TECLA_F5){

        event.preventDefault();

       }

      // TECLA3

       if(tecla1 == TECLA_3){
        
        window.location.reload();
      
       }
    }  
}

function VitoriaJogador2() {
     
    c.clearRect(0,0,C_LARGURA,C_ALTURA)
    gifVenceP2()
    audioVitoria.play();
    audioVitoria = false;
    audioFundo.muted = true;

  onkeydown = function(){

      var tecla2 = event.keyCode

   //Bloqueio F5 na Vitoria

       if(tecla2 == TECLA_F5){

        event.preventDefault();

       }
  }


}

function teclaDown1(e) {
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

//Bloqueio F5 no Jogo

    if(tecla == TECLA_F5){

        e.preventDefault();
    }


};

function teclaDown2() {
    var tecla2 = event.keyCode;


    if ((tecla2 == TECLA_A) && (!paraDireita2)) {
        paraEsquerda2 = true;
        paraCima2 = false;
        paraBaixo2 = false;
    }

    if ((tecla2 == TECLA_D) && (!paraEsquerda2)) {
        paraDireita2 = true;
        paraCima2 = false;
        paraBaixo2 = false;
    }

    if ((tecla2 == TECLA_W) && (!paraBaixo2)) {
        paraCima2 = true;
        paraDireita2 = false;
        paraEsquerda2 = false;
    }

    if ((tecla2 == TECLA_S) && (!paraCima2)) {
        paraBaixo2 = true;
        paraDireita2 = false;
        paraEsquerda2 = false;
    }        
};

