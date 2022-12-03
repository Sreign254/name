import React, { useState, useEffect } from 'react'
import { SafeAreaView,View, Text } from 'react-native';
import style from '../Pages/style';
import { Button } from '../../../components/Index';


export default function Welcome(props) {

    const {navigation} = props;
    
    const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []); //



  return (
   
      <SafeAreaView style={style.container} >
        <View style={style.mainView}>
            <Text style={style.textStyle}>Tcoin</Text>
            <Text style={style.textStyle}>Beta</Text>
            {
              visible &&
              <View style={style.buttonView}>
                <Button text="Get Started" disabled={false}
                onPress={() =>navigation.navigate("CreateAccount")}

                btnStyle={style.btnStyle}
                btnTextStyle={style.btnTextStyle}
                />
                <Button text="Sign In" disabled={false}
                onPress={() =>navigation.navigate("Login")}
                // btnStyle={style.btnStyle}
                 btnTextStyle={style.btnTextStyle2}
                />
                
              </View>
            }

        </View>
       
        
      </SafeAreaView>
  );
}