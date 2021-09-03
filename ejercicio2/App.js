import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';


export default function App() {
  const [nombre, setNombre] = useState('');
  const [salario, setSalario] = useState(null);
  const [calculos, setCalculos] = useState({
    estado: false,
    isss: 0,
    afp: 0,
    renta: 0,
    salario_neto : 0
  })

  const calcularSalario = () => {
    if(salario === 0 || salario === null){
      setCalculos({
        estado: false,
        isss: 0,
        afp: 0,
        renta: 0,
        salario_neto : 0
      });
    }else{
      setCalculos({
        estado: true,
        isss: (salario*0.03),
        afp: (salario*0.04),
        renta: (salario*0.05),
        salario_neto : (salario - salario*(0.03+0.04+0.05))
      });
    }
    }

  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular Salario</Text>
      <Text>Nombre: </Text>
      <TextInput keyboardType="default" value={nombre} onChangeText={setNombre} style={styles.input} />
      <Text>Salario: ($)</Text>
      <TextInput keyboardType="numeric" value={salario} onChangeText={setSalario} style={styles.input} />
      <StatusBar style="auto" />
      <Button onPress={calcularSalario} title="Calcular salarios" color="#841584" accessibilityLabel="Learn more about this purple button"/>
      {calculos.estado && 
      <View style={styles.margin}>
        <Text>Empleado: {nombre}</Text>  
        <Text>Salario base: ${financial(salario)}</Text>  
        <Text>ISSS: ${financial(calculos.isss)}</Text>  
        <Text>AFP: ${financial(calculos.afp)}</Text>  
        <Text>Renta: ${financial(calculos.renta)}</Text>  
        <Text>Salario neto: ${financial(calculos.salario_neto)}</Text>  
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
