import './App.scss';
import { useTranslation } from 'react-i18next';
import { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { publicRoutes } from './routes/Routes';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Suspense fallback="...Loading">
        <BrowserRouter>
          <Routes>
            {/* <Route >
              {privateRoutes.map((route, index) => {
                const Page = route.component;
                let LayoutTag;

                if (route.layout) {
                  LayoutTag = Layout;
                } else {
                  LayoutTag = Fragment;
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <LayoutTag>
                        <Page />
                      </LayoutTag>
                    }
                  />
                );
              })}
            </Route> */}
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let LayoutTag;

              if (route.layout) {
                LayoutTag = Layout;
              } else {
                LayoutTag = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <LayoutTag>
                      <Page />
                    </LayoutTag>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
