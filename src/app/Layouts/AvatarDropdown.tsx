import { useState } from 'react';
import { Cog8ToothIcon, PowerIcon } from '@heroicons/react/24/outline';
import { Avatar, Combobox, Group, Menu, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

export default function AvatarDropdown() {
  const name = 'Joosung Ahn';
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Menu shadow="md" width={180}>
      <Menu.Target>
        <Group className="select-none cursor-pointer text-gray-600 font-semibold text-sm">
          <div className="hidden sm:block">{name}</div>
          <Avatar name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label> */}
        <Menu.Item leftSection={<Cog8ToothIcon className="w-4" />}>Settings</Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<PowerIcon className="w-4" />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
