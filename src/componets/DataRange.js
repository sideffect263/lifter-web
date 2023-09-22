import { Image,Dimensions, View, Text ,StyleSheet,FlatList, SafeAreaView, StatusBar, TouchableOpacity, Platform} from 'react-native'
import React,{useState} from 'react'
import booicon from '../../assets/9b9/boom-lift-icon.png'
import warehouseicon from '../../assets/9b9/warehouse-icon.png'
import farmicon from '../../assets/9b9/farm-icon.png'
import lifticon from '../../assets/9b9/lift-slab-icon.png'
import {Slider} from '@miblanchard/react-native-slider';



const data ={
    //data range fitrers
    
    }


const DataRange = ({ratioType,name,type,options,filterData}, navigation ) => {
  




      const [value, setValue] = useState(0.1);
      const [iconIm, seticonIm] = useState(null);
      const [isFocus, setIsFocus] = useState(false);
  
      //navigation.navigate('filterCode', { code:'code 1' })


       
const rangeChange=(value)=>{
    console.log('hey')
    console.log(options[1])
    setValue(value[0].toFixed(1))
    console.log(value)
    console.log(type)
    filterData(type,value)

}

  return (
    <View style={styles.container}> 
    <View style={styles.infoCotainer}>
    <View style={styles.itemValue}>
    <Text style={styles.itemValueText}>{value} {ratioType} </Text>
    </View>
    <View style={styles.itemTitle}>
    <Text style={styles.itemTitleText}>{name}</Text>
    </View>
    </View>
        <View style={styles.selector}>
        <Slider 
        step={0.1}
        minimumValue={options[0]}
        maximumValue={options[1]}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
        thumbStyle={{height: 14, width: 14, backgroundColor: '#FFFFFF'}}
        value={value}
        onValueChange={(value) =>{
           rangeChange(value)}
        } 
     />
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    itemTitle:{
        ...Dimensions.get('window').width>815?{flex:1}:{flex:2},
        justifyContent:'center',
        alignItems:'center',
    },
    itemTitleText:{
        fontSize:17,
        adjustsFontSizeToFit:true,
        fontWeight:'bold',
        color:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    infoCotainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    itemValue:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    itemValueText:{
        fontSize:17,
        fontWeight:'normal',
        color:'black',
    },
    

    imagecontainer:{
        flex:7,
        
    },
    selector:{
        flex:1,
        justifyContent:'center',
    },
    container:{
        ...Platform.select({
            ios:{
                alignSelf:'center',
                flexDirection:'column',
                borderWidth:2 , 
                borderColor:'white',
                height:'40%',
                width:'40%',
                margin:'3%',
            },
            android:{},
            web:{
                flex:1,
                alignSelf:'center',
                flexDirection:'column',
                backgroundColor:'#C1B0B0',
                //style this block
                
                
                margin:'3%',
                alignSelf:'strech',
                borderRadius:10,
                borderWidth:2,
                borderColor:'black',

            },
            
            default:{},
            
          }),
     
      
    },
    mainImage: {
        flex:4,
        resizeMode:'contain',
        borderWidth:2,
        width:'100%',
        height:'100%',flex:1,
        alignSelf:'stretch',
    },
})

export default DataRange