import { Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HeaderHeight } from '../variables/variables';

const LegalInfo = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <div className="container mx-auto py-12">
        <div className="mb-6">
          <Typography variant="h4" align="center">
            {t('legalInfo.title')}
          </Typography>
          <Divider />
        </div>
        <div className="mb-6">
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            ТОО «RTel Group»
          </Typography>
          <ul>
            <li>{t('legalInfo.address')}</li>
            <li>{t('legalInfo.bin')}</li>
            <li>{t('legalInfo.connection')}</li>
          </ul>
        </div>
        <div className="mb-6">
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            {t('legalInfo.filial')}
          </Typography>
          <ul>
            <li>{t('legalInfo.nds')}</li>
            <li>{t('legalInfo.director')}</li>
            <li className=" font-bold">{t('legalInfo.email')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;
