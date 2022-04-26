import React from 'react';
import {Text, View, FlatList } from 'react-native';


export default StatesApp = () => {
   return (
     <View Style={{flex: 1, paddingTop: 22}}>
       <FlatList
         data={[
           {key: 'Alabama'},
           {key: 'Alaska'},
           {key: 'Arizona'},
           {key: 'California'},
           {key: 'Colorado'},
           {key: 'Delaware'},
           {key: 'Florida'},
           {key: 'Hawaii'},
           {key: 'Idaho'},
           {key: 'Arkansas'},
           {key: 'Indiana'},
           {key: 'Iowa'},
           {key: 'Kansas'},
           {key: 'Kentukcky'},
           {key: 'Maine'},
           {key: 'Michigan'},
           {key: 'Minnesota'},
           {key: 'Mississippi'}
         ]}
            renderItem = {({item}) => <Text style={{padding: 10, fontSize: 20, height: 44,}}> {item.key} </Text>}
        />

        </View>

   );
}