import { useState, useEffect } from "react";
import AddExercise from "./AddExercise"
import ExerciseList from "./ExerciseList";
import MyExercises from "./MyExercises";
import Search from "./Search";



function ExercisePage() {

  const [exercises, setExercises] = useState([])
  const [myExercises, setMyExercises] = useState([])
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

  // const sortedExercise = [...exercises].sort((exercise1, exercise2) => {
  //   if (sortBy === "Alphabetically") {
  //     return exercise1.name.localeCompare(exercise2.name);
  //   } else {
  //     return exercise1.bodyPart - stock2.bodyPart;
  //   }
  // });

  // const filteredExercise = sortedExercise.filter(
  //   (exercise) => exercise.type === filterBy
  // );

  return (
    <main>
      <AddExercise />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <ExerciseList
        exercises={displayedExercises}
        onAddExercise={handleAddExercise} />
      <MyExercises
        myExercises={myExercises}
        onRemoveExercise={handleRemoveExercise} />
    </main>
  );
}

export default ExercisePage;