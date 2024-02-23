import { useState } from "react";

export default function Skills() {

    const [skill, setSkill] = useState('')

    return (
        <>
            <div>
                <label>New Skill:</label>
                <input
                    type="text"
                    value={skill}
                    onChange={(event) => setSkill(event.target.value)}
                    placeholder="Skill"

                />
            </div>

        </>
    )
}