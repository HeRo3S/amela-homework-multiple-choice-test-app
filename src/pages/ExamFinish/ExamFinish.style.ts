import { Box, styled } from "@mui/material";

export const PageContainer = styled(Box)({
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#c4c4c4",
});

export const MainContainer = styled(Box)({
  display: "grid",
  flexDirection: "column",
  gridTemplateRows: "1fr 3fr 2fr",
  width: "60%",
  height: "50%",
  padding: "10px 20px",
  backgroundColor: "#d9d9d9",

  "& *": {
    alignSelf: "center",
  },
});
