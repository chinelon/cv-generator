/* eslint-disable react/prop-types */
//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Education from './components/Education'
import Professionals from './components/Professionals'
import Skills from './components/Skills'


// import General from './components/General'
import { useState } from 'react'
import General from './components/General'
import Cv from './components/Cv'

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false)
  return (
    <section className="panel">

      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true) || setIsClicked(true)}>
          Show
        </button>
      )}

      {isClicked ? (<button onClick={() => setIsActive(false)}>
        Hide
      </button>) : (
        null
      )}
    </section>
  );
}

function App() {
  const [generalData, setGeneralData] = useState({
    name: '',
    address: '',
    objective: '',
    email: '',
    phone: ''
  });
  const [educationData, setEducationData] = useState({
    school: '',
    degree: '',
    grade: '',
    date: ''
  });

  const [professionalData, setProfessionalData] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  });

  const [skills, setSkills] = useState({
    skill: ''
  });

  const handleGeneralInfoSubmit = (data) => {
    setGeneralData(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
  };

  const handleProfessionalSubmit = (data) => {
    setProfessionalData(data);
  };

  const handleSkillsSubmit = (data) => {
    setSkills(data);
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="nav">
          <h2>Input Information Here</h2>
          <Panel title="General">
            <General onSubmit={handleGeneralInfoSubmit} />
          </Panel>
          <Panel title="Education">
            <Education onSubmit={handleEducationSubmit}/>
          </Panel>
          <Panel title="Professional">
            <Professionals onSubmit={handleProfessionalSubmit}/>
          </Panel>
          <Panel title="Skills">
            <Skills onSubmit={handleSkillsSubmit}/>
          </Panel>
        </div>
        <div>
          <Cv 
          generalData={generalData}
          educationData={educationData}
          professionalData={professionalData}
          skills={skills}
          />
        </div>
      </div>


      <Footer />
    </>
  )
}

export default App;
