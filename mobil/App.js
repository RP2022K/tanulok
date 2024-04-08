/*
* File: App.js
* Author: Gyüre Árpád
* Copyright: 2024, Gyüre Árpád
* Group: Szoft II-1-E
* Date: 2024-04-08
* Github: https://github.com/RP2022K/tanulok.git
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStudents } from './services/studentService';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export default function App() {

  const [students, setStudents] = useState([]);
  
  useEffect(() =>{
    getStudents().then(data => {
      console.log(data)
      setStudents(data)
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Tanulók listája</Text>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.studentsList}>
            <view style={styles.dataRow}>
              <Text style={styles.nameTitle}>Név:</Text>
              <Text style={styles.name}> {item.name}</Text>
            </view>

            <view style={styles.dataRow}>
              <Text style={styles.dataTitle}>Város:</Text>
              <Text style={styles.data}> {item.city},</Text>
            </view>

            <view style={styles.dataRow}>
              <Text style={styles.dataTitle}>Szül.idő:</Text>
              <Text style={styles.data}> {item.birth}</Text>
            </view>
            
            <view style={styles.dataRow}>
              <Text style={styles.dataTitle}>Csoport:</Text>
              <Text style={styles.data}> {item.groupId}</Text>
            </view>
          </View>
        )
        }
      />
      <StatusBar style="auto" />
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
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#77cca2',
    border: 'solid 1px black',
    borderRadius: 5
  },
  studentsList: {
    border: '2px solid green',
    borderRadius: 3,
    padding: 10,
    margin: 5,
    backgroundColor: '#efde10',
  },
  nameTitle: {
    color: '#b80000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  name: {
    marginLeft: 5,
    color: '#103e8c',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dataTitle: {
    color: '#351572',
    fontSize: 13,
    marginStart: 3,
    fontWeight: 'bold',
  },
  data: {
    marginLeft: 5,
    color: '#0b320a',
    fontSize: 13,
    marginStart: 3,
    fontWeight: 'bold',
  },
  dataRow: {
    display: 'flex',
    flexDirection: 'row'
  }
});
