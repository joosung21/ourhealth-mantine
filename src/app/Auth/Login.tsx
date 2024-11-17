import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Image,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import logo from '@/assets/logo.png';
import { GoogleButton } from './GoogleButton';
import classes from './Login.module.css';

export default function Login() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Image src={logo} alt="OurHealth logo" w={240} mt="lg" mb="xl" />

        <GoogleButton radius="xl">Sign-in with Google</GoogleButton>
        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />

        <Button fullWidth mt="xl" size="md" onClick={() => (window.location.href = '/')}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="/register" fw={700}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
