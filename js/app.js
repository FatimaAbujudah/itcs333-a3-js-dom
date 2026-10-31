// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here
document.addEventListener('DOMContentLoaded', () => {
let input = document.getElementById('todo-input')
let form = document.getElementById('todo-form')
let ul = document.getElementById('todo-list')
let error = document.getElementById('error-msg')
form.addEventListener('submit' ,(e)=> {
     e.preventDefault()
    if(input.value.trim() !=''){
        error.classList.add('hidden')
        let li = document.createElement('li')

        let delbtn = document.createElement('button')
        delbtn.className = 'delete-btn'
        delbtn.textContent = 'Delete'
        
        let span = document.createElement('span')
        span.className = 'item-text'
        span.textContent = input.value.trim()

        li.appendChild(span)
        li.appendChild(delbtn)
        ul.appendChild(li)
        
    }
    else {
        
        error.classList.remove('hidden') 
    }
})
ul.addEventListener('click',(e)=> {
    if (e.target.classList.contains('item-text')) {
        e.target.parentElement.classList.toggle('completed')
    }
    else if(e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove()
    }
    updatecount()
    
})

let all = document.getElementById('filter-all')
let active = document.getElementById('filter-active')
let done = document.getElementById('filter-done')


all.addEventListener('click', ()=> {
     for (let li of ul.children){
            li.classList.remove('hidden')}
})

done.addEventListener('click', ()=> {
    for (let li of ul.children){
        if(li.classList.contains('completed')){
            li.classList.remove('hidden')
            
        }
         if(!li.classList.contains('completed')){
            li.classList.add('hidden')
            
        }
        

    }
})

active.addEventListener('click', ()=> {
    for (let li of ul.children){
        if(!li.classList.contains('completed')){
            li.classList.remove('hidden')
            
        }
         if(li.classList.contains('completed')){
            li.classList.add('hidden')
            
        }
        

    }
})

let counter = document.getElementById('counter')

function updatecount (){
    let left =0
     for (let li of ul.children){
         if(!li.classList.contains('completed')){
                left++
         }
     }
     counter.textContent=`${left} item(s) left`
}





})



