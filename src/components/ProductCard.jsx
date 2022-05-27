import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <div
      className="px-4 pb-4"
      style={{
        maxWidth: '25%',
        flex: '0 0 25%',
      }}>
      <Link
        to={props.linkTo}
        className="flex flex-col justify-center items-center py-8 px-4 h-full bg-white rounded-lg">
        <Box
          sx={{
            padding: '16px',
          }}>
          <img
            style={{
              height: '220px',
            }}
            src={props.img}
            alt={props.title}
          />
        </Box>
        <Typography
          variant="h5"
          align="center"
          sx={{
            justifySelf: 'center',
            '&:hover': {
              color: 'success.main',
            },
          }}>
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            justifySelf: 'center',
          }}>
          {props.subtitle}
        </Typography>
      </Link>
    </div>
  );
};

export default ProductCard;
