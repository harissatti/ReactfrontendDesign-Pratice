
import './App.css';
import BLOOD from './img/BLOOD.png';
import DEATH from './img/DEATH.png';
import EARTH from './img/EARTH.png';
import FIRE from './img/FIRE.png';
import LIGHT from './img/LIGHT.png';
import WATER from './img/WATER.png';
import WIND from './img/WIND.png';
import NECROMANCER from './img/NECROMANCER 1.png';
import NECROMANCER2 from './img/NECROMANCER 2.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <span className="font-link" style={{fontSize:'calc(10px + 8vmin)'}}>
         Something Rare Is Coming
        </span>
        <p className='font'style={{fontSize:'22px',marginBottom:'20px'}}>7,7777 Rare NFTs For .015 Each</p>
       
        <div>
        <img src={BLOOD}  height={120} width={70}/>
        <img src={DEATH}  height={120} width={70}/>
        <img src={EARTH}  height={120} width={70}/>
        <img src={FIRE}  height={120} width={70}/>
        <img src={LIGHT}  height={120} width={70}/>
        <img src={WATER}  height={120} width={70}/>
        <img src={WIND}  height={120} width={70}/>
        </div>
        
      
        <div className='MINT'>
          <img src={NECROMANCER} height={120} width={70}/>
          <a  class="txt">MINT</a>
          <img src={NECROMANCER2} height={120} width={70}/>
          </div>
          <p className="font-link" style={{fontSize:"25px"}}>The Old gods is set of generative</p>
          <p className="font-link" style={{fontSize:"25px"}}>NFTs with two different reveals ...oOoOoOoO</p>
          
        
      </header>
    </div>
  );
}

export default App;
