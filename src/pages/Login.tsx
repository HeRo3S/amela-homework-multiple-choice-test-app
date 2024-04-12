import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import backgroundImg from "../assets/loginBG.png";
import loginAvt from "../assets/loginAvt.png";
import usernameIcon from "../assets/icon username.png";
import passwordIcon from "../assets/icon password.png";

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "1440px",
  height: "1024px",
  flexShrink: 0,

  [theme.breakpoints.down("sm")]: {
    position: "relative",
    width: "1028px",
    height: "782px",
    top: "-75px",
    left: "-40px",
  },
}));

const LoginPopup = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: "155px",
  left: "749px",
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

  [theme.breakpoints.down("sm")]: {
    top: "210px",
    left: "0px",
    transform: "scale(0.6)",
  },
}));

const LoginAvatarPlaceholder = styled(Avatar)(({ theme }) => ({
  width: "177px",
  height: "177px",

  backgroundColor: "rgba(153, 148, 148, 0.89)",
  border: "solid 3px",
  borderColor: "#FBBC1A",
}));
const AvatarImg = styled("img")({
  width: "150px",
  height: "150px",
});

const InputPlaceholder = styled(Box)({
  width: "433px",
  height: "97px",
  display: "flex",
  alignItems: "flex-end",
  backgroundColor: "#F3F1F1",
  borderRadius: "4px",
});

const StyledTextField = styled(TextField)({
  flexGrow: "auto",
  height: "97px",
  "& input": {
    paddingTop: "0",
    paddingBottom: "0",
    height: "97px",
    fontSize: "20px",
  },
});

const StyledCheckboxControlLabel = styled(FormControlLabel)({
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

const StyledButton = styled(Button)({
  width: "433px",
  height: "70px",
  backgroundColor: "#D9D9D9",
  fontFamily: "Inter",
  fontSize: "20",
  fontStyle: "#000000",
});

function Login() {
  return (
    <BackgroundContainer>
      <LoginPopup container>
        <LoginAvatarPlaceholder variant="circular">
          <AvatarImg src={loginAvt}></AvatarImg>
        </LoginAvatarPlaceholder>
        <InputPlaceholder>
          <Avatar
            variant="square"
            src={usernameIcon}
            sx={{ width: "115px", height: "97px" }}
          ></Avatar>
          <StyledTextField
            fullWidth
            placeholder="username"
            // InputProps={{ style: { height: "97px", fontSize: "20px" } }}
          ></StyledTextField>
        </InputPlaceholder>
        <InputPlaceholder>
          <Avatar
            variant="square"
            sx={{ width: "115px", height: "97px", backgroundColor: "#F3F1F1" }}
          >
            <img style={{ width: "55px", height: "55px" }} src={passwordIcon} />
          </Avatar>
          <StyledTextField
            fullWidth
            placeholder="password"
            InputProps={{ style: { height: "97px" } }}
          ></StyledTextField>
        </InputPlaceholder>
        <StyledCheckboxControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />
        <StyledButton>LOGIN</StyledButton>
      </LoginPopup>
    </BackgroundContainer>
  );
}

export default Login;
