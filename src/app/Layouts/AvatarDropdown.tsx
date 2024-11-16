import { Cog8ToothIcon, PowerIcon } from '@heroicons/react/24/outline';
import { Avatar, Combobox, Group, Menu, useCombobox } from '@mantine/core';

export default function AvatarDropdown() {
  const name = 'Joosung Ahn';
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  return (
    <Menu shadow="md" width={180}>
      <Menu.Target>
        <Group className="select-none cursor-pointer text-gray-600 font-semibold text-sm" gap="sm">
          <Avatar name={name} color="initials" allowedInitialsColors={['blue', 'red']} size={32} />
          <div className="hidden sm:block">{name}</div>
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label> */}
        <Menu.Item leftSection={<Cog8ToothIcon className="w-4" />}>Settings</Menu.Item>

        <Menu.Divider />

        <Menu.Item
          leftSection={<PowerIcon className="w-4" id="logout" />}
          onClick={() => {
            window.location.href = '/login';
          }}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
