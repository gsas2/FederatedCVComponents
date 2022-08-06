import React from 'react';
import styled from 'styled-components';

import SectionIcon from './SectionIcon';

const StyledTitle = styled.h2`
  margin-bottom: 9px;
`;

const SectionTitle = ({ iconName, children }) => {
  return (
    <StyledTitle><SectionIcon iconName={iconName} />{children}</StyledTitle>
  );
};

export default SectionTitle;
