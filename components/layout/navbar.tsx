import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="hidden h-24  md:grid md:px-10 lg:px-20 items-center grid-cols-12 gap-4 border-b-2 border-border">
      <span className="col-span-1 lg:col-span-4 block">
        <Image
          className="hidden lg:block w-auto h-auto"
          height={64}
          width={118}
          priority={true}
          src="/images/Airbnb_Logo_Long.png"
          alt="logo-name"
        />
        <Image
          className="lg:hidden"
          height={23}
          width={32}
          priority={true}
          src="/images/Airbnb_Logo.png"
          alt="logo"
        />
      </span>
      <span className="col-span-6 lg:col-span-4 flex items-center justify-center">
        <Paper className="flex rounded-full border-border border hover:drop-shadow-md">
          <Button className="py-3 pl-6 pr-4 rounded-l-full normal-case truncate font-normal text-black hover:bg-transparent">
            Anywhere
          </Button>
          <Divider orientation="vertical" flexItem className="my-3" />
          <Button className="py-3 px-4 normal-case truncate font-normal text-black hover:bg-transparent">
            Any week
          </Button>
          <Divider orientation="vertical" flexItem className="my-3" />
          <Button className="pl-4 rounded-r-full normal-case truncate font-light text-stone-400 hover:bg-transparent">
            <span className="mr-2">Add guests</span>
            <SearchIcon className="p-2 w-8 h-8 rounded-full bg-primaryLogo text-white" />
          </Button>
        </Paper>
      </span>
      <span className="col-span-5 lg:col-span-4 flex justify-end items-center gap-1">
        <Button
          className="px-4 rounded-full text-black normal-case hover:bg-hoverBg"
          variant="text"
        >
          Airbnb your home
        </Button>
        <IconButton aria-label="Language" className="hover:bg-hoverBg">
          <LanguageIcon />
        </IconButton>
        <Button
          className="p-2 rounded-full text-black hover:bg-hoverBg"
          variant="contained"
        >
          <MenuIcon />
          <AccountCircleIcon />
        </Button>
      </span>
    </nav>
  );
}
