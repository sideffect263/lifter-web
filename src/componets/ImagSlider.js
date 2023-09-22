import { Linking, View, Text,Image,StyleSheet ,TouchableOpacity, Pressable,SafeAreaView,
  ScrollView,FlatList,Dimensions, Alert} from 'react-native'
import React,{useState} from 'react'
import Modal from "react-native-modal";
import download_pdf from '../../assets/download_pdf.png'
import plusImage from '../../assets/icons/plus.png'
import minusImage from '../../assets/icons/minus.png'






var itemIndex = 0;


//start of main
const ImagSlider = ({data,cartData}) => {


  const Item = ({item}) => (
    
    <View style={styles.itemBox}>

  <TouchableOpacity 
  onPress={()=>imgPressed(item)}
  >


    <View style={
      {
        flex:1,
        backgroundColor: item.color, 
        marginVertical:'0.4%',    
        flexDirection:'row',
        justifyContent:'space-around',
        
        
  
      }
    }>
  
<View style={styles.itemImage}>
                <Image
                  style={styles.mainImage}
                  source={item.image}
                  />
                  <Text style={{
                    fontSize:Dimensions.get('window').width>815?20:10,
                    borderWidth:1,
                    backgroundColor: item.color,
                    textAlign:'center',
                    alignSelf:'stretch',
                    justifyContent:'center',
                    alignItems:'center',
                    textAlignVertical:'center',
                    borderRadius:7,
                    borderColor:'white',
                    margin:'1%',
                  }}>{item.name}</Text>
    </View>


                  </View>


   
    </TouchableOpacity>
    </View>
  );
  
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] =  useState('');
  const [modalImage, setModaImage] =  useState('');
  const [modalPdfLink, setModalPdfLink] =  useState('');
  const [modalTabletSize , setModalTabletSize] = useState(false);
  
const imgPressed=(item)=>{

  if(Dimensions.get('window').width>815){
    setModalTabletSize(true);
  }else{
    setModalTabletSize(false);
  }
  setModaImage(item.image)
  setModalTitle(item.name);
  setModalData(item);
  setModalVisible(true);
  console.log('name')
  console.log(cartData);
  console.log(modalImage);
  // console.log(data);
 // console.log(data[key.index].name);


}

  function logoPressed() { 
    console.log('pdf pressed');
    console.log(modalData.pdfLink);
    Linking.openURL(modalData.pdfLink);
  }

  const plusSignPressed = () => {
    Alert.alert('הוספה לעגלה');
    console.log('plusSignPressed');
    console.log(cartData);
    let bool=false;
    //check if one of the same item is already in the cart
    if(cartData.length>0){
      for(let i=0;i<cartData.length;i++){
        if(cartData[i].name==modalData.name){
          cartData[i].quanity++;
          bool=true;
          return;
        }
      }
    }
    if(bool==false)
    cartData.push(
       {
      name:modalData.name,
      vehicleType:modalData.vehicleType,
      quanity: 1,
      dates:{
        start: '1/1/2021',
        end: '1/1/2021'
      }
      
    },)
    console.log(cartData);
  }

  const minusSignPressed = () => {
    console.log('minusSignPressed');
    console.log(cartData);
    let bool=false;
    //take one from the quanity
    if(cartData.length>0){
      for(let i=0;i<cartData.length;i++){
        if(cartData[i].name==modalData.name){
          if(cartData[i].quanity==1){
            cartData.splice(i,1);
            return;
          }
          cartData[i].quanity--;
          bool=true;
          return;
        }
      }
    }
    

  }

  const itemPressed = () => {
    console.log('itemPressed');
    Linking.openURL('https://www.ofeklift.com/%D7%99%D7%A6%D7%99%D7%A8%D7%AA-%D7%A7%D7%A9%D7%A8')
  }

  const imageClossed = () => {

    console.log('imageClossed');
  }


  return (
  
    <View style={styles.dfual}>
      {
        //when an item pressed this shows up
      }
      
      <Modal
        animationType='fade'
        coverScreen={!modalTabletSize}
        isVisible={modalVisible}
        onBackdropPress={()=> setModalVisible(false)}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
          <View style={styles.modalView}>
          <View style={styles.itemView}>
            <View style={styles.itemDataCard}>
            <Text style={styles.modalTextTitle}>{modalData.name}</Text>
            <Text style={styles.modalText}>{modalData.vehicleType}</Text>

            </View>

            <View style={styles.itemImageView}>
              <TouchableOpacity onPress={logoPressed} style={styles.imagePressed}>
            <Image
                style={styles.modalImageS}
                source={download_pdf}
                />
                </TouchableOpacity>
                </View>

                <View style={styles.itemBtns}>
                <TouchableOpacity onPress={plusSignPressed} style={styles.plusSignS}>
            <Image source={plusImage} style={styles.plusSignImageS}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={minusSignPressed} style={styles.minusSignS}>
            <Image source={minusImage} style={styles.minusSignImageS}/>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.itemBtn}  onPress={itemPressed}>
            <Text style={styles.modalText}>יצירת קשר לבירורים</Text>
            </TouchableOpacity>
            </View>

               

            <Pressable
              style={[styles.buttonx, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>סגירה</Text>
            </Pressable>
          </View>
      </Modal>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
    
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data}
        extraData={data}
        renderItem={({item}) =>
         <Item item={item} key={item.name}
          />}
          numColumns={Dimensions.get('window').width>815?4:1}
        keyExtractor={item => item.name}
      />
     </SafeAreaView>
      </View>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  itemBtns:{
    display:'none',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:'4%',
    width:'100%',
  },
  itemBtn:{
    borderWidth:1,
    marginTop:'4%',
    padding:'2%',
    borderRadius:10,
    backgroundColor:'white',
  },
  plusSignS:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch',
    marginHorizontal:'2%',
  },
  minusSignS:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:'2%',
  },
  plusSignImageS:{
    resizeMode:'contain',
    width:'100%',
    height:'100%',
  },
  minusSignImageS:{
    resizeMode:'contain',
    width:'100%',
    height:'100%',
  },

  textStyle:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
  },
  container:{
    flex:1,
    flexDirection:'column',
  },
  companyLink:{
    flex:1,
  },

  imagePressed:{
    flex:1,
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center',
  },

  scrollContainer:{
    flexDirection:'column',
    flex:1,
  },
  safeContainer:{
    flexDirection:'column',
    flex:1,
    backgroundColor:'transparent',
  },
  itemDataCard:{
    flex:2,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    marginVertical:'4%',
  },
  itemImage:{
    ...Dimensions.get('window').width>815?{flex:2}:{flex:2},
    ...Dimensions.get('window').width>815?{height:Dimensions.get('window').height/3}:{height:Dimensions.get('window').height/6},

    borderRadius:10,
    borderStyle:'dashed',
    backgroundColor:'white',
    justifyContent:'center',
  },
  itemText:{
    
  },
  itemImageView:{
    flex:2,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'white',
    alignSelf:'center',
    width:'35%',
    height:'35%',

  },
  


  itemView:{
    flex:5,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'stretch',
  },

    dfual:{
      flex:1,
      display:'flex',
    },

    modalImageS:{
      flex:1,
      resizeMode:'contain',
      alignSelf:'stretch',
      borderWidth:1,
    },
    centeredView: {
      flex: 1,
      alignSelf:'strech',
      borderWidth:1,

    },
   
   modalView: {
    backgroundColor: '#fbe787',
    borderWidth:1,
    flexDirection:"column",
    borderRadius: 20,
    alignItems: 'center',
    padding: '1%',
    shadowColor: '#c1dae0',
    alignSelf:'center',
    ...Dimensions.get('window').width>815?
    {
       height:'60%',   
       width:'30%',
      }:
      {
        height:'80%',   
        width:'70%',
            },
   
    flexDirection:'column',
    borderColor:'#605835',
    },
    container: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        }
    },
    mainImage: {
      flex:1,
      resizeMode:'contain',
      
    },

    itemBox:{
    //  margin:'0.5%',
     flex:1,
     borderColor:'black',
     margin:'0.15%',
     backgroundColor:'white',
    },

    item: {
      flex:1,
      backgroundColor: '#86bbd8', 
      marginVertical:'0.4%',    
      flexDirection:'row',
      justifyContent:'space-around',
      borderWidth:2,
      borderColor:'white',
    },
    modalTextTitle:{
      fontSize:20,
      margin:'5%',
      fontWeight:'bold',
      color:'black',
      textDecorationLine:'underline',
    },
    modalText:{
      fontSize:15,
      color:'black',
      textAlign:'center',
      textDecorationStyle:'dotted',
      fontStyle:'italic',
    },
    buttonx: {
      borderRadius: 10,
      marginTop:'12%',
      padding: 5,
      flex:1,
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#605835',
    },
    

    
  });

export default ImagSlider