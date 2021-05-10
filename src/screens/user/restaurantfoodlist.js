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
          vegswitch:false,
          appLoading:false,
          SearchModalVisible: false,
          searchstring:"",
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


    CustomizeModalVisible:false,
    Quantity:[
      {
        id:0,
        name:"50 ml",
        price:"$20",
        checked:false
      },
      {
        id:1,
        name:"Half Palte",
        price:"$20",
        checked:false
      },
      {
        id:2,
        name:"250 gms",
        price:"$20",
        checked:false
      },
      {
        id:3,
        name:"50 ml",
        price:"$20",
        checked:false
      },
      {
        id:4,
        name:"50 ml",
        price:"$20",
        checked:false
      },
    ],
    Preparation:[
      {
        id:0,
        name:"Normal",
        price:"$0",
        checked:false
      },
      {
        id:1,
        name:"Jain",
        price:"$20",
        checked:false
      },
      {
        id:2,
        name:"Half Jain",
        price:"$20",
        checked:false
      },

    ],
    AddOns:[
      {
        id:0,
        name:"Cheese",
        price:"$20",
        checked:false
      },
      {
        id:1,
        name:"Extra Cheese",
        price:"$20",
        checked:false
      },
      {
        id:2,
        name:"Extra Pav",
        price:"$20",
        checked:false
      },
      {
        id:3,
        name:"Roti",
        price:"$20",
        checked:false
      },
    ],

    Menulist:[
      {
        id:0,
        name:"Recommended",
        number:"14",
        checked:true
      },
      {
        id:1,
        name:"Pizza",
        number:"11",
        checked:false
      },
      {
        id:2,
        name:"Sandwich",
        number:"150",
        checked:false
      },
    ],

    SuggestionModalVisible:false,
    MenuModalVisible:false,

      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onViewCartClick = this.onViewCartClick.bind(this);
 
      this.onSearchIconCLick = this.onSearchIconCLick.bind(this);
      this.onFavIconCLick = this.onFavIconCLick.bind(this);
      this.onSearchModalBackClick = this.onSearchModalBackClick.bind(this);
      this.onFilterIconClick = this.onFilterIconClick.bind(this);
      this.onCloseFilterModalIconClick = this.onCloseFilterModalIconClick.bind(this);
      this.checkThisBoxSearch = this.checkThisBoxSearch.bind(this);
      this.checkThisBoxCuisine = this.checkThisBoxCuisine.bind(this);
      this.checkThisBoxFilter = this.checkThisBoxFilter.bind(this);
      this.checkThisBoxQuantity = this.checkThisBoxQuantity.bind(this);
      this.checkThisBoxPreparation = this.checkThisBoxPreparation.bind(this);
      this.checkThisBoxQuantity = this.checkThisBoxQuantity.bind(this);
      this.onCleanFilterModalClick = this.onCleanFilterModalClick.bind(this);
      this.onApplyFilterModalClick = this.onApplyFilterModalClick.bind(this);
      this.onCustomizeIconClick = this.onCustomizeIconClick.bind(this);
      this.onCustomizeModalCloseClick = this.onCustomizeModalCloseClick.bind(this);
      this.onSuggestionModalCloseClick = this.onSuggestionModalCloseClick.bind(this);
      this.onMenuClick = this.onMenuClick.bind(this);
      this.onMenuItemClick = this.onMenuItemClick.bind(this);
      this.onMenuCloseClick = this.onMenuCloseClick.bind(this);
      this.onAddProductClick = this.onAddProductClick.bind(this);
      

    }

    componentDidMount(){
    }


    onAddProductClick(){
      this.setState({SuggestionModalVisible:true})
    }

    onSuggestionModalCloseClick(){
      this.setState({SuggestionModalVisible:false})
    }


    onBackClick(){
        this.props.navigation.goBack();
    }

    onViewCartClick(){
        this.props.navigation.navigate('Cart');
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
                            <TouchableOpacity onPress={this.onAddProductClick} style={{height:hp('3%'),width:wp('15%'),borderWidth:hp('0.15%'),borderColor:colors.gray,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>ADD</Text>
                            </TouchableOpacity>
                          </View>
                      </View>
                  }
             />
                  )
      };

      _updateSections = activeSections => {
        this.setState({ activeSections });
      };

      onMenuClick(){
        this.setState({MenuModalVisible:true})
      }

      onMenuItemClick(){
        this.setState({MenuModalVisible:false})
        this.contentRef.scrollTo(hp('30%'));
      }

      onMenuCloseClick(){
        this.setState({MenuModalVisible:false})
      }

      onSearchIconCLick(){
        this.setState({SearchModalVisible:true})
      }

      onFavIconCLick(){
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

      checkThisBoxQuantity=(itemID)=>{
        let list=this.state.Quantity
        list[itemID].checked=!list[itemID].checked
        this.setState({Quantity:list})
      }

      checkThisBoxPreparation=(itemID)=>{
        let list=this.state.Preparation
        list[itemID].checked=!list[itemID].checked
        this.setState({Preparation:list})
      }

      checkThisBoxAddOns=(itemID)=>{
        let list=this.state.AddOns
        list[itemID].checked=!list[itemID].checked
        this.setState({AddOns:list})
      }

      onCustomizeIconClick(){
        this.setState({CustomizeModalVisible:true})
      }

      onCustomizeModalCloseClick(){
        this.setState({CustomizeModalVisible:false})
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
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('3%'),width:hp('3%')}} resizeMode='contain' />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:wp('4%'),height:hp('7%'),width:wp('30%')}}>
            <TouchableOpacity onPress={this.onFavIconCLick} ><Image source={require('../../assets/icon/heart_gray.png')} style={{height:hp('3%'),width:hp('3%'),marginHorizontal:wp('3%')}} resizeMode='contain' /></TouchableOpacity>
            <TouchableOpacity onPress={this.onSearchIconCLick}><Image source={require('../../assets/icon/search_gray.png')} style={{height:hp('3%'),width:hp('3%')}} resizeMode='contain' /></TouchableOpacity>
        </View>
        </View>

       <ScrollView
            ref={ref => this.contentRef = ref}
            nestedScrollEnabled={true}
            style={styles.subcontainer2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: hp('20%')}}
        >

                    <View style={{marginTop:hp('2%'),alignSelf:"center",flexDirection:"row",height:hp('12%'),width:wp('90%')}}>
                      <View style={{height:hp('12%'),width:wp('30%')}}>
                           <Image source={this.state.renderOBJ.resto.image} style={{height:hp('12%'),width:wp('30%')}} resizeMode='cover'></Image>
                      </View>
                      <View style={{height:hp('12%'),width:wp('60%'),justifyContent:"center"}}>
                           <View style={{marginLeft:wp('5%')}}>
                           <Text style={{fontSize:fonts.normalheader,fontWeight:"bold",color:colors.black}} numberOfLines={1}>{this.state.renderOBJ.resto.name}</Text>
                           <View style={{borderBottomColor:colors.gray,borderBottomWidth:hp('0.1%'),width:wp('37%'),marginTop:hp('1%')}}>
                           </View>
                           </View>
                           <View style={{flexDirection:"row",marginLeft:wp('5%'),marginTop:hp('1%')}}>
                           <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>{this.state.renderOBJ.resto.rating}</Text>
                           <Text style={{fontSize:fonts.subnormal,color:colors.gray,marginLeft:wp('1%')}} numberOfLines={1}> | {this.state.renderOBJ.resto.time} | </Text>
                           <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' />
                           <Image source={require('../../assets/icon/non_veg_icon.png')} style={{height:hp('2%'),width:hp('2%'),marginLeft:hp('1%')}} resizeMode='contain' />
                           </View>   
                      </View>
                  </View>

                  <View style={{marginTop:hp('2%'),backgroundColor:colors.gray,alignSelf:"center",height:hp('0.1%'),width:wp('90%'),borderBottomWidth:hp('0.1%')}}></View>


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

                    <TouchableOpacity onPress={this.onFilterIconClick} style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../../assets/icon/search_gray.png')} style={{height:hp('1.75%'),width:hp('1.75%'),marginHorizontal:wp('1.5%')}} resizeMode='contain' />
                    <Text style={{fontSize:fonts.normal1,color:colors.gray,marginHorizontal:wp('1.5%')}}>Sort | Filter</Text>
                    </TouchableOpacity>

                    </View>

                  <View style={{marginTop:hp('2%'),width:wp('90%'),alignSelf:"center",alignItems:"flex-start",justifyContent:"center"}}>
                  <Text style={{fontSize:fonts.normalheader,fontWeight:"bold",color:colors.black}}>Recommended</Text>
                  </View>
        

                  <ScrollView 
                        horizontal={true}
                        nestedScrollEnabled={true}
                        style={{height:hp('32%'),width:wp('100%')}}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: wp('5%')}}
                    >

                            {
                                this.state.renderOBJ.recommended.map((item)=>{
                                    return(
                                        <View style={{marginVertical:hp('2%'),height:hp('30%'),width:wp('35%'),marginHorizontal:wp('7%')}}>
                                            <Image source={item.image} style={{height:hp('18%'),width:wp('35%')}} resizeMode='cover'></Image>
                                            <View style={{marginTop:hp('1%')}}>
                                            <Text style={{fontSize:fonts.subnormal2,color:colors.gray}} numberOfLines={1}>{item.desc}</Text>
                                            </View>
                                            <View style={{marginBottom:hp('0.5%'),flexDirection:"row",alignItems:"center"}}>
                                            <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('1%'),width:hp('1%'),marginRight:wp('1%')}} resizeMode='contain' />
                                            <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>{item.name}</Text>
                                            </View>
                                            <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:hp('1%')}}>
                                            <Text style={{fontSize:fonts.normal,color:colors.primary}} numberOfLines={1}>{item.price}</Text>
                                            <View>
                                                <View style={{height:hp('3%'),width:wp('15%'),borderWidth:hp('0.15%'),borderColor:colors.gray,justifyContent:"center",alignItems:"center"}}>
                                                <Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>ADD</Text>
                                                </View>
                                            </View>
                                            </View>
                                            <TouchableOpacity onPress={this.onCustomizeIconClick} style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                                            <View></View>      
                                                <Text style={{fontSize:fonts.subnormal2,color:colors.gray}} numberOfLines={1}>Customizable</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                                }

                    </ScrollView>

                {
                    this.state.renderOBJ.categorys.map((item)=>{
                            return( 
                                    <View style={{marginVertical:hp('3%'),width:wp('90%'),alignSelf:"center",}}>
                                        <Text ref={ref => this.targetRef = ref} style={{fontSize:fonts.normalheader,fontWeight:"bold",color:colors.black}} numberOfLines={1}>{item.name}</Text>  
                                            <Accordion
                                                sections={item['menu-items']}
                                                activeSections={this.state.activeSections}
                                                keyExtractor={item => item.id}
                                                renderHeader={this._renderHeader}
                                                renderContent={this._renderContent}
                                                onChange={this._updateSections}
                                                underlayColor={"#fff"}                  
                                                containerStyle={{ backgroundColor: "transparent" }}
                                            />  
                                    </View>
                            )
                        
                    })
                }
        
        </ScrollView>
    
        <View style={styles.subcontainer3}>
                <TouchableOpacity onPress={this.onViewCartClick} style={{flexDirection:"row",alignItems:"center",height:hp('8%'),width:wp('30%')}}>
                <Image source={require('../../assets/icon/cart_yellow.png')} style={{height:hp('3%'),width:hp('3%'),marginRight:hp('1%')}} resizeMode='contain' />
                <Text style={{fontSize:fonts.normal,color:colors.white}} numberOfLines={1}>View Cart</Text>  
                </TouchableOpacity>
                <View style={{alignItems:"center",height:hp('8%'),width:wp('30%'),justifyContent:"center",alignSelf:"center"}}>
                <Text style={{fontSize:fonts.normal2,color:colors.yellow_font}} numberOfLines={1}>3 item | $200</Text>  
                </View>
        </View>
        <TouchableOpacity onPress={()=>{
                this.onMenuClick();
            }}  style={styles.menuButtonContainer}>
                <Text style={styles.loginButtonText}>MENU</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/icon/resto_menu_icon.png')} style={{height:hp('2%'),width:hp('2%'),bottom:hp('2%'),position:"absolute",bottom:hp('14.5%'),alignSelf:"center"}} resizeMode='contain' />
        
        <Modal isVisible={this.state.SearchModalVisible} animationOutTiming={1} animationIn="slideInDown">
        <View style={styles.modalmain}>
            <TouchableOpacity onPress={this.onSearchModalBackClick} style={styles.modalsub1}><Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('3%'),width:hp('3%'),}} resizeMode='contain' /></TouchableOpacity>
            <View style={styles.modalsub2}>            
                <View style={styles.searchInputContainer}>
                <TextInput style = {styles.searchInputField}
                    ref={(input) => { this.searchInputRef = input }}
                    returnKeyType="done"
                    onSubmitEditing={() => { this.onSearchModalBackClick() }}
                    blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter dish name..."
                    placeholderTextColor={colors.gray}
                    autoCapitalize = "none"
                    value={this.state.searchstring}
                    onChangeText={(searchstring) => this.setState({searchstring})}  />
                </View>
            </View>

        </View>
        </Modal>


        <Modal isVisible={this.state.FilterModalVisible} animationOut="slideOutDown" animationIn="slideInUp">
        <View style={styles.fmodalmain}>
          <View style={styles.fmodalsub1}>
          <Text style={{fontSize:fonts.normal2,color:colors.black}} numberOfLines={1}>Sort / Filter</Text>  
          <TouchableOpacity onPress={this.onCloseFilterModalIconClick}><Image source={require('../../assets/icon/close_icon.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' /></TouchableOpacity>
          </View>
          <View style={styles.fmodalsub2}>
              <View style={{height:hp('7%'),width:wp('100%'),flexDirection:"row",justifyContent:"space-around",alignItems:"center" }}>
                <TouchableOpacity onPress={()=>{this.setState({tabINDEX:0})}} style={{justifyContent:"center",alignItems:"center",height:hp('7%'),width:wp('33%'),borderBottomWidth:hp('0.15%'),borderBottomColor:this.state.tabINDEX==0?colors.primary:colors.white}}><Text style={{fontSize:fonts.normal2,color:this.state.tabINDEX==0?colors.black:colors.gray}}>Sort</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({tabINDEX:1})}} style={{justifyContent:"center",alignItems:"center",height:hp('7%'),width:wp('33%'),borderBottomWidth:hp('0.15%'),borderBottomColor:this.state.tabINDEX==1?colors.primary:colors.white}}><Text style={{fontSize:fonts.normal2,color:this.state.tabINDEX==1?colors.black:colors.gray}}>Cuisine</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({tabINDEX:2})}} style={{justifyContent:"center",alignItems:"center",height:hp('7%'),width:wp('33%'),borderBottomWidth:hp('0.15%'),borderBottomColor:this.state.tabINDEX==2?colors.primary:colors.white}}><Text style={{fontSize:fonts.normal2,color:this.state.tabINDEX==2?colors.black:colors.gray}}>Filter</Text></TouchableOpacity>
              </View>
              <View style={{height:hp('38%'),width:wp('100%'), alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                {
                  this.state.tabINDEX == 0 ?
                  <FlatList
                  numColumns={1}
                  showsVerticalScrollIndicator={false}
                  style={{height:hp('38%'),width:wp('100%')}}
                  contentContainerStyle={{ paddingBottom: hp('4%')}}
                  data={this.state.sortlist}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) =>                     
                          <View style={{marginTop:hp('1%'),alignSelf:"center",width:wp('90%') ,}}>
                                  <CheckBox
                                  title={item.name}
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checkedColor={colors.primary}
                                  uncheckedColor={colors.gray}
                                  textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                  checked={this.state.sortlist[item.id].checked}
                                  containerStyle={{backgroundColor:colors.white,borderWidth:0}}
                                  onPress={() => this.checkThisBoxSearch(item.id)}
                                  />
                          </View>
                          
                      }
                  />
                  :
                  this.state.tabINDEX == 1 ?
                      <FlatList
                      numColumns={1}
                      showsVerticalScrollIndicator={false}
                      style={{height:hp('38%'),width:wp('100%')}}
                      contentContainerStyle={{ paddingBottom: hp('4%')}}
                      data={this.state.cuisinelist}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) =>                     
                              <View style={{marginTop:hp('1%'),alignSelf:"center",width:wp('90%') ,}}>
                                      <CheckBox
                                      title={item.name}
                                      checkedIcon='dot-circle-o'
                                      uncheckedIcon='circle-o'
                                      checkedColor={colors.primary}
                                      uncheckedColor={colors.gray}
                                      textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                      checked={this.state.cuisinelist[item.id].checked}
                                      containerStyle={{backgroundColor:colors.white,borderWidth:0}}
                                      onPress={() => this.checkThisBoxCuisine(item.id)}
                                      />
                              </View>
                              
                          }
                      />
                  :
                  <FlatList
                  numColumns={1}
                  showsVerticalScrollIndicator={false}
                  style={{height:hp('38%'),width:wp('100%')}}
                  contentContainerStyle={{ paddingBottom: hp('4%')}}
                  data={this.state.filterlist}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) =>                     
                          <View style={{marginTop:hp('1%'),alignSelf:"center",width:wp('90%') ,}}>
                                  <CheckBox
                                  title={item.name}
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checkedColor={colors.primary}
                                  uncheckedColor={colors.gray}
                                  textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                  checked={this.state.filterlist[item.id].checked}
                                  containerStyle={{backgroundColor:colors.white,borderWidth:0}}
                                  onPress={() => this.checkThisBoxFilter(item.id)}
                                  />
                          </View>
                          
                      }
                  />
                }


              </View>
          </View>

          <View style={styles.fmodalsub3}>
          <TouchableOpacity onPress={()=>{
                this.onCleanFilterModalClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Clean All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                this.onApplyFilterModalClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>APPLY</Text>
            </TouchableOpacity>
          </View>

        </View>
        </Modal>

        <Modal isVisible={this.state.CustomizeModalVisible} animationOut="slideOutDown" animationIn="slideInUp">
        <View style={styles.cmodalmain}>

          <View style={styles.cmodalsub1}>
            <View style={{}}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
              <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2%'),width:hp('2%'),marginRight:hp('1%')}} resizeMode='contain' />
              <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Customize "Name"</Text>  
              </View>
            <Text style={{fontSize:fonts.subnormal,color:colors.primary,marginLeft:hp('3%')}} numberOfLines={1}>$200</Text>  
            </View>
          <TouchableOpacity onPress={this.onCustomizeModalCloseClick}><Image source={require('../../assets/icon/close_icon.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' /></TouchableOpacity>
          </View>

 
          <ScrollView 
              style={styles.cmodalsub2}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: hp('2%'),paddingHorizontal:wp('5%'),justifyContent:"center",}}
          >

              <View style={{}}>
                <Text style={{fontSize:fonts.normal,fontWeight:"bold",color:colors.black,marginLeft:wp('5%'),marginBottom:hp('1%')}} numberOfLines={1}>Quantity</Text>  
              </View>

              <FlatList
                  numColumns={1}
                  showsVerticalScrollIndicator={false}
                  style={{}}
                  contentContainerStyle={{}}
                  data={this.state.Quantity}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) =>                     
                          <View style={{marginTop:hp('1%'),alignSelf:"center",width:wp('90%') ,}}>
                                  <CheckBox
                                  title={item.name + ' - ' +item.price}
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checkedColor={colors.primary}
                                  uncheckedColor={colors.gray}
                                  textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                  checked={this.state.Quantity[item.id].checked}
                                  containerStyle={{backgroundColor:colors.white,borderWidth:0}}
                                  onPress={() => this.checkThisBoxQuantity(item.id)}
                                  />
                          </View>
                          
                      }
                />

              <View style={{alignSelf:"center",height:hp('0.1%'),width:wp('50%'),backgroundColor:colors.light_gray,marginVertical:hp('1.50%')}}></View>


              <View style={{}}>
                <Text style={{fontSize:fonts.normal,fontWeight:"bold",color:colors.black,marginLeft:wp('5%'),marginBottom:hp('1%')}} numberOfLines={1}>Preparation</Text>  
              </View>

              <FlatList
                  numColumns={1}
                  showsVerticalScrollIndicator={false}
                  style={{}}
                  contentContainerStyle={{}}
                  data={this.state.Preparation}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) =>                     
                          <View style={{marginTop:hp('1%'),alignSelf:"center",width:wp('90%') ,}}>
                                  <CheckBox
                                  title={item.name + ' - ' +item.price}
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checkedColor={colors.primary}
                                  uncheckedColor={colors.gray}
                                  textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                  checked={this.state.Preparation[item.id].checked}
                                  containerStyle={{backgroundColor:colors.white,borderWidth:0}}
                                  onPress={() => this.checkThisBoxPreparation(item.id)}
                                  />
                          </View>
                          
                      }
                />

              <View style={{alignSelf:"center",height:hp('0.1%'),width:wp('50%'),backgroundColor:colors.light_gray,marginVertical:hp('1.50%')}}></View>


              <View style={{}}>
                <Text style={{fontSize:fonts.normal,fontWeight:"bold",color:colors.black,marginLeft:wp('5%'),marginBottom:hp('1%')}} numberOfLines={1}>Add Ons</Text>  
              </View>

              <FlatList
                  numColumns={1}
                  showsVerticalScrollIndicator={false}
                  style={{}}
                  contentContainerStyle={{}}
                  data={this.state.AddOns}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) =>                     
                          <View style={{marginTop:hp('1%'),alignSelf:"center",width:wp('90%') ,}}>
                                  <CheckBox
                                  title={item.name + ' - ' +item.price}
                                  checkedIcon='check-circle-o'
                                  uncheckedIcon='check-circle-o'
                                  checkedColor={colors.primary}
                                  uncheckedColor={colors.gray}
                                  textStyle={{fontSize:fonts.normal1,fontWeight:"normal",}}
                                  checked={this.state.AddOns[item.id].checked}
                                  containerStyle={{backgroundColor:colors.white,borderWidth:0}}
                                  onPress={() => this.checkThisBoxAddOns(item.id)}
                                  />
                          </View>
                          
                      }
                />


          </ScrollView>
      

          <View style={styles.cmodalsub3}>
          <TouchableOpacity onPress={()=>{
                this.onCustomizeModalCloseClick();
            }}  style={styles.cButtonContainer}>
                <Text style={styles.cButtonText}>Item Total : $200</Text>
                <Text style={styles.cButtonText}>ADD ITEM</Text>
            </TouchableOpacity>
          </View>

        </View>
        </Modal>

        <Modal isVisible={this.state.SuggestionModalVisible} animationOut="slideOutDown" animationIn="slideInUp">
        <View style={styles.smodalmain}>

          <View style={styles.smodalsub1}>
            <Text style={{fontSize:fonts.normal,color:colors.black,fontWeight:"bold"}} numberOfLines={1}>Suggested Item</Text>  
          <TouchableOpacity onPress={this.onSuggestionModalCloseClick}><Image source={require('../../assets/icon/close_icon.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' /></TouchableOpacity>
          </View>

 
          <ScrollView 
              style={styles.smodalsub2}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: hp('2%'),paddingHorizontal:wp('5%'),justifyContent:"center",}}
          >

                              {
                                this.state.renderOBJ.recommended.map((item)=>{
                                    return(
                                        <View style={{marginVertical:hp('1%'),height:hp('10%'),width:wp('90%'),alignSelf:"center",flexDirection:"row",borderBottomWidth:hp('0.1%'),borderColor:colors.light_gray}}>
                                            <Image source={item.image} style={{height:hp('9%'),width:wp('20%')}} resizeMode='cover'></Image>
                                            <View style={{height:hp('10%'),width:wp('70%'),paddingHorizontal:wp('5%')}} >
                                              <View style={{}}>
                                              <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>{item.name}</Text>
                                              <View style={{flexDirection:"row",alignItems:"center",marginTop:hp('1%'),justifyContent:"space-between"}}>
                                                <Text style={{fontSize:fonts.normal,color:colors.primary}} numberOfLines={1}>{item.price}</Text>
                                                <View style={{height:hp('3%'),width:wp('15%'),borderWidth:hp('0.15%'),borderColor:colors.gray,justifyContent:"center",alignItems:"center"}}>
                                                <Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>ADD</Text>
                                                </View>
                                              </View>
                                              </View>
                                            </View>
                                        </View>
                                    )
                                })
                                }

          </ScrollView>     
        </View>
        </Modal>


        <Modal isVisible={this.state.MenuModalVisible} animationOut="slideOutDown" animationIn="slideInUp">
        <View style={styles.mmodalmain}>

          <View style={styles.mmodalsub1}>
          <Text style={{fontSize:fonts.normal,color:colors.black,fontWeight:"bold"}} numberOfLines={1}></Text>  
          <TouchableOpacity onPress={this.onMenuCloseClick}><Image source={require('../../assets/icon/close_icon.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' /></TouchableOpacity>
          </View>

 
          <ScrollView 
              style={styles.mmodalsub2}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: hp('2%')}}
          >

                              {
                                this.state.Menulist.map((item)=>{
                                    return(
                                        <TouchableOpacity onPress={()=>{this.onMenuItemClick()}} style={{height:hp('5%'),width:wp('90%'),alignSelf:"center",flexDirection:"row",}}>
                                          <View style={{height:hp('5%'),width:wp('15%'),alignItems:"center",justifyContent:"center"}}>
                                              {
                                                item.checked?
                                                <Image source={require('../../assets/icon/tick_primary.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' />
                                                :null
                                              }
                                          </View>
                                          <View style={{height:hp('5%'),width:wp('60%'),paddingHorizontal:wp('1%'),justifyContent:"center"}}>
                                            <Text style={{colot:colors.black,fontSize:fonts.normal}}>{item.name}</Text>
                                          </View>
                                          <View style={{height:hp('5%'),width:wp('15%'),alignItems:"center",justifyContent:"center",}}>
                                          <Text style={{colot:colors.gray,fontSize:fonts.normal}}>{item.number}</Text>
                                          </View>
                                        </TouchableOpacity>
                                    )
                                })
                                }

          </ScrollView>     
        </View>
        </Modal>

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


    cmodalmain:{height:hp('93%'),width:wp('100%'),alignSelf:"center",alignItems:"center",backgroundColor:colors.white,position:"absolute",bottom:-hp('2.5%')},
    cmodalsub1:{height:hp('7%'),width:wp('100%'),paddingHorizontal:wp('10%'),alignItems:"center",justifyContent:"space-between",alignSelf:"center",flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:colors.gray},
    cmodalsub2:{height:hp('73%'),width:wp('100%')},
    cmodalsub3:{height:hp('13%'),width:wp('100%'),justifyContent:"center",alignItems:"center",flexDirection:"row",borderTopWidth:hp('0.15%'),borderColor:colors.gray},

    smodalmain:{height:hp('60%'),width:wp('100%'),alignSelf:"center",alignItems:"center",backgroundColor:colors.white,position:"absolute",bottom:-hp('2.5%')},
    smodalsub1:{height:hp('7%'),width:wp('100%'),paddingHorizontal:wp('10%'),alignItems:"center",justifyContent:"space-between",alignSelf:"center",flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:colors.gray},
    smodalsub2:{height:hp('53%'),width:wp('100%')},

    mmodalmain:{height:hp('40%'),width:wp('90%'),alignSelf:"center",alignItems:"center",backgroundColor:colors.white,position:"absolute",bottom:hp('20%'),borderRadius:hp('2%')},
    mmodalsub1:{height:hp('7%'),width:wp('90%'),paddingHorizontal:wp('5%'),alignItems:"center",justifyContent:"space-between",alignSelf:"center",flexDirection:"row",},
    mmodalsub2:{height:hp('33%'),width:wp('90%'),},

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

    cButtonContainer:{
      alignItems:'center',
      justifyContent:"space-between",
      alignSelf:"center",
      flexDirection:"row",
      backgroundColor:colors.primary,
      height:hp('7%'),
      width:wp('90%'),
      paddingHorizontal:hp('2%'),
      paddingVertical:hp('1%'),
      borderRadius:hp('1%'),
  },
  cButtonText:{
      color:colors.white,
      fontSize:font.normal
  },
    menuButtonContainer:{
      alignItems:'center',
      justifyContent:"center",
      alignSelf:"center",
      position:"absolute",
      bottom:hp('10%'),
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