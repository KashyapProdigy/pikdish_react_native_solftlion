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
    FlatList,
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
          renderTerms:[
            {
                id:1,
                header:"Introduction",
                desc:"These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website Name accessible at Website.com.\nThese Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.\nMinors or people below 18 years old are not allowed to use this Website"
            },
            {
                id:2,
                header:"Introduction",
                desc:"These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website Name accessible at Website.com.\nThese Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.\nMinors or people below 18 years old are not allowed to use this Website"
            },
            {
                id:3,
                header:"Introduction",
                desc:"These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website Name accessible at Website.com.\nThese Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.\nMinors or people below 18 years old are not allowed to use this Website"
            },
            {
                id:4,
                header:"Introduction",
                desc:"These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website Name accessible at Website.com.\nThese Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.\nMinors or people below 18 years old are not allowed to use this Website"
            },
          ],
          appLoading:false,
      };


    }

    componentDidMount(){}





    render () {
      return (
        <View style={styles.maincontainer}>
            
        <StatusBar
           backgroundColor={colors.primary}
           barStyle = "light-content"
         />
        <View style={styles.subcontainer1}>
            <View style={styles.subcontainertextcontainer}>
            <Image source={require('../../assets/icon/termsheader.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
            <Text style={styles.subcontainertextheader}>{'Terms & Condition'}</Text>
            </View>
        </View>

        <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.subcontainer2}
                    contentContainerStyle={{ paddingBottom: hp('20%')}}
                    data={this.state.renderTerms}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>                     
                            <View style={{marginTop:hp('2%')}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                <View style={{backgroundColor:colors.black,height:wp('2%'),width:wp('2%'),borderRadius:wp('2%')/2}}></View>
                                <View><Text style={{marginLeft:wp('2%'),color:colors.black,fontWeight:"bold",fontSize:font.normalheader}}>{item.header}</Text></View>
                                </View>
                                <View><Text style={{marginLeft:wp('4%'),color:colors.black,fontSize:font.normal}}>{item.desc}</Text></View>
                            </View>
                            
                        }
                />
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
        height:hp('6%'),
        backgroundColor:colors.primary
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
        height:hp('6%'),
        width:wp('96%'),
        alignItems:"center",
        flexDirection:"row"
    },
    subcontainertextheader:{
        fontSize:fonts.normalheader,
        color:colors.white,
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
        width:wp('90%'),
        alignSelf:"center"
    },
    backgroundImage: {
        height:hp('100%'),
        width:wp('100%')
    },
    normalheader:{
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
        marginHorizontal:wp('3%'),
        alignSelf:"center"
    },
    
})