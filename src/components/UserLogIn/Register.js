import { StatusBar } from 'expo-status-bar';
import { Alert, Button, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView} from 'react-native';
import React, { Children } from 'react'
//import { Box, Input } from 'native-base'
//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
import {styles} from '../Styles/styles'
//import { position } from 'native-base/lib/typescript/theme/styled-system';

const win = Dimensions.get('window')

const Register = ({navigation}) => {
    const [text, onChangeText] = React.useState('')
    const [textPass, onChangeText2] = React.useState('')
    const [textEmail, onChangeEmail] = React.useState('')
    const [textName, onChangeName] = React.useState('')
    return(

        <ScrollView style={ [{flex: 1}]}>
            <KeyboardAvoidingView 
                behavior= 'padding'
                style={[styles.container, {height: win.height}]}
                keyboardVerticalOffset={50}>
                <View style={ styles.container}>
                    <StatusBar style = "auto" />
                    
                    <Image  style = {styles.icon2}   
                            source = {require("../../../icons/LeafLogIn.png")}>
                                
                    </Image>

                    <View style = {styles.TitleText}>
                        <Text style = {styles.TitleText}>
                            Health Vision
                        </Text>
                    </View>
                

        
                    <ScrollView keyboardVerticalOffset = {50} vertical 
                                style={{    backgroundColor: 'transparent', 
                                            position: 'absolute', 
                                            alignSelf: 'center',
                                            alignContent: 'center', 
                                            top: 150,
                                            borderRadius: 10,
                                            width: win.width-40,
                                            height: 300}}>
                    
                        <TextInput  style = { styles.registerField }
                                        onChangeText = {onChangeText}
                                        value = {text}
                                        placeholder = "Username"     
                                        showSoftInputOnFocus  
                        />
                        <TextInput  style = { styles.registerField }
                                        onChangeText = {onChangeText2}
                                        value = {textPass}
                                        placeholder = "Password"    
                                        secureTextEntry = {true}   
                                        textContentType = {"password"}  
                        />
                        <TextInput  style = { styles.registerField }
                                        onChangeText = {onChangeEmail}
                                        value = {textEmail}
                                        placeholder = "e-mail"    
                                        textContentType = {'emailAddress'}  
                        />
                        <TextInput  style = { styles.registerField }
                                        onChangeText = {onChangeName}
                                        value = {textName}
                                        placeholder = "Name"    

                        />
                    </ScrollView>
                    
            </View>
            
            
            </KeyboardAvoidingView>
            <View style={{  backgroundColor: 'transparent', 
                                    position: 'relative',
                                    top: -270,
                                    width: 300,
                                    height: 200,
                                    alignSelf: 'center'
                                    //alignItems: 'center']
                                }}>
                <View style={{marginTop: 20}}></View>
                <Button title='Cadastrar' color={'black'} 
                        onPress={() => { navigation.navigate('LogIn') }}>

                </Button>
            </View>
        </ScrollView>

    )
}

export default Register