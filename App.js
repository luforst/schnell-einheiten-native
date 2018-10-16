import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class QuizCard extends React.Component {
	render() {
		return (
			<View><Text>{this.props.name}</Text></View>
		);
	}
}

class QuizTable extends React.Component {
	render() {
		return (
			<View>
			<QuizCard name="Größe" />
			<QuizCard name="Formelzeichen" />
			<QuizCard name="Einheit / Wert" />
			</View>
		);
	}
}

export default class App extends React.Component {
  refreshContent() {
    //refresh the loaded contents
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
