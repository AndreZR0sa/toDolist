const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('textoTarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Informe seu nome:")
tarefa.focus();
if (nome==""){
    titulo.innerHTML = `Lista de Tarefas`
}
else{
    titulo.innerHTML = `Lista de Tarefas do(a) ${nome}`
}
btnAdd.addEventListener("click",criarTarefa);

tarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') criarTarefa()
});

function criarTarefa(){
    if(tarefa.value == ""){
        alert("Impossivel completar a ação, tente novamente")
    }
    else{
    const listItem = document.createElement('li')
    listItem.textContent = textoTarefa.value;
    taskList.appendChild(listItem);
    tarefa.value = ''
    tarefa.focus();
    
    const removerButton = document.createElement('button')
    removerButton.id = "remove"
    removerButton.textContent = "X"

    removerButton.addEventListener("click",function(){
        taskList.removeChild(listItem)
        taskList.removeChild(removerButton)
        taskList.removeChild(concluirButton)
    })

    const concluirButton = document.createElement('button')
    concluirButton.id = "conclui"
    concluirButton.textContent = "✓"

    concluirButton.addEventListener("click",function(){
        listItem.classList.toggle('completed')
    })

    let buttonItem = document.createElement('div')
    listItem.appendChild(buttonItem)
    buttonItem.appendChild(removerButton)
    buttonItem.appendChild(concluirButton)
}
}