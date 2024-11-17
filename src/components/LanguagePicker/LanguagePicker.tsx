import { Select } from '@mantine/core';
import { useLanguageStore } from '@/stores/useLanguageStore';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Français', value: 'fr' },
  { label: '한국어', value: 'ko' },
  { label: '中文 (简体)', value: 'zh-CN' },
];

export default function LanguagePicker() {
  const { language, changeLanguage } = useLanguageStore();

  return (
    <Select
      data={languages}
      value={language}
      onChange={(value) => value && changeLanguage(value)}
      label="Select language"
    />
  );
}
