import {
  Drawer,
  Avatar,
  Box,
  Button,
  Typography,
  styled,
  DrawerProps,
} from "@mui/material";
import avatarDB from "../../assets/dashboardAvt.png";

interface IStyledDrawerProps extends DrawerProps {
  width?: string;
}
const StyledPcDrawer = styled(Drawer)<IStyledDrawerProps>(
  ({ width, theme, ...rest }) => ({
    flex: "0 0 auto",
    width: width,
    display: { xs: "none", sm: "block" },
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
const StyledMobileDrawer = styled(Drawer)<IStyledDrawerProps>(
  ({ width, theme, ...rest }) => ({
    flex: "0 0 auto",
    width: width,
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      backgroundColor: "#d9d9d9",
      display: "flex",
      alignItems: "center",
      width: width,
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }),
);

const StyledAvatar = styled(Avatar)({
  marginTop: "40px",
  marginBottom: "20px",
  width: "180px",
  height: "180px",
});

const StyledUserInfoContainer = styled(Box)({
  padding: "0 5px",
  "& h5": {
    fontWeight: "600",
    lineHeight: "1/5",
  },
});

const LogoutButton = styled(Button)({
  position: "fixed",
  bottom: "20px",
  width: "174px",
  height: "60px",
  backgroundColor: "#c9cbcb",
  border: "solid 1px",
});

interface IExamDrawer {
  width: string;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}
export default function ExamDrawer(props: IExamDrawer) {
  const { width, isMobileOpen, onCloseMobile } = props;
  return (
    <>
      <StyledMobileDrawer
        variant="temporary"
        anchor="left"
        open={isMobileOpen}
        onClose={onCloseMobile}
        width={width}
      >
        <StyledAvatar src={avatarDB}></StyledAvatar>
        <StyledUserInfoContainer>
          <Typography variant="h5">User: thanhnh@gmai...</Typography>
          <Typography variant="h5">Point: 2468</Typography>
        </StyledUserInfoContainer>
        <LogoutButton>LOGOUT</LogoutButton>
      </StyledMobileDrawer>
    </>
  );
}
