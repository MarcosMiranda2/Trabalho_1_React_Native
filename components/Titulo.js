/*import { StyleSheet, Text, Image, View } from 'react-native';
import  React, { useEffect, useState } from 'react';

export default function Titulo({ route }){
    const { id } = route.params; 
    const [email, setEmailList] = useState([]);

    useEffect(function(){ 
      async function getData(){
        const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id);
        const email = await response.json();
        setEmailList(email);
      }
      getData();
    }, []); 

    function renderItem({item}){
        return <View>
            <Text> {item.tittle}</Text>
            </View>
    }
    return (
        <View style={styles.titulo}>
          <Text
            data={email.mensagens}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
}
const styles= StyleSheet.create({
    titulo: {
      flexDirection:'row',
      height:60,
      backgroundColor:'red',
      alignItems:'center',
    },
});
*/