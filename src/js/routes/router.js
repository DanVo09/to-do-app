import homePage from "../pages/home"
import todolistPage from "../pages/todolis"
import notFound from "../pages/notFound"




const routes = {
   '/':homePage,
   '/todolist':todolistPage,
   '/*':notFound
   
}

const Router = function(pathname, params=null){

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    
    const app = document.querySelector('#app')
    app.innerHTML = ''
    
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    if(isValidRoute === undefined || isValidRoute ===''){
        app.append(notFound())
    }else{
        app.appendChild(routes[isValidRoute](params) )
    }
    
}

export {router}
export default Router
