import React from 'react'
import ExerciseCard from './ExerciseCard';

function MyExercises({ myExercises, onRemoveExercise }) {
    console.log(myExercises)
    return (
        <div>
            <h2>My Exercises</h2>
            <ul className="cards">
                {myExercises.map(myExercise =>
                    <ExerciseCard
                        key={myExercise.id}
                        exercise={myExercise}
                        onExerciseClick={onRemoveExercise}
                    />)}
            </ul>
        </div>
    )
}

export default MyExercises;