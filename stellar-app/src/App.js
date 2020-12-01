import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';

import './App.css';

const App = () => {
  return (
   <BrowserRouter>
      <div className='app'>
        <Route exact path='/' component={Home}/>
        <Route path='/nasaphoto' component={NasaPhoto}/>
      </div>
   </BrowserRouter>
  );
}

export default App;
