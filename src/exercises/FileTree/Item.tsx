import type { Node } from './index';
import FileItem from './FileItem';
import FolderItem from './FolderItem';

export type ItemProps = {
  item: Node;
};

const Item = ({ item }: ItemProps) => {
  const hasChildren = item.children.length > 0;

  if (hasChildren) return <FolderItem item={item} />;

  return <FileItem item={item} />;
};

export default Item;
