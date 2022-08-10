import React from 'react';

import Header from './Header';

export default {
  title: 'components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

const calculateAge = (isodate) => {
  const ageDifMs = Date.now() - new Date(isodate);
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Default.args = {
  fullName: 'He-Man',
  fullTitle: 'Master of the Universe',
  photo: 'https://i.pinimg.com/236x/50/20/1d/50201d7079759f17eecf967491900c93--masters-los.jpg',
  personalInfo: [
    {
      key: 'birth',
      label: 'Date of Birth',
      value: 'September 30th, 1983'
    },
    {
      key: 'age',
      label: 'Age',
      value: calculateAge('1983-09-30T00:00:00Z')
    },
    {
      key: 'location',
      label: 'Location',
      value: 'Eternia'
    },
  ],
  contactInfo: {
    email: 'myemail@...',
    linkedIn: 'linkedin.com/.../',
    phone: '<my phone>'
  }
};

