import React, {useState,useRef, useEffect} from "react";
import {StyleSheet, Text, View,TouchableWithoutFeedback, 
    Modal, TextInput, FlatList, TouchableOpacity, Keyboard} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import {Icon } from "react-native-elements";
import {colors} from '../global/styles'
import firestore from '@react-native-firebase/firestore'
import filter from 'lodash/filter';


export default function SearchComponent(){
        
        const navigation = useNavigation();

        const [modalVisible,setModalVisible] = useState(false)
        const [textInputFossued,setTextInputFossued] = useState(true)
        const [categories,setCategories] = useState([])
        const [data,setData] = useState([])
        const textInput = useRef(0)
        
        useEffect(() => {
            const func = async ()=> {
                const tempFilterData = await firestore().collection('cakeCategories').get();
                const tempFilterDocuments = tempFilterData.docs.map(doc => ({
                    ...doc.data(), 
                    id: doc.id
                }))
                setCategories(tempFilterDocuments)
                setData(tempFilterDocuments)
            };
            func()
        }, [])


        const contains = ({name}, query) => {
            if(name.includes(query)){
                return true
            }
            return false
        }

        const handleSearch = text => {
            const dataS = filter(categories, userSearch => {
                return contains(userSearch, text)
            })

            setData([...dataS])
        }

    return(
        <View style = {{alignItems:'center'}}>
            <TouchableWithoutFeedback
                onPress = {() =>{
                    setModalVisible(true)
                }}
            >
                <View style = {styles.SearchArea}>
                    <Icon
                        name = "search"
                        style = {styles.searchIcon}
                        type = 'material'
                        iconStyle = {{marginLeft:15}}
                        size = {32}
                    />
                    <Text style ={{fontSize:15}}>Что вы ищите?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
                animationType = "fade"
                transparent = {false}
                visible = {modalVisible}
            >
                    <View style = {styles.modal}>
                        <View style = {styles.view1}>
                            <View style = {styles.TextInput}>
                                <Animatable.View
                                    // animation = {textInputFossued ? "fadeInRight" : "fadeInLeft"}
                                    // duration = {300}
                                    >
                                    <Icon
                                        name = {textInputFossued ? "arrow-back" : "search"}
                                        onPress = {() => {
                                            if (textInputFossued)
                                            setModalVisible(false)
                                            setTextInputFossued(true)
                                        }}
                                        style = {styles.icon2}
                                        type = "material"
                                        iconStyle = {{marginRight:5}}
                                    />
                                </Animatable.View>

                                <TextInput
                                    style = {{width:"90%"}}
                                    placeholder = ""
                                    autoFocus = {false}
                                    ref = {textInput}

                                    onFocus = {() => {
                                        setTextInputFossued(true)
                                    }}
                                    onBlur = {() => {
                                        setTextInputFossued(false)
                                    }}

                                    onChangeText = {handleSearch}
                                />

                                <Animatable.View
                                    // animation = {textInputFossued ? "fadeInLeft" : ""}
                                    // duration = {300}
                                >
                                    <Icon
                                        name = {textInputFossued? "cancel": null}
                                        iconStyle = {{color:colors.grey1}}
                                        type = "material"
                                        style = {{marginRight:-10}}
                                        onPress ={() => {
                                            textInput.current.clear()
                                            //handSearch()
                                        }}
                                    />
                                </Animatable.View>
                            </View>
                        </View>
        <Text>{data.length || 0}</Text>
        <FlatList
            data = {data}
            renderItem = {({item}) => (
                <TouchableOpacity
                onPress = {() =>{
                    Keyboard.dismiss
                    navigation.navigate("SearchResult", {item:item.name})
                    setModalVisible(false)
                    setTextInputFossued(true)
                }}
                >
                    <View style = {styles.view2}>
                        <Text style = {{color:colors.grey1,fontSize:15}}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor = {item => item.id}
        />
                    </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    text1:{
        color:colors.grey3,
        fontSize:16
    },

    TextInput:{
        borderWidth:2,
        borderRadius:30,
        marginHorizontal:0,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:20,
        paddingRight:20,
    },

    SearchArea:{
        marginTop:10,
        width:"94%",
        height:50,
        backgroundColor:"#e1e5ea",
        borderRadius:30,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:"row",
        alignItems:"center"
    },

    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey2,
    },
    view1:{
        height:70,
        justifyContent:"center",
        paddingHorizontal:10,
        borderColor:colors.buttons,
    },

    view2:{
        flexDirection:"row",
        padding:15,
        alignItems:'center'
    },

    icon2:{
        fontSize:24,
        padding:5,
        color:colors.grey2,
    },

    modal:{
        flex:1,
    }
})