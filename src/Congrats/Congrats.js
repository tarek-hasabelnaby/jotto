import React, { Fragment } from "react";
import PropTypes from "prop-types"; // ES6

/**
 * Functional react component for congratulatory meesage.
 * @function
 * @params {object} props - React props.
 * @returns {JSX.Element}  - React component (or null if ` success is false `)
 */

const Congrats = (props) => {
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
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
