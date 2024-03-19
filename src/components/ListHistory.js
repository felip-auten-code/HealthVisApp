import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView, Alert} from 'react-native';
import React, { Children } from 'react'
//import { Box, Button, Input } from 'native-base'
import { styles } from './styles';

//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'

const ListHistory = ({navigation}) => {
    
    return(
        
        <View style = { styles.container }>
            <View style={styles.upperbar} >
                {/* <Image source={require('../../icons/upperBar.png')}/> */}
            </View>

            {/* <View style={styles.homeIcon}>
                <Image source={require('../../icons/homeIcon.png')}/>
            </View> */}

            {/* Home Icon */}
            <TouchableOpacity onPress={ () => navigation.navigate('MainPage')}
            style={styles.homeIcon}>
                <Image style={styles.homeIcon2} source={require('../../icons/homeIcon.png')}/>
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
                <Image style={styles.optIcon2} source={require('../../icons/OptionsIcon.png')}/>
            </TouchableOpacity>
            
            <View style={{color: 'white',
                          width: 350,
                          height: 600,
                          alignSelf: 'center',
                          position: 'absolute',
                          top: 120,
                          alignItems: 'center',
                          fontSize: 50,
                          backgroundColor: 'white',
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30}} >
                <Text style={{fontSize: 45}}>
                    Histórico
                </Text>
                <View style={{width: 300,
                                height: 2,
                                backgroundColor: 'black'}}>
                </View>
            </View>

        
        </View>
        
    )
}

export default ListHistory