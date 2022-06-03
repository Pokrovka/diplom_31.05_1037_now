import React from "react"
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SignInWelcome from "../screens/authScreens/SignInWelcome";
import SignIn from "../screens/authScreens/SignIn";
import SignUp from "../screens/authScreens/SignUp";

const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
               name="SignInWelcome"
               component={SignInWelcome}
               options = {{
                   headerShown: false,
                   ...TransitionPresets.RevealFromBottomAndroid
               }}
            />

            <Auth.Screen
               name="SignIn"
               component={SignIn}
               options = {{
                   headerShown: false,
                   ...TransitionPresets.RevealFromBottomAndroid
               }}
            />

            <Auth.Screen
               name="SignUp"
               component={SignUp}
               options = {{
                   headerShown: false,
                   ...TransitionPresets.RevealFromBottomAndroid
               }}
            />

        </Auth.Navigator>
    )
}
