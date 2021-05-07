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
    Keyboard,
    ScrollView
  } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
import Accordion from 'react-native-collapsible/Accordion';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          feedback:"",
          appLoading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onSendClick = this.onSendClick.bind(this);

  
    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

    onSendClick(){
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
            <View></View>
        </View>
        </View>

        <View    
            style={styles.subcontainer2}
        >
        <View style={{alignSelf:"center",height:hp('15%'),width:wp('90%'),justifyContent:"center",alignItems:"center"}}>
        <Image source={require('../../assets/image/splash_logo.png')} style={{alignSelf:"center",height:hp('15%'),width:wp('90%')}} resizeMode='contain'></Image>
        </View>

        <View style={{height:hp('0.1%'),width:wp('90%'),alignSelf:"center",borderColor:colors.gray,borderStyle: 'dashed',borderWidth:hp('0.10%'),borderRadius: 1,}}>            
        </View>

        <View style={{alignSelf:"center",height:hp('15%'),width:wp('90%'),justifyContent:"flex-end"}}>
        <Text style={{fontSize:fonts.pageheader,color:colors.black}} numberOfLines={1}>Feedback</Text>
        <Text style={{fontSize:fonts.normal1,color:colors.gray}} numberOfLines={1}>Provide your feedback to PIKDISH Team</Text>
        </View>

        <View style={{alignSelf:"center",height:hp('25%'),width:wp('90%'),backgroundColor:colors.white,borderRadius:hp('2%'),marginTop:hp('1%'),alignItems:"center",justifyContent:"center"}}>
            <View style={styles.mobileInputContainer}>
              <TextInput style = {styles.iconInputField}
                  ref={(input) => { this.feedbackInputRef = input }}
                  underlineColorAndroid = "transparent"
                  placeholder = "Enter Feedback..."
                  placeholderTextColor ={colors.gray}
                  autoCapitalize = "none"
                  multiline={true}
                  numberOfLines={4}
                  value={this.state.feedback}
                  onChangeText={(feedback) => this.setState({feedback})}  />
            </View>
        </View>

        <TouchableOpacity onPress={()=>{
                this.onSendClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Send</Text>
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
        height:hp('7%'),
    },
    modalmain:{height:hp('58%'),width:wp('100%'),position:"absolute",alignSelf:"center",bottom:0,backgroundColor:colors.white},
    modalsub1:{height:hp('8%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center",width:wp('100'),paddingHorizontal:wp('5%'),borderBottomWidth:hp('0.15%'),borderColor:colors.gray},
    modalsub2:{height:hp('40%'),justifyContent:"center",alignSelf:"center",alignItems:"center",width:wp('100')},
    modalsub3:{height:hp('9.85%'),justifyContent:"center",alignSelf:"center",alignItems:"center",width:wp('100'),borderTopWidth:hp('0.15%'),borderColor:colors.gray},
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
        alignSelf:"center",
        height:hp('20%'),
        width:wp('80%')
      
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
        width:wp('60%'),
        borderRadius:hp('1%'),
        marginTop:hp('5%'),
    },
    loginButtonText:{
        color:colors.white,
        fontSize:font.normal
    },
    modalButtonContainer:{
        alignItems:'center',
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:colors.primary,
        height:hp('6%'),
        width:wp('50%'),
        borderRadius:hp('1%'),
    },
    modalButtonText:{
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