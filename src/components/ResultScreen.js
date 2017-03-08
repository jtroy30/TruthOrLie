import React, { Component } from 'react';
import { Container, Button, Text, Grid, Row, Col, Footer, FooterTab } from 'native-base';
import { View, Text as RNText } from 'react-native';

class ResultScreen extends Component {
  returnToMain() {
    this.props.navigator.push({
      name: 'Start',
    });
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }} >
          <Grid>
            <Row size={1} />
            <Row size={1}>
              <Col>
                <RNText
                  style={{
                    fontSize: 48,
                    textAlign: 'center',
                  }}
                >
                  {this.props.won ? 'You Win!   +5' : 'You Lose!   +5'}
                </RNText>
              </Col>
            </Row>
          </Grid>
          <Footer>
            <FooterTab>
              <Button
                full
                onPress={() => this.returnToMain()}
              >
                <Text>
                  Return to Main
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    );
  }
}

export default ResultScreen;
