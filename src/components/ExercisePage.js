import { useState, useEffect} from "react";
import AddExercise from "./AddExercise"
import ExerciseList from "./ExerciseList";



function ExercisePage( ) {

  const [exercises, setExercises] = useState([])

  useEffect(() => {
    fetch(`https://exercisedb.p.rapidapi.com/exercises?rapidapi-key=77e7b80605msh242886ef2c7d7e8p1041adjsn30fa46c2ba04`)
    // fetch(`http://localhost:6001/posts`)
      .then(resp => resp.json())
      .then(data => setExercises(data));
  }, [])

  return (
    <main>
      <AddExercise />
      <ExerciseList exercises={exercises}/>
    </main>
  );
}

export default ExercisePage;