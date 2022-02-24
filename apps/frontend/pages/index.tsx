import React, { useEffect } from "react";

import { withUrqlClient } from "next-urql";
import { useFindManyRestaurantsQuery } from "../graphql/generated/graphql";
import { GoogleMap } from "../components/google-map";

export const Home: React.FC = () => {
  const { data: { findManyRestaurants: restaurants } = {} } =
    useFindManyRestaurantsQuery()[0];
  return <GoogleMap restaurants={restaurants}></GoogleMap>;
};

export default withUrqlClient(
  () => ({
    url: "http://localhost:4000/graphql",
  }),
  { ssr: true }
)(Home);