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
          otpCode:'',
          password:'',
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
       <View style={styles.subcontainertextcontainer}>
            <TouchableOpacity onPress={this.onBackClick}><Text style={styles.subcontainertextheader}>{'<'}</Text></TouchableOpacity>
        </View>
       </View>
       <View style={styles.subcontainer2}>

           <Text style={styles.pageheader}>{'Verification'}</Text>
           <Text style={styles.pagesubheader}>{'Enter the 6 Digit code sent to you at mobile no\n[Mobile no]:'}</Text>

           <TouchableOpacity  onPress={this.onResendOtpClick} style={styles.forgotPasswordContainer}>
               <View></View>
           <Text style={styles.forgotPasswordText}>Re-send</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>{
                this.onSubmitClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>NEXT</Text>
            </TouchableOpacity>

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
        height:hp('10%'),
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
        height:hp('10%'),
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
        height:hp('90%'),
        width:wp('100%'),
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
        height:hp('3%'),
        width:hp('3%'),
        margin:hp('2%')
    },
    
})