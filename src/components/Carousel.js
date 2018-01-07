import React, { Component } from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import { Carousel,WingBlank } from 'antd-mobile';

export default class example extends Component {
  
  render() {
    let screenWidth= Dimensions.get('window').width;
    return (
        <WingBlank>
        <Carousel horizontal
        autoplay >
        <Image 
        style={{width: screenWidth, height: 180}}
          source={{uri: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png'}}
          />
          <Image 
          style={{width: screenWidth, height: 180}}
          source={{uri: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png'}}
          />
          <Image 
          style={{width: screenWidth, height: 180}}
          source={{uri: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png'}}
          />
          </Carousel>
        </WingBlank>
    );
  }
}
