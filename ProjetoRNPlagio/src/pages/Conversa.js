import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

import Setor from '../components/Conversa/Setor';

// import { Container } from './styles';

const Conversa = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#171a21', height: 50000, flex: 1}}>
      <View style={style.containerNav}>
        <View style={style.containerLeft}>
          <Icon
            onPress={() => navigation.navigate('Login')}
            style={style.iconMenu}
            name="bars"
            size={20}
            color="#999"
          />
          <Text style={style.text}>Amigos</Text>
        </View>
        <View style={style.containerRight}>
          <Icon
            onPress={() => navigation.navigate('Login')}
            style={style.iconRight}
            name="search"
            size={20}
            color="#999"
          />
          <Icons
            onPress={() => navigation.navigate('Login')}
            style={style.iconRight}
            name="redo-alt"
            size={20}
            color="#999"
          />
        </View>
      </View>
      <Setor />
    </View>
  );
};

const style = StyleSheet.create({
  containerNav: {
    height: 63,
    backgroundColor: '#344e6b',
    shadowColor: 'rgba( 0, 0, 0, 0.75 )',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },
  containerLeft: {
    flexDirection: 'row',
  },
  containerRight: {
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  iconMenu: {
    alignSelf: 'center',
    paddingRight: 20,
  },
  iconRight: {
    alignSelf: 'center',
    padding: 15,
  },
});

export default Conversa;
