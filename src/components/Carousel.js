import React from 'react';
import {View, Text, Image} from 'react-native';
import { Carousel } from 'antd-mobile';

  
  const CarouselExample = () => {
    
    return (
      <Carousel vertical
      autoplay
    >
      <Image 
        style={{ width: '100%', verticalAlign: 'top' }}
        source={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`}/>
      <Image source={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`}/>
      <Image source={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`}/>
    </Carousel>
    );
};

export default CarouselExample;