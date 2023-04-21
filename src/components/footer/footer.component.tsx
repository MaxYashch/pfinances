import { Typography } from "antd";
import { StyledContainer } from "./footer.styles";

export const Footer = () => {
  return (
    <StyledContainer>
      <Typography.Link href="+375-29-1234567">+375-29-1234567</Typography.Link>
      <Typography.Link href="https://www.google.com/" target={"_blank"}>Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com/" target={"_blank"}>Terms of Use</Typography.Link>
    </StyledContainer>
  );
};
