import React from 'react';
import classes from './Auth.module.scss';

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.authLayoutWrapper}>
      <p>Auth Layout</p>
      {children}
    </div>
  );
};

export default AuthLayout;
