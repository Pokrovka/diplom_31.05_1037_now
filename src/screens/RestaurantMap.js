import React, {useEffect,useState} from "react"
import { View,Text,StyleSheet,TouchableOpacity,FlatList, 
    Dimensions,Pressable, Image, ScrollView} from "react-native"
import MapView from "react-native-maps";
import { colors } from "../global/styles";
import MapHeader from "../components/MapHeader";
import firestore from '@react-native-firebase/firestore'

import { Marker } from 'react-native-maps';




const SCREEN_WIDTH = Dimensions.get('window').width



export default function RestaurantMap({route,navigation}){

    const {restaurantName} = route.params;


    const [categories, setCategories] = useState([])
    const [shops, setShops] = useState([])
    const [delivery, setDelivery] = useState(true)
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

    const [region, setRegion] = useState({
        latitude: 55.7887,
        longitude: 49.1221,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

        const ShocoRegion = {
        latitude: 55.78757440675863,
        longitude: 49.12446474900875,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        };
        const KazanRegion = {
            latitude: 55.7887,
            longitude: 49.1221,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            };

    return(
        <View style = {styles.container}>

<MapView
                style={styles.map}
                initialRegion={KazanRegion}
                //onRegionChangeComplete runs when the user stops dragging MapView
                onRegionChangeComplete={(region) => setRegion(region)}
            />


            <MapView
                style={styles.map}
                initialRegion={KazanRegion} 
            >
                {shops.map(item => {
                    console.log(item.coordinates);
                    return (<Marker 
                        key={item.id}
                        coordinate = {{latitude: item.coordinates._latitude, longitude: item.coordinates._longitude}}
                        title = {item.restaurantName}
                        onPress = {async () => {
                            await navigation.navigate('ClientStack');
                            navigation.navigate('RestaurantHome', {
                                restaurant: item.restaurantName, 
                                id: item.id
                            }); 
                        }}
                    />)})}
                    
                </MapView>
            {/* <MapHeader navigation = {navigation}/>
            <MapView
                style = {styles.map}
                initialRegion={{
                    latitude: 55.7887,
                    longitude: 49.1221,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}

            /> */}

            <ScrollView
                stickyHeaderIndices={[0]}
                showsHorizontalScrollIndicator = {true}
                style = {styles.floatButton}
            >
                    <FlatList
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        data = {shops}
                        keyExtractor = {(item => item.id)}
                        extraData = {indexCheck}
                        renderItem = {({item,index}) =>(
                            <Pressable 
                            onPress = {async () => {
                                await navigation.navigate('ClientStack');
                                navigation.navigate('RestaurantHome', {
                                    restaurant: item.restaurantName, 
                                    id: item.id
                                }); 
                            }}
                            >
                                <View style = {styles.smallCard}>
                                    <Image
                                        style = {styles.image}
                                        source = {{uri: item.images}}
                                    />
                                    <View style = {styles.block}>
                                        <View style = {{alignItems:"center",justifyContent:'center'}}>
                                            <Text style = {styles.smallCardText}>{item.restaurantName}</Text>
                                        </View>
                                        <View style = {{alignItems:"center",justifyContent:'center'}}>
                                            <Text style = {styles.address}>{item.businessAddress}</Text>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />

            </ScrollView>
       </View>    
    )
}

const styles = StyleSheet.create({
    map1:{
        width:"100%",
        height:"94%",
    },

    floatButton:{
        position:'absolute',
        bottom:50,
        width:"100%", 
        height:200,

    },

    smallCard:{
        borderRadius:20,
        borderColor:colors.back,
        borderWidth:2,
        backgroundColor:colors.white,
        // justifyContent:"center",
        // alignItems:"center",
        width:250,
        margin:10,
        height:170,
    },

    smallCardText:{
        fontSize:15,
        fontWeight:"bold",
        color: colors.buttons,
        bottom:10,

    },

    image:{
        height:120,
        width:245,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },

    block:{
        flex:1, 
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        bottom:10,
       },

       address:{
        fontSize:12,
        fontWeight:"bold",
        color: colors.grey1,
        bottom:10,

    },
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 2, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
      },

      map: {
        ...StyleSheet.absoluteFillObject,
      },
})