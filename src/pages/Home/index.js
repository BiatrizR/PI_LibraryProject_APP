//configurando toda a aba de todos os livros
import React from "react";
import { ScrollView } from "react-native";

import { Container, SearchContainer, Input, 
    SearchButton, Title, BannerButton, Banner,
    SliderBook
} from './styles';


import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

function Home(){
    return(
        <Container>

            <Header title="Todos os livros" />

            <SearchContainer>
                <Input
                placeholder="ex: autor, título ou categoria"
                placeholderTextColor="rgba(255,255, 255, 0.3)"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#F1D902" />
                </SearchButton>
            </SearchContainer>


            <ScrollView showsVerticalScrollIndicator={false}>

                <Title> Biblioteca Municipal - Rio das Pedras </Title>
                <BannerButton activeOpacity={0.6} onPress={ () => alert('TEST')}>
                 <Banner 
                  resizeMethod="resize"
                  source={require('../../../assets/whiteLogo.png')}
                  />
                </BannerButton>

                <Title> Biografias </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Clássicos </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

               <Title> Concurso Público </Title>
               <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Drama </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />


                <Title> Ficção </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Gibis e Quadrinhos </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Infanto Juvenil </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Poesias e Crônicas </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />
                
                <Title> Romance </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />
               
                <Title> Terror, Suspense</Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                

             

                




                
            </ScrollView>

         
        </Container>
    )
}

export default Home;