import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('');
  const [resultadoSelectiva, setResultadoSelectiva] = useState('');
  const [resultadoIterativa, setResultadoIterativa] = useState([]);

  const analizarDatos = () => {
    const valor = parseInt(numero);
    
    // 1. Estructura Selectiva (if-else)
    if (isNaN(valor)) {
      setResultadoSelectiva('Error: Ingresa un número válido.');
      setResultadoIterativa([]);
      return;
    }

    if (valor >= 18) {
      setResultadoSelectiva('Condición (if): Eres mayor de edad.');
    } else {
      setResultadoSelectiva('Condición (else): Eres menor de edad.');
    }

    // 2. Estructura Iterativa (for)
    const lista = [];
    for (let i = 1; i <= valor; i++) {
      lista.push(`Ciclo ${i}: Procesando dato...`);
    }
    setResultadoIterativa(lista);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style="{styles.title}">Práctica de Estructuras Modificada</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu edad (ej. 5)"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      
      <Button title="Analizar Datos" onPress={analizarDatos} />

      <Text style={styles.subtitle}>{resultadoSelectiva}</Text>

      {resultadoIterativa.map((item, index) => (
        <Text key={index} style={styles.item}>{item}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, width: '100%', marginBottom: 15, borderRadius: 5, backgroundColor: '#fff' },
  subtitle: { fontSize: 18, marginTop: 20, color: '#0056b3', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  item: { fontSize: 16, marginTop: 5, color: '#333' }
});