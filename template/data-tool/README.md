# data-tool-template

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/data-tool-template.svg)](https://www.npmjs.com/package/data-tool-template) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Npm package template that can be imported to the Data Platform feed.

- it uses the brand fonts
- can be used with scss
- it uses react-intl translation library
- it has an easy-to-follow structure


## Install

```bash
yarn install && yarn start
cd example && yarn install && yarn start
```

## Usage (develop package) -- NOT TO BE CHANGED!!

```jsx
import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { App } from "./components/App";
import { ExampleIcon } from "./assets/icons/ExampleIcon";

// CODE <APP/> AS YOU'D LIKE!!
export const Component = ({ state }) => {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <App state={state} />
    </IntlProvider>
  );
};

// TO BE UPDATED WITH YOUR DATA
const metadata = {
  title: "Data tool template",
  requiredPermissions: ["Admin", "Super.Admin"],
  description: "A description about what this tool should do",
  icon: ExampleIcon,
};

export { Component as default, metadata };

App.propTypes = {
  state: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    username: PropTypes.string,
    role: PropTypes.string,
    errorMessage: PropTypes.string,
  }),
};
```

## Usage (import package)

```jsx
import React, { Suspense, lazy } from 'react'
import { metadata as metadataFromTemplate } from 'data-tool-template'
import 'data-tool-template/dist/index.css'


const ImportedComponent = lazy(() => import('data-tool-template'))

// data from DP Platform
const dummyState = {
  isAuthenticated: true,
  token: '-',
  username: 'some name',
  role: 'some role',
  errorMessage: undefined
}

export const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <ImportedComponent state={dummyState}/>
    </Suspense>
  )
}
```

## License

MIT © [rubenberna](https://github.com/rubenberna)
