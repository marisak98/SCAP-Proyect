import { Droplet } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div>
      <a href="/" className="flex flex-items-center gap-2">
        <Droplet className="stroke h-11 w-11 stroke-blue-500 stroke-[1.5]" />
        <div className="text-center font-bold">
          <span className="text-red-500 bg-clip-text text-3xl leading-tight tracking-tighter">
            JAA
          </span>
          <span className="text-black bg-clip-text text-3xl leading-tight tracking-tighter">
            PS
          </span>
        </div>
      </a>
    </div>
  );
}

export function LogoMovil() {
  return (
    <div>
      <a href="/" className="flex flex-items-center gap-2">
        <div className="text-center font-bold">
          <span className="text-red-500 bg-clip-text text-3xl leading-tight tracking-tighter">
            JAA
          </span>
          <span className="text-black bg-clip-text text-3xl leading-tight tracking-tighter">
            PS
          </span>
        </div>
      </a>
    </div>
  );
}

export default Logo;
