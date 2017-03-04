import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

const selections = [
  {
    label: 'Truth',
    success: true,
    warning: false,
  },
  {
    label: 'Lie',
    success: false,
    warning: true,
  },
];

class SelectionScreen extends Component {
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
                onPress={() => this.startTimer(selection.success)}
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

  startTimer(answer) {
    this.props.navigator.push({
      name: 'Timer',
      answer,
    });
  }
}

export default SelectionScreen;