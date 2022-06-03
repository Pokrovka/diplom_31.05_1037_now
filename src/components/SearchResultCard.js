import { StyleSheet, Text, View,
         ImageBackground,TouchableOpacity,FlatList,Dimensions } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import React from 'react'
import { colors } from '../global/styles'
import ProductCart from './ProductCart'

const SCREEN_WIDTH = Dimensions.get('window').width

const SearchResultCard = ({
    OnPressRestaurantCard,
    restaurantName,
    deliveryAvailabe,
    discountAvailabe,
    discountPercent,
    numberOfReview,
    bisinessAddress,
    farAway,
    averageReview,
    images,
    productData
}) => {


  return (
    <View>
        <TouchableOpacity 
            onPress = {OnPressRestaurantCard}
        >
            <View style ={{...styles.carsView}}>
                <View style = {{height:210}}>
                    <ImageBackground 
                        style = {{height:220}}
                        source = {{uri:images}}
                        imageStyle = {styles.imageStyle}
                    />

                    <View style = {styles.image}>
                        <Text style = {styles.text1}>{averageReview}</Text>
                        <Text style = {styles.text2}>{numberOfReview} отзывы</Text>
                    </View>
                </View>

                <View style = {styles.view3}>
                    <View style = {{flexDirection:"row",paddingBottom:2, marginHorizontal:10,justifyContent:'center',alignItems:'center'}}>
                        <View style = {{paddingTop:5}}>
                            <Text style = {styles.text5}>{restaurantName}</Text>
                        </View>
                       
                        <View style = {{flex:9}}>
                            <Text style = {styles.text6}> | {bisinessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

        <View style = {{marginTop:5,paddingBottom:20}}>
            <FlatList 
                style = {{backgroundColor:colors.cardbackground}}
                data = {productData}
                keyExtractor = {(item,index) => index.toString()} 
                renderItem = {({item,index}) => (
                    <ProductCart
                    image = {item.image}
                    productName = {item.name}
                    price = {item.price}
                    />
                )}
                horizontal = {true}
            />
        </View>
    </View>
  )
}

export default SearchResultCard

const styles = StyleSheet.create({

    carsView:{
        marginHorizontal:10,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        backgroundColor:colors.headerText
    }, 

    view1:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
    },

    image:{
        position:"absolute",
        top:0,
        right:0,
        
        backgroundColor:'rgba(52,52,52,0.4)',
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,
    },

    imageStyle:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        //height:220,
    },

    text1:{
        color:"white",
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3,
    },

    text2:{
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:0,
    },

    view2:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        marginTop:-5,
    },

    text3:{
        fontSize:10,
        fontWeight:'bold',
        color:colors.grey2,
    },

    text4:{
        fontSize:10,
        fontWeight:'bold',
        color:colors.grey2,
    },

    view3:{
        flexDirection:'column',
        marginHorizontal:5,
        marginBottom:10,
        marginLeft:10,
        marginTop:20,
    },

    text5:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,
    },

    view4:{
        flex:4,
        flexDirection:'row',
        borderRightWidth:1,
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
    },
    view5:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3
    },

    text6:{
        fontSize:15,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:5,
        marginLeft:5,
    }



})