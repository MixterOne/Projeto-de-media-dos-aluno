let form = document.querySelector('.formulario');

form.addEventListener('submit', function(e) {
        
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

    if(mediaNota >= 20){
        
        document.querySelector('.media').innerHTML =  `<p>A media da nota de ${capturandoNome} é: ${mediaNota}<br> Aluno(a) ta de parabéns </span></p>`
        
    }else if(mediaNota >= 15){
        document.querySelector('.media').innerHTML = `<p>A media da nota de ${capturandoNome} é: ${mediaNota}<br> Aluno(a) Atingiu a nota necessária para passar!</p>`
    }else if(mediaNota < 15){
        document.querySelector('.media').innerHTML = `<p>A media da nota de ${capturandoNome} é: ${mediaNota}<br> Aluno(a) Em recuperação</p>`
    }

    // impede o envio do form
    e.preventDefault();

    
});



