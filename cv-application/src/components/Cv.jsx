/* eslint-disable react/prop-types */
//import React from 'react';

export default function Cv({ generalData, educationData, professionalData, skills }) {
    console.log(generalData, educationData, professionalData, skills);
    return (
        <>
            <h2>CV</h2>
            <div className="cv">
                <h1>{generalData.name}</h1>
                <p>Email: {generalData.email}</p>
                <p>Phone: {generalData.phone}</p>
                <h3>Objective:</h3>
                <p>{generalData.objective}</p>

                <h2>Education</h2>
                <div className="edu-grid">
                    <p>{educationData.school}</p>
                    <p>{educationData.date}</p>
                    <p>{educationData.degree}</p>
                    <p>{educationData.grade}</p>
                </div>



                <h2>Work Experience</h2>
                <p>{professionalData.company}</p>
                <p>{professionalData.position}</p>
                <p>{professionalData.startDate} to {professionalData.endDate}</p>
                <h3>Responsibilites: </h3>
                <p>&#x2022; {professionalData.responsibilities}</p>

                <h2>Skills</h2>
                <p>&#x2022; {skills.skill}</p>

            </div>
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
        responsibilities: 'Sample responsibilities...',
        startDate: 'June 2014',
        endDate: 'Present'
    },
    skills: {
        skill: 'Chinelo'
    }
};