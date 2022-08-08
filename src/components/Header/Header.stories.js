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

Default.args = {
  fullName: 'Mr. Firstname Lastname',
  fullTitle: 'CEO / CTO / Founder / Manager / The most amazing employee',
  personalInfo: [
    {
      key: 'age',
      label: 'Age',
      value: '3 years'
    },
    {
      key: 'nationality',
      label: 'Nationality',
      value: 'Argentinian'
    },
  ],
  contactInfo: {
    email: 'myemail@...',
    linkedIn: 'linkedin.com/.../',
    phone: '<my phone>'
  }
};

