


var tela;
var c;
var nome;

//variaveis da vida

var Bonus;
var barrabonus;
var barravida;
var vidaCobra;

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


// variaveis ponto

var pontos;
var pontuacao;
var intervalo2;

// variaveis das cores

var qtdMaca;
var qtdVermelho;
var qtdAzul;
var qtdAmarela;
var qtdVerde;
var qtdBranco;

//variaveis do cronometro

var contador;

var intervalo;

//variavel bonus da vida

var BonusDaVida;


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
var paraDireita = true;
var paraCima = false;
var paraBaixo = false;
var noJogo = true;    


const TAMANHO_PONTO = 20
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

var x = [];
var y = [];



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



//Funcao de nascer aleatorio



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

// GIF da Derrota

function gifDerrota(){

  var explosao1 = document.createElement("div");
  var img1 = document.createElement("img");

  var att4 = document.createAttribute("class");
  var att5 = document.createAttribute("style");
  var att6 = document.createAttribute("id");
  var att7 = document.createAttribute("src");

  
  att4.value = "Gameover";
  att5.value = "top:"+489+"px;left:"+8+"px;";
  att6.value = "explosao1"
  att7.value = "GameOver.gif"

  explosao1.setAttributeNode(att4)
  explosao1.setAttributeNode(att5)
  explosao1.setAttributeNode(att6)
  img1.setAttributeNode(att7)
  explosao1.appendChild(img1)
  document.body.appendChild(explosao1)
   


}

//Gif da Vitoria

function gifVitoria(){

  var explosao1 = document.createElement("div");
  var img1 = document.createElement("img");

  var att4 = document.createAttribute("class");
  var att5 = document.createAttribute("style");
  var att6 = document.createAttribute("id");
  var att7 = document.createAttribute("src");

  
  att4.value = "vitoria";
  att5.value = "top:"+489+"px;left:"+8+"px;";
  att6.value = "explosao1"
  att7.value = "Vitoria.gif"

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
    setTimeout("cicloDeJogo()", ATRASO);
    nascer();


 

// Vida

    vidaCobra = 200
    barravida = document.getElementById("barravida")
    barravida.style.width = vidaCobra

// Bonus

   Bonus = 0
   barrabonus = document.getElementById("barrabonus")
   barrabonus.style.width = Bonus
   BonusDaVida = 0
   
// Quantidade de maca

qtdMaca = 15    
qtdAzul = 0
qtdVermelho = 0
qtdAmarela = 0
qtdVerde = 0
qtdBranco = 0

// Cronometro

contador = new Number();

contador = 60

intervalo = setInterval("cronometro();",1000)


//pontuacao

pontuacao = new Number();

pontuacao = 0

intervalo2 = setInterval("PontoComeco();",1)

   if(localStorage.setItem("pontos",pontuacao) == null){
        
   localStorage.setItem("pontos",pontuacao)

    } 

}

//Ponto inicando com 0

function PontoComeco(){

  if(pontuacao == 0){

    pontuacao = 0
    Pontos.innerText = pontuacao
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

      if(contador == 0) {
        noJogo = false;
        fimDeJogo();

           
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

    macaamarela= new Image();
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

    audioGameOver = new Audio();
    audioGameOver.src = "audioGameOver.mp3"

    audioVitoria = new Audio();
    audioVitoria.src = "AudioVitoria.mp3"


    audioFundo = new Audio();
    audioFundo.src = "musicaFundo.mp3"


}




function criarCobra() {
    pontos = 6;
	
    for (var z = 0; z < pontos; z++) {
        x[z] = 100 - z * 20;
        y[z] = 100;
    }
}


function cicloDeJogo() {
    if (noJogo) {
        verificarMaca();
        verificarColisao();
        mover();
        fazerDesenho();
        setTimeout("cicloDeJogo()", ATRASO);
        verificarDanger();
        verificaFim();
        bonus();
        mudaCor();
        morreBarreiraEsq();
        morreBarreiraDir();
      

        
    } 
 
}

//Função da colisão com maça

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

  localStorage.setItem("pontos",pontuacao)
     
}   

//Função da colisão com perigo

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


// Função do Fim

  function verificaFim(){
    if(vidaCobra == 0){
        
        barravida.style.width=0
        fimDeJogo();
        noJogo = false
        clearInterval(intervalo)


    }

    if(qtdMaca == 0){

        VitoriaNoJogo();
        noJogo = false
        clearInterval(intervalo)

        
    }

  }

//Função do bonus
 
    
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

  


// Função da Colisão

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

//Funcao bater na barreiraESQ

function morreBarreiraEsq(){

  for(var matax = nasceBarreiraXEsq; matax < 242; matax = matax + 2){

    for(var matay = nasceBarreiraYEsq ; matay < 720 ; matay = matay + 20){

     if((x[0] == matax) && (y[0] == matay)){

      barravida.style.width = 0
      barrabonus.style.width = 0
      audio[0].play();
      noJogo = false
      clearInterval(intervalo)
      fimDeJogo();

     }
    }
  }
}

//Funcao bater na barreiraDir

function morreBarreiraDir(){

  for(var matax = nasceBarreiraXDir; matax < 542; matax = matax + 2){

    for(var matay = nasceBarreiraYDir ; matay < 720 ; matay = matay + 20){

     if((x[0] == matax) && (y[0] == matay)){

      barravida.style.width = 0
      barrabonus.style.width = 0
      audio[0].play();
      noJogo = false
      clearInterval(intervalo)
      fimDeJogo();

     }
    }
  }
}

// Função Mover

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

//Muda cor da cobra para a maca que ela comer

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

               
    } else {

        verificaFim();

       
    }
  }




function fimDeJogo() {
     
    c.clearRect(0,0,C_LARGURA,C_ALTURA)
    gifDerrota()
    audioGameOver.play();
    audioGameOver = false;
    audioFundo.muted = true;
    Ranking();



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

function VitoriaNoJogo() {
     
    c.clearRect(0,0,C_LARGURA,C_ALTURA)
    gifVitoria()
    audioVitoria.play();
    audioVitoria = false;
    audioFundo.muted = true;
    Ranking();

  onkeydown = function(){

      var tecla2 = event.keyCode

   //Bloqueio F5 na Vitoria

       if(tecla2 == TECLA_F5){

        event.preventDefault();

       }
  }


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

//Bloqueio F5 no Jogo

    if(tecla == TECLA_F5){

        e.preventDefault();
    }


};


function Ranking(){


var arrayRanking = [];

    for(var i = 0 ; i >= 0; i++){

    var nome = prompt("Digite o seu nome")

    if(nome == "" || nome == null){

      alert("Digite um nome válido")

    } else {

      break;
    }


    }

var pontos = localStorage.getItem("pontos")

 
 if (JSON.parse(localStorage.getItem("ranking")) != null){

    arrayRanking = JSON.parse(localStorage.getItem("ranking"))
  }



var Ranking = {

  Nome: nome,

  Pontos : pontos
};

 

arrayRanking.push(Ranking)


localStorage.setItem("ranking" , JSON.stringify(arrayRanking))
  


       
}