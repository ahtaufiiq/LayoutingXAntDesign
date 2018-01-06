import React from 'react';
import {View} from 'react-native';
import { SearchBar, Button, WhiteSpace, WingBlank,Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));

  const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));

  const GridExample = () => {
    return (
        <Grid data={data1} columnNum={3} hasLine={false}/>
    );
};

export default GridExample;