import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

//importando componentes telas
import StackRoutes from "./StackRoutes";
import Books from "../pages/Books";
import InternAcess from "../pages/InternAcess";

import { MaterialCommunityIcons } from '@expo/vector-icons';

//criando uma const para salvar o drawernavigator
const Drawer = createDrawerNavigator();

//criando rotas
function Routes(){
    return(
            /*opções de estilos na tela drawer*/
        <Drawer.Navigator
                screenOptions={{
                   headerShown: false,
                    drawerStyle:{
                        backgroundColor: 'rgba(67, 188, 205, 0.96)',
                        paddingTop: 30,
                    },
                    
                    drawerActiveBackgroundColor: '#662E9B',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor:'#fff'
                }}>

            {/* Como a home terá 2 tipos de navegação aqui é chamado a rota de stack */}
            <Drawer.Screen name="HomeDrawer" component={StackRoutes} 
             options={{
                title: 'Home',
                drawerIcon: ({focused, size, color}) => (
                    /*condição em 'name', para modificar os icones se em foco(selecionado) ou não */
                    <MaterialCommunityIcons name={focused ? 'book-open-page-variant-outline' : 'book-multiple-outline'}
                    size={25} color={color} />
                )
             }}
            />

            <Drawer.Screen name="Books" component={Books} 
             options={{
                title: 'Meus Livros',
                drawerIcon: ({focused, size, color}) => (
                    /*condição em 'name', para modificar os icones se em foco(selecionado) ou não */
                    <MaterialCommunityIcons name={focused ? 'bookshelf' : 'cards-playing-heart-multiple-outline'}
                    size={size} color={color} />
                )
             }}
            />

            <Drawer.Screen name = "InternAcess" component={InternAcess}
                       options={{
                title: 'Acesso',
                drawerIcon:({focused, size, color}) =>(
                        <MaterialCommunityIcons
                        /*criar condição para exibir dois tipo de icones se janela aberta ou fechada "?"" = se verdadeiro ":" se falso*/
                            name={focused ? 'folder-upload-outline' : 'plus-box-multiple-outline'}   
                            size={size}
                            color={color}                              
                        />
                )
             }}

            />
        </Drawer.Navigator>
    )
}

export default Routes;