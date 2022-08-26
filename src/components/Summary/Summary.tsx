import React from 'react';

import SectionTitle from '../SectionTitle';

import {
  SummaryWrapper,
  VerticalSeparator,
  IntroContainer,
  SkillsWrapper,
  SkillsList
} from './Summary.styles';

interface Props {
  intro: { __html: string },
  skills?: string[]
};

const Summary = ({ intro, skills }: Props) => {
  const hasSkills = (skills?.length ?? 0) > 0;

  return (
    <SummaryWrapper hasSkills={hasSkills}>
      <div>
        <SectionTitle iconName="search">Intro</SectionTitle>
        <IntroContainer dangerouslySetInnerHTML={intro} />
      </div>
      {hasSkills && (
        <>
          <VerticalSeparator />
          <SkillsWrapper>
            <SectionTitle iconName="code">Technical Skills</SectionTitle>
            <SkillsList>{skills?.map((value) => <li key={value}>{value}</li>)}</SkillsList>
          </SkillsWrapper>
        </>
      )}
    </SummaryWrapper>
  );
};

export default Summary;
