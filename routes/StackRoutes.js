//ROta tipo de navegação stack
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import Sobre from "../pages/Sobre"

const Stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator>

             {/*Telas: */}
            <Stack.Screen name="Home" component={Home} 
             /*estilização de header */
             options={{
                headerShown: false,
             }}
            />

            <Stack.Screen name="Sobre" component={Sobre}
             options={{
                headerShown: false
           }}/>   


            <Stack.Screen name="Detail" component={Detail}
             options={{
                headerShown: false,
                title: 'Detalhes'
             }}
            />

            <Stack.Screen name="Search" component={Search} 
                options={{
                    title: 'Sua Busca',
                    headerTintColor: "#662E9B",
                    
                    headerTitleStyle:{
                        color:"#FFF"
                    },
                    headerStyle:{
                        backgroundColor: "#43BCCD"
                    },                    
                 }}
            />

        </Stack.Navigator>
    )
};

export default StackRoutes;
