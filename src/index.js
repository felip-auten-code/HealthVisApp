import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from        './components/LogIn'
import MainPage from     './components/MainPage'
import TakePhoto01 from  './components/TakePhoto01'
import TakePhoto02 from  './components/TakePhoto02'
import TakePhoto03 from  './components/TakePhoto03'
import PredictionPage from './components/PredictionPage'
import ListHistory from  './components/ListHistory'
import ListDiseases from './components/ListDiseases'

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
            <Stack.Screen
            name = "TakePhoto01"
            component = {TakePhoto01}
            />
            <Stack.Screen
            name = "TakePhoto02"
            component = {TakePhoto02}
            />
            <Stack.Screen
            name = "TakePhoto03"
            component = {TakePhoto03}
            //initialParams={result}
            />
            <Stack.Screen
            name = "PredictionPage"
            component = {PredictionPage}
            //initialParams={result}
            />
            <Stack.Screen
            name = "ListHistory"
            component = {ListHistory}
            />
            <Stack.Screen
            name = "ListDiseases"
            component = {ListDiseases}
            />
        </Stack.Navigator>  
    )
}