import { Box, Button, Card, Container, Divider, Group, Paper } from '@mantine/core';

const mantineColors = [
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
];

const tailwindColors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export default function Color() {
  return (
    <Container size="xl">
      <h1>Color</h1>
      <div className="page-description">Color scheme</div>
      <Paper shadow="xs" radius="md" p="xl">
        <h2>Mantine Component Color Scheme</h2>
        {mantineColors.map((color) => (
          <Group key={color} style={{ marginBottom: 10 }}>
            <Button color={color}>
              {color}
              {color === 'blue' && <span className="ml-1">(Primary)</span>}
              {color === 'red' && <span className="ml-1">(Error)</span>}
              {color === 'teal' && <span className="ml-1">(Success)</span>}
            </Button>
            <Button color={`${color}.1`}>{color}.1</Button>
            <Button color={`${color}.2`}>{color}.2</Button>
            <Button color={`${color}.3`}>{color}.3</Button>
            <Button color={`${color}.4`}>{color}.4</Button>
            <Button color={`${color}.5`}>{color}.5</Button>
            <Button color={`${color}.6`}>{color}.6</Button>
            <Button color={`${color}.7`}>{color}.7</Button>
            <Button color={`${color}.8`}>{color}.8</Button>
            <Button color={`${color}.9`}>{color}.9</Button>
          </Group>
        ))}

        <Divider my="lg" />

        <h2>Tailwind Background Color Scheme</h2>
        {tailwindColors.map((color) => (
          <Group key={color} style={{ marginBottom: 10 }} gap={0} className="text-xs">
            <Paper p="sm" style={{ width: 100 }} className={`bg-${color}-50`} radius={0}>
              {color}-50
            </Paper>
            <Paper p="sm" style={{ width: 100 }} className={`bg-${color}-100`} radius={0}>
              {color}-100
            </Paper>
            <Paper p="sm" style={{ width: 100 }} className={`bg-${color}-200`} radius={0}>
              {color}-200
            </Paper>
            <Paper p="sm" style={{ width: 100 }} className={`bg-${color}-300`} radius={0}>
              {color}-300
            </Paper>
            <Paper p="sm" style={{ width: 100 }} className={`bg-${color}-400`} radius={0}>
              {color}-400
            </Paper>
            <Paper
              p="sm"
              style={{ width: 100 }}
              className={`bg-${color}-500 text-white`}
              radius={0}
            >
              {color}-500
            </Paper>
            <Paper
              p="sm"
              style={{ width: 100 }}
              className={`bg-${color}-600 text-white`}
              radius={0}
            >
              {color}-600
            </Paper>
            <Paper
              p="sm"
              style={{ width: 100 }}
              className={`bg-${color}-700 text-white`}
              radius={0}
            >
              {color}-700
            </Paper>
            <Paper
              p="sm"
              style={{ width: 100 }}
              className={`bg-${color}-800 text-white`}
              radius={0}
            >
              {color}-800
            </Paper>
            <Paper
              p="sm"
              style={{ width: 100 }}
              className={`bg-${color}-900 text-white`}
              radius={0}
            >
              {color}-900
            </Paper>
            <Paper
              p="sm"
              style={{ width: 100 }}
              className={`bg-${color}-950 text-white`}
              radius={0}
            >
              {color}-950
            </Paper>
          </Group>
        ))}
      </Paper>
    </Container>
  );
}
