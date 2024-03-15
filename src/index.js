import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './components/LogIn'
import MainPage from './components/MainPage'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='LogIn'>
            <Stack.Screen
            name = "LogIn"
            component = {LogIn}
            />
            <Stack.Screen
            name = "MainPage"
            component = {MainPage}
            />
        </Stack.Navigator>  
    )
}