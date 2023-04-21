import { Menu } from 'antd';
import styled from 'styled-components';

export const StyledContainer = styled.div(() => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex',
  alignItems: 'flex-start',
}));

export const StyledMenu = styled(Menu)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-between',

  '& .ant-menu-item': {
    marginBottom: 30,
  },

  '& .ant-menu-item:last-of-type': {
    marginBottom: 0 ,
  },
}));
