import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercises, onAddExercise }) {
    return (
        <div>
            <h2>Select Exercise</h2>
            <ul className="cards">
                {exercises.slice(0, 10).map(exercise =>
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