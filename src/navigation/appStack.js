import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import RestaurantMap from '../screens/RestaurantMap';
import DrawerNavigator from './DrawerNavigator';

const App = createStackNavigator();

export function AppStack(){

return(
    <App.Navigator>
        <App.Screen 
        name ="App"
        component ={DrawerNavigator}
        options ={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        /> 

        <App.Screen 
        name ="RestaurantMap"
        component = {RestaurantMap}
        options ={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        /> 

    </App.Navigator>
)
}