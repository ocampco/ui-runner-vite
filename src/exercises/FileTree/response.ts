import type { Node } from './index';

const response: Node[] = [
  {
    id: '1',
    name: 'src',
    icon: 'folder',
    children: [
      {
        id: '2',
        name: 'App.css',
        icon: 'file',
        children: [],
      },
      {
        id: '2',
        name: 'assets',
        icon: 'folder',
        children: [
          {
            id: '6',
            name: 'exercises',
            icon: 'folder',
            children: [],
          },
          {
            id: '26',
            name: 'icon.svg',
            icon: 'file',
            children: [],
          },
        ],
      },
      {
        id: '13',
        name: 'App.js',
        icon: 'file',
        children: [],
      },
    ],
  },
  {
    id: '3',
    name: '.eslintrc.cjs',
    icon: 'file',
    children: [],
  },
  {
    id: '5',
    name: '.gitignore',
    icon: 'file',
    children: [],
  },
];

export default response;
