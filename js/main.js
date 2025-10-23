document.addEventListener('DOMContentLoaded', function() {
    // EFEITO DO HEADER AO ROLAR A PÁGINA
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // MENU MOBILE
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            document.body.style.overflow = nav.classList.contains('active') ? '' : 'hidden';
            nav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // ANIMAÇÃO DE ELEMENTOS AO APARECER NA TELA
    const animatedElements = document.querySelectorAll('.anim-fade-up');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // NAVEGAÇÃO DO CARDÁPIO (SÓ RODA NA PÁGINA cardapio.html)
    const menuCategories = document.querySelector('.menu-categories');
    if (menuCategories) {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const menuItems = document.querySelectorAll('.menu-items');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => b.classList.remove('active'));
                menuItems.forEach(item => item.classList.remove('active'));

                this.classList.add('active');
                const category = this.getAttribute('data-category');
                const targetMenu = document.getElementById(category);
                if (targetMenu) {
                    targetMenu.classList.add('active');
                }
            });
        });
    }
    
    // FAQ ACCORDION (SÓ RODA NA PÁGINA contato.html)
    const faqList = document.querySelector('.faq-list');
    if (faqList) {
        const faqPerguntas = document.querySelectorAll('.faq-pergunta');
        
        faqPerguntas.forEach(pergunta => {
            pergunta.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const resposta = this.nextElementSibling;
                const isActive = faqItem.classList.contains('active');
                
                // Fecha todos os outros itens antes de abrir um novo
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                        item.querySelector('.faq-resposta').style.maxHeight = null;
                    }
                });

                // Alterna o item clicado
                if (!isActive) {
                    faqItem.classList.add('active');
                    resposta.style.maxHeight = resposta.scrollHeight + "px";
                } else {
                    faqItem.classList.remove('active');
                    resposta.style.maxHeight = null;
                }
            });
        });
    }
});