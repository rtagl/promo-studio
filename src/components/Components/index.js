import React, {useState} from 'react';
import './ComponentStyles/hero-banner.css';
import './ComponentStyles/count-down.css';

function HeroBanner(props) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='ge_hero-banner-container'>
            <h1>Hero Banner</h1>
            <form>
                <label>Parent element</label>
                <input type="text" id="hb_parent" onChange={(e)=>props.set(e, props.state)} required></input>
                <label>Header text</label>
                <input type="text" id="hb_header" onChange={(e)=>props.set(e, props.state)} required/>
                <label>Subtext</label>
                <input type="text" id="hb_subtext" onChange={(e)=>props.set(e, props.state)} required></input>
                <label>Text alignment</label>
                <select id="hb_textAlignment" onChange={(e)=>props.set(e, props.state)} required >
                    <option value="center">center(Default)</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
                <label>Add desktop image</label>
                <input type="url" id="hb_desktopImage" onChange={(e)=>props.set(e, props.state)} required/>
                <label>Add mobile image</label>
                <input type="url" id="hb_mobileImage" onChange={(e)=>props.set(e, props.state)} />
                <div className='ge_hb-drop-shadow-widget'>
                    <label>Add Shadow</label>
                    <input type="checkbox" onChange={(e)=>setToggle(e.target.checked)}/>
                    {
                        toggle === true ? 
                        <div className="ge_hb-drop-shadow-widget-container">
                            <h3>Shadow Editor</h3>
                            <label>Horizontal Shift</label>
                            <input type="range" min="-10" max="10" step="1" id="hb_hShift" onChange={(e)=>props.set(e, props.state)}/>
                            <label>Vertical Shift</label>
                            <input type="range" min="-10" max="10" step="1" id="hb_vShift" onChange={(e)=>props.set(e, props.state)}/>
                            <label>Blur Offset</label>
                            <input type="range" min="-10" max="10" step="1" id="hb_blur" onChange={(e)=>props.set(e, props.state)}/>
                            <label>Color</label>
                            <input type="color" id="hb_color" onChange={(e)=>props.set(e, props.state)} />
                        </div> : null
                    }
                </div>
            </form>
        </div>
    )
}

function CountDown() {
    return (
        <div className='ge_count-down-container'>
            Count Down
        </div>
    )
}

function Pills() {
    return (
        <div className='ge_pills-container'>
            
        </div>
    )
}

function PeopleWatching() {
    return (
        <div className='ge_people-watching-container'>
            
        </div>
    )
}

function ExitPopup() {
    return (
        <div className='ge_exit-popup-container'>
            
        </div>
    )
}

function KidsSailFree() {
    return (
        <div className='ge_ksf-container'>
            
        </div>
    )
}

function PromoCode() {
    return (
        <div className='ge_promo-code-container'>
            
        </div>
    )
}

function IOBD(){
    return(
        <div className="ge_iobd-container">

        </div>
    )
}

export {HeroBanner, CountDown, Pills, PeopleWatching, ExitPopup, KidsSailFree, PromoCode, IOBD}