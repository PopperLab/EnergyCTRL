import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Eat. Rave. Sleep." />
    </>
  );
}

export default App;
