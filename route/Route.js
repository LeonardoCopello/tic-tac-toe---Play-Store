import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../src/screens/HomePage'
import GameScreen from '../src/screens/GameScreen'
import ShowPlayers from '../src/screens/ShowPlayers'
import { Colors } from '../constants/colors'

export default function Route() {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.headerBG,
                },
                headerTintColor: Colors.headerTitle,
                contentStyle: {
                    backgroundColor: Colors.headerBG
                }
            }}
            >
                <Stack.Screen
                options={{
                    title: 'Escolha seu Avatar'
                }}
                name="HomePage" component={HomePage}/>
                <Stack.Screen
                options={{
                    title: 'Lutadores'
                }}
                name="ShowPlayers" component={ShowPlayers}/>
                <Stack.Screen
                options={{
                    title: 'Que vença o melhor!'
                }}
                name="GameScreen" component={GameScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}