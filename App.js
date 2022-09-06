import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert, Text, View } from 'react-native';
import Square from './components/square';

export default function App() {
  return (
    <View style={styles.container}>
      <Square color={red}/>
      <Square color={blue}/>
      <Square color={green}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
});
