import React from 'react';
import {render} from 'react-dom';

import Button from '@material-ui/core/Button';

import {FrontoThemeProvider} from '../../lib';

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <FrontoThemeProvider clientId={'r899243r3829o'}>
        <Button>Primary</Button>
        <Button color={'primary'}>Primary</Button>
        <Button color={'secondary'}>Secondary</Button>
      </FrontoThemeProvider>
    </div>
  );
}

render(<Demo/>, document.getElementById('app'));
