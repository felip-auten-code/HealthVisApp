import { createNativeStackNavigator } from  '@react-navigation/native-stack'
import LogIn from                           './components/UserLogIn/LogIn'
import MainPage from                        './components/MainPage'
import TakePhoto01 from                     './components/Prediction/TakePhoto01'
import TakePhoto02 from                     './components/Prediction/TakePhoto02'
import TakePhoto03 from                     './components/Prediction/TakePhoto03'
import PredictionPage from                  './components/Prediction/PredictionPage'
import ListHistory from                     './components/ListHistory'
import ListDiseases from                    './components/Diseases/ListDiseases'
import WheatDis from                        './components/Diseases/WheatDis'
import CornDis from                         './components/Diseases/CornDis'
import SoyDis from                          './components/Diseases/SoyDis'
import PotatoDis from                       './components/Diseases/PotatoDis'
import CottonDis from                       './components/Diseases/CottonDis'
import Register from                        './components/UserLogIn/Register'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='LogIn'>
            <Stack.Screen
            name = "LogIn"
            component = { LogIn }
            />
            <Stack.Screen
            name = "MainPage"
            component = { MainPage }
            />
            <Stack.Screen
            name = "TakePhoto01"
            component = { TakePhoto01 }
            />
            <Stack.Screen
            name = "TakePhoto02"
            component = { TakePhoto02 }
            />
            <Stack.Screen
            name = "TakePhoto03"
            component = { TakePhoto03 }
            //initialParams={result}
            />
            <Stack.Screen
            name = "PredictionPage"
            component = { PredictionPage }
            //initialParams={result}
            />
            <Stack.Screen
            name = "ListHistory"
            component = { ListHistory }
            />
            <Stack.Screen
            name = "ListDiseases"
            component = { ListDiseases }
            />
            <Stack.Screen
            name = "WheatDis"
            component = { WheatDis }
            />
            <Stack.Screen
            name = "CornDis"
            component = { CornDis }
            />
            <Stack.Screen
            name = "CottonDis"
            component = { CottonDis }
            />
            <Stack.Screen
            name = "SoyDis"
            component = { SoyDis }
            />
            <Stack.Screen
            name = "PotatoDis"
            component = { PotatoDis }
            />
            <Stack.Screen
            name = "Register"
            component = { Register }
            />
        </Stack.Navigator>  
    )
}