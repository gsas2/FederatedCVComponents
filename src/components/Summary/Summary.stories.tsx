import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Summary from './Summary';

export default {
  title: 'components/Summary',
  component: Summary,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} as ComponentMeta<typeof Summary>;

export const Default: ComponentStory<typeof Summary> = (args) => <Summary {...args} />;

Default.args = {
  intro: {
    __html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Enim eu turpis egestas pretium aenean pharetra.
     Id leo in vitae turpis massa sed elementum tempus egestas. Tincidunt lobortis feugiat vivamus at augue eget arcu
     dictum varius. Parturient montes nascetur ridiculus mus mauris vitae. Gravida quis blandit turpis cursus.</p>

    <p>Id nibh tortor id aliquet lectus proin. Ac turpis egestas integer eget aliquet nibh praesent tristique magna.
    In arcu cursus euismod quis. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Quam nulla porttitor
    massa id neque aliquam. Nullam non nisi est sit amet facilisis. Id ornare arcu odio ut sem nulla pharetra diam.
    Mauris cursus mattis molestie a iaculis at. Metus vulputate eu scelerisque felis imperdiet proin. Penatibus et
    magnis dis parturient montes. Amet commodo nulla facilisi nullam vehicula ipsum.</p>

    <p>Aenean et tortor at risus. A lacus vestibulum sed arcu non odio euismod. Proin nibh nisl condimentum id
    venenatis a condimentum. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Magnis dis
    parturient montes nascetur ridiculus mus mauris. Fermentum odio eu feugiat pretium nibh ipsum consequat.</p>`
  },
  skills: [
    'React',
    'Javascript',
    'Styled Components',
    'Webpack',
    'Module Federation',
    'Git',
    'HTML',
    'CSS',
  ]
};

