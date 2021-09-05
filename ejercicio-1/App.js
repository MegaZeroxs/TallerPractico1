import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';


export default function App() {
  const [valorA, setValorA] = useState(null);
  const [valorB, setValorB] = useState(null);
  const [valorC, setValorC] = useState(null);
  const [calculos, setCalculos] = useState({
    estado: false,
    respuesta1: 0,
    respuesta2: 0,
  })

  const calcularEcuacion = () => {
    if(valorA === 0 || valorA ===0 || valorA === 0){
      setCalculos({
        estado: false,
        respuesta1: 0,
        respuesta2: 0
      });
    }else{
      setCalculos({
        estado: true,
        respuesta1: (((-valorB) + (valorB^2 - 4*valorA*valorC)^(1/2))/(2*valorA)),
        respuesta2: (((-valorB) - (valorB^2 - 4*valorA*valorC)^(1/2))/(2*valorA))
      });
    }
    }

  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular Ecuación Cuadrática</Text>
      <Text>Variable A</Text>
      <TextInput keyboardType="numeric" value={valorA} onChangeText={setValorA} style={styles.input} />
      <Text>Variable B</Text>
      <TextInput keyboardType="numeric" value={valorB} onChangeText={setValorB} style={styles.input} />
      <Text>Variable C</Text>
      <TextInput keyboardType="numeric" value={valorC} onChangeText={setValorC} style={styles.input} />
      <StatusBar style="auto" />
      <Button onPress={calcularEcuacion} title="Calcular raices" color="#841584" accessibilityLabel="Learn more about this purple button"/>
      {calculos.estado && 
      <View style={styles.margin}>
        <Text>Respuesta 1: {financial(calculos.respuesta1)}</Text>  
        <Text>Respuesta 2: {financial(calculos.respuesta2)}</Text>  
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  margin:{
    marginTop: 10,
    borderTopWidth: 1,
    width: '50%',
    paddingTop: 5
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '50%'
  }
});
