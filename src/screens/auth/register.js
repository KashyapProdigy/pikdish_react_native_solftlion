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
import Modal from 'react-native-modal';
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
          firstname:'',
          lastname:'',
          email:'',
          mobile:'',
          password:'',
          refcode:'',
          ApplyCodeModalVisible: false,
          togglePasswordVisibility:true,
          appLoading:false,
      };


      this.onLoginClick = this.onLoginClick.bind(this);
      this.onFacebookClick = this.onFacebookClick.bind(this);
      this.onGoogleClick = this.onGoogleClick.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
      this.onApplyCodeClick = this.onApplyCodeClick.bind(this);
      this.onApplyCodeSubmitClick = this.onApplyCodeSubmitClick.bind(this);
      this.onTermsClick = this.onTermsClick.bind(this);
      this.onPrivacyClick = this.onPrivacyClick.bind(this);
      this.onBackClick = this.onBackClick.bind(this);

    }

    componentDidMount(){}

    onLoginClick(){
        this.props.navigation.replace('Login');
    }
    onApplyCodeClick(){
        this.setState({
            ApplyCodeModalVisible: !this.state.ApplyCodeModalVisible,            
            refcode:'',
        });
    }
    onApplyCodeSubmitClick(){
        this.setState({
            ApplyCodeModalVisible: !this.state.ApplyCodeModalVisible,            
        });
    }
    onTermsClick(){
        this.props.navigation.navigate('Terms');
    }
    onBackClick(){
        this.props.navigation.replace('Login');
    }
    onPrivacyClick(){
        this.props.navigation.navigate('Privacy');
    }
    onFacebookClick(){
        // this.props.navigation.replace('MainTabProvider');
    }

    onGoogleClick(){
        // this.props.navigation.replace('MainTabProvider');
    }


    async onRegisterClick(){

        this.props.navigation.replace('OTPView');

        Keyboard.dismiss();

        // const isConnected = await NetworkCheck.isNetworkAvailable()

        // if (isConnected) {  

        // if(this.state.firstname.trim() == ''){
        //     this.setState({firstname:''},()=>{this.firstNameInputRef.focus(); })
        //     this.dropDownAlertRef.alertWithType('error',"First Name cannot be blank");
        //   return
        // }
        // if(this.state.lastname.trim() == ''){
        //     this.setState({lastname:''},()=>{this.lastNameInputRef.focus(); })
        //     this.dropDownAlertRef.alertWithType('error',"Last Name cannot be blank");
        //   return
        // }
        // if(this.state.email.trim() == ''){
        //     this.setState({email:''},()=>{this.emailInputRef.focus(); })
        //     this.dropDownAlertRef.alertWithType('error',"Email cannot be blank");
        //   return
        // }
        // if(this.state.email.length > 0){
        //     let expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     if (expression.test(this.state.email)) {} 
        //     else {
        //         this.setState({email:''},()=>{this.emailInputRef.focus(); })
        //         this.dropDownAlertRef.alertWithType('error',"Email format is invalid");
        //         return  
        //     }
        // }
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
        // myFormData.append("firstname",this.state.firstname)
        // myFormData.append("lastname", this.state.lastname)
        // myFormData.append("email", this.state.email)
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

    render () {
      return (
        <View style={styles.maincontainer}>
            
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />
        <View style={styles.subcontainer1}>
            <View style={styles.subcontainertextcontainer}>
            <TouchableOpacity onPress={this.onBackClick}><Text style={styles.subcontainertextheader}>{'< Sign Up'}</Text></TouchableOpacity>
            </View>
        </View>

        <View style={styles.subcontainer2}>

        <KeyboardAwareScrollView style={{backgroundColor:"transparent"}} extraHeight={hp('10%')} enableOnAndroid enableAutomaticScroll>
        <View>
            <Text style={styles.inputheader}>Name</Text>
            </View>
            <View style={styles.mobileInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.mobileInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.passwordInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = ""
                placeholderTextColor ={colors.gray}
                autoCapitalize = "none"
                onChangeText={(name) => this.setState({name})}  />
            </View>
            <View>
            <Text style={styles.inputheader}>Mobile</Text>
            </View>
            <View style={styles.mobileInputContainer}>
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
            <Text style={styles.inputheader}>Email</Text>
            </View>
            <View style={styles.mobileInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.mobileInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.passwordInputRef.focus(); }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = ""
                placeholderTextColor ={colors.gray}
                autoCapitalize = "none"
                keyboardType="email-address"
                onChangeText={(email) => this.setState({email})}  />
            </View>
            <View>
            <Text style={styles.inputheader}>Password</Text>
            </View>
            <View style={styles.passwordInputContainer}>
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
            <View>
            <Text style={styles.inputheader}>Confirm Password</Text>
            </View>
            <View style={styles.passwordInputContainer}>
            <TextInput style = {styles.iconInputField}
                ref={(input) => { this.passwordInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { Keyboard.dismiss() }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = ""
                autoCapitalize = "none"
                secureTextEntry={this.state.togglePasswordVisibility}
                onChangeText={(cpassword) => this.setState({cpassword})}  />
            </View>

            <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={this.onLoginClick}><Text style={styles.navigatorText}>Sign In</Text></TouchableOpacity>
            <View style={{flexDirection:"row"}}><Text style={styles.forgotPasswordText}>have a referral code?</Text><TouchableOpacity onPress={this.onApplyCodeClick}><Text style={styles.navigatorText}>Apply Code</Text></TouchableOpacity></View>
            </View>

            <TouchableOpacity onPress={()=>{
                this.onRegisterClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>SIGN UP</Text>
            </TouchableOpacity>



            <Text style={{fontSize:font.normal,color:colors.gray,alignSelf:'center',marginTop:hp('2%')}}>By Continuing , you agree to our</Text>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:wp('86%')}}>
            <TouchableOpacity onPress={this.onTermsClick}><Text style={{fontSize:font.normal,color:colors.black,alignSelf:'center',marginTop:hp('1%')}}>Terms & Condition</Text></TouchableOpacity>
            <Text style={{fontSize:font.normal,color:colors.gray,alignSelf:'center',marginTop:hp('1%')}}> and </Text>
            <TouchableOpacity onPress={this.onPrivacyClick}><Text style={{fontSize:font.normal,color:colors.black,alignSelf:'center',marginTop:hp('1%')}}>Privacy Policy</Text></TouchableOpacity>
            </View>

            </KeyboardAwareScrollView>

        </View>
        <DropdownAlert inactiveStatusBarStyle="light-content" inactiveStatusBarBackgroundColor="#4F45F0" ref={ref => this.dropDownAlertRef = ref} />
        {/* <AppLoader isAppLoading={this.state.appLoading}/> */}
        <Modal isVisible={this.state.ApplyCodeModalVisible}>
        <View style={styles.modalmain}>
            <View style={styles.modalsub1}><Text style={styles.applycodeheader}>{'Apply Referral Code'}</Text></View>
            <View style={styles.modalsub2}>            
                <View style={styles.refcodeInputContainer}>
                <TextInput style = {styles.refcodeInputField}
                    ref={(input) => { this.refcodeInputRef = input }}
                    returnKeyType="next"
                    onSubmitEditing={() => { Keyboard.dismiss() }}
                    blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = ""
                    autoCapitalize = "none"
                    keyboardType="numeric"
                    onChangeText={(refcode) => this.setState({refcode})}  />
                </View>
            </View>
            <View style={styles.modalsub3}>            
            <TouchableOpacity onPress={()=>{
                this.onApplyCodeSubmitClick();
            }}  style={styles.refcodeButtonContainer}>
                <Text style={styles.refcodeButtonText}>Proceed</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
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
    modalmain:{height:hp('35%'),width:wp('100%'),alignSelf:"center",backgroundColor:colors.white},
    modalsub1:{height:hp('10%'),justifyContent:"center",alignSelf:"center",alignItems:"center",width:wp('90'),borderBottomWidth:hp('0.1%'),borderColor:colors.gray},
    modalsub2:{height:hp('15%'),justifyContent:"center",alignSelf:"center",alignItems:"center",width:wp('90')},
    modalsub3:{height:hp('10%'),justifyContent:"center",alignSelf:"center",alignItems:"center",width:wp('90')},

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
    refcodeInputContainer:{
        flexDirection:'row',
        backgroundColor:colors.white,
        alignSelf:"center",
        height:hp('7%'),
        width:wp('50%'),
        elevation:9
    },
    refcodeInputField:{
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
    refcodeButtonContainer:{
        alignItems:'center',
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:colors.primary,
        height:hp('7%'),
        width:wp('80%'),
        borderRadius:hp('1%'),
    },
    refcodeButtonText:{
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