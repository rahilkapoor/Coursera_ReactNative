import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Contact = () => {
	return (
		<View>
			<Card title="Contact Information">
				<Text style={{ margin: 10 }}>121, Clear Water Bay Road</Text>
				<Text style={{ margin: 10 }}>Clear Water Bay, Kowloon</Text>
				<Text style={{ margin: 10 }}>HONG KONG</Text>
				<Text style={{ margin: 10 }}>Tel: +852 1234 5678</Text>
				<Text style={{ margin: 10 }}>Fax: +852 8765 4321</Text>
				<Text style={{ margin: 10 }}>Email:confusion@food.net</Text>
			</Card>
		</View>
	);
};

const ContactScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<Stack.Navigator>
				<Stack.Screen name="Contact" component={Contact} />
			</Stack.Navigator>
		</View>
	);
};

export default ContactScreen;
