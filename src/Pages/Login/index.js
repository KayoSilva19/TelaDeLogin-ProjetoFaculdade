import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Image
  
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Font from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  //   function IrCad(){
  //     navigation.navigate('Cadastro');
  // }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "android" ? 'height' : "padding"}
      style={styles.container}
    >
      <View style={styles.styleContent}>
      
      <Animatable.View 
        style={styles.containerLogin} 
        animation="slideInUp"
        useNativeDriver
      >
        <StatusBar backgroundColor="#0f39d1" barStyle="light-content" />
        <View style={styles.formLogin}>
        <Image 
            style={{
              alignSelf: 'center',
              marginTop: 20
            }} 
            source={require('../../Assets/logologin.png')}
          />
          <TextInput
            style={styles.inputEmail}
            placeholder="Digite seu email"
          />
           <TextInput
            style={styles.inputSenha}
            placeholder="Digite sua senha"
          />

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={ () => navigation.navigate('')}
          >
            <Text style={styles.tetxLogin}>LOGIN</Text>
          </TouchableOpacity>
          
           <TouchableOpacity
            onPress={ () => navigation.navigate('Cadastro')}
          >
            <Text style={styles.textCad}>Quero me cadastrar</Text>
        </TouchableOpacity>
        </View>

       
      </Animatable.View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  

  },
  styleContent: {
    flex: 1,
    backgroundColor: '#0f39d1',
    
    
  },
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  formLogin: {
    backgroundColor: "#FFF",
    margin: 18,
    width: 350,
    height: 350,
    borderRadius: 7,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 2,


  },
  inputEmail: {
    height: 50,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 7,
    color: "#575757",
    paddingLeft: 10,
    fontSize: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 3

  },
  inputSenha: {
    height: 50,
    marginTop: 18,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 7,
    color: "#575757",
    paddingLeft: 10,
    fontSize: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 3

  },
  btnLogin: {
    backgroundColor: "#0f39d1",
    width: 150,
    height: 50,
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 3

  },
  tetxLogin: {
    fontWeight: 'bold',
    color: "#FFF",
    fontSize: 18

  },
  textCad: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 15
  },
  imgLogin: {
    alignSelf: 'center',
    marginTop: 20,
    position: 'absolute',
    backgroundColor: "#FFF",
    borderRadius: 7,
    padding: 10,

  }
});
