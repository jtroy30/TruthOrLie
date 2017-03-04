import React, { Component } from 'react';
import { View, Text as RNText } from 'react-native';
import { Container, Content, Button, Text, Grid, Row, Col, Footer, FooterTab } from 'native-base';

class TimerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 5,
    };
  }

  tick() {
    this.setState((prevState) => ({
      timeLeft: prevState.timeLeft - 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timeLeft === 1) {
      this.evaluate();
    }
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }} >
          <Grid>
            <Row size={2}></Row>
            <Row size={1}>
              <Col>
                <RNText style={{
                    fontSize: 48,
                    textAlign: 'center',
                  }}
                >
                  {this.state.timeLeft}
                </RNText>
              </Col>
            </Row>
          </Grid>
          <Footer>
            <FooterTab>
              <Button
                full
                onPress={() => this.evaluate()}
              >
                <Text>
                  Done
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    );
  }

  evaluate() {
    clearInterval(this.interval);
    this.props.navigator.push({
      name: 'Eval',
      passProps: {
        answer: this.props.answer,
      },
    });
  }
}

export default TimerScreen;