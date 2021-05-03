import React from 'react';
import {
  Image,
} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../helpers/theme/colors';
import Home from '../../screens/user/home';
import Orders from '../../screens/user/orders';
import Explore from '../../screens/user/explore';
import Account from '../../screens/user/account';


const Tab = createMaterialBottomTabNavigator();
const MainTabs = (props) => {
return(

    <Tab.Navigator
    initialRouteName="Home"
    activeColor={colors.primary}
    barStyle={{ backgroundColor: 'white' }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      unmountOnBlur={true}
      options={{
        tabBarLabel: 'Home',
        unmountOnBlur: true,
        tabBarIcon: ({ color }) => (
          <Image source={color == colors.primary ? require('../../assets/icon/home_primary.png') : require('../../assets/icon/home_gray.png')} style={{height:hp('3%'),width:hp('3%')}} resizeMode='contain'></Image>
        ),
      }}
      
    />
    <Tab.Screen
      name="Orders"
      component={Orders}
      options={{
        tabBarLabel: 'Orders',
        tabBarIcon: ({ color }) => (
          <Image source={color == colors.primary ? require('../../assets/icon/orders_primary.png') : require('../../assets/icon/orders_gray.png')} style={{height:hp('3%'),width:hp('3%')}} resizeMode='contain'></Image>

        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color }) => (
          <Image source={color == colors.primary ? require('../../assets/icon/explore_primary.png') : require('../../assets/icon/explore_gray.png')} style={{height:hp('3%'),width:hp('3%')}} resizeMode='contain'></Image>
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => (
          <Image source={color == colors.primary ? require('../../assets/icon/account_primary.png') : require('../../assets/icon/account_gray.png')} style={{height:hp('3%'),width:hp('3%')}} resizeMode='contain'></Image>
        ),
      }}
    />
  </Tab.Navigator>
)
}

export default MainTabs;