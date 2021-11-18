import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercises, onAddExercise }) {
    return (
        <div>
            <h2>Select Exercise</h2>
            <ul className="cards">
                {exercises.map(exercise =>
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        onExerciseClick={onAddExercise}
                    />)}
            </ul>
        </div>
    )
}



export default ExerciseList;