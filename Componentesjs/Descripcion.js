import { View, Image, StyleSheet,Text,Button, ScrollView } from 'react-native';

const titulo ="Acepto los términos \n y condiciones"

const Descripcion = (props) =>{
  console.log(props);
  return (
  
    <View style={styles.container}>

          <Image source={require('../assets/img/hacker.png')} style={styles.image2}/>
                      
          <View style={styles.view2}>
          <ScrollView style={styles.view1}>
          <Text style={styles.text}>El proyecto planteado es el desarrollo de una aplicación que permita lo siguiente:
          {'\n'}{'\n'}
               1. *Intercomunicación entre dos teléfonos*: {'\n'} {'\n'}
                 - Utilizar *sockets* para establecer una conexión cliente-servidor.{'\n'}
                  - La comunicación se realizará a través de una red, lo que implica trabajar con protocolos de transporte y mensajes binarios.{'\n'}
                   {'\n'}
               2. *Funciones principales del proyecto*:{'\n'}{'\n'}
                 - *Keylogger: El proyecto incluye implementar un **keylogger* que registre todas las teclas presionadas en un teléfono (servidor) y envíe esta información al otro teléfono (cliente).{'\n'}
                 - *Geolocalización remota: El teléfono servidor deberá capturar y enviar las coordenadas de latitud y longitud del dispositivo a petición del cliente. Estas coordenadas se usarán para mostrar la ubicación en **Google Maps* u otro sistema de mapas.{'\n'}{'\n'}

                3. *Estructura técnica*:{'\n'}{'\n'}
                - *Cliente-Servidor*:{'\n'}
                  - El *servidor* estará en el teléfono que recopila información (ubicación y teclas presionadas).{'\n'}
                  - El *cliente* será el teléfono que solicita esta información de manera remota.{'\n'}
                  - *Sockets*: Se usarán para establecer la comunicación entre los dos dispositivos a nivel de transporte.{'\n'}
                  - *Interacción en tiempo real*: La comunicación solo se activa cuando el cliente lo solicita, enviando los datos del servidor en respuesta a esa solicitud.{'\n'}{'\n'}

                4. *Consideraciones*:{'\n'}{'\n'}
                - El keylogger y el sistema de geolocalización deben activarse únicamente durante la conexión cliente-servidor.{'\n'}
                - Es importante diseñar cómo se manejarán los intervalos de comunicación, es decir, cuándo se enviará información y con qué frecuencia.{'\n'}{'\n'}

                ### *Resumen del objetivo del proyecto*: {'\n'}{'\n'}
                   Crear una aplicación que utilice *sockets* para implementar las siguientes capacidades: {'\n'}
                 - Registrar y enviar remotamente las teclas presionadas en un dispositivo (keylogger). {'\n'}
                 - Compartir la ubicación del dispositivo (latitud y longitud).{'\n'}
                  - Mostrar dicha información en una herramienta como Google Maps. {'\n'}
                  
                  </Text>
          </ScrollView>
        </View>
        <View style={styles.button}>
          <Button title={titulo}  style={{backgroundColor:"#1CCE8E"}} onPress={()=> props.navigation.navigate("Conexion")} />
        </View>
       
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
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

      view2:{
        position: 'absolute',
        flex: 1,
        width: 290, 
        height: 420, 
        left: 40,
        top:180,
        bottom:0,
        right:0,
        shadowColor: '#89CAB1',
        shadowOffset: {
          width: 3,
          height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 0.84,
        elevation: 5,
          borderRadius: 15, // Para una sombra más redondeada
         
      },

      button:{
        position: 'absolute',
        width:150,
        height:50,
        left:170,
        top:620,
      },
      view1:{
        flex: 1,
        position: 'absolute',
        marginVertical:20,
        width: 280, 
        height: 390, 
        
      },      

      text:{
        marginVertical:20,
        marginHorizontal:40,
        fontSize: 15, lineHeight: 22, letterSpacing: 2,
         textAlign: 'justify',
      },

  });

  export default Descripcion;