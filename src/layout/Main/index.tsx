import React from 'react';
import classes from './Main.module.scss';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.mainLayoutWrapper}>
      <p>Main Layout</p>
      {children}
    </div>
  );
};

export default MainLayout;
