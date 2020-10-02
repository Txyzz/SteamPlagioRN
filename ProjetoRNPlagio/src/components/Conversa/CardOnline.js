import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const CardOnline = () => {
  return (
    <>
      <View style={style.container}>
        <Image
          source={{
            uri: 'https://i.redd.it/clscgf8kmts31.png',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#7cc5fb',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Barack Osama</Text>
          <Text style={style.textDesc}>Online</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="comments" size={35} color="#999" />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://i.insider.com/5e5d2aa1fee23d10847a28f8?width=750&format=jpeg&auto=webp',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#7cc5fb',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Tonald Drump</Text>
          <Text style={style.textDesc}>Online</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="comments" size={35} color="#999" />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp-mJR3o1UDJvBU7oSO9ImLvdBbdyfHF6Kmg&usqp=CAU',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#7cc5fb',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Doge Guy</Text>
          <Text style={style.textDesc}>Cochilando</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="comments" size={35} color="#999" />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    backgroundColor: '#0b111f',
    flexDirection: 'row',
    fontSize: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  text: {
    color: '#7cc5fb',
    paddingLeft: 5,
    fontSize: 17,
  },
  textDesc: {
    color: '#7cc5fb',
    paddingLeft: 5,
    fontSize: 13,
  },
  containerIcon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
    flex: 1,
  },
});

export default CardOnline;
