import { Image, View, Text ,StyleSheet,FlatList, SafeAreaView, StatusBar, TouchableOpacity, Platform} from 'react-native'
import React,{useState} from 'react'
import booicon from '../../assets/9b9/boom-lift-icon.png'
import warehouseicon from '../../assets/9b9/warehouse-icon.png'
import farmicon from '../../assets/9b9/farm-icon.png'
import lifticon from '../../assets/9b9/lift-slab-icon.png'
import { Dropdown } from 'react-native-element-dropdown';







const DataFilter = ({name,image,type,options,filterData}, navigation ) => {
   
    const [value, setValue] = useState(null);
    const [iconIm, seticonIm] = useState(image);
    const [isFocus, setIsFocus] = useState(false);
    


  
      //navigation.navigate('filterCode', { code:'code 1' })


      
  return (
    <View style={styles.container}> 
    <View style={styles.itemTitle}>
    <Text style={styles.itemTitleText}>{name}</Text>
    </View>
    <View style={styles.imagecontainer}>
        <Image
        style={styles.mainImage}
        source={iconIm}
        />
        </View>
        <View style={styles.selector}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemContainerStyle={styles.itemContainerStyle}
          inputSearchStyle={styles.inputSearchStyle}
          containerStyle={{borderWidth:3, borderColor:'powderblue',borderRadius:5,alignContent:'center',padding:0,alignSelf:'stretch'}}
          iconStyle={styles.iconStyle}
          data={options}
          maxHeight={'40%'}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'בחר אפשרות' : '...'}
          value={value}
          
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            seticonIm(item.image);
            filterData(type,item.label)
          }}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imagecontainer:{
        flex:7,
    },
    itemContainerStyle:{
        adjustsFontSizeToFit:true,
        alignSelf:'cener',
        textAlign:'center',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        textAlignVertical:'center',
        borderTopWidth: 1,
    },
    selector:{
        flex:3,
    },
    container:{
        ...Platform.select({
            ios:{
                alignSelf:'center',
                flexDirection:'column',
                borderColor:'black',
                height:'40%',
                width:'40%',
                margin:'3%',
            },
            android:{},
            web:{
                flex:1,
                alignSelf:'center',
                flexDirection:'column',
                borderWidth:2 , 
                borderColor:'black',
                margin:'3%',
                backgroundColor:'white',
                alignSelf:'strech'
            },
            
            default:{},
            
          }),
     
      
    },
    mainImage: {
        flex:4,
        resizeMode:'contain',
        flex:1,
        alignSelf:'stretch',
        margin:'8%',
    },
    dropdown: {
        flex:1,
        alignSelf:'stretch',
        borderTopWidth: 1,
        textAlign:'center',
        adjustsFontSizeToFit:true,
    },
    placeholderStyle:{
        flex:1,
        alignSelf:'center',
        textAlign:'center',
        adjustsFontSizeToFit:true,
    },
    itemTitleText:{
        flex:1,
        alignSelf:'center',
        adjustsFontSizeToFit:true,
        textAlign:'center',
        fontSize:16,
        fontFamily:'sans-serif',
        textDecorationLine:'underline',
    },
    itemTitle:{
        flex:1,
        alignSelf:'center',
        textAlign:'center',
    },
    selectedTextStyle:{
        flex:1,
        alignSelf:'center',
        textAlign:'center',
    },
    inputSearchStyle:{
        flex:1,
        alignSelf:'center',
        textAlign:'center',
        fontSize:22,
    },

    

})


export default DataFilter