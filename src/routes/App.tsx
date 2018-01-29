import React from 'react';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout';

class App extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MainLayout innerContent={this.props.children}/>
    )
  }
}

export default connect()(App);
