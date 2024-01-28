import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="hover:bg-teal-600 transition-colors duration-300 ease-in-out px-4 py-2"
    >
      {children}
    </a>
  );
};

export default NavLink;