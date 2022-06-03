import { StyleSheet, Text, View, ScrollView,Dimensions,TouchableOpacity,
    Modal} from 'react-native'
import React, {useEffect, useState} from 'react'
import RestaurantHeader from '../components/RestaurantHeader'
import { colors,fonts } from '../global/styles'
import { restaurantData, menu} from '../global/Data'
import { Icon } from 'react-native-elements'
import { TabBar,TabView } from 'react-native-tab-view'
import Menu from './RestaurantTabs.js/Menu'
import { Route1,Route2,Route3,Route4,Route5, Route6,Route7,Route8 } from './MenuTabs'
import firestore from '@react-native-firebase/firestore'



const SCREEN_WIDTH = Dimensions.get("window").width
const initialLayout = SCREEN_WIDTH;

const RestaurantHome = ({navigation, route}) => {

  const {id, restaurant} = route.params;

  const [shop, setShop] = useState();

  useEffect(() => {
    const func = async () => {
      const tempShop = await firestore().collection('cakeShops').doc(id).get();
      setShop(tempShop.data())
    }
    func()
  }, [id])

  
  const[routes] = useState([
    {key: 'first', title: 'МЕНЮ'},
    {key: 'second', title: 'ИНФО'},
    {key: 'third', title: 'ГАЛЕРЕЯ'},
    {key: 'fourth', title: 'ОТЗЫВЫ'},
  ])

      //{key: 'fourth', title: 'REVIEWS'},


  const [index, setIndex] = useState(0)

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle = {{backgroundColor:colors.cardbackground}}
      tabStyle = {styles.tabStyle}
      scrollEnabled = {true}
      style = {styles.tab}
      labelStyle = {styles.tabLabel}
      contentContainerStyle = {styles.tabContainer}
    />
  )


  const UpdateRoute1 =() =>{
    return(
      <View>

      </View>
    )
  }

  const menuPressed =()=>{
    navigation.navigate("MenuProduct")
  }


  return (
    <View style = {styles.container}>
      <ScrollView>
        <View>
            <RestaurantHeader id = {id} navigation = {navigation} image={shop?.images}/>
            {shop?.discount &&
            <View style = {styles.view1}>
              <Text style = {styles.text1}>СКИДКА {shop?.discount}% НА ВСЕ ТОВАРЫ</Text>
            </View>
            }
          <View style = {styles.view2}>
            <View style = {styles.view3}>
              <Text style = {styles.text2}>{restaurant || ''}</Text>
              <Text style = {styles.text3}>{shop?.foodType || ''}</Text>
              <View style = {styles.view4}>
                  <Icon name = 'star' type = 'material-community'color = {colors.buttons} size = {18}/>
                  <Icon name = 'star' type = 'material-community'color = {colors.buttons} size = {18}/>
                  <Icon name = 'star' type = 'material-community'color = {colors.buttons} size = {18}/>
                  <Icon name = 'star' type = 'material-community'color = {colors.buttons} size = {18}/>
                  <Icon name = 'star' type = 'material-community'color = "#d3baa6" size = {18}/>
                  <Text style = {styles.text4}>{shop?.averageReview || ''}</Text>
                  <Text style = {styles.text5}>{shop?.numberOfReview || ''} отзывы</Text>
              </View>
            </View>

            <View style = {styles.view5}>
              <Text style = {styles.text6}>Готовка</Text>
              <View style = {styles.view7}>
                <Text style = {styles.text7}>{shop?.collectTime || ''}</Text>
                <Text style = {styles.text8}>мин</Text>
              </View>
            </View>

            <View style = {styles.view8}>
              <Text style = {styles.text6}>Доставка</Text>
              <View style = {styles.view9}>
                <Text style = {styles.text9}>{shop?.deliveryTime || ''}</Text>
                <Text style = {styles.text11}>мин</Text>
              </View>
            </View>
          </View>
        </View>

        <View style = {styles.view10}>
          <TabView
            navigationState={{index, routes}}
            renderScene = {UpdateRoute1}
            onIndexChange = {setIndex}
            initialLayout = {initialLayout}
            renderTabBar = {renderTabBar}
            tabBarPosition = 'top'
          />
        </View>
        {index === 0 &&
          <Menu onPress = {menuPressed}/>
        }

      </ScrollView>

      <TouchableOpacity>
        <View style = {styles.view11}>
          <View style = {styles.view12}>
            <Text style = {styles.text13}>Корзина</Text>
            <View style = {styles.view13}>
              <Text style = {styles.text13}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RestaurantHome

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    flex:1,
    backgroundColor:colors.back
  },

  view1:{
    padding:3,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },

  text1:{
    color: colors.grey1,
    fontSize:20,
    fontWeight:"bold",
  },

  view2:{
    flexDirection:'row',
    flex:1,
    marginBottom:5,
    marginHorizontal:10,
    justifyContent:'space-between',
    marginTop:10,
  },

  view3:{
    flex:8,
  },

  text2:{
    fontSize:20,
    fontWeight:'bold',
    color:colors.grey1
  },

  text3:{
    fontSize:15,
    color:colors.grey1,
    marginTop:6
  },

  view4:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:10,
  },

  text4:{
    fontFamily: fonts.android.bold,
    fontSize:18,
    color:colors.grey1,
    marginLeft:2,
  },

  text5:{
    fontFamily:fonts.android.bold,
    fontSize:16,
    color:colors.grey1,
    marginLeft:10,
    marginRight:5,
  },

  view6:{
    fontFamily:fonts.android.bold,
    fontSize:13,
    color:colors.grey3,
    marginLeft:0,
  },

  view5:{
    flex:3, 
    alignItems:'center',
  },

  text6:{
    fontSize:15,
    fontWeight:'bold',
    color:colors.grey1
  }, 

  view7:{
    width:60,
    height:60,
    alignItems:"center",
    borderRadius:30,
    justifyContent:'space-evenly',
    backgroundColor:colors.grey5,
    marginTop:5,
  },

  text7:{
    fontSize:16,
    fontWeight:"bold",
    color:"black",
    marginTop:10,
  },

  text8:{
    fontSize:13,
    color:"black",
    marginBottom:5
  },
  
  view8:{
    flex:3,
    alignItems:"center",
    
  },

  text9:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:10,
    color:"white"
  },

  view9:{
    width:60,
    height:60,
    backgroundColor:colors.buttons,
    alignItems:'center',
    borderRadius:30,
    marginTop:5,
    justifyContent:'space-evenly',
  },

  text10:{
    fontSize:16,
    fontWeight:'bold',
    color:colors.cardbackground,
    marginTop:5,
  },

  text11:{
    fontSize:13,
    color:colors.cardbackground,
    marginBottom:5,
  },

  view10:{
    elevation:10,
    marginTop:10,
    backgroundColor:colors.cardbackground,
  },

  view11:{
    backgroundColor:colors.buttons,
    height:50,
    alignItems:'stretch',
    justifyContent:"center",
    paddingHorizontal:5,
    marginBottom:0,
  },

  view12:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
  },

  text12:{
    padding:10,
    fontSize:18,
    fontWeight:"bold",
    color:colors.cardbackground
  },

  view13:{
    borderWidth:1,
    marginRight:10,
    borderColor:colors.cardbackground,
    borderRadius:6,
    paddingBottom:2,
  },

  text13:{
    paddingHorizontal:3,
    fontWeight:'bold',
    fontSize:18,
    color:colors.cardbackground
  },

  tab:{
    paddingTop:0,
    backgroundColor:colors.buttons,
    justifyContent:'space-between',
    alignItems:'center',
  },

  tabContainer:{
    alignItems:'center',
    alignContent:"center",
    justifyContent:'center'
  },

  tabLabel:{
    fontWeight:'bold',
    color:colors.cardbackground,
  },

  tabStyle:{
    width:SCREEN_WIDTH/4,
    maxHeight:45,
  },

  view14:{
    flexDirection:'row',
    alignItems:"center",
    padding:10,
    backgroundColor:colors.buttons,
    top:0,
    left:0,
    right:0,
    paddingTop:25,
  },
  text14:{
    fontWeight:'bold',
    marginLeft:40,
    color:'white',
    fontSize:18,
  },
  view15:{
    marginTop:5,
    paddingBottom:20,
  },
})