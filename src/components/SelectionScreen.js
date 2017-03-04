import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

class SelectionScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button full success>
            <Text>Truth</Text>
          </Button>
          <Button full warning>
            <Text>
              Lie
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default SelectionScreen;