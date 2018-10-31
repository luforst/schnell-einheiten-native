import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import './contentdb.js'

contentdb = ["Ladung", "Q", "1C (Coulomb)"];

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

class QuizTable extends React.Component {
	render() {
		return (
			<View>
			<View><Text>Größe</Text></View>
			<View><QuizCard content="Zeit" /></View>
			<View><Text>Formelzeichen</Text></View>
			<View><QuizCard content="t" /></View>
			<View><Text>Einheit / Wert</Text></View>
			<View><QuizCard content="1s (Sekunde)" /></View>
			</View>
		);
	}
}

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {quizData: ["Zeit", "t", "1 s"]};
	}

	refreshContent() {
		//refresh the loaded contents
		this.setState({
			quizData: contentdb[0] //to be replaced with random index
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<QuizTable />
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
});
