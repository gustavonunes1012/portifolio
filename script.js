document.addEventListener('DOMContentLoaded', function() {
    // Animação de digitação no nome
    const nomeElemento = document.querySelector('h1.h2');
    if (nomeElemento) {
        const texto = nomeElemento.textContent;
        nomeElemento.textContent = '';
        let i = 0;
        function digitar() {
            if (i < texto.length) {
                nomeElemento.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, 80);
            }
        }
        digitar();
    }
    const projetos = [
        {
            titulo: 'Sistema de Gerenciamento de Finanças',
            descricao: 'Aplicação backend em Java puro para controle financeiro pessoal e empresarial.',
            link: 'https://github.com/construindoideias/fluxoapp'
        },
        {
            titulo: 'Simulador de Hack',
            descricao: 'Jogo backend em Java puro, com sistema de pontos e simulação de invasão.',
            link: 'https://github.com/gustavonunes1012/Hacksimulator'
        },
        {
            titulo: 'First',
            descricao: 'Meu primeiro projeto utilizando HTML, CSS e JavaScript.',
            link: 'https://github.com/gustavonunes1012/first'
        }
        // Adicione mais projetos aqui
    ];

    const lista = document.getElementById('lista-projetos');
    projetos.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'projeto';
        div.innerHTML = `<h3>${proj.titulo}</h3><p>${proj.descricao}</p><a href="${proj.link}">Ver mais</a>`;
        lista.appendChild(div);
    });
});
