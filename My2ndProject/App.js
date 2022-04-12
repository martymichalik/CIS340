import React from 'react';  //import react, building websites
import {Text, TextInput, View} from 'react-native';  //import text from react native, used for apps. JSX,puts html into JSX

function MyApp() {  
  
 //nested custom components, heart of react paradigm
  return (  //view is like div in html
      <View> 
        <Text> 
         Hello, I am a student in CIS340!{"\n"}
       </Text>
     </View>
  );
}

export default function MultiComp(){
  return (
    <View style = {{
      flex: 1,  //flex creates recntagnle
      justifyContent: 'Center',  //make items in the center
      alignItems: 'center'
    }}>
      <Text>  Welcome to my Class </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}