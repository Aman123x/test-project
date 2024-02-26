import React from 'react'
import "./footer.css";
import fb from "../Assets/facebook.png"
import globe from "../Assets/globe.png"
import phone from "../Assets/phone.png"

const Footer = () => {
  return (
    <div>
        <div className='footer_child'>
            <p>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </p>
            <p className='item'>
                <span>CHEMICALS & PROCESS</span>
                <span>POWER</span>
                <span>WATER & WASTE WATER</span>
                <span>OILS & GAS</span>
                <span>PHARMA</span>
                <span>SUGARS & DISTILLERIES</span>
                <span>PAPER & PULP</span>
                <span>MARINE & DEFENCE</span>
                <span>METAL & MINING</span>
                <span>FOOD & BEVERAGE</span>
                <span>PETROCHEMICAL & REFINERIES</span>
                <span>SOLAR</span>
                <span>BUILDING</span>
                <span>HVAC</span>
                <span>FIRE FIGHTING</span>
                <span>AGRICULTURE & RESIDENTIAL</span>
            </p>
        </div>
        <div className='footer_bottom'>
            <div>
                <img src={phone} alt='phone'/>
                <a href="tel:1800 200 1234">Toll Free <strong>1800 200 1234</strong></a>
            </div>
            <div>
                <img src={fb} alt='fb'/>
                <a href='https://www.facebook.com/cripumps'>www.facebook.com/cripumps</a>
            </div>
            <div>
                <img src={globe} alt='globe'/>
                <a href='https://www.crigroups.com'>www.crigroups.com</a>
            </div>
        </div>
    </div>
  )
}

export default Footer