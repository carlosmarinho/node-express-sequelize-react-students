import { Container, Content } from "./styles";
import { LeftColumn, RightColumn, Header } from "../common/";

const TwoColumnsLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <Container>
        <LeftColumn />
        <Content>{children}</Content>
        <RightColumn></RightColumn>
      </Container>
    </>
  );
};

export default TwoColumnsLayout;
