import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/screens/Home';
import Notification from './components/screens/Notification';
import Menu from './components/screens/Menu';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from './components/extentions/colors';

const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.pink,
        }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: () => <Feather name="search" color="black" size={20} />,
          }}
        />
        <Tab.Screen
          name="notification"
          component={Notification}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="md-notifications-outline"
                color="black"
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="menu"
          component={Menu}
          options={{
            tabBarIcon: () => <Ionicons name="menu" color="black" size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
