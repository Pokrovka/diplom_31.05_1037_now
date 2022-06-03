import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors,parameters} from "../global/styles"
import {Icon, withBadge} from 'react-native-elements'




export default function HomeHeader({navigation}){

    return(
        <View style = {styles.header}>
            <View style ={{alignItems:"center",justifyContent:"center",marginLeft:15}}>
                <Icon
                type = "material-community"
                name = "menu"
                color = {colors.headerText}
                size = {32}
                onPress = {() =>{
                    navigation.toggleDrawer()
                }}
                />
            </View>
            
            <View style ={{alignItems:"center",justifyContent:"center"}}>
                <Text style ={{color:colors.cardbackground, fontSize:25,marginLeft:-25, fontWeight:"bold", color:colors.headerText}}>
                    Сладкоежка
                </Text>
            </View>

            <View style ={{alignItems:"center",justifyContent:"center",marginRight:20}}>
                <Icon
                type = "material-community"
                name = "cart"
                size = {0}
                color = {colors.headerText}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height:parameters.headerHeight,
        justifyContent: 'space-between'
    },
})