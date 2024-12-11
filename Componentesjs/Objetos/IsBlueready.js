import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import BleManager from 'react-native-ble-plx';


const IsBluetoothSerial = () => {
  
  //CONSTANTES NECESARIAS PARA LA CONEXION BLUETOOH-INICIO

  const [devices, setDevices] = useState([]);

  useEffect(() => {

    const manager = new BleManager();

    const handleDiscoverPeripheral = (peripheral) => {
      // Agrega el dispositivo encontrado a la lista
      setDevices(prevDevices => [...prevDevices, peripheral]);
    };

    // Inicia la búsqueda de dispositivos
    manager.startDeviceScan(null, null, handleDiscoverPeripheral);

    return () => {
      // Detén la búsqueda al desmontar el componente
      manager.stopDeviceScan();
    };
  }, []);

  //CONSTANTES NECESARIAS PARA LA CONEXION BLUETOOH-FINAL
  
    return (
      <View>
        
       <Text>Hola mundo soy el bluetoothSerial {'\n'} y estoy realizando una prueba con la libreria react-native-ble-plx. . . </Text>
    

           </View>
      );
  };

  export default IsBluetoothSerial;