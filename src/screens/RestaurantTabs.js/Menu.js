
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from '../../global/styles'
import {menuData } from '../../global/Data'



const Menu = ({navigation, restaurant, onPress,route}) => {

    // const [categories, setCategories] = useState([])
    // const [products, setProduct] = useState([])
  
    // useEffect(() => {
    //   const func = async () => {
    //     /** получаем ссылку на категорию */
    //     const tempShopsRef = await firestore().collection('cakeProducts').doc(route.params.itemId)
    //     //console.log('find ', route.params.itemId)
    //     /** получаем все товары, у которых категория совпадает с ссылкой, по которой мы ищем */
    //     const tempProducts = await firestore().collection('cakeCategories').where('categoryId', '==', tempShopsRef).get()
    //     // console.log(tempProducts.docs)
    //     /** преобразуем querySet товаров в читаемый вид */
    //     const tempProductsDocuments = tempProducts.docs.map(product => ({
    //       ...product.data(), 
    //       id: product.id
    //     }))
    //     /** получаем магазины по ссылкам из объектов товара */
    //     let categories = await Promise.all(tempProductsDocuments.map(async product => {
    //       const tCategory = await product.categoryId?.get()
    //       return {...tCategory.data(), id: tCategory.id}
    //     }))
    //     /** сохраняем товары в стейт */
    //     setProduct(tempProductsDocuments)

    //     /** удаляем дубликаты магазинов */
    //     const tempCategories = reduce([...categories], (acc, category) => {
    //       const result = find(acc, c => c.id === category.id)
    //       if (result){
    //         return acc
    //       }
    //       return [...acc, category]
    //     }, [])
    //     setCategories(tempCategories)
    //   }
    //   func()
    // }, [route.params.itemId])


  return (
    // <View style = {styles.container}>
    //     <View>
    //         {categories.map((items) =>

    //         <View id = {items.id} style = {styles.view1}>
    //             <TouchableOpacity onPress = {onPress}>
    //                 <View style = {styles.view2}>
    //                     <Text style = {styles.text1}>{items.name}</Text>
    //                 </View>
    //             </TouchableOpacity>

    //         </View>
    //         )}
    //     </View>
    // </View>

        <View style = {styles.container}>
        <View>
            {menuData.map((items) =>

            <View key = {items.key} style = {styles.view1}>
                <TouchableOpacity onPress = {onPress}>
                    <View style = {styles.view2}>
                        <Text style = {styles.text1}>{items.title}</Text>
                    </View>
                </TouchableOpacity>

            </View>
            )}
        </View>
        </View>



  )
}
 
export default Menu

const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    view1:{
        paddingHorizontal:10,
        
    },

    view2:{
        flexDirection:'row',
        borderBottomWidth:1,
        alignItems:"center",
        padding:10,
        borderBottomColor:colors.grey4,
    },

    text1:{
        color: colors.grey1,
        fontSize:18,
        fontWeight:'bold'
    }
})
