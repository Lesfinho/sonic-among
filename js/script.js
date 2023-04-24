
//adiciona uma classe que permite o pulo a imag do mario no html 
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


//funcao que faz o mario pular, por causa da classe jump (pula 1 vez)
const jump = () => {
    mario.classList.add('jump');

//setTimeout remove a classe da imagem do mario resetando o "timer" permitindo outro pulo.
    setTimeout(()=> {
        mario.classList.remove('jump');

    }, 500);
}

//verifica se o jogador encostou no cano, quando perde precisa zerar esse loop
const loop = setInterval(()=> {

    console.log(loop)

    const pipePosition = pipe.offsetLeft; //pega o valor do deslocamento esquerdo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); //pega qualquer propiedade css que esteja aplicada no mario

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.offsetLeft =  `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom =  `${pipePosition}px`;

        mario.src = './images/gameover.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }

    
}, 10) 




//pula quando aperta qualquer tecla
document.addEventListener('keydown', jump); 