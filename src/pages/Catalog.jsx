import { Box, Container, Divider, Typography } from '@mui/material';
import CatalogItem from '../components/CatalogItem';
import { ReactComponent as TetraIcon } from '../assets/icons/tetra.svg';
import { ReactComponent as PocIcon } from '../assets/icons/poc.svg';
import { HeaderHeight } from '../variables/variables';

const Catalog = () => {
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
          КАТАЛОГ ПРОДУКЦИИ
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
            name="DMR системы и терминалы"
            linkTo="/catalog/tetra"
          />
          <CatalogItem
            icon={<PocIcon height="70" fill="black" />}
            name="PoC-решения для оперативной связи поверх сети сотового оператора"
            linkTo="/catalog/poc-solutions"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Catalog;
