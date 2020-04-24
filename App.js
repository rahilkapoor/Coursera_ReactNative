import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import MainComponent from "./Components/MainComponent";

export default function App() {
	return (
		<View style={styles.container}>
			<MainComponent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
