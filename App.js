import * as React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from './src/screens/Map';
import Directions from './src/screens/Directions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function App() {
  const [theme, setTheme] = React.useState(null);

  React.useEffect(() => {
    console.log(theme);
    getData();
    return () => null;
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@theme');
      if (value !== null) {
        setTheme(value);
      } else {
        setTheme(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onTogglePress = async () => {
    try {
      if (theme == null || theme == 'light') {
        await AsyncStorage.setItem('@theme', 'dark');
        setTheme('dark');
      } else {
        await AsyncStorage.setItem('@theme', 'light');
        setTheme('light');
      }
    } catch (e) {
      // saving error
    }
  };

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Tab.Navigator
        initialRouteName="Map"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarLabel: () => null,
          tabBarActiveTintColor: '#fe3139',
          tabBarInactiveTintColor: theme == 'dark' ? 'white' : 'black',
          tabBarStyle: {
            backgroundColor: theme == 'dark' ? 'black' : 'white',
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Directions') {
              iconName = require('./src/icons/compass.png');
            } else if (route.name === 'Map') {
              iconName = require('./src/icons/map.png');
            } else if (route.name === 'Add') {
              iconName = require('./src/icons/plus.png');
              return (
                <View
                  style={{
                    borderRadius: 50,
                    position: 'relative',
                    bottom: size / 2,
                    backgroundColor: '#fe3139',
                    padding: 15,
                  }}>
                  <Image
                    source={iconName}
                    style={{
                      height: size,
                      width: size,
                      tintColor: 'white',
                    }}
                  />
                </View>
              );
            } else if (route.name === 'Notifications') {
              iconName = require('./src/icons/bell.png');
            } else if (route.name === 'User') {
              iconName = require('./src/icons/user.png');
            }

            // You can return any component that you like here!
            return (
              <Image
                source={iconName}
                style={{
                  height: size,
                  width: size,
                  tintColor: color,
                }}
              />
            );
          },
        })}>
        <Tab.Screen name="Directions" component={Directions} />
        <Tab.Screen
          name="Map"
          children={() => (
            <Map
              theme={theme}
              setTheme={setTheme}
              onTogglePress={onTogglePress}
            />
          )}
        />
        <Tab.Screen name="Add" component={Directions} />
        <Tab.Screen name="Notifications" component={Directions} />
        <Tab.Screen name="User" component={Directions} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
