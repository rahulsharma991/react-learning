import useNavigation from "../hooks/useNavigation";
interface RouteProps {
  path: string;
  children: any;
}

const Route = ({ path, children }: RouteProps) => {
  const { currentPath } = useNavigation();

  if (currentPath === path) {
    return children;
  }

  return null;
};

export default Route;
