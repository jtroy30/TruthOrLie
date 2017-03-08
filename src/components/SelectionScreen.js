import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View } from 'react-native';

const selections = [
  {
    label: 'Truth',
    success: true,
    warning: false,
  },
  {
    label: 'Lie',
    success: false,
    warning: true,
  },
];

class SelectionScreen extends Component {
  startTimer(answer) {
    this.props.navigator.push({
      name: 'Timer',
      passProps: {
        answer,
      },
    });
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
