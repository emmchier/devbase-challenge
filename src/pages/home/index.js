import React from "react";

import Heading from "../../components/common/heading";
import Section from "../../components/common/section";
import Text from "../../components/common/text";
import UserListContainer from "../../components/user-list-container";
import { HomeContent } from "../../styles/pages/styles";

const HomePage = () => {
  return (
    <Section>
      <HomeContent>
        <Heading variant="h1" weight="bold">
          Top 5 GitHub Users
        </Heading>
        <Text>Tap the username to see more information</Text>
        <UserListContainer />
      </HomeContent>
    </Section>
  );
};

export default HomePage;
