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

import { TabView, SceneMap , TabBar } from 'react-native-tab-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../helpers/theme/colors';
import fonts from '../../helpers/theme/font';
import Accordion from 'react-native-collapsible/Accordion';
import * as Progress from 'react-native-progress';
// import AppLoader from '../component/loader';
import DropdownAlert from 'react-native-dropdownalert';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          tabINDEX:0,
          appLoading:false,
          routes:[
            { key: 'first', title: 'STATS' },
            { key: 'second', title: 'SALES' },
            { key: 'third', title: 'MOST POPULAR ITEMS' },
            { key: 'fourth', title: 'MOST CANCELLED' },
          ],
          chartdata : {
            labels: ["1/5", "2/5", "5/5", "10/5", "31/5", "1/6"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(224,60,52, ${opacity})`, // optional
                strokeWidth: 2 // optional
              }
            ],
            legend: ["SALE"] // optional
          }
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
        const FirstRoute = () => (
            <View style={{ height:hp('86%'),width:wp('100%'), backgroundColor:colors.off_white }}>

                <View style={{ height:hp('25%'),width:wp('100%'), alignItems:"center",justifyContent:"center",flexDirection:"row" ,marginTop:hp('4%')}}>
                    <View style={{ height:hp('22%'),width:wp('42%'),borderRadius:hp('2%'),backgroundColor:colors.white ,marginRight:wp('3%'),padding:hp('1%')}}>
                    <Text style={{fontSize:fonts.authheader,color:colors.primary,alignSelf:"center",marginTop:hp('4%')}} numberOfLines={1}>10</Text>
                    <Text style={{fontSize:fonts.normal,color:colors.primary,alignSelf:"center",marginTop:hp('1%')}} numberOfLines={1}>CATEGORIES</Text>
                    <Image source={require('../../assets/icon/dashboard_stat1.png')} style={{height:hp('4%'),width:wp('4%'),marginTop:hp('3%'),marginRight:wp('2%'),alignSelf:"flex-end"}} resizeMode='contain' />
                    </View>
                    <View style={{ height:hp('22%'),width:wp('42%'),borderRadius:hp('2%'),backgroundColor:colors.white ,marginLeft:wp('3%'),padding:hp('1%')}}>
                    <Text style={{fontSize:fonts.authheader,color:colors.primary,alignSelf:"center",marginTop:hp('4%')}} numberOfLines={1}>20</Text>
                    <Text style={{fontSize:fonts.normal,color:colors.primary,alignSelf:"center",marginTop:hp('1%')}} numberOfLines={1}>ITEMS</Text>
                    <Image source={require('../../assets/icon/dashboard_stat2.png')} style={{height:hp('4%'),width:wp('4%'),marginTop:hp('3%'),marginRight:wp('2%'),alignSelf:"flex-end"}} resizeMode='contain' />
                    </View>
                </View>

                <View style={{ height:hp('25%'),width:wp('100%'), alignItems:"center",justifyContent:"center",flexDirection:"row" }}>
                    <View style={{ height:hp('22%'),width:wp('42%'),borderRadius:hp('2%'),backgroundColor:colors.white ,marginRight:wp('3%'),padding:hp('1%')}}>
                    <Text style={{fontSize:fonts.authheader,color:colors.primary,alignSelf:"center",marginTop:hp('4%')}} numberOfLines={1}>20</Text>
                    <Text style={{fontSize:fonts.normal,color:colors.primary,alignSelf:"center",marginTop:hp('1%')}} numberOfLines={1}>TOTAL COLLECTION</Text>
                    <Image source={require('../../assets/icon/dashboard_stat3.png')} style={{height:hp('4%'),width:wp('4%'),marginTop:hp('3%'),marginRight:wp('2%'),alignSelf:"flex-end"}} resizeMode='contain' />
                    </View>                
                    <View style={{ height:hp('22%'),width:wp('42%'),borderRadius:hp('2%'),backgroundColor:colors.white ,marginLeft:wp('3%'),padding:hp('1%')}}>
                    <Text style={{fontSize:fonts.authheader,color:colors.primary,alignSelf:"center",marginTop:hp('4%')}} numberOfLines={1}>5</Text>
                    <Text style={{fontSize:fonts.normal,color:colors.primary,alignSelf:"center",marginTop:hp('1%')}} numberOfLines={1}>RATING</Text>
                    <Image source={require('../../assets/icon/dashboard_stat4.png')} style={{height:hp('4%'),width:wp('4%'),marginTop:hp('3%'),marginRight:wp('2%'),alignSelf:"flex-end"}} resizeMode='contain' />
                    </View>               
                </View>

            </View>
          );

          const chartConfig = {
            backgroundGradientFrom:colors.off_white,
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo:colors.off_white,
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => colors.gray,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            
            useShadowColorFromDataset: false // optional
          };

          const SecondRoute = () => (
            <View style={{ height:hp('86%'),width:wp('100%'), backgroundColor:colors.off_white }}>
                <View style={{height:hp('35%'),width:wp('90%'),alignSelf:"center",marginTop:hp('4%')}}>
                    <Text style={{fontSize:fonts.normal,color:colors.gray,marginTop:hp('1%'),alignSelf:"center",textAlign:"left",width:wp('90%'),borderBottomColor:colors.gray,borderBottomWidth:hp('0.15%')}} numberOfLines={1}>Last Week Sales in Amount</Text>
                    <LineChart
                        data={this.state.chartdata}
                        width={wp('88%')}
                        height={hp('28%')}
                        chartConfig={chartConfig}
                        withInnerLines={true}
                        withOuterLines={true}
                        />
                </View>

                <View style={{height:hp('35%'),width:wp('90%'),alignSelf:"center",marginTop:hp('4%')}}>
                    <Text style={{fontSize:fonts.normal,color:colors.gray,marginTop:hp('1%'),alignSelf:"center",textAlign:"left",width:wp('90%'),borderBottomColor:colors.gray,borderBottomWidth:hp('0.15%')}} numberOfLines={1}>Last Week Sales in Amount</Text>
                    <LineChart
                        data={this.state.chartdata}
                        width={wp('88%')}
                        height={hp('28%')}
                        chartConfig={chartConfig}
                        withInnerLines={true}
                        withOuterLines={true}
                        />
                </View>

            </View>
          );

          const ThirdRoute = () => (
            <View style={{ height:hp('86%'),width:wp('100%'), backgroundColor:colors.off_white }}>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0.7} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0.98} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>


                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0.34} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>


                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={1} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0.55} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.gray}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0.9} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

              

            </View>
          );

          const FourthRoute = () => (
            <View style={{ height:hp('86%'),width:wp('100%'), backgroundColor:colors.off_white }}>
                    <View  style={{height:hp('4%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal2,fontWeight:"bold",color:colors.black}} numberOfLines={1}>Items Name</Text>
                        <Text style={{fontSize:fonts.normal2,fontWeight:"bold",color:colors.black}} numberOfLines={1}>No. of Cancel</Text>
                        </View>
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black,borderBottomWidth:hp('0.2%'),borderColor:colors.primary,paddingHorizontal:wp('2%')}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black,borderBottomWidth:hp('0.2%'),borderColor:colors.primary,paddingHorizontal:wp('2%')}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black,borderBottomWidth:hp('0.2%'),borderColor:colors.primary,paddingHorizontal:wp('2%')}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black,borderBottomWidth:hp('0.2%'),borderColor:colors.primary,paddingHorizontal:wp('2%')}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black,borderBottomWidth:hp('0.2%'),borderColor:colors.primary,paddingHorizontal:wp('2%')}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>

                    <View  style={{height:hp('5%'),width:wp('90%'),marginTop:hp('4%'),alignSelf:"center"}}>
                        <View  style={{height:hp('4%'),width:wp('90%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",alignSelf:"center"}}>
                        <Text style={{fontSize:fonts.normal,color:colors.black}} numberOfLines={1}>Plain Dosa</Text>
                        <Text style={{fontSize:fonts.normal,color:colors.black,borderBottomWidth:hp('0.2%'),borderColor:colors.primary,paddingHorizontal:wp('2%')}} numberOfLines={1}>145</Text>
                        </View>
                        <Progress.Bar progress={0} width={wp('90%')} height={hp('0.5%')} color={colors.primary} unfilledColor={colors.light_gray} borderWidth={0}  />
                    </View>


            </View>
          );
    
          const renderScene = SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
            fourth: FourthRoute,
          });

          const renderTabBar = props => (
            <TabBar
              {...props}
              activeColor={colors.black}
              inactiveColor={colors.black}
              pressColor={colors.primary}
              indicatorStyle={{ backgroundColor:colors.primary }}
              scrollEnabled={true}
              tabStyle={{ width:wp('55%')}}
              labelStyle={{color:colors.black,fontSize:fonts.normal,fontWeight:"bold"}}
              style={{ backgroundColor:colors.off_white ,height:hp('7%'),justifyContent:"center",elevation:0}}
            />
          );

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
            <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index:this.state.tabINDEX, routes:this.state.routes }}
            renderScene={renderScene}
            onIndexChange={(i)=>{this.setState({tabINDEX:i})}}
            initialLayout={{height:hp('93%'),width:wp('100%'),}}
            />

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
        fontSize:fonts.normal,
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
    normal:{
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