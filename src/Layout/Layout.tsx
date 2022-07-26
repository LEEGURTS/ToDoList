import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative flex flex-col top-[5em] px-[5em] py-[5em] w-[50em] gap-auto lg:mx-auto lg:max-w-screen-lg min-h-[45vw] rounded-lg bg-white">
      {children}
    </div>
  );
};

export default Layout;
