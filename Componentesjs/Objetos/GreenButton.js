import { StyleSheet ,Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GreenButton(props){

    const {onPress, text} = props


    return(
        <TouchableOpacity style ={{...styles.button}}
        onPress={ onPress}
        >
          <LinearGradient style ={{borderRadius: 20, width:200,
        height:80,justifyContent: 'center'}} colors={['#13AF76', '#074231', '#042921']}>

  
            <Text style ={styles.text}>{text}</Text>

            </LinearGradient>

        </TouchableOpacity>

    );
    


}

const styles = StyleSheet.create({
   

      button:{ 
        backgroundColor:"#1CCE8E",
        borderRadius: 20,
        width:200,
        height:80,
        margin:20,
      },
      

      text:{
        padding:  20,       
        fontSize: 15, 
        color: "white",
        textAlign: 'center',
      },

  });
