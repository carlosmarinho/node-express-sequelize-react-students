import LastStudentsWithCurrentScore from "components/Students/LastStudentsWithCurrentScore";
import { RightColumnWrapper } from "./styles";

const RightColumn = () => {
  return (
    <RightColumnWrapper>
      <LastStudentsWithCurrentScore />
    </RightColumnWrapper>
  );
};

export default RightColumn;
