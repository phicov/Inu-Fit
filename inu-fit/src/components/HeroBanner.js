import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#fba328',
      dark: '#d18212',
      contrastText: '#fff'
    }
  },
});


const HeroBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { lg: 'auto', xs: '60vh'},
        mt: { lg: "212px", xs: "180px" },
        ml: { lg: "50px", xs: '0px' },
        textAlign: { lg: "start", xs: "center" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#fba328" fontWeight="600" fontSize="26px" zIndex={1}>
        Shiba Inu Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        zIndex={1}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3} zIndex={1}>
        Check out our most effective exercises
      </Typography>
      <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        href="#exercises"
        zIndex={1}
        sx={{
          padding: "10px",
          width: "200px",
          margin: { lg: "0", xs: "0 auto" },
        }}
      >
        Explore Exercises
      </Button>
      </ThemeProvider>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize={220}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
