import React from "react";
import PropTypes from "prop-types";

import Heading from "../../common/heading";
import ListDivider from "../../common/list-divider";
import Text from "../../common/text";
import { UserContent, ImageContainer, InfoContainer } from "./styles";

const UserDetail = ({ item }) => {
  const { avatar_url, name, location } = item;

  return (
    <>
      <UserContent>
        <ImageContainer>
          <img src={avatar_url} alt={name} />
        </ImageContainer>
        <InfoContainer>
          <Heading variant="h3">{name}</Heading>
          <Text weight="regular">
            {location !== null ? location : "Unknown location"}
          </Text>
        </InfoContainer>
      </UserContent>
      <ListDivider />
    </>
  );
};

UserDetail.propTypes = {
  item: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};

export default UserDetail;
