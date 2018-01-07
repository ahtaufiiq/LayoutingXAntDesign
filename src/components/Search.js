import React, { Component } from 'react';
import {View} from 'react-native';
import { SearchBar, WingBlank,LocaleProvider } from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true,
    };
  }

  render() {
    const locale = this.state.isEnglish ? enUS : undefined;
    return (
      <View>
        <LocaleProvider locale={locale}>
          <SearchBar placeholder="Search" />
        </LocaleProvider>
      </View>
    );
  }
}

