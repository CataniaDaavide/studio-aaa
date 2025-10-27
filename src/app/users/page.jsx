"use client";
import DataTableDemo from "@/components/data-table";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// === Main table component ===
export default function UsersPage() {
  return (
    <Card className="w-full flex justify-center gap-0 p-0">
      <div className="flex items-center justify-between gap-3 border-b p-5">
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
              <DropdownMenuItem onClick={() => {}}>EXCEL</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>CSV</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5 border-b">
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

      {/* tabella */}
      <DataTableDemo />

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 gap-3 p-5">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </div>
    </Card>
  );
}

