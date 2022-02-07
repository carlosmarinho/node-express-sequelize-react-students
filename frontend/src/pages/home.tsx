import React from "react";
import { Link } from "react-router-dom";
import TwoColumnsLayout from "components/layouts/TwoColumnsLayout";
import LastStudentsWithScore from "components/Students/LastStudentsWithScore";

const HomePage = () => {
  return (
    <>
      <TwoColumnsLayout>
        <LastStudentsWithScore />
      </TwoColumnsLayout>
    </>
  );
};

export default HomePage;
