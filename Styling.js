import { StyleSheet } from "react-native";

export const app_ = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnWrapper: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    button: {
      backgroundColor: 'orange',
      paddingVertical: 10,
      paddingHorizontal: 30
    }
  });

export default textDesgin = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})