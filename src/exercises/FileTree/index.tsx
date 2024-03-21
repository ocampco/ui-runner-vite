import response from './response';
import Item from './Item';
import './index.css';

export type Icon = 'folder' | 'file';
export type Node = {
  id: string;
  name: string;
  icon: Icon;
  children: Node[];
};

const FileTree = ({ data = response }) => (
  <div className="tree">
    {data.map((node) => (
      <Item key={node.id} item={node} />
    ))}
  </div>
);

export default FileTree;
