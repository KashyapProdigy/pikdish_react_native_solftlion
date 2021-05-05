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
    Linking
  } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        scan: false,
        ScanResult: false,
        scanresultcode:0,
        result: null,
        appLoading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);

    }

    componentDidMount(){}

    onBackClick(){
        this.props.navigation.goBack();
    }

   onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        this.setState({
            result: e,
            scan: false,
            ScanResult: true,
            scanresultcode:0,
        })
        if (check === 'http') {
            // Linking
            //     .openURL(e.data)
            //     .catch(err => console.error('An error occured', err));
                
                this.setState({
                    scanresultcode:1
                })
                this.props.navigation.replace('QRsuccess');
        } else {
            this.setState({
                result: e,
                scan: false,
                ScanResult: true,
                scanresultcode:2
            })
        }

    }

    activeQR = () => {
        this.setState({
            scan: true
        })
    }
    scanAgain = () => {
        this.setState({
            scan: true,
            ScanResult: false
        })
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
        </View>
        </View>

        <View style={styles.subcontainer2}>

        <View style={{height:hp('35%'),width:wp('100%'),justifyContent:"center",alignItems:"center"}}>
            <Image source={this.state.result != null  && this.state.scanresultcode == 2 ? require('../../assets/image/scanner_error.png') :require('../../assets/image/scanner.png')} style={{height:hp('35%'),width:wp('100%')}} resizeMode='cover' />
        </View>

        <View style={{height:hp('58%'),width:wp('100%'),justifyContent:"center",alignItems:"center",backgroundColor:colors.dark_gray}}>
        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            cameraTimeout={10000}
                            ref={(node) => { this.scanner = node }}
                            cameraStyle={{height:hp('40%'),width:wp('80%'),alignSelf:"center"}}
                            onRead={this.onSuccess}
                            cameraTimeoutView={
                                <View  style={{height:hp('30%'),width:wp('80%'),alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:colors.white}}>
                                    <View><Text style={{fontSize:fonts.normal2,color:colors.black}} numberOfLines={1}>Camera Timeouted</Text></View>
                                    <View><Text style={{fontSize:fonts.subnormal,color:colors.black,marginTop:hp('1%')}} numberOfLines={1}>Tap to try again !</Text></View>
                                </View>
                            }
                            bottomContent={
                                this.state.result != null  && this.state.scanresultcode == 2 ?
                                <View style={{height:hp('10%'),width:wp('100%'),alignSelf:"center",backgroundColor:colors.white,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontSize:fonts.normalheader,color:colors.primary}} numberOfLines={1}>Invalid QR-Code !!</Text>
                                    <TouchableOpacity  onPress={() => this.scanner.reactivate()}>
                                    <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Explore Menu !!</Text>
                                    </TouchableOpacity>
                                </View>
                                : 
                                <View></View>
                            }
                        />

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
        height:hp('6%'),
        width:wp('70%'),
        borderRadius:hp('1%'),
        marginTop:hp('7%'),
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