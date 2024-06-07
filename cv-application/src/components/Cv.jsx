/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Cv({ generalData, educationData, professionalData, skills }) {
    const generatePDF = () => {
        const input = document.getElementById('cv');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("cv.pdf");
            });
    };

    return (
        <>
            <h2>CV</h2>
            <div id="cv" className="cv">
                <h1>{generalData.name}</h1>
                <p>Email: {generalData.email}</p>
                <p>Phone: {generalData.phone}</p>
                <h3>Objective:</h3>
                <p>{generalData.objective}</p>

                <h2>Work Experience</h2>
                {professionalData.map((info, index) => (
                    <div key={index}>
                        <h4>{info.company}</h4>
                        <h4>{info.position}</h4>
                        <p>{info.startDate} to {info.endDate}</p>
                        <h4>Responsibilities: </h4>
                        <ul>
                            {info.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>&#x2022; {responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <h2>Education</h2>
                <div className="edu-grid">
                    <p>{educationData.school}</p>
                    <p>{educationData.date}</p>
                    <p>{educationData.degree}</p>
                    <p>{educationData.grade}</p>
                </div>
                <h2>Skills</h2>
                {skills.map((info, index) => (
                    <div key={index}>
                        <p>&#x2022; {info.skill}</p>
                    </div>
                ))}
            </div>
            <br />
            <button onClick={generatePDF}>Click here to download pdf format!</button>
        </>
    );
}

Cv.defaultProps = {
    generalData: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
    },
    educationData: {
        school: 'Sample University',
        degree: 'Bachelor of Science',
        location: 'Sample City',
        date: 'September 2010 - May 2014'
    },
    professionalData: {
        company: 'Sample Company',
        position: 'Software Engineer',
        responsibilities: ['Sample responsibility 1', 'Sample responsibility 2'],
        startDate: 'June 2014',
        endDate: 'Present'
    },
    skills: {
        skill: 'Chinelo'
    }
};
