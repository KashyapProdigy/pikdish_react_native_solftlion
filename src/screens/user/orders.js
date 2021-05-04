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
      this.onCallWaiterClick = this.onCallWaiterClick.bind(this);
      this.onBillDetailClick = this.onBillDetailClick.bind(this);

    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onCallWaiterClick(){

    }

    onBillDetailClick(){

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
            <View>
            <Text style={styles.subcontainertextheader}>{'Running Orders'}</Text>
            </View>
            <View></View>
        </View>
        </View>

        <View style={styles.subcontainer2}>
        <FlatList
          numColumns={1}
          showsVerticalScrollIndicator={false}
          style={styles.subcontainer2flatlist}
          contentContainerStyle={{ paddingBottom: hp('10%')}}
          data={this.state.renderTerms}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>                     
                  <View style={{marginTop:hp('2%'),alignSelf:"center",width:wp('96%') ,}}>
                      <View style={{alignItems:"center",justifyContent:"space-between",flexDirection:"row",paddingHorizontal:wp('3%'),paddingVertical:hp('1%'),borderBottomWidth:hp('0.1%'),borderBottomColor:colors.gray}}>
                          <View style={{flexDirection:"row",alignItems:"center",}}>
                          <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2.5%'),width:wp('2.5%'),marginRight:wp('2%')}} resizeMode='contain' />
                          <View>
                              <Text style={{fontSize:fonts.normalheader,color:colors.black}} numberOfLines={1}>{item.name}</Text>
                              <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>{item.timer}</Text>
                          </View>
                          </View>
                          <View style={{}}>
                          <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>{item.total_price}</Text>
                          </View>
                      </View>
                      {item.fooditems.map((fooditem) => (
                                        <View style={{alignItems:"center",justifyContent:"space-between",flexDirection:"row",paddingHorizontal:wp('3%'),paddingVertical:hp('1%')}}>
                                                  <View style={{flexDirection:"row",alignItems:"center",}}>
                                                  <Image source={require('../../assets/icon/veg_icon.png')} style={{height:hp('2.5%'),width:wp('2.5%'),marginRight:wp('2%')}} resizeMode='contain' />
                                                  <View>
                                                      <Text style={{fontSize:fonts.normalheader,color:colors.black}} numberOfLines={1}>{fooditem.name+' x '+fooditem.qty}</Text>
                                                      <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>{fooditem.plate}</Text>
                                                  </View>
                                                  </View>
                                                  <View style={{}}>
                                                  <Text style={{fontSize:fonts.subnormal,color:colors.gray}} numberOfLines={1}>{fooditem.price}</Text>
                                                  </View>
                                        </View>
                        ))}
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                            <TouchableOpacity onPress={()=>{
                                this.onCallWaiterClick();
                            }}  style={styles.loginButtonContainer}>
                                <Text style={styles.loginButtonText}>Call Waiter</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>{
                                this.onBillDetailClick();
                            }}  style={styles.loginButtonContainer}>
                                <Text style={styles.loginButtonText}>Bill Detail</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:hp('0.1%'),width:wp('76%'),alignSelf:"center", marginTop:hp('3%'),borderColor:colors.gray,borderStyle: 'dashed',borderWidth:hp('0.10%'),borderRadius: 1,}}>

                        </View>
                  </View>
                  
              }
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
        width:wp('25%'),
        borderRadius:hp('1%'),
        marginTop:hp('2%'),
    },
    loginButtonText:{
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