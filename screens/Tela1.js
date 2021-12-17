import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Tela1({ navigation }) {
  const [emailList, setEmailList] = useState([]);
  useEffect(function () {
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
      const emailList = await response.json();
      setEmailList(emailList);
    }
    getData();
  }, []);

  function renderItem({ item }) {
    return <TouchableOpacity onPress={() => navigation.navigate('Tela2', { id: item.id })}>
      <View style={styles.email}>
        <View style={styles.emailLists}>
          <Image style={styles.imgPerfil} source={{ uri: item.picture }} />
          <View style={styles.nomeEtitulo}>
            <Text style={styles.nome}>{item.to}</Text>
            <Text style={styles.nomeEtitulo}>{item.tittle}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.hora}>{item.time}</Text>
          <Icon name={item.star ? 'star' : 'staro'} size={20} color="yellow" />
        </View>
      </View>
      <Text style={styles.linha}>_______________________________________________________________</Text>
    </TouchableOpacity>
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.emailLists}>
        <FlatList
          data={emailList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    marginTop: Constants.statusBarHeight,
  },
  linha: {
    color: '#d3d3d3',
  },
  emailLists: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  email: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  imgPerfil: {
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
  },
  nome: {
    alignItems: 'center',
    marginLeft: 8,
    fontWeight: 'bold',
    color: '#fff',
  },
  nomeEtitulo: {
    marginLeft: 8,
    padding: 2,
    color: '#d3d3d3',
  },
  hora: {
    color: '#d3d3d3',
    alignItems: 'center',
    padding: 2,
  },
  principal: {
    flexDirection: 'row',
  },
});
