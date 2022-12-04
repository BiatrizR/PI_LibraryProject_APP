import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Image,  KeyboardAvoidingView } from "react-native";

import styles from "./styles";
import database from '../../config/firebase';
import { ScrollView } from "react-native-gesture-handler";
import { Feather, Ionicons } from '@expo/vector-icons';




export default function Details({ navigation, route}){
   
    const[titleEdit, setTitleEdit] = useState(route.params.title);
    const[authorEdit, setAuthorEdit] = useState(route.params.author);
    const[editionEdit, setEditionEdit] = useState(route.params.edition);
    const[descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const[imageEdit, setEdicaoImage] = useState(route.params.image);

    const idBook = route.params.id;

    function editBooks(title, author, edition, description, image, id){
        database.collection("InfantoJuvenil").doc(id).update({
            title: titleEdit, 
            author: authorEdit,
            edition: editionEdit,
            description: descriptionEdit,
            image: imageEdit,
        });

        alert("Livro Editado com Sucesso!")

        navigation.navigate("Livros Cadastrados");

    }

     //função para capturar imagem
     const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    return(
        
        <View style={styles.container}>
         <ScrollView style={{width:'90%', height:'100%' }}
          showsVerticalScrollIndicator={false}
         >  
            <View style={{ top:10, alignItems: 'center', justifyContent: 'center' }}>
            {imageEdit && <Image source={{ uri: imageEdit }} style={styles.imagemDesign}
             onChangeText={setEdicaoImage}
             value={imageEdit}
            />}
                <TouchableOpacity style={styles.buttonGaleria} onPress={pickImage}>
                    <Text style={styles.textoBotaoPicker}> Galeria </Text>
                </TouchableOpacity>
           </View>

            <Text style={styles.label}>Título: </Text>
            <TextInput 
                style={styles.inputText}
                placeholder="titulo ex: A Ilha"
                onChangeText={setTitleEdit}
                value={titleEdit}
            />

            <Text style={styles.label}>Autor: </Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Autor ex: Mariana Davis"
                onChangeText={setAuthorEdit}
                value={authorEdit}
            />

            <Text style={styles.label}>Edição: </Text>
            <TextInput 
                style={styles.inputText}
                placeholder="ex: 2000"
                onChangeText={setEditionEdit}
                value={editionEdit}
            />

            <Text style={styles.label}>Descrição ou Resumo: </Text>
            <TextInput 
                multiline
                style={styles.inputDescription}
                placeholder="Dê um resumo ou uma pequena descrição sobre o livro"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />


            <TouchableOpacity style={styles.buttonAvailable}>
                <Feather  
                name="x-square" size={45} color="#C80303" />  
                <Text style={styles.titlebuttonAvailable}>Emprestado</Text>
            </TouchableOpacity>

            </ScrollView>

            <TouchableOpacity
                style={styles.buttonNewBook}
                onPress={()=>{editBooks(titleEdit, authorEdit, editionEdit, descriptionEdit, imageEdit, idBook)
                }}
            >
                <Text style={styles.iconButton}> Salvar </Text>
            </TouchableOpacity>
           
        </View>
       
    )

}