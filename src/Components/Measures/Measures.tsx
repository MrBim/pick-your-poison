import React, { useMemo, Fragment } from "react";
import Measure from "../Measure/Measure";

type Props = {
  recipe: RecipeObj;
};

const Measures = ({ recipe }: Props) => {
  const measures = useMemo(() => {
    return Object.keys(recipe)
      .filter((it) => it.includes("strMeasure"))
      .map((it) => ({
        measureName: it,
        measure: recipe[it as keyof RecipeObj],
      }))
      .filter((it) => it.measure);
  }, [recipe]);
  return (
    <Fragment>
      {measures && (
        <Fragment>
          <ul style={{listStyleType: 'none', paddingLeft: '10px'}}>
            {measures.map((measure) => (
              <Measure key={measure.measureName} measure={measure.measure ?? ''} />
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Measures;
