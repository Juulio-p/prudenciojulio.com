
import './App.css'

function App() {

  return (
    <>
      <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Julio C. Prudencio , a passionate developer with a focus on  Full stack web development, machine learning, and Cloud Technologies.
        </p>
        <a
          className="App-link"
          href="https://github.com/Juulio-p"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </header>

      
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          {/* Example project 1 */}
          <div className="project-item card">
            <h3>Project 1</h3>
            <p> Project connected to amazon's dynamo db. Data is processed using boto3,
		this is part of a this serverless framework that utilizes, aws technologies such as dynamodb, lambda, and api gateway. 
		this serves to show knowledge of these technologies as well as basic concepts such as routing with python and flask. Also 
		of course with basic knowledge of javascript, html, and css. Link to Project Repository Below. </p>
            {/* Project Preview (Iframe to show live website) */}
            <div className="project-preview">
              <iframe
                src="https://5q87zjb5yd.execute-api.us-east-1.amazonaws.com"  // Replace with your project URL
                title="Project 1 Preview"
                width="100%"
                height="100%"
              />
            </div>
            <a
              href="https://5q87zjb5yd.execute-api.us-east-1.amazonaws.com"  // Replace with your live project URL
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Example project 2 */}
          <div className="project-item card">
            <h3>Project 2</h3>
            <p>Project I did for fun while learning reat basics </p>
            {/* Project Preview (Iframe to show live website) */}
            <div className="project-preview">
              <iframe
                src="https://juulio-p.github.io/Website/"  // Replace with your project URL
                title="Project 2 Preview"
                width="100%"
                height="300px"
                frameBorder="0"
              />
            </div>
            <a
              href="https://juulio-p.github.io/Website/"  // Replace with your live project URL
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </div>
    
    </>
  )
}

export default App
