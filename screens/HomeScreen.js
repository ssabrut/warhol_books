import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Image } from 'react-native';

import ItemSlider from '../assets/components/ItemSlider';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.seacrhSection}>
          <Image style={styles.searchIcon} source={require('./../assets/icons/search.png')} />
          <TextInput style={styles.searchBar} placeholder="Search Books" />
        </View>
        <ScrollView style={styles.scrollView}>
          <ItemSlider navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  seacrhSection: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    borderWidth: 0.9,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 32,
  },
  searchIcon: {
    height: 24,
    width: 24,
    alignItems: "center",
    tintColor: "gray",
  },
  searchBar: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    borderTopWidth: 0.5,
    marginBottom: 64,
  },
});