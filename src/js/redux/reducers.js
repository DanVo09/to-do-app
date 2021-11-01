import { getStore } from "./store";

const reducers = function({action,payload, ...rest}){
     
    switch(action.type){
        case "edit": return "edit an todo";
        case "delete": return "remove an todo";
        case "add": return "add a new todo";
        default: return getStore()
    }

}

export {reducers}