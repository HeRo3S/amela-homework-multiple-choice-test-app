import { useState } from "react";
import ManagerDrawer from "../../components/manager/ManagerDrawer";
import ManagerAppBar from "../../components/manager/ManagerAppbar";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DummyToolbar from "../../components/common/DummyToolbar";
import {
  LocalCSSProperties,
  StyledContentContainer,
  StyledMainContainer,
  StyledPageTitleContainer,
} from "./NewTopicCreator.style";

export default function NewTopicCreator() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const onCloseMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };
  const onClickMobileDrawerButton = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <ManagerAppBar
        name="Test manager"
        onClickDrawerButton={onClickMobileDrawerButton}
      />
      <ManagerDrawer
        width={LocalCSSProperties.drawerWidth}
        isMobileOpen={isMobileDrawerOpen}
        onCloseMobile={onCloseMobileDrawer}
      ></ManagerDrawer>
      <StyledMainContainer>
        <DummyToolbar />
        <StyledContentContainer>
          <StyledPageTitleContainer>
            <Typography variant="h5">Thêm mới test</Typography>
            <Breadcrumbs separator=">" aria-label="breadcrumbs">
              <Link underline="hover" color="inherit" href="/">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link underline="hover" color="inherit" href="/quiz_manager">
                <Typography variant="body1">Test quiz manager</Typography>
              </Link>
              <Typography color="text.primary" variant="body1">
                new test
              </Typography>
            </Breadcrumbs>
          </StyledPageTitleContainer>
          <Grid container columns={7} columnSpacing={1}>
            <Grid item xs={7}>
              <Typography>Topic name: </Typography>
              <TextField></TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography>Description: </Typography>
              <TextField></TextField>
            </Grid>
            <Grid item xs={4}>
              <Typography>Độ khó : </Typography>
              <Select defaultValue={"Medium"}>
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container columns={11}></Grid>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button>ADD New</Button>
          </Box>
        </StyledContentContainer>
      </StyledMainContainer>
    </Box>
  );
}
