"use client"
//#region
import { House } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
//#endregion

export default function Navbar() {
  return (
    <Card className={"py-4 border-x-0 rounded-none"}>
      <CardContent className={"px-4 flex items-center justify-between"}>
        <HomeBtn />
        <ModeToggle className="" />
      </CardContent>
    </Card>
  );
}


function HomeBtn(){
  const router = useRouter();
  return(
    <Button size={"icon"} variant={"outline"} onClick={
      ()=> {router.push("/")}
    }><House /></Button>
  )
}
