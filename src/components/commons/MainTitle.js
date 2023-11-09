import { Component } from 'react';

class MainTitle extends Component {
  printInfo() {
    console.log('MainTitle');
  }

  render() {
    const { children } = this.props;
    return <h1>{children}</h1>;
  }
}

export default MainTitle;
