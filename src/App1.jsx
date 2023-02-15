import { Canvas } from "@react-three/fiber";
import Experince1 from "./Components/Experince/Experince1";
import Configurator1 from "./Components/Configurator/Configurator1";
import "./App.css";
import { CustomizationProvider } from "./Components/contexts/Customization";
import backarrow from './assets/back_arrow.png'
import crossbtn from './assets/cross_btn.png'
import {Link} from 'react-router-dom'

function App1() {
  return (
  <CustomizationProvider>
   <div className="App">
    <Link to='/'><button className="position_backarrow"><img src={backarrow} alt="back"/></button></Link>
    <button className="position_crossbtn"><img src={crossbtn} alt="cross"/></button>
    <Canvas>
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#213547", 10, 20]} />
     <Experince1/>
    </Canvas>
    <Configurator1/>
  </div>;
  </CustomizationProvider>
  );
}
export default App1;