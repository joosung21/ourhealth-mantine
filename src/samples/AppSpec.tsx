import { Anchor, Container, Paper, Stack, Table } from '@mantine/core';

const items = [
  {
    name: 'React',
    feature: 'Javascript Library',
    description: 'React is a JavaScript library for building user interfaces.',
    sources: [
      {
        name: 'React Docs',
        url: 'https://react.dev/reference/react',
      },
    ],
  },
  {
    name: 'Typescript',
    feature: 'Programming Language',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    sources: [
      {
        name: 'Typescript Docs',
        url: 'https://www.typescriptlang.org/docs/',
      },
    ],
  },
  {
    name: 'Sass',
    feature: 'CSS Extension',
    description:
      'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    sources: [
      {
        name: 'Sass Docs',
        url: 'https://sass-lang.com/documentation/',
      },
    ],
  },
  {
    name: 'Prettier',
    feature: 'Code Formatter',
    description: 'Prettier is an opinionated code formatter.',
    sourceElement: () => {
      return (
        <Anchor size="sm" onClick={() => window.open('https://prettier.io/docs/en/', '_blank')}>
          Prettier Docs
        </Anchor>
      );
    },
  },
  {
    name: 'Vite',
    feature: 'Build Tool',
    description:
      'Vite is a build tool that aims to provide a faster and leaner development experience.',
    sources: [
      {
        name: 'Vite Docs',
        url: 'https://vite.dev/guide/',
      },
    ],
  },
  {
    name: 'Mantine',
    feature: 'React Components',
    description: 'Mantine is a MIT licensed React components and hooks.',
    sourceName: 'Mantine Figma',
    sources: [
      {
        name: 'Mantine Figma',
        url: 'https://www.figma.com/community/file/1067173247578645134/mantine-ui-component-library',
      },
      {
        name: 'Mantine Docs',
        url: 'https://mantine.dev/getting-started/',
      },
      {
        name: 'Mantine UI Reference',
        url: 'https://ui.mantine.dev/',
      },
    ],
  },
  {
    name: 'Dayjs',
    feature: 'Date Library',
    description:
      'Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times.',
    sources: [
      {
        name: 'Dayjs Docs',
        url: 'https://day.js.org/docs/en/installation/installation',
      },
    ],
  },
  {
    name: 'Axios',
    feature: 'HTTP Client',
    description: 'Promise based HTTP client for the browser and node.js.',
    sources: [
      {
        name: 'Axios Docs',
        url: 'https://axios-http.com/docs/intro',
      },
    ],
  },
  {
    name: 'Zustand',
    feature: 'State Management',
    description: 'Bear necessities for global state in React.',
    sources: [
      {
        name: 'Zustand Docs',
        url: 'https://zustand.docs.pmnd.rs/getting-started/introduction',
      },
    ],
  },
  {
    name: 'Heroicons',
    feature: 'Icon Library',
    description: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
    sources: [
      {
        name: 'Heroicons',
        url: 'https://heroicons.com/',
      },
    ],
  },
];

export default function AppSpec() {
  const rows = items.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td className="font-semibold">{item.name}</Table.Td>
      <Table.Td>{item.feature}</Table.Td>
      <Table.Td>{item.description}</Table.Td>
      <Table.Td className="whitespace-nowrap">
        <Stack gap={2} align="flex-start">
          {item.sources?.map((source, index) => (
            <Anchor key={index} size="sm" onClick={() => window.open(source.url, '_blank')}>
              {source.name}
            </Anchor>
          ))}
        </Stack>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <h1 className="mb-6">App Spec</h1>
      <Paper shadow="xs" radius="md" p="xl">
        <Table.ScrollContainer minWidth={500}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>name</Table.Th>
                <Table.Th>feature</Table.Th>
                <Table.Th>description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>
    </Container>
  );
}
