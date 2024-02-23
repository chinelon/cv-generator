import { useState } from "react";

export default function Professionals() {
    //company name, position title, main responsibilities of your jobs, date 
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <>
            <div>
                <label>Company Name:</label>
                <input
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="Company Name"
                />
            </div>
            <div>
            <label>Position held:</label>
                <input
                    type="text"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    placeholder="Position Held"
                />
            </div>
            <div>
            <label>Responsibilites:</label>
                <textarea
                    type="text"
                    value={responsibilities}
                    onChange={(event) => setResponsibilities(event.target.value)}
                    placeholder="Set Up Content Calendar"
                />
            </div>
            <div>
            <label>Start Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    placeholder="phone number"
                />
            </div>
            <div>
            <label>End Date:</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    placeholder="phone number"
                />
            </div>
        </>
    )

}

