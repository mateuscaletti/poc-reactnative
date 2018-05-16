// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

// Create a component
const App = () => {
    return <Header headerText={'Cliente'} />
};

// Render it to the device
AppRegistry.registerComponent('poc_reactnative', () => App);