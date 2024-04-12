import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#545151",
  fontcolor: "#ffffff",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "static",
  },
}));

interface IProps {
  name: string;
  onClickDrawerButton: () => void;
}
export default function ManagerAppBar(prop: IProps) {
  const { name, onClickDrawerButton } = prop;
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <IconButton onClick={onClickDrawerButton}>
          <MenuIcon fontSize="large" sx={{ backgroundColor: "#d9d9d9" }} />
        </IconButton>
        <Typography component="div" variant="h6">
          {name}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}
