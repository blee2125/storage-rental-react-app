import './App.css';
import NavBar from '../src/components/NavBar'
import StorageUnitsContainer from '../src/containers/StorageUnitsContainer'

import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <StorageUnitsContainer />
    </div>
  );
}

export default connect()(App);