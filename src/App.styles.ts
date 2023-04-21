import { Space } from 'antd';
import styled from 'styled-components';

export const StyledContainer = styled.div(() => ({
  display: 'flex',
  'flex-direction': 'column',
  height: '100vh',
  width: '100vw',
}));

export const StyledSpase = styled(Space)(() => ({
  display: 'flex',
  flex: 1,
  paddingLeft: 12,
  justifyContent: 'flex',
}));
  
  
  
  
