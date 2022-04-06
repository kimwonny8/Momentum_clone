const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const checkList = document.querySelector("#check-list");

const TODOS_KEY = "todos";
const CHECKS_KEY = "checks";

let toDos = [];
let checks = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    //JSON.stringify(toDos)=내용을 array로 저장함
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    //id는 숫자, li는 string이므로 parseInt 써줘야함
}

function paintToDo(newTodo){ //입력된 내용 화면에 뜨게하는 함수
    const li = document.createElement("li");
    li.id = newTodo.id; //li에 데이터베이스가 얻은 id를 추가함    
    const span = document.createElement("span");
    span.innerText = newTodo.text; //span에는 유저가 입력하는 내용(todo)을 넣음

    const buttonX = document.createElement("button");
    buttonX.innerText = "❌";
    buttonX.addEventListener("click", deleteToDo); //클릭하면 삭제되는 함수불러오기

    const buttonY = document.createElement("button");
    buttonY.innerText = "✔️";
    buttonY.addEventListener("click", handleChecks);

    li.appendChild(span); //리스트안에 span 만들기
    li.appendChild(buttonY);
    li.appendChild(buttonX);
    toDoList.appendChild(li); //toDoList 목록 안에 - li - span,button 순서
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //입력하는 내용은 newTodo에 저장
    toDoInput.value = ""; //엔터치면 input칸 비워지게함
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }; //데이터베이스가 id를 가지며 저장하게 됨
    toDos.push(newTodoObj); //submit하면 input칸에 입력한 newTodo가 toDos라는 array에 저장됨
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

const savedChecks = localStorage.getItem(CHECKS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);   
}
if (savedChecks !== null){
    const parsedChecks = JSON.parse(savedChecks);
    checks = parsedChecks;
    parsedChecks.forEach(paintCheck);   
}
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    /*화살표함수 =>
    function sayHello(item) {
        console.log("this is the turn of ",item);} 함수를 만든 후
    parsedToDos.forEach(sayHello); 한것과 똑같은 내용임 */

function handleChecks(event) {
    const newChecksObj = {
        text: this.previousSibling.innerText,
        id: Date.now()
    };
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    checks.push(newChecksObj);
    paintCheck(newChecksObj);
    saveChecks();
}
function paintCheck(newCheck){
    const li = document.createElement("li");
    li.id = newCheck.id; //li에 데이터베이스가 얻은 id를 추가함    
    const span = document.createElement("span");
    span.innerText = newCheck.text; //span에는 유저가 입력하는 내용(todo)을 넣음

    const buttonX = document.createElement("button");
    buttonX.innerText = "❌";
    buttonX.addEventListener("click", deleteCheck); //클릭하면 삭제되는 함수불러오기

    li.appendChild(span); //리스트안에 span 만들기
    li.appendChild(buttonX);
    checkList.appendChild(li);
}

function deleteCheck(event){
    const li = event.target.parentElement;
    li.remove();
    checks = checks.filter((check) => check.id !== parseInt(li.id));
    saveChecks();
    //id는 숫자, li는 string이므로 parseInt 써줘야함
}

function saveChecks() {
    localStorage.setItem(CHECKS_KEY, JSON.stringify(checks)); 
    //JSON.stringify(checks)=내용을 array로 저장함
}