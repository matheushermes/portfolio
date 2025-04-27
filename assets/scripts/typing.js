const description = document.querySelector('.animate-typing');
const text = description.innerText;
let index = 0;

let writeDescription = () => {
    //Remover o cursor antigo (se existir);
    description.innerHTML = description.innerHTML.replace('<span class="cursor">|</span>', '');

    if (text.length > index) {
        //Se for o primeiro índice, coloca o primeiro caractere;
        if (index == 0) {
            description.innerHTML = text.charAt(index);
        } else {
            //Adiciona a letra atual ao conteúdo do parágrafo;
            description.innerHTML += text.charAt(index);
        }

        //Adiciona o cursor com uma tag span que tem a cor definida;
        description.innerHTML += '<span class="cursor">|</span>';

        index++;
        setTimeout(writeDescription, 200); //Intervalo entre cada letra;
    }
}

writeDescription();