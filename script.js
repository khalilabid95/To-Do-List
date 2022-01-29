const todoList = document.getElementById("todo")
const enterTask = document.getElementById("dom")
const addTask = document.getElementById("fa-plus")
const checkedIcon = document.getElementsByClassName('fa-check-square')

console.log("par:", todoList.parentElement);

addTask.addEventListener("click",()=>{
    if(enterTask.value != ""){
        const newItem = document.createElement("li")
        const paragraph = document.createElement("a")
        paragraph.innerText= enterTask.value;
        const listBtm = document.createElement("button")
        const newCheckedIcon = document.createElement('i')
        const newDeleteIcon = document.createElement('i')
        newCheckedIcon.classList.add('fa-check-square')
        newCheckedIcon.classList.add('far')
        newDeleteIcon.classList.add('fa-trash')
        newDeleteIcon.classList.add('fas')
        listBtm.appendChild(newCheckedIcon)
        listBtm.appendChild(newDeleteIcon)
        newItem.appendChild(paragraph)
        newItem.appendChild(listBtm)
        todoList.appendChild(newItem)
        enterTask.value = ""
        
        newCheckedIcon.addEventListener('click', (e) => {
            newCheckedIcon.classList.add('checked-done')
            e.target.parentElement.classList.add('done')
            e.target.parentElement.parentElement.classList.add('done')
        })
        newDeleteIcon.addEventListener('click',(e)=>{
            const CurrList = e.target.parentElement.parentElement
            
            if(confirm('Are Sure')){
            todoList.removeChild(CurrList)
        }
        })
        
    }
})

