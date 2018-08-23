import React, { Component} from 'react';

export default function asyncComponent(importComponent) => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }
  }
}
