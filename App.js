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


       </RootStack.Navigator>
     </NavigationContainer>
   )
 }
 
 export default App;
 