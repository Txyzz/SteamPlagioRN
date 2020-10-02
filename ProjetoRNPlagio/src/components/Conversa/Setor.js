import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CardEmJogo from './CardEmJogo';
import CardOnline from './CardOnline';
import CardOffline from './CardOffline';
// import { Container } from './styles';

const Setor = () => {
  return (
    <>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.text}>EM JOGO</Text>
        </View>
        <View>
          <CardEmJogo />
        </View>
        <View style={style.container}>
          <Text style={style.text}>ONLINE</Text>
        </View>
        <View>
          <CardOnline />
        </View>
        <View style={style.container}>
          <Text style={style.text}>OFFLINE</Text>
        </View>
        <View>
          <CardOffline />
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#202633',
    height: 20,
    marginBottom: 1,
  },
  text: {
    marginLeft: 7,
    color: '#344e6b',
  },
});

export default Setor;
