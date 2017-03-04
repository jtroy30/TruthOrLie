import React, { Component } from 'react';
import { Container, Header, Title, Content, Body, Button, Text } from 'native-base';


class Start extends Component {
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
          <Button full>
            <Text>New Game</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Start;