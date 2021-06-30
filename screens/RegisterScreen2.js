import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class RegisterScreen2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: this.props.route.params.full_name,
      address: this.props.route.params.address,
      phone_number: this.props.route.params.phone_number,
      username: "",
      password: "",
    }
  }

  user_register = () => {
    fetch("https://thickened-state.000webhostapp.com/warhol_books--web-service/login.php", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: this.state.full_name,
        address: this.state.address,
        phone_number: this.state.phone_number,
        username: this.state.username,
        password: this.state.password,
      })
    }).then((response) => response.json()).then((responseJSON) => {
      if (responseJSON === "success") {
        Alert.alert("Success to register", "Please proceed");
      } else if (responseJSON === "failed") {
        Alert.alert("Failed to register", "Username already exist !");
      }
    }).catch((e) => {
      console.error(e);
    });
  }

  render() {
    const { navigation } = this.props;
    const dismissKeyboard = () => Keyboard.dismiss();

    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <View style={styles.formWrapper}>
            <Text style={styles.brand}>For account purposes</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={data => this.setState({ username: data })} />

              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={data => this.setState({ password: data })} />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.user_register}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.agreement}>By clicking "Sign Up", you agree to the <Text style={styles.termOfUse}>Terms of Use</Text> this service.</Text>
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
  agreement: {
    textAlign: "center",
    width: "60%",
    marginTop: 16,
    color: "gray",
  },
  termOfUse: {
    color: "#1258DC",
  },
});