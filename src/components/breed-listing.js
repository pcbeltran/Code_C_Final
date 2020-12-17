import React from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import Breed from "./breed";
import useAllBreeds from "../hooks/use-all-breeds";
import "./breed-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function BreedListing(props) {
  const userId = props.user.uid;
  const [breeds, isLoading, errorMessage] = useAllBreeds(userId);

  return (
    <div className="breeds-container">
      <h1>Breeds</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="breed-list">
        {breeds.map((breedDoc) => {
          const breedId = breedDoc.id;
          const breedData = breedDoc.data();
          return (
            <li key={breedId}>
              <Breed id={breedId} data={breedData} userId={userId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BreedListing;