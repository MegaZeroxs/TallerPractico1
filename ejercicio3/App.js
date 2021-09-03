import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';


export default function App() {

  const [estado, setEstado] = useState(false)
  const [dataFinal, setDataFinal] = useState({
    min: 0,
    max: 0,
    estado: false
  })
  const [num, setNum] = useState({
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0
  })
  const [numA, setNumA] = useState([])
  const handleNumChange = (data, name) => {
    setNum({
      ...num,
      [name]: data
    });
  }

  useEffect(() => {
    if (num.num1 > 0 && num.num2 > 0 && num.num3 > 0 && num.num4 > 0) {
      if (Number.isInteger(parseFloat(num.num1))
        && Number.isInteger(parseFloat(num.num2))
        && Number.isInteger(parseFloat(num.num3))
        && Number.isInteger(parseFloat(num.num4))) {
        setEstado(true)
      } else {
        setEstado(false);
        setDataFinal({
          min: 0,
          max: 0,
          estado: false
        });
      }
    } else {
      setEstado(false);
      setDataFinal({
        min: 0,
        max: 0,
        estado: false
      });
    }
  }, [num])

  const handleCalculate = () => {
    setNumA([num.num1, num.num2, num.num3, num.num4]);
    // 
    let min = Math.min.apply(Math, numA);
    let max = Math.max.apply(Math, numA);
    if (parseFloat(min) > 10) {
      setDataFinal({
        min: min,
        max: (max + 10),
        estado: true
      });
    }
    else if (parseFloat(max) < 50) {
      setDataFinal({
        min: (min - 5),
        max: max,
        estado: true
      });
    }else{
      setDataFinal({
        min: min,
        max: max,
        estado: true
      });
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular números</Text>
      {!estado && <Text style={styles.error} >Únicamente se aceptan números mayores a 0 enteros</Text>}
      <Text>Primer número: </Text>
      <TextInput keyboardType="numeric" placeholder='0' onChangeText={(value) => { handleNumChange(value, 'num1') }} style={styles.input} />
      <Text>Segundo número:</Text>
      <TextInput keyboardType="numeric" placeholder='0' onChangeText={(value) => { handleNumChange(value, 'num2') }} style={styles.input} />
      <Text>Tercer número:</Text>
      <TextInput keyboardType="numeric" placeholder='0' onChangeText={(value) => { handleNumChange(value, 'num3') }} style={styles.input} />
      <Text>Cuarto número:</Text>
      <TextInput keyboardType="numeric" placeholder='0' onChangeText={(value) => { handleNumChange(value, 'num4') }} style={styles.input} />
      <StatusBar style="auto" />
      {estado && <Button title="Calcular números" onPress={handleCalculate} color="#841584" accessibilityLabel="" />}
      {dataFinal.estado &&
        <View>
          <Text>El número mayor es: {dataFinal.max} </Text>
          <Text>El número menor es: {dataFinal.min} </Text>
        </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
    borderTopWidth: 1,
    width: '50%',
    paddingTop: 5
  },
  dipose: {
    display: 'none'
  },
  show: {
    display: 'flex'
  },
  error: {
    color: 'red'
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '50%'
  }
});
