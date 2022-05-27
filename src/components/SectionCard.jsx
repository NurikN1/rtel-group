import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SectionCard = (props) => {
  return (
    <Link
      to={props.linkTo}
      className="flex flex-col items-center px-4 pt-3 pb-12 bg-white rounded-lg"
      style={{ width: '350px' }}>
      <Box sx={{ marginBottom: '16px' }}>
        <img src={props.imgLink} alt={props.alt} style={{ height: '220px' }} />
      </Box>
      <Typography
        variant="h5"
        align="center"
        sx={{
          '&:hover': {
            color: 'success.main',
          },
        }}>
        {props.title}
      </Typography>
    </Link>
  );
};

export default SectionCard;
