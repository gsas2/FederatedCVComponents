import React from 'react';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
}: {
  fullName: string,
  fullTitle: string,
  photo?: string,
  personalInfo?: {
    key: string,
    label: string,
    value: string
  }[],
  contactInfo?: {
    email?: string,
    linkedIn?: string,
    phone?: string
  }
} ) => {
  return (
    <Headline>
      <div>
        <FullName>{fullName}</FullName>
        <FullTitle>{fullTitle}</FullTitle>
        {(personalInfo?.length ?? 0) > 0 && (
          <DetailsWrapper>
            <SectionTitle iconName="address-card">Personal Information</SectionTitle>
            {personalInfo?.map(({ key, label, value }) => (
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
              <><ContactOptionIcon icon={faEnvelope} />{contactInfo.email}</>
            )}
            {contactInfo.linkedIn && (
              <><ContactOptionIcon icon={faLinkedin} />{contactInfo.linkedIn}</>
            )}
            {contactInfo.phone && (
              <><ContactOptionIcon icon={faPhoneSquare} />{contactInfo.phone}</>
            )}
          </ContactOptions>
        )}
      </div>
    </Headline>
  );
};

export default Header;
