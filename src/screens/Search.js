import React, { useEffect, useState } from "react"

import { View,Text,StyleSheet,FlatList,
     TouchableWithoutFeedback, ImageBackground, Dimensions } from "react-native"
import SearchComponent from "../components/SearchComponent"
import { colors } from "../global/styles"
import { useNavigation } from "@react-navigation/native"
import firestore from '@react-native-firebase/firestore'



const SCREEN_WIDTH = Dimensions.get('window').width;

      
export default function Search(){

    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const func = async ()=> {
            const tempFilterData = await firestore().collection('cakeCategories').get();
            const tempFilterDocuments = tempFilterData.docs.map(doc => ({
                ...doc.data(), 
                id: doc.id
            }))
            setCategories(tempFilterDocuments)
        };
        func()
    }, [])

    return(
        <View style = {{flex:1,marginBottom:10, paddingTop:30}}>
            <SearchComponent/>
            <View style = {{marginTop:10}}>
                <View>
                    <FlatList
                        style = {{}}
                        data = {categories}
                        keyExtractor = {item => item.id}
                        renderItem = {({item}) =>(
                            <TouchableWithoutFeedback
                            onPress={()=> {
                                navigation.navigate("SearchResult",{item:item.name, itemId: item.id})
                            }}
                            >
                                <View style = {styles.imageView}>
                                    <ImageBackground
                                        style = {styles.image}
                                        source = {{uri:item.image}}
                                    >
                                        <View style = {styles.textView}>
                                            <Text style = {{color:colors.white, fontSize:26}}>{item.name}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableWithoutFeedback>
                        )}

                        horizontal = {false}
                        showsVerticalScrollIndicator = {false}
                        numColumns = {2}
                        // ListHeaderComponent = {
                        //     <Text style = {styles.listHeader}>Top Categories</Text>
                        // }
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageView :{
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035,
    },

    image:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10,
    },

    listHeader:{
        fontSize:16, 
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:12,
    },
    textView:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'rgba(52,52,52,0.3)',
    }
})