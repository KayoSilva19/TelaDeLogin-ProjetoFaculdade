import React from 'react';
import {View, TextInput, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Font from 'react-native-vector-icons/FontAwesome';
import { useNavigation, StackActions } from '@react-navigation/native';


export default function Cadastro() {
    const navigation = useNavigation();
 return (
   <View>
       <TouchableOpacity
        onPress={ () => navigation.goBack()}
       >
       <Text>Cad</Text>
       </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({

});