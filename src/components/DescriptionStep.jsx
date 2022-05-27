import { Button, Container, Divider, TextareaAutosize, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const DescriptionStep = (props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: props.data,
  });
  const onSubmit = (data) => props.updateData(data);

  return (
    <div>
      <Container maxWidth="md">
        <div className="pb-4">
          <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
            Описание
          </Typography>
          <Divider />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-4 mb-4">
            <TextField {...register('name_ru')} fullWidth label="Название на русском" />
            <TextField {...register('name_kz')} fullWidth label="Название на казахском" />
          </div>
          <div className="flex space-x-4 mb-4">
            <TextareaAutosize
              {...register('descripton_ru')}
              className="p-2 w-full border border-gray-300 rounded-lg"
              aria-label="minimum height"
              minRows={1}
              placeholder="Описание ru"
              style={{ width: '100%' }}
            />
            <TextareaAutosize
              {...register('descripton_kz')}
              className="p-2 w-full border border-gray-300 rounded-lg"
              aria-label="minimum height"
              minRows={1}
              placeholder="Описание kz"
              style={{ width: '100%' }}
            />
            <Button
              variant="contained"
              sx={{
                height: '36px',
              }}>
              Add
            </Button>
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

export default DescriptionStep;
