import React, {useState, useContext, useEffect} from "react";
import { View, Text, Linking,Pressable,Alert, Switch, StyleSheet,TouchableOpacity} from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar,Icon } from "react-native-elements";
import { colors } from "../global/styles";
import auth from '@react-native-firebase/auth'
import {SignInContext} from '../contexts/authContext'

export default function DrawerContent(props){

    const {signedIn, dispatchSignedIn} = useContext(SignInContext)


    async function signOut(){
            try{
                auth()
                .signOut()
                .then(
                    () => {console.log("USER SUCCESSFULLY SINGED OUT")
                    dispatchSignedIn({type:"UPDATE_SIGN_IN", payload:{userToken:null}})
                })

            }catch(error){
                Alert.alert(err.code)
            }
    }

    return(
        <View style = {styles.container}>
            <DrawerContentScrollView {...props}>
            <View style = {{backgroundColor:colors.buttons}}>
                <View style = {{flexDirection:"row", alignItems:"center",
                      paddingLeft:20,paddingVertical:15}}>
                    <Avatar
                        rounded
                        avatarStyle={styles.avatar}
                        size = {75}
                        source = {{uri:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"}}
    
                    />
                    <View style = {{marginLeft:10}}>
                        <Text style = {{fontWeight:"bold", color:colors.cardbackground,fontSize:15}}>{`${signedIn.name ?? ''} ${signedIn.surname ?? ''}`}</Text>
                        <Text style = {{color:colors.cardbackground,fontSize:14}}>{`${signedIn.email}`}</Text>

                        </View>
                    
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-evenly",paddingBottom:5}}>
                <View style = {{flexDirection:"row", marginTop:0}}>
                        <View style = {{marginLeft:10, alignItems:"center", justifyContent:"center"}}>
                            <Text style = {{fontWeight:"bold", color:colors.cardbackground,fontSize:18}}>0</Text>
                            <Text style = {{color:colors.cardbackground,fontSize:14}}>Избранное</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection:"row", marginTop:0}}>
                        <View style = {{marginLeft:10, alignItems:"center", justifyContent:"center"}}>
                            <Text style = {{fontWeight:"bold", color:colors.cardbackground,fontSize:18}}>0</Text>
                            <Text style = {{color:colors.cardbackground,fontSize:14}}>Корзина</Text>
                        </View>
                    </View>
                </View>
            </View>
            <DrawerItemList {...props}/>
            <DrawerItem
                label = "Оплата"
                icon = {({color, size}) => (
                    <Icon
                        type = "material-community"
                        name = "credit-card-outline"
                        color = {color}
                        size = {size}

                    />
                )}
            />
            <DrawerItem
                label = "Акции"
                icon={({color, size}) => (
                    <Icon
                        type = "material-community"
                        name = "tag-heart"
                        color = {color}
                        size = {size}

                    />
                )}
            />
            <DrawerItem
                label = "Настройки"
                icon={({color, size}) => (
                    <Icon
                        type = "material-community"
                        name = "cog-outline"
                        color = {color}
                        size = {size}

                    />
                )}
            />
            <DrawerItem
                label = "Помощь"
                icon={({color, size}) => (
                    <Icon
                        type = "material-community"
                        name = "lifebuoy"
                        color = {color}
                        size = {size}

                    />
                )}
            />

            </DrawerContentScrollView>
                <DrawerItem
                    label = {() =>( <Text onPress={() => {signOut()}}>Выйти</Text> )}
                    icon={({color, size}) => (
                        <Icon
                            type = "material-community"
                            name = "logout-variant"
                            color = {color}
                            size = {size}
                            onPress={() => {signOut()}}
                        />
                    )}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.cardbackground,
    },
    preferences:{
        fontSize:16,
        color:colors.grey2,
        backgroundColor: colors.grey5,
        paddingVertical:5,
        paddingLeft:20,
    },

    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
        paddingHorizontal:5,
    },
    darkThemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:10,
        fontWeight:"bold"
    }

})