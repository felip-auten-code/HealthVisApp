import { StatusBar } from 'expo-status-bar';
import { Button, TouchableOpacity, SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView, Alert} from 'react-native';
import React, { Children } from 'react'
//import { Box, Button, Input } from 'native-base'
import { styles } from './styles';


//import { Form } from 'react-native-bootstrap/Form'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'

const TakePhoto01 = ({navigation, route}) => {
    let plant = '0'
    return(
        
        <View style = { styles.container }>
            <View style={styles.upperbar} >
            </View>
            <Image  style = {styles.icon3}   
                    source = {require("../../icons/LeafLogIn.png")}>        
            </Image>
            <View style = { styles.textPhoto1 } >
                <Image source={require('../../icons/textPhoto01.png')} />
            </View>

            {/* <View style={styles.homeIcon}>
                <Image source={require('../../icons/homeIcon.png')}/>
            </View> */}

            {/* Home Icon */}
            <TouchableOpacity onPress={ () => navigation.navigate('MainPage')}
            style={styles.homeIcon}>
                <Image style={styles.homeIcon2} source={require('../../icons/homeIcon.png')}/>
            </TouchableOpacity>


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
            

            <View style= {styles.selecPlant}>
                <Button  color='#16441D'
                title='TRIGO'
                onPress={ () => {   plant = '1', Alert.alert('${plant}') , 
                                    navigation.navigate('TakePhoto02',  {plantType: plant})} } 
                textcolor = 'black'
                >
                </Button>

                <View style={{margin: 15}}></View>
                
                <Button  color='#16441D'
                title='SOJA'
                onPress={  () => {  Alert.alert('Selected SOJA'),
                                    plant = '2',
                                    navigation.navigate('TakePhoto02',  {plantType: plant})}} 
                textcolor = 'black'
                >
                </Button>

                <View style={{margin: 15}}></View>
                
                <Button  color='#16441D'
                title='MILHO'
                onPress={ () => {   Alert.alert('Selected MILHO'),
                                    plant = '3',
                                    navigation.navigate('TakePhoto02', {plantType: plant})}} 
                textcolor = 'black'>
                </Button>

                <View style={{margin: 15}}></View>
                
                <Button  color='#16441D'
                title='BATATA'
                onPress={ () => {   Alert.alert('Selected BATATA'),
                                    plant = '4',
                                    navigation.navigate('TakePhoto02', {plantType: plant})}} 
                textcolor = 'black'>
                </Button>

                <View style={{margin: 15}}></View>
                
                <Button  color='#16441D'
                title='ALGODÃO'
                onPress={ () => {   Alert.alert('Selected ALGODÃO'),
                                    plant = '5',
                                    navigation.navigate('TakePhoto02', {plantType: plant})}} 
                textcolor = 'black'
                >
                </Button>
                              
            </View>

        </View>
        
    )
}

export default TakePhoto01