import { DollarSign, TrendingUp, CreditCard, Wallet } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ExpenseBreakdown } from "@/components/dashboard/ExpenseBreakdown";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your financial overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$821,000"
          change="+12.5% from last month"
          changeType="positive"
          icon={DollarSign}
          delay={0}
        />
        <StatCard
          title="Net Income"
          value="$351,000"
          change="+8.2% from last month"
          changeType="positive"
          icon={TrendingUp}
          delay={50}
        />
        <StatCard
          title="Total Expenses"
          value="$470,000"
          change="+3.1% from last month"
          changeType="negative"
          icon={CreditCard}
          delay={100}
        />
        <StatCard
          title="Cash Flow"
          value="$156,000"
          change="+15.3% from last month"
          changeType="positive"
          icon={Wallet}
          delay={150}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <ExpenseBreakdown />
      </div>

      {/* Transactions */}
      <RecentTransactions />
    </div>
  );
}
