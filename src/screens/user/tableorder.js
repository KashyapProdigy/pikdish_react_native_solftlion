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
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {

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
          departmentDropdown:'',
          vegswitch:false,
          appLoading:false,
          TableModalVisible: false,
          tablelist:[
        {
            id:0,
            name:"Table 1",
            checked:false
        },
        {
            id:1,
            name:"Table 2",
            checked:false
        },
        {
            id:2,
            name:"Table 3",
            checked:true,
            time:"00:12:13",
            price:"$200"
        },
        {
            id:3,
            name:"Table 1",
            checked:false
        },
        {
            id:4,
            name:"Table 1",
            checked:false
        },          {
            id:5,
            name:"Table 1",
            checked:false
        },          {
            id:6,
            name:"Table 1",
            checked:false
        },          {
            id:7,
            name:"Table 1",
            checked:false
        },          {
            id:8,
            name:"Table 1",
            checked:false
        },          {
            id:9,
            name:"Table 1",
            checked:false
        },          {
            id:10,
            name:"Table 1",
            checked:false
        },

          ],
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onRestaurantClick = this.onRestaurantClick.bind(this);
      this.onActiveTableClick = this.onActiveTableClick.bind(this);
      this.onTableModalCloseClick = this.onTableModalCloseClick.bind(this);
      this.onTableModalPaymentClick = this.onTableModalPaymentClick.bind(this);
      this.onTableModalNewItemClick = this.onTableModalNewItemClick.bind(this);

      

    }

    componentDidMount(){}


    onBackClick(){
        this.props.navigation.goBack();
    }

    onRestaurantClick(){
        this.props.navigation.navigate('RestoFoodList');
    }

    onActiveTableClick(){
    this.setState({TableModalVisible:true})
    }

    onTableModalCloseClick(){
    this.setState({TableModalVisible:false})
    }

    onTableModalPaymentClick(){
    this.setState({TableModalVisible:false})
    }

    onTableModalNewItemClick(){
    this.setState({TableModalVisible:false})
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
        </View>
        </View>

       <ScrollView 
            nestedScrollEnabled={true}
            style={styles.subcontainer2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: hp('20%')}}
        >

                    <TouchableOpacity onPress={this.onRestaurantClick} style={{marginTop:hp('2%'),alignSelf:"center",flexDirection:"row",height:hp('12%'),width:wp('90%')}}>
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
                    </TouchableOpacity>

                  <View style={{marginTop:hp('2%'),backgroundColor:colors.gray,alignSelf:"center",height:hp('0.1%'),width:wp('90%'),borderBottomWidth:hp('0.1%')}}></View>


                  <View style={styles.iconInputContainer}>
                    <Picker
                        style = {styles.iconInputField}
                        selectedValue={this.state.departmentDropdown}
                        enabled={true}
                        dropdownIconColor={colors.black}
                        onValueChange={(departmentDropdown) => {
                            this.setState({departmentDropdown: departmentDropdown})
                        }}
                    >
                        <Picker.Item label={'Department'} value={'null'} color={colors.light_gray} key={1}/>
                        <Picker.Item label={'Non-Ac'} value={'nonAC'} key={2}/>
                        <Picker.Item label={'Air Conditioned'} value={'AC'} key={3}/>
                    </Picker>
                </View>

                <FlatList
                      numColumns={3}
                      showsVerticalScrollIndicator={false}
                      style={{height:hp('66%'),width:wp('100%')}}
                      contentContainerStyle={{ paddingBottom: hp('4%'),alignItems:"center"}}
                      data={this.state.tablelist}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) =>                     
                              <View style={{alignSelf:"center",width:wp('24%'),marginHorizontal:wp('4%'),marginVertical:hp('1.7%'),padding:hp('1%'),height:hp('12%'),borderRadius:hp('2%'),backgroundColor:colors.white}}>
                                  {
                                      item.checked ?
                                      <TouchableOpacity onPress={this.onActiveTableClick} style={{alignItems:"center",justifyContent:"space-between",flex:1}}>
                                          <Text style={{color:colors.primary,fontSize:fonts.subnormal2}}>{item.time}</Text>
                                          <Text style={{color:colors.black,fontWeight:"bold",fontSize:fonts.normal1}}>{item.name}</Text>
                                          <Text style={{color:colors.primary,fontSize:fonts.subnormal2}}>{item.price}</Text>
                                      </TouchableOpacity>
                                      :
                                      <TouchableOpacity onPress={this.onRestaurantClick} style={{alignItems:"center",justifyContent:"space-between",flex:1}}>
                                        <View></View>
                                        <Text style={{color:colors.black,fontWeight:"bold",fontSize:fonts.normal1}}>{item.name}</Text>
                                        <View></View>
                                      </TouchableOpacity>
                                  }
                              </View>
                              
                          }
                />

        
        </ScrollView>
            
        <Modal isVisible={this.state.TableModalVisible} animationOutTiming={1} animationIn="slideInDown">
        <View style={styles.modalmain}>
                <View style={styles.modalsub1}>
                <TouchableOpacity onPress={this.onTableModalCloseClick}><Image source={require('../../assets/icon/close_icon.png')} style={{height:hp('2.5%'),width:hp('2.5%')}} resizeMode='contain' /></TouchableOpacity>
                </View>
                <View style={styles.modalsub2}>
                <TouchableOpacity onPress={()=>{
                    this.onTableModalPaymentClick();
                }}  style={styles.loginButtonContainer}>
                    <Text style={styles.loginButtonText}>Payment</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.modalsub2}>
                <TouchableOpacity onPress={()=>{
                    this.onTableModalNewItemClick();
                }}  style={styles.loginButtonContainer}>
                    <Text style={styles.loginButtonText}>New Item</Text>
                </TouchableOpacity>
                </View>
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
    modalmain:{height:hp('40%'),width:wp('80%'),alignSelf:"center",alignItems:"center",backgroundColor:colors.white,borderRadius:hp('2%')},
    modalsub1:{height:hp('10%'),width:wp('80%'),justifyContent:"center",alignItems:"flex-end",paddingHorizontal:wp('5%')},
    modalsub2:{height:hp('12%'),width:wp('80%'),justifyContent:"center",alignItems:"center",},


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
    iconInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.white,
        alignSelf:"center",
        marginVertical:hp('2%%'),
        height:hp('6%'),
        width:wp('90%'),
        borderRadius:hp('1.2%'),
    },
    iconInputField:{
        marginLeft:hp('1%'),
        flex:1,
        color:"#000"
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
        width:wp('70%'),
        borderRadius:hp('1%'),
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