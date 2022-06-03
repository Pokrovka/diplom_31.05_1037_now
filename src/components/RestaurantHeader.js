import { ImageBackground, StyleSheet, Text, View,Animated } from 'react-native'
import React, {useState,useEffect} from 'react'
import { restaurantData } from '../global/Data'
import { colors } from '../global/styles'
import { Icon } from 'react-native-elements'

export default function RestaurantHeader({navigation,id, image}) {


  const index2 = 10
  const currentValue = new Animated.Value(1)
  const [liked,setLiked] = useState(false)
  const [counter, setCounter] = useState(-2)
  const [visible, setVisible] = useState(false)

  const likeHeader =() =>{
    if (liked == false)
       setVisible(true)
    setLiked(!liked)
    setCounter(index2)
  }

  useEffect(() => {
      if(liked == true){
        Animated.spring(currentValue,{
          toValue:3,
          friction:2,
          useNativeDriver:true
        }).start(() => {
          Animated.spring(currentValue,{
            toValue:1,
            useNativeDriver:true,
            friction:2
          }).start(() => {
            setVisible(false)
          })
        })
      }
  }, [liked])

  return (
    <View style = {styles.container}>
      <ImageBackground
        style = {styles.container}
        source = {{uri:image}}
      >
          <View style = {styles.view1}>
            <View style ={styles.view2}>
              <Icon
                name = 'arrow-left'
                type = "material-community"
                color = {colors.grey1}
                size = {25}
                onPress = {() => navigation.goBack()}

              />
            </View>

            <View style = {styles.view2}>
              <Icon
                  name = {liked && (index2 == counter) ? "favorite" : "favorite-border"}
                  type = "material"
                  color = "red"
                  size = {30}
                  onPress = {likeHeader}
                />
            </View>
          </View>

          <View style = {styles.view4}>
              {visible && (index2 == counter) && 
              <Animated.View style = {{transform:[{scale:currentValue}]}}>
                <Icon
                  name = 'favorite'
                  size = {40}
                  color = "red"
                  type = 'material'
                />
              </Animated.View>
              }
          </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        height:230,
      },
    
      view1:{
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'space-between',
        marginTop:5
      },
    
      image:{
       // borderTopLeftRadius:5,
        // orderTopRightRadius:5,
      },
    
      view2:{
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
      },
    
      view3:{
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
      },
    
      view4:{
        marginTop:0,
        alignItems:'center',
        justifyContent:'center'
      }
})