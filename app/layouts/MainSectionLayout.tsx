import { FC } from "react";

interface MainSectionLayoutProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const MainSectionLayout: FC<MainSectionLayoutProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <div className={className} id={id}>
      <div className="pl-40 pr-40 pt-10 sm:pl-5 sm:pr-5">{children}</div>
    </div>
  );
};
