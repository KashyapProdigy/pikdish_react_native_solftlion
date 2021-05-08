import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions, 
    TouchableOpacity,
    StatusBar,
    FlatList,
    Keyboard,
    ScrollView
  } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
import Accordion from 'react-native-collapsible/Accordion';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                  "name": "Laxmi Fast Food",
                  "date":"05/03/2019",
                  "bill":"$500",
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
                  "name": "Jio Food Mall",
                  "date":"05/03/2025",
                  "bill":"$500",
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
          appLoading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onRepeatOrderClick = this.onRepeatOrderClick.bind(this);
    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onRepeatOrderClick(){
        this.props.navigation.navigate('Cart');
    }

    _renderHeader = section => {
        return (
          <View style={{paddingTop:hp('4%'),paddingBottom:hp('2%')}}>
                <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>{section.name}</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:wp('90%'),alignSelf:"center"}}>
                    <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>{section.itemcount}</Text>
                    <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>$200</Text>
                    <Image source={require('../../assets/icon/drop_down_black.png')} style={{height:hp('2%'),width:hp('2%'),bottom:hp('2%')}} resizeMode='contain' />
                    </View>
          </View>
        );
      };

      _renderContent = section => {
        console.log("i am here");
            return( 
            <View>
              <FlatList
              numColumns={1}
              showsVerticalScrollIndicator={false}
              style={{}}
              contentContainerStyle={{}}
              data={section["sub-items"]}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>                     
                      <View style={{marginTop:hp('2%'),height:hp('6%'),width:wp('90%'),alignSelf:"center",alignItems:"center",flexDirection:"row"}}>
                          <View style={{width:wp('8%'),height:hp('6%'),alignItems:"center"}}>
                          <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2%'),width:hp('2%'),marginTop:hp('0.5%')}} resizeMode='contain' />
                          </View>

                          <View style={{width:wp('57%'),height:hp('6%'),paddingRight:wp('5%')}}>
                          <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>{item.category_name}</Text>  
                          <Text style={{fontSize:fonts.normal1,color:colors.gray}} numberOfLines={1}>1 Plate</Text>  
                          </View>

                          <View style={{width:wp('25%'),height:hp('6%'),alignItems:"flex-end",justifyContent:"flex-start",}}>
                            <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>$24</Text>
                          </View>
                      </View>
                  }
             />
                <TouchableOpacity onPress={()=>{this.onRepeatOrderClick()}}><Text style={{fontSize:fonts.normal,color:colors.primary,alignSelf:"flex-end",}} numberOfLines={1}>Repeat Order</Text></TouchableOpacity>
             </View>
                  )
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
            <TouchableOpacity onPress={this.onBackClick}>
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('2.5%'),width:wp('2.5%')}} resizeMode='contain' />
            </TouchableOpacity>
            <View>
            <Text style={styles.subcontainertextheader}>{'Order History'}</Text>
            </View>
            <View></View>
        </View>
        </View>

        <ScrollView 
            nestedScrollEnabled={true}
            style={styles.subcontainer2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: hp('20%')}}
        >
      
                {
                    this.state.renderOBJ.categorys.map((item)=>{
                            return( 
                                    <View style={{width:wp('90%'),alignSelf:"center",}}>
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

       <DropdownAlert inactiveStatusBarStyle="dark-content" inactiveStatusBarBackgroundColor="white" ref={ref => this.dropDownAlertRef = ref} />
       {/* <AppLoader isAppLoading={this.state.appLoading}/> */}
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
    },
    modalmain:{height:hp('58%'),width:wp('100%'),position:"absolute",alignSelf:"center",bottom:0,backgroundColor:colors.white},
    modalsub1:{height:hp('8%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center",width:wp('100'),paddingHorizontal:wp('5%'),borderBottomWidth:hp('0.15%'),borderColor:colors.gray},
    modalsub2:{height:hp('40%'),justifyContent:"center",alignSelf:"center",alignItems:"center",width:wp('100')},
    modalsub3:{height:hp('9.85%'),justifyContent:"center",alignSelf:"center",alignItems:"center",width:wp('100'),borderTopWidth:hp('0.15%'),borderColor:colors.gray},
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
        width:wp('90%'),
        alignSelf:"center",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    subcontainertextheader:{
        fontSize:fonts.normalheader,
        fontWeight:"bold",
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
    subcontainer2flatlist:{
        height:hp('93%'),
        width:wp('94%'),
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
        backgroundColor:colors.primary,
        marginHorizontal:wp('5%'),
        height:hp('5%'),
        width:wp('25%'),
        borderRadius:hp('1%'),
        marginTop:hp('2%'),
    },
    loginButtonText:{
        color:colors.white,
        fontSize:font.subnormal
    },
    modalButtonContainer:{
        alignItems:'center',
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:colors.primary,
        height:hp('6%'),
        width:wp('50%'),
        borderRadius:hp('1%'),
    },
    modalButtonText:{
        color:colors.white,
        fontSize:font.subnormal
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
        height:hp('3%'),
        width:hp('3%'),
        margin:hp('2%')
    },
    
})