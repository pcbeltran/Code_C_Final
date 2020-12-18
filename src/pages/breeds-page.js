import React from "react";
import { Helmet } from "react-helmet";
import BreedListing from "../components/breed-listing";

function BreedsPage(props) {
  return (
    <main>
      <Helmet>
        <title>Breeds</title>
      </Helmet>
      <BreedListing {...props} />
    </main>
  );
}

export default BreedsPage;
