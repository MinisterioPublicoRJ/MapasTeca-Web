import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import DEFAULT_THEME from '../DefaultTheme/DefaultTheme';

/**
 * Creates the hook for the theme that all components read from
 * @type {Context Reference}
 */
export const ThemeContext = createContext();

/**
 * Custom hook for proving the theme to the components in this library.
 * If a custom theme is passed, uses custom theme. Otherwise sticks to default.
 * @param {JSON} value    A theme object that follows
 * @param {React Node} children Child components to be rendered
 */
export const ThemeProvider = ({ value, children }) => (
  <ThemeContext.Provider value={value || DEFAULT_THEME}>{children}</ThemeContext.Provider>
);
ThemeProvider.propTypes = {
  value: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};
ThemeProvider.defaultProps = { value: undefined };

/**
 * Custom consumer hook for ThemeContext
 * Can be used to add theme to your custom components
 * @return {useContext Consumer Hook}
 */
export const useTheme = () => useContext(ThemeContext);

/**
 * This HOC passes the theme as props to the component for better documentation
 * @param  {Node} WrappedComponent Any component tat you wish to receive
 * @return {Node}                  Same component with extra props :)
 */
export function withTheme(WrappedComponent) {
  const theme = useTheme();
  /* eslint-disable-next-line */
  return <WrappedComponent {...theme} />;
}
