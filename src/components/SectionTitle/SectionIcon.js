import React from 'react';
import styled from 'styled-components';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #adabab;
`;

// List here supported icons
const ICONS = {
  'address-card': solid('address-card'),
  'code': solid('code'),
  'search': solid('search'),
  default: solid('circle')
}

const SectionIcon = ({ iconName }) => <StyledIcon icon={ICONS[iconName] ?? ICONS.default} />;

export default SectionIcon;
