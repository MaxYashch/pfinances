import { Menu } from "antd";
import { StyledContainer, StyledMenu } from "./page-side-menu.styles";
import { menuOptions } from "./page-side-menu.helpers";
import { useNavigate } from "react-router-dom";

export const PageSideMenu = () => {
  const navigate = useNavigate();  

  return (
    <StyledContainer>
      <StyledMenu
        items={menuOptions}
        onClick={(item) => navigate(item.key)}
      >        
      </StyledMenu>
    </StyledContainer>
  );
};
