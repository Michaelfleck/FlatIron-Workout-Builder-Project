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
  const [newExerciseInput, setNewExerciseInput] = useState({
    bodyPart: '',
    equipment: '',
    gifUrl: '',
    name: '',
    target: ''
})


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

  const handlePost = (exercises) => {
    console.log("handlePost ran")
    console.log("exercises", exercises)

    fetch("http://localhost:6001/posts", { method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(newExerciseInput) }) 
    .then(r => r.json()) 
    .then(data => console.log("data: ", data, "exercises: ", exercises)) 
  }

  console.log(myExercises);

  return (
    <main>
      <Switch>
        <Route path="/exercise/new/search/my-list">
         <MyExercises
          myExercises={myExercises}
          onRemoveExercise={handleRemoveExercise} />
          </Route>
        <Route path="/exercise/new/search">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm} />
        </Route>
        <Route path="/exercise/new">
          <AddExercise  
            handlePost={handlePost}
            exercises={exercises}
            newExerciseInput={newExerciseInput}
            setNewExerciseInput={setNewExerciseInput}
            />
        </Route>
        <Route path="/exercise">
          <ExerciseList
            exercises={displayedExercises}
            onAddExercise={handleAddExercise}
            />
        </Route>
      </Switch>
    </main>
  );
}

export default ExercisePage;