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

import Modal from 'react-native-modal';

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
          searchstring:'',
          ApplyCodeModalVisible:true,
          appLoading:false,
      };


      this.onBackClick = this.onBackClick.bind(this);

    }

    componentDidMount(){
        var that = this;
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            that.searchstringInputRef.focus();
          });
    }
    componentWillUnmount() {
        this._unsubscribe();
    }

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

        <View style={styles.modalmain}>
            <TouchableOpacity onPress={this.onBackClick} style={styles.modalsub1}>
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('2.5%'),width:wp('2.5%')}} resizeMode='contain' />
            </TouchableOpacity>
            <View style={styles.searchstringInputContainer}>
            <TextInput style = {styles.searchstringInputField}
                    ref={(input) => { this.searchstringInputRef = input }}
                    // returnKeyType="next"
                    // onSubmitEditing={() => { Keyboard.dismiss() }}
                    // blurOnSubmit={false}
                    underlineColorAndroid = "transparent"
                    placeholder = "Search for restaurant & dishes..."
                    placeholderTextColor={colors.gray}
                    autoCapitalize = "none"
                    value={this.state.searchstring}
                    onChangeText={(searchstring) => this.setState({searchstring})}  />
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
        backgroundColor:colors.off_white
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
    modalmain:{height:hp('8%'),width:wp('100%'),flexDirection:"row",backgroundColor:colors.white},
    modalsub1:{height:hp('8%'),alignItems:"center",justifyContent:"center",width:wp('10%')},


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
    searchstringInputContainer:{
        flexDirection:'row',
        backgroundColor:colors.white,
        alignSelf:"center",
        height:hp('7%'),
        width:wp('85%'),
    },
    searchstringInputField:{
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
    searchstringButtonContainer:{
        alignItems:'center',
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:colors.primary,
        height:hp('7%'),
        width:wp('80%'),
        borderRadius:hp('1%'),
    },
    searchstringButtonText:{
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