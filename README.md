# Fronto MaterialUI

React component connecting your Fronto config with application created using `material-ui`.

---

[fronto.io](http://fronto.io/)

## Installation

Add `fronto-material-ui` to your `package.json`:
```bash
$ npm install fronto-material-ui
```

## Usage

Import fronto component in application entry file and wrap your app with it:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {FrontoThemeProvider} from 'fronto-material-ui';

import YourAppRootComponent from './YourAppRootComponent';
 
function App() {
  return (
    <FrontoThemeProvider clientId={'5b1acfb121652a131b0662c6'}>
      <YourAppRootComponent/>
    </FrontoThemeProvider>
  );
}
 
ReactDOM.render(<App />, document.querySelector('#app'));

```
