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
            uri:
              'data:image/jpeg;base64,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',
          }}
          style={style.image}
        />
        <View>
          <Text style={style.text}>Kenghis Ghan</Text>
          <Text style={style.textDesc}>Offline</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 202,
            }}
            name="comment"
            size={30}
            color="#999"
          />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTw9HDfJY01nTAdGsIljcSXQC7JaGtG6R4qA&usqp=CAU',
          }}
          style={style.image}
        />
        <View>
          <Text style={style.text}>AmericanBoy03</Text>
          <Text style={style.textDesc}>Offline</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 186,
            }}
            name="comment"
            size={30}
            color="#999"
          />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://preview.redd.it/50jeybcxvztx.jpg?auto=webp&s=3414c43074b94f33b661f643d47ebd77986cd980',
          }}
          style={style.image}
        />
        <View>
          <Text style={style.text}>Avocado </Text>
          <Text style={style.textDesc}>Offline</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 235,
            }}
            name="comment"
            size={30}
            color="#999"
          />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
          }}
          style={style.image}
        />
        <View>
          <Text style={style.text}>lk$ </Text>
          <Text style={style.textDesc}>Offline</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 268,
            }}
            name="comment"
            size={30}
            color="#999"
          />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
          }}
          style={style.image}
        />
        <View>
          <Text style={style.text}>Edtkz </Text>
          <Text style={style.textDesc}>Offline</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 259,
            }}
            name="comment"
            size={30}
            color="#999"
          />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
          }}
          style={style.image}
        />
        <View>
          <Text style={style.text}>Allamba </Text>
          <Text style={style.textDesc}>Offline</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 238,
            }}
            name="comment"
            size={30}
            color="#999"
          />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
          }}
          style={style.image}
        />
        <View>
          <Text style={style.text}>KittyToy </Text>
          <Text style={style.textDesc}>Offline</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 240,
            }}
            name="comment"
            size={30}
            color="#999"
          />
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
    color: '#8F98A0',
    paddingLeft: 5,
    fontSize: 17,
  },
  textDesc: {
    color: '#8F98A0',
    paddingLeft: 5,
    fontSize: 13,
  },
  image: {
    height: 40,
    width: 40,
    borderColor: '#8F98A0',
    borderWidth: 1,
  },
  containerIcon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
    flex: 1,
  },
});

export default CardOnline;
