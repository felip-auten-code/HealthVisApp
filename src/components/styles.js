import { StatusBar } from 'expo-status-bar';
import { SafeAreaView , ScrollView,  Keyboard, TouchableWithoutFeedback, Platform, StyleSheet, Text, View , Image, Dimensions, TextInput , KeyboardAvoidingView} from 'react-native';
import React, { Children } from 'react'
//import { Box, Input } from 'native-base'

const win = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C8547',
        alignItems: 'center',
        paddingHorizontal: 0,
        justifyContent: 'center',
    },
    containner2: {
        flex: 1,
        backgroundColor: '#3C8547',
        alignItems: 'center',
    },
    scrollview: {
        marginHorizontal: 20,
        top: 200,
        position: "absolute",
    },
    TitleText: {
        flex: 1,
        fontSize: 60,
        fontFamily: "normal",
        alignSelf: 'center',
        color: 'white',
        top: 30,
    },  
    icon: {
        alignSelf: 'center',
        top: 180,
        objectFit: "cover",
        position: "absolute",
      //justifycontent: "flex-start",
      
    },
    icon2: {
        alignSelf: 'center',
        top: 200,
        objectFit: "cover",
        position: "absolute",
        resizeMode: 'center',
        width: 620,
        height: 620,
    },
    icon3: {
        alignSelf: 'center',
        top: 250,
        objectFit: "cover",
        position: "absolute",
        resizeMode: 'center',
        width: 420,
        height: 420,
    },
    input: {
        top: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        position: "absolute",
        color: 'black',
        backgroundColor: 'white',
        borderColor: "white",
        borderRadius: 55,   
        width: 240,   
    },
    inputPass: {
        top: 20 + 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        position: "absolute",
        color: 'black',
        backgroundColor: 'white',
        borderColor: "white",
        borderRadius: 50,    
        width: 240, 
    },
    input2: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,   
    },
    buttonEntry: {
        top: 520,
        width: 100,
        height: 280,
        left: 200,
        position: 'absolute',
    },
    buttonInsert: {
        top: 520,
        width: 100,
        height: 280,
        left: 60,
        position: 'absolute',
    },
    userLoc: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    upperbar: {
        top: 0,
        left: 0,
        position: 'absolute',
        color: 'green',
        backgroundColor: 'white',
        borderBlockColor: 'black',
        borderRadius: 5,
        width: win.width,
        height: 80,
        
    },
    homeIcon: {
        position: 'absolute',
        alignSelf: 'center',
        top: 25,
    },
    homeIcon2: {
        resizeMode: 'contain',
        width: 35,
        height: 35,
    },
    optIcon: {
        position: 'absolute',
        top: 25,
        left: win.width - 45,
    },
    optIcon2:{
        resizeMode: 'contain',
        height: 30,
        width: 30,
    },
    photoIcon: {
        position: 'absolute',
        top: 180,
        left:  2.2*win.width/10 -126.4/2,
    },
    ListIcon: {
        position: 'absolute',
        top: 180 + 20,
        left: 7*win.width/10 -126.4/2,
        
    },
    DoencaIcon: {
        position: 'absolute',
        top: 180 + 20 + 180,
        left: 7*win.width/10 -126.4/2,
    },
    textPhoto1: {
        alignSelf: 'center',
        top: 120,
        position: 'absolute',
    },
    selecPlant: {
        position: 'absolute',
        top: 270,
        resizeMode: 'center',
        width: 250,
        height: 300,
        paddingTop: 20,
        borderEndColor: '#16441D',
        borderRadius: 100,
    }
})