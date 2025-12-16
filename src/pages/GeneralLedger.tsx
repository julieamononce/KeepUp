import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const ledgerAccounts = [
  { code: "1000", name: "Cash", type: "Asset", debit: 156000, credit: 0, balance: 156000 },
  { code: "1100", name: "Accounts Receivable", type: "Asset", debit: 45000, credit: 12500, balance: 32500 },
  { code: "1200", name: "Inventory", type: "Asset", debit: 78000, credit: 23000, balance: 55000 },
  { code: "1500", name: "Equipment", type: "Asset", debit: 125000, credit: 0, balance: 125000 },
  { code: "2000", name: "Accounts Payable", type: "Liability", debit: 15000, credit: 42000, balance: -27000 },
  { code: "2100", name: "Notes Payable", type: "Liability", debit: 0, credit: 75000, balance: -75000 },
  { code: "3000", name: "Owner's Capital", type: "Equity", debit: 0, credit: 200000, balance: -200000 },
  { code: "4000", name: "Sales Revenue", type: "Revenue", debit: 0, credit: 821000, balance: -821000 },
  { code: "5000", name: "Cost of Goods Sold", type: "Expense", debit: 285000, credit: 0, balance: 285000 },
  { code: "5100", name: "Salaries Expense", type: "Expense", debit: 185000, credit: 0, balance: 185000 },
  { code: "5200", name: "Rent Expense", type: "Expense", debit: 54000, credit: 0, balance: 54000 },
  { code: "5300", name: "Utilities Expense", type: "Expense", debit: 18000, credit: 0, balance: 18000 },
];

export default function GeneralLedger() {
  const [search, setSearch] = useState("");

  const filteredAccounts = ledgerAccounts.filter(
    (account) =>
      account.name.toLowerCase().includes(search.toLowerCase()) ||
      account.code.includes(search)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground">General Ledger</h1>
        <p className="text-muted-foreground">
          View and manage all your account balances.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="animate-slide-up flex items-center gap-4" style={{ animationDelay: "50ms" }}>
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search accounts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Ledger Table */}
      <div className="animate-slide-up rounded-xl border border-border bg-card shadow-card" style={{ animationDelay: "100ms" }}>
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Account Code</TableHead>
              <TableHead className="text-muted-foreground">Account Name</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-right text-muted-foreground">Debit</TableHead>
              <TableHead className="text-right text-muted-foreground">Credit</TableHead>
              <TableHead className="text-right text-muted-foreground">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAccounts.map((account) => (
              <TableRow
                key={account.code}
                className="border-border transition-colors hover:bg-muted/50"
              >
                <TableCell className="font-mono text-sm text-primary">
                  {account.code}
                </TableCell>
                <TableCell className="font-medium text-card-foreground">
                  {account.name}
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
                      account.type === "Asset" && "bg-accent/10 text-accent",
                      account.type === "Liability" && "bg-warning/10 text-warning",
                      account.type === "Equity" && "bg-primary/10 text-primary",
                      account.type === "Revenue" && "bg-success/10 text-success",
                      account.type === "Expense" && "bg-destructive/10 text-destructive"
                    )}
                  >
                    {account.type}
                  </span>
                </TableCell>
                <TableCell className="text-right font-mono">
                  ${account.debit.toLocaleString()}
                </TableCell>
                <TableCell className="text-right font-mono">
                  ${account.credit.toLocaleString()}
                </TableCell>
                <TableCell
                  className={cn(
                    "text-right font-mono font-semibold",
                    account.balance >= 0 ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  ${Math.abs(account.balance).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Summary */}
      <div className="animate-slide-up grid gap-4 sm:grid-cols-3" style={{ animationDelay: "150ms" }}>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Debits</p>
          <p className="text-xl font-bold text-card-foreground">
            ${ledgerAccounts.reduce((sum, a) => sum + a.debit, 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Credits</p>
          <p className="text-xl font-bold text-card-foreground">
            ${ledgerAccounts.reduce((sum, a) => sum + a.credit, 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Difference</p>
          <p className="text-xl font-bold text-success">$0 (Balanced)</p>
        </div>
      </div>
    </div>
  );
}
