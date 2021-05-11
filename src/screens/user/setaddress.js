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
    Keyboard,
    ScrollView,
    SafeAreaView
  } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import Accordion from 'react-native-collapsible/Accordion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleSwitch from 'toggle-switch-react-native';
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MapView, {Marker,Polyline} from 'react-native-maps';


export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
  

      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onApplyCouponClick = this.onApplyCouponClick.bind(this);
      this.onPayNowClick = this.onPayNowClick.bind(this);
      this.onDetailedBillClick = this.onDetailedBillClick.bind(this);

    }

    componentDidMount(){}

    onPayNowClick(){
      this.props.navigation.navigate('PaymentSelection');
    }

    onBackClick(){
        this.props.navigation.goBack();
    }

    onDetailedBillClick(){
        this.props.navigation.navigate('DineIn');
    }


    onApplyCouponClick(){
        this.props.navigation.navigate('Coupon');
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
            <TouchableOpacity onPress={this.onBackClick} style={{height:hp('7%'),width:wp('10%'),alignItems:"center",justifyContent:"center"}}>
            <Image source={require('../../assets/icon/nav_left.png')} style={{height:hp('2.5%'),width:hp('2.5%')}} resizeMode='contain' />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:wp('4%'),height:hp('7%'),width:wp('30%')}}>
        </View>
        </View>

        <KeyboardAwareScrollView 
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:hp('5%')}}
        extraHeight={hp('20%')}
        style={styles.subcontainer2}
        >
          <View style={styles.mapContainer}>
          <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 21.202140,
            longitude:72.867362,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          customMapStyle={mapStyle}>
          <Marker
            // draggable={true}
            coordinate={{
              latitude: 21.2021,
              longitude: 72.8673,
            }}
            image={require("../../assets/icon/phonepe_logo.png")}
            // onDragEnd={
            //   (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            // }
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />

        <Marker
            // draggable={true}
            coordinate={{
              latitude: 21.2408,
              longitude: 72.8806,
            }}
            image={require("../../assets/icon/home_primary.png")}
            // onDragEnd={
            //   (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            // }
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />

        <Polyline coordinates={[
              {
                latitude: 21.2021,
                longitude: 72.8673,
              }
            , 
            {
              latitude: 21.2408,
              longitude: 72.8806,
            }]} />
        </MapView>
        </View>  
        <View style={{height:hp('7%'),width:wp('100%'),marginVertical:hp('2%'),alignSelf:"center",alignItems:"center",flexDirection:"row"}}>
          <Text style={{color:colors.black,fontSize:fonts.normal,width:wp('25%'),paddingHorizontal:wp('2%'),alignSelf:"center"}}>Location :</Text>
          <View style={styles.InputContainer}>
            <TextInput style = {styles.InputField}
                ref={(input) => { this.locationInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.addressInputRef.focus()  }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = ""
                autoCapitalize = "none"
                value={this.state.locationstring}
                onChangeText={(locationstring) => this.setState({locationstring})}  />
            </View>
        </View>

        <View style={{height:hp('11%'),width:wp('100%'),marginVertical:hp('2%'),alignSelf:"center",alignItems:"center",flexDirection:"row"}}>
          <Text style={{color:colors.black,fontSize:fonts.normal,width:wp('25%'),paddingHorizontal:wp('2%'),alignSelf:"center"}}>Address :</Text>
          <View style={styles.aInputContainer}>
            <TextInput style = {styles.InputField}
                ref={(input) => { this.addressInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { this.landmarkInputRef.focus() }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = ""
                autoCapitalize = "none"
                multiline={true}
                numberOfLines={2}
                value={this.state.addressstring}
                onChangeText={(addressstring) => this.setState({addressstring})}  />
            </View>
        </View>

        <View style={{height:hp('7%'),width:wp('100%'),marginVertical:hp('2%'),alignSelf:"center",alignItems:"center",flexDirection:"row"}}>
          <Text style={{color:colors.black,fontSize:fonts.normal,width:wp('25%'),paddingHorizontal:wp('2%'),alignSelf:"center"}}>Landmark :</Text>
          <View style={styles.InputContainer}>
            <TextInput style = {styles.InputField}
                ref={(input) => { this.landmarkInputRef = input }}
                returnKeyType="next"
                onSubmitEditing={() => { Keyboard.dismiss() }}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = ""
                autoCapitalize = "none"
                value={this.state.landmarkstring}
                onChangeText={(landmarkstring) => this.setState({landmarkstring})}  />
            </View>
        </View>

        <TouchableOpacity onPress={()=>{
                this.onSetAddressClick();
            }}  style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Set Address</Text>
            </TouchableOpacity>

    </KeyboardAwareScrollView>

       <DropdownAlert inactiveStatusBarStyle="dark-content" inactiveStatusBarBackgroundColor="white" ref={ref => this.dropDownAlertRef = ref} />
       </View>
     );
   
   }
}

const mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}],
    },
  ];

const styles = StyleSheet.create({
    maincontainer:{
        height:hp('100%'),
        width:wp('100%'),
        backgroundColor:colors.white
    },
    mapContainer:{
      height:hp('53%'),
      width:wp('100%')
    },
      mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    subcontainer1:{
        height:hp('7%'),
        width:wp('100%'),
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    modalmain:{height:hp('7%'),width:wp('100%'),alignSelf:"center",alignItems:"center",backgroundColor:colors.white,position:"absolute",top:-hp('2.5%'),flexDirection:"row"},
    modalsub1:{height:hp('7%'),width:wp('10%'),justifyContent:"center",alignItems:"center",},
    modalsub2:{height:hp('7%'),width:wp('90%'),justifyContent:"center",alignItems:"center",},

    fmodalmain:{height:hp('65%'),width:wp('100%'),alignSelf:"center",alignItems:"center",backgroundColor:colors.white,position:"absolute",bottom:-hp('2.5%')},
    fmodalsub1:{height:hp('7%'),width:wp('100%'),paddingHorizontal:wp('10%'),alignItems:"center",justifyContent:"space-between",alignSelf:"center",flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:colors.gray},
    fmodalsub2:{height:hp('45%'),width:wp('100%'),justifyContent:"center",alignItems:"center",},
    fmodalsub3:{height:hp('13%'),width:wp('100%'),justifyContent:"center",alignItems:"center",flexDirection:"row",borderTopWidth:hp('0.15%'),borderColor:colors.gray},

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
        width:wp('10%'),
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
    subcontainer3:{
        height:hp('8%'),
        width:wp('100%'),
        paddingHorizontal:wp('7%'),
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:colors.black
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

    InputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.white,
        alignSelf:"center",
        width:wp('70%'),
        marginHorizontal:wp('2%'),
        paddingHorizontal:wp('1%'),
        height:hp('6%'),
        borderRadius:hp('1.5%')
    },
    aInputContainer:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:colors.white,
      alignSelf:"center",
      width:wp('70%'),
      marginHorizontal:wp('2%'),
      paddingHorizontal:wp('1%'),
      height:hp('10%'),
      borderRadius:hp('1.5%')
  },
    InputField:{
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
        backgroundColor:colors.primary,
        height:hp('6%'),
        width:wp('70%'),
        borderRadius:hp('1%'),
        marginVertical:hp('2%'),
        alignSelf:"center"
    },
    loginButtonText:{
        color:colors.white,
        fontSize:font.normal
    },
    menuButtonContainer:{
      alignItems:'center',
      justifyContent:"center",
      alignSelf:"center",
      position:"absolute",
      bottom:hp('11%'),
      backgroundColor:colors.primary,
      height:hp('5%'),
      width:wp('30%'),
      borderRadius:hp('3%'),
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