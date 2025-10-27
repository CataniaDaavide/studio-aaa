"use client";

"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import DataTableDemo from "@/components/data-table";

// === Main table component ===
function DataTable({ data, columns }) {
  return (
    <Card className="w-full p-0 gap-0">
      <div className="flex items-center justify-between gap-3 border-b p-6">
        {/* Search bar */}
        <Input
          placeholder="Search..."
          // value={filter ?? ""}
          // onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-3">
          <Button variant={"primary"}>Inserisci</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="lg">
                Esporta
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => {}}>
                EXCEL
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>
                CSV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6 border-b">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* filtri */}
          <div className="grid gap-1">
            <Label>Nome utente</Label>
            <Input />
          </div>
          <div className="grid gap-1">
            <Label>Nome</Label>
            <Input />
          </div>
          <div className="grid gap-1">
            <Label>Ruolo</Label>
            <Input />
          </div>
          <div className="grid gap-1">
            <Label>Stato</Label>
            <Input />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Cerca</Button>
          <Button variant="outline">Annulla</Button>
        </div>
      </div>

      <DataTableDemo/>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 gap-3 p-6">
        <Button variant="outline" size="lg">
          Previous
        </Button>
        <Button variant="outline" size="lg">
          Next
        </Button>
      </div>
    </Card>
  );
}

// === Page ===
export default function UsersPage() {
  return (
    <div className="w-full flex justify-center p-4">
      <DataTable />
    </div>
  );
}
