import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

// import { Container } from './styles';
import NavBar from '../components/Login/NavBar';

const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#171a21', flex: 1}}>
      <NavBar />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Iniciar sessão</Text>
        <Text style={{color: '#8F98A0', marginHorizontal: 8}}>
          com uma conta Steam existente
        </Text>
        <View style={styles.containerForm}>
          <Text style={styles.textForm}>Nome de usuário Steam</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.textForm}>Senha</Text>
          <TextInput style={styles.textInput} />
          <TouchableHighlight
            style={styles.EnterButton}
            onPress={() => navigation.navigate('Conversa')}>
            <Text style={styles.EnterButtonText}>Iniciar sessão</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={{color: '#fff', marginLeft: 5}}>
              Esqueceu sua senha?
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d3752',
    margin: 5,
    maxHeight: 330,
    marginVertical: 15,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 10,
  },
  text: {
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize: 22,
    opacity: 1,
    marginHorizontal: 8,
    marginTop: 10,
  },
  containerForm: {
    marginHorizontal: 8,
    marginTop: 15,
  },
  textForm: {
    color: '#2f89bc',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 3,
    width: 230,
    height: 35,
    backgroundColor: '#192230',
    marginBottom: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  EnterButtonText: {
    color: '#D2E885',
  },
  EnterButton: {
    margin: 5,
    marginTop: 25,
    backgroundColor: '#20b80f',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 130,
    borderRadius: 2,
    color: '#fff',
    elevation: 3,
  },
});

export default Login;
