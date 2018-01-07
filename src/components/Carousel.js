import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import { Carousel } from 'antd-mobile';

let screenWidth= Dimensions.get('window').width;
  const CarouselExample = () => {
    
    return (
      <Carousel vertical
      autoplay
    >
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
    );
};

export default CarouselExample;