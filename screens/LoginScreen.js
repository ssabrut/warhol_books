import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      "viga-regular": require('./../assets/fonts/Viga-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  user_login = () => {
    fetch("https://thickened-state.000webhostapp.com/warhol_books--web-service/login.php", {
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
        this.props.navigation.navigate("BottomNavigation");
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

    if (this.state.fontLoaded) {
      return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.container}>
            <View style={styles.formWrapper} >
              <Text style={styles.brand}>Warhol Book</Text>
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
              <View style={styles.changeRegister}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("RegisterScreen")}>
                  <Text style={styles.changeRegisterText}>Don't have an account? <Text style={styles.changeRegisterTextSpan}>Sign Up</Text></Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  formWrapper: {
    width: "80%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    textAlign: "center",
    fontSize: 36,
    fontFamily: "viga-regular",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#1258DC",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
});
