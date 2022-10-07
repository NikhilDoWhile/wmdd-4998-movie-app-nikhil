import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesAndTvTabs from '../tabs/MoviesAndTvTabs';
import SearchTab from '../tabs/SearchTab';

const Tab = createMaterialTopTabNavigator();

const TabContainer = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            tabBarActiveTintColor: '#2c3e50',
            tabBarIndicatorStyle: { backgroundColor: '#2c3e50' },
        }}>
            <Tab.Screen name="Movies">{() => <MoviesAndTvTabs navigation={navigation} mediaType="movie" />}</Tab.Screen>
            <Tab.Screen name="Search Results" component={SearchTab} />
            <Tab.Screen name="TV Shows">{() => <MoviesAndTvTabs navigation={navigation} mediaType="tv" />}</Tab.Screen>
        </Tab.Navigator>
    );
}
export default TabContainer;