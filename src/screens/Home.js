import React,{useState, useEffect} from "react"
import {View,Text,StyleSheet,TouchableOpacity,TouchableWithoutFeedback,
    ScrollView,FlatList,Pressable,Image, Dimensions, StatusBar} from "react-native"
import {Icon} from 'react-native-elements'
import {colors} from "../global/styles"
import HomeHeader from '../components/HomeHeader'
import FoodCard from "../components/FoodCard"
import firestore from '@react-native-firebase/firestore'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function Home({navigation}){
    
const [categories, setCategories] = useState([])
const [shops, setShops] = useState([])
const [indexCheck, setIndexCheck] = useState("0")

useEffect(() => {  
    const fetch = async () => {
        
        const tempFilterData = await firestore().collection('cakeCategories').get();
        const tempFilterDocuments = tempFilterData.docs.map(doc => ({
            ...doc.data(), 
            id: doc.id
        }))
        setCategories(tempFilterDocuments);

        const tempShopsData = await firestore().collection('cakeShops').get();
        const tempShopsDocuments = tempShopsData.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }))
        setShops(tempShopsDocuments);
    }
    fetch()
}, [])

    return(
 <View style ={styles.container}>
            <StatusBar
                translucent
                barStyle = "light-content"
                backgroundColor = {colors.buttons}
            />
            <HomeHeader navigation = {navigation}/>
    <ScrollView
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator = {true}
    >
        <View>

        </View>
        <View style = {styles.headerTextView}>
            <Text style ={styles.headerText}>Категории</Text>
        </View>

        <View>
            <FlatList
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {categories}
                keyExtractor = {(item => item.id)}
                extraData = {indexCheck}
                renderItem = {({item,index}) =>(
                    <Pressable
                        onPress = {() => {
                            navigation.navigate('ClientStack'); 
                            navigation.navigate('SearchResult', {item: item.name, itemId: item.id}); 
                            setIndexCheck(item.id)}}
                    >
                        <View style = {indexCheck == item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                            <Image
                                style = {{height:75,width:75,borderRadius:20}}
                                source = {{uri: item.image}}
                            />
                            <View>
                                <Text style = {indexCheck == item.id ? {...styles.smallCardSelectedText}:
                                {...styles.smallCardText}}>{item.name}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}   
            />
        </View>
        <View style = {styles.headerTextView}>
            <Text style = {styles.headerText}>Кафе поблизости</Text>
        </View>
    
        <View style = {{width:SCREEN_WIDTH,paddingTop:10}} >
            { 
                shops.map( item => (
                <View key ={item.id} style = {{paddingBottom:20}}>
                    <FoodCard
                        screenWidth = {SCREEN_WIDTH*0.95}
                        images = {item.images}
                        restaurantName = {item.restaurantName}
                        farAway = {item.farAway}
                        bisnessAddress = {item.businessAddress}
                        averageReview = {item.averageReview}
                        numberOfReview = {item.numberOfReview}
                        onClick = {async () => {
                            await navigation.navigate('ClientStack');
                            navigation.navigate('RestaurantHome', {
                                restaurant: item.restaurantName, 
                                id: item.id
                            }); 
                        }}
                    />
                 
                    </View>
                )
                )
            }

        </View>
    </ScrollView>

    <View style = {styles.floatButton}>
        <TouchableOpacity
                onPress={(item) => {
                    navigation.navigate('RestaurantMap',{
                        restaurantName:item.restaurantName
                    })
                }}
        >
                <Icon
                    name = "place"
                    type = 'material'
                    size = {32}
                    color = {colors.buttons}

                />
                <Text style = {{color:colors.grey2}}>Карта</Text>
        </TouchableOpacity>
    </View>

</View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        backgroundColor:colors.back
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5,
    },
    
    deliveryText:{
        marginLeft:5,
        fontSize:16,
    },
    addressView:{
        flexDirection:"row",
        backgroundColor:colors.grey5,
        borderRadius:20,
        justifyContent:"space-between",
        paddingHorizontal:30,
        paddingVertical:5,
    },
    filterView:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:20,
        justifyContent:"space-evenly",
        marginHorizontal:10,
    },
    clockView:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:20,
        backgroundColor:colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20,

    },
    headerText:{
        color:colors.grey1,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:20,
    },

    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:5,
    },

    smallCard:{
        borderRadius:20,
        backgroundColor:colors.grey4,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:90,
        margin:10,
        height:120,
    },

    smallCardSelected:{
        borderRadius:20,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:90,
        margin:10,
        height:120,  
    },

    smallCardText:{
        fontWeight:"bold",
        marginTop:2,
        color: colors.grey1,
    },

    smallCardSelectedText:{
        fontWeight:"bold",
        marginTop:2,
        color: colors.cardbackground,

    },

    floatButton:{
        position:'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:65, height:65,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
  })