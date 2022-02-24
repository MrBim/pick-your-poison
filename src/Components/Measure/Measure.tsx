import React from "react";

type Props = {
  measure: string;
};

const Measure = ({ measure }: Props) => {
  return <li>{ measure }</li>;
};

export default Measure;
