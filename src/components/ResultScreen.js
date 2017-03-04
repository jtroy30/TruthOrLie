import React, { Component } from 'react';
import { Container, Content, Button, Text, Grid, Row, Col, Footer, FooterTab } from 'native-base';
import { View, Text as RNText } from 'react-native';

class ResultScreen extends Component {
  render() {
    return (
      <Container>
        <View style={{ flex: 1 }} >
          <Grid>
            <Row size={1}></Row>
            <Row size={1}>
              <Col>
                <RNText style={{
                    fontSize: 48,
                    textAlign: 'center',
                  }}
                >
                  {this.props.won ? 'You Win!' : 'You Lose!'}
                </RNText>
              </Col>
            </Row>
          </Grid>
          <Footer>
            <FooterTab>
              <Button
                full
              >
                <Text>
                  Return to Main
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    )    
  }
}

export default ResultScreen;