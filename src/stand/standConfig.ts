import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';
import { StandPageDecoration as standPageDecoration } from './standPageDecoration';

const groups = [
  {
    title: 'Адаптеры',
    id: 'adapters',
    initialOpen: true,
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta echarts-adapter',
  id: 'echarts-adapter',
  groups,
  group: 'Адаптеры',
  image,
  standPageDecoration,
  description:
    'Адаптер для библиотеки echarts. Стилизует таблицу для дизайн-системы Consta.',
  repositoryUrl: 'https://github.com/consta-design-system/echarts-adapter',
});
