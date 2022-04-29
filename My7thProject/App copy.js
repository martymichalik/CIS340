import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button
          onPress={() => {
            alert('You tapped button 1');
          }}
          title='Press button 1'
        />
      </View>

      <View style={styles.containerLayoutButton}>
      <Button
          onPress={() => {
            alert('You tapped button 2');
          }}
          title='Press button 2'
        />

      <Button
          onPress={() => {
            alert('You tapped button Great');
          }}
          title='Great'
          color='green'
        />      
      </View>

      <View style={styles.containerButton}>
      <Button
          onPress={() => {
            alert('You tapped button Me');
          }}
          title='Tap me!'
        />
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 20,
  },

  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
