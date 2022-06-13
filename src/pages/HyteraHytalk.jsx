import { Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HeaderHeight } from '../variables/variables';

const HyteraHytalk = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '32px',
      }}>
      <div className="container mx-auto">
        <div className="py-16">
          <Typography variant="h4" align="center" color="#707070" sx={{ marginBottom: '48px' }}>
            {t('hyteraHytalk.title')}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#707070"
            sx={{ marginBottom: '48px', maxWidth: '730px', marginX: 'auto' }}>
            {t('hyteraHytalk.subtitle')}
          </Typography>
          <div className="flex justify-between">
            <div className="flex flex-col items-center max-w-[340px]">
              <img
                className="w-[45px] h-[45px] mb-2"
                src="https://www.hytera.ru/poc/Hytalk/img/icon1.png"
                alt="img"
              />
              <Typography variant="h6" sx={{ marginBottom: '8px' }} color="#727272">
                {t('hyteraHytalk.features.title1')}
              </Typography>
              <Typography variant="body2" align="center" color="#707070">
                {t('hyteraHytalk.features.subtitle1')}
              </Typography>
            </div>
            <div className="flex flex-col items-center max-w-[340px]">
              <img
                className="w-[45px] h-[45px] mb-2"
                src="https://www.hytera.ru/poc/Hytalk/img/icon2.png"
                alt="img"
              />
              <Typography variant="h6" sx={{ marginBottom: '8px' }} color="#727272">
                {t('hyteraHytalk.features.title2')}
              </Typography>
              <Typography variant="body2" align="center" color="#707070">
                {t('hyteraHytalk.features.subtitle2')}
              </Typography>
            </div>
            <div className="flex flex-col items-center max-w-[340px]">
              <img
                className="w-[45px] h-[45px] mb-2"
                src="https://www.hytera.ru/poc/Hytalk/img/icon3.png"
                alt="img"
              />
              <Typography variant="h6" sx={{ marginBottom: '8px' }} color="#727272">
                {t('hyteraHytalk.features.title3')}
              </Typography>
              <Typography variant="body2" align="center" color="#707070">
                {t('hyteraHytalk.features.subtitle3')}
              </Typography>
            </div>
          </div>
        </div>
        <div className="py-16">
          <Typography variant="h4" align="center" color="#707070" sx={{ marginBottom: '48px' }}>
            {t('hyteraHytalk.tariff')}
          </Typography>
          <div>
            <Typography variant="h6" color="#727272" sx={{ marginBottom: '16px' }}>
              {t('hyteraHytalk.terminals.title')}
            </Typography>
            <Divider />
            <div className="flex justify-between py-8">
              <div>
                <img
                  className="w-[144px] mb-2"
                  src="https://www.hytera.ru/poc/Hytalk/img/img3.png"
                  alt="img"
                />
              </div>
              <div className="w-[80%]">
                <ul>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        {t('hyteraHytalk.terminals.audioTitle')}
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        {t('hyteraHytalk.terminals.audioText')}
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        {t('hyteraHytalk.terminals.audioAndVideTitle')}
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        {t('hyteraHytalk.terminals.audioAndVideoText')}
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h6" color="#727272" sx={{ marginBottom: '16px' }}>
              {t('hyteraHytalk.dispatcher.title')}
            </Typography>
            <Divider />
            <div className="flex justify-between py-8">
              <div>
                <img
                  className="w-[144px] mb-2"
                  src="https://www.hytera.ru/poc/Hytalk/img/img5.png"
                  alt="img"
                />
              </div>
              <div className="w-[80%]">
                <ul>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        {t('hyteraHytalk.dispatcher.baseTitle')}
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        {t('hyteraHytalk.dispatcher.baseText')}
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        {t('hyteraHytalk.dispatcher.bestTitle')}
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        {t('hyteraHytalk.dispatcher.bestText')}
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        {t('hyteraHytalk.dispatcher.videoTitle')}
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        {t('hyteraHytalk.dispatcher.videText')}
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h6" color="#727272" sx={{ marginBottom: '16px' }}>
              {t('hyteraHytalk.administration.title')}
            </Typography>
            <Divider />
            <div className="flex justify-between py-8">
              <div>
                <img
                  className="w-[144px] mb-2"
                  src="https://www.hytera.ru/poc/Hytalk/img/img4.png"
                  alt="img"
                />
              </div>
              <div className="w-[80%]">
                <ul>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        {t('hyteraHytalk.administration.managementTitle')}
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        {t('hyteraHytalk.administration.managementText')}
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        {t('hyteraHytalk.administration.recordTitle')}
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        {t('hyteraHytalk.administration.recordText')}
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        {t('hyteraHytalk.administration.techSupportTitle')}
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        {t('hyteraHytalk.administration.techSupportText')}
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyteraHytalk;
