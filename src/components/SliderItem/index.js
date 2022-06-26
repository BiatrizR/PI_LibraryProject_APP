import React from 'react';


import { Container, 
    BannerItem,
    Title,
    RateContainer,
    Rate
 } from './styles';

import { Ionicons } from '@expo/vector-icons';

function SliderItem(){
    return(
        <Container>
           <BannerItem
             source={require('../../../assets/desafiando.jpg')}
             />
            
             <RateContainer>
             <Title numberOfLines={1}>Desafiando a Sorte</Title>
                <Ionicons name="star" size={15} color="#F9C202" />
                
             </RateContainer>

        </Container>

    )

}

export default SliderItem;