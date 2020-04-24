import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { LEADERS } from "../shared/leader";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

class Leader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leaders: LEADERS,
		};
	}

	render() {
		const renderLeader = ({ item, index }) => {
			return (
				<ListItem
					key={index}
					title={item.name}
					subtitle={item.description}
					hideChevron={true}
					leftAvatar={{ source: require("../images/alberto.png") }}
				/>
			);
		};

		return (
			<View>
				<Card title="Corporate Leadership">
					<FlatList
						data={this.state.leaders}
						renderItem={renderLeader}
						keyExtractor={(item) => item.id.toString()}
					/>
				</Card>
			</View>
		);
	}
}

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<ScrollView>
					<Card title="Our History">
						<Text style={{ margin: 10 }}>
							Started in 2010, Ristorante con Fusion quickly established itself
							as a culinary icon par excellence in Hong Kong. With its unique
							brand of world fusion cuisine that can be found nowhere else, it
							enjoys patronage from the A-list clientele in Hong Kong. Featuring
							four of the best three-star Michelin chefs in the world, you never
							know what will arrive on your plate the next time you visit us.
						</Text>
						<Text style={{ margin: 10 }}>
							The restaurant traces its humble beginnings to The Frying Pan, a
							successful chain started by our CEO, Mr. Peter Pan, that featured
							for the first time the world's best cuisines in a pan.
						</Text>
					</Card>
					<Leader />
				</ScrollView>
			</View>
		);
	}
}

const AboutScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<Stack.Navigator>
				<Stack.Screen name="About" component={About} />
			</Stack.Navigator>
		</View>
	);
};
export default AboutScreen;
