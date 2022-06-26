import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import Books from '../pages/Books';
import Acesso from '../pages/Acesso';
import StackRoutes from './stackRoutes';

const Drawer = createDrawerNavigator();

function Routes(){

    return(
        <Drawer.Navigator  
        screenOptions={{
             headerShown: false,

            drawerStyle:{
                backgroundColor:'#0D3838',
                paddingTop: 80,
            
            },
              //selecionar os itens cores
            drawerActiveBackgroundColor: '#32B5B5',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff'

        }}
        >
           

            
            <Drawer.Screen name = "HomeDrawer" component={StackRoutes} 
             options={{
                title: 'Todos os Livros',
                drawerIcon:({focused, size, color}) =>(
                        <MaterialCommunityIcons
                        /*criar condição para exibir dois tipo de icones se janela aberta ou fechada "?"" = se verdadeiro ":" se falso*/
                            name={focused ? 'book-open-page-variant-outline' : 'book-multiple-outline' }
                            size={size}
                            color={color}
                            
                            />
                )
             }}
            
            />


            <Drawer.Screen name = "Books" component={Books}
            
            options={{
                title: 'Meus Livros',
                drawerIcon:({focused, size, color}) =>(
                        <MaterialCommunityIcons
                        /*criar condição para exibir dois tipo de icones se janela aberta ou fechada "?"" = se verdadeiro ":" se falso*/
                            name={focused ? 'heart-outline' : 'cards-playing-heart-multiple-outline' }
                            size={size}
                            color={color}
                            
                            />
                )
             }}
            
            
            />
            <Drawer.Screen name = "Acesso" component={Acesso}
            
            options={{
                title: 'Acesso',
                drawerIcon:({focused, size, color}) =>(
                        <MaterialCommunityIcons
                        /*criar condição para exibir dois tipo de icones se janela aberta ou fechada "?"" = se verdadeiro ":" se falso*/
                            name={'folder-upload-outline'}
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