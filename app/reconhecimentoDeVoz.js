const elementoChute = document.getElementById('chute');
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

//Instancia da API de reconhecimento de VOZ
const recognition = new SpeechRecognition();
//Confirgurando a linguagem
recognition.lang = 'pt-Br';
//Iniciando a aplicação de reconhecimento de VOZ
recognition.start();

/*Criando um evento listener para quando for falado algo o sistema vai exibir a mensagem no console
Neste caso criamos uma função onSpeak para passar a ela o parâmetro evento para poder exibí-lo no console
*/
recognition.addEventListener('result', onSpeak); 

//Este evento faz com que a função ao terminar inicie novamente assim podemos ficar tentando até acertar.
recognition.addEventListener('end', () => recognition.start());

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeChuteEValido(chute);
    
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = ` 
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}