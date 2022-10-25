import NavBar from "./components/NavBar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  return(
    <>
    <NavBar /> 
    <ItemListContainer texto="Item List Container"/>
    </>
  )
}

export default App;