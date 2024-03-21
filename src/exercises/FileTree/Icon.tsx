import type { Icon } from './index';
import { FileDirectoryIcon, FileIcon } from '@primer/octicons-react';

type IconProps = {
  icon: Icon;
};

const Icon = ({ icon }: IconProps) =>
  icon === 'folder' ? <FileDirectoryIcon /> : <FileIcon />;

export default Icon;
