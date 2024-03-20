import { StatusBar } from 'expo-status-bar';
import { useRoute , useNavigation } from "@react-navigation/native"
import { TouchableOpacity, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView, Alert} from 'react-native';
import React, { Children } from 'react'
//import { Box, Button, Input } from 'native-base'
import { styles } from './styles';

//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'

const win = Dimensions.get('window')

const PredictionPage = ({navigation, route }) => {    
    img = route.params.selectedImage
    plant = route.params.plantType
    useNavigation()
    console.log(img, "in 03")
    return(
        <View style = { styles.container }>
            <View style={styles.upperbar} >
            </View>

            {/* <View style={styles.homeIcon}>
                <Image source={require('../../icons/homeIcon.png')}/>
            </View> */}

            {/* Home Icon */}
            <TouchableOpacity onPress={ () => navigation.navigate('MainPage')}
            style={styles.homeIcon}>
                <Image style={styles.homeIcon2} source={require('../../icons/homeIcon.png')}/>
            </TouchableOpacity>

            <Image  style = {styles.icon2}   
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


            {/* IMAGE SHOW */}
            <View style={{ position: 'absolute', top:  win.height/5.75, alignContent: 'center'}}>
                {img && <Image  style={{ alignSelf: 'center', position: 'absolute', width: 290, height: 270,}} 
                                source={{uri: img}}/>}
            </View>
        </View>
        
    )
}

export default PredictionPage