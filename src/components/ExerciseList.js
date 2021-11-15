
import ExerciseCard from "./ExerciseCard";



function ExerciseList( {exercises} ) {


    return (
        <ul className="cards">
            {exercises.map (exercise => 
                <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                />)}
        </ul>
    )
}



export default ExerciseList;