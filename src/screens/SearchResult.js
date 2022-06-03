import { StyleSheet, Text, View, Dimensions,FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import SearchResultCard from '../components/SearchResultCard'
import { colors } from '../global/styles';
import firestore from '@react-native-firebase/firestore'
import {find, reduce} from 'lodash'
import { Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
 
const SearchResult = ({navigation, route}) => {
  const [shops, setShops] = useState([])
  const [products, setProduct] = useState([])

  useEffect(() => {
    const func = async () => {
      /** получаем ссылку на категорию */
      const tempCategoryRef = await firestore().collection('cakeCategories').doc(route.params.itemId)
      // console.log('find ', route.params.itemId)
      /** получаем все товары, у которых категория совпадает с ссылкой, по которой мы ищем */
      const tempProducts = await firestore().collection('cakeProducts').where('categoryId', '==', tempCategoryRef).get()
      // console.log(tempProducts.docs)
      /** преобразуем querySet товаров в читаемый вид */
      const tempProductsDocuments = tempProducts.docs.map(product => ({
        ...product.data(), 
        id: product.id
      }))
      /** получаем магазины по ссылкам из объектов товара */
      let shops = await Promise.all(tempProductsDocuments.map(async product => {
        const tShop = await product.shopId?.get()
        return {...tShop.data(), id: tShop.id}
      }))
      /** сохраняем товары в стейт */
      setProduct(tempProductsDocuments)
      /** удаляем дубликаты магазинов */
      const tempShops = reduce([...shops], (acc, shop) => {
        const result = find(acc, c => c.id === shop.id)
        if (result){
          return acc
        }
        return [...acc, shop]
      }, [])
      setShops(tempShops)
    }
    func()
  }, [route.params.itemId])

  return (
    <View style = {styles.container}>
        <View style = {{marginLeft:10, marginTop:7, flexDirection:'row', alignItems:'center'}}>
          <View style ={{marginLeft:8}}>
              <Icon
                name = 'arrow-left'
                type = "material-community"
                color = {colors.grey1}
                size = {25}
                onPress = {() => navigation.goBack()}
              />
          </View>
          <Text style = {styles.listHeader}>{shops.length} Результата по поиску: {route.params.item}</Text>
        </View>
        <View>
          <FlatList 
              style = {{backgroundColor:colors.cardbackground}}
              data = {shops}
              keyExtractor = {(item,index) => index.toString()} 
              renderItem = {({item,index}) => (
                      <SearchResultCard
                      screenWidth = {SCREEN_WIDTH}
                      images = {item.images}
                      averageReview = {item.averageReview}
                      numberOfReview = {item.numberOfReview}
                      restaurantName = {item.restaurantName}
                      farAway = {item.farAway}
                      bisinessAddress = {item.businessAddress}
                      productData = {item.productData}
                      OnPressRestaurantCard = {async () => {navigation.navigate("RestaurantHome", {id:index,restaurant:item.restaurantName})}}
                      //OnPressRestaurantCard = {() => {navigation.navigate("RestaurantHome")}}
                     />
              )}
              showsVerticalScrollIndicator = {false}
          />
        </View>
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        backgroundColor:colors.back
    },

    listHeader:{
        color:colors.grey1,
        fontSize:20,
        marginLeft:20,
        paddingVertical:20,
        fontWeight:'bold',
        backgroundColor:colors.back
    }
})