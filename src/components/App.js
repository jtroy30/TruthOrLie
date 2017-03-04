import React, { Component } from 'react';
import { Navigator } from 'react-native';
import StartScreen from './StartScreen';
import TopicScreen from './TopicScreen';

class App extends Component {
  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Start'}}
        renderScene={this.renderScene}
      />
    );
  }

  renderScene(route, navigator) {
    if (route.name === 'Start') {
      return <StartScreen navigator={navigator} />
    } else if (route.name === 'Topic') {
      return <TopicScreen navigator={navigator} />
    }
  }
}

export default App;