import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
    </View>
)
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000080',
alignItems: 'center',
justifyContent: 'center',
},
text: {
    color:'#fff'
}
});
  

export default SettingsScreen; 