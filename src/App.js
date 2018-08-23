import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'Page1',
      component: ''
    }
  }

onRouteChange = (route) => {
  // No code splitting:
  // this.setState({route: route});
  // With code splitting:
  if (route === 'Page1') {
    this.setState({route: route});
  } else if (route === 'Page2') {
    import('./components/Page2').then((Page2) => {
      this.setState({route: route, component: Page2.default});
    })
  } else if (route === 'Page3') {
    import('./components/Page3').then((Page3) => {
      this.setState({route: route, component: Page3.default});
    })
  }
}

  render() {
    // if (this.state.route === 'Page1') {
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'Page2') {
    //   return <Page2 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'Page3') {
    //   return <Page3 onRouteChange={this.onRouteChange}/>
    // }
      if (this.state.route === 'Page1') {
        return <Page1 onRouteChange={this.onRouteChange}/>
      } else {
        return <this.state.component onRouteChange={this.onRouteChange} />
      }
  }
}

export default App;
