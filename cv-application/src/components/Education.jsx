import { useState } from "react";

export default function Education(){
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(null);

    return(
        <div>
            <div>
                <label htmlFor="school name">School Name:</label>
            <input
                type="text"
                value={school}
                onChange={(event) => setSchool(event.target.value)}
                placeholder="Name"
            />
            </div>
            <div>
                <label htmlFor="degree">Degree:</label>
            <input
                type="text"
                value={degree}
                onChange={(event) => setDegree(event.target.value)}
                placeholder="B.Sc Information Science"
            />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
            <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Lagos, Nigeria"
            />
            </div>
            <div>
                <label htmlFor="date">Date of Graduation:</label>
            <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                placeholder="phone number"
            />
            </div>
        </div>
    )

}