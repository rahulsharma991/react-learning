import useNavigation from "../hooks/useNavigation";

interface LinkProps {
  to: string;
  children: any;
  className: string;
  activeClassName: string;
}

const Link = ({ to, children, className, activeClassName }: LinkProps) => {
  const { navigate, currentPath } = useNavigation();
  const handleClick = (event: any) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`text-blue-500 ${className} ${
        currentPath == to && activeClassName
      }`}
    >
      {children}
    </a>
  );
};
export default Link;
