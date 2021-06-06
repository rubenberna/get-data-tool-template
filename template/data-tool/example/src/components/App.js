import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { metadata } from '{{name}}'
import { Home } from './Home';
import { SideNav } from '../SideNav';
import { convertToKebabCase } from '../utils/_general.util';
import '{{name}}/dist/index.css'

const Component = lazy(() => import('{{name}}'))

const dummyState = {
  isAuthenticated: true,
  token: '-',
  username: 'Ruben Bernardes (consultant)',
  role: 'admin',
  errorMessage: ''
}

const App = () => {

  const exampleComponentLink = `/${convertToKebabCase(metadata.title)}`

  return (
    <BrowserRouter>
      <SideNav Icon={metadata.icon} link={exampleComponentLink}/>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <main className="main">
            <Route exact path="/" render={() => <Home dataToolTemplateInfo={metadata}/>}/>
            {metadata &&
            <Route
              path={exampleComponentLink}
              exact
              render={() => <Component state={dummyState}/>}
            />
            }
          </main>
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default App
