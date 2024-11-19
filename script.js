// Exibe um alerta ao clicar no botão
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Olá! Esta é uma mensagem personalizada.');
});

// Manipula o envio do formulário
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário preenchido corretamente!');
});

// Exibe mensagem de sucesso após o envio do formulário
$('#taskForm').submit(function(e) {
    e.preventDefault();
    $('<p>Formulário preenchido corretamente!</p>')
        .hide()
        .appendTo('body')
        .fadeIn(1000)
        .delay(2000)
        .fadeOut(1000);
});

// Detecta o clique na imagem
document.getElementById('mainImage').addEventListener('click', function() {
    // Obtém o lightbox e a imagem dentro dele
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    // Define o src da imagem ampliada como o mesmo src da imagem original
    lightboxImage.src = this.src;
    
    // Exibe o lightbox
    lightbox.style.display = 'flex';
});

// Fechar o lightbox ao clicar no botão de fechar
document.getElementById('closeLightbox').addEventListener('click', function() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
});

// Fechar o lightbox se o fundo escuro for clicado
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

// Adiciona a tarefa à lista
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();
    if (taskValue === "") return;

    // Cria o item da lista
    const li = document.createElement('li');
    li.textContent = taskValue;

    // Adiciona o botão de excluir
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Excluir";
    deleteButton.classList.add('deleteButton');
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);

    // Adiciona o botão de editar
    const editButton = document.createElement('button');
    editButton.textContent = "Editar";
    editButton.classList.add('editButton');
    editButton.onclick = function() {
        editTask(li, taskValue);
    };
    li.appendChild(editButton);

    // Adiciona o item à lista de tarefas
    document.getElementById('taskList').appendChild(li);

    // Limpa o campo de input
    taskInput.value = '';
});

// Função para editar a tarefa
function editTask(li, oldValue) {
    const newValue = prompt("Edite sua tarefa:", oldValue);
    if (newValue !== null && newValue.trim() !== "") {
        li.firstChild.textContent = newValue.trim();
    }
}

