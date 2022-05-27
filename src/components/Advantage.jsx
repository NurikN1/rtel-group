import { Typography } from '@mui/material';

const Advantage = (props) => {
  return (
    <div className="flex space-x-4 items-start flex-1">
      <img src="https://www.hytera.ru/local/templates/new/img/svg/ico-prim.svg" />
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
