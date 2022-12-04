import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, FlatList} from 'react-native';





export default function HomeScreen({navigation}){
//   goToScreen = (screen) => {
//     this.props.navigation.navigate('{screen}');
//   };

//imagem de fundo
const image = require('../../../assets/book-in-library.jpg');

    return (

 
      <View style={styles.view}>
       
          <Text>Escolha a categoria de cadastro do Livro:</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#662E9B' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Biográfias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#43BCCD' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Clássicos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#662E9B' }]}
          onPress={() => navigation.navigate('Livros Cadastrados')}>
          <Text style={styles.ButtonText}>Infanto Juvenil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#43BCCD' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Romance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#662E9B' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Gibis e Revistas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#43BCCD' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Concurso Público</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#662E9B' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Outros</Text>
        </TouchableOpacity>
     
      </View>
    );
  
}
const styles=StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center',
        backgroundColor:"#FFF",
        justifyContent:'center',
        
    },

       
    button:{
    width:200,
    alignItems:'center',
    height: 45,
    borderRadius:15,
    backgroundColor:'purple',
    justifyContent: 'center',
    margin:15,
    
    },

    ButtonText:{
    fontSize: 20,
    fontWeight:'600',
    color:'#fff',
    alignSelf:'center'
    },
   
})