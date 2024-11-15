import { Outlet } from 'react-router-dom';
import { AppShell, Burger, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '@/assets/logo.png';
import AvatarDropdown from './AvatarDropdown';
import LavLinks from './NavLinks';

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      style={{ minWidth: '300px' }}
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header style={{ minWidth: '300px' }}>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Image
              src={logo}
              alt="OurHealth logo"
              h={36}
              onClick={() => (window.location.href = '/')}
              className="cursor-pointer"
            />
          </Group>
          <AvatarDropdown />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <LavLinks />
      </AppShell.Navbar>

      <AppShell.Main className="bg-slate-50 max-sm:px-0">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
