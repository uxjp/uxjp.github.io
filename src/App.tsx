import './App.css';

function App() {
  return (
    <div className="app-container">
      <h2>Hello, it's JP 🦾</h2>
      <p className='test'>
        I like to learn new ways to do things and to automate stuff. Trying to
        do the same thing in a lot of different ways and organize created knowledge... yeah I learn just for the sake of it.  
        If you have been doing something cool about web dev or DX, contact me.
      </p>
      <div className="social_links">
        <a href="https://x.com/uxxxjp" target="_blank">X</a>
        <a href="https://www.linkedin.com/in/uxjp" target="_blank">LinkedIn</a>
        <a href="https://github.com/uxjp" target="_blank">GitHub</a>
      </div>
      
      <h4>Now I'm focusing on:</h4>
      <div className="skills">
        <img alt="Spring" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
        <img alt="Go" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
        <img alt="React" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img style={{ borderRadius: '30%' }}  alt="Bash" width="30px" src="data:image/png;base64,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" />
        <img alt="Linux" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
      </div>

      <h3 className='what_i_wrote'>🛠️ What I wrote</h3>
      <p>
        I started developing with C/C++ and OpenGL in computer graphics, then moved to full-stack web development using Java, Spring, MSSQL, and Flutter. Now, I'm working with React and Spring Boot to deploy my own apps.
      </p>
      <div className="skills">
        <img alt="Java" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
        <img alt="Spring" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
        <img alt="Flutter" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
        <img alt="Node.js" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        <img alt="TypeScript" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
        <img alt="Go" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
        <img alt="Ruby" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
        <img alt="Docker" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
        <img alt="Git" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <img alt="C" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
        <img alt="OpenGL" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg" />
        <img alt="Elixir" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" />
        <img alt="Phoenix" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg" />
      </div>
    </div>
  );
}

export default App;
