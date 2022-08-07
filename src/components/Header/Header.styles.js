import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

import genericImage from './genericProfileImage.png';

export const Headline = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 0;
`;

export const FullName = styled.h1`
  font-size: 35px;
  line-height: 35px;
  margin-top: 27px;
`;

export const FullTitle = styled.h2`
  font-size: 22px;
  color: #adabab;
  line-height: 25px;
`;

export const DetailsWrapper = styled.div`
  margin-top: 20px;
`;

export const InfoTitle = styled.span`
  font-weight: 600;
  margin-right: 7px;
  line-height: 22px;
  margin-left: 29px;

  &:before {
    content:"• ";
  }
`;

export const ContactPhoto = styled.div`
  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: ${({ image }) => `url(${image ?? genericImage})`};
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  -webkit-print-color-adjust: exact;
`;

export const ContactOptions = styled.div`
  width: 175px;
  margin: 20px auto 30px;
  display: grid;
  grid-template-columns: 30px 145px;
  font-size: 11px;
  line-height: 20px;
`;

export const ContactOptionIcon = styled(FontAwesomeIcon)`
    margin: auto;
    font-size: 17px;
    text-align: center;
    line-height: 20px;
    color: #0d8ad4;
`;
