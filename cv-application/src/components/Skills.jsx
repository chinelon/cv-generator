/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Skills({ onSubmit }) {

    const [skills, setSkills] = useState({
        skill: ''
    })

    const handleInputChange = (e) => {
        setSkills({
            ...skills,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(skills);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="skill">
                    <label>Skills:</label>
                    <input type="text" name="skill" id="textbox" placeholder="Problem Solving"
                        value={skills.skill} onChange={handleInputChange}
                    />
                </div>
                <div className="button">
                    <button type="submit">Save</button>
                    <button type="submit">Edit</button>
                </div>
            </form>
        </div>

    )
}