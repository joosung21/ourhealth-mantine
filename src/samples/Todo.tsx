import { Container, List, Paper } from '@mantine/core';

export default function Todo() {
  return (
    <Container>
      <h1>Todo</h1>
      <div className="page-description">The list of things to do by priority</div>
      <Paper shadow="xs" radius="md" p="xl">
        <List type="ordered">
          <List.Item>Register Page</List.Item>
          <List.Item>i18n Multi Language</List.Item>
          {/* <List.Item>Mantine UI 참조</List.Item> */}
          {/* <List.Item>Skeleton Backup</List.Item> */}
        </List>
      </Paper>
    </Container>
  );
}
