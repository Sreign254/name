import React from "react";
import { Platform, StyleSheet, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../../Constants/Colors";



export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.White,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  },
  mainView : {
    flexGrow: 1,
    paddingTop: RFValue (60),
    paddingHorizontal: 20,
    justifyContent: "space-between",
        // backgroundColor: Colors.primaryblue,
        // justifyContent: 'center',
        // alignItems: 'center',
  },
  textStyle : {
    // Colors: Colors.White,
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  textStyle1 : {
    // Colors: Colors.White,
    fontWeight: 'bold',
    fontSize: RFValue(15),
    marginTop: 4,
    // color:Colors.sweetPose,
  },textStyle2:{
    // Colors: Colors.White,
    fontWeight: 'bold',
    flex:1,
    fontSize: RFValue(15),
    marginTop: 4,
  },
  flexRowView : {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  setMargin:{
    marginTop:15,
  },
  textInputStyle : {
    height: RFValue(45),
    paddingHorizontal: 20,
    fontSize: RFValue(15),
    color: Colors.White,
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.primaryblue,
    borderRadius: RFValue(5),
  },
  btnView: {
    marginVertical:20,
  },
  linkStyle: {
    fontSize: RFValue(15),
    color: Colors.sweetPose,
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  linkStyle2:{
    fontSize: RFValue(15),
        color: Colors.sweetPose,

  },
  linkStyle:{
    fontSize: RFValue(15),
        color: Colors.primaryblue,

  },section :{
    marginTop:20,
    fontSize: RFValue(15),
        color: Colors.primaryblue,
        flexDirection: 'row',
  }
  

})