// App.js

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { SplashScreen } from './src/screen/SplashScreen';
import HomeScreen from './src/screen/screens/home';
import CatalogScreen from './src/screen/screens/catalog';
import FavoritesScreen from './src/screen/screens/favorite';
import SettingsScreen from './src/screen/screens/settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? require('./assets/icons/home ativo.png') : require('./assets/icons/home inativo.png');
        } else if (route.name === 'Catalog') {
          iconName = focused ? require('./assets/icons/catalogo ativo.png') : require('./assets/icons/catalogo inativo.png');
        } else if (route.name === 'Favorites') {
          iconName = focused ? require('./assets/icons/favorite ativo.png') : require('./assets/icons/favorite inativo.png');
        } else if (route.name === 'Settings') {
          iconName = focused ? require('./assets/icons/set ativo.png') : require('./assets/icons/set inativo.png');
        }

        return <Image source={iconName} style={{ width: 30, height: 30 }} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const App = () => {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000); // Tempo de espera de 2 segundos (altere conforme necessário)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isReady ? (
          <Stack.Screen name="Main" component={MainTab} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
