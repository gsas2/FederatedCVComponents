import React from 'react';
import styled from 'styled-components';

import SectionIcon from './SectionIcon';

const StyledTitle = styled.h2`
  margin-bottom: 9px;
`;

export interface Props {
  iconName: string,
  children: React.ReactNode
}

const SectionTitle = ({ iconName, children }: Props) => {
  return (
    <StyledTitle><SectionIcon iconName={iconName} />{children}</StyledTitle>
  );
};

export default SectionTitle;
