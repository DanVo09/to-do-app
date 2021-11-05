import homePage from "../pages/home"
import todolistPage from "../pages/todolis"
import notFound from "../pages/notFound"




const routes = {
   '/':homePage,
   '/todolist':todolistPage,
   '/*':notFound
   
}

const Router = function(pathname){

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    console.log(isValidRoute)
    
    const app = document.querySelector('#app')
    app.innerHTML = ''
    
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    if(isValidRoute === undefined){
        app.append(notFound())
    }else{
     app.appendChild(routes[window.location.pathname]())
    }
    
}

export {router}
export default Router
