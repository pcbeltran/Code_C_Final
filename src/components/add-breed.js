import React from "react";
import useSaveBreed from "../hooks/use-save-breed";
import "./add-breed.css";
import BreedForm from "./breed-form";

function AddBreed(props) {
  const userId = props.user.uid;
  const [saveBreed, isSaving, formMessage] = useSaveBreed();

  const onBreedSumbit = async (title, rating, origin, size, weight) => {
    saveBreed({ title, rating, origin, size, weight}, userId);
  };

  return (
    <div className="add-container">
      <h1>Add Breed</h1>
      <BreedForm onSubmit={onBreedSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddBreed;
