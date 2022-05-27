import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { ReactComponent as PocIcon } from '../assets/icons/poc.svg';
import Advantage from '../components/Advantage';
import SectionCard from '../components/SectionCard';

const PocSolutions = () => {
  const { t } = useTranslation();

  return (
    <div className="poc">
      <div className="poc__hero flex flex-col items-center justify-center space-y-8 min-h-screen bg-center bg-no-repeat bg-cover">
        <Container maxWidth="sm">
          <Typography variant="h4" color="white" align="center" className="uppercase">
            {t('catalog.poc-solutions.title')}
          </Typography>
        </Container>
        <PocIcon height="60" fill="white" />
      </div>
      <div className="about py-12 text-center">
        <Container maxWidth="md" className="mb-8">
          <Typography
            sx={{
              marginBottom: '16px',
            }}
            variant="h5"
            className="text-green-800">
            {t('catalog.poc-solutions.title')}
          </Typography>
          <Typography variant="body1">{t('catalog.poc-solutions.body1')}</Typography>
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
            {t('catalog.poc-solutions.features.title')}
          </Typography>
          <div className="flex space-x-8 mb-8">
            <Advantage title={t('catalog.poc-solutions.features.feature1.title')}>
              {t('catalog.poc-solutions.features.feature1.body')}
            </Advantage>
            <Advantage title={t('catalog.poc-solutions.features.feature2.title')}>
              {t('catalog.poc-solutions.features.feature2.body')}
            </Advantage>
          </div>
          <div className="flex space-x-8">
            <Advantage title={t('catalog.poc-solutions.features.feature3.title')}>
              {t('catalog.poc-solutions.features.feature3.body')}
            </Advantage>
            <Advantage title={t('catalog.poc-solutions.features.feature4.title')}>
              {t('catalog.poc-solutions.features.feature4.body')}
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
            {t('catalog.poc-solutions.sections.title')}
          </Typography>
          <div className="flex justify-between">
            <SectionCard
              linkTo="poc-systems"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/upload/iblock/f69/f696f6088e6741eac57666ab3741398a.webp"
              alt="Tetra Systems"
              title={t('catalog.poc-solutions.sections.section1')}
            />
            <SectionCard
              linkTo="poc-terminals"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/upload/iblock/5be/5be3867e350f7ed362bd0c3b554d3b1b.webp"
              alt="Systems"
              title={t('catalog.poc-solutions.sections.section2')}
            />
            <SectionCard
              linkTo="/hytera-hytalk"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/poc/Hytalk/img/wx.webp"
              alt="TETRA терминалы"
              title={t('catalog.poc-solutions.sections.section3')}
            />
          </div>
        </Container>
      </div>
      <div className="information"></div>
    </div>
  );
};

export default PocSolutions;
