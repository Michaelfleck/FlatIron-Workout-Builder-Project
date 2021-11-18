import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router';

import AddExercise from "./AddExercise"
import ExerciseList from "./ExerciseList";
import MyExercises from "./MyExercises";
import Search from "./Search";




function ExercisePage() {

  const [exercises, setExercises] = useState([])
  const [myExercises, setMyExercises] = useState([])
  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
    fetch('http://localhost:6001/exercises')
      .then(resp => resp.json())
      .then(data => {
        setExercises(data);
      });
  }, [])


  function handleAddExercise(exerciseToAdd) {
    const myExerciseList = myExercises.find(
      (exercise) => exercise.id === exerciseToAdd.id
    );
    if (!myExerciseList) {
      setMyExercises([...myExercises, exerciseToAdd]);
    }
  }

  function handleNewExercise(newExercise) {
    const updatedExerciseArray = [newExercise, ...exercises];
    setExercises(updatedExerciseArray);
  }

  function handleRemoveExercise(exerciseToRemove) {
    setMyExercises((myExercises) =>
      myExercises.filter((exercise) => exercise.id !== exerciseToRemove.id)
    );
  }

  const displayedExercises = exercises.filter((exercise) => {
    return exercise.target.toLowerCase().includes(searchTerm.toLowerCase());
  });




  return (
    <main>
      <Switch>
        <Route path="/exercise/new/my-list">
          <MyExercises
            myExercises={myExercises}
            onRemoveExercise={handleRemoveExercise} />
        </Route>

        <Route path="/exercise/new">
          <AddExercise
            addNewExercise={handleNewExercise}
          />
        </Route>
        <Route path="/exercise">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm} />
          <ExerciseList
            onAddExercise={handleAddExercise}
            exercises={displayedExercises} />
        </Route>
      </Switch>
    </main>
  );
}

export default ExercisePage;