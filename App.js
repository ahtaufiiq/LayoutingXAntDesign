'use strict';
import React, { Component } from 'react'; // 1
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SearchBar from './src/components/SearchBar';
import Grid from './src/components/Grid';
import Carousel from './src/components/Carousel';

export default class App extends Component<{}> { 
  
  render() {
    return (
      <View  style={{ flex:1, flexDirection: 'column' }}>
            <SearchBar />
        
            <Carousel />
            <Grid />
      </View>
        
    );
  }
 } // 3

const styles = StyleSheet.create({ 
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
 }); // 4