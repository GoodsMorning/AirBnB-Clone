import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <nav className="hidden sm:grid py-6 px-10 items-center grid-cols-12 gap-4 border-y-2 border-border bg-white text-black">
      <span className="col-span-8 flex items-center">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
        />
      </span>
      <span className="col-span-4 grid justify-items-end">
        <Button className="p-2 rounded-full text-black" variant="contained">
            <MenuIcon/>
            <AccountCircleIcon/>
        </Button>
      </span>
    </nav>
  );
}
