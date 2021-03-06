import React from 'react';
import { compose } from 'ramda';
import { Article, Heading, Text, Block } from './components';
import clrs from './clrs';
import {
  withSpacing,
  withDefaults,
  withBaseStyles,
  withSize,
  withBorder,
} from '../src';

export const ProfileCard = withDefaults({
  pa: { all: 3, ns: 4 },
  ba: 'black-10',
  radius: 3,
  bg: 'white',
})(Article);

export const Media = compose(
  withSpacing,
  withSize,
  withBorder(clrs),
  withBaseStyles('dib'),
)('img');

export const CatProfileCard = props => (
  <ProfileCard {...props}>
    <Block className="tc">
      <Media
        src="http://tachyons.io/img/avatar_1.jpg"
        radius={100}
        h={3} w={3}
        alt="kitty staring at you"
      />
      <Heading f={4}>Mimi Whitehouse</Heading>
      <hr className="mw3 bb bw1 b--black-10" />
    </Block>
    <Text
      f={6} color="black-70" lh="copy"
      className="measure center"
    >
      Quite affectionate and outgoing.
      She loves to get chin scratches and will
      roll around on the floor waiting for you give her more of them.
    </Text>
  </ProfileCard>
);
