import { View, Text , SafeAreaView, ScrollView, TextInput, TouchableWithoutFeedback} from 'react-native'
import React, {useState} from 'react'

import { Button } from '../../../../components/Index';
import Style from './Style';

export default function CreateAccount(props) {
  const {navigation} = props;
  
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
   <SafeAreaView  style={Style.container}>
    <ScrollView contentContainerStyle={Style.mainView}>
        <View>
            <Text style={Style.textStyle}>
                Create your Account
            </Text>

            <View style={Style.setMargin}>
                <Text style={Style.textStyle1} >First Name</Text>
                <TextInput
                  // style={{width: "100%"}}
                  value={firstname}
                  placeholder="John"
                  onChangeText={(text) => setFirstName(text)}
                  style={Style.textInputStyle}
                  >
                  </TextInput>
              </View>

              <View style={Style.setMargin}>
                <Text style={Style.textStyle1} >Last Name</Text>
                <TextInput
                  // style={{width: "100%"}}
                  value={lastname}
                  placeholder="Doe"
                  onChangeText={(text) => setLastName(text)}
                  style={Style.textInputStyle}
                  >
                  </TextInput>
              </View>

              <View style={Style.setMargin}>
                <Text style={Style.textStyle1} >Email</Text>
                <TextInput
                  // style={{width: "100%"}}
                  value={email}
                  placeholder="tcoin@gmail.com"
                  onChangeText={(text) => setEmail(text)}
                  style={Style.textInputStyle}
                  >
                  </TextInput>
              </View>

              <View style={Style.setMargin}>
                <Text style={Style.textStyle1} >Password</Text>
                <TextInput
                  // style={{width: "100%"}}
                  value={password}
                  placeholder="@yey#241Fh69@Bjj"
                  onChangeText={(text) => setPassword(text)}
                  style={Style.textInputStyle}
                  >
                  </TextInput>
              </View>
              <View style={Style.section}>
                <Text style={Style.textStyle2} >
                  I certify that I am 18 years pf age or older,
                   and I agree to the 
                  <TouchableWithoutFeedback>
                    <Text style={Style.linkStyle2}> 
                      Terms and Conditions </Text>
                  </TouchableWithoutFeedback> 
                  and 
                  <TouchableWithoutFeedback>
                     <Text style={Style.linkStyle2}> 
                      Privacy Policy.  </Text> 
                  </TouchableWithoutFeedback>
                </Text>
              </View>
                  </View>
              <View style={Style.btnView}>
              <Button text="Start" disabled={false}
                onPress={() =>navigation.navigate("Login")}

              />
                </View>
        
    </ScrollView>
   </SafeAreaView>
  )
}
