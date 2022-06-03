import React,{useState} from "react"
import {View,Text,StyleSheet,TouchableOpacity,
     StatusBar, ImageBackground} from "react-native"
import {Icon} from 'react-native-elements'
import {TextInput} from "react-native-paper"
import { colors } from "../global/styles"
import FormButton from "../components/FormButton"
import HomeHeader from '../components/HomeHeader'

const EditMyAccount = ({navigation}) => {
    return(
        <View style= {styles.container}>
            <StatusBar
                translucent
                barStyle = "light-content"
                backgroundColor = {colors.buttons}
            />
            <HomeHeader navigation = {navigation}/>

            <View style = {{marginHorizontal:20}}>
                <View style = {{alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {}}>
                        <View style = {styles.view1}>
                            <ImageBackground 
                                 source={{uri :"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"}}
                                 style = {{height:100, width:100}}
                                 imageStyle = {{borderRadius:15}}
                                 >
                                <View style = {{flex:1, justifyContent:'center',alignItems:'center'}}>
                                    {/* <Icon name="camera" size={35} color={colors.grey4} style ={{
                                        opacity:0.7,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderWidth:1,
                                        borderColor:colors.grey4,
                                        borderRadius:10
                                    }}/> */}
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>

                    <Text style ={{marginTop:20, fontSize:18, fontWeight:'bold'}}>
                        Kate Pokrovskaya
                    </Text>
                </View>

                 <View style = {{...styles.action, marginTop:20}}>
                   <Icon                         
                        type = "material-community"
                        name = "credit-card-outline"
                        color = {colors.grey5}
                        size = {20}
                        style = {{marginLeft:20}}
                    />
                     <TextInput
                        placeholder = "Surname"
                        placeholderTextColor = {colors.grey5}
                        backgroundColor = {colors.grey4}
                        autoCorrect = {false}

                     />
                 </View>

                 <View style = {styles.action}>
                    <Icon                         
                        type = "material-community"
                        name = "credit-card-outline"
                        color = {colors.grey5}
                        size = {20}
                        style = {{marginLeft:20}}
                    />
                     <TextInput
                        placeholder = "Name"
                        placeholderTextColor = {colors.grey5}
                        backgroundColor = {colors.grey4}
                        autoCorrect = {false}
                     />
                 </View>

                 <View style = {styles.action}>
                 <Icon                         
                        type = "material-community"
                        name = "phone"
                        color = {colors.grey5}
                        size = {20}
                        style = {{marginLeft:20}}
                    />
                     <TextInput
                        placeholder = "Phone"
                        placeholderTextColor = {colors.grey5}
                        backgroundColor = {colors.grey4}
                        keyboardType = "number-pad"
                        autoCorrect = {false}
                     />
                 </View>

                 <View style = {styles.action}>
                 <Icon                         
                        type = "material-community"
                        name = "email"
                        color = {colors.grey5}
                        size = {20}
                        style = {{marginLeft:20}}
                    />
                     <TextInput
                        placeholder = "Email"
                        placeholderTextColor = {colors.grey5}
                        backgroundColor = {colors.grey4}
                        autoCorrect = {false}
                        keyboardType = "email-address"
                        style = {{borderBottomWidth:0}}
                     />
                 </View>
                 <FormButton buttonTitle = "Сохранить" onPress = {() =>{}}/>
            </View>
        </View>
    )
}


export default EditMyAccount;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        backgroundColor:colors.back
    },
    commandButton: {
      padding: 25,
      borderRadius: 50,
      marginHorizontal:20,
      backgroundColor:colors.buttons,
      alignItems: 'center',
      marginTop: 30,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      paddingBottom: 5,
      alignItems:'center',
      backgroundColor:colors.grey4,
      borderRadius: 30,
      borderBottomWidth:0 ,
      marginHorizontal:10,

    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth:1 ,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      color:colors.buttons,
      borderBottomWidth: 0,
      borderRadius:15,
      //color: '#05375a',
    },

    view1:{
        height:100,
        width:100,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    }
  });