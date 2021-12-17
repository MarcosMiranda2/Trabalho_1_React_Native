import { StyleSheet, Text, View, Image } from 'react-native';
import  React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { WebView } from 'react-native-webview';

export default function Tela2({ route }) {

  const { id } = route.params;
  const [email, setEmail] = useState([]);
  console.log(id);

  useEffect(function () {
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id);
      const email = await response.json();
      console.log(email.body);
      setEmail(email);
    }
    getData();
  }, []);  

  return (<View style={styles.container}>
    <View style={styles.titulo}>
      <Text style={styles.letraTitulo}>{email.tittle}</Text>
      <View style={styles.estrela}>
        <Icon name={email.star ? 'star' : 'staro'} size={20} color="yellow" />
      </View>
    </View>
    <Text style={styles.linha}>_______________________________________________________________</Text>
    <View style={styles.envio}>
      <View style={styles.containerImage}>
        <Image style={styles.imgPerfil} source={{ uri: email.picture }} />
      </View>
      <View>
        <Text style={styles.letraTo}>{email.from}</Text>
        <Text style={styles.paraMim}>para mim   ^</Text>
      </View>
      <Text style={styles.letraTime}>{email.time}.</Text>
    </View>
    <View>
    <WebView
    style={styles.containerBody}
    source={{ html: email.body}}/>
    </View>
  </View>
  );
}

//<Text style={styles.letraBody}>{email.body}.</Text>

/*<WebView
style={styles.container}
originWhitelist={['*']}
source={{ html:email.body}}
/> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  container2: {
    flex: 1,
    backgroundColor: 'red',
  },
  titulo: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 18,
  },
  letraTitulo: {
    color: '#fff',
    alignItems: 'center',
    fontSize: 25,
    padding: 10,
  },
  envio: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  imgPerfil: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
  letraTo: {
    color: '#fff',
    fontSize: 15,
    alignItems: 'center',
  },
  letraTime: {
    color: '#d3d3d3',
    fontSize: 12,
    padding: 20,
    paddingTop: 5,
  },
  containerImage: {
    padding: 15,
  },
  paraMim: {
    color: '#d3d3d3',
    fontSize: 12,
  },
  letraBody: {
    alignItems: 'center',
    fontSize: 30,
    color: '#fff',
    padding: 30,
  },
  estrela: {
    justifyContent: 'space-between',
  },
  containerBody:{
    backgroundColor:'red',      
    flex: 1,
    padding: 10,
  },
  linha: {
    paddingBottom:15,
    color: '#d3d3d3',
  },
});