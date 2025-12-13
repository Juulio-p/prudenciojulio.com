
import './App.css'
import { useState } from "react";
function App() {
  const [active, setActive] = useState("home");


  return (
    <>
    <div>
      <div className="topnav">
  {/* LEFT SIDE NAV LINKS */}
  <div className="nav-left">
    <a
      className={active === "home" ? "active" : ""}
      onClick={() => setActive("home")}
    >
      Home
    </a>

    <a
      className={active === "contact" ? "active" : ""}
      onClick={() => setActive("contact")}
      href='#contact'
    >
      Contact
    </a>

    <a
      className={active === "about" ? "active" : ""}
      onClick={() => setActive("about")}
      href='#about-me'

    >
      About
    </a>
  </div>

  {/* RIGHT SIDE SOCIALS */}
  <div className="nav-right">
    <a href="https://github.com/Juulio-p" target="_blank" rel="noreferrer">
      <img className="nav-icon" src="/githubLogo.png" />
    </a>

    <a href="https://www.linkedin.com/in/prudenciojulio/" target="_blank" rel="noreferrer">
      <img className="nav-icon" src="/linkedln.png" />
    </a>
  </div>
</div>


      <header className="App-header">
      <div className="image-container">
  <img src="/nu.png" alt="Profile" />
</div>

      


      </header>

      
  <section className="projects">
  <h2 id="header" style={{paddingBottom:'2%' }}>My Projects</h2>

  <div className="project-item card">
    <div>

      <h3> 
        Project 1
        
        <p>
          -Project is built using serverless famework using AWS technologies. 
          <br></br>

          <h6>-Skills displayed / Tech Used</h6>
          <li>
            -DynamoDB, API Gateway, Lambda, S3 
          </li> 
          <li>
            -Frontend - TypeScript, React, HTML, CSS
          </li> 
          <li>
            -Backend - Python, Flask, Google Fire Base (Authentication), Boto3
          </li> 
          <li>
            Debugging - Cloud Watch , Cloud Formation 
          </li> 
          <br></br>

          <h3>Links Below!</h3>
        </p>
        <a href='https://github.com/Juulio-p/flask_site' >
          <img id="github_logo" src='/githubLogo.png'/>
        </a>

        <a href='https://5q87zjb5yd.execute-api.us-east-1.amazonaws.com/' >
          <img id="github_logo" src='/z.png'/>
        </a>



        </h3>
    </div>


  </div>

  <div className="project-item card">
    <div>

      <h3> 
        Project 2
        
        <p>
         -First React website, Hosted on Github
          <br></br>

          <h6>-Skills displayed / Tech Used</h6>
         
          <li>
            -Frontend - TypeScript, React, HTML, CSS
          </li> 
          <li>
            -Github Deployment
          </li> 
          <br></br>
          
          <h3>Links Below!</h3>
        </p>
        <a href='https://github.com/Juulio-p/Website' >
          <img id="github_logo" src='/githubLogo.png'/>
        </a>

        <a href='https://juulio-p.github.io/Website/' >
          Link!
        </a>

        </h3>
    </div>
  </div>


  <div className='about-me'>

    <h2 id='header'>About me </h2>
    
    
    
    <img id="pic_me"  src='/me.jpeg'/> 

    <p id="about-me">
    Hi, I'm Julio C. Prudencio, an aspiring developer with a strong foundation in computer science, cloud technologies, and full-stack development. I enjoy building clean, efficient applications—whether that means designing serverless architectures with AWS, developing interactive React interfaces, or experimenting with machine learning models for cybersecurity and automation. <br></br>
    <br></br>

I've worked on projects ranging from serverless web applications using AWS Lambda, DynamoDB, API Gateway, and S3, to client-server systems, Flask APIs, and cloud-native security labs. I'm also experienced with modern web development tools such as TypeScript, React, Python, Flask, and Google Firebase for authentication.

Beyond software engineering, I've spent time researching deep learning for cyber-attack detection, working on security-focused systems, and building hands-on labs involving networks, botnets, and threat analysis.
<br></br>
<br></br>

I'm constantly learning—whether it's improving UI/UX in my personal portfolio, optimizing backend logic, or studying how cloud systems scale. My long-term goal is to grow into a versatile engineer who can build reliable, secure, and impactful technology.

       </p>

</div> 
<div id='contact'>

  <h1 id='header' >Contacts</h1>
  <p>If you'd like to collaborate or get in touch, feel free to reach out!</p>

  <div id="contact-container">
  <h2 id='header'> Email </h2>

  <a href="mailto:pjulio1234@gmail.com">
    <img id="icon" src="/emailIcon.png" />
  </a>

  <h2 id='header'> Resume </h2>

  <a href="/JulioResume.pdf" download>
    <img id="icon" src="/resume.png" />
  </a>
</div>



</div>

</section>
    </div>
    
    </>
  )
}

export default App
