import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  { name: 0, loan: 29999999, payable: 0, total: 288000 },
  { name: 5, loan: 17074952.5, payable: 20958317.5, total: 28800000 },
  { name: 10, loan: 7716635, payable: 6706635, total: 28800000 },
  { name: 15, loan: 358317.5, payable: 10079952.5, total: 28800000 },
  { name: 20, loan: 0, payable: 100000, total: 28800000 },
];

const CustomQuickLoanChart = () => {
  const yAxisTicks = [0, 5000000, 10000000, 15000000, 20000000, 25000000, 30000000];
  const formatYAxis = (tick) => `${tick / 100000} L`;

  return (
    <div style={{ width: '100%', height: '300px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', borderRadius: '8px', padding: '10px' }}>
      <h3 style={{ textAlign: 'center', color: '#333', fontSize: '14px', marginBottom: '15px' }}>Your Estimated Results</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -15,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="#eee" vertical={false} />
          
          <XAxis
            dataKey="name"
            type="number"
            domain={[0, 20]}
            ticks={[0, 10, 20]}
            axisLine={true}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 11 }}
            label={{ value: "Time (in years)", position: "insideBottom", offset: -5, fill: '#6B7280', fontSize: 11 }}
          />
          <YAxis
            domain={[0, 30000000]}
            ticks={yAxisTicks}
            tickFormatter={formatYAxis}
            axisLine={true}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 11 }}
          />
          <Tooltip
            formatter={(value, name) => {
              if (name === 'payable') return [`Payable: ₹${(value).toLocaleString('en-IN')}`, 'Payable Amount'];
              if (name === 'loan') return [`Loan: ₹${(value).toLocaleString('en-IN')}`, 'You could borrow upto'];
              return `₹${(value).toLocaleString('en-IN')}`;
            }}
            labelFormatter={(label) => `Year: ${label}`}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px', color: '#333', fontSize: '12px' }}
            itemStyle={{ color: '#333' }}
          />
          
          <defs>
            <linearGradient id="colorPayable" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#66CDAA" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#66CDAA" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorLoan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2F4F4F" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#2F4F4F" stopOpacity={0.3} />
            </linearGradient>
          </defs>

          {/* The teal/light green shaded area - "Payable Amount" */}
          <Area
            type="monotone"
            dataKey="payable"
            stackId="1"
            stroke="#66CDAA"
            fill="url(#colorPayable)"
            name="Payable Amount"
          />
          {/* The dark blue shaded area - "You could borrow upto" */}
          <Area
            type="monotone"
            dataKey="loan"
            stackId="1"
            stroke="#2F4F4F"
            fill="url(#colorLoan)"
            name="You could borrow upto"
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', fontSize: '14px', fontWeight: 'bold' }}>
        <div style={{ textAlign: 'center', color: '#2F4F4F' }}>
          You could borrow upto
          <div style={{ fontSize: '18px', marginTop: '5px' }}>₹ 1,34,33,270</div>
        </div>
        <div style={{ textAlign: 'center', color: '#66CDAA' }}>
          Payable Amount
          <div style={{ fontSize: '18px', marginTop: '5px' }}>₹ 2,88,00,000</div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#333' }}>
        Monthly EMI <span style={{ fontWeight: 'bold' }}>₹ 1,20,000</span>
      </div>
    </div>
  );
};

export default CustomQuickLoanChart;