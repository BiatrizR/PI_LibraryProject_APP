
import React, { useState, useEffect } from "react";
import {  View, Text, TouchableOpacity, FlatList } from 'react-native';


import database from '../../config/firebase';

import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';




export default function Books({ navigation }){
    const [books, setBooks] = useState([]);

    function deleteBook(id){
        database.collection("InfantoJuvenil").doc(id).delete()
    }

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
                        <TouchableOpacity 
                            style={styles.deleteBook} 
                            onPress={() => {
                                deleteBook(item.id)
                                }}
                        >
                            <FontAwesome
                                name="trash"
                                size={21}
                                color="#83020A"
                            >
                            </FontAwesome>
                        </TouchableOpacity>
                        <Text
                            style={styles.DescriptionBook}
                            onPress={()=>{
                                navigation.navigate("Details", {
                                id: item.id,
                                titulo: item.titulo,
                                autor: item.autor,
                                edicao: item.edicao,
                               
                            })
                        }}
                        >
                         {item.titulo}
                        
                        
                        </Text>


                    </View> 
                    )
                }}
            />
            <TouchableOpacity style={styles.buttonNew} onPress={()=> navigation.navigate("Novo Cadastro")}>

                <Text style={styles.iconButton}>+</Text>

            </TouchableOpacity>

        </View>

    )

}