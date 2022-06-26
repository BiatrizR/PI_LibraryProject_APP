import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #068789;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 90%;
`

export const Title = styled.Text`

  color: #fff;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 6px;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Input = styled.TextInput`
  border: 2px solid #12E6C8;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #F9C202;
  border-radius: 9px;
  width: 90%;
  padding: 20px;
  align-items: center;
`

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`
