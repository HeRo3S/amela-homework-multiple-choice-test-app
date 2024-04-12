import { AppBar, IconButton, Toolbar, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "static",
  },
}));

interface IProps {
  onClickDrawerButton: () => void;
}
export default function ExamAppbar(prop: IProps) {
  const { onClickDrawerButton } = prop;
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <IconButton onClick={onClickDrawerButton}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
}
