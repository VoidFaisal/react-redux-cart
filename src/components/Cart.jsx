import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ShoppingCartIcon,XMarkIcon } from "@heroicons/react/24/outline";
import Badge from "@mui/material/Badge";
export default function Cart() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-4"
      >
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon className="h-6 w-6" />
        </Badge>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
 <div className="relative max-w-sm p-6 bg-white">
          <XMarkIcon
            className="absolute cursor-pointer h-6 w-10 top-0 right-0 font-extrabold ml-4"
            onClick={handleClose}
          />
          
            <p className="font-normal text-gray-700 dark:text-gray-400">
            your cart is empty
            </p>
          
        </div>
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
