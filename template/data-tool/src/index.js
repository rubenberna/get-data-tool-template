import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from 'react-intl'
import { App } from "./components/App";
import flatten from 'flat'
import { ExampleIcon } from "./assets/icons/ExampleIcon";
import lang_en from './lang/en.json'
import lang_nl from './lang/nl.json'

export const Component = ({ state }) => {
  const lang = state.locale === 'en' ? lang_en : lang_nl

  return (
    <IntlProvider locale={state.locale} messages={flatten(lang)}>
      <App platformState={state} />
    </IntlProvider>
  )
};

const metadata = {
  title: "Data tool template",
  requiredPermissions: ["Admin", "Super.Admin"],
  description: "This is an app that changes the plartform's language",
  icon: ExampleIcon,
};

export { Component as default, metadata };

App.propTypes = {
  state: PropTypes.shape({
    locale: PropTypes.string,
    changeLocale: PropTypes.func,
    idToken: PropTypes.string,
    addNotification: PropTypes.func,
    closeNotification: PropTypes.func
  }),
};
