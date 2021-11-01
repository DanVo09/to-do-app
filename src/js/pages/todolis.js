import todoList from "../components/cards/todoList";
import { todo } from "../components/cards/todo";
import { getStore } from "../redux/store";
import { headercontent } from "../components/ui/header";
import button from "../components/ui/button";

const todolistPage = function(){

    
    const page = document.createElement('div')
    const header = headercontent() 
    const container = todoList()
    const todoStore = getStore()
    const addbutton =button("Add new task",'ui-newtask')
   
    page.setAttribute('class','todolistpage')
    page.append(header)

    if(todoStore.length !== 0){
      const elements =  todoStore.map(emp=>{
             return todo(emp) 
        })
      const ul = container.querySelector('#todos')
      elements.forEach(elm=>{
          ul.append(elm)
      })
      
      page.append(container)
      page.append(addbutton)
    }
    return page
}

export default todolistPage