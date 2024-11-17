import { useState } from 'react';
import { ArrowDownTrayIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { s } from 'vite/dist/node/types.d-aGj9QkWt';
import {
  Anchor,
  Avatar,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  Group,
  Pagination,
  Paper,
  Progress,
  rem,
  ScrollArea,
  Table,
  Text,
  TextInput,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { LIST, LIST2 } from './mocks/LIST';

export default function List() {
  const { width } = useViewportSize();

  // List1
  const rows = LIST.map((row: any) => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (
      <Table.Tr key={row.title}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.title}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.year}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.author}
          </Anchor>
        </Table.Td>
        <Table.Td>{Intl.NumberFormat().format(totalReviews)}</Table.Td>
        <Table.Td>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" fw={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section value={positiveReviews} color="teal" />
            <Progress.Section value={negativeReviews} color="red" />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  // List2
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === LIST2.length ? [] : LIST2.map((item: any) => item.id)
    );

  const rows2 = LIST2.map((item: any) => {
    const selected = selection.includes(item.id);
    return (
      // <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
      <Table.Tr key={item.id}>
        <Table.Td>
          <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.email}</Table.Td>
        <Table.Td>{item.job}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Container size="lg">
      <h1>List</h1>
      <div className="page-description">Example of a list with pagination and search</div>
      <Paper shadow="xs" radius="md" p="xl">
        <Grid>
          <Grid.Col span={{ xs: 12, md: 8 }}>
            <Text fw={700} size="sm">
              Top 6 books
            </Text>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 4 }}>
            <TextInput
              placeholder="Search by any field"
              leftSection={<MagnifyingGlassIcon className="w-5" />}
            />
          </Grid.Col>
        </Grid>

        <Flex mt="xl" justify="end">
          <Button
            color="gray"
            variant="white"
            size="sm"
            leftSection={<ArrowDownTrayIcon className="w-5" />}
          >
            Download CSV
          </Button>
        </Flex>

        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="xs">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Book title</Table.Th>
                <Table.Th>Year</Table.Th>
                <Table.Th>Author</Table.Th>
                <Table.Th>Reviews</Table.Th>
                <Table.Th>Reviews distribution</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>

        <Center mt="xl">
          <Pagination total={60} withControls={width > 768} />
        </Center>
      </Paper>

      <Paper shadow="xs" radius="md" p="xl" mt="xl">
        <h2>Selectable list</h2>
        <Button size="xs" disabled={!selection.length}>
          Delete {selection.length} selected
        </Button>
        <Table.ScrollContainer minWidth={800}>
          <Table miw={800} verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{ width: rem(40) }}>
                  <Checkbox
                    onChange={toggleAll}
                    checked={selection.length === LIST2.length}
                    indeterminate={selection.length > 0 && selection.length !== LIST2.length}
                  />
                </Table.Th>
                <Table.Th>User</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Job</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows2}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>
    </Container>
  );
}
