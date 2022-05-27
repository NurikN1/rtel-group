import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import logo from '../assets/images/logo.png';

const catalogMenu = [
  { link: '/catalog/tetra', name: 'catalog.tetra-systems.title' },
  {
    link: '/catalog/poc-solutions',
    name: 'catalog.poc-solutions.title',
  },
];
const solutionsMenu = [
  { link: '/solutions/smart-tower', name: 'Smart Tower' },
  {
    link: '/solutions/cybe-rr',
    name: 'Cybe-RR',
  },
  {
    link: '/solutions/hytalk',
    name: 'Hytalk',
  },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="py-4 bg-gray-800">
      <Container maxWidth="xl">
        <nav className="flex justify-between">
          <div>
            <Link
              to="/"
              className="flex flex-col items-center text-xl font-medium text-white"
              variant="h6">
              <img src={logo} alt="Logo" height={36} className="h-[36px]" />
              <Typography variant="caption">Оператор профессиональной радиосвязи</Typography>
            </Link>
          </div>
          <ul className="flex items-center space-x-8">
            {/* <MenuLink links={catalogLinks}>Каталог продукции</MenuLink> */}
            <NavbarLink
              linkTo="/catalog"
              name={t('navbar.links.Каталог продукции')}
              menu={catalogMenu}></NavbarLink>
            <NavbarLink linkTo="/projects" name={t('navbar.links.Проекты')}></NavbarLink>
            <NavbarLink
              linkTo="/solutions"
              name={t('navbar.links.Решения')}
              menu={solutionsMenu}></NavbarLink>
            <NavbarLink
              linkTo="/solutions/results"
              name={t('navbar.links.Итоги работ')}></NavbarLink>
            <NavbarLink linkTo="/feedback" name={t('navbar.links.Оформить запрос')}></NavbarLink>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
