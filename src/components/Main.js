import React from 'react'
import "./main.css";
import logo from "../Assets/logo.png";
import left from "../Assets/left.png";
import right from "../Assets/right.png";
import equip from "../Assets/3.png"

const Main = () => {
  return (
    <div className='main'>
        <div className='header'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='middle'>
            <div className='trophy'>
                <img src={left} alt='left'/>
            </div>
            <div className='award'>
                <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                <ul>
                    <li>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                    </li>
                    <li>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                    </li>
                </ul>
                <img src={right} alt='right'/>
                <p>
                    Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>
            </div>
        </div>
        <div className='equip'>
            <p>
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </p>
            <img src={equip} alt='equip' />
            <p className='valves'>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
            </p>
        </div>
    </div>
  )
}

export default Main