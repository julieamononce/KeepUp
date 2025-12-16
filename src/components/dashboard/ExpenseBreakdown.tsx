import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Salaries", value: 35000, color: "hsl(217 91% 22%)" },
  { name: "Operations", value: 15000, color: "hsl(173 58% 39%)" },
  { name: "Marketing", value: 8000, color: "hsl(142 71% 45%)" },
  { name: "Rent", value: 12000, color: "hsl(38 92% 50%)" },
  { name: "Utilities", value: 3000, color: "hsl(0 84% 60%)" },
];

export function ExpenseBreakdown() {
  return (
    <div className="animate-slide-up rounded-xl border border-border bg-card p-6 shadow-card" style={{ animationDelay: "300ms" }}>
      <h3 className="mb-4 text-lg font-semibold text-card-foreground">
        Expense Breakdown
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0 0% 100%)",
                border: "1px solid hsl(214 32% 91%)",
                borderRadius: "8px",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-sm text-muted-foreground">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
