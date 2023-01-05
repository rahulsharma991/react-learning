import { createContext, useEffect, useState } from "react";

interface NavigationProps {
  children: any;
}
interface NavigationContextProps {
  currentPath: string;
  navigate: (to: string) => void;
}
const NavigationContext = createContext<NavigationContextProps>({
  currentPath: window.location.pathname,
  navigate() {},
});

const NavigationProvider = ({ children }: NavigationProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  });
  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
export { NavigationProvider };
export default NavigationContext;
