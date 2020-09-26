import React from 'react'
import webpic from '../images/webpic.png'


export default function About(){
    return(
        <div className="About-Content show" id="main">
                  <img src={webpic} className="picture rounded-circle" alt="profile-pic"/>
                  
                  <h2 className="mt-4 mb-2 quatrocento">Adrian Gabales</h2>
                  <p className="content-info quatrocento">Hello World! I am currently a student pursuing a Computer Science degree at Western Washington University.
                    Throughout my journey in Computer Science at Western, I have developed an interest in automating tasks, web development, and 
                    currently getting into the Machine Learning side of things. Aside from Computer Science related stuff, I spend my time playing the guitar, 
                    and playing video games. Below are the programming languages I have applied my projects on.</p>
                  <p className="content-info quatrocento">
                    In the future, I plan on adding some of my notes here to actively recall what I have learned from my classes. This will serve as an open notebook for anyone 
                    that visits this website as well.
                  </p>
                  <h5> Main Programming Languages I Use:</h5>
                  <ul className="content-info">
                    <li><p className="quatrocento">Python</p></li>
                    <li><p className="quatrocento">Java</p></li>
                    <li><p className="quatrocento">C/C++</p></li>
                    <li><p>Javascript</p></li>
                  </ul>
              </div>
    )
}