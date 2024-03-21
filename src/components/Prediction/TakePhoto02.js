import { StatusBar } from 'expo-status-bar';
import { Button, TouchableOpacity, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView, Alert} from 'react-native';
import React, { Children , useState} from 'react'
//import { Box, Button, Input } from 'native-base'
import { styles } from '../Styles/styles';
import * as ImagePicker from "expo-image-picker"
import { useNavigation } from '@react-navigation/native';


//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'
const win = Dimensions.get('window')

let result = {}


const TakePhoto02 = ({navigation, route}) => {  
    useNavigation()
    const [image, setImage] = useState(null) 
    typePlant = route.params.plantType
    console.log(typePlant)
  
    const saveImage = async (imagem) => {
        try {
            setImage(imagem)
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
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    cameraType: ImagePicker.CameraType.back,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                })
                
            } catch (error) {
        
            }
        }
        if (!result.canceled) {
            console.log(result.assets[0].uri)
            setImage(result.assets[0].uri)
            //navigation.navigate('TakePhoto03', {selectedImage: image})}
        }

    }
    
    return(
        <SafeAreaView style = { styles.container }>
            
            <Image  style = {styles.icon2}   
                    source = {require("../../../icons/LeafLogIn.png")}>        
            </Image>

            <View style={styles.upperbar} >
            </View>


            {/* <View style={styles.homeIcon}>
                <Image source={require('../../icons/homeIcon.png')}/>
            </View> */}

            {/* Home Icon */}
            <TouchableOpacity onPress={ () => navigation.navigate('MainPage')}
            style={styles.homeIcon}>
                <Image style={styles.homeIcon2} source={require('../../../icons/homeIcon.png')}/>
            </TouchableOpacity>

            

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

            <View style={{ position: 'absolute', width: 300, top: 150}}>
                <Button title="Use Camera" color= 'black'
                        onPress={ () => { uploadPhoto() }}
                >
                </Button>
                
                <View style={{margin: 15}}></View>

                <Button title="Gallery" color= 'black'
                        onPress={ () => { uploadPhoto("gallery")  }}
                        
                >
                </Button>
            </View>

            <View style={{position: 'absolute', top: win.height/2.8, alignSelf: 'center',
                            backgroundColor: 'white', width: 300, height: 300, borderRadius: 10
                            }}>
                {image && <Image
                                style={{flex: 1, position: 'absolute', bottom: 100, 
                                width: 250, height: 250, alignSelf: 'center', margin: -70}}
                                source={{uri: image}} />}
            </View> 

            <View style= {{ position: 'absolute', 
                            top: win.height/1.29, 
                            alignSelf: 'center', 
                            backgroundColor: 'transparent', 
                            width: 200, 
                            height: 100,
                            flex: 1 }}>
                
                <Button title= "ESCOLHER ESTA FOTO" color={'black'}
                        onPress={() => {navigation.navigate('TakePhoto03', {selectedImage: image, plantType: typePlant})} }>

                </Button>
            </View>
            
        </SafeAreaView>
    )
}

export default TakePhoto02