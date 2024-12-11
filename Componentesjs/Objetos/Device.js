import React from 'react';
import { View, Image, StyleSheet,Text,TouchableOpacity} from 'react-native';



export default function Device(props){
    return(
        <TouchableOpacity style={StyleSheet.touch}>
            <View style={StyleSheet.conteiner}>
            <Image source={require("../../assets/img/conexion.png")}></Image>
            </View>
            <View style={StyleSheet.conteiner}>
                <Text>jhkhkjh</Text>
            </View>
            <View style={StyleSheet.conteiner}>
                <Image source={require("../../assets/img/conexion.png")}></Image>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touch: {
    width: "100%",
    height:150,
    marginTop: 15,
    marginBottom:15,
      backgroundColor: 'white',
    },

    conteiner: {
        backgroundColor: 'white',
      },

    image: {
        position: 'absolute',
        flex: 1,
        width: '100%', 
        height: '100%', 
      },

      image2: {
        position: 'absolute',
        flex: 1,
        width: 80, 
        height: 80, 
        left: 140,
        top:60,
        bottom:0,
        right:0,
      },


  });