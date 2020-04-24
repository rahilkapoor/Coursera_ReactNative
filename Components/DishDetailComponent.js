import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const DishDetail = ({ route }) => {
	const { name } = route.params;
	const { description } = route.params;
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Card featuredTitle={name} image={require("../images/uthappizza.png")}>
				<Text style={{ margin: 10 }}>{description}</Text>
			</Card>
		</View>
	);
};

export default DishDetail;
