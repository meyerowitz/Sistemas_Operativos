import { StyleSheet ,Text, TouchableOpacity } from 'react-native';


export default function GreenButton(props){

    const {onPress, text} = props

    return(
        <TouchableOpacity style ={{...styles.button}}
        onPress={ onPress}
        >

  
            <Text style ={styles.text}>{text}</Text>

          
        </TouchableOpacity>

    );
    


}

const styles = StyleSheet.create({
   

      button:{ 
        backgroundColor:"#1CCE8E",
        borderRadius: 20,
        margin:20,
      },
      

      text:{
        padding:  20,
        fontSize: 15, lineHeight: 22, letterSpacing: 2,
        textAlign: 'center',
        fontStyle: "bold",
      },

  });
