import { matchRoutes, useLocation } from 'react-router-dom';
import RoutesList from 'src/routes';

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(RoutesList, location);

  return route.path;
};

export default useCurrentPath;
