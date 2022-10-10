/** @jsxImportSource @emotion/react */
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Location, Navigate, useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Loader from '../../components/Loader';
import useAuth from '../../hooks/useAuth';
import Logo from './Logo';

type LocationState = {
  from?: Location;
};

const schema = yup.object({
  user: yup.string().trim().required('Please enter your user name.'),
  password: yup.string().trim().required('Please enter your user name.'),
});

type Inputs = yup.InferType<typeof schema>;

function SignIn() {
  const auth = useAuth();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState<{
    loading: boolean;
    error: Error | undefined;
  }>({
    loading: false,
    error: undefined,
  });

  const from = (location.state as LocationState)?.from?.pathname || '/';

  if (auth.isAuthenticated) {
    <Navigate to={from} replace />;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (signIn.loading) {
      return;
    }

    setSignIn({ loading: true, error: undefined });
    try {
      if (await auth.signin(data)) {
        navigate(from, { replace: true });
      } else {
        setSignIn({
          loading: false,
          error: new Error('Incorrect username or password.'),
        });
      }
    } catch (e) {
      setSignIn({ loading: false, error: e as Error });
    }
  };

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
      }}
      maxWidth="md"
    >
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Logo />
        <Stack
          component="form"
          noValidate
          spacing={1}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography variant="h2" component="h1" css={{ textAlign: 'center' }}>
            My React App
          </Typography>
          {signIn.error && (
            <Alert severity="error">{signIn.error.message}</Alert>
          )}
          <TextField
            label="User"
            type="email"
            autoComplete="username"
            variant="filled"
            inputProps={{ maxLength: 255 }}
            {...register('user')}
            error={!!errors.user}
            helperText={errors.user?.message}
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            inputProps={{ maxLength: 1000 }}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" disabled={signIn.loading}>
            Sign in
          </Button>
        </Stack>
      </Stack>
      <Loader open={signIn.loading} />
    </Container>
  );
}

export default SignIn;
