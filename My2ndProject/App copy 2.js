import React from 'react';  //import react, building websites
import {Text} from 'react-native';  //import text from react native, used for apps. JSX,puts html into JSX

export default function MyApp() {  
  
  function getFullName(fName, mName, lName){
    return fName + " " + mName + " " + lName;

  }
 
  const pet = "Dog";
  return (
  
        <Text> 
         {"\n\n\n\n\n\""}
         Hello, I am a student in CIS340!{"\n"}
         My full name is {getFullName("Martin","Liam","Michalik")} {"\n"}
         I have a {pet}!
       </Text>
      
  );
}
