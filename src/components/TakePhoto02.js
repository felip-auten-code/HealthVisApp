import { StatusBar } from 'expo-status-bar';
import { Button, TouchableOpacity, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView, Alert} from 'react-native';
import React, { Children , useState} from 'react'
//import { Box, Button, Input } from 'native-base'
import { styles } from './styles';
import * as ImagePicker from "expo-image-picker"


//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'


let result = {}





const TakePhoto02 = ({navigation}) => {  
    const [image, setImage] = useState() 
    const saveImage = async (image) => {
        try {
            setImage(image)
        } catch (error) {
            throw error
        }
    }

    const uploadPhoto = async (mode) => {

        if(mode == "gallery"){
            await ImagePicker.requestMediaLibraryPermissionsAsync()
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            })
        } else {
            try{
                await ImagePicker.requestCameraPermissionsAsync()
                result = await ImagePicker.launchCameraAsync({
                    cameraType: ImagePicker.CameraType.back,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                })
                if (!result.canceled) {
                    await saveImage(result.assets[0].uri)
                }
            } catch (error) {
        
            }
        }

        
    }
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

            <View style={{width: 300}}>
                <Button title="Use Camera" color= 'black'
                        onPress={ () => {uploadPhoto() , navigation.navigate('TakePhoto03', {result})}}
                       ></Button>
                
                <View style={{margin: 15}}></View>

                <Button title="Gallery" color= 'black'
                        onPress={() => {uploadPhoto("gallery") , navigation.navigate('TakePhoto03') }}
                        ></Button>
            </View>
        </View>
        
    )
}

export default TakePhoto02