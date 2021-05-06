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
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          name:"",
          number:"",
          email:"",
          dob:"",
          anniversary:"",
          appLoading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onEditProfileClick = this.onEditProfileClick.bind(this);
      this.onSaveProfileClick = this.onSaveProfileClick.bind(this);

    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onEditProfileClick(){
    }




    onSaveProfileClick(){
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
            <View></View>
        </View>
        </View>
        <KeyboardAwareScrollView             
            style={styles.subcontainer2}
            contentContainerStyle={{paddingBottom:hp('10%')}} extraHeight={hp('10%')} enableOnAndroid enableAutomaticScroll>

            <View style={{flexDirection:"row",marginVertical:hp('4%')}}>
            <View style={{width:wp('50%')}}>
            <Image source={require('../../assets/image/avatar.png')} style={{borderRadius: hp('17%')/2,width: hp('17%'),height: hp('17%'),alignSelf:"center"}} resizeMode='cover' />
            </View>
            <TouchableOpacity onPress={this.onEditProfileClick} style={{alignSelf:"center",alignItems:"center",justifyContent:"center",flexDirection:"row",width:wp('50%'),paddingRight:wp('10%')}}>
                <Text style={{fontSize:fonts.normalheader,color:colors.black,textAlign:"left"}} numberOfLines={1}>Edit Photo</Text>
                <Image source={require('../../assets/icon/nav_right.png')} style={{height:hp('2%'),width:wp('2%'),marginLeft:wp('2%')}} resizeMode='contain' />
            </TouchableOpacity>
            </View>
            <View>


            <View style={{width:wp('90%'),justifyContent:"center",alignSelf:"center"}}>
                <View>
                <Text style={styles.inputheader}>Name</Text>
                </View>
                <View style={styles.nameInputContainer}>
                <TextInput style = {styles.iconInputField}
                    ref={(input) => { this.nameInputRef = input }}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.mobileInputRef.focus(); }}
                    blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = ""
                    placeholderTextColor ={colors.gray}
                    autoCapitalize = "none"
                    onChangeText={(name) => this.setState({name})}  />
                </View>

                <View>
                <Text style={styles.inputheader}>Mobile No</Text>
                </View>
                <View style={styles.nameInputContainer}>
                <TextInput style = {styles.iconInputField}
                    ref={(input) => { this.mobileInputRef = input }}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.emaiInputRef.focus(); }}
                    blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = ""
                    placeholderTextColor ={colors.gray}
                    autoCapitalize = "none"
                    keyboardType={"phone-pad"}
                    onChangeText={(number) => this.setState({number})}  />
                </View>

                <View>
                <Text style={styles.inputheader}>Email</Text>
                </View>
                <View style={styles.nameInputContainer}>
                <TextInput style = {styles.iconInputField}
                    ref={(input) => { this.emaiInputRef = input }}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.dobInputRef.focus(); }}
                    blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = ""
                    placeholderTextColor ={colors.gray}
                    autoCapitalize = "none"
                    onChangeText={(email) => this.setState({email})}  />
                </View>

                <View>
                <Text style={styles.inputheader}>Date of Birth</Text>
                </View>
                <View style={styles.nameInputContainer}>
                <TextInput style = {styles.iconInputField}
                    ref={(input) => { this.dobInputRef = input }}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.anniversaryInputRef.focus(); }}
                    blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = ""
                    placeholderTextColor ={colors.gray}
                    autoCapitalize = "none"
                    onChangeText={(dob) => this.setState({dob})}  />
                </View>

                <View>
                <Text style={styles.inputheader}>Anniversary</Text>
                </View>
                <View style={styles.nameInputContainer}>
                <TextInput style = {styles.iconInputField}
                    ref={(input) => { this.anniversaryInputRef = input }}
                    returnKeyType="next"
                    onSubmitEditing={() => { Keyboard.dismiss() }}
                    blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = ""
                    placeholderTextColor ={colors.gray}
                    autoCapitalize = "none"
                    onChangeText={(anniversary) => this.setState({anniversary})}  />
                </View>
            </View>
            </View>

            <TouchableOpacity onPress={()=>{
                                this.onSaveProfileClick();
                            }}  style={styles.loginButtonContainer}>
                                <Text style={styles.loginButtonText}>Save</Text>
            </TouchableOpacity>


        </KeyboardAwareScrollView>
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
    nameInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.off_white,
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