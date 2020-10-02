import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const CardEmJogo = () => {
  return (
    <>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c0/c0a039b73e4000b111fe0604e966bc83aca4150e_full.jpg',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#20b80f',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Tico tico no fuba</Text>
          <Text style={style.textDesc}>Jogando Dayz</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="comments" size={35} color="#999" />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a6/a601792dac9b6c3045e1ee4859d6e290327fcc1d_full.jpg',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#20b80f',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Saci de Patinete</Text>
          <Text style={style.textDesc}>Jogando Dead By Daylight</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="comments" size={35} color="#999" />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b3cb344541a3e68c5de8635489254e6c84a75bc8_full.jpg',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#20b80f',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Biruleibe</Text>
          <Text style={style.textDesc}>
            Jogando Counter-Strike: Global Offensive
          </Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="comments" size={35} color="#999" />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/3993dd8c-4d08-46f4-8473-9ea2aff6b5e8-profile_image-300x300.png',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#20b80f',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Abacaxi2626</Text>
          <Text style={style.textDesc}>Jogando Arma III</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="comments" size={35} color="#999" />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#20b80f',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Cleiton</Text>
          <Text style={style.textDesc}>Jogando Red Dead Redemption 2</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="comments" size={35} color="#999" />
        </View>
      </View>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1308867247/gasparzinho_tv_400x400.gif',
          }}
          style={{
            height: 40,
            width: 40,
            borderColor: '#20b80f',
            borderWidth: 1,
          }}
        />
        <View>
          <Text style={style.text}>Fantasminha Camarada</Text>
          <Text style={style.textDesc}>Jogando Phasmophobia</Text>
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
    color: '#93C54B',
    paddingLeft: 5,
    fontSize: 17,
  },
  textDesc: {
    color: '#93C54B',
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

export default CardEmJogo;
