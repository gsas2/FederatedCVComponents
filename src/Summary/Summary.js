import React from 'react';

import SectionTitle from '../SectionTitle';

import {
  SummaryWrapper,
  VerticalSeparator,
  IntroContainer,
  SkillsWrapper,
  SkillsList
} from './Summary.styles';

const Summary = ({ intro, skills }) => {
  return (
    <SummaryWrapper>
      <div>
        <SectionTitle iconName="search">Intro</SectionTitle>
        <IntroContainer dangerouslySetInnerHTML={intro} />
      </div>
      <VerticalSeparator />
      <SkillsWrapper>
        <SectionTitle iconName="code">Technical Skills</SectionTitle>
        <SkillsList>{skills.map((value) => <li key={value}>{value}</li>)}</SkillsList>
      </SkillsWrapper>
    </SummaryWrapper>
  );
};

export default Summary;
