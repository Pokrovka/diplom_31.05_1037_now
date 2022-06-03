import React,{useEffect, useContext} from 'react'

import {View, Text, StyleSheet, Dimensions,TextInput,Image} from 'react-native'
import {colors,parameters,title} from "../../global/styles"
import {Icon,Button,SocialIcon} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import { SignInContext } from "../../contexts/authContext"
import auth from '@react-native-firebase/auth';
import Swiper from 'react-native-swiper'

export default function SignInWelcome({navigation}){


    const {dispatchSignedIn} = useContext(SignInContext)

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if(user){
                dispatchSignedIn({type:"UPDATE_SIGN_IN", payload:{userToken:"signed-in"}})
            } else{
                dispatchSignedIn({type:"UPDATE_SIGN_IN", payload:{userToken:null}})
            }
        })
    },[])

    return(
        <View style = {{flex:1, backgroundColor:colors.back}}>

            <View style ={{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:50}}>
                <Text style = {{fontSize:30,color:colors.buttons,fontWeight:"bold"}}>Самые свежие идеи</Text>
                <Text style = {{fontSize:40,color:colors.buttons,fontWeight:"bold"}}>по вашему вкусу</Text>
            </View>

            <View style = {{flex:7, justifyContent:"center"}}>
                <Swiper autoplay = {true}>
                    <View style = {styles.slide1}>
                        <Image
                            source = {{uri:"https://mykaleidoscope.ru/uploads/posts/2021-09/1632484171_26-mykaleidoscope-ru-p-kusochek-tortika-krasivo-foto-35.jpg"}}
                            style = {{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style = {styles.slide2}>
                        <Image
                            source = {{uri:"https://mykaleidoscope.ru/uploads/posts/2021-09/1632484231_42-mykaleidoscope-ru-p-kusochek-tortika-krasivo-foto-55.jpg"}}
                            style = {{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style = {styles.slide3}>
                        <Image
                            source = {{uri:"https://mykaleidoscope.ru/uploads/posts/2021-09/1632484176_17-mykaleidoscope-ru-p-kusochek-tortika-krasivo-foto-22.jpg"}}
                            style = {{height:"100%",width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style ={{flex:4, justifyContent:"flex-end",marginBottom:20}}>
            <View style = {{marginHorizontal:20, marginTop:70}}> 
                <Button
                    title = "Войти"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress = {()=>{
                        navigation.navigate("SignIn")
                    }}
                />
            </View>
            <View style = {{marginHorizontal:20, marginTop:10}}> 
                <Button
                    title = "Зарегистрироваться"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                    onPress = {() => {navigation.navigate("SignUp")}}
                />
            </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9dd6eb",
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#97cae5",
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92bbd9",
    },

    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:30,
        borderWidth:1,
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
    },
    
    createButtonTitle:{
        color: colors.buttons,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center", 
        marginTop:-3
    },
})