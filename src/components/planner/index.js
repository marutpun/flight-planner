import React, { useState } from 'react';

import { Heading, HeadingSub, Label, Button } from './styles/planner';

export default function Planner({ children, ...restProps }) {
  return (
    <section className="grid-container" {...restProps}>
      {children}
    </section>
  );
}

Planner.Heading = function PlannerHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
Planner.HeadingSub = function PlannerHeadingSub({ children, ...restProps }) {
  return <HeadingSub {...restProps}>{children}</HeadingSub>;
};

Planner.Label = function PlannerLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Planner.Button = function PlannerButton({ type, children, ...restProps }) {
  return (
    <Button type={type} {...restProps}>
      {children}
    </Button>
  );
};
