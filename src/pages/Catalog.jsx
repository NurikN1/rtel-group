import { Box, Container, Divider, Typography } from '@mui/material';
import CatalogItem from '../components/CatalogItem';
import { ReactComponent as TetraIcon } from '../assets/icons/tetra.svg';
import { ReactComponent as PocIcon } from '../assets/icons/poc.svg';
import { HeaderHeight } from '../variables/variables';
import { useTranslation } from 'react-i18next';

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <Box
        sx={{
          paddingY: '48px',
        }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          {t('catalog.title')}
        </Typography>
        <Divider
          variant="inset"
          textAlign="center"
          sx={{
            marginBottom: '48px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
          }}>
          <CatalogItem
            icon={<TetraIcon height="70" />}
            name={t('catalog.tetra-systems.title')}
            linkTo="/catalog/tetra"
          />
          <CatalogItem
            icon={<PocIcon height="70" fill="black" />}
            name={t('catalog.poc-solutions.title')}
            linkTo="/catalog/poc-solutions"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Catalog;
