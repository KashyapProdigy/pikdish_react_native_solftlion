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

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          timercount:10,
          appLoading:false,
      };

    }

    componentDidMount(){

        var that = this;
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            var id = setInterval(() => {
                if (that.state.timercount > 0) {
                    that.setState({timercount:that.state.timercount-1,intervalID:id})
                } 
                else {
                    that.setState({intervalID:id})
                    that.props.navigation.replace('RestoFoodList');
                }
            }, 1000);   
          });

          this._unsubscribe2 = this.props.navigation.addListener('blur', () => {
            clearInterval(that.state.intervalID);  
          });
 
    }

    componentWillUnmount() {
        this._unsubscribe();
        this._unsubscribe2();
    }





    render () {
      return (
       <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />
        <ImageBackground source={require('../../assets/image/welcome_restaurant_bg.png')} style={styles.backgroundImage} resizeMode='stretch' >

            <View style={{height:hp('100%'),width:wp('100%'),justifyContent:"center",alignItems:"center"}}>

                <View style={{height:hp('30%'),width:wp('80%'),backgroundColor:colors.white,borderRadius:hp('2%'),alignItems:"center"}}>
                        <View style={{height:hp('10%'),width:hp('10%'),borderRadius:hp('10%')/2,bottom:hp('5%'),backgroundColor:colors.white,alignItems:"center",justifyContent:"center"}}>
                        <Image source={require('../../assets/image/restaurant_logo.png')} style={{height:hp('6.5%'),width:hp('6.5%')}} resizeMode='contain' />
                        </View>
                        <View style={{height:hp('15%'),width:wp('80%'),alignContent:"flex-start",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.normalheader,color:colors.black}} numberOfLines={1}>Welcome to</Text>
                        <Text style={{fontSize:fonts.normalheader,color:colors.black,paddingHorizontal:wp('3%')}} numberOfLines={2}>Lakshmi Restaurant</Text>
                        
                        <Text style={{fontSize:fonts.normal,color:colors.primary,paddingHorizontal:wp('2%'),marginTop:hp('2%')}} numberOfLines={1}>You are on Table No. 5</Text>

                        <View style={{height:hp('0.2%'),width:wp('60%'),marginTop:hp('2%'),backgroundColor:colors.gray}}></View>
                        </View>
                        <View style={{height:hp('5%'),width:wp('80%'),alignItems:"center",justifyContent:"flex-end",paddingBottom:hp('1%')}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.yellow_font,paddingHorizontal:wp('2%')}} numberOfLines={1}>Disappear in {this.state.timercount} Seconds</Text>
                        </View>
                </View>

            </View>

        
        </ImageBackground>
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
        width:wp('90%'),
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
        width:wp('90%'),
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