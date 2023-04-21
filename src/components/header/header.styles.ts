import styled from 'styled-components';

export const StyledContainer = styled.div(() => ({
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 20px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
    border: '1px dashed red',

    '& .ant-typography': {
      marginTop: 10,
    },
      
    '& .ant-space-item span svg': {
      fill: 'black'
    }
}));
