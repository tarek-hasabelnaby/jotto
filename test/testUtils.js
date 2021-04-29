import checkPropsTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - value of data-test attribute for each search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, confirmingProps) => {
  const propsError = checkPropsTypes(
    component.propTypes,
    confirmingProps,
    "props",
    component.name
  );
  expect(propsError).toBeUndefined();
};
