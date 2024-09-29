document.addEventListener('DOMContentLoaded', function () {
    // Cada constante armazena o elemento correspondente
    const instructions = document.getElementById('instructions');
    const instrucoes = document.getElementById('instrucoes');
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');
    const result = document.getElementById('result');
    const temperamentDetails = document.getElementById('temperament-details');

    // remover css hidden para tornar o elemento visível em instrucions
    instructions.classList.remove('hidden');


    document.getElementById('start-inst').addEventListener('click', function () {
        instructions.classList.add('hidden');
        instrucoes.classList.remove('hidden');
    });
    // evento ao usuário clicar no botão, as instruções são ocultadas e a primeira parte do conteúdo é exibida.
    document.getElementById('start-part1').addEventListener('click', function () {
        instrucoes.classList.add('hidden');
        part1.classList.remove('hidden');
    });
    
    // ao clicar no elemento 'submit-part1', a primeira parte do conteúdo é ocultada, e a segunda parte é exibida.
    document.getElementById('submit-part1').addEventListener('click', function () {
        if (allQuestionsAnswered(1, 19)) {
            part1.classList.add('hidden');
            part2.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('Por favor, responda todas as perguntas antes de continuar.');
        }
    });

    // segunda parte do teste é exibida
    document.getElementById('submit-part2').addEventListener('click', function part22() {
        if (allQuestionsAnswered(20, 32)) {
            part2.classList.add('hidden');
            result.classList.remove('hidden');
            showResult();
            criarConfetes(150);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('Por favor, responda todas as perguntas antes de continuar.');
        }
    });
    // teste finalizado
    document.getElementById('finish-test').addEventListener('click', function () {
        alert('Teste finalizado.');
        location.reload();
    });

    function allQuestionsAnswered(start, end) {
        for (let i = start; i <= end; i++) {
            if (!document.querySelector(`input[name="q${i}"]:checked`)) {
                return false;
            }
        }
        return true;
    }

    function showResult() {
        // Contadores para as respostas da Parte 1 e Parte 2
        let countA1 = 0, countB1 = 0;
        let countA2 = 0, countB2 = 0;

        // Verifica as respostas da Primeira Parte
        for (let i = 1; i <= 19; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA1++;
            } else if (answer && answer.value === 'B') {
                countB1++;
            }
        }

        // Verifica as respostas da Segunda Parte
        for (let i = 20; i <= 32; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA2++;
            } else if (answer && answer.value === 'B') {
                countB2++;
            }
        }

        // Determina o temperamento
        let temperament = '';

        if (countA1 > countB1 && countA2 > countB2) {
            temperament = "Sanguíneo";
        } else if (countA1 > countB1 && countB2 > countA2) {
            temperament = "Colérico";
        } else if (countB1 > countA1 && countA2 > countB2) {
            temperament = "Fleumático";
        } else if (countB1 > countA1 && countB2 > countA2) {
            temperament = "Melancólico";
        }

        // Exibe o resultado
        
        switch (temperament) {
            case 'Sanguíneo':
                h2r.innerHTML = '<h4>Sanguíneos Famosos</h4>'

                // let body = document.getElementsByTagName("body")
                // body.style.backgroundColor = "rgb(214, 43, 43)"

                let um = document.getElementById("um")
                um.style.backgroundImage = 'url(img/will.png)'
                // let p1 = document.getElementById("p1")
                // p1.innerHTML = "Will Smith"
                

                let dois = document.getElementById("dois")
                dois.style.backgroundImage = 'url(img/peralta.png)'
                // let p2 = document.getElementById("p2")
                // p2.innerHTML = "Jake Peralta"
                

                let tres = document.getElementById("tres")
                tres.style.backgroundImage = 'url(img/lorelay.png)'
                // let p3 = document.getElementById("p3")
                // p3.innerHTML = "Lorelay G"
                
                resultado.innerHTML = '<h2>Sanguíneo</h2>'
                temperamentDetails.innerHTML = '<p> <br>Quente e Úmido Extrovertido e envolvente, voltado para os relacionamentos interpessoais. É comunicativo, dinâmico e otimista. Suas emoções são intensas, mas as impressões são passageiras, o que faz com que mude de humor com bastante frequência e as expressões dessa mudança são muito intensas (quando está triste, está muito triste; quando feliz, muito feliz; quando com raiva, com muita raiva, etc). Não se apega ao passado e vive muito o presente, o que pode fazer com que busque prazeres instantâneos e momentâneos, por isso, precisa tomar cuidado com a superficialidade. Carismático, não falta assunto, faz amizades facilmente.</p>'
                break;
            case 'Colérico':
                h2r.innerHTML = '<h4>Coléricos Famosos</h4>'

                let um1 = document.getElementById("um")
                um1.style.backgroundImage = 'url(img/jobs.png)'
                // let p11 = document.getElementById("p1")
                // p11.innerHTML = "Steve Jobs"
                

                let dois1 = document.getElementById("dois")
                dois1.style.backgroundImage = 'url(img/angelina.png)'
                // let p22 = document.getElementById("p2")
                // p22.innerHTML = "Angelina Jolie"
                

                let tres1 = document.getElementById("tres")
                tres1.style.backgroundImage = 'url(img/tiana.png)'
                // let p33 = document.getElementById("p3")
                // p33.innerHTML = "Princesa Tiana"

                resultado.innerHTML = '<h2>Colérico</h2>'
                temperamentDetails.innerHTML = '<p> <br>Quente e SecoMuito prático, voltado para a execução e realização. Sua extroversão não é para relacionamentos, mas para a ação. Enérgico, determinado, com facilidade enorme para atingir metas e perseguir objetivos. Não se preocupa com o que pensam dele, o que importa é o que ele sabe sobre si. Cheio de opiniões e não tem medo de expô-las, considerado gênio forte. As impressões são duradouras nele e, por isso, as lembranças fazem com que ele reviva as emoções, tendo dificuldade em relevar. Gosta das coisas do seu jeito, por isso precisa cuidar para não ser controlador.</p>';
                break;
            case 'Melancólico':
                h2r.innerHTML = '<h4>Melancólicos Famosos</h4>'

                let um2 = document.getElementById("um")
                um2.style.backgroundImage = 'url(img/einstein.png)'
                // let p111 = document.getElementById("p1")
                // p111.innerHTML = "Albert Einstein"
                

                let dois2 = document.getElementById("dois")
                dois2.style.backgroundImage = 'url(img/snape.png)'
                // let p222 = document.getElementById("p2")
                // p222.innerHTML = "Severu Snape"

                let tres2 = document.getElementById("tres")
                tres2.style.backgroundImage = 'url(img/batman.png)'
                // let p333 = document.getElementById("p3")
                // p333.innerHTML = "Batman"

                resultado.innerHTML = '<h2>Melancólico</h2>'
                temperamentDetails.innerHTML = '<p><br>Frio e Seco Introvertido, reflexivo e profundo, muito cauteloso em suas ações e planejado. É emocionalmente sensível, sendo afetado pelas circunstâncias por um longo período. Gosta de estabilidade, previsibilidade, ordem e compromisso. A lealdade é um de seus pontos mais fortes, além do forte senso de dever e propósito. Leva a vida com seriedade e possui valores e princípios muito fortes. Não gosta de mudanças não planejadas e, quando acontecem, costuma sofrer até que assimile a mudança. É idealista e perfeccionista, que são qualidades que devem ser observadas, pois em excesso, causam medo de agir, que leva à procrastinação ou à desistência.</p>';
                break;
            case 'Fleumático':
                h2r.innerHTML = '<h4>Fleumáticos Famosos</h4>'

                let um3 = document.getElementById("um")
                um3.style.backgroundImage = 'url(img/scarlet.png)'
                // let p1111 = document.getElementById("p1")
                // p1111.innerHTML = "Scarlet Johansson"

                let dois3 = document.getElementById("dois")
                dois3.style.backgroundImage = 'url(img/hp.png)'
                // let p2222 = document.getElementById("p2")
                // p2222.innerHTML = "Harry Potter"

                let tres3 = document.getElementById("tres")
                tres3.style.backgroundImage = 'url(img/alice.png)'
                // let p3333 = document.getElementById("p3")
                // p3333.innerHTML = "Alice in Wonderland"

                resultado.innerHTML = '<h2>Fleumático</h2>'
                temperamentDetails.innerHTML = '<p><br>Frio e Úmido Introvertido, diplomático e de fácil convivência. Pode não apreciar mudanças abruptas, mas consegue se adaptar facilmente a diferentes cenários com muita facilidade. Possui grande estabilidade emocional, dificilmente atingindo picos de humor muito distintos em um único dia. Transmite serenidade em seu jeito de ser, ainda que não se sinta assim por dentro. As impressões também são passageiras nele, mas não significa que sua memória seja curta. A fácil adaptação deve ser observada para que não se torne em estagnação e inércia.</p>';
                break;
            default:
                temperamentDetails.innerHTML = '<p>Temperamento não identificado.</p>';
                break;
        }
    }
},

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const bubbleCount = 20; // Número de bolinhas

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble1');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duração aleatória entre 5 e 10 segundos
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`; // Cor aleatória
        container.appendChild(bubble);
    }
}));

//Função para criar bolinhas flutuantes
function createBubbles() {
    const bubbleCount = 1000; // Número de bolinhas
    const body = document.body.part1;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble1');
        
        // Posição aleatória
        const randomTop = Math.random() * window.innerHeight;
        const randomLeft = Math.random() * window.innerWidth;
        bubble.style.top = `${randomTop}px`;
        bubble.style.left = `${randomLeft}px`;
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        // Adiciona ao body
        body.appendChild(bubble);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container2');
    const bubbleCount = 20; // Número de bolinhas

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble1');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duração aleatória entre 5 e 10 segundos
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`; // Cor aleatória
        container.appendChild(bubble);
    }
});

// Função para criar bolinhas flutuantes
function createBubbles() {
    const bubbleCount = 1000; // Número de bolinhas
    const body = document.body;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble1');
        
        // Posição aleatória
        const randomTop = Math.random() * window.innerHeight;
        const randomLeft = Math.random() * window.innerWidth;
        bubble.style.top = `1vh`;
        bubble.style.left = `${randomLeft}px`;
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        // Adiciona ao body
        body.appendChild(bubble);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container3');
    const bubbleCount = 1000; // Número de bolinhas

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 9 + 5}s`; // Duração aleatória entre 5 e 10 segundos
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`; // Cor aleatória
        container.appendChild(bubble);
    }
});

// Função para criar bolinhas flutuantes
function createBubbles() {
    const bubbleCount = 1000; // Número de bolinhas

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble3');
        
        // Posição aleatória
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        bubble.style.top = `${randomTop}vh`;
        bubble.style.left = `${randomLeft}vw`;
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        // Adiciona ao body
        body.appendChild(bubble);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container4');
    const bubbleCount = 1000; // Número de bolinhas

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 9 + 5}s`; // Duração aleatória entre 5 e 10 segundos
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`; // Cor aleatória
        container.appendChild(bubble);
    }
});

// Função para criar bolinhas flutuantes
function createBubbles() {
    const bubbleCount = 1000; // Número de bolinhas

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Posição aleatória
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        bubble.style.top = `${randomTop}vh`;
        bubble.style.left = `${randomLeft}vw`;
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        // Adiciona ao body
        body.appendChild(bubble);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container5');
    const bubbleCount = 100; // Número de bolinhas

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 7 + 7}s`; // Duração aleatória entre 5 e 10 segundos
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`; // Cor aleatória
        container.appendChild(bubble);
    }
});

// Função para criar bolinhas flutuantes
function createBubbles() {
    const bubbleCount = 1000; // Número de bolinhas

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Posição aleatória
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        bubble.style.top = `${randomTop}vh`;
        bubble.style.left = `${randomLeft}vw`;
        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        // Adiciona ao body
        body.appendChild(bubble);
    }
}


window.onload = function() {
    createBubbles();
};

const divs = document.querySelectorAll(".app");

divs.forEach(div => {
   
    const inputs = div.querySelectorAll(".input");

    inputs.forEach(input => {
        input.addEventListener("change", function() {
            
            div.style.borderColor = "#8d4ac4";
        });
    });
});
    
document.getSelection(part22).addEventListener('click', function() {
    criarConfetes(150); // Ajuste a quantidade de confetes conforme necessário
});

function criarConfetes(quantidade) {
    const confetesContainer = document.getElementById('confetes');
    for (let i = 0; i < quantidade; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        
        // Configurações aleatórias para cada confete
        confete.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
        confete.style.width = `${Math.random() * 10 + 5}px`; // Tamanho aleatório
        confete.style.height = confete.style.width; // Confetes circulares
        confete.style.backgroundColor = gerarCorAleatoria(); // Cor aleatória
        confete.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração da queda
        confete.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório

        confetesContainer.appendChild(confete);

        // Remove o confete depois que a animação termina
        setTimeout(() => {
            confete.style.opacity = '0'; // Começa o efeito de desaparecimento

    // Remove o confete após a transição de opacidade (2s)
    setTimeout(() => {
        confete.remove();
    }, 2000); // Espera a transição de opacidade antes de remover
}, 5000);

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const cores = ['#FF6F61', '#FFCA28', '#4DB6AC', '#42A5F5', '#AB47BC']; // Paleta de cores vibrantes
    return cores[Math.floor(Math.random() * cores.length)];
}
}
}
