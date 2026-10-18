import {App} from '@wearables-ui-toolkit/mrbd';
import {
  ReactRouterNavigationProvider,
  ReactRouterPageTransition,
} from '@wearables-ui-toolkit/mrbd/react-router';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {DomainProvider} from './DomainContext';
import {CollectionPage} from './pages/CollectionPage';
import {DetailPage} from './pages/DetailPage';
import './app.css';

function Root() {
  return (
    <BrowserRouter>
      <ReactRouterNavigationProvider>
        <App>
          <DomainProvider>
            <ReactRouterPageTransition>
              {({location}) => (
                <Routes location={location}>
                  <Route path="/" element={<CollectionPage />} />
                  <Route path="/item/:id" element={<DetailPage />} />
                </Routes>
              )}
            </ReactRouterPageTransition>
          </DomainProvider>
        </App>
      </ReactRouterNavigationProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
