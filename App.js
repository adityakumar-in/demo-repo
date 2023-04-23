import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
