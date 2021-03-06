import React from 'react';
import R, { __ } from 'ramda';

export const isPresent = R.complement(R.isNil);
const hasPrototype = R.has('prototype');
const isReactComponent = R.compose(
  R.equals('Object'),
  R.type,
  c => c.prototype.isReactComponent,
);
const isClassComponent = R.allPass([isPresent, hasPrototype, isReactComponent]);
const isNotClassComponent = R.complement(isClassComponent);
const doesNotHave = R.complement(R.has);

const mapIfObj = fn => R.ifElse(R.is(Object),
  R.map(fn),
  fn,
);

export const normalizeClassNames = options => mapIfObj(
  R.when(R.contains(__, options),
    R.concat('-')));

/**
 * Compose classnames using deeply nested arrays of strings
 * or arrays of arrays of strings.
 */
export const cx = R.compose(R.join(' '), R.flatten);

/**
 * Eagerly excute a component if it is a
 * referentially transparent function component
 *
 * Based on the createEagerElementUtil in Andrew Clark's recompose library
 * github.com/acdlite/recompose/blob/master/src/packages/recompose/utils
 */
const isReferentiallyTransparentFunctionComponent = R.allPass([
  R.is(Function),
  isNotClassComponent,
  doesNotHave('defaultProps'),
  doesNotHave('contextTypes'),
]);

export const createEagerElement = R.cond([
  [isReferentiallyTransparentFunctionComponent, R.call],
  [R.T, (Component, props) => <Component {...props} />],
]);

// construct the display name for a HOC
export const displayName = (component, name) =>
  `${name}(${component.displayName || component.name || component})`;

/**
 * Create a withStyle HOC by
 * providing a transformation
 */
export function createWithStyleHoc({
  name,
  transformation,
  propTypes,
  component,
}) {
  function WithStyle(ownerProps) {
    const props = transformation(ownerProps);
    return createEagerElement(component, props);
  }

  WithStyle.displayName = displayName(component, name);
  WithStyle.propTypes = R.merge(component.propTypes, propTypes);

  return WithStyle;
}
