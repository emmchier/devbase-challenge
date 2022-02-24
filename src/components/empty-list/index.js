import React from "react";

import Heading from "../common/heading";
import Text from "../common/text";

import { Content, EmptyContainer } from "./styles";

const EmptyList = ({ title = "", description = "" }) => {
  return (
    <EmptyContainer>
      <Content>
        <Heading variant="h5">{title}</Heading>
        {description !== "" && <Text>{description}</Text>}
      </Content>
    </EmptyContainer>
  );
};

export default EmptyList;
