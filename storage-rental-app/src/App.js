import './App.css';
import NavBar from '../src/components/NavBar'
import StorageUnitsContainer from '../src/containers/StorageUnitsContainer'

import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <style>{'body { background-color: lightsteelblue; }'}</style>
      <NavBar />
      <StorageUnitsContainer />
    </div>
  );
}

export default connect()(App);