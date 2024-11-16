import { Container, List, Paper } from '@mantine/core';

export default function Todo() {
  return (
    <Container>
      <h1>Todo</h1>
      <div className="page-description">The list of things to do by priority</div>
      <Paper shadow="xs" radius="md" p="xl">
        <List type="ordered">
          <List.Item>Split Router Component</List.Item>
          <List.Item>List</List.Item>
          <List.Item>Drawer</List.Item>
          <List.Item>Alert</List.Item>
          <List.Item>Zustant Store</List.Item>
          <List.Item>Signin/Signup Page</List.Item>
          <List.Item>i18n Multi Language</List.Item>
          {/* <List.Item>Mantine UI 참조</List.Item> */}
        </List>
      </Paper>
    </Container>
  );
}
