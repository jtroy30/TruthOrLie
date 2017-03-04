import React, { Component } from 'react';
import { Container, Header, Title, Content, Body, Button, Text } from 'native-base';

class StartScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              TruthOrLie
            </Title>
          </Body>
        </Header>

        <Content>
          <Button
            full
            onPress={() => this.startGame()}
          >
            <Text>New Game</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  startGame() {
    this.props.navigator.push({
      name: 'Topic',
    });
  }
}

export default StartScreen;