import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function FinancialStatements() {
  const [activeTab, setActiveTab] = useState("income");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground">Financial Statements</h1>
        <p className="text-muted-foreground">
          View your income statement, balance sheet, and cash flow statement.
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-slide-up" style={{ animationDelay: "50ms" }}>
        <TabsList className="grid w-full max-w-lg grid-cols-3">
          <TabsTrigger value="income">Income Statement</TabsTrigger>
          <TabsTrigger value="balance">Balance Sheet</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
        </TabsList>

        {/* Income Statement */}
        <TabsContent value="income" className="mt-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-6 text-center text-xl font-bold text-card-foreground">
              Income Statement
            </h2>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              For the Year Ended December 31, 2024
            </p>

            {/* Revenue Section */}
            <div className="mb-6 space-y-2">
              <h3 className="font-semibold text-card-foreground">Revenue</h3>
              <div className="flex justify-between border-b border-border py-2 pl-4">
                <span className="text-muted-foreground">Sales Revenue</span>
                <span className="font-mono">$821,000</span>
              </div>
              <div className="flex justify-between py-2 pl-4 font-semibold">
                <span>Total Revenue</span>
                <span className="font-mono text-success">$821,000</span>
              </div>
            </div>

            {/* Expenses Section */}
            <div className="mb-6 space-y-2">
              <h3 className="font-semibold text-card-foreground">Expenses</h3>
              <div className="flex justify-between border-b border-border py-2 pl-4">
                <span className="text-muted-foreground">Cost of Goods Sold</span>
                <span className="font-mono">$285,000</span>
              </div>
              <div className="flex justify-between border-b border-border py-2 pl-4">
                <span className="text-muted-foreground">Salaries Expense</span>
                <span className="font-mono">$185,000</span>
              </div>
              <div className="flex justify-between border-b border-border py-2 pl-4">
                <span className="text-muted-foreground">Rent Expense</span>
                <span className="font-mono">$54,000</span>
              </div>
              <div className="flex justify-between border-b border-border py-2 pl-4">
                <span className="text-muted-foreground">Utilities Expense</span>
                <span className="font-mono">$18,000</span>
              </div>
              <div className="flex justify-between py-2 pl-4 font-semibold">
                <span>Total Expenses</span>
                <span className="font-mono text-destructive">$542,000</span>
              </div>
            </div>

            {/* Net Income */}
            <div className="rounded-lg bg-success/10 p-4">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-success">Net Income</span>
                <span className="font-mono text-success">$279,000</span>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Balance Sheet */}
        <TabsContent value="balance" className="mt-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-6 text-center text-xl font-bold text-card-foreground">
              Balance Sheet
            </h2>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              As of December 31, 2024
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Assets */}
              <div className="space-y-2">
                <h3 className="font-semibold text-card-foreground">Assets</h3>
                <div className="rounded-lg border border-border p-4">
                  <p className="mb-2 text-sm font-medium text-accent">Current Assets</p>
                  <div className="flex justify-between py-1 pl-2 text-sm">
                    <span className="text-muted-foreground">Cash</span>
                    <span className="font-mono">$156,000</span>
                  </div>
                  <div className="flex justify-between py-1 pl-2 text-sm">
                    <span className="text-muted-foreground">Accounts Receivable</span>
                    <span className="font-mono">$32,500</span>
                  </div>
                  <div className="flex justify-between py-1 pl-2 text-sm">
                    <span className="text-muted-foreground">Inventory</span>
                    <span className="font-mono">$55,000</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-border pt-2 font-medium">
                    <span>Total Current</span>
                    <span className="font-mono">$243,500</span>
                  </div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="mb-2 text-sm font-medium text-accent">Non-Current Assets</p>
                  <div className="flex justify-between py-1 pl-2 text-sm">
                    <span className="text-muted-foreground">Equipment</span>
                    <span className="font-mono">$125,000</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-border pt-2 font-medium">
                    <span>Total Non-Current</span>
                    <span className="font-mono">$125,000</span>
                  </div>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <div className="flex justify-between font-bold text-primary">
                    <span>Total Assets</span>
                    <span className="font-mono">$368,500</span>
                  </div>
                </div>
              </div>

              {/* Liabilities & Equity */}
              <div className="space-y-2">
                <h3 className="font-semibold text-card-foreground">Liabilities & Equity</h3>
                <div className="rounded-lg border border-border p-4">
                  <p className="mb-2 text-sm font-medium text-warning">Current Liabilities</p>
                  <div className="flex justify-between py-1 pl-2 text-sm">
                    <span className="text-muted-foreground">Accounts Payable</span>
                    <span className="font-mono">$27,000</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-border pt-2 font-medium">
                    <span>Total Current</span>
                    <span className="font-mono">$27,000</span>
                  </div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="mb-2 text-sm font-medium text-warning">Long-Term Liabilities</p>
                  <div className="flex justify-between py-1 pl-2 text-sm">
                    <span className="text-muted-foreground">Notes Payable</span>
                    <span className="font-mono">$75,000</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-border pt-2 font-medium">
                    <span>Total Long-Term</span>
                    <span className="font-mono">$75,000</span>
                  </div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="mb-2 text-sm font-medium text-success">Owner's Equity</p>
                  <div className="flex justify-between py-1 pl-2 text-sm">
                    <span className="text-muted-foreground">Capital</span>
                    <span className="font-mono">$200,000</span>
                  </div>
                  <div className="flex justify-between py-1 pl-2 text-sm">
                    <span className="text-muted-foreground">Retained Earnings</span>
                    <span className="font-mono">$66,500</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-border pt-2 font-medium">
                    <span>Total Equity</span>
                    <span className="font-mono">$266,500</span>
                  </div>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <div className="flex justify-between font-bold text-primary">
                    <span>Total Liabilities & Equity</span>
                    <span className="font-mono">$368,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Cash Flow Statement */}
        <TabsContent value="cashflow" className="mt-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-6 text-center text-xl font-bold text-card-foreground">
              Statement of Cash Flows
            </h2>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              For the Year Ended December 31, 2024
            </p>

            {/* Operating Activities */}
            <div className="mb-6 space-y-2">
              <h3 className="font-semibold text-card-foreground">
                Cash Flows from Operating Activities
              </h3>
              <div className="rounded-lg border border-border p-4 space-y-1">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Net Income</span>
                  <span className="font-mono">$279,000</span>
                </div>
                <div className="flex justify-between py-1 pl-4 text-sm">
                  <span className="text-muted-foreground">Decrease in Accounts Receivable</span>
                  <span className="font-mono text-success">+$12,500</span>
                </div>
                <div className="flex justify-between py-1 pl-4 text-sm">
                  <span className="text-muted-foreground">Increase in Inventory</span>
                  <span className="font-mono text-destructive">-$15,000</span>
                </div>
                <div className="flex justify-between py-1 pl-4 text-sm">
                  <span className="text-muted-foreground">Increase in Accounts Payable</span>
                  <span className="font-mono text-success">+$8,000</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-border pt-2 font-medium">
                  <span>Net Cash from Operating</span>
                  <span className="font-mono text-success">$284,500</span>
                </div>
              </div>
            </div>

            {/* Investing Activities */}
            <div className="mb-6 space-y-2">
              <h3 className="font-semibold text-card-foreground">
                Cash Flows from Investing Activities
              </h3>
              <div className="rounded-lg border border-border p-4">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Purchase of Equipment</span>
                  <span className="font-mono text-destructive">-$45,000</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-border pt-2 font-medium">
                  <span>Net Cash from Investing</span>
                  <span className="font-mono text-destructive">-$45,000</span>
                </div>
              </div>
            </div>

            {/* Financing Activities */}
            <div className="mb-6 space-y-2">
              <h3 className="font-semibold text-card-foreground">
                Cash Flows from Financing Activities
              </h3>
              <div className="rounded-lg border border-border p-4">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Owner Withdrawals</span>
                  <span className="font-mono text-destructive">-$83,500</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-border pt-2 font-medium">
                  <span>Net Cash from Financing</span>
                  <span className="font-mono text-destructive">-$83,500</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-lg bg-success/10 p-4">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-success">Net Increase in Cash</span>
                <span className="font-mono text-success">$156,000</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
