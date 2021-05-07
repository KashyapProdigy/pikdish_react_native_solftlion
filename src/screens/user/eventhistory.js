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

    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
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
            <Text style={styles.subcontainertextheader}>{'My Events'}</Text>
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
                  <View  style={{marginTop:hp('2%'),alignSelf:"center",width:wp('100%'),paddingHorizontal:wp('6%'),paddingVertical:hp('2%'), backgroundColor:colors.white }}>
                        <View style={{}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>Name : </Text>
                        </View>

                        <View style={{}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>Cafe Name : </Text>
                        </View>

                        <View style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
                        <View style={{}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>No of Tickets : </Text>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>Date & Time : </Text>
                        <View style={{flexDirection:"row",paddingVertical:hp('0.5%'),paddingHorizontal:hp('1%'),backgroundColor:colors.gray,borderRadius:hp('2%'),marginLeft:wp('1%'),justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:fonts.subnormal,color:colors.black}} numberOfLines={1}>27/10/2019 9:30AM</Text>
                        <Image source={require('../../assets/icon/event_timer.png')} style={{height:hp('2.5%'),width:wp('2.5%'),marginLeft:wp('1%')}} resizeMode='contain' />
                        </View>
                        </View>
                        </View>
                        <View style={{}}>
                        <Image source={require('../../assets/image/event_list.png')} style={{height:hp('20%'),width:wp('88%'),borderRadius:hp('2%'),marginTop:hp('2%')}} resizeMode='cover' />
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