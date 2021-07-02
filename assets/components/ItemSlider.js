import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableWithoutFeedback } from 'react-native';

export default class ItemSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: "",
		}
	}

	get_all_books = () => {
		fetch("https://warholbooks.000webhostapp.com/get_all_book.php", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
		}).then((response) => response.json()).then((responseJSON) => {
			this.setState({ books: responseJSON.book_detail });
		}).catch((e) => {
			console.error(e);
		});
	}

	componentDidMount() {
		this.get_all_books();
	}

	render() {
		return (
			<View style={styles.content}>
				<View style={styles.sectionContent}>
					<Text style={styles.section}>Books under 10$</Text>
					<Image style={styles.arrowIcon} source={require('./../icons/right-arrow.png')} />
				</View>
				<FlatList
					keyExtractor={(item) => String(item.book_id)}
					data={this.state.books}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("ItemDetail", item)}>
							<View style={styles.card}>
								<Image style={styles.cardImg} source={{ uri: item.image }} />
								<View style={styles.bookDesc}>
									<Text numberOfLines={1} style={styles.title}>{item.title}</Text>
									<View style={{ flexDirection: "row" }}>
										<Text style={styles.rating}>{item.rating}</Text>
										<Image style={styles.star} source={require('./../icons/star.png')} />
									</View>
									<Text style={styles.price}>{String(item.price)}</Text>
								</View>
							</View>
						</TouchableWithoutFeedback>
					)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
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