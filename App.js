import React from 'react';
import { StyleSheet, Button, Switch } from 'react-native';
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
		return (
			<Card>
            			<CardItem header>
					<Text>{this.props.caption}</Text>
				</CardItem>
				<CardItem><Body>
					<Text>
                  				{this.props.content}
					</Text>
				</Body></CardItem>
			</Card>
		);
	}
}
/*
class MathCard extends React.Component {
	render() {
		//Text tag is to be replaced with MathJax/KaTeX component
		return (
			<View><Text>{this.props.content}</Text></View>
		);
	}
}
*/

class QuizCard extends React.Component {
	render() {
		return (
			<Card style={{ elevation: 3 }}>
				<QuizField caption="Größe / Name einer Konstante" content={this.props.quizData[0]} />
				<QuizField caption="Formelzeichen" content={this.props.quizData[1]} />
				<QuizField caption="Einheit / Wert einer Konstante" content={this.props.quizData[2]} />
			</Card>
		);
	}
}
/*
class TopicSwitch extends React.Component {
	render() {
		return (
			<View>
				<Switch />
				<Text>{this.props.caption}</Text>
			</View>
		);
	}
}

class TopicChooser extends React.Component {
	render() {
		return (
			<TopicSwitch caption="Beispiel-Kategorie" />
		);
	}
}
*/

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
/*	constructor() {
		super();
		this.state = {quizData: ["Zeit", "t", "1 s"]};
		this.refreshContent = this.refreshContent.bind(this);
	}

	refreshContent() {
		//refresh the loaded contents
		this.setState({
			quizData: contentdb[randint(0, contentdb.length-1)]
		});
	}
*/
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
