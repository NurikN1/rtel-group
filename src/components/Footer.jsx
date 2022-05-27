import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800">
      <div className="flex justify-between container mx-auto">
        <div>
          <a href="https://flowbite.com" className="flex flex-col items-center text-white">
            <img src={logo} alt="Logo" height={36} className="h-[36px]" />
          </a>
        </div>
        <div className="flex space-x-8">
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">Rtel Group</h5>
            <ul>
              <li className="mb-2">
                <Link className=" text-gray-400" to="/projects">
                  Проекты
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" text-gray-400" to="/solutions">
                  Решения
                </Link>
              </li>
              <li className="mb-2">
                <Link className=" text-gray-400" to="/catalog">
                  Каталог продукции
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">Адрес</h5>
            <ul className=" max-w-[240px]">
              <li className="mb-2 text-gray-400">
                115054, Казахстан, г. Алматы, Бостандыкский р., Гагарина 236, этаж 3, кабинет №333
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">Контакты</h5>
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
