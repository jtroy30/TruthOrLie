import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

const topics = [
  {
    category: 'Travel',
    questions: [
      'Travel Question 1',
      'Travel Question 2',
      'Travel Question 3',
    ]
  },
  {
    category: 'Food',
    questions: [
      'Food Question 1',
      'Food Question 2',
      'Food Question 3',
    ]
  },
  {
    category: 'Hobby',
    questions: [
      'Hobby Question 1',
      'Hobby Question 2',
      'Hobby Question 3',
    ]
  }
];

class TopicScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          {topics.map((topic, index) => {
            return (
              <Button
                full
                key={index}
                onPress={() => this.showQuestions(topics[index]['questions'])}
              >
                <Text>
                  {topic.category}
                </Text>
              </Button>
            );
          })}
        </Content>
      </Container>
    );
  }

  showQuestions(questions) {
    this.props.navigator.push({
      name: 'Question',
      passProps: {
        questions,
      }
    });
  }
}

export default TopicScreen;