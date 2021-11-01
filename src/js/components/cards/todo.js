import makeElement from "../../utils/makeElement"
import editIcon from "../icons/editIcon"
import deleteIcon from "../icons/deleteIcon"


const todo = function ({id,category,isComplete,title,endDate}) {

    const divicon = document.createElement('div')
    const editimg = editIcon()
    const deleteimg = deleteIcon()
  
    const template =   `
        <li class="${category}" data-key="${id}">
           <div>
               <p>${title}</p> 
               <p>${isComplete}</p> 
               <p>Due: ${endDate}</p> 
           </div>
        </li>
      `;
   
    const element = makeElement(template)
    element.append(divicon)
    divicon.append(editimg)
    divicon.append(deleteimg)

    return element
}

export {todo}