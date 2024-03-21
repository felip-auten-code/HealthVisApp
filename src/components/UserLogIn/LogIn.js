import { StatusBar } from 'expo-status-bar';
import { Alert, Button, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView} from 'react-native';
import React, { Children } from 'react'
//import { Box, Input } from 'native-base'
//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
import {styles} from '../Styles/styles'
//import { position } from 'native-base/lib/typescript/theme/styled-system';

const win = Dimensions.get('window')

const LogIn = ({navigation}) => {
    const [text, onChangeText] = React.useState('')
    const [textPass, onChangeText2] = React.useState('')
    return(

        <KeyboardAvoidingView 
            behavior= 'padding'
            style={ styles.container }
            keyboardVerticalOffset= {150} 
            vertical >
            <View style={ styles.containner2 }>
                <StatusBar style = "auto" />
                
                <Image  style = {styles.icon2}   
                        source = {require("../../../icons/LeafLogIn.png")}>
                            
                </Image>

                <View style = {styles.TitleText}>
                    <Text style = {styles.TitleText}>
                        Health Vision
                    </Text>
                </View>
                <Image  style = { styles.icon }   
                        source = {require("../../../icons/iconInit.png")}>
                            
                </Image>
            

                <View style={styles.buttonEntry}>
                    <Button color={'#19BA50'}
                        title="Entrar"
                        onPress={() => navigation.navigate('MainPage')}
                    />
                </View>

                <View style={styles.buttonInsert}>
                    <Button 
                        title="Cadastrar"
                        onPress={() => {Alert.alert('Fazer Tela de Cadastro'), 
                                            navigation.navigate('Register')}}
                    />
                </View>

                <View   style={{position: 'absolute',
                        textAlign: 'center',
                        justifyContent: "center",
                        top: 580,
                        }}>
                    <Text style={{
                        textAlign: 'center',
                        justifyContent: "center",
                        color: 'white'
                        }}>Ou entre por meio de {"\n"} outra plataforma</Text>
                </View>
           </View>

           <View   keyboardVerticalOffset={80} vertical 
                        style={{flex: 1, 
                                position: 'absolute', 
                                alignSelf: 'center', 
                                top: win.height/2.5,
                                height: 200,
                                width: 300,
                                backgroundColor:  'black'}}>

                <TextInput  style = { styles.inputUsername }
                            onChangeText = {onChangeText}
                            value = {text}
                            placeholder = "Username"     
                            showSoftInputOnFocus  
                />
                <TextInput  style = { styles.inputPass }
                            onChangeText = {onChangeText2}
                            value = {textPass}
                            placeholder = "Password"    
                            secureTextEntry = {true}   
                            textContentType = {"password"}  
                            showSoftInputOnFocus  
                ></TextInput>
            </View>
        </KeyboardAvoidingView>

    )
}

export default LogIn