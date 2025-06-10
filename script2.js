const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Informe seu nome:")
if (nome==""){
    titulo.innerHTML = `Lista de Tarefas`
}
else{
    titulo.innerHTML = `Lista de Tarefas do(a) ${nome}`
}
btnAdd.addEventListener("click",criarTarefa);

function criarTarefa(){
    
}