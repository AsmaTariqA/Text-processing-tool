import React, { useState, useSyncExternalStore } from 'react'

export default function About() {

    const [theStyle,setTheStyle] = useState({
        color: "white",
        backgroundColor: 'black',
        border: "2px solid white"
    })
    const [btntext,setBtnText] = useState('Enable dark mode')

     let toggleStyle = ()=>{
        if(theStyle.color === 'white'){
            setTheStyle({
                color: 'black',
                backgroundColor:"white"
            })
            setBtnText("Enable dark mode");
        }
        else{
            setTheStyle({
                color: 'white',
                backgroundColor:"black"
            })
            setBtnText("Enable light mode");
        }
    }
    
    return (
        <div className="container" style={theStyle}>
            <h2>About us</h2>
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" style={theStyle}>
                        <button className="accordion-button"  style={theStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            React app
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Hey I am Asma Tariq Ansari.</strong> It is a Text Utility app that i created by using react. This app is a part of my react learning journey, there are a lot of things that need to be fixed and it could be made better  but curently I am focusing on learning the frame-work instead of focusing on desinging skils.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={theStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={theStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           About developer
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>I'm a huge tech stan .</strong> I am currently learning web development online, i find it fun but sometimes it gets complex. For me , the best way to learn is by building projects, Happy text analyzing !
                        </div>
                    </div>
                </div>
                
            </div>
       
         </div>
         <div className="container">
         <button onClick={toggleStyle} type='buttons' className='btn btn-primary my-3'>{btntext}</button>
         </div>
         
    </div>

)}
