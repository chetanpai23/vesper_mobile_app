/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Header({ title }) {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 40,
		padding: 20,
		backgroundColor: 'darkslateblue',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		color: '#fff',
		textAlign: 'center'
	},
	img: {
		width: 100,
		height: 100
	}
});
