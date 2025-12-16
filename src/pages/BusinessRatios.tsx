import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

interface RatioCardProps {
  title: string;
  value: string;
  description: string;
  benchmark: string;
  status: "good" | "warning" | "bad";
  delay?: number;
}

function RatioCard({ title, value, description, benchmark, status, delay = 0 }: RatioCardProps) {
  return (
    <div
      className="animate-slide-up rounded-xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="font-semibold text-card-foreground">{title}</h3>
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full",
            status === "good" && "bg-success/10 text-success",
            status === "warning" && "bg-warning/10 text-warning",
            status === "bad" && "bg-destructive/10 text-destructive"
          )}
        >
          {status === "good" && <TrendingUp className="h-4 w-4" />}
          {status === "warning" && <Minus className="h-4 w-4" />}
          {status === "bad" && <TrendingDown className="h-4 w-4" />}
        </div>
      </div>
      <p className="mb-2 text-3xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-3 rounded-md bg-muted/50 px-3 py-2">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">Benchmark:</span> {benchmark}
        </p>
      </div>
    </div>
  );
}

const ratioComparison = [
  { name: "Current Ratio", yours: 9.02, industry: 2.0 },
  { name: "Quick Ratio", yours: 6.98, industry: 1.5 },
  { name: "Debt Ratio", yours: 0.28, industry: 0.45 },
  { name: "ROE", yours: 1.05, industry: 0.15 },
];

const radarData = [
  { subject: "Liquidity", A: 90, fullMark: 100 },
  { subject: "Profitability", A: 85, fullMark: 100 },
  { subject: "Efficiency", A: 75, fullMark: 100 },
  { subject: "Solvency", A: 80, fullMark: 100 },
  { subject: "Growth", A: 70, fullMark: 100 },
];

export default function BusinessRatios() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground">Business Ratios</h1>
        <p className="text-muted-foreground">
          Key financial ratios to measure your business health.
        </p>
      </div>

      {/* Liquidity Ratios */}
      <div className="space-y-4">
        <h2 className="animate-slide-up text-lg font-semibold text-foreground" style={{ animationDelay: "50ms" }}>
          Liquidity Ratios
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RatioCard
            title="Current Ratio"
            value="9.02"
            description="Current Assets / Current Liabilities"
            benchmark="Industry avg: 2.0"
            status="good"
            delay={100}
          />
          <RatioCard
            title="Quick Ratio"
            value="6.98"
            description="(Current Assets - Inventory) / Current Liabilities"
            benchmark="Industry avg: 1.5"
            status="good"
            delay={150}
          />
          <RatioCard
            title="Cash Ratio"
            value="5.78"
            description="Cash / Current Liabilities"
            benchmark="Industry avg: 0.5"
            status="good"
            delay={200}
          />
        </div>
      </div>

      {/* Profitability Ratios */}
      <div className="space-y-4">
        <h2 className="animate-slide-up text-lg font-semibold text-foreground" style={{ animationDelay: "250ms" }}>
          Profitability Ratios
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RatioCard
            title="Gross Profit Margin"
            value="65.3%"
            description="(Revenue - COGS) / Revenue"
            benchmark="Industry avg: 40%"
            status="good"
            delay={300}
          />
          <RatioCard
            title="Net Profit Margin"
            value="34.0%"
            description="Net Income / Revenue"
            benchmark="Industry avg: 10%"
            status="good"
            delay={350}
          />
          <RatioCard
            title="Return on Equity (ROE)"
            value="104.7%"
            description="Net Income / Owner's Equity"
            benchmark="Industry avg: 15%"
            status="good"
            delay={400}
          />
        </div>
      </div>

      {/* Solvency Ratios */}
      <div className="space-y-4">
        <h2 className="animate-slide-up text-lg font-semibold text-foreground" style={{ animationDelay: "450ms" }}>
          Solvency Ratios
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RatioCard
            title="Debt Ratio"
            value="27.7%"
            description="Total Liabilities / Total Assets"
            benchmark="Industry avg: 45%"
            status="good"
            delay={500}
          />
          <RatioCard
            title="Debt-to-Equity"
            value="0.38"
            description="Total Liabilities / Owner's Equity"
            benchmark="Industry avg: 1.0"
            status="good"
            delay={550}
          />
          <RatioCard
            title="Equity Ratio"
            value="72.3%"
            description="Owner's Equity / Total Assets"
            benchmark="Industry avg: 55%"
            status="good"
            delay={600}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Bar Chart */}
        <div className="animate-slide-up rounded-xl border border-border bg-card p-6 shadow-card" style={{ animationDelay: "650ms" }}>
          <h3 className="mb-4 text-lg font-semibold text-card-foreground">
            Your Ratios vs Industry
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratioComparison} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis type="number" tick={{ fill: "hsl(215 16% 47%)" }} />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={100}
                  tick={{ fill: "hsl(215 16% 47%)", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0 0% 100%)",
                    border: "1px solid hsl(214 32% 91%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="yours" fill="hsl(173 58% 39%)" name="Your Business" radius={[0, 4, 4, 0]} />
                <Bar dataKey="industry" fill="hsl(217 91% 22%)" name="Industry Avg" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="animate-slide-up rounded-xl border border-border bg-card p-6 shadow-card" style={{ animationDelay: "700ms" }}>
          <h3 className="mb-4 text-lg font-semibold text-card-foreground">
            Financial Health Score
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid className="stroke-border" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "hsl(215 16% 47%)", fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ fill: "hsl(215 16% 47%)" }}
                />
                <Radar
                  name="Score"
                  dataKey="A"
                  stroke="hsl(173 58% 39%)"
                  fill="hsl(173 58% 39%)"
                  fillOpacity={0.3}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0 0% 100%)",
                    border: "1px solid hsl(214 32% 91%)",
                    borderRadius: "8px",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
