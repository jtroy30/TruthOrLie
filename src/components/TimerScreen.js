import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

class TimerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 5,
    };
  }

  tick() {
    this.setState((prevState) => ({
      timeLeft: prevState.timeLeft - 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timeLeft === 0) {
      this.evaluate();
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>
            {this.state.timeLeft}
          </Text>
          <Button
            full
            onPress={() => this.evaluate()}
          >
            <Text>
              Done
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }

  evaluate() {
    this.props.navigator.push({
      name: 'Eval',
      answer: this.props.answer,
    });
  }
}

export default TimerScreen;