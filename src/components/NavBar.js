import CartWidget from "./CartWidget"
import "../App.css"

const NavBar = () =>{
    return(
    <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
              <a className="navbar-brand" href=".">🧡 COTTON CANDY 🧡</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav menu">
                   <a className="nav-link" href=".">Categoria 1</a>
                   <a className="nav-link" href=".">Categoria 2</a>
                   <a className="nav-link" href=".">Categoria 3</a>
                   <a className="nav-link carro" href="."><CartWidget></CartWidget></a>
              </div>
          </div>
       </div>
   </nav>
    )
}

export default NavBar;