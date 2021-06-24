import React, { useEffect } from "react";
import { FormattedMessage } from 'react-intl';
import { login } from '../utils/security.util';
import LocalStorageUtil from '../utils/localstorage.util';
import { SelectLanguageExample } from './SelectLanguageExample';
import "../styles/main.scss";

export const App = ({ platformState }) => {

  useEffect(() => {
    (async () => {
      await login()
    })()
  }, [])

  // eslint-disable-next-line no-unused-vars
  const user = LocalStorageUtil.getAccount()

  return (
    <div className="dt-main">
      <div className="dt-main__container">
        <span className="dt-main__container__title">
          <FormattedMessage id="app.title" defaultMessage="Example Component in: "/>
          <span className="dt-main__container__title--locale">{platformState.locale}</span>
        </span>
        <div><FormattedMessage id="app.subtitle" defaultMessage="What are you going to build?"/></div>
        <SelectLanguageExample handleSelect={platformState.changeLocale} addNotification={platformState.addNotification}/>
      </div>
    </div>
  );
};
