import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

class QuestionScreen extends Component {
  showSelection(question) {
    this.props.navigator.push({
      name: 'Selection',
      passProps: {
        question,
      },
    });
  }

  render() {
    return (
      <Container>
        <Content>
          {this.props.questions.map((question, index) => {
            return (
              <Button
                full
                key={index}
                onPress={() => this.showSelection(question)}
              >
                <Text>
                  {question}
                </Text>
              </Button>
            );
          })}
        </Content>
      </Container>
    );
  }

}

export default QuestionScreen;
