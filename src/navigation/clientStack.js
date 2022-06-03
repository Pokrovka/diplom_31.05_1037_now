import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Search from '../screens/Search'
import SearchResult from '../screens/SearchResult'
import RestaurantHome from '../screens/RestaurantHome'
import { getFocusedRouteNameFromRoute  } from '@react-navigation/native'
import MenuProduct from '../screens/MenuProduct'
import Preference from '../screens/Preference'


const ClientSearch = createStackNavigator()

export function ClientStack({navigation, route}) {

    useLayoutEffect(() =>{
        const routeName = getFocusedRouteNameFromRoute(route);

        if(routeName === "RestaurantHome" || "MenuProduct"){
            navigation.setOptions({tabBarVisible:false})
        }
        else {
            navigation.setOptions({tabBarVisible:true})
        }
    },[navigation, route])

  return (
    <ClientSearch.Navigator >
        <ClientSearch.Screen
            name='Search'
            component={Search}
            options ={() => ({
                headerShown:false
                })
            }
        /> 
        <ClientSearch.Screen
            name='SearchResult'
            component={SearchResult}
            options ={() => ({
                headerShown:false
                })
            }
        />  

        <ClientSearch.Screen
            name='RestaurantHome'
            component={RestaurantHome}
            options ={() => ({
                headerShown:false
                })
            }
        />  

        <ClientSearch.Screen
            name='MenuProduct'
            component={MenuProduct}
            options ={() => ({
                headerShown:false
                })
            }
        /> 

        <ClientSearch.Screen
            name='Preference'
            component={Preference}
            options ={() => ({
                headerShown:false
                })
            }
        /> 

    </ClientSearch.Navigator>
  )
}

const styles = StyleSheet.create({})