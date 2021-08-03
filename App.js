import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Fbscreen from './screens/fb';
import Inscreen from './screens/in';

export default class App extends React.Component {
  render(){
    return(
    <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Fbscreen},
  Instagram:{screen:Inscreen}
})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
