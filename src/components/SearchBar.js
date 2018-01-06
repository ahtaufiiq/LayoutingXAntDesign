import React, { Component } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { View } from 'react-native';

class SearchBarExample extends Component {
    state = {
      value: '美食',
    };
    componentDidMount() {
      this.autoFocusInst.focus();
    }
    onChange= (value) => {
      this.setState({ value });
    };
    clear = () => {
      this.setState({ value: '' });
    };
    handleClick = () => {
      this.manualFocusInst.focus();
    }
    render() {
      return (
        <View>
            <SearchBar placeholder="Search"/>
        </View>);
    }
  }

  export default SearchBar;