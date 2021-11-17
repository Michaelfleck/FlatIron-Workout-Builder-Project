import {useState} from "react";

function AddExercise( {handlePost, newExerciseInput, setNewExerciseInput} ) {

    // const [bodyPart, setBodyPart] = useState("")
    // const [equipment, setEquipment] = useState("")
    // const [gif, setGif] = useState("")
    // const [name, setName] = useState("")
    // const [target, setTarget] = useState("")









    return (
        <div className="new-exercise-form">
            <h2>New Exercise</h2>
            <form onSubmit={e => {
                e.preventDefault();
                handlePost(newExerciseInput)
                console.log("form submitted")
            }}>
                <input onChange={(e)=> setNewExerciseInput({ ...newExerciseInput, bodyPart:e.target.value})} type="text" name="body part" placeholder="Body Part" value={newExerciseInput.bodyPart}></input>
                <input onChange={(e)=> setNewExerciseInput({ ...newExerciseInput, equipment:e.target.value})} type="text" name="equipment" placeholder="Equipment" value={newExerciseInput.equipment}></input>
                <input onChange={(e)=> setNewExerciseInput({ ...newExerciseInput, gifUrl:e.target.value})} type="text" name="gif url" placeholder="GIF URL" value={newExerciseInput.gifUrl}></input>
                <input onChange={(e)=> setNewExerciseInput({ ...newExerciseInput, name:e.target.value})} type="text" name="name" placeholder="Name" value={newExerciseInput.name}></input>
                <input onChange={(e)=> setNewExerciseInput({ ...newExerciseInput, target:e.target.value})} type="text" name="target" placeholder="target" value={newExerciseInput.target}></input>
                <button type="submit"> Submit Exercise </button>
            </form>
        </div>
    )
}




export default AddExercise;