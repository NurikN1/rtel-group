import { Typography } from '@mui/material';
import raciaIcon from '../assets/images/racia.png';

const Advantage = (props) => {
  return (
    <div className="flex space-x-4 items-start flex-1">
      <img src={raciaIcon} className="h-[40px]" />
      <div>
        <Typography
          sx={{
            marginBottom: '8px',
          }}
          variant="body1">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.children}</Typography>
      </div>
    </div>
  );
};

export default Advantage;
