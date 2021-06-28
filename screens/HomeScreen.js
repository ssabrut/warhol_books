import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text>Hello home screen</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});