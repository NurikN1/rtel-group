import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { ReactComponent as TetraIcon } from '../assets/icons/tetra.svg';
import Advantage from '../components/Advantage';
import SectionCard from '../components/SectionCard';

const Tetra = () => {
  const { t } = useTranslation();

  return (
    <div className="tetra">
      <div className="tetra__hero flex flex-col items-center justify-center space-y-8 min-h-screen bg-center bg-no-repeat bg-cover">
        <Typography variant="h4" color="white" className="uppercase">
          {t('catalog.tetra-systems.title')}
        </Typography>
        <TetraIcon height="60" fill="white" />
      </div>
      <div className="about py-12 text-center">
        <Container maxWidth="md" className="mb-8">
          <Typography
            sx={{
              marginBottom: '16px',
            }}
            variant="h5"
            className="text-green-800">
            {t('catalog.tetra-systems.title')}
          </Typography>
          <Typography variant="body1">{t('catalog.tetra-systems.body1')}</Typography>
        </Container>
        <div className="flex items-center justify-center">
          <img
            src="https://www.hytera.ru/upload/resize_cache/webp/uf/61a/61a64f43b24ad58044787cfccc908168.webp"
            alt="Tetra Image"
          />
        </div>
      </div>
      <div className="advantages py-12">
        <Container>
          <Typography
            sx={{
              marginBottom: '16px',
              textAlign: 'center',
            }}
            variant="h5"
            className="text-green-800">
            {t('catalog.tetra-systems.features.title')}
          </Typography>
          <div className="flex space-x-8 mb-8">
            <Advantage title={t('catalog.tetra-systems.features.feature1.title')}>
              {t('catalog.tetra-systems.features.feature1.body')}
            </Advantage>
            <Advantage title={t('catalog.tetra-systems.features.feature2.title')}>
              {t('catalog.tetra-systems.features.feature2.body')}
            </Advantage>
          </div>
          <div className="flex space-x-8">
            <Advantage title={t('catalog.tetra-systems.features.feature3.title')}>
              {t('catalog.tetra-systems.features.feature3.body')}
            </Advantage>
            <Advantage title={t('catalog.tetra-systems.features.feature4.title')}>
              {t('catalog.tetra-systems.features.feature4.body')}
            </Advantage>
          </div>
        </Container>
      </div>
      <div className="section py-12 bg-gray-100">
        <Container>
          <Typography
            sx={{
              marginBottom: '32px',
            }}
            variant="h5"
            align="center"
            className="text-gray-600">
            {t('catalog.tetra-systems.sections.title')}
          </Typography>
          <div className="flex justify-between">
            <SectionCard
              linkTo="tetra-systems"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/iblock/80c/80c85bdea2ed2f58dade3d71c61acffd.webp"
              alt="Tetra Systems"
              title={t('catalog.tetra-systems.sections.section1')}
            />
            <SectionCard
              linkTo="bda-systems"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/iblock/dc8/dc8c79831d6c6fc8e3600215f3ded547.webp"
              alt="Systems"
              title={t('catalog.tetra-systems.sections.section2')}
            />
            <SectionCard
              linkTo="tetra-terminals"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/iblock/6b1/6b1a08e276dfc7aba6addb8aa175a661.webp"
              alt="TETRA терминалы"
              title={t('catalog.tetra-systems.sections.section3')}
            />
          </div>
        </Container>
      </div>
      <div className="information"></div>
    </div>
  );
};

export default Tetra;
