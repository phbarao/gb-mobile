import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 80px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 5px;
`;

export const UserAvatar = styled.Image`
  width: 156px;
  height: 156px;
  border-radius: 98px;
  align-self: center;
`;
