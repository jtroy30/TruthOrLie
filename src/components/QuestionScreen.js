import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

class QuestionScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          {this.props.questions.map((question, index) => {
            return (
              <Button
                full
                key={index}
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