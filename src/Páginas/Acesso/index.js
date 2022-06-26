import React from 'react';
import { 
  KeyboardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';
import Header from '../../components/Header';

function Signin() {
  return(
    <KeyboardView>
      <Header />
      <Container>
        <Title></Title>
        <Input 
          placeholderTextColor="#ddd"
          placeholder="User"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Password"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>
acessar          </TextButton>AAaA
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  )
}

export default Signin;
