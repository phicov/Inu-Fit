import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link>
        <img
          src={Logo}
          alt="logo"
          style={{
            maxWidth: "48px",
            width: "100%",
            height: "100%",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            fontFamily: "sans-serif",
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "2px solid #fba328",
          }}
        >
          Home
        </Link>
        <a
          href="/#exercises"
          style={{
            fontFamily: "sans-serif",
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "2px solid #fba328",
            
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
