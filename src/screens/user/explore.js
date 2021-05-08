import * as React from 'react';
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
    Animated,
    FlatList,
    ScrollView,
    Keyboard
  } from 'react-native';

import Modal from 'react-native-modal';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import Accordion from 'react-native-collapsible/Accordion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabView, SceneMap , TabBar } from 'react-native-tab-view';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          searchstring:'',
          ApplyCodeModalVisible:true,
          appLoading:false,
          selectedTab:0,
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
                  "name": "Lakshmi Restaurant",
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
          activeSections: [],
          tabINDEX:0,
          routes:[
            { key: 'first', title: 'Restaurants' },
            { key: 'second', title: 'Dishes' },
          ],
      };



      this.onBackClick = this.onBackClick.bind(this);
      this.onRestaurantClcik = this.onRestaurantClcik.bind(this);
      this.onRestoHeartClick = this.onRestoHeartClick.bind(this);

    }

    componentDidMount(){
        var that = this;
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
          });
    }
    componentWillUnmount() {
        this._unsubscribe();
    }

    onBackClick(){
        this.props.navigation.goBack();
    }

    onRestaurantClcik(){
        this.props.navigation.navigate('RestoFoodList');
    }

    onRestoHeartClick(){
    }

    _renderHeader = section => {
        return (
          <View style={{paddingVertical:hp('1.5%'),borderBottomColor:colors.gray,borderBottomWidth:hp('0.1%')}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:fonts.normal,color:colors.black,marginLeft:wp('1%')}} numberOfLines={1}>{section.name}</Text>
                </View>
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
                            <View style={{height:hp('3%'),width:wp('15%'),borderWidth:hp('0.15%'),borderColor:colors.gray,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>ADD</Text>
                            </View>
                          </View>
                      </View>
                  }
            />
                  )
      };

      _updateSections = activeSections => {
        this.setState({ activeSections });
      };

    render () {

      const FirstRoute = () => (
        <View style={{ height:hp('86%'),width:wp('100%'), backgroundColor:colors.off_white }}>
              <FlatList
              numColumns={1}
              showsVerticalScrollIndicator={false}
              style={{height:hp('86'),width:wp('100%')}}
              contentContainerStyle={{ paddingBottom: hp('10%')}}
              data={this.state.renderTerms}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>                     
              <TouchableOpacity onPress={()=>{this.onRestaurantClcik()}} style={{marginTop:hp('1%'),alignSelf:"center",alignItems:"center",flexDirection:"row",height:hp('12%'),width:wp('96%'),borderRadius:hp('2%'),backgroundColor:colors.white}}>
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
                  <TouchableOpacity onPress={()=>{this.onRestoHeartClick()}} style={{height:hp('4%'),width:hp('4%'),borderRadius:hp('4%')/2,elevation:9,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                  <Image source={require('../../assets/icon/heart_gray.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' />
                  </TouchableOpacity>
              </View>
            </TouchableOpacity>             
                  }
            />
        </View>
      );

      const SecondRoute = () => (
        <View style={{ height:hp('86%'),width:wp('100%'), backgroundColor:colors.off_white }}>
              <ScrollView 
              nestedScrollEnabled={true}
              style={{height:hp('86'),width:wp('100%')}}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: hp('20%')}}
              >
              {
                  this.state.renderOBJ.categorys.map((item)=>{
                          return( 
                                  <View style={{marginVertical:hp('3%'),width:wp('90%'),alignSelf:"center",}}>
                                      <View style={{flexDirection:"row",alignItems:"center"}}>
                                          <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2%'),width:hp('2%')}} resizeMode='contain' /> 
                                          <Text style={{fontSize:fonts.normalheader,fontWeight:"bold",color:colors.black,marginLeft:wp('2%')}} numberOfLines={1}>{item.name}</Text>
                                      </View>  
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
        </View>
      );


      const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      });

      const renderTabBar = props => (
        <TabBar
          {...props}
          activeColor={colors.black}
          inactiveColor={colors.black}
          pressColor={colors.primary}
          indicatorStyle={{ backgroundColor:colors.primary }}
          labelStyle={{color:colors.black,fontSize:fonts.normal,fontWeight:"bold"}}
          style={{ backgroundColor:colors.off_white ,height:hp('7%'),justifyContent:"center",elevation:0}}
        />
      );

      return (
       <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />

        <View style={styles.modalmain}>
            <TouchableOpacity onPress={this.onBackClick} style={styles.modalsub1}>
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('2.5%'),width:wp('2.5%')}} resizeMode='contain' />
            </TouchableOpacity>
            <View style={styles.searchstringInputContainer}>
            <TextInput style = {styles.searchstringInputField}
                    ref={(input) => { this.searchstringInputRef = input }}
                    // returnKeyType="next"
                    // onSubmitEditing={() => { Keyboard.dismiss() }}
                    // blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = "Search for restaurant & dishes..."
                    placeholderTextColor={colors.gray}
                    autoCapitalize = "none"
                    value={this.state.searchstring}
                    onChangeText={(searchstring) => this.setState({searchstring})}  />
            </View>
        </View>

        <View style={{height:hp('93%'),width:wp('100%')}}>
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index:this.state.tabINDEX, routes:this.state.routes }}
            renderScene={renderScene}
            onIndexChange={(i)=>{this.setState({tabINDEX:i})}}
            initialLayout={{height:hp('93%'),width:wp('100%'),}}    
            />
    
        </View>

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
        backgroundColor:colors.off_white
    },
    subcontainer1:{
        height:hp('10%'),
    },
    subcontainerimagecontainer:{
        height:hp('15%'),
        width:wp('86%'),
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
    },
    modalmain:{height:hp('7%'),width:wp('100%'),flexDirection:"row",backgroundColor:colors.white},
    modalsub1:{height:hp('7%'),alignItems:"center",justifyContent:"center",width:wp('10%')},


    subcontainerimage:{
        height:hp('15%'),
        width:wp('70%'),
        alignSelf:"center"
    },
    subcontainertextcontainer:{
        height:hp('10%'),
        width:wp('96%'),
        alignSelf:"center",
        justifyContent:"center"
    },
    subcontainertextheader:{
        fontSize:fonts.navigationheader,
        color:colors.black,
    },
    applycodeheader:{
        fontSize:fonts.normalheader,
        color:colors.black,
    },
    subcontainertextsubheader:{
        fontSize:fonts.normal,
        color:colors.gray,
    },
    subcontainer2:{
        height:hp('90%'),
        width:wp('86%'),
        alignSelf:"center",
        alignItems:'center',
    },
    backgroundImage: {
        height:hp('100%'),
        width:wp('100%')
    },
    pageheader:{
        fontSize:hp('4%'),
        color:'#4F45F0'
    },
    forgotPasswordText:{
        fontSize:font.normal,
        color:colors.black
    },
    navigatorText:{
        fontSize:font.normal,
        color:colors.primary
    },
    forgotPasswordContainer:{
        flexDirection:"row",
        marginTop:hp('2%'),
        width:wp('86%'),
        justifyContent:"space-between"
    },
    pagesubheader:{
        marginTop:hp('2%'),
        fontSize:hp('2.5%')
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
    searchstringInputContainer:{
        flexDirection:'row',
        backgroundColor:colors.white,
        alignSelf:"center",
        height:hp('7%'),
        width:wp('85%'),
    },
    searchstringInputField:{
        flex:1,
        fontSize:font.normal,
        color:colors.black,
        justifyContent:"center"
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
        height:hp('7%'),
        width:wp('40%'),
        borderRadius:hp('1%'),
        marginTop:hp('5%'),
    },
    loginButtonText:{
        color:colors.white,
        fontSize:font.normal
    },
    searchstringButtonContainer:{
        alignItems:'center',
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:colors.primary,
        height:hp('7%'),
        width:wp('80%'),
        borderRadius:hp('1%'),
    },
    searchstringButtonText:{
        color:colors.white,
        fontSize:font.normal
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