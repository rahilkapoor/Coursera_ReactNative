import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./HomeComponent";
import MenuScreen from "./MenuComponent";
import AboutScreen from "./AboutComponent";
import ContactScreen from "./ContactComponent";

const Drawer = createDrawerNavigator();

export default function MainComponent() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Home">
					<Drawer.Screen name="Home" component={HomeScreen} />
					<Drawer.Screen name="Menu" component={MenuScreen} />
					<Drawer.Screen name="About Us" component={AboutScreen} />
					<Drawer.Screen name="Contact" component={ContactScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
