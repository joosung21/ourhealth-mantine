import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Alert, Container, Paper, Stack } from '@mantine/core';

export default function Alerts() {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <Container>
      <h1>Alert</h1>
      <div className="page-description">Alerts with different colors and styles</div>
      <Paper shadow="xs" radius="md" p="xl">
        <Stack>
          <Alert
            color="blue"
            title="Default Alert"
            icon={<InformationCircleIcon className="w-5" />}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore
            necessitatibus placeat saepe.
          </Alert>
          <Alert color="red" title="Warning Alert" icon={<InformationCircleIcon className="w-5" />}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore
            necessitatibus placeat saepe.
          </Alert>
          <Alert
            color="blue"
            variant="outline"
            title="Outline Alert"
            icon={<InformationCircleIcon className="w-5" />}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore
            necessitatibus placeat saepe.
          </Alert>
          <Alert
            color="red"
            variant="outline"
            title="Outline Warning Alert"
            icon={<InformationCircleIcon className="w-5" />}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore
            necessitatibus placeat saepe.
          </Alert>
          {showAlert && (
            <Alert
              color="blue"
              title="Alert with Close Button"
              icon={<InformationCircleIcon className="w-5" />}
              onClose={() => setShowAlert(false)}
              withCloseButton
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore
              necessitatibus placeat saepe.
            </Alert>
          )}
        </Stack>
      </Paper>
    </Container>
  );
}
