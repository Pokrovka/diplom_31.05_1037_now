import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors,parameters} from "../global/styles"
import {Icon} from 'react-native-elements'




export default function MapHeader({navigation}){
    return(
        <View style = {{}}>
            <View style ={styles.view1}>
                <Icon 
                    name ="arrow-left"
                    type = "material-community"
                    color = {colors.white}
                    size = {25}
                    onPress ={()=>navigation.goBack()}
                />
                <Text style ={styles.text1}>Карта</Text>
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:colors.grey4
    },
    
    view1:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:colors.buttons,
        paddingTop:40,
        paddingLeft:30,
    },
    
    text1:{
        fontWeight:"bold",
        marginLeft:40,
        color:colors.white,
        fontSize:18
    },
})