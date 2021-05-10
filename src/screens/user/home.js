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
        renderTerms:[
            {
                id:1,
                title:"Table Order/Dine In",
                image:require('../../assets/image/home_cat1.png'),
            },
            {
                id:2,
                title:"Pre-Order/Table Booking",
                image:require('../../assets/image/home_cat2.png'),            
            },
            {
                id:3,
                title:"Take Away",
                image:require('../../assets/image/home_cat3.png'),            
            },
            {
                id:4,
                title:"Delivery By Restaurant",
                image:require('../../assets/image/home_cat4.png'),            
            },
            {
                id:5,
                title:"Event",
                image:require('../../assets/image/home_cat5.png'),            
            },
          ],
          appLoading:false,
      };

      this.onBackClick = this.onBackClick.bind(this);
      this.onOfferClick = this.onOfferClick.bind(this);
      this.onLocationClick = this.onLocationClick.bind(this);
      this.onTableOrderClick = this.onTableOrderClick.bind(this);
      this.onPreOrderClick = this.onPreOrderClick.bind(this);
      this.onTakeAwayClick = this.onTakeAwayClick.bind(this);
      this.onDeliveryClick = this.onDeliveryClick.bind(this);
      this.onEventClick = this.onEventClick.bind(this);

    }

    componentDidMount(){}

    onLocationClick(){

    }

    onBackClick(){
        this.props.navigation.goBack();
    }

    onTableOrderClick(){
        // this.props.navigation.navigate('DineIn');
        this.props.navigation.navigate('SetAddress');
    }

    onPreOrderClick(){
        this.props.navigation.navigate('RestoList');
    }

    onTakeAwayClick(){
        this.props.navigation.navigate('RestoList');
    }

    onDeliveryClick(){
        this.props.navigation.navigate('RestoList');
    }

    onEventClick(){
        this.props.navigation.navigate('EventList');
    }

    onOfferClick(){
        this.props.navigation.navigate('OfferTabs');
    }

    render () {
      return (
       <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />
       <View style={styles.subcontainer1}>
       <TouchableOpacity  onPress={this.onLocationClick} style={{flexDirection:"row",alignItems:"center",}}>
           <Text style={{color:colors.black,fontSize:font.normal}}>Location</Text>
           <Image source={require('../../assets/icon/drop_down_black.png')} style={styles.socialButtonImage} resizeMode='contain'></Image>
       </TouchableOpacity>
       <TouchableOpacity onPress={this.onOfferClick} style={{flexDirection:"row",alignItems:"center",}}>
           <Image source={require('../../assets/icon/discount_primary.png')} style={styles.OfferButtonImage} resizeMode='contain'></Image>
           <Text style={{color:colors.black,fontSize:font.normal}}>Offer</Text>
        </TouchableOpacity>
       </View>
       <View style={styles.subcontainer2}>
       <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={styles.subcontainer2flatlist}
                    contentContainerStyle={{ paddingBottom: hp('20%')}}
                    data={this.state.renderTerms}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>                     
                            <TouchableOpacity onPress={()=>{
                                if(item.id == 1)
                                this.onTableOrderClick()
                                if(item.id == 2)
                                this.onPreOrderClick()
                                if(item.id == 3)
                                this.onTakeAwayClick()                               
                                if(item.id == 4)
                                this.onDeliveryClick()
                                if(item.id == 5)
                                this.onEventClick()
                            }} 
                            style={{marginTop:hp('5%'),marginHorizontal:wp('4%'),height:hp('22%'),width:wp('40%')}}>
                                <View style={{alignItems:"center",height:hp('17%'),width:wp('40%')}}>
                                     <Image source={item.image} style={styles.CategoryImage} resizeMode='cover'></Image>
                                </View>
                                <View style={{alignItems:"center",height:hp('5.1%'),width:wp('40%'),alignSelf:"center",justifyContent:"center",textAlign:"center",backgroundColor:colors.primary}}>
                                    <Text style={{color:colors.white,fontSize:font.subnormal,padding:hp('1%')}} numberOfLines={1}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        }
                />
        </View>
       <DropdownAlert inactiveStatusBarStyle="dark-content" inactiveStatusBarBackgroundColor="white" ref={ref => this.dropDownAlertRef = ref} />
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
        width:wp('90%'),
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
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