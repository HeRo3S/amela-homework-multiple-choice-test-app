import { Toolbar, styled } from "@mui/material";

const DummyToolbar = styled(Toolbar)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export default DummyToolbar;
