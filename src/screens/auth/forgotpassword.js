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
    }

    componentDidMount(){}

    onLoginClick(){
        this.props.navigation.replace('OTPView');
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
            <Text style={styles.subcontainertextheader}>Forgot Password?</Text>
            </View>
            <View style={styles.subcontainerimagecontainer}>
            <Image source={require('../../assets/image/fpassword_logo.png')} style={styles.subcontainerimage} resizeMode='contain'></Image>
            </View>
            <View style={styles.subcontainertextcontainer}>
            <Text style={styles.subcontainertextsubheader}>{'Enter the Mobile No associated with\nyour account'}</Text>
            </View>
        </View>

        <View style={styles.subcontainer2}>

        <KeyboardAwareScrollView style={{backgroundColor:"transparent"}} extraHeight={100} enableOnAndroid enableAutomaticScroll>
            <View>
            <Text style={styles.inputheader}>Enter Your Mobile No</Text>
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

            <TouchableOpacity onPress={()=>{
                this.onLoginClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>NEXT</Text>
            </TouchableOpacity>


            </KeyboardAwareScrollView>

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
        height:hp('50%'),
    },
    subcontainerimagecontainer:{
        height:hp('25%'),
        width:hp('25%'),
        borderRadius:hp('25%')/2,
        backgroundColor:colors.lightpurple,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
    },
    subcontainerimage:{
        height:hp('17%'),
        width:hp('17%'),
        alignSelf:"center"
    },
    subcontainertextcontainer:{
        height:hp('10%'),
        width:wp('86%'),
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    subcontainertextheader:{
        fontSize:fonts.authheader,
        fontWeight:"bold",
        color:colors.black,
    },
    subcontainertextsubheader:{
        fontSize:fonts.normalheader,
        color:colors.black,
        textAlign:"center"
    },
    subcontainer2:{
        height:hp('50%'),
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
        width:wp('86%')
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