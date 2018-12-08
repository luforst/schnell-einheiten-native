import React from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import './contentdb.js'

contentdb = [["Ladung", "Q", "1C (Coulomb)"]];

function randint(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

class QuizCard extends React.Component {
	render() {
		return (
			<View><Text>{this.props.content}</Text></View>
		);
	}
}

class MathCard extends React.Component {
	render() {
		/*Text tag is to be replaced with MathJax/KaTeX component*/
		return (
			<View><Text>{this.props.content}</Text></View>
		);
	}
}

class CardCaption extends React.Component {
	render() {
		return (
			<View>
			<Text style={styles.caption}>{this.props.text}</Text>
			</View>
		);
	}
}

class QuizTable extends React.Component {
	render() {
		return (
			<View>
			<CardCaption text="Größe / Name einer Konstante" />
			<View><QuizCard content={this.props.quizData[0]} /></View>
			<CardCaption text="Formelzeichen" />
			<View><QuizCard content={this.props.quizData[1]} /></View>
			<CardCaption text="Einheit / Wert einer Konstante" />
			<View><QuizCard content={this.props.quizData[2]} /></View>
			</View>
		);
	}
}

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

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {quizData: ["Zeit", "t", "1 s"]};
		this.refreshContent = this.refreshContent.bind(this);
	}

	refreshContent() {
		//refresh the loaded contents
		this.setState({
			quizData: ["Ladung", "Q", "1 C (Coulomb)"]
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<QuizTable quizData={this.state.quizData} />
				<Button onPress={this.refreshContent} title="Neue Inhalte laden" />
			</View>
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
