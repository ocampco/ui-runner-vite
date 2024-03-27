import { ReactNode } from 'react';
import { ChartItem } from './index';
import './Items.css';

type ItemsProps = {
  items: ChartItem[] | null;
};

const Items = ({ items }: ItemsProps): ReactNode | null => {
  if (!items) return null;

  return items.map(({ id, name, ticketCount, colour, percentage }) => (
    <div
      className="item"
      key={id}
      title={`${name} (${ticketCount})`}
      style={{ backgroundColor: colour, height: `${percentage}%` }}
    />
  ));
};

export default Items;
