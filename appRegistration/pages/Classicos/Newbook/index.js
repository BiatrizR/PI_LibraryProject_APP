import React, { useState, useEffect } from "react";
import {View, Text, TextInput, TouchableOpacity, TouchableHighlight, Button, Image, Alert, Platform } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import firebaseConfig from '../../config/firebase.js';

import {initializeApp} from 'firebase/app';

import database from '../../config/firebase';
import styles from './styles';

import { ScrollView } from "react-native-gesture-handler";

//import storage from "@react-native-firebase/storage";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL} from "firebase/storage";


//initializeApp(firebaseConfig);

import { Feather, Ionicons } from '@expo/vector-icons';


export default function Newbook({ navigation }){

    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [edition, setEdition] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    //2.
    const [imgURL, setImgURL] = useState("");
    const [progress, setProgress] = useState(0);


    //solicita permissão para acesso a mídia do dispositivo
    // useEffect(() => {
    //     (async () => {
    //         if (Platform.OS !== 'web') {
    //             const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //             if (status !== 'granted') {
    //                 alert ('Desculpe, é necessário permitir o uso da câmera para isso!')
    //             }
    //         }
    //     })();
    // }, []);
    
    // //3. upload imagem STORAGE
    // const handleUpload =(event) =>{
    //     event.preventDefault();
    //     const file = event.target[0]?.file[0]
    //     const storageRef = ref(storage, `images/${file.name}`)
    //     const uploadTask = uploadBytesResumable(storageRef, file)

    //     uploadTask.on(
    //         "state_changed",
    //         snapshot =>{
    //             const progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //             setProgress(progress)
    //         },
    //         error =>{
    //             alert(error)
    //         },
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then(url => {
    //                 setImgURL(url)
    //             })
    //         }
    //     )
    // }


    
    //adicionar a colection que receberá os campos de input
    function addBook(){
        database.collection("Clássicos").add({
            title: title, 
            author: author,
            edition: edition,
            description: description,
            image: image,
        
        });

        alert("Livro cadastrado com sucesso!")
        navigation.navigate("Livros Cadastrados")
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
          const storage = getStorage();
          const storageRef = ref(storage);
          setImage(result.uri);
        
          const bytes = await img.blob();
        
          await uploadBytes(ref, bytes);
        }
      };
     
     

    return(
        
        <View style={styles.container}>
            <ScrollView style={{width:'90%', height:'100%' }}
            showsVerticalScrollIndicator={false}
            >  
            <View style={{ top:10, alignItems: 'center', justifyContent: 'center'}}>
            {image && <Image source={{ uri: image }} style={styles.imagemDesign} />}
            
                <TouchableHighlight >
                <TouchableOpacity  style={styles.buttonGaleria} onPress={pickImage}>
                   
                    <Text style={styles.textoBotaoPicker}> Add Imagem </Text>
                </TouchableOpacity>
                </TouchableHighlight>
                
                </View>
                 
            
            <Text style={styles.label}>Título</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="titulo ex: A Ilha"
                onChangeText={setTitle}
                value={title}
            />

            <Text style={styles.label}>Autor: </Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Autor ex: Mariana Davis"
                onChangeText={setAuthor}
                value={author}
            />

            <Text style={styles.label}>Edição: </Text>
            <TextInput 
                style={styles.inputText}
                placeholder="ex: 2000"
                onChangeText={setEdition}
                value={edition}
            />

        <Text style={styles.label}>Descrição ou Resumo: </Text>
            <TextInput 
                multiline
                style={styles.inputDescription}
                placeholder="Dê um resumo ou uma pequena descrição sobre o livro"
                onChangeText={setDescription}
                value={description}
            />

            <TouchableOpacity style={styles.buttonAvailable}>
                <Feather  
                name="check-square" size={45} color="#0AE020" />  
                <Text style={styles.titlebuttonAvailable}>Disponível</Text>
            </TouchableOpacity>

             </ScrollView> 
           
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