import { useTranslation } from 'react-i18next';
import { Container } from '@mui/material';
import NavbarLink from './NavbarLink';
import LanguageMenu from './LanguageMenu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/isAuthorizedSlice';

const TopBar = () => {
  const { t } = useTranslation();

  const isAuthorized = useSelector((state) => state.isAuthorized.value);
  const dispatch = useDispatch();

  return (
    <div className="py-2 bg-gray-900">
      <Container
        maxWidth="xl"
        sx={{
          fontFamily: 'Roboto, sans-serif',
        }}>
        <div className="flex justify-between">
          <ul>
            {isAuthorized ? (
              <button to="/" className="text-white" onClick={() => dispatch(logout())}>
                Выйти
              </button>
            ) : (
              <Link to="/login" className="text-white">
                Войти
              </Link>
            )}
          </ul>
          <ul className="flex justify-end space-x-4">
            <NavbarLink linkTo="/legal-info" name={t('navbar.Юринфо')}></NavbarLink>
            <NavbarLink linkTo="/support" name={t('navbar.ТехПоддержка')}></NavbarLink>
            <NavbarLink linkTo="/contacts" name={t('navbar.Контакты')}></NavbarLink>
            <li className="w-20">
              <LanguageMenu />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
