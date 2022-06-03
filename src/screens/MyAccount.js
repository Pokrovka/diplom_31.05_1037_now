import React from "react"

import { View,Text,StyleSheet,SafeAreaView, StatusBar} from "react-native"
import { colors,parameters } from "../global/styles"
import { Title, Caption,TouchableRipple} from "react-native-paper"
import {Icon, Avatar,Button} from 'react-native-elements'
import HomeHeader from "../components/HomeHeader"



export default function MyAccount({navigation}){
  
    return(
        <View style = {styles.container}>
          
            <StatusBar
                translucent
                barStyle = "light-content"
                backgroundColor = {colors.buttons}
            />
            <HomeHeader navigation = {navigation}/>

            <View style = {styles.userInfoSection}>
                <View style = {{flexDirection:"row", marginTop:15,alignItems:'center'}}>
                    <Avatar 
                        rounded
                        avatarStyle={styles.avatar}
                        source = {{
                           uri :"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                        }}
                        size = {80}
                    />
                    <View style = {{marginLeft:20}}>
                        <Title style = {styles.title}>Kate Pokrovskaya</Title>
                    </View>
                </View>
            </View>
            
            <View style = {styles.userInfoSection}>
                <View style = {styles.row}>
                    <Icon name = "place" type = 'material' size = {20} color = {colors.buttons}/>
                    <Text style = {{color:colors.grey1, marginLeft:15}}>Казань, Россия</Text>
                </View>

                <View style = {styles.row}>
                    <Icon name = "phone" type = 'material' size = {20} color = {colors.buttons}/>
                    <Text style = {{color:colors.grey1, marginLeft:15}}>89172952222</Text>
                </View>

                <View style = {styles.row}>
                    <Icon name = "email" type = 'material' size = {20} color = {colors.buttons}/>
                    <Text style = {{color:colors.grey1, marginLeft:15}}>pokr.kate@gmail.com</Text>
                </View>

                <View style={styles.infoBoxWrapper}>
                  <View style={[styles.infoBox, {
                    borderRightColor: colors.grey4,
                    borderRightWidth: 1
                  }]}>
                    <Title style = {styles.title}>13</Title>
                    <Caption style={styles.menuItemText1}>Избранное</Caption>
                  </View>
                  <View style={styles.infoBox}>
                    <Title style = {styles.title}>0</Title>
                    <Caption style={styles.menuItemText1}>Корзина</Caption>
                  </View>
                </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                    <Icon type = "material-community" name = "credit-card-outline" color = {colors.buttons} size = {25}/>
                    <Text style={styles.menuItemText}>Оплата</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                  <Icon type = "material-community" name = "tag-heart" color = {colors.buttons} size = {25}/>
                    <Text style={styles.menuItemText}>Акции</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                    <Icon type = "material-community" name = "cog-outline" color = {colors.buttons} size = {25}/>
                    <Text style={styles.menuItemText}>Настройки</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                  <Icon type = "material-community" name = "lifebuoy" color = {colors.buttons} size = {25}/>
                    <Text style={styles.menuItemText}>Помощь</Text>
                  </View>
                </TouchableRipple>
            </View>
            <View style = {{marginHorizontal:20, marginTop:30}}> 
                <Button
                    title = "Редактировать"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress = {()=>{navigation.navigate("EditMyAccount")}}
                />
            </View>
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

      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        color:colors.buttons,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems:'center'
      },
      infoBoxWrapper: {
        marginTop:20,
        borderBottomColor: colors.grey4,
        borderBottomWidth: 1,
        borderTopColor: colors.grey4,
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,

      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
        marginLeft:-20
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },

      menuItemText1: {
        color: '#777777',
        alignItems: "center",
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },

      avatar:{
        borderWidth:4,
        borderColor:colors.cardbackground,
    },



})