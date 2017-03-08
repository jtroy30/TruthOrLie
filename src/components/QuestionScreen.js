import React, { Component } from 'react';
import { Container, Content, Button, Text, Card, CardItem, Body } from 'native-base';

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
          <Card>
            {this.props.questions.map((question) => {
              return (
                <CardItem
                  button
                  onPress={() => this.showSelection(question)}
                  key={question}
                >
                  <Body>
                    <Text>
                      {question}
                    </Text>
                  </Body>
                </CardItem>
              );
            })}
          </Card>
        </Content>
      </Container>
    );
  }

}

export default QuestionScreen;
