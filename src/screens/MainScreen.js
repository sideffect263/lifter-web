import { 
  View,Button,  SafeAreaView,
  ScrollView, Image, Platform, useWindowDimensions, Dimensions,
  Text, StyleSheet, Pressable,FlatList,
   Alert ,TouchableOpacity, Linking
   } from 'react-native'
   import Modal from "react-native-modal";
   import {useRoute} from '@react-navigation/native'; 

import React,{useState} from 'react'
import ImagSlider from '../componets/ImagSlider';
import DataFilter from '../componets/DataFilter';
import warehouseicon from '../../assets/9b9/warehouse-icon.png'
import farmicon from '../../assets/9b9/farm-icon.png'
import lifticon from '../../assets/9b9/lift-slab-icon.png'
import anyIcon from '../../assets/9b9/everything.png'
import boomIcon from '../../assets/9b9/boom-lift-icon.png'
import DataRange from '../componets/DataRange';
import vertical from '../../assets/9b9/vertical.png'
import horizontal from '../../assets/9b9/horizontal.png'
import forkliftIcon from '../../assets/9b9/forklift.png'
import teleBoom from '../../assets/9b9/boom-lift-tele.png'
import handEngine from '../../assets/9b9/hand-engine.png'
import electricEngine from '../../assets/9b9/electric-engine.png'
import gasEngine from '../../assets/9b9/gas-engine.png'
import asphalt from '../../assets/9b9/asphalt.png'
import soil from '../../assets/9b9/soil.png'
import uneven from '../../assets/9b9/uneven.png'
import level from '../../assets/9b9/level.png'
import toolBox from '../../assets/9b9/tool-box.png'
import logo from '../../assets/ofekLogo.png'
import reset from '../../assets/undo.png'
import engineType from '../../assets/9b9/engineType.png'
import groundNagle from '../../assets/9b9/groundNagle.png'
import groundType from '../../assets/9b9/groundType.png'
import workLocation from '../../assets/9b9/workLocation.png' 
import accesibilty_icon from '../../assets/data_selector/accesibilty_icon.png'
import filter_data_icon from '../../assets/data_selector/filter_data_icon.png'
import hight_icon from '../../assets/data_selector/hight_icon.png'
import horizontal_icon from '../../assets/data_selector/horizontal_icon.png'
import viechle_type from '../../assets/data_selector/viechle_type.jpg'
import image4069LE from '../../assets/kelim/4069LE.png'
import image10E from '../../assets/kelim/10E.png'
import image120AETJ from '../../assets/kelim/120AETJ.png'
import image1230ES from '../../assets/kelim/1230ES.png'
import image150AETJ from '../../assets/kelim/150AETJ.png'
import image170AETJ from '../../assets/kelim/170AETJ.png'
import image260MRT from '../../assets/kelim/260MRT.png'
import image460SJ from '../../assets/kelim/460SJ.png'
import image1350 from '../../assets/kelim/1350.png'
import imageGR15 from '../../assets/kelim/GR15.png'
import imageGR20 from '../../assets/kelim/GR20.png'
import imageGS1330 from '../../assets/kelim/GS1330.png'
import imageGS1930 from '../../assets/kelim/GS1930.png'
import imageGS2032 from '../../assets/kelim/GS2032.png'
import imageGS2632 from '../../assets/kelim/GS2632.png'
import imageGS3232 from '../../assets/kelim/GS3232.png'
import imageGS3246 from '../../assets/kelim/GS3246.png'
import imageGS3384RT from '../../assets/kelim/GS3384RT.png'
import imageGS4047 from '../../assets/kelim/GS4047.png'
import imageGS4069 from '../../assets/kelim/GS4069.png'
import imageGS4069RT from '../../assets/kelim/GS4069RT.png'
import imageGS5390RT from '../../assets/kelim/GS5390RT.png'
import imageGTZZ15J from '../../assets/kelim/GTZZ15J.png'
import imageS45 from '../../assets/kelim/S45.png'
import imageS65 from '../../assets/kelim/S65.png'
import imageS85 from '../../assets/kelim/S85.png'
import imageSX125 from '../../assets/kelim/SX125.png'
import imageZ30 from '../../assets/kelim/Z30.png'
import imageZ34D from '../../assets/kelim/Z34D.png'
import imageZ34E from '../../assets/kelim/Z34E.png'
import imageZ45D from '../../assets/kelim/Z45D.png'
import imageZ45E from '../../assets/kelim/Z45E.png'
import imageZ51 from '../../assets/kelim/Z51.png'
import imageZ60 from '../../assets/kelim/Z60.png'
import imageZ80 from '../../assets/kelim/Z80.png'
import OrderHandler from './OrderHandler';
import HeadBar from '../componets/HeadBar';
import usrInfoImg from '../../assets/icons/usrInfo.png'
import shoppingCartImg from '../../assets/icons/shopping-cart.png'
import xMarkImage from '../../assets/icons/x-mark.png'
import calendarImage from '../../assets/icons/calendar.png'



const data = [//holds all the raw data
{
  name: '1230ES',
  vehicleType: 'במת יחיד',
  engType: 'חשמלי',
  workLocation: 'הכל',
  workHeight: '5.60',
  liftStrenght: '0.227',
  accessibility: 'אנכית',
  groundType: 'מהודק',
  groundLevel:'שטח מפולס ישר',
  brand:'JLG',
  color:'#ff773d',
  image:image1230ES,
  pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/1230ES.pdf',
},
{
  name: 'GR15',
  vehicleType: 'במת יחיד',
  engType: 'חשמלי',
  workLocation: 'הכל',
  workHeight: '6.50',
  liftStrenght: '0.227',
  accessibility: 'אנכית',
  groundType: 'מהודק',
  groundLevel:'שטח מפולס ישר',
  brand:'Genie',
  color:'#86bbd8',
  image:imageGR15,
  pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GR15.pdf',
},
{
  name: 'GR20',
  vehicleType: 'במת יחיד',
  engType: 'חשמלי',
  workLocation: 'הכל',
  workHeight: '8.00',
  liftStrenght: '0.159',
  accessibility: 'אנכית',
  groundType: 'מהודק',
  groundLevel:'שטח מפולס ישר',
  brand:'Genie',
  color:'#86bbd8',
  image:imageGR20,
  pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GR20.pdf',
},
{
  name: '10E',
  vehicleType: 'במת תורן אנכי',
  engType: 'חשמלי',
  workLocation: 'הכל',
  workHeight: '10.00',
  liftStrenght: '0.200',
  accessibility: 'אנכית',
  groundType: 'מהודק',
  groundLevel:'שטח מפולס ישר',
  brand:'JLG',
  color:'#ff773d',
  image:image10E,
  pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/TOUCAN__10E.pdf',
},

  {
    name: 'GS1330',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '5.90',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    image:imageGS1330,
    color:'#86bbd8',
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/en/gs1330m_spec_2019-11-26.pdf',
  },
  {
    name: 'GS1930',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '7.80',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    image:imageGS1930,
    color:'#86bbd8',
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS1932.pdf'
  },
  {
    name: 'GS2032',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '8.00',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS2032,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS2032.pdf'
  },
  {
    name: 'GS2632',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '9.90',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS2632,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS2632.pdf'
  },
  {
    name: 'GS3246',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'any',
    workHeight: '11.70',
    liftStrenght: '0.318',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS3246,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS3246.pdf'
  },
  {
    name: 'GS4047',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'any',
    workHeight: '13.70',
    liftStrenght: '0.350',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS4047,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/en-gb/gs-4047-product-specifications-2020.pdf?sfvrsn=30a86589_2'
  },
  {
    name: '4069LE',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '14.00',
    liftStrenght: '0.360',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:image4069LE,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/4069LE.pdf'
  },
  {
    name: 'GS3232',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.70',
    liftStrenght: '0.227',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS3232,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/ko/gsspec_gs3232_gs3246_en-us-apac_lr.pdf?sfvrsn=a813c4f1_3'
  },
  {
    name: 'GS4069',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '14.00',
    liftStrenght: '0.360',
    accessibility: 'אנכית',
    groundType: 'מהודק',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS4069,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/rough-terrain-scissor-lifts/en-sg/2022/2022-spec-sheet-gs2669rt_gs3369rt_gs4069rt-ansi-(sea).pdf?sfvrsn=912b1616_3'
  },
  
   {
    name: '260MRT',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '9.90',
    liftStrenght: '0.560',
    accessibility: 'אנכית',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:image260MRT,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/260MRT.pdf'
  },
  {
    name: 'GS3384RT',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '12.00',
    liftStrenght: '0.450',
    accessibility: 'אנכית',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS3384RT,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS3384RT.pdf',
  },
  {
    name: 'GS4069RT',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '14.00',
    liftStrenght: '0.363',
    accessibility: 'אנכית',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS4069RT,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/en/2022/gsspec_gs2669_rt_gs3369_rt_gs4069_rt_en-us_na_lr.pdf?sfvrsn=e477c727_3',
  },
  {
    name: 'GS5390RT',
    vehicleType: 'במת מספריים עם מייצבים',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '18.00',
    liftStrenght: '0.680',
    accessibility: 'אנכית',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:imageGS5390RT,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/GS5390RT.pdf',
  },
  {
    name: 'Z30',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.00',
    liftStrenght: '0.227',
    liftAccesibility: '6.30',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ30,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/articulated-boom-lift/en/2022/zboomspec_z30_20n_z30_20n_rj_en-us_na_lrec42dc61-4a3d-4937-a372-497615db2242.pdf?sfvrsn=6db84fd1_3'
  },
  {
    name: '120AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.90',
    liftStrenght: '0.200',
    liftAccesibility: '7.00',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:image120AETJ,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/120AETJ.pdf'
  },
  {
    name: 'Z34-E',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '12.50',
    liftStrenght: '0.215',
    liftAccesibility: '6.50',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ34E,
    pdfLink:"https://www.ofeklift.com/images/pdf/product_catalog/Z34-22N.pdf"
  },
  {
    name: '150AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '15.00',
    liftStrenght: '0.200',
    liftAccesibility: '7.60',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:image150AETJ,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/150AETJ.pdf'
  },
  {
    name: 'Z45-E',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '15.90',
    liftStrenght: '0.227',
    liftAccesibility: '7.60',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ45E,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z45-25J.pdf'
  },
  {
    name: '170AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '16.90',
    liftStrenght: '0.200',
    liftAccesibility: '9.40',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:image170AETJ,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/170AETJ.pdf'
  },
{
    name: 'Z34-D',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '12.50',
    liftStrenght: '0.227',
    liftAccesibility: '6.80',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',  
    image:imageZ34D,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z34-22N.pdf'
},
{
    name: 'Z45-D',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '16.00',
    liftStrenght: '0.227',
    liftAccesibility: '7.60',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ45D,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z45-25J.pdf'
},
{
  name: 'GTZZ15J',
  vehicleType: 'זרוע מפרקית',
  engType: 'ממונע',
  workLocation: 'פתוח',
  workHeight: '16.70',
  liftStrenght: '0.25',
  liftAccesibility: '8.50',
  accessibility: 'הכל',
  groundType: 'הכל',
  groundLevel:'שטח מפולס ישר',
  brand:'Genie',
  color:'#86bbd8',
  image:imageGTZZ15J,
  pdfLink:'https://chinamotors.co.il/wp-content/uploads/2018/05/sinoboom-GTZZ15J-4p-14.5.pdf'
},
{
    name: 'Z51',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '17.60',
    liftStrenght: '0.227',
    liftAccesibility: '9.40',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ51,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/articulated-boom-lift/en-gb/2022/zboomspec_z51_30j_rt_en-gb_emear_lr.pdf?sfvrsn=220ec3c2_5'
},
{
    name: 'Z60',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '20.40',
    liftStrenght: '0.227',
    liftAccesibility: '11.00',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ60,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z60-34.pdf'
},
{
    name: 'Z80',
    vehicleType: 'זרוע מפרקית',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '25.80',
    liftStrenght: '0.227',
    liftAccesibility: '18.30',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageZ80,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/Z80-60.pdf'
},

{
    name: 'S45',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '15.70',
    liftStrenght: '0.227',
    liftAccesibility: '11.20',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageS45,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/S45.pdf'
},
{
    name: '460SJ',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '16.00',
    liftStrenght: '0.227',
    liftAccesibility: '10.20',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:image460SJ,
    pdfLink:'https://www.jlg.com/-/media/jlg/current-materials-no-password/products/americas%20-%20ansi/engine-powered-boom-lifts/telescopic-booms/400-series/docs/400-series-telescopic-boom-spec-sheet.pdf'
},
{
    name: 'S65',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '22.00',
    liftStrenght: '0.227',
    liftAccesibility: '17.10',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageS65,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/telescopic-booms/en-au/s-65-xc-product-specifications-2019.pdf?sfvrsn=e39b3a6b_2'
},
{
    name: 'S85',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: 28.00,
    liftStrenght: 0.227,
    liftAccesibility: 23.30,
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:imageS85,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/S85.pdf'
},
{
    name: 'SX125',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: 40.00,
    liftStrenght: 0.3,
    liftAccesibility: 24.40,
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',  
    image:imageSX125,
    pdfLink:'https://www.genielift.com/docs/default-source/product-specifications/telescopic-booms/en-au/sx-125-xc-product-specifications-2019.pdf?sfvrsn=8ddf32d0_2'
},
{
    name: '1350SJP',
    vehicleType: 'זרוע טלסקופית ישרה',
    engType: 'ממונע',
    workLocation: 'פתוח',
    workHeight: '43.00',
    liftStrenght: '0.227',
    liftAccesibility: '24.38',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:image1350,
    pdfLink:'https://www.ofeklift.com/images/pdf/product_catalog/1350SJP.pdf'
},

]


const config_data =[//hold all the filters
{
  filter_name:"engType",
  filter_title:"הנעה",
  filterType:'dropdown',
  image:engineType,
  options:  [   
  { label: 'חשמלי', value: '2',image: electricEngine},
  { label: 'ממונע', value: '3',image:gasEngine },
  { label: 'הכל', value: '4',image:toolBox },
]
} , 
{
    filter_name:"accessibility",
    filter_title:"נגישות כלי",
    filterType:'dropdown',
    image:accesibilty_icon,
    options:  [          //הורדתי אופקית כי מי שיכחל אופקית יכול הכול
    { label: 'אנכית', value: 'vertical', image:vertical },
    { label: 'אופקית', value: 'horizontal', image:horizontal },
    { label: 'הכל', value: 'any', image:anyIcon },]
  },
 
  {
    filter_name:"vehicleType",
    filter_title:"סוג כלי",
    filterType:'dropdown',
    image:viechle_type,
    options:  [          
    { label: 'במת יחיד', value: '1',image:lifticon },
    { label: 'במת תורן אנכי', value: '3',image:lifticon },
    { label: 'במת מספריים', value: '2',image:lifticon },
    { label: 'במת מספריים עם מייצבים', value: '5' ,image:teleBoom},
    { label: 'זרוע מפרקית', value: '6',image:boomIcon },
    { label: 'זרוע טלסקופית ישרה', value: '7', image:teleBoom  },
    { label: 'הכל', value: '8', image:anyIcon},
  ]
  } ,
  {
    filter_name:"groundLevel",
    filter_title:"זווית הקרקע",
    filterType:'dropdown',
    image:groundNagle,

    options:  [          
    { label: 'שטח מפולס ישר', value: '1' ,image:level},
    { label: 'שטח משופע', value: '2',image:uneven },
    { label: 'הכל', value: '3' , image:toolBox},]
  } ,

  {
    filter_name:"groundType",
    filter_title:"סוג קרקע",
    filterType:'dropdown',
    image:groundType,

    options:  [   //מחקתי מהודק ואדמה כי אם כלי יכול מהודק ואדמה, הוא יכול הכל       
    { label: 'מהודק', value: '1',image:asphalt },
    { label: 'כורכר ואדמה', value: '2', image:soil },
    { label: 'הכל', value: '3', image:toolBox },]
  } ,

 
  {
    filter_name:"workLocation",
    filter_title:"מקום עבודה",
    filterType:'dropdown',
    image:workLocation,
    options:  [ 
    { label: 'סגור', value: 'closed',image:warehouseicon },
    { label: 'פתוח', value: 'open',image:farmicon },
    { label: 'הכל', value: 'any', image:anyIcon },
   ]
  } ,
  
  ]

  const config_data_range =[//hold all the filters of ranges
    {
      filter_name:"workHeight",
      filter_title:"גובה עבודה",
      filter_range_type:'מטר',
      filter_type:'range',
      options:  [
        0,42
      ]
    },
    {
      filter_name:"liftStrenght",
      filter_title:"כושר הרמה",
      filter_range_type:'טון',
      filter_type:'range',
      options:  [
     0.2,0.6,
      ]
    },
    {
      filter_name:"liftAccesibility",
      filter_title:"נגישות אופקית",
      filter_range_type:'מטר',
      filter_type:'range',
      options:  [
     5,24
      ]
    }
  ]

  const infoTextLong = '"ליפט פיינדר" הוא כלי עזר ייחודי למציאת כלים מתאימים לעבודה בגובה. הוא מציע ערך מוסף למגוון המקצועי, עם אוסף של 35 כלים שונים כמו במות הרמה, במות מספריים, במות טלסקופיים ועוד. מעבר למבחר הכלים, התוכנה כוללת כלי סינון מתקדמים שנוצרו כדי לסייע למשתמשים למצוא במהירות את הכלי המתאים ביותר לצרכיהם הספציפיים. באמצעות פילטרים פשוטים כמו מקום העבודה, סוג הכלי, וגובה העבודה, התוכנה מספקת תוצאות מדויקות שמקנות למשתמשים את היכולת לבחור בין האפשרויות ולהבטיח פתרון אופטימלי לכל משימה.'
  const infoTextShort = '"ליפט פיינדר" הוא כלי עזר למציאת כלים מתאימים לעבודה בגובה. עם אוסף של 35 כלים שונים כמו במות הרמה, במות מספריים, במות טלסקופיים ועוד. '
  const infostructions1 = "על מנת לבצע חיפוש יש ללחוץ על כפתור ה-'סנן'"
  const infostructions2 = " אם תרצו לאפס את משתני החיפוש, לחצו על כפתור האיפוס"



const MainScreen = (navigation, route, state) => {
  const [infoModalVisible, setInfoModelVisible] = useState(false);
  const [cartModalVisible, setCartModelVisible] = useState(false);
  const {height, width} = useWindowDimensions();
  const [filterdData, setFilterdData] = useState(data);
  const [toolFilters,  setToolFilters] = useState({});
  const [config, setConfig] = useState(config_data);
  const [infoModalShown , setInfoModalShown] = useState();
  const [cartModalShown , setCartModalShown] = useState();
  const [infoTextData,setInfoTextData] = useState(" ");
  const [selectedId, setSelectedId] = useState();

  //const {orderData} = route.params;

  const [cartData,setCartData] = useState([ //holds all the data that the user selected
  
    
  ]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    console.log('refreshing')
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

//cart display
const CartItem = ({title,quanity,dates,item}) => (//the item that will be shown in the list
<View style={styles.itemCart}>
  <View style={styles.cartBtns}>
    <Pressable style={{flex:1,height:'100%'}} onPress={()=>cartItemXMarkImagePressed({item})} >
    <Image source={xMarkImage} style={{resizeMode:'contain', flex:1, }}/>
    </Pressable>
    <Pressable style={{flex:1,height:'100%'}} onPress={()=>cartItemCalendarImagePressed({item})} >
    <Image source={calendarImage} style={{resizeMode:'contain', flex:1,}}/>
    </Pressable>
    </View>
    <View style={styles.cartItemData}>
      <Text style={styles.modalTextBody}> כמות: {quanity} </Text>
      </View>
      <View style={styles.cartItemTitle}>
  <Text style={styles.titleItemCart}>{title} :מזהה כלי</Text>
  </View>
</View>
);

  console.log("app start")
  console.log(data.length)
  console.log(navigation.params)
  const route1=useRoute();
  route1.params.orderData=cartData;
  console.log(route1.params.orderData)

 
  const cartItemXMarkImagePressed = (item) => {//remove item from cart
    console.log('cartItemXMarkImagePressed',item)
    console.log(cartData.findIndex((element)=>element.name===item.item.name))
    let index=cartData.findIndex((element)=>element.name===item.item.name)
    cartData.splice(index,index+1)
    console.log('cartData',cartData)
    setCartData([...cartData])

      

    //> -1 && cartData.splice(cartData.indexOf(item), 1);
    console.log('cartData',cartData)
    
  }

  const cartItemCalendarImagePressed = (item) => {//temp add to item cart
    console.log('cartItemCalendarImagePressed',item)
    }

  const renderItem = ({item}) => (//the item that will be shown in the list
<CartItem item={item} title={item.name} quanity={item.quanity} dates={item.dates}
   />);
  

  const filterData = (filter_name, value) => {//create the filters
    console.log('filter before', toolFilters)
    setToolFilters({...toolFilters, [filter_name]: value});
    if(value === 'הכל')
      setToolFilters({...toolFilters, [filter_name]: undefined});

      console.log('filter after', toolFilters)

}
const logoPressed=()=>{//logo pressed
  console.log('logo pressed')
  Linking.openURL('https://www.ofeklift.com/')
}
const resetFilters=()=>{//reset all filters

  setToolFilters({});
  console.log('reset filters',toolFilters)
  setFilterdData([...data]);
  console.log('reset filters',filterdData)
  console.log('reset filters',data)
  console.log('reset filters',toolFilters)


}


 
const filterImgs=()=>{//filter  data btn has been pressed
console.log('filter items',toolFilters);
  const filteredData = data.filter((item) => {
    let isMatch = true;
    for (const key in toolFilters) {
      if(key==='workHeight'||key==='liftStrenght'||key==='liftAccesibility' )
      {//ragne type filter
        console.log('range filter')
        console.log('hey')
        console.log(item[key])
        console.log(toolFilters[key][0])
        if (item[key] < toolFilters[key][0]||item[key]===undefined) {
          isMatch = false;
        }
      }else{//dropdown type filter
        console.log('dropdown filter')
        if(item[key]==='הכל'){
          console.log('הכל')
        }
        else 
        if ((toolFilters[key] !== item[key]&&  toolFilters[key] !== undefined)) {
          isMatch = false;
        }
      }
     
    }
    return isMatch;
  });
  setFilterdData([...filteredData]);
}

const usrInfoPressed=()=>{//user info btn has been pressed
  console.log('user info pressed')
  
  if(Dimensions.get('window').width>815){
    console.log('tablet')
    setInfoTextData(infoTextLong)
    setInfoModalShown(false)
  }else{
     setInfoModalShown(true)
      setCartModalShown(true)
     console.log('phone')
     setInfoTextData(infoTextShort)
     console.log(infoTextData)
     console.log(infoTextShort)
    }
  setInfoModelVisible(true)
  console.log(infoModalShown)

}

const shoppingCartPressed=()=>{//shopping cart btn has been pressed
  console.log('shopping cart pressed')

  if(Dimensions.get('window').width>815){
    console.log('tablet')
    setCartModalShown(false)
  }else{
    console.log('phone')
    setCartModalShown(true)
  }
    setCartModelVisible(true)
}



  return (
    <View style={styles.container}>

      <View style={styles.left}>
        <View style={styles.imageslider}>
     <ImagSlider cartData={cartData} data={filterdData}/>
     </View>

     </View>
     <View style={styles.right}>
     <Modal   //info modal
        animationType='fade'
        style={styles.cartModal}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationInTiming={500}
        animationOutTiming={700}
        coverScreen={infoModalShown}
        isVisible={infoModalVisible}
        onBackdropPress={()=> setInfoModelVisible(false)}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setInfoModelVisible(false);
        }}>
          <View style={styles.modalView}>
          <View style={styles.itemView}>
            <View style={styles.modalInfoHeadS}>
              <Text style={styles.modalTextHeadB}>"ליפט פיינדר"</Text>
              <Text style={styles.modalTextHead}>מוצר מבית אופק ליפט, חברה לפתרונות בעבודה בגובה</Text>
           
            </View>
            <View style={styles.modalInfoBodyS}>
              <Text style={styles.modalTextBody}>{infoTextData}</Text>
              <Text style={styles.modalTextBody}>{infostructions1}</Text>
              <Text style={styles.modalTextBody}>{infostructions2}</Text>
            </View>
            <View style={styles.modalInfoTailS}>
              <View style={styles.modalInfoTailS1}>
              <Text style={styles.modalTextTail}>ליפט פיינדר©Lift finder</Text>
            </View>
            <View style={styles.modalInfoTailS2}>
            <Text style={styles.modalTextHeadDate}>עדכון מספר:7</Text>
            <Text style={styles.modalTextHeadDate}>תאריך עדכון אחרון:17/08/2023</Text>
              </View>

            </View>

            
           </View>
            <Pressable
              style={[styles.buttonx, styles.buttonClose]}
              onPress={() => setInfoModelVisible(!infoModalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
      </Modal>
     
     <Modal  //cart modal
        animationType='fade'
        style={styles.cartModal}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
        coverScreen={cartModalShown}
        isVisible={cartModalVisible}
        onBackdropPress={()=> setCartModelVisible(false)}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setCartModelVisible(false);
        }}>
          <View style={styles.cartModalView}>
          <View style={styles.CartitemView}>
            <View style={styles.CartmodalInfoHeadS}>
              <Text style={styles.modalTextHeadB}>עגלת קניות</Text>
              <Text style={styles.modalTextHead}>כאן תוכל לראות את סל הקניות שלך</Text>
           
            </View>
            <View style={styles.CartmodalInfoBodyS}>
              <ScrollView style={styles.scrollView}>
                <View style={styles.cartItemScroll}>
              <SafeAreaView style={styles.safeContainer}>
            <FlatList
        data={cartData}
        extraData={cartData}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
      </SafeAreaView>
      </View>
      </ScrollView>
            </View>
            <View style={styles.CartmodalInfoTailS}>
              <View style={styles.modalInfoTailS1}>
              <Text style={styles.modalTextTail}>ליפט פיינדר©Lift finder</Text>
            </View>
            <View style={styles.modalInfoTailS2}>
            <Text style={styles.modalTextHeadDate}>עדכון מספר:7</Text>
            <Text style={styles.modalTextHeadDate}>תאריך עדכון אחרון:17/08/2023</Text>
              </View>

            </View>

            
           </View>
            <Pressable
              style={[styles.buttonx, styles.buttonClose]}
              onPress={() => setInfoModelVisible(!infoModalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
      </Modal>
     
      
      <View style={
        {...Platform.select({
            ios:{

            },
            android:{
            },
            web:{
              width:'100%',
            },
            default:{},
          }),
        }}>
            <View style={styles.logobar}>
              <View style={styles.usrBtns}>
                <Pressable style={styles.usrInfoS} onPress={usrInfoPressed}>
                  <Image source={usrInfoImg} style={styles.usrInfoImgs} />
                </Pressable>
                <Pressable style={styles.shoppingCartS} onPress={shoppingCartPressed}>
                  <Image source={shoppingCartImg} style={styles.shoppingCartImgs} />
                </Pressable>
              </View>
            <Pressable onPress={logoPressed} style={styles.logoimg}>
            <Image source={logo} style={styles.logo} />
            </Pressable>
          </View>
            
      <View style={styles.datafilter}>
        {
          config_data.map((item,i)=>{
            return <>
            <DataFilter key={item.filter_title} filterData={filterData} name={item.filter_title} type={item.filter_name} image={item.image} options={item.options}/>
            </>
          }
          )
        }

        
      </View>
      <View style={styles.dataRange}>
        {
        config_data_range.map((item,i)=>{
          return <>
          <DataRange key={item.filter_title} filterData={filterData} name={item.filter_title} ratioType={item.filter_range_type}  type={item.filter_name} options={item.options}/>
                    </>
        }
        )
      }
        </View>

        <View style={styles.btns}>
         <View style={styles.infos}>
          <Text style={styles.infotext}>מספר דגמים: {filterdData.length}</Text>
          </View>

        <Pressable onPress={filterImgs} style={styles.fliterData}>
          <Image source={filter_data_icon } style={styles.filterimg} />
          <View style={styles.filterTextView}>
          <Text style={styles.filterbtntext} >סנן</Text>
          </View>
    </Pressable>


    <Pressable  style={styles.resetdata} onPress={resetFilters}>
          <Image source={reset}  style={styles.resetimg} />
    </Pressable>

    </View>
      </View>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemScroll:{
    flex:1,
    flexDirection:'column',
  },
  scrollView:{
    flex:1,
    flexDirection:'column',
  },
  cartModal:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    alignContent:'flex-end',
    backgroundColor:'powdrgray',
    
    margin:0,
  },
  itemCart:{
    flex:1,
    borderWidth:1,
    marginVertical:'1%',
    padding:'1%',
    borderColor:'#2f4858',
    flexDirection:'row',
    justifyContent:'space-around',    
  },
  cartBtns:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    alignContent:'center',
    borderWidth:1,
    borderColor:'#2f4858',
  },
  cartItemData:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:1,
  },
  cartItemTitle:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#2f4858',
  },

  titleItemCart:{
    fontSize:15,
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  safeContainer:{
    flex:1,
    borderWidth:1,
    flexDirection:'column',
    borderColor:'white'
  },

  cartModalView:{
    backgroundColor: '#adaaab',
    borderColor:'#2f4858',
    flexDirection:"column",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    padding: '1%',
    shadowColor: '#c1dae0',
    alignSelf:'flex-end',
    height:'100%',
    width:'70%',
  },
  CartitemView:{
    flex:1,
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center',
      alignSelf:'stretch',
  },
  CartmodalInfoHeadS:{
    ...Dimensions.get('window').width > 900 ? {flex:1}:{flex:1},
    backgroundColor:'#dedfe4',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width:'100%',
    textAlign:'center',
    adjustsFontSizeToFit:true,
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center',
  },
  CartmodalInfoBodyS:{
    ...Dimensions.get('window').width > 900 ? {flex:6}:{flex:5},
    backgroundColor:'#ededef',
    width:'100%',
    textAlign:'center',
    alignSelf:'stretch',
    justifyContent:'stretch',
    alignItems:'stretch',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth:1,
  },
  CartmodalInfoTailS:{
    ...Dimensions.get('window').width > 900 ? {flex:1}:{flex:1},
  },
  modalInfoTailS1:{
    flex:1,
    justifyContent:'center',
  },
  modalInfoTailS2:{
    flex:1,
    justifyContent:'center',

  },
  modalInfoHeadS:{
    flex:2,
    width:'100%',
    textAlign:'center',
    adjustsFontSizeToFit:true,
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center',

  },
  modalTextHeadB:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    alignSelf:'stretch',
  },
  modalTextHead:{
    fontSize:18,
    textAlign:'center',
    alignSelf:'stretch',
  },
  modalTextHeadDate:{
    fontSize:14,
    textAlign:'right  ',
    alignSelf:'stretch',
  },
  modalInfoBodyS:{
    ...Dimensions.get('window').width>815?{flex:4}:{flex:3},
    width:'100%',
    backgroundColor:"#daf7dc",
    borderRadius: 12,
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center',

  },
  modalTextBody:{
    fontSize:16,
    textAlign:'center',
    alignSelf:'stretch',
    marginTop:'2%',
  },
   
  modalInfoTailS:{
    flex:1,
    width:'100%',
    flexDirection:'row',
  },
  modalTextTail:{
    fontSize:12,
    textAlign:'left',
   
  },
  modalView: {
    backgroundColor: '#d0d5d4',
    borderWidth:3,
    borderColor:'#2f4858',
    flexDirection:"column",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    
    padding: '1%',
    shadowColor: '#c1dae0',
    
    ...Dimensions.get('window').width>815?
    {
       height:'90%',   
       width:'100%',
      }:
      {
        height:'80%',   
        width:'70%',
            },
   
    },
    itemView:{
      flex:5,
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center',
      alignSelf:'stretch',
    },
  
  logobar:{
    ...Dimensions.get('window').width>815?{flex:3}:{flex:1},
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f5f5f4',
    height:'100%',
    flexDirection:'row',
    margin:'2%',
    borderWidth:1,
    borderColor:'#dedfe4',
    borderRadius:20,
  },
  usrBtns:{
    ...Dimensions.get('window').width>815?{flex:1}:{flex:2},
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'center',
    paddingHorizontal:10,
    height:'100%',
  },
  usrInfoS:{
    ...Dimensions.get('window').width>815?{flex:1}:{flex:1},
    justifyContent:'center',
    alignSelf:'center',
    width:'50%',
    borderRadius:10,

  },
  shoppingCartS:{
    ...Dimensions.get('window').width>815?{flex:1}:{flex:1},
    justifyContent:'center',
    alignSelf:'center',
    width:'50%',
    borderRadius:10,
    display:'none',

  },
  usrInfoImgs:{
    ...Dimensions.get('window').width>815?{flex:1}:{flex:1},
    resizeMode:'contain',
    borderWidth:1,
    backgroundColor:'#fafafc',
    marginTop:'5%',
    alignSelf:'stretch',
    borderRadius:10,
    maxHeight:'50%',
    },
  shoppingCartImgs:{
    ...Dimensions.get('window').width>815?{flex:1}:{flex:1},
    resizeMode:'contain',
    borderWidth:1,
    backgroundColor:'#fafafc',
    marginTop:'5%',
    alignSelf:'stretch',
    borderRadius:10,
    
  },
  logoimg:{
    ...Dimensions.get('window').width>815?{flex:4}:{flex:4},
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },


  logo:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
  infos:{
    ...Dimensions.get('window').width>815?{flex:2}:{flex:6},
    backgroundColor:'#f6ae2d',
  },
  infotext:{
    textAlign:'center',
    textAlignVertical:'center',
    
  },
  btns:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f6ae2d',
    borderWidth:1,

  },
  resetdata:{
    flex:2,
    backgroundColor:'#f6ae2d',
    
    borderLeftWidth:1,
    height:'100%',
  },
  filterTextView:{
    flex:4,
    justifyContent:'center',
    alignItems:'flex-end',
    paddingRight:10,
  },
  filterimg:{
    ...Dimensions.get('window').width>815?{flex:1}:{flex:3},
    resizeMode:'contain',
    borderRadius:10,
    borderWidth:1,
    marginLeft:6,
    backgroundColor:'white',
    alignItems:'center',
  },
  resetimg:{
    flex:1,
    resizeMode:'contain',
  },
  fliterData:{
   // ...Dimensions.get('window').width>815?{backgroundColor:'black '}: {backgroundColor:'red'},

   //...height>500?{backgroundColor:'black '}: {backgroundColor:'red'},
   //...{height}>500?{backgroundColor:'black '}: {backgroundColor:'red'}, 
   flex:6,
   height: '100%',
   borderLeftWidth:1,
   flexDirection:'row',
   alignItems:'stretch',
   alignContent:'stretch',
   justifyContent:'center',

  },
  dataRange:{
    ...Dimensions.get('window').width>815?{flex:7}:{flex:4},
    backgroundColor:'#ededef'

  },
  filterbtntext:{
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:20,
    fontWeight:'bold',
  },
 
  datafilter:{
    
    ...Platform.select({
      ios:{
        flex:2,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:'center',
      },
      android:{
        flex:2,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:'center',
      },
      web:{
        ...Dimensions.get('window').width>815?{flex:8}:{flex:9},
        borderColor:'black',
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        gridTemplateRows:'1fr 1fr ',
        // make the rows heiger
        gridAutoRows:'minmax(100px)',
        

      },
      default:{
      },
    }),
     
    },
  left:{
    ...Platform.select({
      ios:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
      },
      android:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
      },
      web:{
        ...Dimensions.get('window').width>815?{flex:6}:{flex:2.5},
      flexDirection:'row',  
      alignItems:'stretch',
      width:'100%',
      height:'95%',
      paddingLeft:15,
    },
      default:{},

    }),
    

  },
  right:{
    ...Platform.select({
      ios:{
        flex:2,
      },
      android:{ 
         flex:2,

      },
      web:{
        
        ...Dimensions.get('window').width>815?{flex:4}:{flex:6},

      
      backgroundColor:'#ededef',
      flexDirection:'row',  
      justifyContent:'center',
      width:'100%',
      height:'95%',
      paddingRight:15,
      },
      default:{},
    }),
    
  },
  imageslider:{
    ...Platform.select({
      ios:{
        borderWidth:1,
        alignContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
      },
      android:{
        borderWidth:1,
        alignContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
      },
      web:{      
      flex:10, 
      // make the rows heiger
      
      },
      default:{},
    }),
    
  },

  container: {

      ...Platform.select({
        ios:{
          flexDirection:'colum',
          backgroundColor:'#86bbd8',
        },
        android:{
          backgroundColor:'#86bbd8',
        },
        web:{
          backgroundColor: '#ededef',
          alignItems:'center',
          flexDirection:'row',
         


        },
        default:{
          justifyContent:'space-around',
          

        },
      }),
      flex: 1,
    },
    text:{
    },

 
  });
  
export default MainScreen