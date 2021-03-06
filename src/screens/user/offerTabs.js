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
    Keyboard
  } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabView, SceneMap , TabBar } from 'react-native-tab-view';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
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
          tabINDEX:0,
          routes:[
            { key: 'first', title: 'Restaurant offers' },
            { key: 'second', title: 'Coupons' },
          ],
          togglePasswordVisibility:true,
          appLoading:false,
      };

      this.onRestaurantCardClickClick = this.onRestaurantCardClickClick.bind(this);
      this.onBackClick = this.onBackClick.bind(this);
      this.onCouponApplyClick = this.onCouponApplyClick.bind(this);
      this.onBackClick = this.onBackClick.bind(this);
      

    }

    componentDidMount(){}

    onRestaurantCardClickClick(){
        this.props.navigation.navigate('RestoFoodList');
    }

    onCouponApplyClick(){

    }

    onBackClick(){
        this.props.navigation.goBack();
    }




    render () {

        const FirstRoute = () => (
            <View style={{ height:hp('86%'),width:wp('100%'), backgroundColor:colors.off_white }}>
            <FlatList
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    style={styles.subcontainer2flatlist}
                    contentContainerStyle={{ paddingBottom: hp('10%')}}
                    data={this.state.renderTerms}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>                     
                            <TouchableOpacity onPress={()=>{this.onRestaurantCardClickClick()}} style={{marginTop:hp('2%'),alignSelf:"center",flexDirection:"row",justifyContent:"space-between",height:hp('12%'),width:wp('96%')}}>
                                <View style={{height:hp('12%'),width:wp('30%')}}>
                                    <Image source={item.image} style={{height:hp('12%'),width:wp('30%')}} resizeMode='cover'></Image>
                                </View>
                                <View style={{height:hp('12%'),width:wp('43%'),justifyContent:"center"}}>
                                    <View style={{}}>
                                    <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>{item.name}</Text>
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
                                <View style={{height:hp('12%'),width:wp('18%'),flexDirection:"row",alignItems:"center"}}>
                                <Image source={require('../../assets/icon/discount_primary.png')} style={{height:hp('2%'),width:hp('2%'),marginRight:wp('2%')}} resizeMode='contain' />
                                <Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>{item.coupon_rate}</Text>
                                </View>
                            </TouchableOpacity>            
                        }
                    />
            </View>
          );

          const SecondRoute = () => (
            <View style={{ height:hp('86%'),width:wp('100%'), backgroundColor:colors.off_white }}>
                  <FlatList
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    style={styles.subcontainer2flatlist}
                    contentContainerStyle={{ paddingBottom: hp('10%')}}
                    data={this.state.renderTerms}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>                     
                    <View style={{marginTop:hp('2%'),alignSelf:"center",height:hp('22%'),width:wp('94%'),backgroundColor:colors.white,borderRadius:hp('1.5%')}}>
                            <View style={{flexDirection:"row",alignSelf:"center",marginTop:hp('2%'),height:hp('10%'),width:wp('86%'),alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{height:hp('6%'),width:wp('56%'),backgroundColor:"#F4F4DC",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:wp('2%'),alignItems:"center"}}>
                            <Image source={require('../../assets/icon/paytm.png')} style={{height:hp('4%'),width:wp('16%'),marginRight:wp('2%')}} resizeMode='contain' />
                            <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>PMNEWAPR01</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{this.onCouponApplyClick()}}><Text style={{fontSize:fonts.normal2,color:colors.primary}} numberOfLines={1}>Apply</Text></TouchableOpacity>
                            </View>
                            <View style={{height:hp('8%'),width:wp('86%'),alignSelf:"center"}}>
                            <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Get 50% discount using Paytm</Text>
                            <Text style={{fontSize:fonts.subnormal,color:colors.black,marginTop:hp('1%')}} numberOfLines={2}>Use code PMNEWAPR & get flat Rs.50 cashback on you orders  above Rs.419</Text>
                            </View>
                    </View>
            }
        />

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
        <View style={styles.subcontainer1}>
        <TouchableOpacity onPress={this.onBackClick} style={styles.subcontainertextcontainer}>
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('2.5%'),width:wp('2.5%')}} resizeMode='contain' />
            <Text style={{fontSize:fonts.normalheader,color:colors.black,marginLeft:wp('3%')}} numberOfLines={1}>Offers</Text>
        </TouchableOpacity>
        </View>
       <View style={styles.subcontainer2}>

       <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index:this.state.tabINDEX, routes:this.state.routes }}
            renderScene={renderScene}
            onIndexChange={(i)=>{this.setState({tabINDEX:i})}}
            initialLayout={{height:hp('93%'),width:wp('100%'),}}    
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
        width:wp('90%'),
        alignSelf:"center",
        flexDirection:"row",
        alignItems:"center",
    },
    subcontainertextheader:{
        fontSize:fonts.normalheader,
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
        height:hp('86%'),
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
        fontSize:fonts.normal,
        color:colors.primary
    },
    navigatorText:{
        fontSize:fonts.normal,
        color:colors.primary
    },
    forgotPasswordContainer:{
        flexDirection:"row",
        width:wp('90%'),
        justifyContent:"space-between"
    },
    inputheader:{
        marginTop:hp("3%"),
        fontSize:fonts.normal,
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
        fontSize:fonts.normal,
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
        fontSize:fonts.normal
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
    ResButtonImage:{
        height:hp('3%'),
        width:hp('3%'),
        margin:hp('1%'),
        alignSelf:"center"
    },   
    CategoryImage:{
        height:hp('17%'),
        width:hp('20%')
    },
    
})