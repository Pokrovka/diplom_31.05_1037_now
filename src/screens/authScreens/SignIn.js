import React,{useState,useRef,useContext} from 'react'
import {View, Text, StyleSheet, Dimensions,TextInput, Alert} from 'react-native'
import {colors,parameters,title} from "../../global/styles"
import {Icon,Button,SocialIcon} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import Header from '../../components/Header'

import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { SignInContext } from "../../contexts/authContext"

export default function SignIn({navigation}){

    const {dispatchSignedIn} = useContext(SignInContext)

    const[textInput2Fossued, setTextInput2Fossued] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    const fetchInfo = async (userId) => {
        let userInfo = await firestore().collection('users').where('userId', '==', userId).get()
        tempInfo = {...userInfo.docs[0]?.data(), id: userInfo.docs[0]?.id};
        return {
            name: tempInfo.name, 
            surname: tempInfo.surname, 
            phone: tempInfo.phone
        }
    }

    async function signIn(data){
        try{
        const {password,email} = data
        const user = await auth().signInWithEmailAndPassword(email,password)
        if (user) {
            console.log(user.user.uid)
            dispatchSignedIn({type:"UPDATE_SIGN_IN", payload:{userToken: user.user.uid}})
            dispatchSignedIn({type:'UPDATE_EMAIL', payload:{email: user.user.email}})
            dispatchSignedIn({type:"UPDATE_ACCOUNT", payload: await fetchInfo(user.user.uid)})
            console.log("USER SIGNED-IN")
        }
    }
        catch(error){
            Alert.alert(
                error.name,
                error.message
            )
        }
    
    }

    return(
        <View style = {styles.container}>
           <Header 
                title = "Мой аккаунт" 
                type = "arrow-left"
                navigation = {navigation}
           />
           {/* <View>
               <Text style = {title}>Войти</Text>
           </View> */}

            <View style = {{alignItems:"center", marginTop:60}}>
               <Text style = {styles.text1}>Для авторизации введите пожалуйста адрес</Text>
               <Text style = {{...styles.text1, marginTop:4}}>электронной почты и пароль</Text>
            </View>

            <Formik 
                initialValues={{email:'', password:''}}
                onSubmit = {(values) => {
                    signIn(values)
                }}
            > 
            { (props) =>
            <View>
               <View style ={{marginTop:26}}>
                    <View style = {styles.TextInput2}>
                            <Animatable.View >
                                <Icon
                                name="email"
                                iconStyle = {{color:colors.grey3}}
                                type="material"
                                />
                            </Animatable.View>

                            <TextInput
                                style = {{width:"90%"}}
                                placeholder = "Email"
                                ref = {textInput1}
                                onChangeText = {props.handleChange('email')}
                                value = {props.values.email}
                                />
                        </View>

                        <View style = {styles.TextInput2}>
                            <Animatable.View >
                                <Icon
                                name="lock"
                                iconStyle = {{color:colors.grey3}}
                                type="material"
                                />
                            </Animatable.View>

                            <TextInput
                                style = {{width:"90%"}}
                                placeholder = "Пароль"
                                ref = {textInput2}
                                onFocus = {()=>{
                                    setTextInput2Fossued(false)
                                }}

                                onBlur = {()=>{
                                    setTextInput2Fossued(true)
                                }}
                                onChangeText = {props.handleChange('password')}
                                value = {props.values.password}
                                />
                        </View>
                    </View>
                <View style = {{marginHorizontal:20, marginTop:30}}> 
                    <Button
                        title = "Войти"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress = {props.handleSubmit}
                    />
                </View>
            </View>
            }
            </Formik>

            <View style = {{alignItems:"center",marginTop:15}}>
               <Text style = {{...styles.text1,textDecorationLine:"underline",}}>Забыл пароль?</Text>
            </View>

            <View style = {{alignItems:"center",marginTop:30,marginBottom:30}}>
               <Text style = {{fontSize:20, fontWeight:"bold", color:colors.darkBrown}}>Или</Text>
            </View>

            
            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                    title = "Войти через Facebook"
                    button
                    type = "facebook"
                    style = {styles.SocialIcon}
                    onPress = {()=>{

                    }}
                />
            </View>

            
            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                    title = "Войти через Google"
                    button
                    type = "google"
                    style = {styles.SocialIcon}
                    onPress = {()=>{

                    }}
                />
            </View>

            <View style = {{alignItems:"flex-end",marginHorizontal:20,marginTop:60}}> 
                <Button
                    title = "Создать новый аккаунт"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                    onPress = {() => {navigation.navigate("SignUp")}}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.back,
    },
    text1:{
        color:colors.darkBrown,
        fontSize:18,
        fontWeight:'bold'
    },

    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15,
    },
    
    TextInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:15,
        marginTop:10,
        backgroundColor:"white"
    },

    SocialIcon:{
        borderRadius:30,
        height:50,
    },

    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:30,
        borderWidth:2,
        borderColor:"#934635",
        height:40,
        paddingHorizontal:20,
    },
    
    createButtonTitle:{
        color:"#934635",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    },
    
})