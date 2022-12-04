
import React, { useState, useEffect } from "react";
import {  View, Text, TouchableOpacity, FlatList, Image } from 'react-native';


import database from '../../config/firebase';

import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';




export default function Books({ navigation }){
    const [books, setBooks] = useState([]);

    function deleteBook(id){
        database.collection("InfantoJuvenil").doc(id).delete()
    }

    //pegando a coleção infantoJuvenil do firestone
    useEffect(() =>{
        database.collection("InfantoJuvenil").onSnapshot((query) =>{
            const list =[]
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id});
            });
            setBooks(list);
        });

    }, []);

    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={books}
                renderItem={( { item })=> {
                    return(
                    <View style={styles.Books}>
                      
                      {/* deletar item da lista */}
                        <TouchableOpacity 
                            style={styles.deleteBook} 
                            onPress={() => {                      
                                deleteBook(item.id)
                                }}>
                            <FontAwesome
                                name="trash"
                                size={24}
                                color="#83020A"
                            >
                            </FontAwesome>
                            {/*Navegação para atela de detalhes e exibição */}
                        </TouchableOpacity>
                         
                        <Text
                            style={styles.DescriptionBook}
                            onPress={()=>{
                                navigation.navigate("Details", {
                                id: item.id,
                                title: item.title,
                                author: item.author,
                                edition: item.edition,
                                description: item.description,
                                image: item.image
                               
                            })
                        }}
                        >
                          
                         {item.title}
                        
                        
                        </Text>
                    </View> 
                    )
                }}
            />
            <TouchableOpacity style={styles.buttonNew} 
                onPress={()=> navigation.navigate("Novo Cadastro")}>
                <Text style={styles.iconButton}>+</Text>

            </TouchableOpacity>

        </View>

    )

}