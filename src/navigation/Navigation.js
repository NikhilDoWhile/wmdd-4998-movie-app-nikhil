import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from '../screen/DetailsScreen';
import HomeScreen from '../screen/HomeScreen';

const Stack = createNativeStackNavigator()

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: "Movies App",
                    headerStyle: {
                        backgroundColor: "#2c3e50",
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                }} />

                <Stack.Screen name="Details" component={DetailsScreen} options={{
                    title: "Movies App",
                    headerStyle: {
                        backgroundColor: "#fff",
                    },
                    headerTitleStyle: {
                        color: "#000",
                    },
                    headerBackTitle: "Back to List",
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation