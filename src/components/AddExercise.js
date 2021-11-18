import { useState } from "react";

function AddExercise({ addNewExercise }) {

    const [name, setName] = useState('')
    const [gifUrl, setGifUrl] = useState('')
    const [equipment, setEquipment] = useState('')
    const [bodyPart, setBodyPart] = useState('')
    const [target, setTarget] = useState('')


    const handlePost = (e) => {
        e.preventDefault();
        console.log(e);



        fetch("http://localhost:6001/exercises", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                // reset
                {
                name: name,
                gifUrl: gifUrl,
                equipment: equipment,
                bodyPart: bodyPart,
                target: target,
            }
            ),
        })
            .then(r => r.json())
            .then(data => addNewExercise(data));
            
            // form reset
            setName("")
            setGifUrl("")
            setEquipment("")
            setBodyPart("")
            setTarget("")

    }

    return (
        <div className="new-exercise-form">
            <h2>New Exercise</h2>
            <form onSubmit={handlePost}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="gif url"
                    placeholder="GIF URL"
                    value={gifUrl}
                    onChange={(e) => setGifUrl(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="equipment"
                    placeholder="Equipment"
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="body part"
                    placeholder="Body Part"
                    value={bodyPart}
                    onChange={(e) => setBodyPart(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="target"
                    placeholder="target"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                ></input>
                <button type="submit">Submit Exercise</button>
            </form>
        </div>
    )
}




export default AddExercise;