import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { setIsAuthorized } from '../helpers/auth';
import { HeaderHeight } from '../variables/variables';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const form = useRef();

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    if (data.email !== 'admin@admin.com' || data.password !== 'admin') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    setIsAuthorized(true);
    navigate('/');
  };
  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '32px',
      }}>
      <div className="pt-16">
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          Логин
        </Typography>
        <Container maxWidth="sm">
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <TextField {...register('email')} fullWidth label="Email" id="email" />
            </div>
            <div className="mb-4">
              <TextField
                {...register('password')}
                fullWidth
                label="Password"
                id="password"
                type="password"
              />
            </div>
            <div className="mb-4">
              {error && <Alert severity="error">Password or email is incorrect</Alert>}
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
                Войти
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
