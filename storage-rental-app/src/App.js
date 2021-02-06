import './App.css';
import NavBar from '../src/components/NavBar'
import StorageUnitsContainer from '../src/containers/StorageUnitsContainer'

function App() {
  return (
    <div className="App">
      <h1>Storage Units</h1>
      <NavBar />
      <StorageUnitsContainer />
    </div>
  );
}

export default App;