/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { Header } from './components/Header';
import { ListItems } from './components/ListItems';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			jsonData: ''
		};
	}

	async componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					jsonData: json.body
				});
			})
			.catch((error) => {
				this.setState({
					jsonData: 'Network Failed Error'
				});
				//console.error(error);
			});
	}
	render() {
		const items = [
			{ id: 1, text: 'Milk_1' },
			{ id: 2, text: 'Chocolates' },
			{ id: 3, text: 'Eggs' },
			{ id: 4, text: 'Bread' }
		];
		return (
			<View style={styles.container}>
				<Header title="Shopping List" />
				<FlatList data={items} renderItem={({ item }) => <ListItems item={item.text} />} />
				<Text>{this.state.jsonData}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	list: {
		paddingLeft: 10
	},
	container: {
		flex: 1,
		paddingTop: 10
	},
	text: {
		fontSize: 30
	},
	img: {
		width: 100,
		height: 100
	}
});
