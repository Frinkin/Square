import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert, Text, View } from 'react-native';

export default function Square({color}) {
  return (
      <View style={styles.square}>
      <Text>Square</Text>
      </View>
  );
}
const styles = StyleSheet.create({
  square: {
    margin: 5,
    height: 90,
    width: 90,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
