/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Education({ onSubmit }) {

    const [educationData, setEducationData] = useState({
        school: '',
        degree: '',
        grade: '',
        date: ''
    })

    const handleInputChange = (e) => {
        setEducationData({
            ...educationData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(educationData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="education-form">
                    <div>
                        <label>School: </label>
                        <input type="text" id="textbox" name="school" value={educationData.school} onChange={handleInputChange}
                        placeholder="Pan Atlantic University"/>
                    </div>
                    <div>
                        <label>Degree Obtained: </label>
                        <input type="text" id="textbox" name="degree" value={educationData.degree} onChange={handleInputChange}
                            placeholder="B.Sc Information Science"
                        />
                    </div>
                    <div>
                        <label>Grade: </label>
                        <input type="text" id="textbox" name="grade" value={educationData.location} onChange={handleInputChange}
                            placeholder="First Class"
                        />
                    </div>
                    <div>
                        <label>Gradution Date: </label>
                        <input type="date" id="textbox" name="date" value={educationData.date} onChange={handleInputChange}
                            placeholder="Date"
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