let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras= [
    palavra001 = {
        nome: "CRIATIVIDADE",
        categoria: "INGENUITY"
    },
    palavra002={
        nome: "PALESTRA",
        categoria: "LECTURE"
    },
    palavra003={
        nome: "INTELECTUAL",
        categoria: "SCHOLAR"
    },
    palavra004={
        nome: "SENSATO",
        categoria: "SENSIBLE"
    },
    palavra005={
        nome: "CHARUTO",
        categoria: "CIGAR"
    },
    palavra006={
        nome: "SACADA",
        categoria: "BALCONY"
    },
    palavra007={
        nome: "ESPECIALISTA",
        categoria: "ADEPT"
    },
    palavra008={
        nome: "CONDENAR",
        categoria: "CONVICT"
    },
    palavra009={
        nome: "PUNICAO",
        categoria: "RETRIBUTION"
    },
    palavra010={
        nome: "APOSENTADO",
        categoria: "RETIRED"
    },
    palavra011={
        nome: "DESVIO",
        categoria: "DIVERSION"
    },
    palavra012={
        nome: "HABITAVEL",
        categoria: "INHABITABLE"
    },
    palavra013={
        nome: "FERIMENTO",
        categoria: "INJURY"
    },
    palavra014={
        nome: "ROMANCE",
        categoria: "NOVEL"
    },
    palavra015={
        nome: "MEDICO",
        categoria: "PHYSICIAN"
    },
    palavra016={
        nome: "SILICIO",
        categoria: "SILICON"
    },
]

criarPalavraSecreta();

function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML=palavraSecretaCategoria;

    const  palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i]= "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }
    }
}

function verificarLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
    mudarStyleLetra("tecla-" + letra)
    comparalistas(letra);
    montarPalavraNaTela();
    
}



}

function  mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#ff3e3e";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
const pos = palavraSecretaSorteada.indexOf(letra)
if(pos < 0 ){
    tentativas--
    carregaImagemForca()

    if(tentativas == 0){
        abreModal("OPS!", "Não foi dessa vez...a palavra era <br>" + palavraSecretaSorteada)     
    }
}
else{
for(i = 0; i < palavraSecretaSorteada.length; i++){
if(palavraSecretaSorteada[i] == letra){
    listaDinamica[i] = letra;
    }
    }
}

let vitoria = true;
for(i = 0; i < palavraSecretaSorteada.length; i++){
    if(palavraSecretaSorteada[i]!= listaDinamica[i]){
    vitoria=false;
    }
}

if(vitoria==true){
tentativas=0;
abreModal("PARABÉNS", "Você venceu!" )
}

}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url(./img/forca01.png)";
            break;

        case 4:
        document.getElementById("imagem").style.background = "url(./img/forca02.png)";
        break;

        case 3:
        document.getElementById("imagem").style.background = "url(./img/forca03.png)";
        break;

        case 2:
        document.getElementById("imagem").style.background = "url(./img/forca04.png)";
        break;

        case 1:
        document.getElementById("imagem").style.background = "url(./img/forca05.png)";
        break;

        case 0:
        document.getElementById("imagem").style.background = "url(./img/forca06.png)";
        break;

        default:  document.getElementById("imagem").style.background = "url(./img/forca.png)";
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exempleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    })
}

let bntReiniciar = document.querySelector("#btnReiniciar");
bntReiniciar.addEventListener("click", function(){
    location.reload();
}
)