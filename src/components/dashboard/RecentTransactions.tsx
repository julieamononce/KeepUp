import { cn } from "@/lib/utils";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const transactions = [
  { id: 1, description: "Client Payment - Acme Corp", amount: 12500, type: "credit", date: "Dec 15, 2024" },
  { id: 2, description: "Office Supplies", amount: -345, type: "debit", date: "Dec 14, 2024" },
  { id: 3, description: "Monthly Rent", amount: -4500, type: "debit", date: "Dec 13, 2024" },
  { id: 4, description: "Client Payment - TechStart", amount: 8750, type: "credit", date: "Dec 12, 2024" },
  { id: 5, description: "Software Subscription", amount: -199, type: "debit", date: "Dec 11, 2024" },
];

export function RecentTransactions() {
  return (
    <div className="animate-slide-up rounded-xl border border-border bg-card p-6 shadow-card" style={{ animationDelay: "400ms" }}>
      <h3 className="mb-4 text-lg font-semibold text-card-foreground">
        Recent Transactions
      </h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full",
                  transaction.type === "credit"
                    ? "bg-success/10 text-success"
                    : "bg-destructive/10 text-destructive"
                )}
              >
                {transaction.type === "credit" ? (
                  <ArrowDownLeft className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  {transaction.description}
                </p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
            <span
              className={cn(
                "text-sm font-semibold",
                transaction.type === "credit" ? "text-success" : "text-destructive"
              )}
            >
              {transaction.type === "credit" ? "+" : ""}
              ${Math.abs(transaction.amount).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
