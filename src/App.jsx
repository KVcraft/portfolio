import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Components/NavBar.jsx'
import './App.css'
import profilePic from '/assets/profilePic.JPG'

function App() {
  return (
    <>
      <NavBar />

      {/* About Section */}
      <section id='about'>
      <div className="about-body">
        <div className="profile-image">
          <img src={profilePic} alt="Profile Picture" />

            <div className="social-links">

              <a href="https://github.com/KVcraft" className='social-link' target="_blank" rel="noopener noreferrer">
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/kavindu-viduranga-932098288/" className='social-link' target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
          </div>
        </div>

        <div className="about-text">
          <h2>Hello!</h2>
          <p>
            I am Kavindu Viduranga!
            I am an undergraduate student at NIBM university, currently pursuing a degree in Software Engineering.<br/><br/>
            I have a great interest in learning new technologies and putting them to good use.<br/><br/>
            Feel free to explore my portfolio and get in touch if you'd like to collaborate or learn more about my work!
          </p>
          </div>
        </div>
        </section>


        {/* Skills Section */}
        <section id='skills'>
        <div className="skill-heading">
          <h2 className='section-heading'>Skills</h2>
          </div>

          <div className='skill-body'>
            <div className='skill-list'>
              <h3 className='list-heading'>Programming Languages</h3>

              <li>C#,C</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>PHP</li>

            </div>

            <div className='skill-list'>
              <h3 className='list-heading'>Tools</h3>

              <li>Visual Studio Code</li>
              <li>Visual Studio IDE</li>
              <li>IntelliJ</li>
              <li>NetBeans</li>
              <li>Android Studio</li>
              <li>Arduino IDE</li>
              <li>Figma</li>
              <li>XAMPP</li>
              <li>Github</li>
              
            </div>

            <div className='skill-list'>
              <h3 className='list-heading'>Database Systems</h3>

              <li>MSSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Oracle Database</li>
              
            </div>

          </div>
          </section>

          {/* Projects Section */}
          <section id='projects'>
          <div className="project-heading">
          <h2 className='section-heading'>Projects</h2>
          </div>

          <div className="project-body">
            
            <a href="https://github.com/PramudithaPrabhashana/HAELIN" className='project-card' target="_blank" rel="noopener noreferrer">
              <h3>Haelin</h3>
              <p>
                A Healthcare application that allows users to get accurate predictions
                regarding re-occuring diseases such as Dengue and Chikungunya.
              </p>
            </a>

            <a href="https://github.com/KVcraft/CulinaryItemPicker" className='project-card' target="_blank" rel="noopener noreferrer">
              <h3>Culinary Item Picker</h3>
              <p>
                A Robotic arm that assists users in a kitchen environment
              </p>
            </a>

            <a href="https://github.com/KVcraft/UrbanFood" className='project-card' target="_blank" rel="noopener noreferrer">
              <h3>Urban Food</h3>
              <p>
                An online grocery shopping system developed for both managing and purchasing groceries.
              </p>
            </a>

            <a href="https://github.com/KVcraft/TuitionAppV2" className='project-card' target="_blank" rel="noopener noreferrer">
              <h3>Tuition Managment App</h3>
              <p>
                A mobile application that helps tutors manage their Students, Teachers and Courses.
              </p>
            </a>
          </div>
          </section>

          {/* Contact Section */}
          <section id='contact'>
          <div className="contact-heading">
          <h2 className='section-heading'>Contact Me</h2>
          </div>
          <div className="contact-body">
            akavinduv69@gmail.com
          </div>
          </section>
    </>
  )
}

export default App
