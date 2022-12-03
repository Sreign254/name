import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../Constants/Colors";



export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.primaryblue,
  },
  mainView : {
    flex: 1, 
        backgroundColor: Colors.primaryblue,
        justifyContent: 'center',
        alignItems: 'center',
  },
  textStyle : {
    Colors: Colors.White,
    fontWeight: 'bold',
    fontSize: RFValue(35),
  },
  btnStyle:{
    backgroundColor: Colors.White,
        // padding: 20,
        // margin: 20,
  },
  btnStyle2:{
    marginTop: 20,
  },
  btnTextStyle:{
    color: Colors.primaryblue,
  },
  buttonView:{
    position: 'absolute',
    bottom : 20,
    left : 20,
    right : 20,
  }

})