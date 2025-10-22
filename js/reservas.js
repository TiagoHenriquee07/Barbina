// Validação do formulário de reservas
document.addEventListener('DOMContentLoaded', function() {
    const reservaForm = document.getElementById('reservaForm');
    
    reservaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validações básicas
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const pessoas = document.getElementById('pessoas').value;
        
        if (!nome || !email || !telefone || !data || !hora || !pessoas) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de data (não pode ser no passado)
        const dataReserva = new Date(data);
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        
        if (dataReserva < hoje) {
            alert('Por favor, selecione uma data futura.');
            return;
        }
        
        // Simulação de envio
        alert('Reserva enviada com sucesso! Entraremos em contato para confirmação.');
        reservaForm.reset();
    });

    // Formatação automática do telefone
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);
        
        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 6) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, '($1');
        }
        
        e.target.value = value;
    });
});