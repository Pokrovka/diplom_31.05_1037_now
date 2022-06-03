import React from "react"
import {View,Text,StyleSheet,TouchableOpacity,
    Pressable,Image,} from "react-native"
import { Icon } from "react-native-elements"
import { colors,parameters } from "../global/styles"

export default function FoodCard({
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    numberOfReview,
    bisnessAddress,
    farAway,
    averageReview,
    images,
    screenWidth,
    onClick
}){


    return(
        <TouchableOpacity onPress={() => onClick()}>
                <View style = {{...styles.carsView, width:screenWidth}}>
                    <Image
                        style = {{...styles.image, width:screenWidth}}
                        source = {{uri:images}}
                    />
                    <View>
                    

                    <View style = {styles.block}>
                        <View>
                            <Text style = {styles.restaurantName}>{restaurantName}</Text>
                        </View>
                            {/* <View style = {styles.distance}>
                                <Icon
                                name = 'place'
                                type = 'material'
                                color = {colors.grey2}
                                size = {18}
                                iconStyle = {{
                                    marginTop:3
                                }}
                                />
                                <Text style = {styles.Min}> {farAway} Min</Text>
                            </View> */}
                            
                            <View style = {{flex:9}}>
                                <Text style = {styles.address}> | {bisnessAddress}</Text>
                            </View>

                         </View>
                    </View>

                </View>
            <View style = {styles.review}>
                <Text style = {styles.average}>{averageReview}</Text>
                <Text style = {styles.numberOfReview}>{numberOfReview} отзывы</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carsView:{
        marginHorizontal:10,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        backgroundColor:colors.headerText,
    }, 

    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:220,
        marginLeft:-1,
    },
    
    restaurantName:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:5,
        marginLeft:5,
    },

    distance:{
        flex:4,
        flexDirection:'row',
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1,
        marginLeft:0,
    },

    Min:{
        fontSize:12,
        fontWeight:"bold",
        paddingTop:5,
        color: colors.grey3
    },

    address:{
        fontSize:15,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:5,
        marginLeft:5,
    },

    review:{
        position:"absolute",
        top:0,
        right:10,
        backgroundColor:'rgba(52,52,52,0.3)',
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,

    },
     average:{
         color:"white",
         fontSize:20,
         fontWeight:"bold",
         marginTop:-3
     },

     numberOfReview:{
         color:"white",
         fontSize:13,
         marginRight:5,
         marginLeft:5,
         marginEnd:5,

     },

     block:{
         flex:1, 
         flexDirection:'row',
         marginHorizontal:10,
         marginVertical:10,
         justifyContent:'space-evenly',
         alignItems:'flex-end'
        },
})