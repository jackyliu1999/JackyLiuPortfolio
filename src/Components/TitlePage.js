import React from 'react';
import './TitlePage.css';
import githubLogo from "./images/github.png"
import devpostLogo from "./images/devpost.png"
import linkedInLogo from "./images/linkedin.png"
import headLoopVideo from "./images/background.mp4"

function TitlePage() {
  return (
    <div className='hero-container'>
      <video src={headLoopVideo} autoPlay loop muted />
      <section id="headSection" class="d-flex align-items-center justify-content-center">
        <div class="container" data-aos="fade-up">

          <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div class="col-xl-6 col-lg-8">
              <h1>Hello, my name is Jacky Liu<span>.</span></h1>
              <h2>I am a Full Stack Developer.</h2>
            </div>
          </div>

          <div class="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <div class="col-xl-2 col-md-4 col-6">
              <div class="icon-box">
                <h3><a href="https://github.com/jackyliu1999"><img class="img-fluid" src={githubLogo} width="60" height="0" /></a></h3>
                <div style={{color:"white"}}>GitHub</div>
              </div>
            </div>
            <div class="col-xl-2 col-md-4 col-6 ">
              <div class="icon-box">
                <h3><a href="https://devpost.com/jackyliu1999"><img class="img-fluid" src={devpostLogo} width="60" height="0" /></a></h3>
                <div style={{color:"white"}}>Devpost</div>
              </div>
            </div>
            <div class="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
              <div class="icon-box">
                <h3><a href=""><h3><a href="https://www.linkedin.com/in/jackyliu1999"><img class="img-fluid" src={linkedInLogo} width="50" height="50" /></a></h3></a></h3>
                <div style={{color:"white"}}>LinkedIn</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default TitlePage;