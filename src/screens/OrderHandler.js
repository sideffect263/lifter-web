import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'; 
import { WebView } from 'react-native-webview'; 




const OrderHandler = () => {

  console.log('OrderHandler')
  const route = useRoute();
  console.log(route.params)

  return (
    <View style={styles.container}>
      <View style={styles.mainItem}>
         <iframe style={styles.formS} src='https://docs.google.com/forms/d/e/1FAIpQLScshAEJW6kn_m6gi6krymiJ7Edvwe0jbTqtgDVlnnJ8kopGrA/viewform' /> 
  
      </View>

      <View style={styles.subItem}>
        
      <Text>OrderHandler</Text>
      
      </View>
    </View>
  )
}

//create a astyle sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#86bbd8',
        alignItems: 'center',
        justifyContent: 'center',
        },
     formS:{
        width:'100%',
        height:'100%',
     },
    mainItem: {
         width: '100%',
         height:'100%',
        flex: 11,
        backgroundColor:'#21282C',
        alignItems: 'center',
        justifyContent: 'center',
        },
    subItem: {
      width: '100%',
        flex: 0,
        backgroundColor:'#F4F8FA',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });

export default OrderHandler