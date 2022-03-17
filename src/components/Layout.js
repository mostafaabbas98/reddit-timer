import Header from './Header';
import Footer from './Footer';

import { StyledLayout } from '../styles/Layout.style';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
