import { useEffect, useRef } from 'react';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { HeaderHeight } from '../variables/variables';
import DG from '2gis-maps';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const mapContainer = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const map = DG.map(mapContainer.current, {
      center: [43.212348, 76.898539],
      zoom: 13,
    });
    DG.marker([43.212348, 76.898539])
      .addTo(map)
      .bindPopup('Гагарина 236, этаж 3, кабинет №333 Rtl Group ');
  }, []);

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '48px',
      }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            paddingY: '48px',
          }}>
          <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
            {t('contacts.contacts')}
          </Typography>
          <Divider variant="middle" />
        </Box>
        <div className="flex justify-between p-4 bg-gray-100">
          <div className="flex-1 p-2">
            <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
              {t('contacts.officeAddress')}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              {t('contacts.address')}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              {t('contacts.phone')}: +7 (495) 669-68-90
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              {t('contacts.email')}: будет@gmail.kz
            </Typography>
            <Button variant="contained">{t('contacts.contactUs')}</Button>
            {/* <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
              АДРЕС ШТАБКВАРТИРЫ
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              Hytera Tower, Shenzhen Hi-Tech Industrial Park North, Beihuan RD.9108#, Nanshan
              District, Shenzhen, P.R.C.
            </Typography> */}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div ref={mapContainer} className="w-[500px] h-[300px] bg-green-600"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
