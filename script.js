'use strict'

let inputValues = [];
const inputEl = document.getElementById('input--el')
const inputBtn = document.getElementById("list--button")
const deleteBtn = document.getElementById('delete--button')
const ulEl = document.getElementById('ul--el')

const inputValuesFromLocalStorage = JSON.parse( localStorage.getItem("inputValues") )

//check for truthy and falsey values
if (inputValuesFromLocalStorage) {
    inputValues = inputValuesFromLocalStorage
    renderVal()
}

// render input values in an li element
    function renderVal() {
        let listItems = ""
        for (let i = 0; i < inputValues.length; i++) {
            listItems += `<li 
                            id="list--element"
                            class="li--element"
                            > 
                            ${inputValues[i]}
                            <span>X</span> 
                            </li>`
            console.log(inputValues[i])
        }
        ulEl.innerHTML = listItems
    }


// clear local storage on double click of clear button
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    inputValues = []
    renderVal()
} )

// pushes input value to inputValues array
    inputBtn.addEventListener("click", function(){
        inputValues.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("inputValues", JSON.stringify(inputValues) )
        renderVal()
        console.log(inputValues)
    })


// removes the list item when clicked





