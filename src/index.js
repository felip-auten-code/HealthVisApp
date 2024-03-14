import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './components/LogIn'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "LogIn"
            component = {LogIn}
            />
                
           
        </Stack.Navigator>  
    )
}
