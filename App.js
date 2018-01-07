'use strict';
import React, { Component } from 'react'; // 1
import {
  Text,
  View
} from 'react-native';
import Home from './src/Home';

export default class App extends Component<{}> { 
  
  render() {
    return (
      <View>
        <Home />
      </View>
      
    );
  }
 } 