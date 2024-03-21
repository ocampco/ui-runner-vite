import { useState } from 'react';
import type { ItemProps } from './Item';
import FolderControl from './FolderControl';
import Icon from './Icon';
import Item from './Item';
import './FolderItem.css';

type FolderItemProps = Omit<ItemProps, 'item.id'>;

const FolderItem = ({ item: { name, icon, children } }: FolderItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <FolderControl isOpen={isOpen} handleClick={setIsOpen} />
        <Icon icon={icon} />
        {name}
      </div>
      {isOpen && (
        <div className="subFolder">
          {children.map((child) => (
            <Item key={child.id} item={child} />
          ))}
        </div>
      )}
    </>
  );
};

export default FolderItem;
