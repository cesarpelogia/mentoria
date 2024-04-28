let form = document.querySelector('.boxInputTarefa');
let input = document.querySelector('.boxInputTarefa input');
let boxTarefas = document.querySelector('.boxTarefas');

let valorOriginal = input.value;

// Formatando o texto para que a primeira seja sempr maiuscula.
function formatarTexto(texto) {
    return texto.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Limpando o box quando usuário clicar.
input.addEventListener('focus', function() {
    if (input.value === valorOriginal) {
        input.value = '';
    }
});

input.addEventListener('blur', function() {
    if (input.value === '') {
        input.value = valorOriginal;
    }
});

// Função para captura do evento de submissão do formulário;
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Função para coletar o texto da tarefa;
    let textoFormatado = formatarTexto(input.value);

    let novaTarefa = document.createElement('div');
    novaTarefa.innerHTML = `
        <input type="checkbox" id="${textoFormatado}">
        <label for="${textoFormatado}">${textoFormatado}</label>
        <button class="remover">Remover</button>
        <br>
    `;
    
    // Função para incluir a tarefa na lista de tarefas.
    boxTarefas.appendChild(novaTarefa);

    // Função para remover a tarefa da lista de tarefas.
    novaTarefa.querySelector('.remover').addEventListener('click', function() {
        novaTarefa.remove();
    });

    novaTarefa.querySelector('input[type="checkbox"]').addEventListener('change', function(event) {
        let label = novaTarefa.querySelector('label');
        if (event.target.checked) {
            label.style.textDecoration = 'line-through';
        } else {
            label.style.textDecoration = 'none';
        }
    });

    alert('Tarefa adicionada: ' + textoFormatado);

    input.value = valorOriginal;
});