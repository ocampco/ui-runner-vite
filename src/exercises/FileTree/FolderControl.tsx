// TODO: Move to Icon component?
import { DiffRemovedIcon, DiffAddedIcon } from '@primer/octicons-react';
import './FolderControl.css';

type FolderControlProps = {
  isOpen: boolean;
  handleClick: (isOpen: boolean) => void;
};

const FolderControl = ({ isOpen, handleClick }: FolderControlProps) => (
  <button className="button" type="button" onClick={() => handleClick(!isOpen)}>
    {isOpen ? <DiffRemovedIcon /> : <DiffAddedIcon />}
  </button>
);

export default FolderControl;
