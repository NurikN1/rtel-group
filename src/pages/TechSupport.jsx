import {
  Box,
  Button,
  Container,
  Divider,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { HeaderHeight } from '../variables/variables';

const TechSupport = () => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '32px',
      }}>
      <Box
        sx={{
          paddingY: '32px',
        }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          {t('techSupport.title')}
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <Container maxWidth="sm">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <TextField {...register('fio')} fullWidth label={t('techSupport.fio')} id="fio" />
          </div>
          <div className="mb-4">
            <TextField
              {...register('email')}
              fullWidth
              label={t('techSupport.email')}
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <TextField
              {...register('company')}
              fullWidth
              label={t('techSupport.company')}
              id="company"
            />
          </div>
          <div className="mb-4">
            <TextField {...register('name')} fullWidth label={t('techSupport.name')} id="name" />
          </div>
          <div className="mb-4">
            <Typography>{t('techSupport.description')}</Typography>
            <TextareaAutosize
              {...register('descripton')}
              className="p-2 w-full border border-gray-300 rounded-lg"
              aria-label="minimum height"
              minRows={3}
              placeholder={t('techSupport.description')}
              style={{ width: '100%' }}
            />
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
              {t('techSupport.send')}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default TechSupport;
