import { StatusBar } from 'expo-status-bar';
import { Button, TouchableOpacity, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView, Alert} from 'react-native';
import React, { Children } from 'react'
//import { Box, Button, Input } from 'native-base'
import { styles } from '../Styles/styles';

//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'

const CottonDis = ({navigation}) => {    
    return(
        <View style = { styles.container }>
            <View style={ styles.upperbar } >
            </View>

            {/* <View style={styles.homeIcon}>
                <Image source={require('../../icons/homeIcon.png')}/>
            </View> */}

            {/* Home Icon */}
            <TouchableOpacity onPress={ () => navigation.navigate('MainPage')}
            style={styles.homeIcon}>
                <Image style={styles.homeIcon2} source={require('../../../icons/homeIcon.png')}/>
            </TouchableOpacity>

            <Image  style = {styles.icon3}   
                    source = {require("../../../icons/LeafLogIn.png")}>        
            </Image>

            {/* User Information */}
            <TouchableOpacity onPress={ () => Alert.alert('See user information')} 
            style={styles.userLoc}>
                <Image source={require('../../../icons/User.png')}/>
            </TouchableOpacity>

            {/* Options */}
            <TouchableOpacity onPress={ () => Alert.alert('See Options')} 
            style={styles.optIcon}>
                <Image style={styles.optIcon2} source={require('../../../icons/OptionsIcon.png')}/>
            </TouchableOpacity>
        
            <ScrollView style={styles.listingBackground}>
                <Text style={{fontSize: 40, alignSelf: 'center'}}>
                    Algodão
                </Text>
                {/* THE LINE */}
                <View style={{  width: 300,
                                height: 1,
                                backgroundColor: 'black',
                                alignSelf: 'center',
                                marginTop: 5}}>
                </View>

            </ScrollView>
        
        
        </View>

        
        
    )
}

export default CottonDis