import { Image, Space, Typography } from 'antd';
import headerLogo from '../../assets/header-logo.svg';
import { BellFilled, SearchOutlined } from '@ant-design/icons';
import Badge from 'antd/es/badge';
import { StyledContainer } from './header.styles';


export const Header = () => {
  return (
    <StyledContainer>
      <Image
        src={headerLogo}
      ></Image>
      <Typography.Title>FINANCES</Typography.Title>
      <Space>
          <SearchOutlined style={{fontSize: 24}}/>
        <Badge count={20}>
          <BellFilled style={{fontSize: 24}}/>
        </Badge>
      </Space>
    </StyledContainer>
  );
};