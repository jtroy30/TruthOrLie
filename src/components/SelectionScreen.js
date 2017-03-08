import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class SelectionScreen extends Component {
  startTimer(answer) {
    
    var player1 = 0;
    var player2 = 0;
    
    if (this.props.eval) {
      this.props.navigator.push({
        name: 'Result',
        passProps: {
          won: (this.props.answer === answer),
          player1: player1 +5;
          player2: player2 - 5;
        },
      });
    } else {
      this.props.navigator.push({
        name: 'Timer',
        passProps: {
          answer,
          player1: player1 - 5;
          player2: player2 + 5;
        },
      });
    }
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <Grid>
            <Col
              style={{ backgroundColor: '#635DB7' }}
            >
              <Row />
              <Row>
                <Col>
                  <Text
                    style={{
                      fontSize: 48,
                      textAlign: 'center',
                    }}
                    onPress={() => this.startTimer(true)}
                  >
                    Truth
                  </Text>
                </Col>
              </Row>
              <Row />
            </Col>
            <Col
              style={{ backgroundColor: '#00CE9F' }}
            >
              <Row />
              <Row>
                <Col>
                  <Text
                    style={{
                      fontSize: 48,
                      textAlign: 'center',
                    }}
                    onPress={() => this.startTimer(false)}
                  >
                    Lie
                  </Text>
                </Col>
              </Row>
              <Row />
            </Col>
          </Grid>
        </View>
      </Container>
    );
  }
}

export default SelectionScreen;
