import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-gray-800">
      <div className="flex justify-between container mx-auto">
        <div>
          <a href="https://flowbite.com" className="flex flex-col items-center text-white">
            <img src={logo} alt="Logo" width={124} />
          </a>
        </div>
        <div className="flex space-x-8">
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">Rtel Group</h5>
            <ul>
              <li className="mb-2">
                <Link className=" text-gray-400" to="/projects">
                  {t('footer.projects')}
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" text-gray-400" to="/solutions">
                  {t('footer.solutions')}
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" text-gray-400" to="/catalog">
                  {t('footer.catalog')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">{t('footer.address')}</h5>
            <ul className=" max-w-[240px]">
              <li className="mb-2 text-gray-400">{t('footer.addressLocation')}</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">{t('footer.contacts')}</h5>
            <ul>
              <li className="mb-2 text-gray-400">+7 (495) 669-68-90 </li>
              {/* <li className="mb-2 text-gray-400">+7 (495) 901-15-20</li>
              <li className="mb-2 text-gray-400">+7 (495) 901-15-20</li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
