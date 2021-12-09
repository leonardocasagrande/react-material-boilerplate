import loadable from '@loadable/component';
import routes from 'config/routes';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRoute } from 'types';

const Switcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: IRoute) => {
          const Component = loadable(() => import(`pages/${route.component}`));
          return (
            <Route key={route.name} path={route.path} element={<Component />} />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
