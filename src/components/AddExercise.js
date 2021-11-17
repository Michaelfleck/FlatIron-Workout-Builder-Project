import { useState } from "react";

function AddExercise({ exercises }) {

    const [newExerciseInput, setNewExerciseInput] = useState({
        bodyPart: '',
        equipment: '',
        gifUrl: '',
        name: '',
        target: ''
    })

    const handlePost = (e) => {
        e.preventDefault();

        fetch("http://localhost:6001/exercises", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(),
        })
            .then(r => r.json())
            .then(data => console.log("data: ", data, "exercises: ", exercises))
    }

    return (
        <div className="new-exercise-form">
            <h2>New Exercise</h2>
            <form onSubmit={e => {
                e.preventDefault();
                handlePost(newExerciseInput)
                console.log("form submitted")
            }}>
                <input
                    
                    type="text"
                    name="body part"
                    placeholder="Body Part"
                    value={newExerciseInput.bodyPart}
                    onChange={(e) => setNewExerciseInput(e.target.value )}
                ></input>
                <input onChange={(e) => setNewExerciseInput({ ...newExerciseInput, equipment: e.target.value })}
                    type="text"
                    name="equipment"
                    placeholder="Equipment"
                    value={newExerciseInput.equipment}></input>
                <input onChange={(e) => setNewExerciseInput({ ...newExerciseInput, gifUrl: e.target.value })}
                    type="text"
                    name="gif url"
                    placeholder="GIF URL"
                    value={newExerciseInput.gifUrl}></input>
                <input onChange={(e) => setNewExerciseInput({ ...newExerciseInput, name: e.target.value })}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newExerciseInput.name}></input>
                <input onChange={(e) => setNewExerciseInput({ ...newExerciseInput, target: e.target.value })}
                    type="text"
                    name="target"
                    placeholder="target"
                    value={newExerciseInput.target}></input>
                <button type="submit"> Submit Exercise </button>
            </form>
        </div>
    )
}




export default AddExercise;