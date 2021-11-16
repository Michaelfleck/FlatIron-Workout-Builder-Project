import React from 'react'
import ExerciseCard from './ExerciseCard';

function MyExercises({ myExercises, onRemoveExercise }) {
    return (
        <div>
            <h2>My Exercises</h2>
            <ul className="cards">
                {myExercises.slice(0, 10).map(myExercise =>
                    <ExerciseCard
                        key={myExercise.id}
                        myExercise={myExercise}
                        onExerciseClick={onRemoveExercise}
                    />)}
            </ul>
        </div>
    )
}

export default MyExercises;