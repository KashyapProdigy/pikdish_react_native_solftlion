import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    Dimensions, 
    TouchableOpacity,
    StatusBar,
    Keyboard
  } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
// import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          mobile:'',
          password:'',
          togglePasswordVisibility:true,
          appLoading:false,
      };


      this.onLoginClick = this.onLoginClick.bind(this);
      this.onFacebookClick = this.onFacebookClick.bind(this);
      this.onGoogleClick = this.onGoogleClick.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
      this.onForgotPasswordClick = this.onForgotPasswordClick.bind(this);
    }

    componentDidMount(){}

    onLoginClick(){
        this.props.navigation.replace('MainTabs');
        // Keyboard.dismiss();

        // const isConnected = await NetworkCheck.isNetworkAvailable()

        // if (isConnected) {  

        // if(this.state.mobile.trim() == ''){
        //     this.setState({mobile:''},()=>{this.mobileInputRef.focus(); })
        //     this.dropDownAlertRef.alertWithType('error',"Mobile Number cannot be blank");
        //   return
        // }
        // if(this.state.mobile.length < 10 ){
        //     this.mobileInputRef.focus();
        //     this.dropDownAlertRef.alertWithType('error',"Number should contain atleast 10 digits");
        //   return
        // }
        // if(this.state.password == ''){
        //     this.passwordInputRef.focus()
        //     this.dropDownAlertRef.alertWithType('error',"Password cannot be blank");
        //   return
        // }
        // if(this.state.password.length < 6 ){
        //     this.passwordInputRef.focus();
        //     this.dropDownAlertRef.alertWithType('error',"Password should contain atleast 6 letters");
        //   return
        // }

        // let myFormData = new FormData();
        // myFormData.append("mobile_no", this.state.mobile)
        // myFormData.append("password", this.state.password)
        // myFormData.append("type",1)

        // try {
        //     this.setState({appLoading: true})
        //     const { data } = await AuthServices.RegisterUser(myFormData)
        //     console.log(data);

        //     if( data.status == 0 ){
        //         this.setState({appLoading: false})
        //         if(data.existing == 1){
        //             this.mobileInputRef.focus();
        //             this.dropDownAlertRef.alertWithType('error', 'Number Already Registered', "try diffrent number");
        //         }else{
        //             this.dropDownAlertRef.alertWithType('error', 'Something went wrong ...', "Try Again");
        //         }
        //     }

        //     if( data.status == 1){
        //         this.setState({appLoading: false})
        //         await AsyncStorage.setItem('User',JSON.stringify(data.userdata[0])).then( this.props.navigation.replace('OtpProvider') );  
        //     }

        //     this.setState({appLoading: false})
        //   }
        //   catch(error){
        //     console.log(error)
        //     this.setState({appLoading: false})
        //     console.log(error.data)
        //     this.dropDownAlertRef.alertWithType('error', " Server Error : 500 ");
        //   }
        // }
        // else{
        //     this.dropDownAlertRef.alertWithType('error', 'No Internet Connection', "please check your device connection");
        // }
    }

    onFacebookClick(){
        // this.props.navigation.replace('MainTabProvider');
    }

    onGoogleClick(){
        // this.props.navigation.replace('MainTabProvider');
    }

    onForgotPasswordClick(){
        this.props.navigation.replace('ForgotPassword');
    }

    onRegisterClick(){
        this.props.navigation.navigate('Register');
    }

    render () {
      return (
        <View style={styles.maincontainer}>
            
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />
        <View style={styles.subcontainer1}>
            <View style={styles.subcontainerimagecontainer}>
            <Image source={require('../../assets/image/splash_logo.png')} style={styles.subcontainerimage} resizeMode='contain'></Image>
            </View>
            <View style={styles.subcontainertextcontainer}>
            <Text style={styles.subcontainertextheader}>Welcome,</Text>
            <Text style={styles.subcontainertextsubheader}>Sign in to Continue</Text>
            </View>
        </View>

        <View style={styles.subcontainer2}>

        <KeyboardAwareScrollView style={{backgroundColor:"transparent"}} extraHeight={100} enableOnAndroid enableAutomaticScroll>
            <View>
            <Text style={styles.inputheader}>Mobile no</Text>
            </View>
            <View style={[styles.mobileInputContainer,{borderBottomColor:this.state.mobile.length>0?colors.gray:colors.primary,}]}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.mobileInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.passwordInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = ""
                placeholderTextColor ={colors.gray}
                autoCapitalize = "none"
                keyboardType="number-pad"
                onChangeText={(mobile) => this.setState({mobile})}  />
            </View>
            <View>
            <Text style={styles.inputheader}>Password</Text>
            </View>
            <View style={[styles.passwordInputContainer,{borderBottomColor:this.state.password.length>0?colors.gray:colors.primary,}]}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.passwordInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { Keyboard.dismiss() }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = ""
                autoCapitalize = "none"
                secureTextEntry={this.state.togglePasswordVisibility}
                onChangeText={(password) => this.setState({password})}  />
            </View>

            <View style={styles.forgotPasswordContainer}>
            <View style={{flexDirection:"row"}}><Text style={styles.forgotPasswordText}>New user?</Text><TouchableOpacity onPress={this.onRegisterClick}><Text style={styles.navigatorText}>Sign Up</Text></TouchableOpacity></View>
            <TouchableOpacity onPress={this.onForgotPasswordClick}><Text style={styles.forgotPasswordText}>Forgot Password?</Text></TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=>{
                this.onLoginClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>SIGN IN</Text>
            </TouchableOpacity>



            <Text style={{fontSize:font.normalheader,color:colors.black,alignSelf:'center',marginTop:hp('3%')}}>-OR-</Text>

    
            <TouchableOpacity onPress={this.onFacebookClick}style={styles.socialButtonContainer}>
            <Image source={require('../../assets/icon/facebook.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
            <Text style={styles.socialButtonText}>Sign In with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onGoogleClick} style={styles.socialButtonContainer}>
            <Image source={require('../../assets/icon/google.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
            <Text style={styles.socialButtonText}>Sign In with Google</Text>
            </TouchableOpacity>

            </KeyboardAwareScrollView>

        </View>
        <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />
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
        height:hp('25%'),
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
        height:hp('8%'),
        width:wp('86%'),
        alignSelf:"center",
        justifyContent:"space-between"
    },
    subcontainertextheader:{
        fontSize:fonts.authheader,
        color:colors.black,
    },
    subcontainertextsubheader:{
        fontSize:fonts.normal,
        color:colors.gray,
    },
    subcontainer2:{
        height:hp('75%'),
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
        borderBottomWidth:hp("0.1%"),
        alignSelf:"center",
        height:hp('6%'),
    },
    passwordInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.white,
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