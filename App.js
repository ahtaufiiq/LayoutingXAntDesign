'use strict';
import React, { Component } from 'react'; // 1
import {
  Text,
  View
} from 'react-native';
import Home from './src/Home';
import TakePicture from './src/TakePicture';

export default class App extends Component<{}> { 
  
  render() {
    return (
      <View>
        <TakePicture />
      </View>
      
    );
  }
 } 