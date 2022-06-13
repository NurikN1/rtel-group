import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HeaderHeight } from '../variables/variables';
import { useTranslation } from 'react-i18next';

const INDUSTRIES = [
  {
    name: 'Utilities & Energy',
    value: 'utilities',
  },
  {
    name: 'Industrial & Commercial',
    value: 'industrial',
  },
  {
    name: 'Transportation',
    value: 'transportations',
  },
  {
    name: 'Emergency Response',
    value: 'emergency-response',
  },
  {
    name: 'Public Safety',
    value: 'public-safety',
  },
  {
    name: 'Others',
    value: 'others',
  },
];

const Feedback = () => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm();
  const form = useRef();

  const [industryName, setIndustryName] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
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
          {t('feedback.title')}
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <Container maxWidth="sm">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <TextField
              {...register('firstName')}
              fullWidth
              label={t('feedback.name')}
              id="firstName"
            />
          </div>
          <div className="mb-4">
            <TextField
              {...register('lastName')}
              fullWidth
              label={t('feedback.lastName')}
              id="lastName"
            />
          </div>
          <div className="mb-4">
            <TextField
              {...register('email')}
              fullWidth
              label={t('feedback.email')}
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <TextField
              {...register('company')}
              fullWidth
              label={t('feedback.company')}
              id="company"
            />
          </div>
          <div className="mb-4">
            <TextField
              {...register('position')}
              fullWidth
              label={t('feedback.position')}
              id="position"
            />
          </div>
          <div>
            <FormControl fullWidth sx={{ marginBottom: '16px' }}>
              <InputLabel id="demo-multiple-name-label">{t('feedback.industry')}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={industryName}
                label={t('feedback.industry')}
                onChange={(e) => setIndustryName(e.target.value)}>
                {INDUSTRIES.map((industry) => (
                  <MenuItem value={industry.value} key={industry.value}>
                    {industry.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <TextField {...register('region')} fullWidth label={t('feedback.region')} id="region" />
          </div>
          <div className="mb-4">
            <TextField
              {...register('phoneNumber')}
              fullWidth
              label={t('feedback.phone')}
              id="phoneNumber"
            />
          </div>
          <div className="mb-4">
            <Typography>{t('feedback.description')}</Typography>
            <TextareaAutosize
              {...register('descripton')}
              className="p-2 w-full border border-gray-300 rounded-lg"
              aria-label="minimum height"
              minRows={3}
              placeholder={t('feedback.description')}
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
              {t('feedback.submit')}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Feedback;
