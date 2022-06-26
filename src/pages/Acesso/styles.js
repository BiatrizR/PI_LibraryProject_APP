import styled from 'styled-components/native';



export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #068789;
`;

export const Container = styled.View`
  flex: 1;
  width: 90%;
`;

export const ContainerImg = styled.View`
    height: -200px;
    width: auto;
    flex-direction: column;
    flex: 0.5;
    align-items: center;

   
`;

export const Image = styled.Image`
    height: 100px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 150px;
    margin-top: 20px;
   
`;

export const Title = styled.Text`

  color: #fff;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 6px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Input = styled.TextInput`
  border: 2px solid #12E6C8;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
  margin-left: 20px;
  
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #F9C202;
  border-radius: 9px;
  width: 90%;
  padding: 20px;
  align-items: center;
  margin-left: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
`