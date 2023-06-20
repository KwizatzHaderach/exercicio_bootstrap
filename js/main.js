$(document).ready(function(){
    
    $('#telefone').mask('(00)00000-0000', {
    }) 

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira um e-mail válido.',
            telefone: 'Por favor, insira seu telefone',
        },
    })    

})