"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye } from "lucide-react";
import InputPassword from "@/components/input-password";

export default function UsersDetailPage() {
  const state = useRef();
  const role = useRef();
  const username = useRef();
  const password = useRef();
  const name = useRef();
  const surname = useRef();
  const email = useRef();
  const tel = useRef();

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-6">
        <Card className={"w-full"}>
          <CardContent className={"flex flex-col gap-6"}>
            {/* prima riga */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label required={true}>Stato</Label>
                <Select defaultValue="enabled">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="enabled">Attivo</SelectItem>
                      <SelectItem value="disabled">Disattivo</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label required={true}>Ruolo</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleziona ruolo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="enabled">Admin</SelectItem>
                      <SelectItem value="role1">role1</SelectItem>
                      <SelectItem value="role2">role2</SelectItem>
                      <SelectItem value="role3">role3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* seconda riga */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label required={true}>Username</Label>
                <Input
                  id="username"
                  name="username"
                  ref={username}
                  autoComplete="off"
                />
              </div>
              <div className="grid gap-3">
                <Label required={true}>Password</Label>
                <InputPassword></InputPassword>
              </div>
            </div>

            {/* terza riga */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label required={true}>Nome</Label>
                <Input id="name" name="name" ref={name} autoComplete="off" />
              </div>
              <div className="grid gap-3">
                <Label required={true}>Cognome</Label>
                <Input
                  id="surname"
                  name="surname"
                  ref={surname}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* quarta riga */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label required={true}>Email</Label>
                <Input id="email" name="email" ref={email} autoComplete="off" />
              </div>
              <div className="grid gap-3">
                <Label required={true}>Telefono</Label>
                <Input id="tel" name="tel" ref={tel} autoComplete="off" />
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Conferma</Button>
          <Button>Reset password</Button>
          <Button variant="danger">Elimina</Button>
          <Button variant={"outline"}>Indietro</Button>
        </div>
      </div>
    </div>
  );
}
