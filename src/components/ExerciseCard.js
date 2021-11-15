



function ExerciseCard( {exercise} ) {


    return (
        <li className="card">
            <h4>Name: {exercise.name}</h4>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <p>Equipment: {exercise.equipment}</p>
            <p>Body Part: {exercise.bodyPart}</p>
            <p>Target: {exercise.target}</p>
        </li>
    )
}


export default ExerciseCard;