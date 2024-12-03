// Seleciona todos os botões
const buttons = document.querySelectorAll('.controller-button');

// Adiciona um evento de clique a cada botão
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("Botão clicado:", button.outerHTML);
        // Seleciona o botão atualmente ativo
        const activeButton = document.querySelector('.active');

        // Converte a NodeList em array para manipulação de índices
        const buttonsArray = Array.from(buttons);

        if (activeButton) {
            // Remove a classe "controller-button-active" do botão atual
            activeButton.classList.remove('active');

            // Obtém o índice do botão clicado
            const currentIndex = buttonsArray.indexOf(button);
            console.log("Índice atual:", currentIndex);

            // Calcula o índice do próximo botão
            const nextIndex = (currentIndex + 1) % buttonsArray.length;
            console.log("Próximo índice:", nextIndex);

            // Adiciona a classe "controller-button-active" ao próximo botão
            const nextButton = buttonsArray[nextIndex];
            nextButton.classList.add('active');
            console.log("Próximo botão ativado:", nextButton.outerHTML);

            // Logs para depuração
        }
    });
});
