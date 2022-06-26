import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: rgba(6,135,137, 0.85);;
    flex:1;
    padding: 4px 0;

`;


export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`;

export const Input = styled.TextInput`

    background-color: rgba(13,15, 15, 0.4);
    width: 85%;
    height: 50px;
    border-radius: 50px;
    padding: 8px 15px;
    font-size:18.5px;
    color: #fff;

`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 60px;
    align-items: center;
    justify-content: center;
   

`;


export const Title = styled.Text`
    padding-top:20px;
    padding-bottom: 6px;
    font-size: 19px;
    color: #fff;
    font-weight: bold;
    padding-left: 5px;
    padding-right: 14px;


`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
    height: 120px;
    width: auto;
    border-radius: 6px;
    margin-left: 12px;
    margin-right: 12px;
  

`;


export const SliderBook = styled.FlatList`
    height: 250px;
    padding:0 12px;

`;
