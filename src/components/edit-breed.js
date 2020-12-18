import React from "react";
import useBreed from "../hooks/use-breed";
import useSaveBreed from "../hooks/use-save-breed";
import "./edit-breed.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import BreedForm from "./breed-form";

function EditBreed(props) {
  const breedId = props.id;
  const userId = props.user.uid;

  const [breedData, isLoading, errorMessage] = useBreed(userId, breedId);
  const [saveBreed, isSaving, formMessage] = useSaveBreed();

  const onBreedSubmit = async (title, rating, origin, size, weight) => {
    saveBreed({ title, rating, origin, size, weight }, userId, breedId);
  };

  return (
    <div className="edit-container">
      <h2>Edit Breed</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {breedData && (
        <BreedForm
          initialState={breedData}
          onSubmit={onBreedSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditBreed;
