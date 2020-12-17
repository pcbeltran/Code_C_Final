import React from "react";
import { Helmet } from "react-helmet";
import AddBreed from "../components/add-breed";

function AddBreedPage(props) {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddBreed {...props} />
    </main>
  );
}

export default AddBreedPage;
