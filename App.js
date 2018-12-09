import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, View, DeckSwiper } from 'native-base';
import './contentdb.js'

contentdb = [
	["Ladung", "Q", "1C (Coulomb)"],
	["Spannung", "U", "1V (Volt)"],
	["Kraft", "F", "1N (Newton)"],
	["Zeit", "t", "1s (Sekunde)"],
	["Energie", "W, E", "1J (Joule)"],
	["Weg", "s", "1m (Meter)"],
	["Stromstärke", "I", "1A (Ampere)"]];

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
			content = "Nichts";
		}

		return (
			<Card>
            			<CardItem header button onPress={this.props.onPress}>
					<Text>{this.props.caption}</Text>
				</CardItem>
				<CardItem><Body>
					<Text>
						{content}
						{this.props.showMe ? "Hallo" : "Huhu"}
					</Text>
				</Body></CardItem>
			</Card>
		);
	}
}
/*
class MathField extends React.Component {
	render() {
		//Text tag is to be replaced with MathJax/KaTeX component
		return (
			<View><Text>{this.props.content}</Text></View>
		);
	}
}
*/

class QuizCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groesse: true,
			fz: true,
			einheit: true
		};
		this.flipCard = this.flipCard.bind(this);
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
		/*this.setState({
			groesse: false,
			fz: false,
			einheit: true
		});*/
	}

	render() {
		return (
			<Card style={{ elevation: 3 }}>
				<QuizField onPress={() => this.flipCard("groesse")} showMe={this.state.groesse} caption="Größe / Name einer Konstante" content={this.props.quizData[0]} />
				<QuizField onPress={() => this.flipCard("fz")} showMe={this.state.fz} caption="Formelzeichen" content={this.props.quizData[1]} />
				<QuizField onPress={() => this.flipCard("einheit")} showMe={this.state.einheit} caption="Einheit / Wert einer Konstante" content={this.props.quizData[2]} />
			</Card>
		);
	}
}

class QuizDeckSwiper extends React.Component {
	render() {
		return (
			<Container>
				<Header />
				<View>
					<DeckSwiper
						dataSource={contentdb}
						renderItem={item =>
							<QuizCard quizData={item} />
						}
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
