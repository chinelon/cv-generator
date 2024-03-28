/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Professionals({ onSubmit }) {
    //company name, position title, main responsibilities of your jobs, date 

    const [professionalData, setProfessionalData] = useState({
        company: '',
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: ''
    })

    const handleInputChange = (e) => {
        setProfessionalData({
            ...professionalData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(professionalData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="professional-form">
                <div>
                    <label>Company:</label>
                    <input type="text" id="textbox" name="company" value={professionalData.company} onChange={handleInputChange} placeholder="Amos and Sons Inc"
                    />
                </div>
                <div>
                    <label>Position held:</label>
                    <input type="text" id="textbox" 
                   placeholder="IT Intern" name="position" value={professionalData.position} onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Responsibilities:</label>
                    <input type="text" id="textbox" name="responsibilities" value={professionalData.responsibilities} onChange={handleInputChange}
                        placeholder="Set Up Content Calendar"
                    />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input type="date" id="textbox" name="startDate" value={professionalData.startDate} onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input type="date" id="textbox" name="endDate" value={professionalData.endDate} onChange={handleInputChange}
                    />
                </div>
                </div>

                <div className="button">
                    <button type="submit">Save</button>
                    <button type="submit">Edit</button>
                </div>
            </form>
        </div>
    )

}

