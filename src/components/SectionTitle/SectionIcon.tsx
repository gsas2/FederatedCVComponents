import React from 'react';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCode, faSearch, faCircle } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #adabab;
`;

interface IconsObject {
  [key: string]: IconDefinition
}

// List here supported icons
const ICONS: IconsObject = {
  'address-card': faAddressCard,
  code: faCode,
  search: faSearch,
  default: faCircle
}

interface Props {
  iconName: string
}

const SectionIcon = ({ iconName }: Props) => <StyledIcon icon={(ICONS[iconName] ?? ICONS.default)} />;

export default SectionIcon;
