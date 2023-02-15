import { useCustomization } from "../contexts/Customization";
import expandmorebtn from '../../assets/expand_more.png'
import expandlessbtn from '../../assets/expand_less.png'
import { useState } from "react";
import '../../index.css'
import "../Configurator/Configurator1.css"
import { Link } from "react-router-dom";
const Configurator1 = () => {
  const [showcolor,setShowcolor]=useState("hide");
  const { bikeColors, bikeColor, setBikeColor, } = useCustomization();
  console.log('bikeColor', bikeColor);
  const showcoloeoptions = ()=>{
    if(showcolor==="hide"){
      setShowcolor("show");
    }
    else{
      setShowcolor("hide");
    }
  }
  return (
    <div className="Configurator">

      {/* <div className="Configurator1_section_title">Color</div> */}


      <div className="Configurator__section">
      <button className="item_label">
        <Link to="/honda">Fetures</Link>
      </button>
        <button className="Configurator__section__title" onClick={showcoloeoptions}>Bike color</button>
        <div className={`Configurator__section__values ${(showcolor==="hide")? "hidden":""}`}>
          <div className="item"><img src={expandlessbtn} alt="expandless" /></div>
          {bikeColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === bikeColor.color ? "item--active" : ""
                }`}
              onClick={() => setBikeColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
          <div className="item"><img src={expandmorebtn} alt="expandless" /></div>
        </div>
      </div>
    </div>
  );
};

export default Configurator1;
