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
        renderTerms:[
            {
                id:1,
                name:"Jodhpur Dabbawala",
                total_price:"$ 500.00",
                timer:"00:10:20",
                icon1:"veg",
                fooditems:[
                    {
                    icon:"veg",
                    name:"Sandwich Dhokla",
                    qty:"1",
                    plate:"1 plate",
                    price:"$24"
                    },
                ]
            },
            {
                id:2,
                name:"Jodhpur Dabbawala",
                total_price:"$ 500.00",
                timer:"00:10:20",
                icon1:"veg",
                fooditems:[
                    {
                    icon:"veg",
                    name:"Sandwich Dhokla",
                    qty:"1",
                    plate:"1 plate",
                    price:"$24"
                    },
                    {
                        icon:"veg",
                        name:"Sandwich Dhokla",
                        qty:"1",
                        plate:"1 plate",
                        price:"$24"
                    },
                    {
                            icon:"veg",
                            name:"Sandwich Dhokla",
                            qty:"1",
                            plate:"1 plate",
                            price:"$24"
                    },
                ]
            },
            {
                id:3,
                name:"Jodhpur Dabbawala",
                total_price:"$ 500.00",
                timer:"00:10:20",
                icon1:"veg",
                fooditems:[
                    {
                    icon:"veg",
                    name:"Sandwich Dhokla",
                    qty:"1",
                    plate:"1 plate",
                    price:"$24"
                    },
                ]
            },
          ],
          appLoading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onPlusClick = this.onPlusClick.bind(this);
      this.onMinusClick = this.onMinusClick.bind(this);
      this.onBookSeatClick = this.onBookSeatClick.bind(this);

    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onPlusClick(){

    }

    onMinusClick(){

    }

    onBookSeatClick(){

    }


    render () {
      return (
       <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />
        <View style={styles.subcontainer1}>
        <TouchableOpacity onPress={this.onBackClick} style={styles.subcontainertextcontainer}>
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('2.5%'),width:wp('2.5%')}} resizeMode='contain' />
            <Text style={{fontSize:fonts.normalheader,color:colors.black,marginLeft:wp('3%')}} numberOfLines={1}>Event Name</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.subcontainer2}>

        <View style={{height:hp('24%'),width:wp('100%'),justifyContent:"center",alignItems:"center"}}>
            <Image source={require('../../assets/image/event_list.png')} style={{height:hp('20%'),width:wp('90%'),borderRadius:hp('2%')}} resizeMode='cover' />
        </View>

        <View style={{height:hp('44%'),width:wp('100%'),paddingHorizontal:wp('7%'),paddingVertical:hp('2%'),backgroundColor:colors.white}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <View style={{}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>Ticket Price : $2000</Text>
                        </View>
                        <View style={{}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>Seats No : 1235485211</Text>
                        </View>
            </View>
            <View style={{flexDirection:"row",marginTop:hp('1.5%'),alignItems:"center"}}>
                <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>Date & Time : </Text>
                <View style={{flexDirection:"row",paddingVertical:hp('0.5%'),paddingHorizontal:hp('1%'),backgroundColor:colors.gray,borderRadius:hp('2%'),marginLeft:wp('1%'),justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>27/10/2019 9:30AM</Text>
                <Image source={require('../../assets/icon/event_timer.png')} style={{height:hp('2.5%'),width:wp('2.5%'),marginLeft:wp('1%')}} resizeMode='contain' />
                </View>
            </View>

            <View style={{marginTop:hp('1.5%')}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>Cafe Name : </Text>
            </View>
            
            <View style={{marginTop:hp('1.5%')}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>Description : </Text>
            </View>

            <View style={{marginTop:hp('3%'),borderBottomWidth:hp('0.1%'),borderBottomColor:colors.gray}}></View>

            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:hp('3%')}}>
                        <View style={{flexDirection:"row",alignItems:"center",}}>
                        <Text style={{fontSize:fonts.normal,color:colors.primary}} numberOfLines={1}>Tickets:</Text>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:wp('15%'),height:hp('3%'), borderWidth:hp('0.1%'),marginLeft:wp('2%'),paddingHorizontal:wp('2%')}}>
                        <TouchableOpacity onPress={()=>{this.onPlusClick()}}><Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>-</Text></TouchableOpacity>
                        <Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>2</Text>
                        <TouchableOpacity onPress={()=>{this.onMinusClick()}}><Text style={{fontSize:fonts.subnormal,color:colors.primary}} numberOfLines={1}>+</Text></TouchableOpacity>
                        </View>
                        </View>
                        <View style={{}}>
                        <Text style={{fontSize:fonts.normal,color:colors.primary}} numberOfLines={1}>Amount: $200</Text>
                        </View>
            </View>


            <TouchableOpacity onPress={()=>{
                this.onBookSeatClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Book Your Seats</Text>
            </TouchableOpacity>
        </View>
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
        width:wp('100%'),
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
        height:hp('6%'),
        width:wp('70%'),
        borderRadius:hp('1%'),
        marginTop:hp('7%'),
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