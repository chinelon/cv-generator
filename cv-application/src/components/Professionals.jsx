/* eslint-disable react/prop-types */
// professionals.jsx
import { useState } from "react";

const Professionals = ({ onSubmit }) => {
  const [professionalData, setProfessionalData] = useState({
    company: "",
    position: "",
    responsibilities: [],
    startDate: "",
    endDate: ""
  });

  const [newResponsibility, setNewResponsibility] = useState("");

  const handleInputChange = (e) => {
    setProfessionalData({
      ...professionalData,
      [e.target.name]: e.target.value
    });
  };

  const handleResponsibilityChange = (e) => {
    setNewResponsibility(e.target.value);
  };

  const addResponsibility = () => {
    if (newResponsibility.trim() !== "") {
      setProfessionalData({
        ...professionalData,
        responsibilities: [...professionalData.responsibilities, newResponsibility]
      });
      setNewResponsibility("");
    }
  };

  const removeResponsibility = (index) => {
    const updatedResponsibilities = professionalData.responsibilities.filter((_, i) => i !== index);
    setProfessionalData({
      ...professionalData,
      responsibilities: updatedResponsibilities
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(professionalData);
    // Clear the form fields after submission
    setProfessionalData({
      company: "",
      position: "",
      responsibilities: [],
      startDate: "",
      endDate: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="professional-form">
          <div>
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={professionalData.company}
              onChange={handleInputChange}
              placeholder="Amos and Sons Inc"
            />
          </div>
          <div>
            <label>Position held:</label>
            <input
              type="text"
              placeholder="IT Intern"
              name="position"
              value={professionalData.position}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Responsibilities:</label>
            <div>
              <input
                type="text"
                value={newResponsibility}
                onChange={handleResponsibilityChange}
                placeholder="Set Up Content Calendar"
              />
              <button type="button" onClick={addResponsibility}>Add</button>
            </div>
            <ul>
              {professionalData.responsibilities.map((responsibility, index) => (
                <li key={index}>
                  {responsibility}
                  <button type="button" onClick={() => removeResponsibility(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={professionalData.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={professionalData.endDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="button">
          <button type="submit">Save</button>
          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default Professionals;
