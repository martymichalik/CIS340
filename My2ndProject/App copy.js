import React from 'react';  //import react, building websites
import {Text} from 'react-native';  //import text from react native, used for apps. JSX,puts html into JSX

export default function MyApp() {  //export function to be able to run, export name, default or list. Default allows expo to read your function. can be imported bya ny other programs, imported by expo in our case
  const pet = "Dog";
  return (
  
        <Text> 
         {"\n\n\n\n\n\""}
         Hello, I am a student in CIS340!{"\n"}
         I have a {pet}!
       </Text>
      
  );
}
