import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

const selections = [
  {
    label: 'Truth?',
    success: true,
    warning: false,
  },
  {
    label: 'Lie?',
    success: false,
    warning: true,
  },
];

class EvaluationScreen extends Component {
  showResult(choice) {
    this.props.navigator.push({
      name: 'Result',
      passProps: {
        won: (this.props.answer === choice),
      },
    });
  }

  render() {
    return (
      <Container>
        <Content>
          {selections.map((selection, index) => {
            return (
              <Button
                full
                key={index}
                success={selection.success}
                warning={selection.warning}
                onPress={() => this.showResult(selection.success)}
              >
                <Text>
                  {selection.label}
                </Text>
              </Button>
            );
          })}
        </Content>
      </Container>
    );
  }
}

export default EvaluationScreen;
