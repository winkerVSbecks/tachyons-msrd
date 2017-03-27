import R from 'ramda';
import { PropTypes } from 'react';
import { classesFor } from './style-helper';
import { whiteSpaceScale, negativeMarginScale } from './scales';
import { cx, createWithStyleHoc } from './utils';
import { addMQSupport } from './media-queries';

const spacingProp = addMQSupport(PropTypes.oneOf(whiteSpaceScale));
const negativeMarginProp = addMQSupport(PropTypes.oneOf(negativeMarginScale));

const spacingPropTypes = {
  ma: spacingProp,
  mt: spacingProp,
  ml: spacingProp,
  mr: spacingProp,
  mb: spacingProp,
  mv: spacingProp,
  mh: spacingProp,
  na: negativeMarginProp,
  nt: negativeMarginProp,
  nl: negativeMarginProp,
  nr: negativeMarginProp,
  nb: negativeMarginProp,
  pa: spacingProp,
  pt: spacingProp,
  pl: spacingProp,
  pr: spacingProp,
  pb: spacingProp,
  pv: spacingProp,
  ph: spacingProp,
  className: PropTypes.any,
};

function spacingTransform({
  className,
  ma, mt, ml, mr, mb, mv, mh,
  pa, pt, pl, pr, pb, pv, ph,
  na, nt, nl, nr, nb,
  ...ownerProps
}) {
  const margins = classesFor({ ma, mt, ml, mr, mb, mv, mh });
  const negativeMargins = classesFor({ na, nt, nl, nr, nb });
  const paddings = classesFor({ pa, pt, pl, pr, pb, pv, ph });

  return R.merge(
    { className: cx([margins, negativeMargins, paddings, className]) },
    ownerProps,
  );
}

export const withSpacing = component => createWithStyleHoc({
  name: 'withSpacing',
  transformation: spacingTransform,
  propTypes: spacingPropTypes,
  component,
});
