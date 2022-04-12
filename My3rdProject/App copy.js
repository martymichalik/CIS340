import React from 'react';  //import react, building websites
import {Text, TextInput, View} from 'react-native';  //import text from react native, used for apps. JSX,puts html into JSX

function Student(props) {  
  
 //nested custom components, heart of react paradigm
  return (  //view is like div in html
      <View> 
        <Text> 
         Hello, my name is {props.name} and I am a student in CIS340!{"\n"}
       </Text>
     </View>
  );
}

export default function MultiComp(){
  return (
    <View style ={{
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Welcome to CIS340
      </Text>
      <Student name="Martin Michalik"/>
      <Student name="Alice Wonderland"/>
      <Student name="Bob White" />
      <Student name="Jon Clark" />
    </View>

  );
}
