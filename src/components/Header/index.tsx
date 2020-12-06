import { Navbar, Brand, Link, LinkBelt } from './header.styles';

type HeaderComponent = React.FC & {
  Brand: React.FC;
  LinkBelt: React.FC;
  Link: React.FC;
};

export const Header: HeaderComponent = ({ children, ...restProps }) => (
  <Navbar {...restProps}>{children}</Navbar>
);

Header.Brand = ({ children, ...restProps }) => (
  <Brand {...restProps}>{children}</Brand>
);

Header.LinkBelt = ({ children, ...restProps }) => (
  <LinkBelt {...restProps}>{children}</LinkBelt>
);

Header.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);
