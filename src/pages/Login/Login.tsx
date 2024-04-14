import { Avatar, Checkbox, Grid } from "@mui/material";
import loginAvt from "../../assets/loginAvt.png";
import usernameIcon from "../../assets/icon username.png";
import passwordIcon from "../../assets/icon password.png";
import {
  AvatarImg,
  BackgroundContainer,
  GridLoginPopupContainer,
  InputPlaceholder,
  LoginAvatarPlaceholder,
  LoginPopup,
  StyledButton,
  StyledCheckboxControlLabel,
  StyledTextField,
} from "./Login.style";

function Login() {
  return (
    <BackgroundContainer container>
      <Grid item md={4} xs={0} />
      <GridLoginPopupContainer item xs>
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
              sx={{
                width: "115px",
                height: "97px",
                backgroundColor: "#F3F1F1",
              }}
            >
              <img
                style={{ width: "55px", height: "55px" }}
                src={passwordIcon}
              />
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
      </GridLoginPopupContainer>
    </BackgroundContainer>
  );
}

export default Login;
