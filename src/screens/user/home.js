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
        renderTerms:[
            {
                id:1,
                title:"Table Order/Dine In",
                image:require('../../assets/image/home_cat1.png'),
            },
            {
                id:2,
                title:"Pro-Order/Table Booking",
                image:require('../../assets/image/home_cat2.png'),            
            },
            {
                id:3,
                title:"Take Away",
                image:require('../../assets/image/home_cat3.png'),            
            },
            {
                id:4,
                title:"Delivery By Restaurant",
                image:require('../../assets/image/home_cat4.png'),            
            },
            {
                id:5,
                title:"Event",
                image:require('../../assets/image/home_cat5.png'),            
            },
          ],
          togglePasswordVisibility:true,
          appLoading:false,
      };

      this.onResendOtpClick = this.onResendOtpClick.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
      this.onSuccess = this.onSuccess.bind(this);
      this.onBackClick = this.onBackClick.bind(this);

    }

    componentDidMount(){}

    onResendOtpClick(){

    }
    onBackClick(){
        this.props.navigation.replace('Login');
    }

    async onSubmitClick(code){

        this.setState({appLoading:true,otpCode:code})

        console.log('State =',this.state.otpCode);
        console.log('param =',code);
        if(code == "111111" ){
          this.setState({appLoading:false})
          this.dropDownAlertRef.alertWithType('success', 'Number Verified !', "",null,1500)

          setTimeout( () => {
            this.onSuccess();
          },2000);

        }else{
          this.setState({otpCode:'',appLoading:false})
          this.dropDownAlertRef.alertWithType('error', 'Otp Invalid !', "try again",null,1500)  
        }
    }


    onSuccess(){
      this.props.navigation.popToTop();
      this.props.navigation.replace('Login');
    }

    isEmptyString(code){
      if(code=== ''){
        return true
      }else{
        return false
      }
    }



    render () {
      return (
       <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />
       <View style={styles.subcontainer1}>
       <View style={{flexDirection:"row",alignItems:"center",}}>
           <Text style={{color:colors.black,fontSize:font.normal}}>Location</Text>
           <Image source={require('../../assets/icon/drop_down_black.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
       </View>
       <View style={{flexDirection:"row",alignItems:"center",}}>
           <Image source={require('../../assets/icon/discount_primary.png')} style={styles.OfferButtonImage} resizeMode='contain'></Image>
           <Text style={{color:colors.black,fontSize:font.normal}}>Offer</Text></View>
       </View>
       <View style={styles.subcontainer2}>
       <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={styles.subcontainer2flatlist}
                    contentContainerStyle={{ paddingBottom: hp('20%')}}
                    data={this.state.renderTerms}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>                     
                            <View style={{marginTop:hp('5%'),marginHorizontal:wp('4%'),height:hp('22%'),width:wp('40%')}}>
                                <View style={{alignItems:"center",height:hp('17%'),width:wp('40%')}}>
                                     <Image source={item.image} style={styles.CategoryImage} resizeMode='cover'></Image>
                                </View>
                                <View style={{alignItems:"center",height:hp('5.1%'),width:wp('40%'),alignSelf:"center",justifyContent:"center",textAlign:"center",backgroundColor:colors.primary}}>
                                    <Text style={{color:colors.white,fontSize:font.subnormal,padding:hp('1%')}} numberOfLines={1}>{item.title}</Text>
                                </View>
                            </View>
                            
                        }
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