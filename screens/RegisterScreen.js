import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: "",
      address: "",
      phone_number: "",
    }
  }

  render() {
    const { navigation } = this.props;
    const dismissKeyboard = () => Keyboard.dismiss();
    let personal_data = {
      full_name: this.state.full_name,
      address: this.state.address,
      phone_number: this.state.phone_number,
    };

    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.registerScreen}>
          <Text style={styles.brand}>Enter your personal information</Text>
          <View style={styles.formWrapper}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                onChangeText={data => this.setState({ full_name: data })} />

              <TextInput
                style={styles.input}
                placeholder="Address"
                onChangeText={data => this.setState({ address: data })} />

              <TextInput
                style={styles.input}
                placeholder="Phone number"
                onChangeText={data => this.setState({ phone_number: data })} />
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
  registerScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  brand: {
    position: "absolute",
    top: "20%",
    left: "10%",
    fontSize: 32,
    fontWeight: "bold",
    width: "80%",
  },

  // register form
  formWrapper: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 16,
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    backgroundColor: "#1258DC",
    borderRadius: 4,
    marginTop: 24,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});