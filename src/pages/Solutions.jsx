import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeaderHeight } from '../variables/variables';
import { Button, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

const Solutions = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '32px',
      }}>
      <Box
        sx={{
          paddingY: '32px',
        }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          {t('solutions.title')}
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div
              className="flex justify-center items-center w-full h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://www.hytera.ru/upload/resize_cache/webp/iblock/76d/76db6bbf5dfba0d15776dbaa0e8ce5a1.webp")',
              }}>
              <div>
                <Typography variant="h4" className="text-white" sx={{ marginBottom: '16px' }}>
                  Smart tower
                </Typography>
                <Link to="/solutions/smart-tower">
                  <Button
                    variant="contained"
                    size="large"
                    className="bg-gray-800"
                    sx={{
                      borderRadius: '8px',
                      marginTop: 'auto',
                      backgroundColor: '#1f2937',
                      '&:hover': {
                        backgroundColor: '#1f2937',
                        opacity: 0.9,
                      },
                    }}>
                    {t('solutions.moreInfo')}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex justify-center items-center w-full h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://www.hytera.ru/upload/resize_cache/webp/iblock/76d/76db6bbf5dfba0d15776dbaa0e8ce5a1.webp")',
              }}>
              <div>
                <Typography variant="h4" className="text-white" sx={{ marginBottom: '16px' }}>
                  Cybe-RR
                </Typography>
                <Link to="/solutions/cybe-rr">
                  <Button
                    variant="contained"
                    size="large"
                    className="bg-gray-800"
                    sx={{
                      borderRadius: '8px',
                      marginTop: 'auto',
                      backgroundColor: '#1f2937',
                      '&:hover': {
                        backgroundColor: '#1f2937',
                        opacity: 0.9,
                      },
                    }}>
                    {t('solutions.moreInfo')}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex justify-center items-center w-full h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://www.hytera.ru/upload/resize_cache/webp/iblock/76d/76db6bbf5dfba0d15776dbaa0e8ce5a1.webp")',
              }}>
              <div>
                <Typography variant="h4" className="text-white" sx={{ marginBottom: '16px' }}>
                  Hytalk
                </Typography>
                <Link to="/solutions/hytalk">
                  <Button
                    variant="contained"
                    size="large"
                    className="bg-gray-800"
                    sx={{
                      borderRadius: '8px',
                      marginTop: 'auto',
                      backgroundColor: '#1f2937',
                      '&:hover': {
                        backgroundColor: '#1f2937',
                        opacity: 0.9,
                      },
                    }}>
                    {t('solutions.moreInfo')}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Solutions;
