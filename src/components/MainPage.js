import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView, Alert} from 'react-native';
import React, { Children } from 'react'
//import { Box, Button, Input } from 'native-base'
import { styles } from './styles';

//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'

const MainPage = ({navigation}) => {
    
    return(
        
        <View style = { styles.container }>
            <View style={styles.upperbar} >
                {/* <Image source={require('../../icons/upperBar.png')}/> */}
            </View>
            {/* <View style={styles.homeIcon} >
                <Image source={require('../../icons/homeIcon.png')}/>
            </View> */}

            {/* Home Icon */}
            <TouchableOpacity onPress={ () => Alert.alert('Go to home')}
            style={styles.homeIcon}>
                <Image source={require('../../icons/homeIcon.png')}/>
            </TouchableOpacity>

            <Image  style = {styles.icon3}   
                        source = {require("../../icons/LeafLogIn.png")}>
                            
            </Image>

            {/* User Information */}
            <TouchableOpacity onPress={ () => Alert.alert('See user information')} 
            style={styles.userLoc}>
                <Image source={require('../../icons/User.png')}/>
            </TouchableOpacity>

            {/* Options */}
            <TouchableOpacity onPress={ () => Alert.alert('See Options')} 
            style={styles.optIcon}>
                <Image source={require('../../icons/OptionsIcon.png')}/>
            </TouchableOpacity>
            
            {/* Botao Ver Camera */}
            <TouchableOpacity onPress={ () => navigation.navigate('TakePhoto01')} 
            style={styles.photoIcon}>
                <Image source={require('../../icons/PhotoIcon.png')}/>
            </TouchableOpacity>

            {/* List History */}
            <TouchableOpacity onPress={ () => navigation.navigate('ListHistory')} 
            style={styles.ListIcon}>
                <Image source={require('../../icons/ListIcon.png')}/>
            </TouchableOpacity>

            {/* List Diseases */}
            <TouchableOpacity onPress={ () => Alert.alert('See List Diseases')} 
            style={styles.DoencaIcon}>
                <Image source={require('../../icons/DoencaIcon.png')}/>
            </TouchableOpacity>

        
        </View>
        
    )
}


export default MainPage