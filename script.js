// Espera o conteúdo da página carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function() {

    // --- ATUALIZADO: Seleciona TODOS os botões "Leia Mais" ---
    const allToggleButtons = document.querySelectorAll('.toggle-btn');

    // Adiciona um "ouvinte" de clique para cada botão "Leia Mais"
    allToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // Encontra o 'card' pai mais próximo do botão que foi clicado
            const card = this.closest('.plant-card');
            
            // Dentro desse card, encontra a div de informação completa
            const info = card.querySelector('.full-info');

            // ATUALIZADO: Apenas ADICIONA a classe 'active' para MOSTRAR
            info.classList.add('active');
            
            // REMOVIDO: A lógica que trocava o texto do botão "Leia Mais"
        });
    });

    // --- NOVO: Seleciona TODOS os botões "Ler Menos" ---
    const allCloseButtons = document.querySelectorAll('.close-info');

    // Adiciona um "ouvinte" de clique para cada botão "Ler Menos"
    allCloseButtons.forEach(button => {
        button.addEventListener('click', function() {

            // Encontra o 'card' pai mais próximo
            const card = this.closest('.plant-card');

            // Encontra a div de informação completa
            const info = card.querySelector('.full-info');

            // ATUALIZADO: Apenas REMOVE a classe 'active' para ESCONDER
            info.classList.remove('active');
        });
    });
    // --- FIM DAS ATUALIZAÇÕES DOS CARDS ---


    // Seleciona os elementos do menu (esta parte já estava correta)
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    // Função para abrir o menu
    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    // Função para fechar o menu
    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Adiciona "ouvintes" de clique
    // (Verifica se os elementos existem antes de adicionar)
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

});