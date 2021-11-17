import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router';

import AddExercise from "./AddExercise"
import ExerciseList from "./ExerciseList";
import MyExercises from "./MyExercises";
import Search from "./Search";




function ExercisePage() {

  const [exercises, setExercises] = useState([])
  const [myExercises, setMyExercises] = useState([])
  const [render, setRender] = useState(null)
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch(`https://exercisedb.p.rapidapi.com/exercises?rapidapi-key=77e7b80605msh242886ef2c7d7e8p1041adjsn30fa46c2ba04`)
      .then(resp => resp.json())
      .then(data => setExercises(data));
  }, [])

  function handleAddExercise(exerciseToAdd) {
    const myExerciseList = myExercises.find(
      (exercise) => exercise.id === exerciseToAdd.id
    );
    if (!myExerciseList) {
      setMyExercises([...myExercises, exerciseToAdd]);
    }
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
        <Route path="/new/search/exercise/:target">
        <MyExercises
          myExercises={myExercises}
          onRemoveExercise={handleRemoveExercise} />
          </Route>
        <Route path="/new/search/exercise">
          <ExerciseList
            exercises={displayedExercises}
            onAddExercise={handleAddExercise} />
        </Route>
        <Route path="/new/search">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm} />
        </Route>
        <Route path="/new">
          <AddExercise />
        </Route>
      </Switch>
    </main>
  );
}

export default ExercisePage;