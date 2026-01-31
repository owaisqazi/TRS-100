import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#20A387", "#FBBF24"]; // Principal = green, Interest = yellow

// Custom label component to display value inside the pie slice
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function EmiChart({ data }) {
  return (
    <div className="flex justify-center items-center">
      {data ? (
        <PieChart width={270} height={270}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            // Use the custom label component here
            label={renderCustomizedLabel} 
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p className="text-gray-500">No Data Available</p>
      )}
    </div>
  );
}