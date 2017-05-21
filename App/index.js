/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class reactNativePoc extends Component {
    state = {counter: 0};

    handlePress(e) {
        var nextValue = this.state.counter + 1;
        this.setState({ counter: nextValue });
    }
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!
                The counter is at: {this.state.counter}
            </Text>
            <Text style={styles.instructions}>
                Press the button the update the counter
            </Text>
            <Button title="Press to Update" onPress={() => this.handlePress()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


