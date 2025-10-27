"use client";
//#region
import { House } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
//#endregion

export default function Navbar() {
  return (
    <Card className={"py-2 border-x-0 rounded-none"}>
      <CardContent className={"px-3 flex items-center justify-between"}>
        {/* <HomeBtn /> */}
        <PathComponent />
        <ModeToggle className="" />
      </CardContent>
    </Card>
  );
}

function HomeBtn() {
  const router = useRouter();
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={() => {
        router.push("/");
      }}
    >
      <House />
    </Button>
  );
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function PathComponent() {
  const path = usePathname();
  const pathArray = path.split("/").filter((l) => l.length != 0);
  var glbLink = ""

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathArray &&
          pathArray.map((link, index) => {
            glbLink += `/${link}`;
            return (
              <div className="flex items-center gap-1" key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={glbLink}>{link}</BreadcrumbLink>
                </BreadcrumbItem>
              </div>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
