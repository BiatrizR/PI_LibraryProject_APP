import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity } from "react-native";

import database from '../../config/firebase';
import styles from './styles';

export default function Newbook({ navigation }){

    const [titulo, setTitulo] = useState(null);
    const [autor, setAutor] = useState(null);
    const [edicao, setEdicao] = useState(null);
    
    function addBook(){
        database.collection("InfantoJuvenil").add({
            titulo: titulo, 
            autor: autor,
            edicao: edicao
        })
        navigation.navigate("Books")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="titulo ex: A Ilha"
                onChangeText={setTitulo}
                value={titulo}
            />

            <Text style={styles.label}>Autor</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Autor ex: Mariana Davis"
                onChangeText={setAutor}
                value={autor}
            />

            <Text style={styles.label}>Edição</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Ano ex: 2000"
                onChangeText={setEdicao}
                value={edicao}
            />

            <TouchableOpacity
                style={styles.buttonNewBook}
                onPress={()=>{addBook()
                }}
            >
                <Text style={styles.iconButton}> Salvar </Text>
            </TouchableOpacity>
        </View>

    )

}