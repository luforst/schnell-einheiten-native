import { React } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, View, DeckSwiper, Thumbnail } from 'native-base';
import * as contentdb from './contentdb.json'

contents = contentdb['basicSI'].concat(contentdb['thermodyn']);

function randint(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

class QuizField extends React.Component {
	render() {
		let content;
		if (this.props.showMe) {
			content = this.props.content;
		} else {
			content = "?";
		}

		return (
			<Card>
            	<CardItem header button onPress={this.props.onPress}>
					<Text>{this.props.caption}</Text>
				</CardItem>
				<CardItem><Body>
					<Image source={{uri: {contenturi}}} style={{flex: 1}} />
				</Body></CardItem>
			</Card>
		);
	}
}

/*
class MathField extends React.Component {
	render() {
		let content;
		if (this.props.showMe) {
			content = this.props.content;
		} else {
			content = "assets/formula/no.png";
		}

		return (
			<Card>
            	<CardItem header button onPress={this.props.onPress}>
					<Text>{this.props.caption}</Text>
				</CardItem>
				<CardItem><Body>
					<Thumbnail square source={{uri: {content}}} />
				</Body></CardItem>
			</Card>
		);
	}
}
*/

class QuizCard extends React.Component {
	render() {
		return (
			<Card style={{ elevation: 3 }}>
				<QuizField onPress={() => this.props.flipCard("groesse")} showMe={this.props.showFields.groesse} caption="Größe / Name einer Konstante" contenturi={this.props.quizData[3]+"_gr.svg"} />
				<QuizField onPress={() => this.props.flipCard("fz")} showMe={this.props.showFields.fz} caption="Formelzeichen" contenturi={this.props.quizData[3]+"_fz.svg"} />
				<QuizField onPress={() => this.props.flipCard("einheit")} showMe={this.props.showFields.einheit} caption="Einheit / Wert einer Konstante" contenturi={this.props.quizData[3]+"_einh.svg"} />
			</Card>
		);
	}
}

class QuizDeckSwiper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groesse: false,
			fz: false,
			einheit: false
		};
		this.flipCard = this.flipCard.bind(this);
		this.clearFields = this.clearFields.bind(this);
	}

	flipCard(elem) {
		console.log(elem)
		if (this.state[elem]) {
			this.setState(state => ({
				[elem]: false
			}));
		} else {
			this.setState(state => ({
				[elem]: true
			}));
		}
	}

	clearFields() {
		console.log("Swipe");
		this.setState(state => ({
			groesse: false,
			fz: false,
			einheit: false
		}));
	}

	render() {
		return (
			<Container>
				<Header />
				<View>
					<DeckSwiper
						dataSource={contents}
						renderItem={item =>
							<QuizCard quizData={item} showFields={this.state} flipCard={this.flipCard} />
						}
						onSwipeRight={() => this.clearFields()}
						onSwipeLeft={() => this.clearFields()}
					 />
				</View>
			</Container>
		);
	}
}

export default class App extends React.Component {
	render() {
		return (
			<Container>
				<Content>
					<QuizDeckSwiper />
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	caption: {
		fontWeight: 'bold',
	},
});
