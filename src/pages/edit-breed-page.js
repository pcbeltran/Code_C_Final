import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditBreed from "../components/edit-breed";

function EditBreedPage(props) {
  const { id } = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditBreed id={id} {...props} />
    </main>
  );
}

export default EditBreedPage;
