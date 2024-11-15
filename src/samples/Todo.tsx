import { Container, Paper } from '@mantine/core';

export default function Todo() {
  return (
    <Container>
      <h1>Todo</h1>
      <div className="page-description">The list of things to do by priority</div>
      <Paper shadow="xs" radius="md" p="xl">
        <ol>
          <li>Rosponsive</li>
          <li>Mantine UI 참조</li>
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
