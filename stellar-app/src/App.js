import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';

const App = () => {
  return (
   <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route path='/nasaphoto' component={NasaPhoto}/>
   </BrowserRouter>
  );
}

export default App;
