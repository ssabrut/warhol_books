import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: "",
      email: "",
    }
  }

  render() {
    const { navigation } = this.props;
    const dismissKeyboard = () => Keyboard.dismiss();
    let personal_data = {
      full_name: this.state.full_name,
      email: this.state.email,
    };

    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <View style={styles.formWrapper}>
            <Text style={styles.brand}>Enter your personal information</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                onChangeText={data => this.setState({ full_name: data })} />

              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={data => this.setState({ email: data })} />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RegisterScreen2", personal_data)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formWrapper: {
    width: "80%",
  },
  brand: {
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    backgroundColor: "#1258DC",
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});