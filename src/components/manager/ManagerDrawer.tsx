import {
  Drawer,
  Avatar,
  Box,
  Button,
  Typography,
  styled,
  DrawerProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import avatarDB from "../../assets/dashboardAvt.png";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HelpIcon from "@mui/icons-material/Help";
import QuizIcon from "@mui/icons-material/Quiz";
import { JsxElement } from "typescript";
import { ReactElement } from "react";

interface IStyledDrawerProps extends DrawerProps {
  width?: string;
}
const StyledPcDrawer = styled(Drawer)<IStyledDrawerProps>(
  ({ width, theme }) => ({
    flex: "0 0 auto",
    width: width,
    "& .MuiDrawer-paper": {
      backgroundColor: "#d9d9d9",
      display: "flex",
      alignItems: "center",
      width: width,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }),
);
const StyledMobileDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "width",
})<IStyledDrawerProps>(({ width, theme }) => ({
  flex: "0 0 auto",
  width: width,
  "& .MuiDrawer-paper": {
    backgroundColor: "#d9d9d9",
    display: "flex",
    alignItems: "center",
    width: width,
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const StyledAvatar = styled(Avatar)({
  marginTop: "40px",
  marginBottom: "20px",
  width: "180px",
  height: "180px",
});

const LogoutButton = styled(Button)({
  position: "fixed",
  bottom: "20px",
  width: "174px",
  height: "60px",
  backgroundColor: "#c9cbcb",
  border: "solid 1px",
});

interface IProps {
  width: string;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}
export default function ManagerDrawer(props: IProps) {
  const { width, isMobileOpen, onCloseMobile } = props;

  function RenderActionList() {
    const actions: { icon: ReactElement; text: string }[] = [
      { icon: <PersonAddIcon />, text: "User Manager" },
      { icon: <HelpIcon />, text: "Test Manager" },
      { icon: <QuizIcon />, text: "Test Quiz" },
    ];
    return (
      <List>
        {actions.map((a) => (
          <ListItem key={a.text}>
            <ListItemIcon>{a.icon}</ListItemIcon>
            <ListItemText>{a.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }
  return (
    <>
      <StyledPcDrawer
        variant="persistent"
        anchor="left"
        open={true}
        width={width}
      >
        <StyledAvatar src={avatarDB}></StyledAvatar>
        {RenderActionList()}
        <LogoutButton>LOGOUT</LogoutButton>
      </StyledPcDrawer>
      <StyledMobileDrawer
        variant="temporary"
        anchor="left"
        open={isMobileOpen}
        onClose={onCloseMobile}
        width={width}
      >
        <StyledAvatar src={avatarDB}></StyledAvatar>
        {RenderActionList()}
        <LogoutButton>LOGOUT</LogoutButton>
      </StyledMobileDrawer>
    </>
  );
}
