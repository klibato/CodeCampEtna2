import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Button, Image, ImageBackground } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import tailwind from "tailwind-rn";



export default function App() {
  // creation d'un tableau et on attribue 
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setLogin] = useState('Ok')
  const [photoURL, setPhotoURL] = useState('');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  //demandé la permission de la cam
  useEffect(() => {
    askForCameraPermission();
  }, []);
  // parssé les 3 data
  const parseRegex = (str) => {
  
    const regex = /(.*)\|(.*)\|(.*)/gm;
    let m;

    while ((m = regex.exec(str)) !== null) {
      
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      return m[1];
    }
  }

  //se qui se passe quand on scan le code-barre
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log('Type: ' + type + '\nData: ' + data)
    //ajout des photos avec l'api de l'etna
    const login = parseRegex(data);
    if (login != undefined) {
      setLogin(login);
      setPhotoURL('https://auth.etna-alternance.net/api/users/' + login + '/photo');
    }
  };


  // avoir la permision et retourné l'écran
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Demande d'autorisation de la cam</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Autoriser la cam</Text>
        <Button title={'Autoriser la cam'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Retourne la vue 
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      <Image
        style={{ width: 200, height: 200, }}
        source={{ uri: photoURL }}/>
      {scanned && <Button title={'OK'} onPress={() => setScanned(false)} color='green' />}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'green'
  }
});
