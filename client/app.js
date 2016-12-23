const React = require('React');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.currentView = '<div>Hi</div>'
  }

  
  render(){
    return this.state.currentView;
  }
}

export default App;
