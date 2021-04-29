/**
 * Functional react component for congratulatory meesage.
 * @function
 * @params {object} props - React props.
 * @returns {JSX.Element}  - React component (or null if ` success is false `)
 */
import React, { Fragment } from "react";

export default function Congrats(props) {
  return (
    <Fragment>
      {props.success ? (
        <div data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </div>
      ) : (
        <div data-test="component-congrats"></div>
      )}
    </Fragment>
  );
}
