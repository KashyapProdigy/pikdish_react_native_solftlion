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
    Keyboard,
    ScrollView
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          userdata:{
              name:"David Spade",
              number:"(+91) 9952589668",
          },
          appLoading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onEditProfileClick = this.onEditProfileClick.bind(this);
      this.onYourOrderClick = this.onYourOrderClick.bind(this);
      this.onFavouriteRestaurantClick = this.onFavouriteRestaurantClick.bind(this);
      this.onYourEventClick = this.onYourEventClick.bind(this);
      this.onWalletClick = this.onWalletClick.bind(this);
      this.onSettingClick = this.onSettingClick.bind(this);
      this.onDashboardClick = this.onDashboardClick.bind(this);
      this.onSendFeedbackClick = this.onSendFeedbackClick.bind(this);
      this.onRateUsClick = this.onRateUsClick.bind(this);
      this.onPrivacyClick = this.onPrivacyClick.bind(this);
      this.onContactClick = this.onContactClick.bind(this);
      this.onSignOutClick = this.onSignOutClick.bind(this);

    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onEditProfileClick(){
        this.props.navigation.navigate('EditProfile');
    }

    onYourOrderClick(){
        this.props.navigation.navigate('OrderHistory');
    }

    onFavouriteRestaurantClick(){
        this.props.navigation.navigate('Favourite');
    }

    onYourEventClick(){
        this.props.navigation.navigate('EventHistory');
    }

    onWalletClick(){
    }

    onSettingClick(){
    }

    onDashboardClick(){
        this.props.navigation.navigate('Dashboard');
    }

    onSendFeedbackClick(){
        this.props.navigation.navigate('Feedback');
    }

    onRateUsClick(){
    }

    onPrivacyClick(){
        this.props.navigation.navigate("Privacy");
    }

    onTermsClick(){
        this.props.navigation.navigate("Terms");
    }

    onContactClick(){
        this.props.navigation.navigate('ContactUs');
    }

    onSignOutClick(){
        this.props.navigation.popToTop(),
        this.props.navigation.replace("Login");
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
            <TouchableOpacity onPress={this.onBackClick}>
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('2.5%'),width:wp('2.5%')}} resizeMode='contain' />
            </TouchableOpacity>
            <View></View>
        </View>
        </View>

        <ScrollView 
            style={styles.subcontainer2}
            contentContainerStyle={{paddingBottom:hp('10%')}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >

            <View style={{flexDirection:"row",marginVertical:hp('4%')}}>
            <View style={{width:wp('50%')}}>
            <Image source={require('../../assets/image/avatar.png')} style={{borderRadius: hp('17%')/2,width: hp('17%'),height: hp('17%'),alignSelf:"center"}} resizeMode='cover' />
            </View>
            <View style={{width:wp('50%'),paddingRight:wp('10%'),justifyContent:"center"}}>
                <Text style={{fontSize:fonts.normalheader,color:colors.black,textAlign:"left"}} numberOfLines={1}>{this.state.userdata.name}</Text>
                <Text style={{fontSize:fonts.normal,color:colors.black,textAlign:"left"}} numberOfLines={1}>{this.state.userdata.number}</Text>
            </View>
            </View>

            <View style={{alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={this.onEditProfileClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}}>
                <View style={{alignItems:'center',flexDirection:"row"}}>
                <View style={{backgroundColor:colors.primary_accent1,padding:hp('1%'),borderRadius:hp('1%')}}>
                <Image source={require('../../assets/icon/account_profile.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>            
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Edit Profile</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onYourOrderClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}}>
                <View style={{alignItems:'center',flexDirection:"row"}}>
                <View style={{backgroundColor:colors.primary_accent1,padding:hp('1%'),borderRadius:hp('1%')}}>
                <Image source={require('../../assets/icon/account_order.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>            
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Your Order</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onFavouriteRestaurantClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>
                <View style={{backgroundColor:colors.primary_accent1,padding:hp('1%'),borderRadius:hp('1%')}}>
                <Image source={require('../../assets/icon/account_favourite.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>            
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Favourite Restaurant </Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onYourEventClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}}>
                <View style={{alignItems:'center',flexDirection:"row"}}>
                <View style={{backgroundColor:colors.primary_accent1,padding:hp('1%'),borderRadius:hp('1%')}}>
                <Image source={require('../../assets/icon/account_event.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>            
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Your Events</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onWalletClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>
                <View style={{backgroundColor:colors.primary_accent1,padding:hp('1%'),borderRadius:hp('1%')}}>
                <Image source={require('../../assets/icon/account_wallet.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>            
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Wallet</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onSettingClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>
                <View style={{backgroundColor:colors.primary_accent1,padding:hp('1%'),borderRadius:hp('1%')}}>
                <Image source={require('../../assets/icon/account_setting.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>            
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Settings</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={this.onDashboardClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>
                <View style={{backgroundColor:colors.primary_accent1,padding:hp('1%'),borderRadius:hp('1%')}}>
                <Image source={require('../../assets/icon/account_dashboard.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>            
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Dashboard</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
                </TouchableOpacity>
            </View>

            <View style={{width:wp('80%'),borderBottomWidth:hp('0.1%'),borderColor:colors.gray,marginTop:hp('3%'),alignSelf:"center"}}></View>

            <View style={{alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity onPress={this.onSendFeedbackClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>         
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Send Feedback</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onRateUsClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>         
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Rate us on Play/App Store</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPrivacyClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>         
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Privacy Policy</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onTermsClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>         
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Terms of Service</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onContactClick} style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:wp('86%'),marginTop:hp('3%')}} >
                <View style={{alignItems:'center',flexDirection:"row"}}>         
                <Text style={{color:colors.black,fontSize:fonts.normal,paddingHorizontal:wp('5%')}}>Contact Us</Text>
                </View>
                <View>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('3.3%'),width:hp('3.3%')}} resizeMode='contain'></Image>
                </View>
            </TouchableOpacity>
            </View>

            <View style={{width:wp('80%'),borderWidth:hp('0.1%'),borderRadius:1,borderStyle:"dashed",borderColor:colors.gray,marginTop:hp('3%'),alignSelf:"center"}}></View>

            <TouchableOpacity onPress={()=>{
                                this.onSignOutClick();
                            }}  style={styles.loginButtonContainer}>
                                <Text style={styles.loginButtonText}>Sign Out</Text>
            </TouchableOpacity>

            <Text style={{alignSelf:"center",color:colors.gray,fontSize:fonts.subnormal,marginVertical:hp('1%')}}>Version 1.0.0</Text>



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
        width:wp('70%'),
        borderRadius:hp('1%'),
        marginTop:hp('4%'),
    },
    loginButtonText:{
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