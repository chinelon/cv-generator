/* eslint-disable react/prop-types */
import { useState } from "react";

export default function General({ onSubmit }) {
    const [generalData, setGeneralData] = useState({
        name: '',
        address: '',
        objective: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        setGeneralData({
            ...generalData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(generalData);
    };


    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className="general-main">
                    <div className="general-form">
                        <div>
                            <label>Name: </label>
                            <input type="text" name="name" value={generalData.name} onChange={handleInputChange}
                                id="textbox" placeholder="Chinelo Nwobbbi"
                            />
                        </div>
                        <div>
                            <label>Address: </label>
                            <input type="text" name="address" value={generalData.address} onChange={handleInputChange}
                                placeholder="12a Chicken Republic" id="textbox"
                            />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="text" id="textbox" name="email" value={generalData.email} onChange={handleInputChange} placeholder="laurennwobbi@gmail.com" />
                        </div>

                        <div><label>Phone Number: </label>
                            <input type="text" id="textbox" name="phone" value={generalData.phone} onChange={handleInputChange} placeholder="0905045678" />

                        </div>
                        <div>
                            <label>Objective: </label>
                            <input type="text" id="textbox" name="objective" value={generalData.objective} onChange={handleInputChange}
                                placeholder="Lorem Ipsum Dolor"
                            />
                        </div>
                    </div>

                    <div className="button">
                        <button type="submit">Save</button>
                        <button type="submit">Edit</button>
                    </div>
                </div>

            </form>
        </div >
    )
}