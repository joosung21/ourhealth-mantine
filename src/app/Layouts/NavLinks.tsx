import { useEffect, useState } from 'react';
import {
  CircleStackIcon,
  DeviceTabletIcon,
  FlagIcon,
  RocketLaunchIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from '@mantine/core';

const links = [
  {
    href: '/todo',
    label: 'Todo',
    leftSection: <FlagIcon className="w-5" />,
  },
  {
    href: '/app-spec',
    label: 'App Spec',
    leftSection: <RocketLaunchIcon className="w-5" />,
  },
  {
    href: '/responsive',
    label: 'Responsive',
    leftSection: <DeviceTabletIcon className="w-5" />,
  },
  {
    href: '/fetch-data',
    label: 'Fetch Data',
    leftSection: <CircleStackIcon className="w-5" />,
  },
  {
    href: '/ui',
    label: 'UI',
    leftSection: <SwatchIcon className="w-5" />,
    Children: [
      {
        href: '/ui/color',
        label: 'Color',
      },
      {
        href: '/ui/typography',
        label: 'Typography',
      },
      {
        href: '/ui/form',
        label: 'Form',
      },
      {
        href: '/ui/date-picker',
        label: 'Date Picker',
      },
      {
        href: '/ui/notification',
        label: 'Notification',
      },
      {
        href: '/ui/modal',
        label: 'Modal',
      },
      {
        href: '/ui/alert',
        label: 'Alert',
      },
      {
        href: '/ui/drawer',
        label: 'Drawer',
      },
      {
        href: '/ui/list',
        label: 'List',
      },
    ],
  },
];

export default function LavLinks() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <>
      <div className="h-6"></div>
      {links.map((link) => {
        const isActive = currentPath === link.href || currentPath.startsWith(link.href);

        return (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            leftSection={link.leftSection}
            classNames={{
              root: 'px-5 py-3',
              label: 'text-[1rem]',
            }}
            childrenOffset={0}
            defaultOpened
            active={isActive}
          >
            {link.Children &&
              link.Children.map((child) => {
                const isChildActive = currentPath === child.href;

                return (
                  <NavLink
                    key={child.href}
                    href={child.href}
                    label={child.label}
                    className="pl-[52px]"
                    variant="subtle"
                    active={isChildActive}
                  />
                );
              })}
          </NavLink>
        );
      })}
    </>
  );
}
