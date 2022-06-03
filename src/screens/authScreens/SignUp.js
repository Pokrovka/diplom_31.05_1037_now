import { StyleSheet, Text, View, ScrollView, TextInput,Alert} from 'react-native'
import React, {useState} from 'react'
import { colors } from '../../global/styles'
import Header from '../../components/Header'
import { Formik } from 'formik'
import { Icon,Button} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import auth from '@react-native-firebase/auth'



const initialValues = {name:"",surname:"",password:"",email:''}

const SignUp = ({navigation}) => {

    const [PassordFocussed,setPassordFocussed] = useState(false)
    const [PasswordBlured,setPasswordBlured] = useState(false)

    async function signUp(values){
        const {email,password, name, surname} = values

        try{
            await auth().createUserWithEmailAndPassword(email,password)
            console.log("АККАУНТ ПОЛЬЗОВАТЕЛЯ СОЗДАН")
            alert('аккаунт создан')
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                Alert.alert(
                    'Этот адрес электронной почты уже используется'
                )
            }
            if(error.code === 'auth/invalid-email'){
                Alert.alert(
                    'Этот адрес электронной почты введен неверно'
                )
            }
            else{
                Alert.alert(error.code)
            }
        }
    }
  return (
    <View style = {styles.container}>
        <Header title = "Мой аккаунт" type="arrow-left" navigation = {navigation}/>
        <ScrollView keyboardShouldPersistTaps = "always">
            <View style = {styles.view1}>
                <Text style = {styles.text1}>Регистрация</Text>
            </View>
            <Formik initialValues = {initialValues} onSubmit = {(values) => {signUp(values)}}>
                { (props) =>(
                    <View style = {styles.view2}>
                            <View style = {styles.view6}>
                                <TextInput 
                                    placeholder = 'Имя'
                                    style = {styles.input1}
                                    autoFocus = {false}
                                    onChangeText = {props.handleChange('name')}
                                    value = {props.values.name}
                                />
                            </View>
                            <View style = {styles.view6}>
                                <TextInput 
                                    placeholder = 'Фамилия'
                                    style = {styles.input1}
                                    autoFocus = {false}
                                    onChangeText = {props.handleChange('surname')}
                                    value = {props.values.surname}
                                />
                            </View>
                            <View style = {styles.view10}>
                                <View>
                                    <Icon name = 'email' style = {styles.email} color = {colors.grey3} type = 'material'/>
                                </View>
                                <View style = {styles.view11}>
                                    <TextInput 
                                        placeholder = 'Email'
                                        style = {styles.input4}
                                        autoFocus = {false}
                                        onChangeText = {props.handleChange('email')}
                                        value = {props.values.email}
                                    />
                                </View>
                            </View>
                            <View style = {styles.view14}>
                                <Animatable.View>
                                    <Icon name = 'lock' color = {colors.grey3} type = 'material' style={{marginLeft:10}}/>
                                </Animatable.View>
                                    <TextInput 
                                        placeholder = 'Пароль'
                                        style = {{flex:1, fontSize:16, marginLeft:10, marginBottom:0}}
                                        keyboardType = "number-pad"
                                        autoFocus = {false}
                                        type='login-password'
                                        onChangeText = {props.handleChange('password')}
                                        value = {props.values.password}
                                        onFocus = {() => {setPassordFocussed(true)}}
                                        onBlur = {() => {setPasswordBlured(true)}}
                                    />
                            </View>
                            <View style ={styles.view15}>
                                  <Text style ={styles.text3}>Создавая учетную запись или входя в нее, Вы</Text>
                                  <View style ={styles.view16}>
                                      <Text style ={styles.text3}>соглашаетесь с нашими  </Text>
                                      <Text style ={styles.text4}>Условиями использования</Text>
                                      <Text style = {styles.text3}> и </Text>
                                  </View>
                                  <Text style ={styles.text4}>Положением о конфиденциальности.</Text>
                            </View>
                            <View style ={styles.view17}>
                                  <Button
                                      title = "Создать аккаунт"
                                      buttonStyle = {styles.button1}
                                      titleStyle ={styles.title1}
                                      onPress = {props.handleSubmit}
                                   />
                            </View>
                    </View>
                )}
            </Formik>
            <View style = {styles.view18}>
                <Text style ={styles.text5}>Или</Text>
            </View>
            <View style ={styles.view19}>
                <View style ={styles.view21}>
                    <Button 
                            title = "Войти в систему"
                            buttonStyle ={styles.createButton}
                            titleStyle = {styles.title2}
                            onPress ={()=>{navigation.navigate('SignIn')}}
                        />
                </View>
            </View>
        </ScrollView>
    </View>
  )
}



export default SignUp

const styles = StyleSheet.create({
    container:{flex:1,
        backgroundColor: colors.back
        },
        
    view1:{
        justifyContent:'center',
        alignItems:'baseline',
        marginTop:30,
        marginBottom:10,
        marginLeft:20,
        paddingHorizontal:15
    },
        
        text1:{fontSize:22,
        color:colors.buttons,
        fontWeight:'bold'
        },
        
    view2:{
        justifyContent:'flex-start',
        backgroundColor:colors.back,
        paddingHorizontal:15
    },
        
        view3:{marginTop:5,
        marginBottom:10,
        },
        
        text2:{fontSize:15,
        color:colors.grey2
        },
        
        view4:{flexDirection:'row',
        borderWidth:1,
        borderColor: colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        height:48
        },
        
        view5:{ 
            marginLeft:30,
            marginTop:0
            
        },
        
        input1:{fontSize:16, },
        
        view6:{
            flexDirection:'row',
        borderWidth:1,
        borderColor: colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:10,
        height:48,
        backgroundColor:colors.headerText
        },
        
        view7: {marginLeft:0,
        maxWidth:"65%",
        },
        
        input2:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
        },
        
        view8:{flexDirection:'row',
        borderWidth:1,
        borderColor: colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48
        },
        
        view9:{marginLeft:0,
        maxWidth:"65%",
        },
        
        input3:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
        },
        
        view10: {flexDirection:'row',
        borderWidth:1,
        borderColor:colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48,
        backgroundColor:colors.headerText
        },
        
        email:{fontSize:24,
        padding:0,
        marginBottom:0 ,
        marginTop:11,
        marginLeft:10
        },
        
        view11 : { marginLeft:30,
        maxWidth:"65%",
        },
        
        input4:{fontSize:16,
        marginLeft: -20,
        marginBottom:-10
        },
        
        view13: {flexDirection:"row",
        height:40,
        } ,
        
        view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
        backgroundColor:colors.headerText
        },
        
        view15:{
            alignItems:'center',
        justifyContent:'center',
        marginTop:40
        },
        
        text3: {
            fontSize:13,
            color:colors.darkBrown
        },
        
        view16:{flexDirection:'row'},
        
        text4:{textDecorationLine:'underline',
        color:'green',
        fontSize:13
        },
        
        button1: {backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
        width:'100%'
        
        },
        
        title1:{color:"white",
        fontSize:20,
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center" ,
        marginTop:-3
        
        },
        
        view17:{marginVertical:10,
        marginTop:30
        },
        
        view18:{flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:30,
        },
        
        text5: {fontSize:15,
        fontWeight:'bold',
        color:colors.darkBrown
        },
        
    view19:{
        backgroundColor: colors.back,
        paddingHorizontal:15,
        
        },
        
        view20:{marginTop:5
        },
        
        view21:{
            marginTop:25,
        alignItems:'flex-end',
        },
        
        button2:{backgroundColor:colors.background3,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.background2,
        height:40,
        paddingHorizontal:20,
        // width:'100%'
        
        },
        
        title2:{color:colors.buttons,
        fontSize:16,
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center" ,
        marginTop:-3
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
})