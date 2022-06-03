import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { colors } from "../global/styles"
import { Icon } from "react-native-elements"
import Home from "../screens/Home"
import MyOrders from "../screens/MyOrders"
import { ClientStack } from "./clientStack"
import MyAccountNavigator from './MyAccountNavigator'


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator 
        screenOptions={{

            tabBarActiveTintColor: colors.grey1,            
            
        }}
            >
            <ClientTabs.Screen
                name = "Home"
                component = {Home}
                options = {
                    {
                        tabBarLabel: "Дом",
                        headerShown: false,
                        tabBarIcon: ({color, size}) =>(
                            <Icon
                              name = 'home'
                              type = 'material'
                              color = {color}
                              size = {size}
                            />
                        )
                    }
                }
            />

            <ClientTabs.Screen
                name = "ClientStack"
                component = {ClientStack}
                options = {
                    {
                        tabBarLabel: "Поиск",
                        headerShown: false,
                        tabBarIcon: ({color, size}) =>(
                            <Icon
                              name = 'search'
                              type = 'material'
                              color = {color}
                              size = {size}
                            />
                        )
                    }
                }
            />


            <ClientTabs.Screen
                name = "MyOrders"
                component = {MyOrders}
                options = {
                    {
                        tabBarLabel: "Мои заказы",
                        headerShown: false,
                        tabBarIcon: ({color, size}) =>(
                            <Icon
                              name = 'view-list'
                              type = 'material'
                              color = {color}
                              size = {size}
                            />
                        )
                    }
                }
            />  


            <ClientTabs.Screen
                name = "MyAccountNavigator"
                component = {MyAccountNavigator}
                options = {
                    {
                        tabBarLabel: "Мой аккаунт",
                        headerShown: false,
                        tabBarIcon: ({color, size}) =>(
                            <Icon
                              name = 'person'
                              type = 'material'
                              color = {color}
                              size = {size}
                            />
                        )
                    }
                }
            /> 

        </ClientTabs.Navigator>
    )
}