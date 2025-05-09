
import './App.css'

function App() {

  return (
    <>
      <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        
        <div>

          <img id="pic_me"  src='/me.jpeg'/> 
          
          </div> 



        <p>
          Hi, I'm Julio C. Prudencio , a passionate developer with a focus on  Full stack web development, machine learning, and Cloud Technologies.
        </p>

        <div>
          <a href='https://github.com/Juulio-p' >
          <img id="github_logo" src='/githubLogo.png'/>
          </a>

          <a href='https://www.linkedin.com/in/prudenciojulio/'>
          <img id="linkedln" src='/linkedln.png'/> 
          
          
          </a>



        </div>




      </header>

      
      <section className="projects">
  <h2>My Projects</h2>
  
  <div className="project-list">

    {/* Project 1 */}
    <div className="project-item card">
      <h3>Project 1</h3>

      <p>
        This project is built on a serverless architecture using AWS technologies like DynamoDB, Google Firebase (Authentication), Lambda functions, and API Gateway. It also uses Flask with Boto3 for backend routing and Python integration. The frontend showcases knowledge of HTML, CSS, JavaScript, Typescript, and deploying a full-stack serverless app.
      </p>
      <a
        href="https://5q87zjb5yd.execute-api.us-east-1.amazonaws.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Project Web Page
      </a>
      <div className="project-preview">
        <iframe
          src="https://5q87zjb5yd.execute-api.us-east-1.amazonaws.com"
          title="Project 1 Preview"
          width="100%"
          height="300px"
          frameBorder="0"
          style={{ border: "none" }}
          loading="lazy"
        />
      </div>
   
    </div>

    {/* Project 2 */}
    <div className="project-item card">
      <h3>Project 2</h3>
     
      <p>
        A fun static website project created while learning React basics. It demonstrates use of GitHub Pages for deployment and beginner-level UI work.
      </p>
      <a
        href="https://juulio-p.github.io/Website/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redirect 
      </a>
      <div className="project-preview">
        <iframe
          src="https://juulio-p.github.io/Website/"
          title="Project 2 Preview"
          width="100%"
          height="300px"
          frameBorder="0"
          style={{ border: "none" }}
          loading="lazy"
        />
      </div>
    </div>

  </div>
</section>
    </div>
    
    </>
  )
}

export default App
