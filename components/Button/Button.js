import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import style from './style';

function Button(props) {
  const {text, icon, disable, btnStyle, onPress, btnTextStyle} = props;
    return (
      <TouchableOpacity 
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disable}
      style={[style.btnContainer, btnStyle]}
      
      >
        {text &&
         <Text
          style={[style.btnText,
            btnTextStyle, 
            { marginRight:icon ?10 : 0} ,
          ]}
         >
          
          {text}</Text>}
        {icon && <Image source={icon} resizeMode="contain" 
        
        style={[style.iconStyle,
          ]}        />}
      </TouchableOpacity>
    )
}

export default Button
