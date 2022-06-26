import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
  padding-top: 4px;
  padding-right: 16px;
  width: 140px;
  height: 180px;
`;

export const BannerItem = styled.Image`
    width: 100%;
    height: 170px;
    border-radius: 8px;

`;

export const Title = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding-right: 5px ;
    
`;

export const RateContainer = styled.View`
    flex-Direction: row;
    align-items: center;
    padding-top: 5px;
    padding-left: 5px;
`;

export const Rate = styled.Text`
    padding-left: 4px;
    color: #FFF;
    font-size: 12px;

`;
