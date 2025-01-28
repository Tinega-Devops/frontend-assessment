'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Post } from '../service/api';

interface ChartAreaProps {
  data: Post[];
}

const ChartArea: React.FC<ChartAreaProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="title" hide />
        <YAxis />
        <Tooltip />
        <Bar dataKey="userId" fill="#3182ce" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartArea;

