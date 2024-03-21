import type { ItemProps } from './Item';
import Icon from './Icon';
import './FileItem.css';

type FileItemType = Omit<ItemProps, 'item.children' | 'item.id'>;

const FileItem = ({ item: { name, icon } }: FileItemType) => (
  <div className="item">
    <Icon icon={icon} />
    {name}
  </div>
);

export default FileItem;
