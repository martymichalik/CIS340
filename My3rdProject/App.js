import React, {useState} from 'react';  //import react, building websites
import {Text, Button, View} from 'react-native';  //import text from react native, used for apps. JSX,puts html into JSX



function TV(props) {
  const [isOff, setIsOff] = useState(true);

  return(
  <View>
      <Text>
        {"\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "OFF" : "Turned On"}
      </Text>
      <Button
        onPress={() => {
          setIsOff(false);
        }}
        disabled={!isOff}
        title={isOff ? "Turn Me on, Please!" : "Thank You!"}
        />
    </View>
  );

}

export default function MultiTVs(){
  return (
    <View>
      <TV name ="LG" />
      <TV name ="Sony" />
    </View>

  );
}
 

 
