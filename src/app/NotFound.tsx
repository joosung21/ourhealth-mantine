import { Button, Center } from '@mantine/core';

export default function NotFound() {
  return (
    <>
      <Center style={{ height: 'calc(100vh - 160px)' }}>
        <div className="text-center">
          <h1>404 - Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Button onClick={() => (window.location.href = '/')} color="blue" className="mt-6">
            Go Home
          </Button>
        </div>
      </Center>
    </>
  );
}
