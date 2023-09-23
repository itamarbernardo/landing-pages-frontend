import P from 'prop-types';
import * as Styled from './styles';
import { GoTop } from '../../components/GoTop';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
