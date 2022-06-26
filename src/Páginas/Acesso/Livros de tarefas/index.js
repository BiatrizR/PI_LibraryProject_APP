
import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Selo from '../../../assets/selo.png';

function Header(){
    return(
        <Container>


            <Image  
            resizeMode='cover'
            source={Selo}
            />

            
        </Container>
        


        )

}

export default Header;
