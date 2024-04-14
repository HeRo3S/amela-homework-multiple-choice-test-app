import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import backgroundImg from "../../assets/loginBG.png";

export const BackgroundContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "cover",

  backgroundPosition: "contain",
  width: "100vw",
  height: "100vh",

  [theme.breakpoints.down("md")]: {
    position: "relative",
    width: "auto",
  },
}));

export const GridLoginPopupContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LoginPopup = styled(Grid)(({ theme }) => ({
  // position: "absolute",
  paddingTop: "90px",
  width: "590px",
  height: "752px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#999595",
  border: "solid 3px",
  borderColor: "#FBBC1A",
  borderRadius: "6px",
  /* styles for child elements with the class */
  "> *": {
    position: "relative",
    top: "-89px",
  },

  [theme.breakpoints.down("md")]: {
    transform: "scale(0.8)",
  },
  [theme.breakpoints.down("sm")]: {
    transform: "scale(0.6)",
  },
}));

export const LoginAvatarPlaceholder = styled(Avatar)(({ theme }) => ({
  width: "177px",
  height: "177px",

  backgroundColor: "rgba(153, 148, 148, 0.89)",
  border: "solid 3px",
  borderColor: "#FBBC1A",
}));
export const AvatarImg = styled("img")({
  width: "150px",
  height: "150px",
});

export const InputPlaceholder = styled(Box)({
  width: "433px",
  height: "97px",
  display: "flex",
  alignItems: "flex-end",
  backgroundColor: "#F3F1F1",
  borderRadius: "4px",
});

export const StyledTextField = styled(TextField)({
  flexGrow: "auto",
  height: "97px",
  "& input": {
    paddingTop: "0",
    paddingBottom: "0",
    height: "97px",
    fontSize: "20px",
  },
});

export const StyledCheckboxControlLabel = styled(FormControlLabel)({
  height: "32px",
  width: "433px",
  flexShrink: "0",
  font: "Inter",
  fontSize: "bold",
  "& span": {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: "bold",
  },
  "& .MuiCheckbox-root": {},
});

export const StyledButton = styled(Button)({
  width: "433px",
  height: "70px",
  backgroundColor: "#D9D9D9",
  fontFamily: "Inter",
  fontSize: "20",
  fontStyle: "#000000",
});
