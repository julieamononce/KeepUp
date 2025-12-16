import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Search } from "lucide-react";

interface JournalEntry {
  id: number;
  date: string;
  description: string;
  entries: { account: string; debit: number; credit: number }[];
}

const initialJournalEntries: JournalEntry[] = [
  {
    id: 1,
    date: "2024-12-15",
    description: "Received payment from Acme Corp",
    entries: [
      { account: "Cash", debit: 12500, credit: 0 },
      { account: "Accounts Receivable", debit: 0, credit: 12500 },
    ],
  },
  {
    id: 2,
    date: "2024-12-14",
    description: "Purchased office supplies",
    entries: [
      { account: "Office Supplies", debit: 345, credit: 0 },
      { account: "Cash", debit: 0, credit: 345 },
    ],
  },
  {
    id: 3,
    date: "2024-12-13",
    description: "Paid monthly rent",
    entries: [
      { account: "Rent Expense", debit: 4500, credit: 0 },
      { account: "Cash", debit: 0, credit: 4500 },
    ],
  },
  {
    id: 4,
    date: "2024-12-12",
    description: "Sales revenue from TechStart",
    entries: [
      { account: "Accounts Receivable", debit: 8750, credit: 0 },
      { account: "Sales Revenue", debit: 0, credit: 8750 },
    ],
  },
  {
    id: 5,
    date: "2024-12-10",
    description: "Employee salaries payment",
    entries: [
      { account: "Salaries Expense", debit: 15000, credit: 0 },
      { account: "Cash", debit: 0, credit: 15000 },
    ],
  },
];

export default function GeneralJournal() {
  const [search, setSearch] = useState("");
  const [entries] = useState<JournalEntry[]>(initialJournalEntries);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredEntries = entries.filter((entry) =>
    entry.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">General Journal</h1>
          <p className="text-muted-foreground">
            Record and view all journal entries.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>New Journal Entry</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Enter transaction description" />
              </div>
              <div className="space-y-2">
                <Label>Debit Account</Label>
                <div className="flex gap-2">
                  <Input placeholder="Account name" className="flex-1" />
                  <Input placeholder="Amount" type="number" className="w-32" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Credit Account</Label>
                <div className="flex gap-2">
                  <Input placeholder="Account name" className="flex-1" />
                  <Input placeholder="Amount" type="number" className="w-32" />
                </div>
              </div>
              <Button className="w-full" onClick={() => setIsDialogOpen(false)}>
                Save Entry
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="animate-slide-up flex items-center gap-4" style={{ animationDelay: "50ms" }}>
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search entries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Journal Entries */}
      <div className="animate-slide-up space-y-4" style={{ animationDelay: "100ms" }}>
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-xl border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
              <div>
                <p className="font-semibold text-card-foreground">
                  {entry.description}
                </p>
                <p className="text-sm text-muted-foreground">{entry.date}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Entry #{entry.id}
              </span>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-muted-foreground">Account</TableHead>
                  <TableHead className="text-right text-muted-foreground">
                    Debit
                  </TableHead>
                  <TableHead className="text-right text-muted-foreground">
                    Credit
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entry.entries.map((line, index) => (
                  <TableRow key={index} className="border-border">
                    <TableCell
                      className={`font-medium ${line.credit > 0 ? "pl-8" : ""}`}
                    >
                      {line.account}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {line.debit > 0 ? `$${line.debit.toLocaleString()}` : ""}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {line.credit > 0 ? `$${line.credit.toLocaleString()}` : ""}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}
