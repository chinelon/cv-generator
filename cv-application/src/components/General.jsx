import { useState } from "react";

export default function General() {
    //name, email and phone number.

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <div>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name"
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="email"
                />
            </div>
            <div>
                <label htmlFor="phonenumber">Phone Number;</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="phone number"
                />
            </div>
        </div>
    )
}