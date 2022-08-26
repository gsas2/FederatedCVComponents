import styled from 'styled-components';

interface SummaryWrapper {
  hasSkills: boolean
}

export const SummaryWrapper = styled.div<SummaryWrapper>`
  -webkit-box-shadow: 4px 5px 17px -1px rgba(128,128,128,1);
  -moz-box-shadow: 4px 5px 17px -1px rgba(128,128,128,1);
  box-shadow: 4px 5px 17px -1px rgba(128,128,128,1);
  background:#ffffff;
  padding: 20px;
  display: grid;
  grid-template-columns: ${({ hasSkills }) => hasSkills ? '60% 4% 36%': '100%'};
`;

export const VerticalSeparator = styled.div`
  border-right: 1px solid black;
`;

export const IntroContainer = styled.div`
  text-align: justify;
`;

export const SkillsWrapper = styled.div`
  margin: 0 0 0 20px;
`;

export const SkillsList = styled.ul`
  margin: 0 0 0 10px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 15px;
`;
