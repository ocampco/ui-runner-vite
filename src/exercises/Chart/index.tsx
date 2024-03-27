import { useEffect, useState } from 'react';
import Items from './Items';
import data from './data';
import './index.css';

export type ChartItem = {
  id: string;
  name: string;
  ticketCount: number;
  colour: string;
  percentage: number;
};

const transformItems = (
  items: Omit<ChartItem, 'percentage'>[],
): ChartItem[] => {
  const ticketCountArr = items.map((item) => item.ticketCount);
  const maxTicketCount = Math.max(...ticketCountArr);
  const newItems = items.map((item) => ({
    ...item,
    percentage: (item.ticketCount / maxTicketCount) * 100,
  }));

  return newItems;
};

const Chart = () => {
  const [chartItems, setChartItems] = useState<ChartItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const items: Omit<ChartItem, 'percentage'>[] = await data();
      const transformedItems: ChartItem[] = transformItems(items);

      setChartItems(transformedItems);
    };

    if (!chartItems) fetchData();
  }, [chartItems]);

  return (
    <div className="chart">
      <Items items={chartItems} />
    </div>
  );
};
{
}
export default Chart;
