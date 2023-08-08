import {Routes, Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
// import Navigation from './Components/Navigation/Navigation';
import FileShare from './Components/FileShare/FileShare';

import './App.css';
import Home from './Components/Home/Home';
import OrderTracker from './Components/OrderTracker/OrderTracker';

function App() {
  return <>
    <Routes>
      <Route path='/' element = {<><Sidebar /><Home /></>}/>
      <Route path='/fileShare' element = {<FileShare />}/>
      <Route path='/ordertrack' element = {<OrderTracker />}/>
    </Routes>
    {/* <Navigation /> */}
    <Sidebar />
  </>
}

export default App;