import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MyAccount from "../screens/MyAccount"
import EditMyAccount from '../screens/EditMyAccount'


const MyAccountPages = createStackNavigator();

export default function MyAccountNavigator(){

    return(
        <MyAccountPages.Navigator>
            <MyAccountPages.Screen
                name = "MyAccount"
                component = {MyAccount}
                options ={() => ({
                    headerShown:false
                    })
                }
            />
            <MyAccountPages.Screen
                name = "EditMyAccount"
                component = {EditMyAccount}
                options ={() => ({
                    headerShown:false
                    })
                }
            />
        </MyAccountPages.Navigator>
    )
}