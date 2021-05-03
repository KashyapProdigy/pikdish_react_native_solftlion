import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    StatusBar
  } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../helpers/theme/colors';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          userdata:null,
      };
    }

    componentDidMount(){
        setTimeout(() => {
            this.getUserData();
        }, 4000);
    }

    async getUserData() {
        var value = await AsyncStorage.getItem('User');
        if (value == null){
            this.props.navigation.replace('Register');
        } 
        else {
            // AsyncStorage.getItem("User").then((value) => {
            //     var mainValue = JSON.parse(value)
            //     console.log(mainValue);
            //     if (mainValue.type == 0) {
            //         this.props.navigation.replace('MainTabSeeker');
            //     } 
            //      else if (mainValue.type == 1) {
            //         this.props.navigation.replace("MainTabProvider");
            //     } 
            //     else if (mainValue.type == 2) {
            //         this.props.navigation.replace("MainTabSeller");
            //     } 
            // }).done();
        }
    }

    render () {
      return (
        <View style={styles.maincontainer}>
        <StatusBar
           backgroundColor="white"
           barStyle = "dark-content"
         />       
         <View style={styles.subcontainer}>
                <Image source={require('../../assets/image/splash_logo.png')} style={styles.image} resizeMode='contain'></Image>
        </View>
  
        </View>
      );
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        height: hp('100%'),
        width: wp('100%') ,
        backgroundColor:colors.white
    },
    subcontainer:{
        height: hp('100%'),
        width: wp('100%') ,
        alignItems:'center',
        justifyContent:'center' 
    },
    logotext:{
        color:'#4F45F06a',
        fontSize:hp('5%'),
        alignItems:'center',
        marginTop:hp('5%')
    },
    image:{
        height:hp('60%'),
        width:wp('60%')
    },
    backgroundImage: {
        height: hp('100%'),
        width: wp('100%') ,
    },
    CircleShapeView: {
        width: hp('35%'),
        height: hp('35%'),
        borderRadius: hp('35%')/2,
        backgroundColor: '#4F45F0',
        alignItems:'center',
        justifyContent:'center'
    },
})