import React from 'react';

import {
  Table,
  Thead,
  ThOne,
  ThTwo,
  Tbody,
  TrBackground,
  InfoCity,
  Info,
  InfoTerminal,
  InfoStatus,
} from './styles/status';

export default function Status({ children, ...restProps }) {
  return (
    <section className="grid-container" {...restProps}>
      {children}
    </section>
  );
}

Status.Table = function StatusTable({ children, ...restProps }) {
  return <Table {...restProps}>{children}</Table>;
};

Status.Thead = function StatusThead({ children, ...restProps }) {
  return <Thead {...restProps}>{children}</Thead>;
};

Status.ThOne = function StatusThOne({ children, ...restProps }) {
  return <ThOne {...restProps}>{children}</ThOne>;
};

Status.ThTwo = function StatusThTwo({ children, ...restProps }) {
  return <ThTwo {...restProps}>{children}</ThTwo>;
};

Status.Tbody = function StatusTbody({ children, ...restProps }) {
  return <Tbody {...restProps}>{children}</Tbody>;
};

Status.TrBackground = function StatusTrBackground({ children, ...restProps }) {
  return <TrBackground {...restProps}>{children}</TrBackground>;
};

Status.InfoCity = function StatusInfoCity({ children, ...restProps }) {
  return <InfoCity {...restProps}>{children}</InfoCity>;
};

Status.Info = function StatusInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Status.InfoTerminal = function StatusInfoTerminal({ children, ...restProps }) {
  return <InfoTerminal {...restProps}>{children}</InfoTerminal>;
};

Status.InfoStatus = function StatusInfoStatus({ children, ...restProps }) {
  return <InfoStatus {...restProps}>{children}</InfoStatus>;
};
