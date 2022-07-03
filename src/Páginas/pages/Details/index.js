import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import database from '../../config/firebase';


export default function Details({ navigation, route}){
   
    const[tituloEdit, setTituloEdit] = useState(route.params.titulo);
    const[autorEdit, setAutorEdit] = useState(route.params.autor);
    const[edicaoEdit, setEdicaoEdit] = useState(route.params.edicao);
    const idBook = route.params.id;

    function editBooks(titulo, autor, edicao, id){
        database.collection("InfantoJuvenil").doc(id).update({
            titulo: tituloEdit,
            autor: autorEdit,
            edicao: edicaoEdit,
        });

        navigation.navigate("Books");

    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="titulo ex: A Ilha"
                onChangeText={setTituloEdit}
                value={tituloEdit}
            />

            <Text style={styles.label}>Autor</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Autor ex: Mariana Davis"
                onChangeText={setAutorEdit}
                value={autorEdit}
            />

            <Text style={styles.label}>Edição</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Ano ex: 2000"
                onChangeText={setEdicaoEdit}
                value={edicaoEdit}
            />

            <TouchableOpacity
                style={styles.buttonNewBook}
                onPress={()=>{editBooks(tituloEdit, autorEdit, edicaoEdit, idBook)
                }}
            >
                <Text style={styles.iconButton}> Salvar </Text>
            </TouchableOpacity>
        </View>

    )

}