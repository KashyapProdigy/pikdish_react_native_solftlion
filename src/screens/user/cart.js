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
import Accordion from 'react-native-collapsible/Accordion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleSwitch from 'toggle-switch-react-native';
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        activeSections: [],
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
          },
          renderCart:[
            {
                id:1,
                desc:"1 Plate",
                type:"veg",
                name:"Ala cater &value mealsasdasdsad sadsad sadsad sadsa",
                price:"$200",
                qty:"1",
                image:require('../../assets/image/offer_tab5.png'),            
                customizable:true,
            },
            {
                id:2,
                desc:"1 Plate",
                type:"veg",
                name:"Ala cater &value meals",
                price:"$200",
                qty:"1",
                image:require('../../assets/image/offer_tab3.png'),            
                customizable:false,
            },
            {
                id:3,
                desc:"1 Plate",
                type:"veg",
                name:"Ala cater &value meals",
                price:"$200",
                qty:"1",
                image:require('../../assets/image/offer_tab1.png'),            
                customizable:true,
            },
            {
                id:3,
                desc:"1 Plate",
                type:"veg",
                name:"Ala cater &value meals",
                price:"$200",
                qty:"1",
                image:require('../../assets/image/offer_tab2.png'),            
                customizable:false,
            },
            ],

          searchstring:"",
          chefnote:"",
          appLoading:false,
          tipsChecked:false,
          tipw10:false,
          tipw20:false,
          tipw50:false,
          tipw100:false,
          ngoChecked:false,
          tipn10:false,
          tipn20:false,
          tipn50:false,
          tipn100:false,
          SearchModalVisible: false,
          FilterModalVisible:false,
          tabINDEX:0,
          sortlist:[
            {
              id:0,
              name:"Relevance",
              checked:false
            },
            {
              id:1,
              name:"Alphabetical",
              checked:false
            },
            {
              id:2,
              name:"Discount",
              checked:false
            },
            {
              id:3,
              name:"Rating",
              checked:false
            },
            {
              id:4,
              name:"Preparation time",
              checked:false
            },
        ],
        cuisinelist:[
          {
            id:0,
            name:"Chinese",
            checked:false
          },
          {
            id:1,
            name:"South Indian",
            checked:false
          },
          {
            id:2,
            name:"Continental",
            checked:false
          },

      ],
      filterlist:[
        {
          id:0,
          name:"My Favourite",
          checked:false
        },
        {
          id:1,
          name:"Offer Only",
          checked:false
        },
        {
          id:2,
          name:"Veg",
          checked:false
        },
        {
          id:3,
          name:"Non-Veg",
          checked:false
        },
    ],


      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onOfferClick = this.onOfferClick.bind(this);
      this.onLocationClick = this.onLocationClick.bind(this);
      this.onTableOrderClick = this.onTableOrderClick.bind(this);
      this.onTakeAwayClick = this.onTakeAwayClick.bind(this);
      this.onDeliveryClick = this.onDeliveryClick.bind(this);
      this.onEventClick = this.onEventClick.bind(this);
      this.onSearchIconCLick = this.onSearchIconCLick.bind(this);
      this.onSearchModalBackClick = this.onSearchModalBackClick.bind(this);
      this.onFilterIconClick = this.onFilterIconClick.bind(this);
      this.onCloseFilterModalIconClick = this.onCloseFilterModalIconClick.bind(this);
      this.checkThisBoxSearch = this.checkThisBoxSearch.bind(this);
      this.checkThisBoxCuisine = this.checkThisBoxCuisine.bind(this);
      this.checkThisBoxFilter = this.checkThisBoxFilter.bind(this);
      this.onCleanFilterModalClick = this.onCleanFilterModalClick.bind(this);
      this.onApplyFilterModalClick = this.onApplyFilterModalClick.bind(this);

      

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


 

      onSearchIconCLick(){
        this.setState({SearchModalVisible:true})
      }

      onSearchModalBackClick(){
        this.setState({SearchModalVisible:false,searchstring:""})
      }
  
      onFilterIconClick(){
        this.setState({FilterModalVisible:true})
      }
  
      onCloseFilterModalIconClick(){
        this.setState({FilterModalVisible:false})
      }

      onCleanFilterModalClick(){
        this.setState({FilterModalVisible:false,
          sortlist:[
            {
              id:0,
              name:"Relevance",
              checked:false
            },
            {
              id:1,
              name:"Alphabetical",
              checked:false
            },
            {
              id:2,
              name:"Discount",
              checked:false
            },
            {
              id:3,
              name:"Rating",
              checked:false
            },
            {
              id:4,
              name:"Preparation time",
              checked:false
            },
          ],
          cuisinelist:[
          {
            id:0,
            name:"Chinese",
            checked:false
          },
          {
            id:1,
            name:"South Indian",
            checked:false
          },
          {
            id:2,
            name:"Continental",
            checked:false
          },

          ],
          filterlist:[
        {
          id:0,
          name:"My Favourite",
          checked:false
        },
        {
          id:1,
          name:"Offer Only",
          checked:false
        },
        {
          id:2,
          name:"Veg",
          checked:false
        },
        {
          id:3,
          name:"Non-Veg",
          checked:false
        },
          ],
        })
      }

      onApplyFilterModalClick(){
        this.setState({FilterModalVisible:false})
      }

      checkThisBoxSearch=(itemID)=>{
        let list=this.state.sortlist
        list[itemID].checked=!list[itemID].checked
        this.setState({sortlist:list})
      }

      checkThisBoxCuisine=(itemID)=>{
        let list=this.state.cuisinelist
        list[itemID].checked=!list[itemID].checked
        this.setState({cuisinelist:list})
      }

      checkThisBoxFilter=(itemID)=>{
        let list=this.state.filterlist
        list[itemID].checked=!list[itemID].checked
        this.setState({filterlist:list})
      }

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
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('2.5%'),width:hp('2.5%')}} resizeMode='contain' />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:wp('4%'),height:hp('7%'),width:wp('30%')}}>
        </View>
        </View>

       <KeyboardAwareScrollView 
            style={styles.subcontainer2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            extraHeight={hp('5%')}
            contentContainerStyle={{ paddingBottom: hp('5%')}}
        >

                    <View style={{marginTop:hp('2%'),alignSelf:"center",flexDirection:"row",height:hp('12%'),width:wp('100%')}}>
                      <View style={{height:hp('12%'),width:wp('35%'),justifyContent:"center",alignItems:"center",}}>
                           <Image source={this.state.renderOBJ.resto.image} style={{height:hp('10%'),width:wp('25%'),borderRadius:hp('1%')}} resizeMode='cover'></Image>
                      </View>
                      <View style={{height:hp('12%'),width:wp('65%'),justifyContent:"center"}}>
                           <View style={{marginLeft:wp('5%'),flexDirection:"row"}}>
                           <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2%'),width:hp('2%'),alignSelf:"center"}} resizeMode='contain' />
                           <Text style={{fontSize:fonts.normal,fontWeight:"bold",color:colors.black,marginLeft:hp('1%')}} numberOfLines={1}>{this.state.renderOBJ.resto.name}</Text>
                           </View>
                           <View style={{marginLeft:hp('5%'),flexDirection:"row"}}>
                           <Text style={{fontSize:fonts.subnormal,color:colors.light_gray,marginLeft:hp('1%'),borderBottomColor:colors.light_gray,borderBottomWidth:hp('0.1%')}} numberOfLines={1}>{this.state.renderOBJ.resto.name}</Text>
                           </View>
                           <View style={{flexDirection:"row",marginLeft:hp('6%'),marginRight:wp('5%'),paddingTop:hp('1%'),}}>
                           <Text style={{fontSize:fonts.subnormal,color:colors.light_gray}} numberOfLines={1}>{this.state.renderOBJ.resto.rating}</Text>
                           <Text style={{fontSize:fonts.subnormal,color:colors.light_gray,marginLeft:wp('1%')}} numberOfLines={1}> | {this.state.renderOBJ.resto.time} | </Text>
                           </View>   
                      </View>
                  </View>

                  <View style={{marginTop:hp('2%'),backgroundColor:colors.light_gray,alignSelf:"center",height:hp('0.15%'),width:wp('90%'),}}></View>




                    {
                                this.state.renderCart.map((item)=>{
                                    return(
                                        <View style={{marginTop:hp('2%'),height:hp('8%'),width:wp('90%'),alignSelf:"center",alignItems:"center",flexDirection:"row"}}>
                                        <View style={{width:wp('8%'),height:hp('8%'),alignItems:"center"}}>
                                        <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2%'),width:hp('2%'),marginTop:hp('0.5%')}} resizeMode='contain' />
                                        </View>
              
                                        <View style={{width:wp('57%'),height:hp('8%'),paddingRight:wp('5%')}}>
                                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Sandwich Dhokla</Text>  
                                        <Text style={{fontSize:fonts.normal1,color:colors.gray}} numberOfLines={1}>$20</Text>  
                                        <Text style={{fontSize:fonts.normal1,color:colors.gray}} numberOfLines={1}>1 Plate</Text>  
                                        </View>
              
                                        <View style={{width:wp('25%'),height:hp('8%'),justifyContent:"center",alignItems:"center",}}>
                                          <View style={{height:hp('4.5%'),width:wp('22%'),borderWidth:hp('0.15%'),flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",borderColor:colors.gray,}}>
                                          <TouchableOpacity><Image source={require('../../assets/icon/minus_icon_primary.png')} style={{marginLeft:wp('1%'),height:hp('2%'),width:hp('2%')}} resizeMode='contain' /></TouchableOpacity>
                                          <Text style={{fontSize:fonts.normal1,color:colors.primary}} numberOfLines={1}>22</Text>
                                          <TouchableOpacity><Image source={require('../../assets/icon/plus_icon_primary.png')} style={{marginLeft:wp('1%'),height:hp('2%'),width:hp('2%')}} resizeMode='contain' /></TouchableOpacity>
                                          </View>
                                          {
                                              item.customizable?
                                              <TouchableOpacity style={{height:hp('3%'),marginTop:hp('0.5%'),width:wp('15%'),justifyContent:"center",alignItems:"center",flexDirection:"row",}}>
                                              <Text style={{fontSize:fonts.mini,color:colors.light_gray}} numberOfLines={1}>CUSTOMIZED</Text>
                                              <Image source={require('../../assets/icon/nav_down_primary.png')} style={{marginLeft:wp('1%'),height:hp('2%'),width:hp('2%')}} resizeMode='contain' />
                                              </TouchableOpacity>
                                              :
                                              <View style={{height:hp('3%'),marginTop:hp('0.5%'),width:wp('15%'),justifyContent:"center",alignItems:"center",flexDirection:"row",}}>
                                              </View>
                                          }

                                        </View>
                                  </View>
                                    )
                                })
                    }


                    <View style={{marginTop:hp('4%'),borderTopWidth:hp('0.1%'),borderBottomWidth:hp('0.1%'),borderColor:colors.light_gray,height:hp('7%'),width:wp('90%'),alignSelf:"center"}}>
                        <View style={styles.noteInputContainer}>
                        <TextInput style = {styles.noteInputField}
                            ref={(input) => { this.noteInputRef = input }}
                            returnKeyType="done"
                            underlineColorAndroid = "transparent"
                            placeholder = "Note for Chef"
                            placeholderTextColor={colors.gray}
                            autoCapitalize = "none"
                            value={this.state.chefnote}
                            onChangeText={(chefnote) => this.setState({chefnote})}  />
                        </View>
                    </View>

                    <TouchableOpacity onPress={this.onApplyCouponClick} style={{marginTop:hp('2%'),elevation:1,paddingHorizontal:wp('5%'),flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:colors.white,height:hp('7%'),width:wp('100%'),alignSelf:"center"}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../../assets/icon/discount_primary.png')} style={{height:hp('2%'),width:hp('2%'),marginTop:hp('0.5%')}} resizeMode='contain' />
                        <Text style={{fontSize:fonts.normal,color:colors.black,marginLeft:wp('5%')}} numberOfLines={1}>APPLY COUPON</Text>
                        </View>
                        <View>
                        <Image source={require('../../assets/icon/nav_right_primary.png')} style={{height:hp('2%'),width:hp('2%'),alignSelf:"center"}} resizeMode='contain' />
                        </View>
                    </TouchableOpacity>

                    <View  style={{marginTop:hp('2%'),elevation:1,paddingHorizontal:wp('5%'),paddingTop:hp('2%'),paddingBottom:hp('4%'),backgroundColor:colors.white,width:wp('100%'),alignSelf:"center"}}>
                        <View style={{flexDirection:"row",height:hp('7%'),width:('100%'),alignSelf:"center",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.normal,fontWeight:"bold",color:colors.black}} numberOfLines={1}>Restaurant Bill</Text>
                        <View></View>
                        </View>
                        <View style={{flexDirection:"row",height:hp('7%'),width:('100%'),alignSelf:"center",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.normal1,color:colors.black}} numberOfLines={1}>Item Total</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>$105.00</Text>
                        </View>
                        <View style={{flexDirection:"row",height:hp('7%'),width:('100%'),alignSelf:"center",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.normal1,color:colors.black}} numberOfLines={1}>Offer Discount</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>-$21.00</Text>
                        </View>
                        <View style={{flexDirection:"row",height:hp('7%'),width:('100%'),alignSelf:"center",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.normal1,color:colors.black}} numberOfLines={1}>Restaurant Packing Charges</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>$105.00</Text>
                        </View>
                        <View style={{flexDirection:"row",height:hp('7%'),width:('100%'),borderTopWidth:hp('0.1%'),borderBottomWidth:hp('0.1%'),borderColor:colors.light_gray,alignSelf:"center",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.normal1,color:colors.black}} numberOfLines={1}>Delivery Charges</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>$105.00</Text>
                        </View>
                        <View style={{flexDirection:"row",height:hp('7%'),width:('100%'),alignSelf:"center",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.black,fontWeight:"bold"}} numberOfLines={1}>Grand Total</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>$105.00</Text>
                        </View>
                        <View style={{height:hp('7%'),width:('100%'),backgroundColor:colors.beige,alignSelf:"center",justifyContent:"center",paddingHorizontal:wp('5%')}}>
                        <Text style={{fontSize:fonts.normal1,color:colors.black,}} numberOfLines={1}>You have saved $21 on the bill</Text>
                        </View>
                    </View>

                    {
                        this.state.tipsChecked == true ?
                            <View style={{width:('100%'),alignSelf:"center",}}>
                            <CheckBox
                                        title={"Tips for Waiter"}
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipsChecked}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipsChecked:!this.state.tipsChecked,
                                            tipw10:false,
                                            tipw20:false,
                                            tipw50:false,
                                            tipw100:false,
                                        })}}
                                />
                            <View style={{height:hp('7%'),width:('100%'),justifyContent:"space-evenly",flexDirection:"row",alignSelf:"center",paddingHorizontal:wp('5%')}}>
                                
                                <CheckBox
                                        title={"$10"}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipw10}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipw10:!this.state.tipw10,
                                            tipw20:false,
                                            tipw50:false,
                                            tipw100:false,
                                        })}}
                                />
                                <CheckBox
                                        title={"$20"}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipw20}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipw20:!this.state.tipw20,
                                            tipw10:false,
                                            tipw50:false,
                                            tipw100:false,
                                        })}}
                                />
                                <CheckBox
                                        title={"$50"}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipw50}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipw50:!this.state.tipw50,
                                            tipw20:false,
                                            tipw10:false,
                                            tipw100:false,
                                        })}}
                                />
                                <CheckBox
                                        iconLeft
                                        title={"$100"}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipw100}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipw100:!this.state.tipw100,
                                            tipw20:false,
                                            tipw50:false,
                                            tipw10:false,
                                        })}}
                                />
                            </View>
                            </View>
                        : 
                            <View style={{height:hp('7%'),width:('100%'),alignSelf:"center",justifyContent:"center",}}>
                            <CheckBox
                                        title={"Tips for Waiter"}
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipsChecked}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({tipsChecked:!this.state.tipsChecked})}}
                                />
                            </View>  
                    }

                    {
                        this.state.ngoChecked == true ?
                            <View style={{width:('100%'),alignSelf:"center",}}>
                            <CheckBox
                                        title={"Donate for NGO"}
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.ngoChecked}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            ngoChecked:!this.state.ngoChecked,
                                            tipn10:false,
                                            tipn20:false,
                                            tipn50:false,
                                            tipn100:false,
                                            })}}
                                />
                            <View style={{height:hp('7%'),width:('100%'),justifyContent:"space-evenly",flexDirection:"row",alignSelf:"center",paddingHorizontal:wp('5%')}}>
                                
                                <CheckBox
                                        title={"$10"}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipn10}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipn10:!this.state.tipn10,
                                            tipn20:false,
                                            tipn50:false,
                                            tipn100:false,
                                        })}}
                                />
                                <CheckBox
                                        title={"$20"}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipn20}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipn20:!this.state.tipn20,
                                            tipn10:false,
                                            tipn50:false,
                                            tipn100:false,
                                        })}}
                                />
                                <CheckBox
                                        title={"$50"}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipn50}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipn50:!this.state.tipn50,
                                            tipn10:false,
                                            tipn20:false,
                                            tipn100:false,
                                        })}}
                                />
                                <CheckBox
                                        iconLeft
                                        title={"$100"}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.tipn100}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({
                                            tipn100:!this.state.tipn100,
                                            tipn10:false,
                                            tipn20:false,
                                            tipn50:false,
                                        })}}
                                />
                            </View>
                            </View>
                        : 
                            <View style={{height:hp('7%'),width:('100%'),alignSelf:"center",justifyContent:"center",}}>
                            <CheckBox
                                        title={"Donate for NGO"}
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.gray}
                                        textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                        checked={this.state.ngoChecked}
                                        containerStyle={{backgroundColor:colors.off_white,borderWidth:0}}
                                        onPress={() => {this.setState({ngoChecked:!this.state.ngoChecked})}}
                                />
                            </View>  
                    }



                    <View style={{height:hp('8%'),marginTop:hp('5%'),width:('100%'),alignSelf:"center",flexDirection:"row"}}>
                        <TouchableOpacity onPress={this.onDetailedBillClick} style={{height:hp('10%'),width:('60%'),paddingHorizontal:wp('5%'),justifyContent:"center",backgroundColor:colors.white}}>
                        <Text style={{fontSize:fonts.normal,color:colors.black,fontWeight:"bold"}} numberOfLines={1}>$ 200.00</Text>
                        <Text style={{fontSize:fonts.normal1,color:colors.primary}} numberOfLines={1}>DETAILED BILL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPayNowClick} style={{height:hp('10%'),width:('40%'),backgroundColor:colors.primary,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.normal2,color:colors.white}} numberOfLines={1}>PAY NOW</Text>
                        </TouchableOpacity>
                    </View>  
 
        </KeyboardAwareScrollView>

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
    modalmain:{height:hp('7%'),width:wp('100%'),alignSelf:"center",alignItems:"center",backgroundColor:colors.white,position:"absolute",top:-hp('2.5%'),flexDirection:"row"},
    modalsub1:{height:hp('7%'),width:wp('10%'),justifyContent:"center",alignItems:"center",},
    modalsub2:{height:hp('7%'),width:wp('90%'),justifyContent:"center",alignItems:"center",},

    fmodalmain:{height:hp('65%'),width:wp('100%'),alignSelf:"center",alignItems:"center",backgroundColor:colors.white,position:"absolute",bottom:-hp('2.5%')},
    fmodalsub1:{height:hp('7%'),width:wp('100%'),paddingHorizontal:wp('10%'),alignItems:"center",justifyContent:"space-between",alignSelf:"center",flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:colors.gray},
    fmodalsub2:{height:hp('45%'),width:wp('100%'),justifyContent:"center",alignItems:"center",},
    fmodalsub3:{height:hp('13%'),width:wp('100%'),justifyContent:"center",alignItems:"center",flexDirection:"row",borderTopWidth:hp('0.15%'),borderColor:colors.gray},

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
        height:hp('85%'),
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
    searchInputContainer:{
        backgroundColor:colors.white,
        alignSelf:"center",
        height:hp('6%'),
        width:wp('86%'),
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
    searchInputField:{
        flex:1,
        fontSize:font.normal,
        color:colors.black
    },
    noteInputContainer:{
        alignSelf:"center",
        height:hp('6%'),
        width:wp('86%'),
    },
    noteInputField:{
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
        backgroundColor:colors.primary,
        height:hp('6%'),
        width:wp('40%'),
        borderRadius:hp('1%'),
        marginHorizontal:wp('3%')
    },
    loginButtonText:{
        color:colors.white,
        fontSize:font.normal
    },
    menuButtonContainer:{
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