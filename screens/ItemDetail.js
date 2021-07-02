import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book_rating: "",
    }
  }

  get_book_rating = () => {
    fetch("https://warholbooks.000webhostapp.com/get_book_rating.php", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_id: this.props.route.params.book_id,
      })
    }).then((response) => response.json()).then((responseJSON) => {
      this.setState({ book_rating: responseJSON });
    }).catch((e) => {
      console.error(e);
    });
  }

  componentDidMount() {
    this.get_book_rating();
  }

  render() {
    const item = this.props.route.params;

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.desc}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author_name}>{item.author}</Text>
              <Text style={styles.publisher_name}>{item.publisher}</Text>
            </View>
          </View>
          <View style={styles.attribute}>
            <View style={styles.review}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.total_rating}>{this.state.book_rating.rating}</Text>
                <Image style={styles.star} source={require('./../assets/icons/star.png')} />
              </View>
              <Text style={styles.total_review}>{this.state.book_rating.total_review} reviews</Text>
            </View>
            <View style={styles.category}>
              <Image style={styles.book_img} source={require('./../assets/icons/book.png')} />
              <Text style={styles.category_name}>{item.category}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.total_page}>{item.total_page}</Text>
              <Text style={styles.text_span}>Pages</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    marginTop: 32,
  },
  image: {
    width: 144,
    height: 196,
    resizeMode: "contain",
    marginRight: 24,
    borderRadius: 8,
  },
  desc: {
    width: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  author_name: {
    color: "#1258DC",
    fontWeight: "bold",
    marginTop: 4,
  },
  publisher_name: {
    color: "gray",
    fontWeight: "bold",
  },
  attribute: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 24,
  },
  review: {
    alignItems: "center",
    width: "30%",
  },
  total_rating: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 0,
  },
  star: {
    width: 16,
    height: 16,
    marginTop: 2,
    marginLeft: 4,
    resizeMode: "contain",
  },
  total_review: {
    marginTop: 4,
  },
  category: {
    width: "30%",
    alignItems: "center",
    borderLeftWidth: 0.75,
  },
  book_img: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  category_name: {
    marginTop: 4,
  },
  total: {
    width: "30%",
    alignItems: "center",
    borderLeftWidth: 0.75,
  },
  total_page: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 0,
  },
  text_span: {
    marginTop: 4,
  },
});