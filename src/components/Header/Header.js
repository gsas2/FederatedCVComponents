import React from 'react';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import SectionTitle from '../SectionTitle';

import {
  Headline,
  FullName,
  FullTitle,
  DetailsWrapper,
  InfoTitle,
  ContactPhoto,
  ContactOptions,
  ContactOptionIcon
} from './Header.styles';

const Header = ({
  fullName,
  fullTitle,
  photo,
  personalInfo,
  contactInfo
}) => {
  return (
    <Headline>
      <div>
        <FullName>{fullName}</FullName>
        <FullTitle>{fullTitle}</FullTitle>
        {personalInfo?.length > 0 && (
          <DetailsWrapper>
            <SectionTitle iconName="address-card">Personal Information</SectionTitle>
            {personalInfo.map(({ key, label, value }) => (
              <div key={key}>
                <InfoTitle>{label}:</InfoTitle>{value}
              </div>
            ))}
          </DetailsWrapper>
        )}
      </div>

      <div>
        <ContactPhoto image={photo} />
        {contactInfo && (
          <ContactOptions>
            {contactInfo.email && (
              <><ContactOptionIcon icon={solid('envelope')} />{contactInfo.email}</>
            )}
            {contactInfo.linkedIn && (
              <><ContactOptionIcon icon={brands('linkedin')} />{contactInfo.linkedIn}</>
            )}
            {contactInfo.phone && (
              <><ContactOptionIcon icon={solid('phone-square')} />{contactInfo.phone}</>
            )}
          </ContactOptions>
        )}
      </div>
    </Headline>
  );
};

export default Header;
