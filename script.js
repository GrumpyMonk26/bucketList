let inputValues = [];
const inputEl = document.getElementById('input--el')
const inputBtn = document.getElementById("list--button")
const deleteBtn = document.getElementById('delete--button')
const ulEl = document.getElementById('ul--el')

const inputValuesFromLocalStorage = JSON.parse( localStorage.getItem("inputValues") )

if (inputValuesFromLocalStorage) {
    inputValues = inputValuesFromLocalStorage
    renderVal()
}

function renderVal() {
    let listItems = ""
    for (let i = 0; i < inputValues.length; i++) {
        listItems += `<li> ${inputValues[i]} </li>`
        console.log(inputValues[i])
    }
    
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    inputValues = []
    renderVal()
} )

inputBtn.addEventListener("click", function(){
    inputValues.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("inputValues", JSON.stringify(inputValues) )
    renderVal()
    console.log(inputValues)
})






