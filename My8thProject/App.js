import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 

export default function App() {

  const [selectedImage, setSelectedImage ] = React.useState(null)

  let openImagePickerAsync = async () => {
    
    let permissionResult = await ImagePicker.requestCameraRollPermissionAsync();

    if (permissionResult.granted === false){
      alert("Permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ lcoalUri: pickerResult.uri});
  };

  let openSharingDialogAsync = async () => {
      if ( !(await Sharing.isAvailableAsync())){
          alert('Sharing is not available on my phone');
          return;
      }
      Sharing.shareAsync(selectedImage.localUri);
  }

  if (selectedImage !== null) {
    return(
      <View style={styles.container}>
          <Image source={{ uri: selectedImage}} style={styles.selImage}/>

          <TouchableOpacity onPress={openSharingDialogAsync} style={styles.button}>
            <Text style={styles.buttonText}> Share My Photo </Text> 
          </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Image ource={{uri: 'https://raw.githubusercontent.com/AbundabiRamadan/CIS340/master/images/logo.png'}}
            style={styles.logo} />
      <Text style={styles.insts}>
         Press the button below to select an image on your phone!
      </Text>
    
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>

          <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    alignITems: "center",
    backgroundColor: "#778899",
    padding: 10
  },

  insts: {
    fontSize: 18,
    color: "#87OEFA",
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
      width: 305,
      height: 300,
      marginBottom: 20
  },

  buttonText:{
    fontSize: 20,
    color: "#fff"
  },

  selImage: {
    width: 300,
    height: 300,
    resizeMOde: 'contain' 
  }
});
