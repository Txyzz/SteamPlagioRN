import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

// import { Container } from './styles';

const NavBar = () => {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri:
            'https://community.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png',
        }}
        style={{height: 35, width: 120}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: '#171a21',
    shadowColor: 'rgba( 0, 0, 0, 0.75 )',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },
});
export default NavBar;
