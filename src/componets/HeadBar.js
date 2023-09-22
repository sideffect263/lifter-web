import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'

const HeadBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.liftFinder}>
      <Text>lift Finder</Text>
      </View>
      <View style={styles.orderHandler}>
      <Text>order Handler</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      flex: 1,
      backgroundColor:'#86bbd8',
      alignItems: 'center',
      justifyContent: 'center',
          ...Platform.select({
          ios:{},
          android:{},
          web:{
          },
        }),

      },
      liftFinder:{
        flex:1,
        backgroundColor:'#86bbd8',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        height:'100%',
      },
      orderHandler:{
        flex:1,
        borderWidth:1,
        height:'100%',
        backgroundColor:'#86bbd8',
        alignItems: 'center',
        justifyContent: 'center',
      },
    })
    export default HeadBar