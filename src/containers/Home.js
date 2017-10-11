import React from "react";
import { getSiteProps } from "react-static";
//
export default getSiteProps(({ title }) => (
  <h1>Peculiar development by {title}!</h1>
));
