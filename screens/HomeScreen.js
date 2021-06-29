import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Image, Text, FlatList } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { name: "Pax", image: "https://images-na.ssl-images-amazon.com/images/I/51bkPMf3dnL._SX349_BO1,204,203,200_.jpg", rating: "4.6", price: "1.99$", key: "1" },
        { name: "Batman: Arkham Knight", image: "https://images-na.ssl-images-amazon.com/images/I/81P5EUN420L.jpg", rating: "4.5", price: "1.99$", key: "2" },
        { name: "Project Hail Mary: A Novel", image: "https://images-na.ssl-images-amazon.com/images/I/91Bd7P8UwxL.jpg", rating: "4.4", price: "1.99$", key: "3" },
        { name: "Freed: Fifty Shades of Freed", image: "https://m.media-amazon.com/images/I/51c2M4VZ15L.jpg", rating: "4.3", price: "7.39$", key: "4" },
        { name: "The Unwanted Undead Adventurer", image: "https://images-na.ssl-images-amazon.com/images/I/61Qmlz5CXJL._SX342_SY445_QL70_ML2_.jpg", rating: "4.2", price: "6.99$", key: "5" },
      ],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.seacrhSection}>
          <Image style={styles.searchIcon} source={require('./../assets/icons/search.png')} />
          <TextInput style={styles.searchBar} placeholder="Search Books" inlineImageLeft="username" />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <View style={styles.sectionContent}>
              <Text style={styles.section}>Top-sellers under 10$</Text>
              <Image style={styles.arrowIcon} source={require('./../assets/icons/right-arrow.png')} />
            </View>
            <FlatList
              data={this.state.books}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image style={styles.cardImg} source={{ uri: item.image }} />
                  <View style={styles.bookDesc}>
                    <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.rating}>{item.rating}</Text>
                      <Image style={styles.star} source={require('./../assets/icons/star.png')} />
                    </View>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              )} />
          </View>
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
  content: {
    flex: 1,
    width: "100%",
  },
  sectionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section: {
    paddingVertical: 24,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  arrowIcon: {
    width: 24,
    height: 24,
    margin: 26,
    tintColor: "grey"
  },
  card: {
    marginLeft: 16,
    width: 104,
    height: 196,
  },
  cardImg: {
    width: 104,
    height: 144,
    borderRadius: 8,
    resizeMode: "contain",
  },
  bookDesc: {
    marginTop: 8,
    marginHorizontal: 4,
  },
  title: {
    fontWeight: "bold",
  },
  rating: {
    color: "gray",
    marginTop: 4,
  },
  star: {
    width: 12,
    height: 12,
    marginTop: 7,
    marginLeft: 4,
  },
  price: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "gray",
  }
});