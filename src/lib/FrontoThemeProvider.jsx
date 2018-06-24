import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import {registerTheme} from './frontoThemeService';

export class FrontoThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    clientId: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.api = axios.create({
      baseURL: 'http://api.fronto.io/'
    });
    this.state = {
      theme: {},
      ready: false
    };
    this.cloudGet();
  }

  cloudGet = () => {
    this.api
      .get(`/skins/${this.props.clientId}`)
      .then(({data: {theme}}) => this.setState({theme, ready: true}))
      .catch((error) => {
        console.warn(`Failed to fetch theme: ${error}`);
        this.setState({ready: true});
      });
  }

  render() {
    const {ready} = this.state;

    if (!ready) {
      return null;
    } else {
      const frontoMuiTheme = createMuiTheme(this.state.theme);
      registerTheme(this.props.clientId, frontoMuiTheme);

      return (
        <MuiThemeProvider theme={frontoMuiTheme}>
          <CssBaseline>
            {this.props.children}
          </CssBaseline>
        </MuiThemeProvider>
      );
    }
  }
}
