let form = document.querySelector('.formulario');

form.addEventListener('submit', function(e) {
    

    //introdução da div
    let divNova = document.createElement("div");
    divNova.classList.add("boxAluno");

    let img = document.createElement("img");
    img.src = "MF.png";

    //let conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    //divNova.appendChild(conteudoNovo);

    let divAtual = document.querySelector(".container");
    divAtual.appendChild(divNova);

    //Conteudo da div

    let nomeDoAluno = document.createElement("h1")
    nomeDoAluno.classList.add("nomeAluno")


    let primeiraNotaDoAluno = document.createElement("p")
    primeiraNotaDoAluno.classList.add("notaAluno1")

    let segundaNotaDoAluno = document.createElement("p")
    segundaNotaDoAluno.classList.add("notaAluno2")

    let mediaDoAluno = document.createElement("p")
    mediaDoAluno.classList.add("media")
    
    divNova.appendChild(img);
    divNova.appendChild(nomeDoAluno)
    divNova.appendChild(primeiraNotaDoAluno)
    divNova.appendChild(segundaNotaDoAluno)
    divNova.appendChild(mediaDoAluno)
    

    
    //valor dos input
    capturandoNome = document.querySelector('.name').value;
    document.querySelector('.nomeAluno').innerHTML = capturandoNome;

    capturandoNota1 = document.querySelector('.nota1').value;
    document.querySelector('.notaAluno1').innerHTML = `<p>A primeira nota é: ${capturandoNota1}<p>`

    capturandoNota2 = document.querySelector('.nota2').value;
    document.querySelector('.notaAluno2').innerHTML = `<p>A segunda nota é: ${capturandoNota2}<p>`

    //Soma e media dos valores

    let n1 = parseInt(capturandoNota1)
    let n2 = parseInt(capturandoNota2)

    let mediaNota = (n1 + n2) / 2;
    document.querySelector('.media').innerHTML = `<p>A media da nota de ${capturandoNome} é: ${mediaNota}</p>`

    // impede o envio do form
    e.preventDefault();

    
});



