import { Container, Paper } from '@mantine/core';

export default function Todo() {
  return (
    <Container>
      <h1 className="mb-6">Todo</h1>
      <Paper shadow="xs" radius="md" p="xl">
        <ol>
          <li>App spec</li>
          <li>Mantine UI 참조</li>
          <li>Colors</li>
          <li>Confirmation Dialog</li>
          <li>Modal Popup</li>
          <li>Table</li>
          <li>Alert</li>
          <li>Axios Fetch/Post</li>
          <li>Zustant Store</li>
          <li>Signin/Signup Page</li>
          <li>i18n Multi Language</li>
        </ol>
      </Paper>
    </Container>
  );
}
