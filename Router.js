import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './src/page/Detail';
import Jobs from './src/page/Jobs';
import Favorites from './src/page/Favorites';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsScreen"
        component={Jobs}
        options={{title: 'Jobs', headerTintColor: 'red'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={Detail}
        options={{title: 'Detail', headerTintColor: 'red'}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomeScreen"
          component={Home}
          options={{
            title: 'Jobs',
            headerTintColor: 'red',
            drawerActiveTintColor: 'red',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="FavoritesScreen"
          component={Favorites}
          options={{
            title: 'Favorites',
            headerTintColor: 'red',
            drawerActiveTintColor: 'red',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
