import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Dimensions, TextInput} from 'react-native';
import React from 'react'
//import { TextInput } from 'react-native-paper';
//import styles from './styles'

const win = Dimensions.get('window')

const LogIn = () => {
    const [text, onChangeText] = React.useState('')
    const [textPass, onChangeText2] = React.useState('')
    return(
        <View style={styles.container}>
            <StatusBar style = "auto" />
            <Image  style = {styles.icon2}   
                    source = {require("../../icons/LeafLogIn.png")}>
                         
            </Image>


            <View style = {styles.userLogIn}>
                <Text style = {styles.userLogIn}>
                    Health Vision
                </Text>
            </View>
            <Image  style = {styles.icon}   
                    source = {require("../../icons/iconInit.png")}>
                         
            </Image>
            
            
            <TextInput  style = { styles.input }
                        onChangeText = {onChangeText}
                        value = {text}
                        placeholder = "Username"            
            />
            <TextInput  style = { styles.inputPass }
                        onChangeText = {onChangeText2}
                        value = {textPass}
                        placeholder = "Password"            
            ></TextInput>
            
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C8547',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userLogIn: {
        flex: 1,
        fontSize: 60,
        fontFamily: "normal",
        alignSelf: 'center',
        color: 'white',
        top: win.height/40,
    },  
    icon: {
        alignSelf: 'center',
        top: Number(win.height/4),
        objectFit: "cover",
        position: "absolute",
        justifycontent: "flex-start",
        
    },
    icon2: {
        alignSelf: 'center',
        top: 200,
        objectFit: "cover",
        position: "absolute",
        resizeMode: 'style',
        width: 700,
        height: 700
    },
    input: {
        top: win.height/2,
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
        top: win.height/2 + 60,
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
});

export default LogIn