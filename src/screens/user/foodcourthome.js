import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, 
    FlatList,
    TouchableOpacity,
    StatusBar,
    Keyboard,
    ScrollView
  } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleSwitch from 'toggle-switch-react-native';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        activeSections: [],
        sectionlist:[
            {
                id:1,
                title:"Table Order/Dine In",
                image:require('../../assets/image/home_cat1.png'),
            },
            {
                id:2,
                title:"Pre-Order/Table Booking",
                image:require('../../assets/image/home_cat2.png'),            
            },
            {
                id:3,
                title:"Take Away",
                image:require('../../assets/image/home_cat3.png'),            
            },
            {
                id:4,
                title:"Delivery By Restaurant",
                image:require('../../assets/image/home_cat4.png'),            
            },
            {
                id:5,
                title:"Event",
                image:require('../../assets/image/home_cat5.png'),            
            },
          ],
          renderOBJ:{
              resto:{
                name:"Lakshmi Restaurant",
                rating:"4.4",
                time:"30 mins",
                type:"both",
                image:require('../../assets/image/welcome_restaurant_bg.png'),
              },
              categorys:[  
                   {
                    "id": "26576",
                    "name": "Pizzas",
                    "position": "0",
                    "menu-items": [
                      {
                        "id": "94298",
                        "name": "Crisp Touch Pizzas",
                        "itemcount":"11 items",
                        "position": 1,
                        "description": "Tender, Spicy and Juicy. Original or Peri-Crusted",
                        "images": [],
                        "sub-items": [
                          {
                            "id": "224471",
                            "name": "3 Chicken Wings",
                            "position": 1,
                            "price": "250.00",
                            "consumable": "1:1",
                            "cuisine_name": "Indian",
                            "category_name": "Appeteasers",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          },
                          {
                            "id": "224472",
                            "name": "3 Chicken Wings",
                            "position": 1,
                            "price": "250.00",
                            "consumable": "1:1",
                            "cuisine_name": "Indian",
                            "category_name": "Appeteasers",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          },
                          {
                            "id": "224473",
                            "name": "3 Chicken Wings",
                            "position": 1,
                            "price": "250.00",
                            "consumable": "1:1",
                            "cuisine_name": "Indian",
                            "category_name": "Appeteasers",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          }
                        ]
                      },
                      {
                        "id": "94301",
                        "name": "Soft touch Pizza",
                        "position": 2,
                        "description": "Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce",
                        "images": [],
                        "itemcount":"11 items",
                        "sub-items": [
                          {
                            "id": "224479",
                            "name": "Chicken Livers and Portuguese Roll",
                            "position": 1,
                            "price": "250.00",
                            "consumable": "1:1",
                            "cuisine_name": "Indian",
                            "category_name": "Appeteasers",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          }
                        ]
                      },
                    ]
                  },
                  {
                    "id": "26582",
                    "name": "Sandwiches",
                    "position": "0",
                    "menu-items": [
                      {
                        "id": "94334",
                        "name": "Grilled Cheese Sandwiches",
                        "position": 8,
                        "description": "",
                        "itemcount":"11 items",
                        "images": [],
                        "sub-items": [
                          {
                            "id": "224522",
                            "name": "Regular",
                            "position": 1,
                            "price": "190.00",
                            "consumable": "1:1",
                            "cuisine_name": "Fast Food",
                            "category_name": "Fino sides",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          },
                          {
                            "id": "224525",
                            "name": "Large",
                            "position": 2,
                            "price": "330.00",
                            "consumable": "1:1",
                            "cuisine_name": "Fast Food",
                            "category_name": "Fino sides",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          }
                        ]
                      },
                      {
                        "id": "94337",
                        "name": "Regular Sandwiches",
                        "position": 9,
                        "description": "",
                        "images": [],
                        "itemcount":"11 items",
                        "sub-items": [
                          {
                            "id": "224528",
                            "name": "Regular",
                            "position": 1,
                            "price": "190.00",
                            "consumable": "1:1",
                            "cuisine_name": "Fast Food",
                            "category_name": "Fino sides",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          },
                          {
                            "id": "224531",
                            "name": "Large",
                            "position": 2,
                            "price": "330.00",
                            "consumable": "1:1",
                            "cuisine_name": "Fast Food",
                            "category_name": "Fino sides",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          }
                        ]
                      },
                      {
                        "id": "94399",
                        "name": "Dessert Sandwiches",
                        "position": 9,
                        "description": "",
                        "images": [],
                        "itemcount":"11 items",
                        "sub-items": [
                          {
                            "id": "123",
                            "name": "Regular",
                            "position": 1,
                            "price": "190.00",
                            "consumable": "1:1",
                            "cuisine_name": "Fast Food",
                            "category_name": "Fino sides",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          },
                          {
                            "id": "11",
                            "name": "Large",
                            "position": 2,
                            "price": "330.00",
                            "consumable": "1:1",
                            "cuisine_name": "Fast Food",
                            "category_name": "Fino sides",
                            "discount": {
                              "type": "",
                              "amount": "0.00"
                            },
                            "tags": []
                          }
                        ]
                      }
                    ]
                  },     
              ],
              recommended:[
                {
                    id:1,
                    desc:"Jodhpur Famous Maggi",
                    type:"veg",
                    name:"Ala cater &value mealsasdasdsad sadsad sadsad sadsa",
                    price:"$200",
                    image:require('../../assets/image/offer_tab5.png'),            
                    customizable:true,
                },
                {
                    id:2,
                    desc:"Jodhpur Famous Maggi",
                    type:"veg",
                    name:"Ala cater &value meals",
                    price:"$200",
                    image:require('../../assets/image/offer_tab3.png'),            
                    customizable:true,
                },
                {
                    id:3,
                    desc:"Jodhpur Famous Maggi",
                    type:"veg",
                    name:"Ala cater &value meals",
                    price:"$200",
                    image:require('../../assets/image/offer_tab1.png'),            
                    customizable:true,
                },
                {
                    id:3,
                    desc:"Jodhpur Famous Maggi",
                    type:"veg",
                    name:"Ala cater &value meals",
                    price:"$200",
                    image:require('../../assets/image/offer_tab2.png'),            
                    customizable:true,
                },
            ]
          },
             renderTerms:[
            {
                id:1,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab1.png'),
            },
            {
                id:2,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"Dine In,Pre-order",
                image:require('../../assets/image/offer_tab2.png'),
            },
            {
                id:3,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab3.png'),
            },
            {
                id:4,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab4.png'),
            },
            {
                id:5,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab5.png'),
            },
            {
                id:6,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab1.png'),
            },
            {
                id:7,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab3.png'),
            },
            {
                id:8,
                name:"Jodhpur Dabbawaladsafdsafdsafdsafdsa",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab3.png'),
            },
            {
                id:9,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                coupon_rate:"24% off",
                time:"30 mins",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab5.png'),
            },
            {
                id:10,
                name:"Jodhpur Dabbawala",
                coupon_name:"Use coupon PIKDISH",
                time:"30 mins",
                coupon_rate:"24% off",
                rating:"4.4",
                coupon_type:"On All Order",
                image:require('../../assets/image/offer_tab1.png'),
            },
          ],
          vegswitch:false,
          appLoading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onOfferClick = this.onOfferClick.bind(this);
      this.onLocationClick = this.onLocationClick.bind(this);
      this.onTableOrderClick = this.onTableOrderClick.bind(this);
      this.onPreOrderClick = this.onPreOrderClick.bind(this);
      this.onTakeAwayClick = this.onTakeAwayClick.bind(this);
      this.onDeliveryClick = this.onDeliveryClick.bind(this);
      this.onEventClick = this.onEventClick.bind(this);
    }

    componentDidMount(){}

    onLocationClick(){

    }

    onBackClick(){
        this.props.navigation.goBack();
    }

    onTableOrderClick(){
        this.props.navigation.navigate('DineIn');
    }

    onPreOrderClick(){

    }

    onTakeAwayClick(){

    }

    onDeliveryClick(){

    }

    onEventClick(){
        this.props.navigation.navigate('EventList');
    }

    onOfferClick(){
        this.props.navigation.navigate('OfferTabs');
    }


    _renderHeader = section => {
        return (
          <View style={{paddingVertical:hp('1.5%'),borderBottomColor:colors.gray,borderBottomWidth:hp('0.1%')}}>
                <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>{section.name}</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:wp('90%'),alignSelf:"center"}}>
                    <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>{section.itemcount}</Text>
                    <Image source={require('../../assets/icon/drop_down_black.png')} style={{height:hp('2%'),width:hp('2%'),bottom:hp('2%')}} resizeMode='contain' />
                    </View>
          </View>
        );
      };

      _renderContent = section => {
        console.log("i am here");
            return( 

              <FlatList
              numColumns={1}
              showsVerticalScrollIndicator={false}
              style={{}}
              contentContainerStyle={{}}
              data={section["sub-items"]}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>                     
                      <View style={{marginTop:hp('2%'),height:hp('8%'),width:wp('90%'),alignSelf:"center",alignItems:"center",flexDirection:"row"}}>
                          <View style={{width:wp('8%'),height:hp('8%'),alignItems:"center"}}>
                          <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2%'),width:hp('2%'),marginTop:hp('0.5%')}} resizeMode='contain' />
                          </View>

                          <View style={{width:wp('57%'),height:hp('8%'),paddingRight:wp('5%')}}>
                          <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>{item.category_name}</Text>  
                          <Text style={{fontSize:fonts.normal1,color:colors.gray}} numberOfLines={1}>$20</Text>  
                          <Text style={{fontSize:fonts.normal1,color:colors.gray}} numberOfLines={1}>Banna chips,fruit,chutney...</Text>  
                          </View>

                          <View style={{width:wp('25%'),height:hp('8%'),justifyContent:"center",alignItems:"center"}}>
                            <View style={{height:hp('3%'),width:wp('15%'),borderWidth:hp('0.15%'),borderColor:colors.gray,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>ADD</Text>
                            </View>
                          </View>
                      </View>
                  }
             />
                    // section["sub-items"].map((item)=>{
                      // <View style={{marginVertical:hp('2%'),width:wp('90%'),alignSelf:"center",}}>
                      //     <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>{section["sub-items"][0].category_name}</Text>  
                      // </View>
                    // })
                  )
          
            

        // section["sub-items"].map((item)=>{
        //     return( 
        //             <View style={{marginVertical:hp('2%'),width:wp('90%'),alignSelf:"center",}}>
        //                 <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>{item.name}</Text>  
        //             </View>
        //     )
        
        // })
        
      };

      _updateSections = activeSections => {
        this.setState({ activeSections });
      };

  

    render () {
      return (
       <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />
        <View style={styles.subcontainer1}>
        <View style={styles.subcontainertextcontainer}>
            <TouchableOpacity onPress={this.onBackClick} style={{height:hp('7%'),width:wp('10%'),alignItems:"center",justifyContent:"center"}}>
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('3%'),width:hp('3%')}} resizeMode='contain' />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:wp('4%'),height:hp('7%'),width:wp('30%')}}>
            <Image source={require('../../assets/icon/heart_gray.png')} style={{height:hp('3%'),width:hp('3%'),marginHorizontal:wp('3%')}} resizeMode='contain' />
            <Image source={require('../../assets/icon/search_gray.png')} style={{height:hp('3%'),width:hp('3%')}} resizeMode='contain' />
        </View>
        </View>

        <View style={styles.subcontainer2}>
            <View style={{alignSelf:"center",flexDirection:"row",height:hp('10%'),width:wp('100%'),alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                <View style={{height:hp('10%'),width:wp('90%'),justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                      
                      <Text style={{fontSize:fonts.normalheader,fontWeight:"bold",color:colors.primary,borderBottomColor:colors.gray,borderBottomWidth:hp('0.1%'),marginHorizontal:wp('6%')}} numberOfLines={1}>Jio Food Court</Text>
                     
                      <View style={{flexDirection:"row",marginTop:hp('0.5%')}}>
                      <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>{this.state.renderOBJ.resto.rating}</Text>
                      <Text style={{fontSize:fonts.subnormal,color:colors.gray,marginLeft:wp('1%')}} numberOfLines={1}> | 12 Outlets </Text>
                      </View>   
                </View>
            </View>

            <View style={{alignSelf:"center",flexDirection:"row",height:hp('25%'),width:wp('100%'),alignItems:"center",justifyContent:"center",backgroundColor:colors.off_white}}>
            <FlatList
              horizontal={true}
              showsVerticalScrollIndicator={false}
              style={{}}
              contentContainerStyle={{paddingRight:wp('3%')}}
              data={this.state.renderOBJ.recommended}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>                     
                      <View style={{marginTop:hp('2%'),height:hp('23%'),width:hp('31%'),marginLeft:wp('3%'),alignSelf:"center",alignItems:"center",flexDirection:"row"}}>
                          <Image source={item.image} style={{height:hp('22%'),width:hp('30%'),borderRadius:hp('1%')}} resizeMode='cover' />
                      </View>
                  }
             />
            </View>

            <View style={{height:hp('5%'),width:wp('90%'),alignSelf:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                  <ToggleSwitch

                    isOn={this.state.vegswitch}
                    onColor={colors.primary}
                    offColor={colors.yellow_font}
                    label="Veg :"
                    labelStyle={{ color:colors.black, fontSize:fonts.normal }}
                    size="medium"
                    onToggle={isOn => this.setState({vegswitch:isOn})}
                    />

                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../../assets/icon/search_gray.png')} style={{height:hp('1.75%'),width:hp('1.75%'),marginHorizontal:wp('1.5%')}} resizeMode='contain' />
                    <Text style={{fontSize:fonts.normal1,color:colors.gray,marginHorizontal:wp('1.5%')}}>Sort | Filter</Text>
                    </View>

            </View>

            <FlatList
              showsVerticalScrollIndicator={false}
              style={{height:hp('43%'),width:wp('98%'),alignSelf:"center",}}
              contentContainerStyle={{paddingBottom:hp('3%')}}
              data={this.state.renderTerms}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>                     
                  <View style={{marginTop:hp('2%'),alignSelf:"center",alignItems:"center",flexDirection:"row",height:hp('12%'),width:wp('96%'),borderRadius:hp('2%'),backgroundColor:colors.white}}>
                      <View style={{height:hp('12%'),width:wp('25%'),alignItems:"center",justifyContent:"center"}}>
                          <Image source={item.image} style={{height:hp('9%'),width:wp('20%'),borderRadius:hp('0.5%')}} resizeMode='stretch'></Image>
                      </View>
                      <View style={{height:hp('12%'),width:wp('47%'),justifyContent:"center"}}>
                          <View style={{}}>
                            <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp('1%')}} >
                              <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' />
                                <Text style={{fontSize:fonts.normal,color:colors.black,marginLeft:wp('1%')}} numberOfLines={1}>{item.name}</Text>
                              </View>
                          <Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>{item.coupon_name}</Text>
                          <View style={{borderBottomColor:colors.gray,borderBottomWidth:hp('0.1%'),width:wp('37%')}}>
                          </View>
                          </View>
                          <View style={{flexDirection:"row"}}>
                          <Text style={{fontSize:fonts.subnormal2,color:colors.gray}} numberOfLines={1}>{item.rating}</Text>
                          <Text style={{fontSize:fonts.subnormal2,color:colors.gray}} numberOfLines={1}>|{item.time}|</Text>
                          <Text style={{fontSize:fonts.subnormal2,color:colors.gray}} numberOfLines={1}>{item.coupon_type}</Text>
                          </View>
                          
                      </View>
                      <View style={{height:hp('12%'),width:wp('24%'),alignItems:"center",justifyContent:"center"}}>
                          <View style={{flexDirection:"row",marginBottom:hp('1%')}}>
                          <Image source={require('../../assets/icon/discount_primary.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' />
                          <Text style={{fontSize:fonts.subnormal,color:colors.primary,marginLeft:wp('1%')}} numberOfLines={1}>{item.coupon_rate}</Text>
                          </View>
                          <View style={{height:hp('4%'),width:hp('4%'),borderRadius:hp('4%')/2,elevation:9,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                          <Image source={require('../../assets/icon/heart_gray.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' />
                          </View>
                      </View>
                  </View>
                  }
             />

        </View>

    
       <DropdownAlert inactiveStatusBarStyle="dark-content" inactiveStatusBarBackgroundColor="white" ref={ref => this.dropDownAlertRef = ref} />
       </View>
     );
   
   }
}

const styles = StyleSheet.create({
    maincontainer:{
        height:hp('100%'),
        width:wp('100%'),
        backgroundColor:colors.white
    },
    subcontainer1:{
        height:hp('7%'),
        width:wp('100%'),
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    subcontainerimagecontainer:{
        height:hp('15%'),
        width:wp('86%'),
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
    },
    subcontainerimage:{
        height:hp('15%'),
        width:wp('70%'),
        alignSelf:"center"
    },
    subcontainertextcontainer:{
        height:hp('7%'),
        width:wp('10%'),
        alignSelf:"center",
        justifyContent:"center"
    },
    subcontainertextheader:{
        fontSize:fonts.navigationheader,
        color:colors.black,
    },
    subcontainertextsubheader:{
        fontSize:fonts.normal,
        color:colors.gray,
    },
    subcontainer2:{
        height:hp('93%'),
        width:wp('100%'),
        backgroundColor:colors.off_white
    },
    subcontainer3:{
        height:hp('8%'),
        width:wp('100%'),
        paddingHorizontal:wp('7%'),
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:colors.black
    },
    subcontainer2flatlist:{
        height:hp('93%'),
        width:wp('96%'),
        alignSelf:"center",
    },
    backgroundImage: {
        height:hp('100%'),
        width:wp('100%')
    },
    pageheader:{
        marginTop:hp('10%'),
        marginLeft:wp('10%'),
        fontSize:fonts.navigationheader,
        color:colors.black,
    },
    pagesubheader:{
        marginTop:hp('1%'),
        marginLeft:wp('10%'),
        fontSize:fonts.normal,
        color:colors.gray,
    },
    forgotPasswordText:{
        fontSize:font.normal,
        color:colors.primary
    },
    navigatorText:{
        fontSize:font.normal,
        color:colors.primary
    },
    forgotPasswordContainer:{
        flexDirection:"row",
        width:wp('90%'),
        justifyContent:"space-between"
    },
    inputheader:{
        marginTop:hp("3%"),
        fontSize:font.normal,
        color:colors.gray
    },
    mobileInputContainer:{
        flexDirection:'row',
        backgroundColor:colors.white,
        borderBottomColor:colors.primary,
        borderBottomWidth:hp("0.1%"),
        alignSelf:"center",
        height:hp('6%'),
    },
    passwordInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.white,
        borderBottomColor:colors.primary,
        borderBottomWidth:hp("0.1%"),
        alignSelf:"center",
        height:hp('5%'),
    },
    iconInputField:{
        flex:1,
        fontSize:font.normal,
        color:colors.black
    },
    iconInputImage:{
        height:hp('3%'),
        width:hp('3%'),
        margin:hp('2%')
    },
    loginButtonContainer:{
        alignItems:'center',
        justifyContent:"center",
        alignSelf:"center",
        position:"absolute",
        bottom:hp('11%'),
        backgroundColor:colors.primary,
        height:hp('5%'),
        width:wp('30%'),
        borderRadius:hp('3%'),
    },
    loginButtonText:{
        color:colors.white,
        fontSize:font.normal1
    },
    socialButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.white,
        marginTop:hp('2.3'),
        borderWidth:hp('0.1%'),
        height:hp('7%'),
        width:wp('86%'),
        borderRadius:hp('1.2%'),
    },
    socialButtonText:{
        flex:1,
        color:colors.black,
        textAlign:"center"
    },
    socialButtonImage:{
        height:hp('2%'),
        width:hp('2%'),
        margin:hp('2%')
    },
    OfferButtonImage:{
        height:hp('2%'),
        width:hp('2%'),
        margin:hp('1%')
    },
    CategoryImage:{
        height:hp('17%'),
        width:hp('20%')
    },
    
})