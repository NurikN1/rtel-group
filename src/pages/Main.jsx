import { useTranslation } from 'react-i18next';
import { HeaderHeight } from '../variables/variables';
import ktzLogo from '../assets/images/ktz.png';
import logo1520 from '../assets/images/1520.png';
import hpLogo from '../assets/images/hp.png';
import btSignalLogo from '../assets/images/bt-signal.png';
import hyteraLogo from '../assets/images/hytera.png';
import transtelesoftLogo from '../assets/images/transtelesoft.png';
import { Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const Main = () => {
  const { t } = useTranslation();
  return (
    <section
      className="py-8 bg-cover bg-center main-bg"
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <div className="container max-w-5xl mx-auto m-8">
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap mb-8">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-black font-bold leading-none text-center mb-3">
              {t('main.about.title')}
            </h3>
            <p className="text-gray-800 indent-8">{t('main.about.body1')}</p>
            <p className="text-gray-800 mb-8 indent-8">{t('main.about.body2')}</p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img
              src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
              alt="Company Img"
            />
          </div>
        </div>
        <Container maxWidth="xl" sx={{ marginBottom: '48px' }}>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="flex justify-center items-center w-full h-full bg-cover bg-no-repeat slider1">
                <div>
                  <Typography variant="h4" className="text-white" sx={{ marginBottom: '16px' }}>
                    Всегда на связи
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-full h-full bg-cover bg-no-repeat slider2">
                <div>
                  <Typography variant="h4" className="text-white" sx={{ marginBottom: '16px' }}>
                    Профессиональная оперативная связь будущего
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-full h-full bg-cover bg-no-repeat slider3">
                <div>
                  <Typography variant="h4" className="text-white" sx={{ marginBottom: '16px' }}>
                    RTEL - больше чем просто компания
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
        <div>
          <div className="align-middle">
            {/* <Typography align="center" variant="h5" sx={{ marginBottom: '16px' }}>
              Rtel Group участвует в модернизации и развитии цифровой связи в Казахстане
            </Typography> */}
            <h3 className="text-3xl text-black font-bold leading-none mb-8 text-center">
              Rtel Group участвует в модернизации и развитии цифровой связи в Казахстане с
              партнерами
            </h3>
          </div>
          <div>
            <ul className="flex flex-wrap gap-y-8">
              <li className="w-1/3">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={ktzLogo}
                    alt="logo"
                    className="max-h-32 cursor-pointer hover:scale-125 transition-all duration-300"
                  />
                </div>
                <Typography align="center" variant="subtitle1">
                  АО «НК «Қазақстан темiр жолы»
                </Typography>
              </li>
              <li className="w-1/3">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={logo1520}
                    alt="logo"
                    className="max-h-24 cursor-pointer hover:scale-125 transition-all duration-300"
                  />
                </div>
                <Typography align="center" variant="subtitle1">
                  Группа компаний 1520
                </Typography>
              </li>
              <li className="w-1/3">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={hpLogo}
                    alt="logo"
                    className="max-h-32 cursor-pointer hover:scale-125 transition-all duration-300"
                  />
                </div>
                <Typography align="center" variant="subtitle1">
                  HP
                </Typography>
              </li>
              <li className="w-1/3">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={btSignalLogo}
                    alt="logo"
                    className="max-h-32 cursor-pointer hover:scale-125 transition-all duration-300"
                  />
                </div>
                <Typography align="center" variant="subtitle1">
                  БТ-Сигнал
                </Typography>
              </li>
              <li className="w-1/3">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={hyteraLogo}
                    alt="logo"
                    className="max-h-24 cursor-pointer hover:scale-125 transition-all duration-300"
                  />
                </div>
                <Typography align="center" variant="subtitle1">
                  Hytera
                </Typography>
              </li>
              <li className="w-1/3">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={transtelesoftLogo}
                    alt="logo"
                    className="max-h-32 cursor-pointer hover:scale-125 transition-all duration-300"
                  />
                </div>
                <Typography align="center" variant="subtitle1">
                  Транстелесофт
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
