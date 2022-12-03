import { View, Text , SafeAreaView, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { Button } from "../../../../components/Index";
import Style from "../Style"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Login(props) {
  const {navigation} = props;
  const {email, setEmail} = useState("");
  const [password, setPassword] = useState("");


  return (
   <SafeAreaView style={Style.container}>
    <ScrollView contentContainerStyle={Style.mainView}>
          
            <View>
              <Text style={Style.textStyle}>Sign in to Tcoin</Text>
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
              <View>
              {/* <TouchableOpacity >
                  <Text style={Style.flexRowView}>
                    Forgot Password
                  </Text>
                </TouchableOpacity> */}
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
              <View>
               
                <TouchableOpacity style={Style.linkStyle}>
                <Text style={Style.flexRowView}>
                    Forgot Password
                  </Text>
                  <Text  style={Style.flexRowView}>
                    Privacy Information
                  </Text>
                </TouchableOpacity>
              </View>
               
            </View>
            <View style={Style.btnView}>
              <Button text="Sign in" disabled={false}
                onPress={() =>navigation.navigate("Home")}

              />
                </View>
          </ScrollView>
   </SafeAreaView>
  )
}