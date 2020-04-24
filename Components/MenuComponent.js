import React from "react";
import { Text, View, FlatList } from "react-native";
import { ListItem, Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import { createStackNavigator } from "@react-navigation/stack";
import DishDetail from "./DishDetailComponent";

const Stack = createStackNavigator();

const Menu = ({ navigation }) => {
	const dishes = DISHES;
	const renderMenuItem = ({ item, index }) => {
		return (
			<ListItem
				key={index}
				title={item.name}
				subtitle={item.description}
				hideChevron={true}
				onPress={() =>
					navigation.navigate("Detail", {
						name: item.name,
						description: item.description,
					})
				}
				leftAvatar={{ source: require("../images/uthappizza.png") }}
			/>
		);
	};

	return (
		<FlatList
			data={dishes}
			renderItem={renderMenuItem}
			keyExtractor={(item) => item.id.toString()}
		/>
	);
};

const MenuScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<Stack.Navigator>
				<Stack.Screen name="Menu" component={Menu} />
				<Stack.Screen name="Detail" component={DishDetail} />
			</Stack.Navigator>
		</View>
	);
};
export default MenuScreen;
