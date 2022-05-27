import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CatalogItem = (props) => {
  return (
    <Link
      to={props.linkTo}
      className="flex flex-col items-center py-8 px-4 bg-gray-100 rounded-lg w-96"
      style={{
        height: '462px',
      }}>
      <Box sx={{ marginBottom: '48px', height: '70px' }}>{props.icon}</Box>
      <Typography
        variant="h5"
        align="center"
        sx={{
          justifySelf: 'center',
          '&:hover': {
            color: 'success.main',
          },
        }}>
        {props.name}
      </Typography>
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
        Подробнее
      </Button>
    </Link>
  );
};

export default CatalogItem;
