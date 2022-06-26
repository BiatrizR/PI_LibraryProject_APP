import React from 'react';

//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
  KeyboardView, 
  Title, 
  Container, 
  ContainerImg,
  Input, 
  ButtonSubmit,
  TextButton, Image, ScreenStack
} from './styles';
import Header from '../../components/Header';
import Taskbooks from './Taskbooks';
import Selo from '../../../assets/selo.png';

function Signin() {
  const navigation = createNativeStackNavigator();
  return(
    <KeyboardView>

       <Container>
       
       
      <Header title="Acesso" />
      
      
      <ContainerImg>

        <Image  
        resizeMode='cover'
        source={Selo}
        />


        </ContainerImg>

        <Input 
          placeholderTextColor="#ddd"
          placeholder="User"
        />
        <Input 
          placeholderTextColor="#ddd"
          placeholder="Password"
          secureTextEntry
        />
        <ButtonSubmit >
        
          <TextButton>
            Entrar
          </TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  )
}

export default Signin;