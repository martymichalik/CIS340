import React from 'react';  //import react, building websites
import {Text, Image, View} from 'react-native';  //import text from react native, used for apps. JSX,puts html into JSX

export default function MyDog(props) {  
  
  let pic = {uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/iamges/dog2.png"};
  
  return (  
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alsignItems: 'center'
      }}>
        <Image source = {pic}
         style={{width: 200, height: 200}}
        />
       <Text>Hello, this is my dog</Text>
      </View>
  );
}

 
