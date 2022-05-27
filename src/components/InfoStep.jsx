import { Button, Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const InfoStep = (props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: props.data,
  });
  const onSubmit = (data) => props.updateData(data);

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-4 mb-4">
            <TextField {...register('name_ru')} fullWidth label="Название" />
            <TextField {...register('name_kz')} fullWidth label="Название на казахском" />
          </div>
          <div className="mb-4">
            <TextField {...register('img')} fullWidth label="Img link" />
          </div>
          <div className="mb-4">
            <TextField {...register('featureImg')} fullWidth label="Feature img link" />
          </div>
          <div className="flex justify-end">
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                backgroundColor: '#1f2937',
                '&:hover': {
                  backgroundColor: '#1f2937',
                  opacity: 0.9,
                },
              }}>
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default InfoStep;
