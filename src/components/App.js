import React, { Component } from 'react';
import { Navigator } from 'react-native';
import StartScreen from './StartScreen';
import TopicScreen from './TopicScreen';
import QuestionScreen from './QuestionScreen';
import SelectionScreen from './SelectionScreen';
import TimerScreen from './TimerScreen';
import EvaluationScreen from './EvaluationScreen';

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
    switch (route.name) {
      case 'Start':
        return <StartScreen navigator={navigator} />;
      case 'Topic':
        return <TopicScreen navigator={navigator} />;
      case 'Question':
        return <QuestionScreen navigator={navigator} {...route.passProps} />;
      case 'Selection':
        return <SelectionScreen navigator={navigator} {...route.passProps} />
      case 'Timer':
        return <TimerScreen navigator={navigator} {...route.passProps} />;
      case 'Eval':
        return <EvaluationScreen navigator={navigator} {...route.passProps} />;
      default:
        throw new Error('Unknown route: ' + route.name);
    }
  }
}

export default App;