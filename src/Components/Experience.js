  
import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className='resume'>
      <br/>
      <h2 id="resume" style={{textAlign:"center"}}><b>Experience</b></h2>
      <section class="resume">
      <div class="container">

        <div class="section-title">
          <br/>
          <h2 style={{textAlign:"center"}}><b>Programming Languages Proficiency</b></h2>
          <br/>
        </div>
              
        <div class="row">
          <div class="col-lg-6">
            <div class="resume-item">
            <h4>Advanced</h4>
            <p>
              <ul>
                <li>Python</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
            <p>
            <h4>Proficient</h4>
              <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Java</li>
              </ul>
              </p>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="resume-item">
              <h4>Intermediate</h4>
              <p>
              <ul>
                <li>C++</li>
                <li>C</li>
                <li>CSS</li>
                <li>SQL</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Exposure</h4>
              <p>
              <ul>
                <li>MIPS Assembly</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-title">
          <br/>
          <h2 style={{textAlign:"center"}}><b>Qualifications</b></h2>
          <br/>
        </div>
      <section id="resume" class="resume">
      <div class="container">

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Ontario Secondary School Diploma	</h4>
              <h5>September 2013 to June 2017</h5>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Science in Computer Science</h4>
              <h5>September 2017 to April 2021</h5>
              <p><em>Western University, London, Ontario</em></p>
            </div>
            <h3 class="resume-title">Achievements</h3>
            <div class="resume-item">
              <h4>Hack for the People Winner</h4>
              <h5>August 2020</h5>
              <li>Led a team of two other developers to create a security based program that mitigates damage caused by laptop theft for Hack for the People</li>
              <li>Out of over 700 participants, won the category for “Best Digital Privacy Hack”</li>
            </div>
            <div class="resume-item">
              <h4>Ontario Scholar</h4>
              <h5>June 2017</h5>
              <p>
              <ul>
                <li>Awarded to high school students who achieved an average of 80% or greater in their graduating year</li>
              </ul>
              </p>
            </div>
          </div>
          
          <div class="col-lg-6">
            <h3 class="resume-title">Skills</h3>
            <div class="resume-item">
              <h4>Frameworks and Libraries</h4>
              <p>
              <ul>
                <li><b>Python:</b> Django, Keras, NumPy, OpenPyXL, PIL, Selenium, SpeechRecognition, TensorFlow, Tkinter, pandas, pynput, pytesseract, pyttsx3, ibm_watson, requests, scikit-learn</li>
                <li><b>JavaScript: </b>React Native, React, Bootstrap, Django, Axios, bcrypt, express, socket.io, react-scroll-to-bottom, react-emoji</li>
                <li><b>Java: </b>JDA, Orianna</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Software, IDEs and Tools</h4>
              <p>
              <ul>
                <li><b>Photo and Video Editing:</b> Adobe Photoshop, Camtasia Studio</li>
                <li><b>Programming Software and IDEs:</b> Eclipse, Git, PyCharm, Anaconda, Android Studio, Node.js</li>
                <li><b>Microsoft:</b> Microsoft Excel, Microsoft PowerPoint, Microsoft Word</li>
                <li><b>Databases and Servers:</b> MySQL, Apache, phpMyAdmin </li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Languages</h4>
              <p>
              <ul>
                <li>English</li>
                <li>Chinese (Cantonese)</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Experience;