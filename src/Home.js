import React, { Component } from 'react';
import {
    Text,
    View
  } from 'react-native';
  import { WingBlank, WhiteSpace} from 'antd-mobile';
  import Search from './components/Search';
  import Grid from './components/Grid';
  import Grid2 from './components/Category';
  import Carousel from './components/Carousel';
  import ImagePicker from './components/ImagePicker';

export default class Home extends Component {
  render() {
    return (
        <View>
            <WhiteSpace size="lg" />
            <Search />
            <WhiteSpace size="lg" />
            <Carousel />
            <WhiteSpace size="lg" />
            <Grid2 />
            <WhiteSpace size="lg" />
            <Grid />
            
        </View>
    );
  }
}
