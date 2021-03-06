import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.route.params,
    }
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
        },
      }}>
        <Tab.Screen
          name="HomeScreen"
          component={() => <HomeScreen user_id={this.state.user_id} navigation={this.props.navigation} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "#1258DC" : "#000",
                  }}
                  resizeMode="contain"
                  source={focused ? require('./../assets/icons/home_focused.png') : require('./../assets/icons/home.png')} />
              </View>
            )
          }} />

        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "#1258DC" : "#000",
                  }}
                  resizeMode="contain"
                  source={focused ? require('./../assets/icons/user_focused.png') : require('./../assets/icons/user.png')} />
              </View>
            ),
          }} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});