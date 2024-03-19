import { StatusBar } from 'expo-status-bar';
import { PopupMenu, TouchableOpacity, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView, Alert, Modal} from 'react-native';
import React, { Children , useState } from 'react'
//import { Box, Button, Input } from 'native-base'
import { styles } from './styles';

//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'

const MainPage = ({navigation}) => {
    const [visible, setVisible] = useState(false)
    const options = []
    const win = Dimensions.get('window')
    return(
        <View style = { styles.container }>
            <View style={styles.upperbar} >
                {/* <Image source={require('../../icons/upperBar.png')}/> */}
            </View>

            {/* Home Icon */}
            <TouchableOpacity   onPress={ () => Alert.alert('Go to home')}
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
            <TouchableOpacity onPress={ () => setVisible(true)} 
            style={styles.optIcon}>
                <Image  style={styles.optIcon2} source={require('../../icons/OptionsIcon.png')}/>
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
            <TouchableOpacity   onPress={ () => navigation.navigate('ListDiseases')} 
                                style={styles.DoencaIcon}>
                <Image source={require('../../icons/DoencaIcon.png')}/>
            </TouchableOpacity>

        
            <Modal  transparent={true} visible={visible} animationType="slide" >
                <SafeAreaView style={{flex: 1}}  onTouchStart={() => setVisible(false)}>
                    <View style={{backgroundColor: 'white', top: 10, height:200, alignSelf:'center', width: win.width, alignItems: 'center'}}>
                        <Text onPress={() => navigation.navigate('ListHistory')}>
                            HELLO
                        </Text>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
        
        
    )
}


export default MainPage