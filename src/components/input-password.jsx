"use client"

import { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Eye, EyeOff } from "lucide-react";

export default function InputPassword({id, name, className="", placeholder="", ref, showStart=false}) {
    const [show, setShow] = useState(showStart)

    return (
    <InputGroup>
      <InputGroupInput className={className} placeholder={placeholder} type={show ? "text" : "password"} id={id} name={name} ref={ref}/>
      <InputGroupAddon className={"cursor-pointer"} align="inline-end" onClick={()=>{setShow(!show)}}>
        {show ? <Eye /> : <EyeOff />}
      </InputGroupAddon>
    </InputGroup>
  );
}
