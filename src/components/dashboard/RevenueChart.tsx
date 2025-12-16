import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 52000, expenses: 35000 },
  { month: "Mar", revenue: 48000, expenses: 30000 },
  { month: "Apr", revenue: 61000, expenses: 38000 },
  { month: "May", revenue: 55000, expenses: 34000 },
  { month: "Jun", revenue: 67000, expenses: 42000 },
  { month: "Jul", revenue: 72000, expenses: 45000 },
  { month: "Aug", revenue: 69000, expenses: 41000 },
  { month: "Sep", revenue: 78000, expenses: 48000 },
  { month: "Oct", revenue: 85000, expenses: 52000 },
  { month: "Nov", revenue: 91000, expenses: 55000 },
  { month: "Dec", revenue: 98000, expenses: 58000 },
];

export function RevenueChart() {
  return (
    <div className="animate-slide-up rounded-xl border border-border bg-card p-6 shadow-card" style={{ animationDelay: "200ms" }}>
      <h3 className="mb-4 text-lg font-semibold text-card-foreground">
        Revenue vs Expenses
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(173 58% 39%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(173 58% 39%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217 91% 22%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(217 91% 22%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="month"
              className="text-xs text-muted-foreground"
              tick={{ fill: "hsl(215 16% 47%)" }}
            />
            <YAxis
              className="text-xs text-muted-foreground"
              tick={{ fill: "hsl(215 16% 47%)" }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0 0% 100%)",
                border: "1px solid hsl(214 32% 91%)",
                borderRadius: "8px",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(173 58% 39%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              name="Revenue"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="hsl(217 91% 22%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorExpenses)"
              name="Expenses"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
