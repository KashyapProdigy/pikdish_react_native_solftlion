 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
 
 /**
  * Common Screen Imports For Root Stack
  */
 import SplashScreen from './src/screens/auth/splash';
 import Login from './src/screens/auth/login';
 import Register from './src/screens/auth/register';
 import OTPView from './src/screens/auth/otpverify';
 import ForgotPassword from './src/screens/auth/forgotpassword';
 import Terms from './src/screens/auth/terms';
 import Privacy from './src/screens/auth/privacy';
 import MainTabs from './src/screens/user/maintabuser';
 import OfferTabs from './src/screens/user/offerTabs';
 import EventList from './src/screens/user/eventlist';
 import EventPage from './src/screens/user/eventpage';
 import DineIn from './src/screens/user/dinein';
 import QRsuccess from './src/screens/user/qrsuccess';
 import RestoFoodList from './src/screens/user/restaurantfoodlist';
 import FoodCourtHome from './src/screens/user/foodcourthome';
 import EditProfile from './src/screens/user/editprofile';
 import OrderHistory from './src/screens/user/orderhistory';
 import EventHistory from './src/screens/user/eventhistory';
 import Feedback from './src/screens/user/feedback';
 import ContactUs from './src/screens/user/contactus';




 const RootStack = createStackNavigator();
 
 const App = () =>{
   return(
     <NavigationContainer>
       <RootStack.Navigator
       screenOptions={{
         headerShown:false,
         ...TransitionPresets.SlideFromRightIOS   
       }}
       mode={"modal"}
       >
         <RootStack.Screen name="SplashScreen" component={SplashScreen} />
         <RootStack.Screen name="Login" component={Login} />
         <RootStack.Screen name="Register" component={Register} />
         <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
         <RootStack.Screen name="OTPView" component={OTPView} />
         <RootStack.Screen name="Terms" component={Terms} />
         <RootStack.Screen name="Privacy" component={Privacy} />
         <RootStack.Screen name="MainTabs" component={MainTabs} />
         <RootStack.Screen name="OfferTabs" component={OfferTabs} />
         <RootStack.Screen name="EventList" component={EventList} />
         <RootStack.Screen name="EventPage" component={EventPage} />
         <RootStack.Screen name="DineIn" component={DineIn} />
         <RootStack.Screen name="QRsuccess" component={QRsuccess} />
         <RootStack.Screen name="RestoFoodList" component={RestoFoodList} />
         <RootStack.Screen name="FoodCourtHome" component={FoodCourtHome} />
         <RootStack.Screen name="EditProfile" component={EditProfile} />
         <RootStack.Screen name="OrderHistory" component={OrderHistory} />
         <RootStack.Screen name="EventHistory" component={EventHistory} />
         <RootStack.Screen name="Feedback" component={Feedback} />
         <RootStack.Screen name="ContactUs" component={ContactUs} />



       </RootStack.Navigator>
     </NavigationContainer>
   )
 }
 
 export default App;
 