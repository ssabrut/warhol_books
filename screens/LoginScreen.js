import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import * as Font from 'expo-font';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    }
  }

  componentDidMount() {
    Font.loadAsync({
      "viga-regular": require('./../assets/fonts/Viga-Regular.ttf'),
    });
  }

  user_login = () => {
    fetch("http://192.168.43.184/warhol_books-web-service/login.php", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    }).then((response) => response.json()).then((responseJSON) => {
      if (responseJSON.user_data.message === "success") {
        Alert.alert("Success", "User are in database");
      } else {
        Alert.alert("Failed", "User are not in database");
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
        <View style={styles.loginScreen}>
          <Text style={styles.brand}>Warhol Book</Text>
          <View style={styles.formWrapper} >
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={data => this.setState({ username: data })} />

            <TextInput
              style={[styles.input, { marginVertical: 24 }]}
              placeholder="Password"
              onChangeText={data => this.setState({ password: data })} />
            <TouchableOpacity style={styles.button} onPress={this.user_login}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.changeRegister}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("RegisterScreen")}>
              <Text style={styles.changeRegisterText}>Don't have an account? <Text style={styles.changeRegisterTextSpan}>Sign Up</Text></Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  brand: {
    textAlign: "center",
    fontSize: 36,
    fontFamily: "viga-regular",
  },
  changeRegister: {
    width: "100%",
    paddingVertical: 24,
  },
  changeRegisterText: {
    color: "gray",
    textAlign: "center",
    fontSize: 14,
  },
  changeRegisterTextSpan: {
    fontWeight: "bold",
    color: "#000",
  },

  // login form
  formWrapper: {
    width: "80%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  input: {
    borderWidth: 1,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#1258DC",
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
