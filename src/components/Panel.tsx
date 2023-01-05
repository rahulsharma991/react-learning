import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PanelProps {
  children?: any;
  className?: string;
  onClick?: () => void;
}

const Panel = ({ children, className, ...rest }: PanelProps) => {
  const classes = `border rounded p-3 shadow bg-white w-full ${className}`;

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default Panel;
