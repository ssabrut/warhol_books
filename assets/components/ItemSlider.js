import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableWithoutFeedback } from 'react-native';

export default class ItemSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: "",
			user_id: this.props.user_id,
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

	bookUnder10 = ({ item }) => {
		if (item.price < 10) {
			return (
				<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("ItemDetail", { item: item, user_id: this.state.user_id })}>
					<View style={styles.card}>
						<Image style={styles.cardImg} source={{ uri: item.image }} />
						<View style={styles.bookDesc}>
							<Text numberOfLines={1} style={styles.title}>{item.title}</Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={styles.rating}>{item.rating}</Text>
								<Image style={styles.star} source={require('./../icons/star.png')} />
							</View>
							<Text style={styles.price}>${String(item.price)}</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
			);
		}
	}

	newKnowledgeRelease = ({ item }) => {
		if (item.category === "Knowledge") {
			return (
				<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("ItemDetail", item)}>
					<View style={styles.card}>
						<Image style={styles.cardImg} source={{ uri: item.image }} />
						<View style={styles.bookDesc}>
							<Text numberOfLines={1} style={styles.title}>{item.title}</Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={styles.rating}>{item.rating}</Text>
								<Image style={styles.star} source={require('./../icons/star.png')} />
							</View>
							<Text style={styles.price}>${String(item.price)}</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
			);
		}
	}

	novelForYou = ({ item }) => {
		if (item.rating > 4) {
			return (
				<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("ItemDetail", item)}>
					<View style={styles.card}>
						<Image style={styles.cardImg} source={{ uri: item.image }} />
						<View style={styles.bookDesc}>
							<Text numberOfLines={1} style={styles.title}>{item.title}</Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={styles.rating}>{item.rating}</Text>
								<Image style={styles.star} source={require('./../icons/star.png')} />
							</View>
							<Text style={styles.price}>${String(item.price)}</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
			);
		}
	}

	componentDidMount() {
		this.get_all_books();
	}

	render() {
		const Section = ({ text }) => {
			return (
				<View style={styles.sectionContent}>
					<Text style={styles.section}>{text}</Text>
					<Image style={styles.arrowIcon} source={require('./../icons/right-arrow.png')} />
				</View>
			);
		}

		const Slider = ({ _function }) => {
			return (
				<FlatList
					keyExtractor={(item) => String(item.book_id)}
					data={this.state.books}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					renderItem={_function} />
			);
		}

		return (
			<View style={styles.content}>
				<Section text="Book under 10$" />
				<Slider _function={this.bookUnder10} />
				<Section text="Latest knowledge books" />
				<Slider _function={this.newKnowledgeRelease} />
				<Section text="Top review books" />
				<Slider _function={this.novelForYou} />
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