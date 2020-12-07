import './App.css';
import {Helmet} from 'react-helmet';
import Header from './components/Header/Header'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Menu from './components/Menu/Menu'
import Client from './components/Clientss/Client'
import Prices from './components/Prices/Prices'


const TITLE = "TechProps"

function App() {
  return (
    <div className="App">
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>

    <Header/>
    <About/>
    <Shop/>
    <Menu/>
    <Client/>
    <Prices/>
    </div>
  );
}

export default App;
