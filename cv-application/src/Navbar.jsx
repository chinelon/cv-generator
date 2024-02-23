/* eslint-disable react/prop-types */
import { useState } from "react";
import Education from "./components/Education";
import Professionals from "./components/Professionals";
import General from "./components/General";

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

        {isClicked ? (<button onClick={() =>setIsActive(false)}>
            Hide
          </button>):( 
             null
        )}
      </section>
    );
  }

export default function Navbar(){
    return (
        <>
        <Panel title="General">
            <General />
          </Panel>
          <Panel title="Education">
           <Education />
          </Panel>
          <Panel title="Professional">
           <Professionals />
          </Panel>
        </>
      );
}