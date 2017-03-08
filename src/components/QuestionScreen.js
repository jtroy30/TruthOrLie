import React, { Component } from 'react';
import { Container, Content, Button, Text, Card, CardItem, Body } from 'native-base';

class QuestionScreen extends Component {
  showSelection(question) {
    this.props.navigator.push({
      name: 'Selection',
      passProps: {
        question,
        eval: false,
      },
    });
  }

  render() {
    return (
      <Container>
        <Content>
            {this.props.questions.map((question) => {
              return (
                <Card
                  key={question}
                >
                  <CardItem
                    button
                    onPress={() => this.showSelection(question)}
                  >
                    <Body>
                      <Text>
                        {question}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              );
            })}
        </Content>
      </Container>
    );
  }

}

export default QuestionScreen;
