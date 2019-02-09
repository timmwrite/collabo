import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component<{}> {
  render (){
    return (
      <View style ={styles.container}>
          <Logo/>
          <Form/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6D00',
  },

});
